import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BaseHtmlProps, BaseProps } from '@/utils/types';
import classNames from 'classnames';

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
  const {
    children,
    className,
    ...rest
  } = props;

  const innerRef = React.useRef<HTMLDivElement>(null);

  React.useImperativeHandle(ref, () => innerRef.current!, [innerRef]);

  React.useEffect(() => {
    document.addEventListener('click', handleOutsideClick, true);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = React.useCallback((event: Event) => {
    const { onOutsideClick } = props;
    const element = innerRef;

    if (!event.target || !element.current) {
      return;
    }

    if (
      !ReactDOM.findDOMNode(element.current)!.contains(
        event.target as HTMLElement,
      )
    ) {
      onOutsideClick(event);
    }
  }, []);

  const classes = classNames({
    ['OutsideClick']: true
  }, className);

  return (
    <div ref={innerRef} {...rest} className={classes}>
      {children}
    </div>
  );
});

OutsideClick.displayName = 'OutsideClick';
export default OutsideClick;
