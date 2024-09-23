// import * as React from 'react';
// import { menuItemAnimation, getAnimationClass } from './Animation';
// // import { flushSync } from 'react-dom';

// export interface NestedListProp {
//   expanded?: boolean;
//   nestedBody?: React.ReactNode;
// }

// function usePrevious(value?: boolean) {
//   const ref = React.useRef<boolean>();
//   React.useEffect(() => {
//     if (value != undefined) {
//       ref.current = value;
//     }
//   }, [value]);
//   return ref.current;
// }

// export const NestedList = (props: NestedListProp) => {
//   const { nestedBody, expanded } = props;
//   const prevState = usePrevious(expanded);
//   const [open, setOpen] = React.useState(expanded);
//   const [keyframe, setKeyframe] = React.useState('');
//   const listItemRef = React.createRef<HTMLDivElement>();
//   const uniqueKey = Math.random().toString(36).substring(2, 6);

//   const [animation, setAnimation] = React.useState(getAnimationClass(uniqueKey, expanded));

//   React.useEffect(() => {
//     console.log('bbbbinside calculationnn');
//     if (prevState != undefined && prevState !== expanded) {
//       // flushSync(() => {
//         setOpen(true);
//       // });
//     }
//     requestAnimationFrame(() => {
//       const result = menuItemAnimation(listItemRef, uniqueKey);
//       setKeyframe(result);
//     });

//     const animationClass = getAnimationClass(uniqueKey, expanded);
//     setAnimation(animationClass);
//   }, [expanded]);

//   const handleAnimationEnd = () => {
//     !expanded && setOpen(false);
//       // flushSync(() => {
//       //   setOpen(false);
//       // });
//   };

//   const styles: React.CSSProperties = {
//     animation,
//     overflow: 'hidden',
//     animationFillMode: 'forwards',
//   };

//   return (
//     <div ref={listItemRef} style={styles} onAnimationEnd={handleAnimationEnd}>
//       <style>{keyframe}</style>
//       {nestedBody && open && <div data-test="DesignSystem-Listbox--Nested-Item">{nestedBody}</div>}
//     </div>
//   );
// };

// export default NestedList;
