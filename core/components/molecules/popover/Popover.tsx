import * as React from 'react';
import classNames from 'classnames';
import { PopperWrapper } from '@/utils';

export type Position = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end';
type ActionType = 'click' | 'hover';

export interface PopoverProps {
  /**
   *  Position to place the `trigger`
   * @default "bottom"
   */
  position?: Position;
  /**
   * Appends `trigger` wrapper inside body
   * @default true
   */
  appendToBody?: boolean;
  /**
   * Vertical offset from `trigger`
   */
  verticalOffset?: number;
  /**
   * Element triggering the `popover`
   */
  trigger: React.ReactElement<any>;
  /**
   * Holds `popover` on hove
   */
  hoverable?: boolean;
  /**
   * Changes background of `popover`
   */
  dark?: boolean;
  /**
   * Closes `popover` on outside click
   * @default true
   */
  closeOnBackdropClick?: boolean;
  /**
   * Event triggering the `popover`
   * @default 'click'
   */
  on?: ActionType;
  /**
   * Handles open/close
   */
  open?: boolean;
  /**
   * Adds CSS to `popover` element
   * @default {}
   */
  style?: React.CSSProperties;
  /**
   * Callback after `popover` is toggled
   */
  onToggle: (open: boolean, type?: string) => void;
}

export const Popover: React.FunctionComponent<PopoverProps> = props => {
  const {
    position = 'bottom',
    closeOnBackdropClick = true,
    appendToBody = true,
    on = 'click',
    style = {},
    dark,
    hoverable,
    children,
    trigger,
    open,
    onToggle
  } = props;

  const classes = classNames({
    Popover: true,
    ['Popover--dark']: dark
  });

  const PopoverWrapper = (
    <div className={classes} >
      {children}
    </div>
  );

  const popperOptions = {
    trigger,
    appendToBody,
    closeOnBackdropClick,
    on,
    hoverable,
    style,
    open,
    onToggle,
    placement: position
  };

  return (
    <PopperWrapper {...popperOptions} offset="Large" >
      {PopoverWrapper}
    </PopperWrapper>
  );
};

export default Popover;
