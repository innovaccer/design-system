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
  FloatingFocusManager,
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
  /**
   * When true, uses the trigger element as-is without cloning.
   * Useful for components that manage their own refs internally.
   */
  // useTriggerAsIs?: boolean;
  /**
   * External reference element to use instead of the trigger element.
   * Useful when the actual reference element is inside the trigger component.
   */
  referenceElement?:
    | React.RefObject<HTMLElement | HTMLInputElement | HTMLDivElement | null>
    | HTMLElement
    | HTMLInputElement
    | HTMLDivElement
    | null;
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
  hideOnReferenceEscape,
  animationClass = {
    open: '',
    close: '',
  },
  portalRoot,
  appendToBody,
  // useTriggerAsIs,
  referenceElement,
}: PopperWrapperProps = {}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);

  const open = controlledOpen ?? uncontrolledOpen;
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
    // elements: referenceElement ? {
    //   reference: 'current' in referenceElement ? referenceElement.current : referenceElement
    // } : undefined,
  });

  const context = data.context;

  const click = useClick(context, {
    enabled: controlledOpen == null && triggerMethod === 'click',
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

  // Convert CSS class names to style objects for useTransitionStyles
  const openStyle = React.useMemo(() => createStyleFromClass(animationClass.open), [animationClass.open]);
  const closeStyle = React.useMemo(() => createStyleFromClass(animationClass.close), [animationClass.close]);

  const { isMounted, styles } = useTransitionStyles(context, {
    open: openStyle,
    close: closeStyle,
  });

  const interactions = useInteractions([click, dismiss, role, hover]);

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
      // useTriggerAsIs,
      referenceElement,
    }),
    [
      open,
      setOpen,
      interactions,
      data,
      modal,
      isMounted,
      styles,
      animationClass,
      portalRoot,
      appendToBody,
      // useTriggerAsIs,
      referenceElement,
    ]
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
  console.log('popoverpopover', popover);
  return <PopoverContext.Provider value={popover}>{children}</PopoverContext.Provider>;
}

interface PopoverTriggerProps {
  children: React.ReactNode;
  asChild?: boolean;
  triggerClass?: string;
}

export const PopoverTrigger = React.forwardRef<HTMLElement, React.HTMLProps<HTMLElement> & PopoverTriggerProps>(
  function PopoverTrigger({ children, asChild = false, ...props }, propRef) {
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

    // If useTriggerAsIs is true, clone the element but preserve its existing ref
    // if (context.useTriggerAsIs && React.isValidElement(children)) {
    //   // For components that manage their own refs internally (like Combobox),
    //   // we need to set the floating-ui ref on the actual input element
    //   // The context ref (like inputTriggerRef) should be used by floating-ui
    //   return React.cloneElement(
    //     children,
    //     context.getReferenceProps({
    //       ...props,
    //       ...(children.props as object),
    //       'data-state': context.open ? 'open' : 'closed',
    //     } as any)
    //   );
    // }

    if (asChild) {
      return (
        <div className={props.triggerClass} style={{ width: 'fit-content' }}>
          {getClonedElement()}
        </div>
      );
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

  if (!floatingContext.open) return null;

  const { isMounted, styles, portalRoot, appendToBody } = context;

  const boundaryElement = appendToBody && document ? document.body : portalRoot;

  return (
    <FloatingPortal root={boundaryElement}>
      {isMounted && (
        <FloatingFocusManager context={floatingContext} modal={context.modal}>
          <div
            ref={ref}
            style={{
              ...context.floatingStyles,
              ...style,
              visibility:
                context.middlewareData.hide?.referenceHidden || context.middlewareData.hide?.escaped
                  ? 'hidden'
                  : 'visible',
            }}
            {...context.getFloatingProps(props)}
          >
            <div style={styles}>{props.children}</div>
          </div>
        </FloatingFocusManager>
      )}
    </FloatingPortal>
  );
});

export default PopperWrapper;
