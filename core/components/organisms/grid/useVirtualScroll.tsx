import { useState, useEffect, useRef, useCallback } from 'react';

const useVirtualScroll = (totalLength: number, minItemHeight: number, buffer = 5) => {
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 0 });
  const [topPadding, setTopPadding] = useState(0);
  const [bottomPadding, setBottomPadding] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const calculateVisibleRows = useCallback(() => {
    if (containerRef.current) {
      const containerHeight = containerRef.current.clientHeight;
      const visibleRows = Math.ceil(containerHeight / minItemHeight);
      setVisibleRange({ start: 0, end: visibleRows + buffer });
      setBottomPadding((totalLength - visibleRows) * minItemHeight);
    }
  }, [minItemHeight, buffer, totalLength]);

  useEffect(() => {
    calculateVisibleRows();
    window.addEventListener('resize', calculateVisibleRows);
    return () => window.removeEventListener('resize', calculateVisibleRows);
  }, [calculateVisibleRows]);

  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  const onScroll = useCallback(
    debounce(() => {
      if (containerRef.current) {
        const { scrollTop, clientHeight } = containerRef.current;
        const currentOffset = Math.floor(scrollTop / minItemHeight);
        const visibleRows = Math.ceil(clientHeight / minItemHeight);

        const newStart = Math.max(0, currentOffset - buffer);
        const newEnd = Math.min(totalLength, currentOffset + visibleRows + buffer);

        setVisibleRange((prev) => {
          if (prev.start !== newStart || prev.end !== newEnd) {
            setTopPadding(newStart * minItemHeight);
            setBottomPadding((totalLength - newEnd) * minItemHeight);
            return { start: newStart, end: newEnd };
          }
          return prev;
        });
      }
    }, 100),
    [minItemHeight, buffer, totalLength]
  );

  return { containerRef, visibleRange, onScroll, topPadding, bottomPadding };
};

export default useVirtualScroll;
