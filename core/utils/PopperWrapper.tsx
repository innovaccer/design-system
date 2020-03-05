import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Manager, Reference, Popper } from 'react-popper';

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
  | 'left-start'
  | undefined;

type actionType = 'click' | 'hover';

enum Offsets {
  Small = '2px',
  Medium = '4px',
  Large = '8px'
}

interface IProps {
  trigger: React.ReactElement<any>;
  placement: PositionType;
  children: React.ReactElement<any>;
  style: React.CSSProperties;
  appendToBody: boolean;
  on?: actionType;
  offset: keyof typeof Offsets;
  closeOnBackdropClick?: boolean;
  hoverable?: boolean;
}

interface IState {
  open: boolean;
  mouseLeaveDelay: number;
  mouseEnterDelay: number;
}

class PopperWrapper extends React.Component<IProps, IState> {
  private triggerRef: React.RefObject<HTMLElement>;
  private popupRef: React.RefObject<HTMLDivElement>;
  private _timer?: number;

  constructor(props: IProps) {
    super(props);

    this.state = {
      open: false,
      mouseLeaveDelay: 50,
      mouseEnterDelay: 0
    };

    this.triggerRef = React.createRef();
    this.popupRef = React.createRef();
  }

  public componentWillUnmount() {
    clearTimeout(this._timer);
    document.removeEventListener('mousedown', this.doesNodeContainClick);
  }

  public handleMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
    const { hoverable = false } = this.props;

    if (hoverable) {
      clearTimeout(this._timer);
      this._timer = window.setTimeout(() => {
        this.setState({ open: false });
        if (this.props.children.props.onMouseLeave) {
          this.props.children.props.onMouseLeave(event);
        }
      }, this.state.mouseLeaveDelay);
    } else {
      this.setState({ open: false });
      if (this.props.children.props.onMouseLeave) {
        this.props.children.props.onMouseLeave(event);
      }
    }
  }

  public handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    const { hoverable = false } = this.props;

    if (hoverable) {
      clearTimeout(this._timer);
      this._timer = window.setTimeout(() => {
        this.setState({ open: true });
        if (this.props.children.props.onMouseEnter) {
          this.props.children.props.onMouseEnter(event);
        }
      }, this.state.mouseEnterDelay);
    } else {
      this.setState({ open: true });
      if (this.props.children.props.onMouseEnter) {
        this.props.children.props.onMouseEnter(event);
      }
    }
  }

  public togglePopper = () => {
    this.setState({ open: !this.state.open });
  }

  public doesNodeContainClick = (event: Event) => {
    if (
      !(
        this.findDOMNode(this.popupRef).contains(event.target as HTMLElement) ||
        this.findDOMNode(this.triggerRef).contains(event.target as HTMLElement)
      )
    ) {
      this.togglePopper();
    }
  }

  public componentDidMount() {
    const { on = 'click', closeOnBackdropClick = true } = this.props;
    const { open } = this.state;

    if (on === 'click' && open && closeOnBackdropClick) {
      document.addEventListener('mousedown', this.doesNodeContainClick);
    }
  }

  public componentDidUpdate() {
    const { on = 'click', closeOnBackdropClick = true } = this.props;
    const { open } = this.state;

    if (on === 'click' && open && closeOnBackdropClick) {
      document.addEventListener('mousedown', this.doesNodeContainClick);
    } else if (on === 'click' && !open && closeOnBackdropClick) {
      document.removeEventListener('mousedown', this.doesNodeContainClick);
    }
  }

  public getTriggerElement(trigger: React.ReactElement<any>, ref: React.Ref<any>, on: actionType) {
    const options =
      on === 'hover'
        ? {
          ref,
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
        }
        : {
          ref,
          onClick: this.togglePopper
        };

    const element = React.cloneElement(
      (
        <span className="d-inline-block">
          {trigger}
        </span>
      ),
      options
      );

    return element;
  }

  public getChildrenElement(
    children: React.ReactElement<any>,
    ref: React.Ref<any>,
    placement: string,
    style: React.CSSProperties
  ) {
    const options = this.props.on === 'hover' ? {
      ref,
      style,
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      'data-placement': placement
    } : {
      ref,
      style,
      'data-placement': placement
    };

    const element = React.cloneElement(children, options);
    return element;
  }

  public render() {
    const { trigger, children, placement, appendToBody, on = 'click', offset } = this.props;
    const { open } = this.state;

    return (
      <Manager>
        <Reference innerRef={this.triggerRef}>{({ ref }) => this.getTriggerElement(trigger, ref, on)}</Reference>
        {open &&
          appendToBody &&
          ReactDOM.createPortal(
            (
              /* tslint:disable:no-shadowed-variable */
              <Popper placement={placement} innerRef={this.popupRef}>
                {({ ref, style, placement }) => {
                  const newStyle = offset ? this.getUpdatedStyle(style, placement, offset) : style;
                  return this.getChildrenElement(children, ref, placement, newStyle);
                }}
              </Popper>
            ),
            document.body
          )}
        {open && !appendToBody && (
          <Popper placement={placement} innerRef={this.popupRef}>
            {({ ref, style, placement }) => {
              const newStyle = offset ? this.getUpdatedStyle(style, placement, offset) : style;
              return this.getChildrenElement(children, ref, placement, newStyle);
            }}
          </Popper>
        )}
      </Manager>
    );
  }

  private getUpdatedStyle = (
    oldStyle: React.CSSProperties,
    placement: PositionType,
    offset: keyof typeof Offsets = 'Medium'
  ) => {
    const { style = {} } = this.props;
    const newStyle = { ...style, ...oldStyle };
    const position = placement ? placement.split('-')[0] : placement;
    switch (position) {
      case 'top':
        newStyle.marginBottom = Offsets[offset];
        break;

      case 'bottom':
        newStyle.marginTop = Offsets[offset];
        break;

      case 'left':
        newStyle.marginRight = Offsets[offset];
        break;

      case 'right':
        newStyle.marginLeft = Offsets[offset];
        break;
    }
    return newStyle;
  }

  private findDOMNode = (ref: React.RefObject<HTMLElement>) => {
    return ReactDOM.findDOMNode(ref.current!) as HTMLElement;
  }
}

export default PopperWrapper;
