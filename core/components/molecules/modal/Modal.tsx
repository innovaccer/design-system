import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
import Backdrop from '@/components/atoms/backdrop';
import OutsideClick from '@/components/atoms/outsideClick';
import { BaseProps, extractBaseProps } from '@/utils/types';

export type Dimension = 'small' | 'medium' | 'large';

export interface ModalProps extends BaseProps {
  /**
   * Callback for `Modal` close event on backdrop click
   */
  backdropClose: (event?: Event, reason?: string) => void;
  /**
   * Closes `Modal` on outside click
   */
  backdrop?: boolean;
  /**
   * Closes `Modal` on pressing escape key
   */
  closeOnEscape?: boolean;
  /**
   * Dimension of `Modal`
   * @default "small"
   */
  dimension?: Dimension;
  /**
   * Handles open/close state
   */
  open: boolean;
  /**
   * Element to be rendered
   */
  children?: React.ReactNode;
}

interface ModalState {
  open: boolean;
  animate: boolean;
  zIndex?: number;
}

class Modal extends React.Component<ModalProps, ModalState> {
  modalRef = React.createRef<HTMLDivElement>();
  element: Element;

  constructor(props: ModalProps) {
    super(props);

    let element = document.querySelector('.Modal-wrapper');
    if (element === null) {
      element = document.createElement('div');
      element.classList.add('Modal-wrapper');
      document.body.appendChild(element);
    }

    this.element = element;

    this.state = {
      open: props.open,
      animate: props.open,
    };
  }

  componentDidUpdate(prevProps: ModalProps) {
    if (prevProps.open !== this.props.open) {
      if (this.props.open) {
        const zIndex = this.getUpdatedZIndex();
        this.setState({
          zIndex,
          open: true,
          animate: true
        });
      } else {
        this.setState({
          animate: false,
        });
        setTimeout(() => {
          this.setState({
            open: false
          });
        }, 120);
      }
    }
  }

  getUpdatedZIndex = () => {
    if (this.element === null) return;

    const elements = this.element.querySelectorAll('.Modal-container');
    if (elements.length <= 1) return;

    const siblings = Array.from(elements).filter(el => el !== this.modalRef.current);
    let zIndex = -1;

    siblings.forEach(element => {
      if (element.classList.contains('Modal-container--open')) {
        const prevZIndex = parseInt(window.getComputedStyle(element).zIndex || '0', 10);
        zIndex = Math.max(zIndex, prevZIndex + 10);
      }
    });

    return zIndex > 0 ? zIndex : undefined;
  }

  render() {
    const { animate, open, zIndex } = this.state;
    const { className, dimension, backdropClose } = this.props;

    const classes = classNames({
      Modal: true,
      [`Modal--${dimension}`]: dimension,
      'Modal--open': open,
      'Modal-animation--open': animate,
      'Modal-animation--close': !animate,
    }, className);

    const ContainerClass = classNames({
      ['Modal-container']: true,
      ['Modal-container--open']: open,
    });

    const baseProps = extractBaseProps(this.props);

    const ModalContainer = (
      <div
        className={ContainerClass}
        data-layer={true}
        style={{ zIndex }}
        ref={this.modalRef}
      >
        <div {...baseProps} className={classes}>
          {this.props.children}
        </div>
      </div>
    );

    const ModalWrapper = this.props.backdrop ? (
      <OutsideClick onOutsideClick={(event: Event) => open && backdropClose(event, 'OutsideClick')}>
        {ModalContainer}
      </OutsideClick>
    ) : ModalContainer;

    const WrapperElement = ReactDOM.createPortal(
      ModalWrapper,
      this.element
    );

    return (
      <div>
        {WrapperElement}
        <Backdrop open={this.state.open} />
      </div>
    );
  }
}

export default Modal;
