import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Manager, Reference, Popper } from 'react-popper';
import { OutsideClick } from '@/index';
import classNames from 'classnames';

type PositionType =
  | 'auto-start'
  | 'auto'
  | 'auto-end'
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'right-start'
  | 'right'
  | 'right-end'
  | 'bottom-end'
  | 'bottom'
  | 'bottom-start'
  | 'left-end'
  | 'left'
  | 'left-start';

type ActionType = 'click' | 'hover';
type Offset = 'small' | 'medium' | 'large';
type PopperChildrenProps = {
  ref: React.Ref<any>;
  placement: PositionType;
  style: React.CSSProperties;
  outOfBoundaries: boolean | null;
};

export interface PopperWrapperProps {
  init?: boolean;
  /**
   * Element triggering the `Popover`
   */
  trigger: React.ReactElement<any>;
  boundaryElement?: Element | null;
  triggerClass?: string;
  placement: PositionType;
  children: React.ReactElement<any>;
  style: React.CSSProperties;
  /**
   * Appends `trigger` wrapper inside body
   */
  appendToBody: boolean;
  /**
   * Event triggering the `Popover`
   */
  on: ActionType;
  /**
   * Holds `Popover` on hover
   *
   * **Use only if you are using `on = 'hover'`**
   */
  hoverable: boolean;
  /**
   * Vertical offset from trigger
   *
   * <pre className="DocPage-codeBlock">
   * {
   *    small: '2px',
   *    medium: '4px',
   *    large: '8px'
   * }
   * </pre>
   */
  offset: Offset;
  /**
   * Close on Backdrop click
   */
  closeOnBackdropClick: boolean;
  /**
   * Close on `boundaryElement` scroll
   */
  closeOnScroll?: boolean;
  /**
   * Handles open/close
   */
  open?: boolean;
  hide?: boolean;
  /**
   * Callback after `Popover` is toggled
   *
   * type: 'onMouseLeave' | 'onMouseEnter' | 'outsideClick' | 'onClick';
   */
  onToggle: (open: boolean, type?: string) => void;
  /*
   * animationClass is for providing custom animations for open/close of the popover
   * animationClass.open - takes animation class when popover is open
   * animationClass.close - takes animation class when popover is close
   */
  animationClass?: {
    open: string;
    close: string;
  };
}

interface PopperWrapperState {
  zIndex?: number;
  animationKeyframe: string;
  isOpen: boolean;
  uniqueKey: string;
}

export class PopperWrapper extends React.Component<PopperWrapperProps, PopperWrapperState> {
  triggerRef: React.RefObject<HTMLElement>;
  popupRef: React.RefObject<HTMLDivElement>;
  hoverableDelay?: number;
  _timer?: number;
  _throttleWait?: boolean;
  offsetMapping: Record<Offset, string>;
  positionOffset: Record<PositionType, string>;

  static defaultProps = {
    on: 'click',
    offset: 'medium',
    closeOnBackdropClick: true,
    hoverable: true,
    appendToBody: true,
    style: {},
  };

  constructor(props: PopperWrapperProps) {
    super(props);

    this.state = { animationKeyframe: '', isOpen: this.props.open || false, uniqueKey: '' };

    this.hoverableDelay = 100;
    this.offsetMapping = {
      small: '2px',
      medium: '4px',
      large: '8px',
    };

    this.positionOffset = {
      'auto-start': 'top left',
      auto: 'top',
      'auto-end': 'top right',
      'top-start': 'bottom left',
      top: 'bottom',
      'top-end': 'bottom right',
      'right-start': 'top right',
      right: 'top right',
      'right-end': 'top right',
      'bottom-end': 'top right',
      bottom: 'top',
      'bottom-start': 'top left',
      'left-end': 'top left',
      left: 'top left',
      'left-start': 'top left',
    };

    this.triggerRef = React.createRef();
    this.popupRef = React.createRef();

    this.getPopperChildren = this.getPopperChildren.bind(this);
    this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.boundaryScrollHandler = this.boundaryScrollHandler.bind(this);
  }

