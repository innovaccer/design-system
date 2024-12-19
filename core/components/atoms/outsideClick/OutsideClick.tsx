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
}

export const OutsideClick = React.forwardRef<HTMLDivElement, OutsideClickProps>((props, ref) => {
  const { children, className, onOutsideClick, ...rest } = props;

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

  return (
    <div ref={innerRef} {...rest} className={className}>
      {children}
    </div>
  );
});

OutsideClick.displayName = 'OutsideClick';
export default OutsideClick;
