import * as React from 'react';
import { menuItemAnimation, getAnimationClass } from './Animation';

export interface NestedListProp {
  expanded?: boolean;
  nestedRow?: React.ReactNode;
  id?: string;
}

export const NestedList = (props: NestedListProp) => {
  const { nestedRow, expanded, id } = props;
  const [open, setOpen] = React.useState(expanded);
  const [keyframe, setKeyframe] = React.useState('');
  const [uniqueID] = React.useState(`DesignSystem-Listbox-${id}--Nested-Item`);

  const [animation, setAnimation] = React.useState(getAnimationClass(uniqueID, expanded));

  React.useEffect(() => {
    if (expanded) {
      setOpen(true);
      requestAnimationFrame(() => {
        const result = menuItemAnimation(uniqueID);
        setKeyframe(result);
      });
    }
    const animationClass = getAnimationClass(uniqueID, expanded);
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
      {nestedRow && open && (
        <div
          style={styles}
          onAnimationEnd={handleAnimationEnd}
          data-test="DesignSystem-Listbox--Nested-Item"
          id={uniqueID}
        >
          {nestedRow}
        </div>
      )}
    </>
  );
};

export default NestedList;
