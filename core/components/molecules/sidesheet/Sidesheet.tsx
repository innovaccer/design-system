import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
import { Row, Column, Backdrop, OutsideClick, ModalBody, ModalFooter, ModalHeader } from '@/index';
import { ColumnProps, ModalHeaderProps } from '@/index.type';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { getWrapperElement, getUpdatedZIndex } from '@/utils/overlayHelper';

export type Dimension = 'regular' | 'large';

export interface SidesheetProps extends BaseProps {
  /**
   * Heading Options
   * <pre className="DocPage-codeBlock">
   * Header:
   * {
   *    heading: string;
   *    subHeading?: string;
   *    backIcon?: boolean;
   *    backIconCallback?: (e) => void;
   * }
   * </pre>
   *
   * | Name | Description |
   * | --- | --- |
   * | heading | Heading of `Sidesheet` |
   * | subHeading | Subheading of `Sidesheet` |
   * | backIcon | Determines if back icon is visible |
   * | backIconCallback | Callback called when back icon is clicked |
   */
  headerOptions: Omit<ModalHeaderProps, 'onClose'>;
  /**
   * Dimension of `Sidesheet`
   *
   * Dimension: `large` | `regular`
   */
  dimension: Dimension;
  /**
   * Handles open/close state
   */
  open: boolean;
  /**
   * Determines if footer is sticked at bottom
   */
  stickFooter?: boolean;
  /**
   * Determines if margin bottom is to be applied to modal body
   */
  withFooter?: boolean;
  /**
   * Show dividers in the header and the footer.
   */
  seperator?: boolean;
  /**
   * Element to be rendered
   */
  children?: React.ReactNode;
  /**
   * Footer component inside `Sidesheet`
   */
  footer?: React.ReactNode;
  /**
   * Determined close event on backdrop click
   */
  backdropClose?: boolean;
  /**
   * Callback called `Sidesheet` is closed
   */
  onClose?: (event?: Event | React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
}

interface SidesheetState {
  open: boolean;
  animate: boolean;
  zIndex?: number;
}

const sidesheetWidth: Record<Dimension, ColumnProps['size']> = {
  regular: '6',
  large: '10',
};

class Sidesheet extends React.Component<SidesheetProps, SidesheetState> {
  sidesheetRef = React.createRef<HTMLDivElement>();
  element: Element;

  static defaultProps = {
    dimension: 'regular',
    stickFooter: false,
    headerOptions: {},
  };

  constructor(props: SidesheetProps) {
    super(props);

    this.element = getWrapperElement();

    this.state = {
      open: props.open,
      animate: props.open,
    };

    this.onOutsideClickHandler = this.onOutsideClickHandler.bind(this);
  }

  componentDidUpdate(prevProps: SidesheetProps) {
    if (prevProps.open !== this.props.open) {
      if (this.props.open) {
        const zIndex = getUpdatedZIndex({
          element: this.element,
          containerClassName: '.Sidesheet-container--open',
          elementRef: this.sidesheetRef
        });
        this.setState({
          zIndex,
          open: true,
          animate: true
        });
      } else {
        this.setState({
          animate: false,
        }, () => {
          window.setTimeout(() => {
            this.setState({
              open: false
            });
          }, 120);
        });
      }
    }
  }

  onOutsideClickHandler(event: Event) {
    const { onClose } = this.props;
    const { open } = this.state;

    if (open) {
      if (onClose) onClose(event, 'OutsideClick');
    }
  }

  render() {
    const { animate, open, zIndex } = this.state;
    const {
      className,
      backdropClose,
      dimension,
      footer,
      seperator,
      stickFooter,
      headerOptions,
      onClose,
    } = this.props;

    const classes = classNames({
      Sidesheet: true,
      'Sidesheet--open': open,
      'Sidesheet-animation--open': animate,
      'Sidesheet-animation--close': !animate,
    }, className);

    const ContainerClass = classNames({
      ['Sidesheet-container']: true,
      ['Sidesheet-container--open']: open,
    });

    const baseProps = extractBaseProps(this.props);
    const headerObj = { ...headerOptions, seperator };

    const SidesheetContainer = (
      <Row
        data-test="DesignSystem-SidesheetContainer"
        className={ContainerClass}
        data-layer={true}
        style={{ zIndex }}
        ref={this.sidesheetRef}
      >
        <Column
          data-test="DesignSystem-Sidesheet"
          {...baseProps}
          className={classes}
          size={sidesheetWidth[dimension]}
        >
          <ModalHeader
            onClose={(event: React.MouseEvent<HTMLElement, MouseEvent>, reason) => {
              if (onClose) onClose(event, reason);
            }}
            {...headerObj}
          />
          <ModalBody
            stickFooter={stickFooter}
            withFooter={!!footer}
          >
            {this.props.children}
          </ModalBody>
          {footer && (
            <ModalFooter
              inSidesheet={true}
              stickToBottom={stickFooter}
              seperator={seperator}
            >
              {footer}
            </ModalFooter>
          )}
        </Column>
      </Row>
    );

    const SidesheetWrapper = backdropClose ? (
      <OutsideClick
        data-test="DesignSystem-Sidesheet--OutsideClick"
        onOutsideClick={this.onOutsideClickHandler}
      >
        {SidesheetContainer}
      </OutsideClick>
    ) : SidesheetContainer;

    const WrapperElement = ReactDOM.createPortal(
      SidesheetWrapper,
      this.element
    );

    return (
      <>
        {WrapperElement}
        <Backdrop open={this.state.animate} />
      </>
    );
  }
}

export default Sidesheet;
