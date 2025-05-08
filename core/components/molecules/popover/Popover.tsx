import * as React from 'react';
import classNames from 'classnames';
import { BaseProps } from '@/utils/types';
import { PositionType as Position } from '@/common.type';
import styles from '@css/components/popover.module.css';
import { PopperWrapper, PopoverTrigger, PopoverContent } from '@/components/atoms/popperWrapper';
import { mapPositionToPlacement } from './utils';

export interface CustomStyle {
  height?: number | string;
  minHeight?: number | string;
  maxHeight?: number | string;
  width?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
}

type ActionType = 'click' | 'hover';
type Offset = 'small' | 'medium' | 'large';

// Helper function to generate dynamic animation classes
// const generateDynamicAnimationClasses = (placement: Placement, maxHeight?: number | string) => {
//   if (!maxHeight) return null;

//   const uniqueKey = Math.random().toString(36).substring(2, 6);
//   const isTop = placement.includes('top');
//   const maxHeightValue = typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight;

//   // Create dynamic keyframes
//   const keyframes = `
//     @keyframes popper-open-${uniqueKey} {
//       from {
//         max-height: 0;
//         ${isTop ? `margin-top: ${maxHeightValue}` : ''};
//       }
//       to {
//         max-height: ${maxHeightValue};
//         ${isTop ? `margin-top: 0px` : ''};
//       }
//     }
//     @keyframes popper-close-${uniqueKey} {
//       from {
//         max-height: ${maxHeightValue};
//         ${isTop ? `margin-top: 0px` : ''};
//       }
//       to {
//         max-height: 0;
//         ${isTop ? `margin-top: ${maxHeightValue}` : ''};
//       }
//     }
//   `;

//   // Inject the keyframes into the document
//   const styleElement = document.createElement('style');
//   styleElement.textContent = keyframes;
//   document.head.appendChild(styleElement);

//   // Return animation classes
//   return {
//     open: `popper-open-${uniqueKey} 120ms cubic-bezier(0, 0, 0.38, 0.9), popper-fade-in 120ms`,
//     close: `popper-close-${uniqueKey} 120ms cubic-bezier(0.2, 0, 1, 0.9), fadeOut 100ms`,
//   };
// };

export type PopoverProps = {
  /**
   * To be rendered in `Popover` component
   */
  children: React.ReactNode;
  /**
   * Position to place the `trigger`
   *
   * @param Position -  | 'top-start'  | 'top'  | 'top-end'  | 'right-start'
   *  | 'right'  | 'right-end'  | 'bottom-end'  | 'bottom'  | 'bottom-start'
   *  | 'left-end'  | 'left'  | 'left-start'
   *
   * @default bottom
   */
  position?: Position;
  /**
   * Changes background of `Popover`
   */
  dark?: boolean;
  /**
   * Handles open/close
   */
  open?: boolean;
  /**
   * Element triggering the `Popover`
   */
  trigger?: React.ReactNode;
  /**
   * Defines unique name to the popover
   */
  name?: string;
  /**
   * Callback after `Popover` is toggled
   *
   * @param type - 'onMouseLeave' | 'onMouseEnter' | 'outsideClick' | 'onClick'
   */
  onToggle?: (open: boolean, type?: string, event?: Event) => void;
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
  customStyle?: CustomStyle;
  /**
   * Class to be added to PopperWrapper trigger
   */
  triggerClass?: string;
  /**
   * Closes the `Popover` when the escape key is pressed
   */
  closeOnEscape?: boolean;
  /**
   * Close on `boundaryElement` scroll
   */
  closeOnScroll?: boolean;
  /**
   * Close on Backdrop click
   */
  closeOnBackdropClick?: boolean;
  /**
   * Event triggering the `Popover`
   */
  on?: ActionType;
  /**
   * Add delay to the popover opening event
   */
  openDelay?: number;
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
   * Vertical offset from trigger
   *
   * <pre className="DocPage-codeBlock">
   * {
   *    small: '2px',
   *    medium: '4px',
   *    large: '8px'
   * }
   * </pre>
   */
  offset?: Offset;
  /**
   * Hides the `Popover` when its reference element is outside of the `Popover` boundaries
   */
  hideOnReferenceEscape?: boolean;
  /**
   * BoundaryElement for `Popover`
   */
  boundaryElement?: HTMLElement | null | React.RefObject<HTMLElement | null>;
  /**
   * Appends `trigger` wrapper inside body
   */
  appendToBody?: boolean;
  /**
   * Defines whether to show popover or not
   */
  disabled?: boolean;
  /**
   * Hides the `Popover` when its reference element is outside of the `Popover` boundaries
   */
  triggerCoordinates?: {
    x: number;
    y: number;
  };
} & BaseProps;

