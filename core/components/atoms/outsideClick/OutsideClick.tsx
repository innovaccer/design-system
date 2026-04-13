import * as React from 'react';
import { BaseHtmlProps, BaseProps } from '@/utils/types';

export interface OutsideClickProps extends BaseHtmlProps<HTMLDivElement | HTMLSpanElement>, BaseProps {
  /**
   * Trigger the function on outside click
   */
  onOutsideClick: (event: Event) => void;
  /**
   * Element to be rendered
   */
  children: React.ReactElement<any>;
  /**
   * Defines the HTML element used for the wrapper
   * @default 'div'
   */
  wrapperType?: 'div' | 'span';
}

export const OutsideClick = React.forwardRef<HTMLDivElement | HTMLSpanElement, OutsideClickProps>((props, ref) => {
  const { children, className, onOutsideClick, wrapperType = 'div', ...rest } = props;

  const innerRef = React.useRef<HTMLDivElement | HTMLSpanElement>(null);

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

  const Wrapper = wrapperType;

  return (
    <Wrapper ref={innerRef} {...(rest as any)} className={className}>
      {children}
    </Wrapper>
  );
});

OutsideClick.displayName = 'OutsideClick';
export default OutsideClick;
