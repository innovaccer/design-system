import * as React from 'react';
import { Omit } from 'utility-types';
import { PopperWrapper } from '@/utils';

export type PositionType =
  'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'right';
type DivProps = Omit<JSX.IntrinsicElements['div'], 'ref'>;

export interface TooltipProps extends DivProps {
  /**
   * Text to be rendered in `Tooltip`
   */
  tooltip: string;
  /**
   * Component to be rendered as trigger for `Tooltip`
   */
  children: React.ReactElement<any>;
  /**
   * Position to place the `Tooltip`
   */
  position: PositionType;
  /**
   * Appends `Tooltip` wrapper inside body
   */
  appendToBody: boolean;
  /**
   * Classes to be added to PopperWrapper trigger
   */
  triggerClass?: string;
  /**
   * Hides the `Popover` when its reference element is outside of the `Popover` boundaries
   */
  hideOnReferenceEscape?: boolean;
  /**
   * Boundary of Popover
   */
  boundaryElement?: Element | null;
}

interface IState {
  open: boolean;
}

/**
 * Tooltip is used to displays floating content in relation to a target when that target is hovered.
 *
 * Tooltips mostly appear either at the top or bottom of their target.
 * The preferred and default side is the bottom.
 *
 * For left navigation with only icons, show tooltip on the right.
 */
export class Tooltip extends React.Component<TooltipProps, IState> {
  static defaultProps = {
    position: 'bottom',
    appendToBody: true,
    hideOnReferenceEscape: true,
  };

  constructor(props: TooltipProps) {
    super(props);

    this.state = {
      open: false
    };
  }

  public onToggle = (open: boolean) => {
    this.setState({ open });
  }

  componentWillUnmount() {
    this.setState({ open: false });
  }

  public render() {
    const {
      appendToBody,
      position,
      tooltip,
      children,
      className,
      triggerClass,
      hideOnReferenceEscape,
      boundaryElement,
      ...props
    } = this.props;

    const tooltipWrapper = (
      <div
        className="Tooltip"
        {...props}
      >
        {tooltip}
      </div>
    );

    return (
      <PopperWrapper
        trigger={children}
        placement={this.props.position}
        appendToBody={appendToBody}
        on={'hover'}
        offset={'Medium'}
        onToggle={this.onToggle}
        open={this.state.open}
        triggerClass={triggerClass}
        hide={hideOnReferenceEscape}
        boundaryElement={boundaryElement}
      >
        {tooltipWrapper}
      </PopperWrapper>
    );
  }
}

export default Tooltip;
