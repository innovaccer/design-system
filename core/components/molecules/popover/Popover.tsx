import * as React from 'react';
import classNames from 'classnames';
import { PopperWrapper } from '@/utils';
import { BaseProps } from '@/utils/types';

export type Position = 'top' |
'top-start' |
'top-end' |
'bottom' |
'bottom-start' |
'bottom-end'|
'left' |
'right';

export type ActionType = 'click' | 'hover';

export interface CustomStyle {
  height?: number | string;
  minHeight?: number | string;
  maxHeight?: number | string;
  width?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
}

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
   * Adds custom CSS to `Popover` element
   * <pre className="DocPage-codeBlock>
   * CustomStyle {
   *  height?: number | string;
   *  width?: number | string;
   *  minWidth?: number | string;
   *  minHeight?: number | string;
   *  maxHeight?: number | string;
   *  maxWidth?: number | string;
   * }
   * </pre>
   * @default {}
   */
  customStyle?: CustomStyle;
  /**
   * Callback after `Popover` is toggled
   *
   * type: 'onMouseLeave' | 'onMouseEnter' | 'outsideClick' | 'onClick';
   */
  onToggle?: (open: boolean, type?: string) => void;
  /**
   * To be rendered in `Popover` component
   */
  children: React.ReactNode;
  /**
   * Class to be added to PopperWrapper trigger
   */
  triggerClass?: string;
}

export const Popover = (props: PopoverProps) => {
  const {
    position = 'bottom',
    closeOnBackdropClick = true,
    appendToBody = true,
    on = 'click',
    customStyle = {},
    dark,
    hoverable,
    children,
    trigger,
    triggerClass,
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
    <div data-test="DesignSystem-Popover" className={classes} data-layer={true}>
      {children}
    </div>
  );

  const popperOptions = {
    trigger,
    triggerClass,
    appendToBody,
    closeOnBackdropClick,
    on,
    hoverable,
    open,
    style: customStyle,
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
