import * as React from 'react';
import classNames from 'classnames';
import { PopperWrapper } from '@/utils';

export type Position = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end';
type ActionType = 'click' | 'hover';

export interface IPopoverProps {
  position?: Position;
  appendToBody?: boolean;
  verticalOffset?: number;
  trigger: React.ReactElement<any>;
  hoverable?: boolean;
  dark?: boolean;
  closeOnBackdropClick?: boolean;
  on?: ActionType;
  open?: boolean;
  style?: React.CSSProperties;
  onToggle: (open: boolean, type?: string) => void;
}

const Popover: React.FunctionComponent<IPopoverProps> = props => {
  const {
    position = 'bottom',
    dark = false,
    hoverable = false,
    closeOnBackdropClick = true,
    appendToBody = true,
    on = 'click',
    style = {},
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
