import * as React from 'react';
import { Omit } from 'utility-types';
import { PopperWrapper } from '@/utils';

type PositionType = 'top' | 'bottom' | 'left' | 'right';
type IDivProps = Omit<JSX.IntrinsicElements['div'], 'ref'>;

export interface ITooltipProps extends IDivProps {
  tooltip: string;
  children: React.ReactElement<any>;
  position?: PositionType;
  appendToBody?: boolean;
}

interface IState {
  position: {
    top: number;
    left: number;
  };
  style: React.CSSProperties;
}

/**
 * Tooltip is used to displays floating content in relation to a target when that target is hovered.
 *
 * Tooltips mostly appear either at the top or bottom of their target.
 * The preferred and default side is the bottom.
 *
 * For left navigation with only icons, show tooltip on the right.
 * @class Tooltip
 * @extends {React.Component<ITooltipProps, IState>}
 */
class Tooltip extends React.Component<ITooltipProps, IState> {
  constructor(props: ITooltipProps) {
    super(props);

    this.state = {
      position: {
        top: 0,
        left: 0,
      },
      style: {}
    };
  }

  public static defaultProps: Partial<ITooltipProps> = {
    position: 'bottom',
    appendToBody: true
  };

  public render() {
    const {
      appendToBody = false,
      tooltip,
      children,
      position = '',
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
      >
        {tooltipWrapper}
      </PopperWrapper>
    );
  }
}

export default Tooltip;
