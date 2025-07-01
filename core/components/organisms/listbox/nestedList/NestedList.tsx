import * as React from 'react';
import { menuItemAnimation, getAnimationClass } from './Animation';

export interface NestedListProp {
  expanded?: boolean;
  nestedBody?: React.ReactNode;
}

function usePrevious(value?: boolean) {
  const ref = React.useRef<boolean>(false);
  React.useEffect(() => {
    if (value != undefined) {
      ref.current = value;
    }
  }, [value]);
  return ref.current;
}

export const NestedList = (props: NestedListProp) => {
  const { nestedBody, expanded } = props;
  const prevState = usePrevious(expanded);
  const [open, setOpen] = React.useState(expanded);
  const [keyframe, setKeyframe] = React.useState('');
  const listItemRef = React.useRef<HTMLDivElement>(null);
  const uniqueKey = Math.random().toString(36).substring(2, 6);

  const [animation, setAnimation] = React.useState(getAnimationClass(uniqueKey, expanded));

  React.useEffect(() => {
    if (prevState != undefined && prevState !== expanded) {
      setOpen(true);
    }
    requestAnimationFrame(() => {
      const result = menuItemAnimation(listItemRef, uniqueKey);
      setKeyframe(result);
    });

    const animationClass = getAnimationClass(uniqueKey, expanded);
    setAnimation(animationClass);
  }, [expanded]);

  const handleAnimationEnd = () => {
    !expanded && setOpen(false);
  };

  const styles: React.CSSProperties = {
    animation,
    overflow: 'hidden',
    animationFillMode: 'forwards',
  };

  return (
    <>
      <style>{keyframe}</style>
      {nestedBody && open && (
        <div
          style={styles}
          onAnimationEnd={handleAnimationEnd}
          data-test="DesignSystem-Listbox--Nested-Item"
          ref={listItemRef}
        >
          {nestedBody}
        </div>
      )}
    </>
  );
};

export default NestedList;
