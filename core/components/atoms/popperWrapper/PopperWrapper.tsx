import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Manager, Reference, Popper } from 'react-popper';
import { OutsideClick } from '@/index';
import classNames from 'classnames';
import { PositionType } from '@/common.type';
import { flushSync } from 'react-dom';

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
  /**
   * Defines coordinates where you need to position a popover
   */
  triggerCoordinates?: {
    x: number;
    y: number;
  };
  /**
   * Describe the style that will be applied to the popper element
   * Refer to [this](https://popper.js.org/docs/v1/#modifierscomputestyle)
   */
  computeStyles?: object;
  /**
   * Defines whether to show popover or not
   */
  disabled?: boolean;
  /**
   * Add delay to the popover opening event
   */
  openDelay?: number;
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

  static defaultProps = {
    on: 'click',
    offset: 'medium',
    closeOnBackdropClick: true,
    hoverable: true,
    appendToBody: true,
    style: {},
    disabled: false,
  };

  constructor(props: PopperWrapperProps) {
    super(props);

    this.state = {
      animationKeyframe: '',
      isOpen: (this.props.open && !this.props.disabled) || false,
      uniqueKey: '',
    };

    this.hoverableDelay = 100;
    this.offsetMapping = {
      small: '2px',
      medium: '4px',
      large: '8px',
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
    const triggerElement = this.triggerRef.current;
    const zIndex = this.getZIndexForLayer(triggerElement);
    this.setState({
      zIndex: zIndex === undefined ? zIndex : zIndex + 1,
    });
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
      if (this.props.open && !this.props.disabled) {
        const triggerElement = this.triggerRef.current;
        const zIndex = this.getZIndexForLayer(triggerElement);

        this.setState({
          zIndex: zIndex === undefined ? zIndex : zIndex + 1,
          isOpen: true,
        });
      } else if (!this.props.open && this.props.animationClass) {
        this.setState({
          isOpen: false,
        });
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
    if (this.props.boundaryElement && this.props.boundaryElement.addEventListener) {
      this.props.boundaryElement.addEventListener('scroll', this.boundaryScrollHandler);
    }
  }

  removeBoundaryScrollHandler() {
    if (this.props.boundaryElement && this.props.boundaryElement.removeEventListener) {
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
    const { on, openDelay, onToggle } = this.props;
    if (on === 'hover') {
      if (this._timer) clearTimeout(this._timer);

      if (openDelay) {
        this._timer = window.setTimeout(() => {
          this.setState(() => {
            return { isOpen: true };
          });
          this.togglePopper('mouseEnter', true);
        }, openDelay);
      } else {
        onToggle(true, 'mouseEnter');
        this.setState(() => {
          return { isOpen: true };
        });
      }
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
        this.setState({
          isOpen: false,
        });
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
    return zIndex === 'auto' || isNaN(zIndex) ? 500 : zIndex;
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
    if (this.props.triggerCoordinates) {
      newStyle.position = 'absolute';
      newStyle.transform = `translate(${this.props.triggerCoordinates.x}px, ${this.props.triggerCoordinates.y}px)`;
    }
    return newStyle;
  };

  onClickHandler = () => {
    const { openDelay } = this.props;

    // to add delay only while opening
    if (openDelay && !this.state.isOpen) {
      window.setTimeout(() => {
        this.togglePopper('onClick');
      }, openDelay);
    } else {
      this.togglePopper('onClick');
    }
  };

  getTriggerElement(ref: React.Ref<any>) {
    const { trigger, on, triggerClass, disabled } = this.props;
    const options =
      on === 'hover' && !disabled
        ? {
            ref,
            onMouseEnter: this.handleMouseEnter,
            onMouseLeave: this.handleMouseLeave,
            onFocus: this.handleMouseEnter,
            onBlur: this.handleMouseLeave,
          }
        : {
            ref,
            onClick: (ev: React.MouseEvent<HTMLDivElement>) => {
              ev.stopPropagation();
              !disabled && this.onClickHandler();
            },
          };

    const classes = classNames('PopperWrapper-trigger', triggerClass);

    const shouldPopoverClose = (clicked: HTMLElement): boolean => {
      const popover = this.popupRef.current as HTMLElement;
      const container = document.body;
      const popoverIndex = popover && parseInt(window.getComputedStyle(popover).zIndex);
      let clickInsideLayer = false;
      let shouldClose = false;

      const openedLayers = container.querySelectorAll('[data-opened="true"]');
      openedLayers.forEach((layer) => {
        if (layer && layer.contains(clicked)) {
          clickInsideLayer = true;
          const clickedIndex = parseInt(window.getComputedStyle(layer).zIndex);
          if (popoverIndex > clickedIndex) {
            shouldClose = true;
            return;
          }
        }
      });

      if (container.isEqualNode(clicked) || shouldClose || !container.contains(clicked) || !clickInsideLayer) {
        return true;
      }
      return false;
    };

    const onOutsideClickHandler = (event: Event) => {
      const { open, closeOnBackdropClick } = this.props;
      if (open && shouldPopoverClose(event.target as HTMLElement) && closeOnBackdropClick) {
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
      const maxHeight = this.popupRef.current?.offsetHeight;
      // we need to check for transformStyles so that we open the popover at correct position (left/right)
      const transformStyles = this.popupRef.current?.style.getPropertyValue('transform');
      if (transformStyles && maxHeight && placement && !animationKeyframe) {
        const uniqueKey = Math.random().toString(36).substring(2, 6);
        const isTop = placement.includes('top');

        const popperAnimation = `
        @keyframes popper-open-${uniqueKey} {
          from { 
            max-height: 0;
            ${isTop ? `margin-top: ${maxHeight}px` : ''};
          }
          to {
            max-height: ${maxHeight}px;
            ${isTop ? `margin-top: 0px` : ''};
          }
        }
        @keyframes popper-close-${uniqueKey} {
          from {
            max-height: ${maxHeight}px;
            ${isTop ? `margin-top: 0px` : ''};
          }
          to {
            max-height: 0;
            ${isTop ? `margin-top: ${maxHeight}px` : ''};
          }
        }
        `;

        this.setState({
          animationKeyframe: popperAnimation,
          uniqueKey,
        });
      }

      // defining popper-fade-in custom keyframe as it is specific to popover usecase.
      const popperAnimationStyles = {
        animation: open
          ? `popper-open-${uniqueKey} 120ms cubic-bezier(0, 0, 0.38, 0.9), popper-fade-in 120ms`
          : `popper-close-${uniqueKey} 120ms cubic-bezier(0.2, 0, 1, 0.9), fadeOut 100ms`,
      };

      childrenStyles = {
        ...childrenStyles,
        ...popperAnimationStyles,
        overflow: 'hidden',
      };
    } else {
      classes = classNames(
        {
          [`${animationClass.open}`]: this.state.isOpen,
          [`${animationClass.close}`]: !this.state.isOpen,
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
      onAnimationEnd: () => {
        if (!open) {
          flushSync(() => {
            this.setState({ isOpen: false });
          });
        }
      },
    };

    const element = React.cloneElement(
      children,
      animationClass ? { ...childProps, className: classes } : { ...childProps }
    );
    return element;
  }

  render() {
    const { placement, appendToBody, hide, boundaryElement, triggerCoordinates, computeStyles } = this.props;
    const { animationKeyframe, isOpen } = this.state;

    const coordinatesPopper = (
      <Popper
        placement={placement}
        innerRef={this.popupRef}
        modifiers={{
          preventOverflow: { boundariesElement: boundaryElement || document.body },
          hide: { enabled: hide },
          computeStyles: computeStyles,
          ...(triggerCoordinates && {
            offset: {
              offset: `${triggerCoordinates.x}px, ${triggerCoordinates.y}px`,
            },
          }),
        }}
      >
        {this.getPopperChildren}
      </Popper>
    );

    return (
      <Manager>
        {animationKeyframe && <style>{animationKeyframe}</style>}
        <Reference innerRef={this.triggerRef}>{({ ref }) => this.getTriggerElement(ref)}</Reference>

        {isOpen &&
          appendToBody &&
          !triggerCoordinates &&
          ReactDOM.createPortal(
            <Popper
              placement={placement}
              innerRef={this.popupRef}
              modifiers={{
                preventOverflow: { boundariesElement: boundaryElement || document.body },
                hide: { enabled: hide },
                computeStyles: computeStyles,
              }}
            >
              {this.getPopperChildren}
            </Popper>,
            document.body
          )}

        {isOpen && appendToBody && triggerCoordinates && ReactDOM.createPortal(coordinatesPopper, document.body)}

        {isOpen && !appendToBody && !triggerCoordinates && (
          <Popper placement={placement} innerRef={this.popupRef} modifiers={{ computeStyles: computeStyles }}>
            {this.getPopperChildren}
          </Popper>
        )}
      </Manager>
    );
  }
}

export default PopperWrapper;
