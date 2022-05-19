import classNames from 'classnames';
import * as React from 'react';
import { flip, offset, shift } from '@floating-ui/react-dom';
import {
  FloatingFocusManager,
  FloatingPortal,
  useClick,
  useDismiss,
  useInteractions,
  useRole,
  useId,
  useFloating,
  useHover,
  FloatingContext,
} from '@floating-ui/react-dom-interactions';

export type PositionType =
  | 'bottom'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'right';

export type Offset = 'small' | 'medium' | 'large';
export interface PopoverProps {
  /**
   * Element triggering the `Popover`
   */
  trigger?: React.ReactElement<any>;
  /**
   * Element to which the popover will be bound to
   */
  boundaryElement?: React.RefObject<any> | null;
  /**
   * Determines from where the popover starts to open/close
   *
   */
  placement?: PositionType;
  /**
   * Elements to be rendered inside the popover
   */
  children: React.ReactElement<any>;
  /**
   * Custom inline styles to be added to popover
   */
  style?: React.CSSProperties;
  /**
   * ClassName to style the popover content
   */
  className?: string;
  /**
   * Shows `Popover` on hover
   *
   */
  hoverable?: boolean;
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
   * Handles open/close
   */
  open?: boolean;
  /**
   * Sets popover background to dark
   */
  dark?: boolean;
  /**
   * dissmiss object to configure when `Popover` is dismissed
   *
   * <pre className="DocPage-codeBlock">
   * {
   * enabled: true,
   * escapeKey: true,
   * referencePointerDown: true,
   * outsidePointerDown: true,
   * ancestorScroll: true,
   * bubbles: true,
   * }
   * </pre>
   *
   * https://floating-ui.com/docs/useDismiss
   */
  dismissOptions?: {
    enabled?: boolean;
    escapeKey?: boolean;
    referencePointerDown?: boolean;
    outsidePointerDown?: boolean;
    ancestorScroll?: boolean;
    bubbles?: boolean;
  };

  /**
   * Callback after `Popover` is toggled
   *
   * returns the popover context object
   */
  onToggle?: (context: FloatingContext) => void;
}

/**
 * @description Find DOM node from ref
 * @param {ref} ref React ref
 */

/**
 * Popup display additional information on click or hover event
 * @class Popup
 * @extends {React.Component<IProps, IState>}
 */
export const Popover: React.FC<PopoverProps> = (props) => {
  const {
    children,
    trigger,
    open,
    style: componentStyles,
    placement,
    hoverable,
    offset: componentOffset,
    dismissOptions,
    onToggle,
    className,
    dark,
    boundaryElement,
  } = props;

  const [isOpen, setOpen] = React.useState<boolean>(open ?? false);
  const [animationKeyframe, setKeyframe] = React.useState<string>('');
  const [animation, setAnimation] = React.useState<string>('');
  const [maxHeight, setMaxHeight] = React.useState<number>(0);

  const id = useId();
  const labelId = `${id}-label`;
  const descriptionId = `${id}-description`;
  const animationId = `${id}-animation`;

  let animationDelayTimer: NodeJS.Timeout | null = null;

  let offsetNumber = 2;
  if (componentOffset === 'small') {
    offsetNumber = 2;
  }
  if (componentOffset === 'medium') {
    offsetNumber = 4;
  }
  if (componentOffset === 'large') {
    offsetNumber = 8;
  }

  const onOpenChange = async (open: boolean) => {
    const isTop = currentPlacement.includes('top');
    const animationFrame = `
      @keyframes popper-open-${animationId} {
        from {
          max-height: 0;
          ${isTop ? `margin-top: 0px` : ''};
        }
        to {
          max-height: ${maxHeight}px;
          ${isTop ? `margin-top: -${maxHeight}px` : ''};
        }
      }
      @keyframes popper-close-${animationId} {
        from {
          max-height: ${maxHeight}px;
          ${isTop ? `margin-top: -${maxHeight}px` : ''};
        }
        to {
          max-height: 0;
          ${isTop ? `margin-top: 0px` : ''};
        }
      }
      `;

    if (maxHeight) {
      await setKeyframe(animationFrame);
      if (open) {
        await setAnimation(`popper-open-${animationId} 120ms cubic-bezier(0, 0, 0.38, 0.9), popper-fade-in 120ms`);
      } else {
        await setAnimation(`popper-close-${animationId} 120ms cubic-bezier(0.2, 0, 1, 0.9), fadeOut 120ms `);
      }
      animationDelayTimer = setTimeout(() => setOpen(open), 120);
    }
  };

  const {
    x,
    y,
    reference,
    floating,
    strategy,
    refs,
    context,
    placement: currentPlacement,
  } = useFloating({
    open: isOpen,
    onOpenChange: trigger ? onOpenChange : undefined,
    middleware: [offset(offsetNumber), flip({ boundary: boundaryElement as any, altBoundary: true }), shift()],
    placement,
  });

  React.useEffect(() => {
    if (!maxHeight) {
      const fn = async () => {
        await setOpen(true);
        const offsetHeight = refs.floating.current?.offsetHeight;
        if (offsetHeight) {
          setMaxHeight(offsetHeight);
        }
        setOpen(isOpen);
      };
      fn();
    }
    return () => {
      clearTimeout(Number(animationDelayTimer));
    };
  }, []);

  const interactions = [
    useClick(context, { pointerDown: false }),
    useRole(context),
    useDismiss(context, { ...dismissOptions }),
  ];

  const { getReferenceProps, getFloatingProps } = useInteractions(
    hoverable ? [...interactions, useHover(context)] : interactions
  );

  React.useEffect(() => {
    onToggle && onToggle(context);
  }, [context]);

  const classes = classNames(
    {
      ['Next-Popover--dark']: dark,
      [`${className}`]: className,
    },
    `Next-Popover`
  );

  const positionOffset = {
    'auto-start': 'top left',
    auto: 'top',
    'auto-end': 'top right',
    'top-start': 'bottom left',
    top: 'bottom left',
    'top-end': 'bottom right',
    'right-start': 'top right',
    right: 'top right',
    'right-end': 'top right',
    'bottom-end': 'top right',
    bottom: 'top',
    'bottom-start': 'top left',
    'left-end': 'top left',
    left: 'top left',
    'left-start': 'top left',
  };

  const popover = (
    <FloatingFocusManager context={context}>
      <div
        data-test="DesignSystem-Popover"
        {...getFloatingProps({
          className: classes,
          ref: floating,
          style: {
            left: x ?? '',
            top: y ?? '',
            position: strategy,
            animation: animation,
            overflow: 'clip',
            transformOrigin: positionOffset[currentPlacement],
            ...componentStyles,
          },
          'aria-labelledby': labelId,
          'aria-describedby': descriptionId,
          onAnimationEnd: () => {
            if (currentPlacement.includes('top')) {
              Object.assign(refs.floating.current?.style, {
                marginTop: `-${maxHeight}px`,
              });
            }
          },
        })}
      >
        {children}
      </div>
    </FloatingFocusManager>
  );

  const referenceProps = { ...getReferenceProps({ ref: reference }) };

  return (
    <>
      {trigger
        ? React.cloneElement(trigger, {
            ...referenceProps,
            onClick: open ? () => onOpenChange(!isOpen) : referenceProps?.onClick,
          })
        : null}
      <style>{animationKeyframe}</style>
      {isOpen && trigger && <FloatingPortal>{popover}</FloatingPortal>}
      {isOpen && !trigger && popover}
    </>
  );
};

Popover.defaultProps = {
  placement: 'bottom-start',
  offset: 'medium',
};

export default Popover;
