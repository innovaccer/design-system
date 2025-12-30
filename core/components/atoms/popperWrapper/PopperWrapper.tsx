import * as React from 'react';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  hide,
  useClick,
  useHover,
  useDismiss,
  useRole,
  useInteractions,
  useTransitionStyles,
  useMergeRefs,
  Placement,
  FloatingPortal,
  // FloatingFocusManager,
  useClientPoint,
  safePolygon,
} from '@floating-ui/react';
import { createStyleFromClass } from './utils';

export interface PopperWrapperProps {
  initialOpen?: boolean;
  placement?: Placement;
  modal?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean, event?: Event, reason?: string) => void;
  closeOnEscape?: boolean;
  closeOnScroll?: boolean;
  closeOnBackdropClick?: boolean;
  triggerMethod?: 'click' | 'hover';
  openDelay?: number;
  offset?: number;
  hideOnReferenceEscape?: boolean;
  animationClass?: {
    open: string;
    close: string;
  };
  portalRoot?: HTMLElement | null | React.RefObject<HTMLElement | null>;
  appendToBody?: boolean;
  disabled?: boolean;
  triggerCoordinates?: {
    x: number;
    y: number;
  };
}

export function usePopover({
  initialOpen = false,
  placement = 'bottom',
  modal,
  open: controlledOpen,
  onOpenChange: setControlledOpen,
  closeOnEscape = true,
  closeOnScroll = true,
  closeOnBackdropClick = true,
  triggerMethod = 'click',
  openDelay = 0,
  offset: offsetNumber,
  disabled = false,
  hideOnReferenceEscape,
  animationClass = {
    open: '',
    close: '',
  },
  portalRoot,
  appendToBody,
  triggerCoordinates,
}: PopperWrapperProps = {}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);

  const open = (controlledOpen && !disabled) ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(offsetNumber),
      flip({
        crossAxis: placement.includes('-'),
        fallbackAxisSideDirection: 'end',
        padding: 5,
      }),
      shift({ padding: 5 }),
      hide({
        strategy: hideOnReferenceEscape ? 'escaped' : 'referenceHidden',
      }),
    ],
  });

  const context = data.context;

  const click = useClick(context, {
    // enabled: controlledOpen == null && triggerMethod === 'click',
  });
  const dismiss = useDismiss(context, {
    escapeKey: closeOnEscape,
    ancestorScroll: closeOnScroll,
    outsidePress: closeOnBackdropClick,
  });
  const role = useRole(context);
  const hover = useHover(context, {
    enabled: triggerMethod === 'hover',
    handleClose: safePolygon(),
    delay: {
      open: openDelay,
      close: 0,
    },
  });

  const clientPoint = useClientPoint(context, {
    x: triggerCoordinates?.x,
    y: triggerCoordinates?.y,
    enabled: !!triggerCoordinates,
  });

  // Convert CSS class names to style objects for useTransitionStyles
  const openStyle = React.useMemo(() => createStyleFromClass(animationClass.open), [animationClass.open]);
  const closeStyle = React.useMemo(() => createStyleFromClass(animationClass.close), [animationClass.close]);

  const { isMounted, styles } = useTransitionStyles(context, {
    open: openStyle,
    close: closeStyle,
  });

  const interactions = useInteractions([click, dismiss, role, hover, clientPoint]);

  return React.useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
      modal,
      isMounted,
      styles,
      animationClass,
      portalRoot,
      appendToBody,
    }),
    [open, setOpen, interactions, data, modal, isMounted, styles, animationClass, portalRoot, appendToBody]
  );
}

type ContextType = ReturnType<typeof usePopover> | null;

const PopoverContext = React.createContext<ContextType>(null);

export const usePopoverContext = () => {
  const context = React.useContext(PopoverContext);

  if (context == null) {
    throw new Error('Popover components must be wrapped in <Popover />');
  }

  return context;
};

