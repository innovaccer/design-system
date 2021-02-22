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
  ref: React.Ref<any>,
  placement: PositionType,
  style: React.CSSProperties,
  outOfBoundaries: boolean | null
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
}

interface PopperWrapperState {
  zIndex?: number;
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
    style: {}
  };

  constructor(props: PopperWrapperProps) {
    super(props);

    this.state = {};

    this.hoverableDelay = 100;
    this.offsetMapping = {
      small: '2px',
      medium: '4px',
      large: '8px'
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
      if (this.props.open) {
        const triggerElement = this.findDOMNode(this.triggerRef);
        const zIndex = this.getZIndexForLayer(triggerElement);

        this.setState({
          zIndex: zIndex === undefined ? zIndex : zIndex + 1
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
    onToggle((newValue === undefined ? !open : newValue), type);
  }

  findDOMNode = (ref: React.RefObject<HTMLElement>) => {
    return ReactDOM.findDOMNode(ref.current!) as Element | null;
  }

  doesEventContainsElement = (event: Event, ref: React.RefObject<any>) => {
    const el = this.findDOMNode(ref);
    return (el && el.contains(event.target as HTMLElement));
  }

  getZIndexForLayer(node: Element | null) {
    if (node === null) {
      return;
    }

    const layerNode = node.closest('[data-layer]') || document.body;
    const zIndex =
      layerNode === document.body
        ? 'auto'
        : parseInt(window.getComputedStyle(layerNode).zIndex || '0', 10);
    return zIndex === 'auto' || isNaN(zIndex) ? undefined : zIndex;
  }

  getUpdatedStyle = (
    oldStyle: React.CSSProperties,
    placement: PositionType,
    offset: Offset
  ) => {
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
  }

  getTriggerElement(ref: React.Ref<any>) {
    const { trigger, on, triggerClass } = this.props;
    const options = on === 'hover'
      ? {
        ref,
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave
      }
      : {
        ref,
        onClick: () => this.togglePopper('onClick')
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
      <OutsideClick
        className={classes}
        onOutsideClick={onOutsideClickHandler}
        {...options}
      >
        {trigger}
      </OutsideClick>
    );
  }

  getPopperChildren({ ref, style, placement, outOfBoundaries }: PopperChildrenProps) {
    const { offset, children } = this.props;
    const { zIndex } = this.state;
    const newStyle = offset ? this.getUpdatedStyle(style, placement, offset) : style;

    const element = React.cloneElement(children, {
      ref,
      style: {
        ...newStyle,
        zIndex
      },
      'data-placement': placement,
      'data-hide': outOfBoundaries,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave
    });
    return element;
  }

  render() {
    const { placement, appendToBody, open, hide, boundaryElement } = this.props;

    return (
      <Manager>
        <Reference innerRef={this.triggerRef}>{({ ref }) => this.getTriggerElement(ref)}</Reference>
        {open &&
          appendToBody &&
          ReactDOM.createPortal(
            (
              <Popper
                placement={placement}
                innerRef={this.popupRef}
                modifiers={{
                  preventOverflow: { boundariesElement: boundaryElement || document.body },
                  hide: { enabled: hide }
                }}
              >
                {this.getPopperChildren}
              </Popper>
            ),
            document.body
          )}
        {open && !appendToBody && (
          <Popper placement={placement} innerRef={this.popupRef}>
            {this.getPopperChildren}
          </Popper>
        )}
      </Manager>
    );
  }
}

export default PopperWrapper;
