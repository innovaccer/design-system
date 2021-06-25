import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { OverlayFooter, OverlayFooterProps } from '@/components/molecules/overlayFooter';
import { OverlayHeader, OverlayHeaderProps } from '@/components/molecules/overlayHeader';
import { OverlayBody } from '@/components/molecules/overlayBody';
import { Row, Column, Backdrop, OutsideClick, Button } from '@/index';
import { ColumnProps } from '@/index.type';
import { getWrapperElement, getUpdatedZIndex } from '@/utils/overlayHelper';

export type Dimension = 'small' | 'medium' | 'large';
type FooterOptions = {
  actions: OverlayFooterProps['actions']
};
export interface ModalProps extends BaseProps {
  /**
   * Callback for `Modal` close event on backdrop click
   *
   * ** Callback will be deprecated soon. Will only support boolean value. **
   *
   * ** Use `boolean` value if you are using `headerOptions` and `onClose` **
   */
  backdropClose?: boolean | ((event?: Event, reason?: string) => void);
  /**
   * Dimension of `Modal`
   */
  dimension: Dimension;
  /**
   * Handles open/close state
   */
  open: boolean;
  /**
   * onClose callback to be called on `Modal` close
   */
  onClose?: (event?: Event | React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
  /**
   * Header options (doesn't work if `header` prop is used)
   *
   * Use `header` prop if custom header is needed.
   *
   * <pre className="DocPage-codeBlock">
   * Header:
   * {
   *    heading: string;
   *    subHeading?: string;
   *    backIcon?: boolean;
   *    backIconCallback?: (e) => void;
   *    backButton?: boolean;
   *    backButtonCallback?: (e) => void;
   * }
   * </pre>
   *
   * **`backIcon` and `backIconCallback` will soon be deprecated**
   *
   * | Name | Description |
   * | --- | --- |
   * | heading | Heading of `Sidesheet` |
   * | subHeading | Subheading of `Sidesheet` |
   * | backButton | Determines if back button is visible |
   * | backButtonCallback | Callback called when back button is clicked |
   * | backIcon | Determines if back button is visible |
   * | backIconCallback | Callback called when back button is clicked |
   *
   * ** Don't use composition of `ModalHeader`, `ModalBody` and `ModalFooter` will be deprecated soon. **
   */
  headerOptions?: OverlayHeaderProps;
  /**
   * header component to be used as modal header.
   * close button is not part of header so it will not be replaced.
   */
  header?: React.ReactNode;
  /**
   * Custom `footer` component
   *
   * ** Don't use composition of `ModalHeader`, `ModalBody` and `ModalFooter` will be deprecated soon. **
   */
  footer?: React.ReactNode;
  /**
   * Footer options (doesn't work if `footer` prop is used).
   *
   * Use `footer` prop if custom footer is needed.
   *
   * <pre className="DocPage-codeBlock">
   *  OverlayFooterOptions {
   *    actions: ButtonProps[];
   *  }
   * ([ButtonProps](https://innovaccer.github.io/design-system/?path=/docs/components-button-all--all))
   * </pre>
   */
  footerOptions?: FooterOptions;
  /**
   * Element to be rendered
   *
   * ** No need to write `ModalHeader`, `ModalBody` and `ModalFooter` anymore **
   * ** if you are using `headerOptions` and `footer` **
   * ** Just pass the content to be rendered in the `Modal` body. **
   *
   * ** Support for composition of `ModalHeader`, `ModalBody` and `ModalFooter` will be deprecated soon. **
   */
  children?: React.ReactNode;
  /**
   * Show dividers in the header and the footer.
   */
  seperator?: boolean;
}

interface ModalState {
  open: boolean;
  animate: boolean;
  zIndex?: number;
}

/**
 * ** NOTE: Use `headerOptions`, `header`, `footerOptions`, `footer`, `onClose` and `backdropClose`(boolean). **
 * ** Support for composition using `ModalHeader`, `ModalBody` and `ModalFooter` will be deprecated soon. **
 */
class Modal extends React.Component<ModalProps, ModalState> {
  modalRef = React.createRef<HTMLDivElement>();
  element: Element;

