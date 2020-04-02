import * as React from 'react';
import { Omit } from 'utility-types';
import { PopperWrapper } from '@/utils';

export type PositionType = 'top' | 'bottom' | 'left' | 'right';
type IDivProps = Omit<JSX.IntrinsicElements['div'], 'ref'>;

export interface ITooltipProps extends IDivProps {
  /**
   * Text to be rendered in tooltip
   */
  tooltip: string;
  /**
   * Component to be rendered as trigger for tooltip
   */
  children: React.ReactElement<any>;
  /**
   * @default "bottom"
   */
  position?: PositionType;
  /**
   * @default true
   */
  appendToBody?: boolean;
}

interface IState {
  position: {
    top: number;
    left: number;
  };
  style: React.CSSProperties;
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
class Tooltip extends React.Component<ITooltipProps, IState> {
  constructor(props: ITooltipProps) {
    super(props);

    this.state = {
      position: {
        top: 0,
        left: 0,
      },
      style: {},
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
      appendToBody = false,
      position = 'bottom',
      tooltip,
      children,
      ...props
    } = this.props;

    const tooltipWrapper = (
      <div
        className="Tooltip"
        {...props}
        style={this.state.style}
      >
        {tooltip}
      </div>
    );

    return (
      <PopperWrapper
        trigger={children}
        placement={this.props.position}
        style={this.state.style}
        appendToBody={appendToBody}
        on={'hover'}
        offset={'Medium'}
        onToggle={this.onToggle}
        open={this.state.open}
      >
        {tooltipWrapper}
      </PopperWrapper>
    );
  }
}

export default Tooltip;
