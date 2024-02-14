import * as React from 'react';
import { Tooltip, Text } from '@/index';
// import { Text } from '@/index';

export const withOverflowText = (Textt: any) => {
  return function WithOverflowText(props: any) {
    console.log('ppptext com', Text, 'Textt', Textt);

    const textRef = React.useRef<HTMLDivElement>(null);
    const [isOverflowing, setIsOverflowing] = React.useState(false);

    React.useEffect(() => {
      const checkOverflow = () => {
        const current = textRef.current;
        const isOverflow = current
          ? current.scrollWidth > current.clientWidth || current.scrollHeight > current.clientHeight
          : false;
        console.log(
          'isOverflowisOverflow',
          isOverflow,
          'current',
          current,
          'current.scrollWidth',
          current!.scrollWidth,
          'current.clientWidth',
          current!.clientWidth,
          'offset',
          current?.offsetWidth
        );
        setIsOverflowing(isOverflow);
      };

      // Initial check
      requestAnimationFrame(() => checkOverflow());

      // Add resize listener to re-check on window resize
      window.addEventListener('resize', checkOverflow);

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', checkOverflow);
    }, [props]);

    if (isOverflowing) {
      console.log('overflowing', props);
      return (
        <Tooltip>
          <span ref={textRef} className="myclass">
            <Text
              {...props}
              // ref={textRef}
            />
            {/* overflow
            </Text> */}
          </span>
        </Tooltip>
      );
    }

    return (
      <span ref={textRef} className="myclass">
        <Text
          {...props}
          // ref={textRef}
        />
        {/* text
        </Text> */}
      </span>
    );
    // return <h1>dv</h1>;
  };
};
