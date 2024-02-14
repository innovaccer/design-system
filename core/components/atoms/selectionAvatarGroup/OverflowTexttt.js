// import React, { useRef, useState, useEffect } from 'react';

// // A simple tooltip component
// const Tooltip = ({ text }) => (
//   <div
//     className="tooltip"
//     style={{ position: 'absolute', background: '#fff', border: '1px solid #ddd', padding: '4px 8px', zIndex: 100 }}
//   >
//     {text}
//   </div>
// );

// // The main component that wraps text
// const TextWithTooltip = ({ children, style }) => {
//   const textRef = useRef(null);
//   const [isOverflowing, setIsOverflowing] = useState(false);

//   useEffect(() => {
//     // Check if the text is overflowing its container
//     const checkOverflow = () => {
//       const element = textRef.current;
//       setIsOverflowing(element.scrollWidth > element.clientWidth);
//     };

//     // Check for overflow on mount and window resize
//     checkOverflow();
//     window.addEventListener('resize', checkOverflow);

//     // Cleanup listener on unmount
//     return () => {
//       window.removeEventListener('resize', checkOverflow);
//     };
//   }, []);

//   return (
//     <div style={{ position: 'relative', ...style }}>
//       <div ref={textRef} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', ...style }}>
//         {children}
//       </div>
//       {isOverflowing && <Tooltip text={children} />}
//     </div>
//   );
// };

// export default TextWithTooltip;
