import * as React from 'react';
import { BaseHtmlProps, BaseProps } from '@/utils/types';

export interface OutsideClickProps extends BaseHtmlProps<HTMLDivElement>, BaseProps {
  /**
   * Trigger the function on outside click
   */
  onOutsideClick: (event: Event) => void;
  /**
   * Element to be rendered
   */
  children: React.ReactElement<any>;
  /**
   * HTML element to use as the wrapper
   * @default 'div'
   */
  wrapperElement?: 'div' | 'span';
}

export const OutsideClick = React.forwardRef<HTMLDivElement, OutsideClickProps>((props, ref) => {
  const { children, className, onOutsideClick, wrapperElement = 'div', ...rest } = props;

  const innerRef = React.useRef<HTMLDivElement>(null);

  React.useImperativeHandle(ref, () => innerRef.current!, [innerRef]);

  React.useEffect(() => {
    document.addEventListener('click', handleOutsideClick, true);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = React.useCallback((event: Event) => {
    const element = innerRef;

    if (!event.target || !element.current) {
      return;
    }

    if (!element.current!.contains(event.target as HTMLElement)) {
      onOutsideClick(event);
    }
  }, []);

  const WrapperTag = wrapperElement as React.ElementType;

  return (
    <WrapperTag ref={innerRef} {...rest} className={className}>
      {children}
    </WrapperTag>
  );
});

OutsideClick.displayName = 'OutsideClick';
export default OutsideClick;
