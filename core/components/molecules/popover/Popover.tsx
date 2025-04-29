import * as React from 'react';
import classNames from 'classnames';
import { PopperWrapper, PopperWrapperProps } from '@/components/atoms/popperWrapper';
import { BaseProps, filterProps } from '@/utils/types';
import { PositionType as Position } from '@/common.type';
import styles from '@css/components/popover.module.css';

export interface CustomStyle {
  height?: number | string;
  minHeight?: number | string;
  maxHeight?: number | string;
  width?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
}

const propsList = [
  'appendToBody',
  'trigger',
  'hoverable',
  'on',
  'open',
  'closeOnBackdropClick',
  'offset',
  'closeOnScroll',
] as const;
type PopperProps = (typeof propsList)[number];

export interface PopoverProps extends Pick<PopperWrapperProps, PopperProps>, BaseProps {
  /**
   * To be rendered in `Popover` component
   */
  children: React.ReactNode;
  /**
   * Position to place the `trigger`
   *
   * @param Position -  | 'top-start'  | 'top'  | 'top-end'  | 'right-start'
   *  | 'right'  | 'right-end'  | 'bottom-end'  | 'bottom'  | 'bottom-start'
   *  | 'left-end'  | 'left'  | 'left-start'  | 'auto-start'  | 'auto'  | 'auto-end';
   *
   * @default bottom
   */
  position: Position;
  /**
   * Callback after `Popover` is toggled
   *
   * @param type - 'onMouseLeave' | 'onMouseEnter' | 'outsideClick' | 'onClick'
   */
  onToggle?: (open: boolean, type?: string) => void;
  /**
   * Changes background of `Popover`
   */
  dark?: boolean;
  /**
   * Adds custom CSS to `Popover` element
   *
   * <pre className="DocPage-codeBlock">
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
   * Class to be added to PopperWrapper trigger
   */
  triggerClass?: string;
  /**
   * Hides the `Popover` when its reference element is outside of the `Popover` boundaries
   * @default true
   */
  hideOnReferenceEscape?: boolean;
  /**
   * BoundaryElement for `Popover`
   */
  boundaryElement: React.RefObject<HTMLElement> | Element;
  /*
   * animationClass is for providing custom animations for open/close of the popover
   * animationClass.open - takes animation class when popover is open
   * animationClass.close - takes animation class when popover is close
   */
  animationClass?: {
    open: string;
    close: string;
  };
  /**
   * Defines unique name to the popover
   */
  name?: string;
  /**
   * Defines coordinates where you need to position a popover
   */
  triggerCoordinates?: {
    x: number;
    y: number;
  };
  /**
   * Describe the style that will be applied to the popper element
   * Refer to [this](https://popper.js.org/docs/v1/#modifierscomputestyle)
   */
  computeStyles?: object;
  /**
   * Defines whether to show popover or not
   */
  disabled?: boolean;
  /**
   * Add delay to the popover opening event
   */
  openDelay?: number;
}

export const Popover = (props: PopoverProps) => {
  const {
    position,
    customStyle,
    dark,
    children,
    onToggle,
    className,
    hideOnReferenceEscape,
    boundaryElement = document.body,
    name,
    ...rest
  } = props;

  const [open, setOpen] = React.useState<boolean>(!!props.open);
  const [init, setInit] = React.useState(false);

  React.useEffect(() => {
    if (props.open !== undefined) setOpen(props.open);
  }, [props.open]);

  const defaultOnToggle = React.useCallback((newOpen: boolean) => {
    setOpen(newOpen);
  }, []);

  React.useEffect(() => {
    if (!init) {
      if ('current' in boundaryElement && boundaryElement.current) {
        setInit(true);
      }
    }
  }, [boundaryElement]);

  const classes = classNames(
    {
      [styles.Popover]: true,
      [styles['Popover--dark']]: dark,
    },
    className
  );

  const PopoverWrapper = (
    <div data-test="DesignSystem-Popover" className={classes} data-layer={true} data-opened={open} data-name={name}>
      {children}
    </div>
  );

  return (
    <PopperWrapper
      {...rest}
      init={init}
      boundaryElement={'current' in boundaryElement ? boundaryElement.current : boundaryElement}
      open={open}
      hide={hideOnReferenceEscape}
      style={customStyle}
      onToggle={onToggle || defaultOnToggle}
      placement={position}
    >
      {PopoverWrapper}
    </PopperWrapper>
  );
};

Popover.displayName = 'Popover';

// Define default props separately since React.FC doesn't support defaultProps in React 19
const defaultPopperWrapperProps = {
  on: 'click',
  offset: 'medium',
  closeOnBackdropClick: true,
  hoverable: true,
  appendToBody: true,
  style: {},
  disabled: false,
};

Popover.defaultProps = Object.assign({}, filterProps(defaultPopperWrapperProps, propsList, true), {
  offset: 'large',
  position: 'bottom',
  hideOnReferenceEscape: true,
  customStyle: {},
});

export default Popover;
