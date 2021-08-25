import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { OverlayFooter, OverlayFooterProps } from '@/components/molecules/overlayFooter';
import { OverlayHeader, OverlayHeaderProps } from '@/components/molecules/overlayHeader';
import { OverlayBody } from '@/components/molecules/overlayBody';
import { Row, Column, Button } from '@/index';
import { ColumnProps } from '@/index.type';
import { getWrapperElement, getUpdatedZIndex, closeOnEscapeKeypress } from '@/utils/overlayHelper';
import OverlayManager from '@/utils/OverlayManager';

export type Dimension = 'medium' | 'large';
type FooterOptions = {
  actions: OverlayFooterProps['actions'];
};

export interface FullscreenModalProps extends BaseProps {
  /**
   * Dimension of `Fullscreen Modal`
   */
  dimension: Dimension;

  /**
   * Handles open/close state
   */
  open: boolean;

  /**
   * onClose callback to be called on `Fullscreen Modal` close
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
   */
  headerOptions?: OverlayHeaderProps;

  /**
   * header component to be used as modal header.
   * close button is not part of header so it will not be replaced.
   */
  header?: React.ReactNode;

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
   * footer component to be used as modal footer.
   */
  footer?: React.ReactNode;

  /**
   * Element to be rendered as modal body.
   */
  children?: React.ReactNode;
  /**
   * Closes `FullScreenModal` when `Escape` key is pressed
   */
  closeOnEscape?: boolean;
}

interface ModalState {
  open: boolean;
  animate: boolean;
  zIndex?: number;
}

class FullscreenModal extends React.Component<FullscreenModalProps, ModalState> {
  modalRef = React.createRef<HTMLDivElement>();
  element: Element;

  static defaultProps = {
    dimension: 'medium',
  };

  constructor(props: FullscreenModalProps) {
    super(props);

    this.element = getWrapperElement();

    this.state = {
      open: props.open,
      animate: props.open,
    };
  }

  onOutsideClickHandler = (event: KeyboardEvent) => {

    OverlayManager.remove(this.modalRef.current);

    if (this.props.onClose) {
      this.props.onClose(event, 'EscapePress');

    } else {
      this.setState(
        {
          animate: false
        },
        () => {
          window.setTimeout(() => {
            this.setState({
              open: false
            });
          }, 120);
        }
      );
    }
  }

  onCloseHandler = (event: KeyboardEvent) => {
    const isTopOverlay = OverlayManager.isTopOverlay(this.modalRef.current);
    closeOnEscapeKeypress(event, isTopOverlay, this.onOutsideClickHandler)
  }

  componentDidMount() {
    if (this.props.closeOnEscape) {
      if (this.state.open) {
        OverlayManager.add(this.modalRef.current);
      }
      document.addEventListener('keydown', this.onCloseHandler)
    }
  }

  componentWillUnmount() {
    if (this.props.closeOnEscape) document.removeEventListener('keydown', this.onCloseHandler)
  }

  componentDidUpdate(prevProps: FullscreenModalProps) {
    if (prevProps.open !== this.props.open) {
      if (this.props.open) {

        const zIndex = getUpdatedZIndex({
          element: this.element,
          containerClassName: '.Overlay-container--open',
          elementRef: this.modalRef,
        });

        this.setState({
          zIndex,
          open: true,
          animate: true,
        });

        if (this.props.closeOnEscape) OverlayManager.add(this.modalRef.current);

      } else {

        this.setState(
          {
            animate: false,
          },
          () => {
            window.setTimeout(() => {
              this.setState({
                open: false,
              });
            }, 120);
          }
        );

        if (this.props.closeOnEscape) OverlayManager.remove(this.modalRef.current);

      }
    }
  }

  render() {
    const { animate, open, zIndex } = this.state;
    const { className, dimension, children, header, headerOptions, footer, footerOptions, onClose } = this.props;

    const classes = classNames(
      {
        FullscreenModal: true,
        'FullscreenModal--open': open,
        'FullscreenModal-animation--open': animate,
        'FullscreenModal-animation--close': !animate,
      },
      className
    );

    const ContainerClass = classNames({
      ['Overlay-container']: true,
      ['Overlay-container--open']: open,
    });

    const baseProps = extractBaseProps(this.props);
    const sizeMap: Record<FullscreenModalProps['dimension'], Partial<ColumnProps>> = {
      medium: {
        size: '4',
        sizeL: '6',
        sizeM: '6',
        sizeXS: '12',
      },
      large: {
        size: '6',
        sizeL: '8',
        sizeM: '8',
        sizeXS: '12',
      },
    };

    const ModalContainer = (
      <div
        data-test="DesignSystem-FullscreenModalContainer"
        className={ContainerClass}
        data-layer={true}
        style={{ zIndex }}
      >
        <div data-test="DesignSystem-FullscreenModal" {...baseProps} className={classes} ref={this.modalRef}>
          <Row className="justify-content-center">
            <Column {...sizeMap[dimension]}>
              <Row className="FullscreenModal-header">
                <Column>
                  {!header && <OverlayHeader data-test="DesignSystem-FullscreenModal--header" {...headerOptions} />}

                  {!!header && header}
                </Column>
                <Column className="flex-grow-0">
                  <Button
                    icon="close"
                    appearance="transparent"
                    data-test="DesignSystem-FullscreenModal--CloseButton"
                    onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                      if (onClose) onClose(event, 'IconClick');
                    }}
                  />
                </Column>
              </Row>
              <OverlayBody data-test="DesignSystem-FullscreenModal--Body" className="FullscreenModal-body">
                {children}
              </OverlayBody>
              {(!!footer || !!footerOptions) && (
                <OverlayFooter
                  data-test="DesignSystem-FullscreenModal--footer"
                  {...footerOptions}
                  open={open}
                  className="FullscreenModal-footer"
                >
                  {footer}
                </OverlayFooter>
              )}
            </Column>
          </Row>
        </div>
      </div>
    );

    const WrapperElement = ReactDOM.createPortal(ModalContainer, this.element);

    return <>{WrapperElement}</>;
  }
}

export default FullscreenModal;
