import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps } from '@/utils/types';

const { useRef, useEffect, useState } = React;

export interface ModalBodyProps extends BaseProps {
  children: React.ReactNode;
}

export const ModalBody = (props: ModalBodyProps) => {
  const [scroll, setScroll] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { children, className } = props;

  const baseProps = extractBaseProps(props);

  useEffect(() => {

    const scrollHeight = ref && ref.current ? ref.current.scrollHeight : 0;
    const clientHeight = ref && ref.current ? ref.current.clientHeight : 0;

    if (scrollHeight > clientHeight) {
      setScroll(true);
    }
  }, [ref]);

  const classes = classNames({
    'Modal-body': true,
    ['Modal-body--border']: scroll
  }, className);

  return (
    <div data-test="DesignSystem-ModalBody" {...baseProps} className={classes} ref={ref}>
      {children}
    </div>
  );
};

ModalBody.displayName = 'ModalBody';

export default ModalBody;
