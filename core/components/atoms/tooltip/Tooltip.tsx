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
   * @default "bottom"
   */
  position?: PositionType;
  /**
   * Appends `Tooltip` wrapper inside body
   * @default true
   */
  appendToBody?: boolean;
  /**
   * Classes to be added to PopperWrapper trigger
   */
  triggerClass?: string;
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
      appendToBody = true,
      position = 'bottom',
      tooltip,
      children,
      className,
      triggerClass,
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
      >
        {tooltipWrapper}
      </PopperWrapper>
    );
  }
}

export default Tooltip;
