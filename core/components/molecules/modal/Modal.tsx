import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { Row, Column, Backdrop, OutsideClick, ModalHeader, ModalBody, ModalFooter } from '@/index';
import { ColumnProps, ModalHeaderProps } from '@/index.type';
import { getWrapperElement, getUpdatedZIndex } from '@/utils/overlayHelper';

export type Dimension = 'small' | 'medium' | 'large';

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
   * `ModalHeader` options
   *
   * ** Don't use composition of `ModalHeader`, `ModalBody` and `ModalFooter` along with `headerOptions`. **
   */
  headerOptions?: Omit<ModalHeaderProps, 'onClose'>;
  /**
   * Actions to be rendered in `ModalFooter`
   *
   * ** Don't use composition of `ModalHeader`, `ModalBody` and `ModalFooter` along with `footer`. **
   */
  footer?: React.ReactNode;
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
}

interface ModalState {
  open: boolean;
  animate: boolean;
  zIndex?: number;
}

/**
 * ** NOTE: Use `headerOptions`, `footer`, `onClose` and `backdropClose`(boolean). **
 * ** Support for composition using `ModalHeader`, `ModalBody` and `ModalFooter` will be deprecated soon. **
 *
 * ** NOT RECOMMENDED: Only use composition of `ModalHeader`, `ModalBody` and `ModalFooter` **
 * ** when you are not using `headerOptions` or `footer` **
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
          containerClassName: '.Modal-container--open',
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
          setTimeout(() => {
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
    const { className, backdropClose, dimension, children, headerOptions, footer, onClose } = this.props;

    const classes = classNames({
      Modal: true,
      'Modal--open': open,
      'Modal-animation--open': animate,
      'Modal-animation--close': !animate,
    }, className);

    const ContainerClass = classNames({
      ['Row']: true,
      ['Modal-container']: true,
      ['Modal-container--open']: open,
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
          {headerOptions && (
            <ModalHeader
              onClose={(event: React.MouseEvent<HTMLElement, MouseEvent>, reason) => {
                if (onClose) onClose(event, reason);
              }}
              {...headerOptions}
            />
          )}
          {children && (
            <>
              {headerOptions || footer ? (
                <ModalBody>
                  {children}
                </ModalBody>
              ) : (
                children
              )}
            </>
          )}
          {footer && (
            <ModalFooter open={open}>
              {footer}
            </ModalFooter>
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