  componentDidMount() {
    this.addBoundaryScrollHandler();
  }

  componentDidUpdate(prevProps: PopperWrapperProps) {
    if (!prevProps.boundaryElement && this.props.boundaryElement) {
      this.removeBoundaryScrollHandler();
      this.addBoundaryScrollHandler();
    }
    if (prevProps.open !== this.props.open) {
      this._throttleWait = false;
      this.setState({
        animationKeyframe: '',
      });
      if (this.props.open) {
        const triggerElement = this.triggerRef.current;
        const zIndex = this.getZIndexForLayer(triggerElement);

        this.setState({
          zIndex: zIndex === undefined ? zIndex : zIndex + 1,
          isOpen: true,
        });
      } else {
        setTimeout(() => {
          this.setState({
            isOpen: false,
          });
        }, 120);
      }
    }
  }

  componentWillUnmount() {
    this.removeBoundaryScrollHandler();
  }

  boundaryScrollHandler() {
    const { open, on, closeOnScroll } = this.props;
    if (on === 'click' && closeOnScroll) {
      if (open) {
        if (!this._throttleWait) {
          this.togglePopper('onScroll', false);
          this._throttleWait = true;
        }
      }
    }
  }

  addBoundaryScrollHandler() {
    if (this.props.boundaryElement) {
      this.props.boundaryElement.addEventListener('scroll', this.boundaryScrollHandler);
    }
  }

  removeBoundaryScrollHandler() {
    if (this.props.boundaryElement) {
      this.props.boundaryElement.removeEventListener('scroll', this.boundaryScrollHandler);
    }
  }

  mouseMoveHandler() {
    if (this._timer) clearTimeout(this._timer);

    this._timer = window.setTimeout(() => {
      const { onToggle } = this.props;
      onToggle(false, 'mouseLeave');
    }, this.hoverableDelay);
  }

  handleMouseEnter() {
    const { on } = this.props;
    if (on === 'hover') {
      if (this._timer) clearTimeout(this._timer);
      const { onToggle } = this.props;

      onToggle(true, 'mouseEnter');
    }
  }

  handleMouseLeave() {
    const { on } = this.props;
    if (on === 'hover') {
      const { hoverable, onToggle } = this.props;
      if (hoverable) {
        this.mouseMoveHandler();
      } else {
        onToggle(false, 'mouseLeave');
      }
    }
  }

  togglePopper = (type: string, newValue?: boolean) => {
    const { open, onToggle } = this.props;
    onToggle(newValue === undefined ? !open : newValue, type);
  };

  doesEventContainsElement = (event: Event, ref: React.RefObject<any>) => {
    const el = ref.current;
    return el && el.contains(event.target as HTMLElement);
  };

  getZIndexForLayer(node: Element | null) {
    if (node === null) {
      return;
    }

    const layerNode = node.closest('[data-layer]') || document.body;
    const zIndex =
      layerNode === document.body ? 'auto' : parseInt(window.getComputedStyle(layerNode).zIndex || '0', 10);
    return zIndex === 'auto' || isNaN(zIndex) ? undefined : zIndex;
  }

  getUpdatedStyle = (oldStyle: React.CSSProperties, placement: PositionType, offset: Offset) => {
    const { style } = this.props;
    const newStyle = { ...style, ...oldStyle };
    const position = placement ? placement.split('-')[0] : placement;
    switch (position) {
      case 'top':
        newStyle.marginBottom = this.offsetMapping[offset];
        break;

      case 'bottom':
        newStyle.marginTop = this.offsetMapping[offset];
        break;

      case 'left':
        newStyle.marginRight = this.offsetMapping[offset];
        break;

      case 'right':
        newStyle.marginLeft = this.offsetMapping[offset];
        break;
    }
    return newStyle;
  };