export const Popover = (props: PopoverProps) => {
  const {
    trigger,
    children,
    dark,
    className,
    position = 'bottom',
    customStyle,
    name,
    triggerClass,
    closeOnEscape,
    closeOnScroll,
    on = 'click',
    openDelay = 0,
    closeOnBackdropClick,
    // animationClass,
    offset = 'large',
    'data-test': dataTest,
    hideOnReferenceEscape,
    boundaryElement,
    appendToBody = true,
    onToggle,
    disabled,
    triggerCoordinates,
  } = props;
  const [open, setOpen] = React.useState<boolean>(!!props.open);

  React.useEffect(() => {
    if (props.open !== undefined) setOpen(props.open);
  }, [props.open]);

  const defaultOnToggle = React.useCallback((newOpen: boolean) => {
    setOpen(newOpen);
  }, []);

  const offsetMapping = {
    small: 2,
    medium: 4,
    large: 8,
  };

  const classes = classNames(
    {
      [styles['Popover']]: true,
      [styles['Popover--dark']]: dark,
    },
    className
  );

  const onToggleHandler = (isOpen: boolean, event?: Event, reason?: string) => {
    if (onToggle) {
      const reasonMapping = {
        click: 'onClick',
        hover: 'onMouseEnter',
        'outside-press': 'outsideClick',
      } as const;

      const type = (reasonMapping as Record<string, string>)[reason || 'click'] || 'onClick';
      onToggle && onToggle(isOpen, type, event);
    } else {
      defaultOnToggle && defaultOnToggle(isOpen);
    }
  };

  // Generate dynamic animation classes if customStyle has maxHeight
  // const dynamicAnimationClass = React.useMemo(() => {
  //   if (customStyle?.maxHeight) {
  //     return generateDynamicAnimationClasses(mapPositionToPlacement(position), customStyle.maxHeight);
  //   }
  //   return null;
  // }, [position, customStyle?.maxHeight]);

  // // Use dynamic animation if available, otherwise use the provided animationClass
  // const finalAnimationClass = dynamicAnimationClass || animationClass;

  return (
    <PopperWrapper
      placement={mapPositionToPlacement(position)}
      closeOnEscape={closeOnEscape}
      closeOnScroll={closeOnScroll}
      triggerMethod={on}
      openDelay={openDelay}
      closeOnBackdropClick={closeOnBackdropClick}
      // animationClass={animationClass}
      offset={offsetMapping[offset]}
      hideOnReferenceEscape={hideOnReferenceEscape}
      portalRoot={boundaryElement}
      appendToBody={appendToBody}
      // initialOpen={open}
      disabled={disabled}
      triggerCoordinates={triggerCoordinates}
      open={open}
      onOpenChange={onToggleHandler}
    >
      <PopoverTrigger asChild triggerClass={triggerClass}>
        <div className={triggerClass}>{trigger}</div>
      </PopoverTrigger>
      <PopoverContent
        style={customStyle}
        className={classes}
        data-test={dataTest || 'DesignSystem-Popover'}
        data-layer={true}
        data-opened={open}
        data-name={name}
      >
        {children}
      </PopoverContent>
    </PopperWrapper>
  );
};

Popover.displayName = 'Popover';

export default Popover;
