import React, { useState, useRef, useEffect } from 'react';
import * as ReactDOM from 'react-dom';
import { useFloating, offset, flip, shift, Placement } from '@floating-ui/react';
import { OutsideClick } from '@/index';
import classNames from 'classnames';
import { PositionType } from '@/common.type';
import { flushSync } from 'react-dom';

type ActionType = 'click' | 'hover';
type Offset = 'small' | 'medium' | 'large';

export interface PopperWrapperProps {
  init?: boolean;
  /**
   * Element triggering the `Popover`
   */
  trigger: React.ReactElement<any>;
  boundaryElement?: Element | null;
  triggerClass?: string;
  placement: PositionType;
  children: React.ReactElement<any>;
  style: React.CSSProperties;
  /**
   * Appends `trigger` wrapper inside body
   */
  appendToBody: boolean;
  /**
   * Event triggering the `Popover`
   */
  on: ActionType;
  /**
   * Holds `Popover` on hover
   *
   * **Use only if you are using `on = 'hover'`**
   */
  hoverable: boolean;
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
  offset: Offset;
  /**
   * Close on Backdrop click
   */
  closeOnBackdropClick: boolean;
  /**
   * Close on `boundaryElement` scroll
   */
  closeOnScroll?: boolean;
  /**
   * Handles open/close
   */
  open?: boolean;
  hide?: boolean;
  /**
   * Callback after `Popover` is toggled
   *
   * type: 'onMouseLeave' | 'onMouseEnter' | 'outsideClick' | 'onClick';
   */
  onToggle: (open: boolean, type?: string) => void;
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

export const PopperWrapper: React.FC<PopperWrapperProps> = (props: PopperWrapperProps) => {
  const {
    placement,
    appendToBody = true,
    boundaryElement,
    triggerCoordinates,
    offset: offsetProp = 'medium',
    children,
    open,
    animationClass,
    trigger,
    on = 'click',
    triggerClass,
    disabled = false,
    closeOnBackdropClick = true,
    onToggle,
    style = {},
    hoverable = true,
    openDelay,
    closeOnScroll,
  } = props;

  const [zIndex, setZIndex] = useState<number>();
  const [animationKeyframe, setAnimationKeyframe] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>((open && !disabled) || false);
  const [uniqueKey, setUniqueKey] = useState<string>('');

  const triggerRef = useRef<HTMLElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | undefined>(undefined);
  const throttleWaitRef = useRef<boolean>(false);

  const hoverableDelay = 100;
  const offsetMapping: Record<Offset, string> = {
    small: '2px',
    medium: '4px',
    large: '8px',
  };

  // Convert PositionType to Placement for @floating-ui
  const getFloatingPlacement = (pos: PositionType): Placement => {
    return pos as Placement;
  };

  const { refs, floatingStyles } = useFloating({
    placement: getFloatingPlacement(placement),
    middleware: [offset(parseInt(offsetMapping[offsetProp as Offset])), flip(), shift()],
  });

  const getZIndexForLayer = (node: Element | null) => {
    if (node === null) {
      return;
    }

    const layerNode = node.closest('[data-layer]') || document.body;
    const zIndexValue =
      layerNode === document.body ? 'auto' : parseInt(window.getComputedStyle(layerNode).zIndex || '0', 10);
    return zIndexValue === 'auto' || isNaN(zIndexValue) ? 500 : zIndexValue;
  };

  const getUpdatedStyle = (oldStyle: React.CSSProperties, placement: PositionType, offset: Offset) => {
    const newStyle = { ...style, ...oldStyle };
    const position = placement ? placement.split('-')[0] : placement;
    switch (position) {
      case 'top':
        newStyle.marginBottom = offsetMapping[offset];
        break;

      case 'bottom':
        newStyle.marginTop = offsetMapping[offset];
        break;

      case 'left':
        newStyle.marginRight = offsetMapping[offset];
        break;

      case 'right':
        newStyle.marginLeft = offsetMapping[offset];
        break;
    }
    if (triggerCoordinates) {
      newStyle.position = 'absolute';
      newStyle.transform = `translate(${triggerCoordinates.x}px, ${triggerCoordinates.y}px)`;
    }
    return newStyle;
  };

  const togglePopper = (type: string, newValue?: boolean) => {
    onToggle(newValue === undefined ? !open : newValue, type);
  };

  const doesEventContainsElement = (event: Event, ref: React.RefObject<any>) => {
    const el = ref.current;
    return el && el.contains(event.target as HTMLElement);
  };

  const onClickHandler = () => {
    // to add delay only while opening
    if (openDelay && !isOpen) {
      window.setTimeout(() => {
        togglePopper('onClick');
      }, openDelay);
    } else {
      togglePopper('onClick');
    }
  };

  const handleMouseEnter = () => {
    if (on === 'hover') {
      if (timerRef.current) clearTimeout(timerRef.current);

      if (openDelay) {
        timerRef.current = window.setTimeout(() => {
          setIsOpen(true);
          togglePopper('mouseEnter', true);
        }, openDelay);
      } else {
        onToggle(true, 'mouseEnter');
        setIsOpen(true);
      }
    }
  };

  const handleMouseLeave = () => {
    if (on === 'hover') {
      if (hoverable) {
        if (timerRef.current) clearTimeout(timerRef.current);

        timerRef.current = window.setTimeout(() => {
          onToggle(false, 'mouseLeave');
        }, hoverableDelay);
      } else {
        onToggle(false, 'mouseLeave');
        setIsOpen(false);
      }
    }
  };

  const boundaryScrollHandler = () => {
    if (on === 'click' && closeOnScroll) {
      if (open) {
        if (!throttleWaitRef.current) {
          togglePopper('onScroll', false);
          throttleWaitRef.current = true;
        }
      }
    }
  };

  const addBoundaryScrollHandler = () => {
    if (boundaryElement && boundaryElement.addEventListener) {
      boundaryElement.addEventListener('scroll', boundaryScrollHandler);
    }
  };

  const removeBoundaryScrollHandler = () => {
    if (boundaryElement && boundaryElement.removeEventListener) {
      boundaryElement.removeEventListener('scroll', boundaryScrollHandler);
    }
  };

  useEffect(() => {
    addBoundaryScrollHandler();
    const triggerElement = triggerRef.current;
    const zIndexValue = getZIndexForLayer(triggerElement);
    setZIndex(zIndexValue === undefined ? zIndexValue : zIndexValue + 1);

    return () => {
      removeBoundaryScrollHandler();
    };
  }, [boundaryElement]);

  useEffect(() => {
    throttleWaitRef.current = false;
    setAnimationKeyframe('');
    if (open && !disabled) {
      const triggerElement = triggerRef.current;
      const zIndexValue = getZIndexForLayer(triggerElement);
      setZIndex(zIndexValue === undefined ? zIndexValue : zIndexValue + 1);
      setIsOpen(true);
    } else if (!open && animationClass) {
      setIsOpen(false);
    }
  }, [open, disabled, animationClass]);

  const getTriggerElement = (ref: React.Ref<any>) => {
    const options =
      on === 'hover' && !disabled
        ? {
            ref,
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            onFocus: handleMouseEnter,
            onBlur: handleMouseLeave,
          }
        : {
            ref,
            onClick: (ev: React.MouseEvent<HTMLDivElement>) => {
              ev.stopPropagation();
              !disabled && onClickHandler();
            },
          };

    const classes = classNames('PopperWrapper-trigger', triggerClass);

    const shouldPopoverClose = (clicked: HTMLElement): boolean => {
      const popover = popupRef.current as HTMLElement;
      const container = document.body;
      const popoverIndex = popover && parseInt(window.getComputedStyle(popover).zIndex);
      let clickInsideLayer = false;
      let shouldClose = false;

      const openedLayers = container.querySelectorAll('[data-opened="true"]');
      openedLayers.forEach((layer) => {
        if (layer && layer.contains(clicked)) {
          clickInsideLayer = true;
          const clickedIndex = parseInt(window.getComputedStyle(layer).zIndex);
          if (popoverIndex > clickedIndex) {
            shouldClose = true;
            return;
          }
        }
      });

      if (container.isEqualNode(clicked) || shouldClose || !container.contains(clicked) || !clickInsideLayer) {
        return true;
      }
      return false;
    };

    const onOutsideClickHandler = (event: Event) => {
      if (open && shouldPopoverClose(event.target as HTMLElement) && closeOnBackdropClick) {
        if (!doesEventContainsElement(event, popupRef)) {
          togglePopper('outsideClick');
        }
      }
    };

    return (
      <OutsideClick className={classes} onOutsideClick={onOutsideClickHandler} {...options}>
        {trigger}
      </OutsideClick>
    );
  };

  const getPopperChildren = () => {
    const newStyle = offsetProp ? getUpdatedStyle(floatingStyles, placement, offsetProp as Offset) : floatingStyles;
    let childrenStyles = {
      ...newStyle,
      zIndex,
    };
    let classes = '';

    if (!animationClass) {
      const maxHeight = popupRef.current?.offsetHeight;
      // we need to check for transformStyles so that we open the popover at correct position (left/right)
      const transformStyles = popupRef.current?.style.getPropertyValue('transform');
      if (transformStyles && maxHeight && placement && !animationKeyframe) {
        const newUniqueKey = Math.random().toString(36).substring(2, 6);
        const isTop = placement.includes('top');

        const popperAnimation = `
        @keyframes popper-open-${newUniqueKey} {
          from { 
            max-height: 0;
            ${isTop ? `margin-top: ${maxHeight}px` : ''};
          }
          to {
            max-height: ${maxHeight}px;
            ${isTop ? `margin-top: 0px` : ''};
          }
        }
        @keyframes popper-close-${newUniqueKey} {
          from {
            max-height: ${maxHeight}px;
            ${isTop ? `margin-top: 0px` : ''};
          }
          to {
            max-height: 0;
            ${isTop ? `margin-top: ${maxHeight}px` : ''};
          }
        }
        `;

        setAnimationKeyframe(popperAnimation);
        setUniqueKey(newUniqueKey);
      }

      // defining popper-fade-in custom keyframe as it is specific to popover usecase.
      const popperAnimationStyles = {
        animation: open
          ? `popper-open-${uniqueKey} 120ms cubic-bezier(0, 0, 0.38, 0.9), popper-fade-in 120ms`
          : `popper-close-${uniqueKey} 120ms cubic-bezier(0.2, 0, 1, 0.9), fadeOut 100ms`,
      };

      childrenStyles = {
        ...childrenStyles,
        ...popperAnimationStyles,
        overflow: 'hidden',
      };
    } else {
      classes = classNames(
        {
          [`${animationClass.open}`]: isOpen,
          [`${animationClass.close}`]: !isOpen,
        },
        children.props.className
      );
    }

    const childProps = {
      ref: popupRef,
      style: childrenStyles,
      'data-placement': placement,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onAnimationEnd: () => {
        if (!open) {
          flushSync(() => {
            setIsOpen(false);
          });
        }
      },
    };

    const element = React.cloneElement(
      children,
      animationClass ? { ...childProps, className: classes } : { ...childProps }
    );
    return element;
  };

  // Set refs for floating-ui
  useEffect(() => {
    refs.setReference(triggerRef.current);
    refs.setFloating(popupRef.current);
  }, [refs]);

  return (
    <>
      {animationKeyframe && <style>{animationKeyframe}</style>}
      {getTriggerElement(triggerRef)}

      {isOpen &&
        appendToBody &&
        !triggerCoordinates &&
        ReactDOM.createPortal(
          <div ref={refs.setFloating} style={floatingStyles}>
            {getPopperChildren()}
          </div>,
          document.body
        )}

      {isOpen &&
        appendToBody &&
        triggerCoordinates &&
        ReactDOM.createPortal(
          <div ref={refs.setFloating} style={floatingStyles}>
            {getPopperChildren()}
          </div>,
          document.body
        )}

      {isOpen && !appendToBody && !triggerCoordinates && (
        <div ref={refs.setFloating} style={floatingStyles}>
          {getPopperChildren()}
        </div>
      )}
    </>
  );
};

export default PopperWrapper;