  getTriggerElement(ref: React.Ref<any>) {
    const { trigger, on, triggerClass } = this.props;
    const options =
      on === 'hover'
        ? {
            ref,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
          }
        : {
            ref,
            onClick: (ev: React.MouseEvent<HTMLDivElement>) => {
              ev.stopPropagation();
              this.togglePopper('onClick');
            },
          };

    const classes = classNames('PopperWrapper-trigger', triggerClass);

    const onOutsideClickHandler = (event: Event) => {
      const { open, closeOnBackdropClick } = this.props;
      if (open && closeOnBackdropClick) {
        if (!this.doesEventContainsElement(event, this.popupRef)) {
          this.togglePopper('outsideClick');
        }
      }
    };

    return (
      <OutsideClick className={classes} onOutsideClick={onOutsideClickHandler} {...options}>
        {trigger}
      </OutsideClick>
    );
  }

  getPopperChildren({ ref, style, placement, outOfBoundaries }: PopperChildrenProps) {
    const { offset, children, open, animationClass } = this.props;
    const { zIndex, animationKeyframe, uniqueKey } = this.state;
    const newStyle = offset ? this.getUpdatedStyle(style, placement, offset) : style;
    let childrenStyles = {
      ...newStyle,
      zIndex,
    };
    let classes = '';

    if (!animationClass) {
      const transformStyles = this.popupRef.current?.style.getPropertyValue('transform');
      if (transformStyles && !animationKeyframe) {
        const uniqueKey = Math.random().toString(36).substring(2, 6);

        const popperAnimation = `
        @keyframes popper-open-${uniqueKey} {
          from { 
            transform: ${transformStyles} scaleY(0.5);
            opacity: 0.5;
          }
          to {
            transform: ${transformStyles} scaleY(1);
            opacity: 1
          }
        }
        @keyframes popper-close-${uniqueKey} {
          from {
            transform: ${transformStyles} scaleY(1);
            opacity: 1
          }
          to {
            transform: ${transformStyles} scaleY(0);
            opacity: 0.5
          }
        }`;

        this.setState({
          animationKeyframe: popperAnimation,
          uniqueKey,
        });
      }

      const popperAnimationStyles = {
        transformOrigin: this.positionOffset[this.props.placement],
        animation: open
          ? `popper-open-${uniqueKey} 120ms cubic-bezier(0, 0, 0.38, 0.9)`
          : `popper-close-${uniqueKey} 120ms cubic-bezier(0.2, 0, 1, 0.9)`,
      };

      childrenStyles = {
        ...childrenStyles,
        ...popperAnimationStyles,
      };
    } else {
      classes = classNames(
        {
          [`${animationClass.open}`]: open,
          [`${animationClass.close}`]: !open,
        },
        children.props.className
      );
    }

    const childProps = {
      ref,
      style: childrenStyles,
      'data-placement': placement,
      'data-hide': outOfBoundaries,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
    };

    const element = React.cloneElement(
      children,
      animationClass ? { ...childProps, className: classes } : { ...childProps }
    );
    return element;
  }

  render() {
    const { placement, appendToBody, hide, boundaryElement } = this.props;
    const { animationKeyframe, isOpen } = this.state;

    return (
      <Manager>
        <style>{animationKeyframe}</style>
        <Reference innerRef={this.triggerRef}>{({ ref }) => this.getTriggerElement(ref)}</Reference>
        {isOpen &&
          appendToBody &&
          ReactDOM.createPortal(
            <Popper
              placement={placement}
              innerRef={this.popupRef}
              modifiers={{
                preventOverflow: { boundariesElement: boundaryElement || document.body },
                hide: { enabled: hide },
              }}
            >
              {this.getPopperChildren}
            </Popper>,
            document.body
          )}
        {isOpen && !appendToBody && (
          <Popper placement={placement} innerRef={this.popupRef}>
            {this.getPopperChildren}
          </Popper>
        )}
      </Manager>
    );
  }
}

export default PopperWrapper;
