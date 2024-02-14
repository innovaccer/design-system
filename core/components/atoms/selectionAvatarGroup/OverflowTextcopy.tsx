import React from 'react';

interface TooltipWrapperProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const TooltipWrapper: React.FC<TooltipWrapperProps> = ({ text, className, style }) => {
  const textRef = React.useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = React.useState(false);

  React.useEffect(() => {
    const checkOverflow = () => {
      const current = textRef.current;
      const isOverflow = current ? current.scrollWidth > current.clientWidth : false;
      setIsOverflowing(isOverflow);
    };

    // Initial check
    checkOverflow();

    // Add resize listener to re-check on window resize
    window.addEventListener('resize', checkOverflow);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', checkOverflow);
  }, [text]);

  if (isOverflowing) {
    return (
      <div className={`tooltip ${className}`} style={style}>
        <div className="tooltip-text" ref={textRef}>
          {text}
        </div>
        <span className="tooltip-content">{text}</span>
      </div>
    );
  } else {
    return (
      <div className={className} style={style} ref={textRef}>
        {text}
      </div>
    );
  }
};

export default TooltipWrapper;
