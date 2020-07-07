import * as React from 'react';
import classNames from 'classnames';
import { PopperWrapper } from '@/utils';
import { BaseProps } from '@/utils/types';

export type Position = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end';
type ActionType = 'click' | 'hover';

export interface PopoverProps extends BaseProps {
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
   * Element triggering the `Popover`
   */
  trigger: React.ReactElement<any>;
  /**
   * Holds `Popover` on hover
   */
  hoverable?: boolean;
  /**
   * Changes background of `Popover`
   */
  dark?: boolean;
  /**
   * Closes `Popover` on outside click
   * @default true
   */
  closeOnBackdropClick?: boolean;
  /**
   * Event triggering the `Popover`
   * @default 'click'
   */
  on?: ActionType;
  /**
   * Handles open/close
   */
  open?: boolean;
  /**
   * Adds CSS to `Popover` element
   * @default {}
   */
  style?: React.CSSProperties;
  /**
   * Callback after `Popover` is toggled
   */
  onToggle?: (open: boolean, type?: string) => void;
  /**
   * To be rendered in `Popover` component
   */
  children: React.ReactNode;
}

export const Popover = (props: PopoverProps) => {
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
    onToggle,
    className,
  } = props;

  const [open, setOpen] = React.useState<boolean>(props.open || false);
  React.useEffect(() => {
    if (onToggle) {
      if (props.open !== undefined) setOpen(props.open);
    }
  }, [props.open]);

  const onToggleFunction: PopoverProps['onToggle'] = newOpen => {
    setOpen(newOpen);
  };

  const classes = classNames({
    Popover: true,
    ['Popover--dark']: dark
  }, className);

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
    onToggle: onToggle || onToggleFunction,
    placement: position
  };

  return (
    <PopperWrapper {...popperOptions} offset="Large" >
      {PopoverWrapper}
    </PopperWrapper>
  );
};

Popover.displayName = 'Popover';

export default Popover;
