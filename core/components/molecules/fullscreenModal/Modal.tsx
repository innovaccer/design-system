import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { Row, Column, Icon } from '@/index';
import { ModalHeader, ModalHeaderProps } from './ModalHeader';
import { ModalFooter, ModalFooterProps } from './ModalFooter';
import { ColumnProps } from '@/index.type';
import { getWrapperElement, getUpdatedZIndex } from '@/utils/overlayHelper';

export type Dimension = 'medium' | 'large';

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
   * `ModalHeader` options (doesn't work if `header` prop is used).
   * use `header` prop if custom header is needed.
   *
   */
  headerOptions?: ModalHeaderProps;

  /**
   * header component to be used as modal header.
   * close button is not part of header so it will not be replaced.
   */
  header?: React.ReactNode;

  /**
   * `ModalFooter` options (doesn't work if `footer` prop is used).
   */
  footerOptions?: ModalFooterProps;

  /**
   * footer component to be used as modal footer.
   */
  footer?: React.ReactNode;

  /**
   * Element to be rendered as modal body.
   */
  children?: React.ReactNode;
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
    dimension: 'medium'
  };

  constructor(props: FullscreenModalProps) {
    super(props);

    this.element = getWrapperElement();

    this.state = {
      open: props.open,
      animate: props.open
    };
  }

  componentDidUpdate(prevProps: FullscreenModalProps) {
    if (prevProps.open !== this.props.open) {
      if (this.props.open) {
        const zIndex = getUpdatedZIndex({
          element: this.element,
          containerClassName: '.FullscreenModal-container--open',
          elementRef: this.modalRef
        });
        this.setState({
          zIndex,
          open: true,
          animate: true
        });
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
  }

  render() {
    const { animate, open, zIndex } = this.state;
    const { className, dimension, children, header, headerOptions, footer, footerOptions, onClose } = this.props;

    const classes = classNames(
      {
        FullscreenModal: true,
        'FullscreenModal--open': open,
        'FullscreenModal-animation--open': animate,
        'FullscreenModal-animation--close': !animate
      },
      className
    );

    const ContainerClass = classNames({
      ['FullscreenModal-container']: true,
      ['FullscreenModal-container--open']: open
    });

    const baseProps = extractBaseProps(this.props);
    const sizeMap: Record<FullscreenModalProps['dimension'], Partial<ColumnProps>> = {
      medium: {
        size: '4',
        sizeL: '6',
        sizeM: '6',
        sizeXS: '12'
      },
      large: {
        size: '6',
        sizeL: '8',
        sizeM: '8',
        sizeXS: '12'
      }
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
              <Row className="justify-content-between pt-6 pr-6 pb-5 pl-7">
                <Column>
                  {!header && <ModalHeader {...headerOptions} />}

                  {!!header && header}
                </Column>
                <Column className="pr-2">
                  <Icon
                    size={20}
                    name={'close'}
                    className="cursor-pointer pt-3"
                    data-test="DesignSystem-ModalHeader--CloseIcon"
                    onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) => {
                      if (onClose) onClose(event, 'IconClick');
                    }}
                  />
                </Column>
              </Row>

              <div data-test="DesignSystem-ModalBody" className="FullscreenModal-body">
                {children}
              </div>

              {
                (!!footer || !!footerOptions) &&
                (
                  <div data-test="DesignSystem-ModalFooter" className="d-flex justify-content-end p-7">
                    {!footer && <ModalFooter {...footerOptions} open={open} />}

                    {!!footer && footer}
                  </div>
                )
              }
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
