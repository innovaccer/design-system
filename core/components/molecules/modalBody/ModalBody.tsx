import * as React from 'react';
import classNames from 'classnames';

const { useRef, useEffect, useState } = React;

export interface ModalBodyProps {
  children: React.ReactNode;
}

export const ModalBody: React.FunctionComponent<ModalBodyProps> = props => {
  const [scroll, setScroll] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { children } = props;

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
  });

  return (
    <div className={classes} ref={ref}>
      {children}
    </div>
  );
};

export default ModalBody;