export function PopperWrapper({
  children,
  modal = false,
  ...restOptions
}: {
  children: React.ReactNode;
} & PopperWrapperProps) {
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  const popover = usePopover({ modal, ...restOptions });
  return <PopoverContext.Provider value={popover}>{children}</PopoverContext.Provider>;
}

interface PopoverTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
  triggerClass?: string;
}

export const PopoverTrigger = React.forwardRef<HTMLElement, React.HTMLProps<HTMLElement> & PopoverTriggerProps>(
  function PopoverTrigger({ children, asChild = false, triggerClass, ...props }, propRef) {
    const context = usePopoverContext();
    const childrenRef = (children as any).ref;
    const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

    const getClonedElement = () => {
      // `asChild` allows the user to pass any element as the anchor

      if (asChild && React.isValidElement(children)) {
        return React.cloneElement(
          children,
          context.getReferenceProps({
            ref,
            ...props,
            ...(children.props as object),
            'data-state': context.open ? 'open' : 'closed',
          } as any)
        );
      }
      return <></>;
    };

    if (asChild) {
      return <div className={triggerClass}>{getClonedElement()}</div>;
    }

    return (
      <button
        ref={ref}
        type="button"
        // The user can style the trigger based on the state
        data-state={context.open ? 'open' : 'closed'}
        {...context.getReferenceProps(props)}
      >
        {children}
      </button>
    );
  }
);

export const PopoverContent = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(function PopoverContent(
  { style, ...props },
  propRef
) {
  const { context: floatingContext, ...context } = usePopoverContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);

  // if (!floatingContext.open) return null;

  const { isMounted, styles, portalRoot, appendToBody } = context;

  const boundaryElement = appendToBody !== false && document ? document.body : portalRoot;

  // Check if reference element exists and position is valid
  const hasReference = context.refs.reference.current != null;
  const isValidPosition = context.x !== 0 && context.y !== 0;

  // Check if transform is at (0,0) - floating-ui uses transform for positioning
  const floatingStyles = context.floatingStyles || {};
  const transform = floatingStyles.transform || '';
  // Check if transform is matrix(1, 0, 0, 1, 0, 0) or translate(0px, 0px) which means at origin
  const isAtOrigin =
    transform.includes('matrix(1, 0, 0, 1, 0, 0)') ||
    transform.includes('translate(0px, 0px)') ||
    transform.includes('translate(0, 0)');
  const hasCalculatedPosition = !isAtOrigin && transform !== '';

  // Track if we've had a valid position at least once - use ref for synchronous updates
  const hasValidPositionRef = React.useRef(false);

  // Update ref synchronously when position becomes valid
  if (context.open && isValidPosition && hasReference && hasCalculatedPosition) {
    hasValidPositionRef.current = true;
  } else if (!context.open) {
    hasValidPositionRef.current = false;
  }

  // Determine if we should show the content
  const canShow = hasReference && ((isValidPosition && hasCalculatedPosition) || hasValidPositionRef.current);
  const shouldHide = context.middlewareData.hide?.referenceHidden || context.middlewareData.hide?.escaped || !canShow;

  const content = isMounted && hasReference && (
    // <FloatingFocusManager context={floatingContext}
    // // modal={context.modal}
    // initialFocus={-1}>
    <div
      ref={ref}
      style={{
        ...context.floatingStyles,
        ...style,
        visibility: shouldHide ? 'hidden' : 'visible',
        // Completely hide when position is not ready to prevent (0,0) flash
        opacity: canShow ? undefined : 0,
        pointerEvents: canShow ? undefined : 'none',
      }}
      {...context.getFloatingProps(props)}
    >
      <div style={styles}>{props.children}</div>
    </div>
    // </FloatingFocusManager>
  );

  // If appendToBody is explicitly false and no portalRoot is provided, don't use portal
  if (appendToBody === false && !portalRoot) {
    return content;
  }

  return <FloatingPortal root={boundaryElement}>{content}</FloatingPortal>;
});

export default PopperWrapper;