  static defaultProps = {
    dimension: 'medium'
  };

  constructor(props: ModalProps) {
    super(props);

    this.element = getWrapperElement();

    this.state = {
      open: props.open,
      animate: props.open,
    };

    this.onOutsideClickHandler = this.onOutsideClickHandler.bind(this);
  }

  componentDidUpdate(prevProps: ModalProps) {
    if (prevProps.open !== this.props.open) {
      if (this.props.open) {
        const zIndex = getUpdatedZIndex({
          element: this.element,
          containerClassName: '.Overlay-container--open',
          elementRef: this.modalRef
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
    const { backdropClose, onClose } = this.props;
    const { open } = this.state;

    if (open) {
      if (onClose) onClose(event, 'OutsideClick');
      else if (typeof backdropClose === 'function') backdropClose(event, 'OutsideClick');
    }
  }

  render() {
    const { animate, open, zIndex } = this.state;
    const {
      className,
      backdropClose,
      dimension,
      children,
      headerOptions,
      header,
      footerOptions,
      seperator,
      footer,
      onClose
    } = this.props;

    const classes = classNames({
      Modal: true,
      'Modal--open': open,
      'Modal-animation--open': animate,
      'Modal-animation--close': !animate,
    }, className);

    const headerClass = classNames({
      ['Modal-header']: true,
      ['Modal-header--withSeperator']: seperator,
    });

    const footerClass = classNames({
      ['Modal-footer']: true,
      ['Modal-footer--withSeperator']: seperator,
    });

    const ContainerClass = classNames({
      ['Row']: true,
      ['Overlay-container']: true,
      ['Overlay-container--open']: open,
    });

    const baseProps = extractBaseProps(this.props);
    const sizeMap: Record<ModalProps['dimension'], Partial<ColumnProps>> = {
      small: {
        size: '3',
        sizeL: '4',
        sizeM: '4',
        sizeXS: '10'
      },
      medium: {
        size: '4',
        sizeL: '6',
        sizeM: '6',
        sizeXS: '10'
      },
      large: {
        size: '6',
        sizeL: '8',
        sizeM: '8',
        sizeXS: '10'
      }
    };

    const ModalContainer = (
      <Row
        data-test="DesignSystem-ModalContainer"
        className={ContainerClass}
        data-layer={true}
        style={{ zIndex }}
      >
        <Column
          data-test="DesignSystem-Modal"
          {...baseProps}
          className={classes}
          {...sizeMap[dimension]}
          ref={this.modalRef}
        >
          {(headerOptions || header) && (
            <div className={headerClass}>
              <Column>
                {!header && (
                  <OverlayHeader
                    data-test="DesignSystem-Modal--header"
                    {...headerOptions}
                  />
                )}

                {!!header && header}
              </Column>
              <Column className="flex-grow-0">
                <Button
                  icon="close"
                  appearance="transparent"
                  data-test="DesignSystem-Modal--CloseButton"
                  onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                    if (onClose) onClose(event, 'IconClick');
                  }}
                />
              </Column>
            </div>
          )}
          {children && (
            <>
              {(headerOptions || footerOptions || footer || header) ? (
                <OverlayBody
                  className="Modal-body"
                >
                  {this.props.children}
                </OverlayBody>
              ) : (
                  children
                )}
            </>
          )}
          {
            (!!footer || !!footerOptions) &&
            (
              <OverlayFooter
                data-test="DesignSystem-Modal--footer"
                {...footerOptions}
                open={open}
                className={footerClass}
              >
                {footer}
              </OverlayFooter>
            )}
        </Column>
      </Row>
    );

    const ModalWrapper = backdropClose ? (
      <OutsideClick
        data-test="DesignSystem-Modal--OutsideClick"
        onOutsideClick={this.onOutsideClickHandler}
      >
        {ModalContainer}
      </OutsideClick>
    ) : ModalContainer;

    const WrapperElement = ReactDOM.createPortal(
      ModalWrapper,
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

export default Modal;
