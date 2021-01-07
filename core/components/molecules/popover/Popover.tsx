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
   */
  position: Position;
  /**
   * Appends `trigger` wrapper inside body
   */
  appendToBody: boolean;
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
   */
  closeOnBackdropClick: boolean;
  /**
   * Event triggering the `Popover`
   */
  on: ActionType;
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
   */
  customStyle: CustomStyle;
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
  /**
   * Hides the `Popover` when its reference element is outside of the `Popover` boundaries
   */
  hideOnReferenceEscape?: boolean;
  /**
   * Boundary of Popover
   */
  boundaryElement?: Element | null;
}

export const Popover = (props: PopoverProps) => {
  const {
    position,
    closeOnBackdropClick,
    appendToBody,
    on,
    customStyle,
    dark,
    hoverable,
    children,
    trigger,
    triggerClass,
    onToggle,
    className,
    boundaryElement,
    hideOnReferenceEscape,
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
    boundaryElement,
    triggerClass,
    appendToBody,
    closeOnBackdropClick,
    on,
    hoverable,
    open,
    hide: hideOnReferenceEscape,
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
Popover.defaultProps = {
  position: 'bottom',
  closeOnBackdropClick: true,
  hideOnReferenceEscape: true,
  appendToBody: true,
  on: 'click',
  customStyle: {},
};

export default Popover;
