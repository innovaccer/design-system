import React, { useState, useEffect, useRef, useCallback } from 'react';
import { BaseProps } from '@/utils/types';
import styles from '@css/components/grid.module.css';

export const isElementInView = (container: HTMLElement, element: Element) => {
  const containerTop = container.offsetTop;
  const elementRect = element.getBoundingClientRect();
  const elementTop = elementRect.top;
  const elementHeight = elementRect.height;

  return elementHeight - (containerTop - elementTop) > 0;
};

interface VirtualScrollProps extends BaseProps {
  buffer?: number;
  length?: number;
  offset?: number;
  minItemHeight: number;
  totalLength: number;
  renderItem: (index: number, item?: object) => React.ReactElement;
  onScroll?: (event: Event, element: HTMLElement) => void;
}

const VirtualList = (props: VirtualScrollProps) => {
  const {
    buffer = 10,
    length = 200,
    offset: initialOffset = 0,
    minItemHeight,
    totalLength,
    renderItem,
    onScroll,
    ...rest
  } = props;

  const [offset, setOffset] = useState(initialOffset);
  const [avgRowHeight, setAvgRowHeight] = useState(minItemHeight);
  const [init, setInit] = useState(false);
  const listRef = useRef<HTMLDivElement | null>(null);
  const lastScrollTop = useRef(0);
  const prevTotalLength = useRef(totalLength);

  useEffect(() => {
    updateOffset(initialOffset);
  }, [initialOffset]);

  // Reset virtualization state only when data length decreases (e.g. during sorting)
  // but not when it increases (e.g. during infinite scroll)
  useEffect(() => {
    if (totalLength < prevTotalLength.current) {
      setOffset(0);
      setAvgRowHeight(minItemHeight);
    }
    prevTotalLength.current = totalLength;
  }, [totalLength, minItemHeight]);

  // Add effect to handle external scroll events
  useEffect(() => {
    const handleExternalScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target && target.classList.contains(styles['Grid-head']) && listRef.current) {
        listRef.current.scrollLeft = target.scrollLeft;
      }
    };

    document.addEventListener('scroll', handleExternalScroll, true);
    return () => {
      document.removeEventListener('scroll', handleExternalScroll, true);
    };
  }, []);

  const updateOffset = useCallback(
    (prevOffset: number) => {
      const offsetDiff = prevOffset - offset;
      if (listRef.current) {
        const el = listRef.current as HTMLElement;
        const items = el.querySelectorAll('.VS-item');

        let heightAdded = 0;
        let currOffset = prevOffset;
        const start = Math.min(offset, buffer);
        const end = start + offsetDiff;
        for (let i = Math.min(items.length, end) - 1; i >= start; i--) {
          const inView = isElementInView(el, items[i]);
          if (inView) {
            currOffset--;
            const rowHeight = items[i].clientHeight;
            heightAdded += rowHeight;
          } else {
            break;
          }
        }

        if (items.length < end) {
          const diff = end - items.length;
          heightAdded += diff * minItemHeight;
          currOffset -= diff;
        }

        const newAvgRowHeight =
          currOffset === 0 ? minItemHeight : (avgRowHeight * prevOffset - heightAdded) / currOffset;

        setOffset(currOffset);
        setAvgRowHeight(Math.max(minItemHeight, newAvgRowHeight));
      }
    },
    [offset, buffer, avgRowHeight, minItemHeight]
  );

  const onScrollHandler = useCallback(() => {
    if (listRef.current) {
      const el = listRef.current as HTMLElement;
      const { scrollTop } = el;
      const direction = Math.floor(scrollTop - lastScrollTop.current);

      // Handle vertical scroll
      if (direction !== 0) {
        const items = el.querySelectorAll('.VS-item');
        let newOffset = offset;
        let newAvgRowHeight = avgRowHeight;
        const start = Math.min(offset, buffer);

        // cursor scrolls down
        if (direction > 0) {
          if (offset < totalLength - length) {
            let heightAdded = 0;
            for (let i = start; i < items.length; i++) {
              const inView = isElementInView(el, items[i]);
              const rowHeight = items[i].clientHeight;
              if (!inView) {
                heightAdded += rowHeight;
                newOffset++;
              } else {
                break;
              }
            }
            if (heightAdded < direction) {
              const heightLeft = direction - heightAdded;
              const offsetToBeAdded = Math.floor(heightLeft / minItemHeight);
              newOffset += offsetToBeAdded;
              heightAdded += offsetToBeAdded * minItemHeight;
            }
            newAvgRowHeight = newOffset > 0 ? (offset * avgRowHeight + heightAdded) / newOffset : minItemHeight;

            setOffset(Math.min(newOffset, totalLength - length));
            setAvgRowHeight(Math.max(minItemHeight, newAvgRowHeight));
          }
        } else {
          const scrollDiff = items[start]?.getBoundingClientRect().y - el?.getBoundingClientRect().y;
          if (scrollDiff > 0) {
            const offsetDiff = Math.floor(scrollDiff / minItemHeight) || 1;
            const newOffset = offset - offsetDiff;
            if (newOffset < totalLength - (length + buffer)) {
              setOffset(Math.max(0, newOffset));
            }
          }
        }

        lastScrollTop.current = scrollTop;
      }

      // Always trigger scroll event for horizontal sync
      if (onScroll) {
        const syntheticEvent = new Event('scroll');
        Object.defineProperty(syntheticEvent, 'target', { value: el });
        onScroll(syntheticEvent, el);
      }
    }
  }, [offset, avgRowHeight, buffer, length, minItemHeight, totalLength, onScroll]);

  const renderItems = (start: number, end: number) => {
    return Array.from({ length: end - start + 1 }, (_, index) => {
      const rowIndex = start + index;
      const component = renderItem(rowIndex);
      return React.cloneElement(component, {
        key: rowIndex,
        className: ['VS-item', (component.props as any)?.className].join(' ').trim(),
      } as any);
    });
  };

  const start = Math.max(0, offset - buffer);
  const end = Math.min(offset + (length + buffer) - 1, totalLength - 1);

  const topPadding = Math.max(0, start * avgRowHeight);
  const bottomPadding = Math.max(0, (totalLength - end - 1) * avgRowHeight);

  return (
    <div
      {...rest}
      ref={(el: HTMLDivElement) => {
        listRef.current = el;
        if (!init) setInit(true);
      }}
      onScroll={onScrollHandler}
    >
      {init && (
        <>
          <div
            style={{
              flexShrink: 0,
              height: topPadding,
            }}
          />
          {renderItems(start, end)}
          <div
            style={{
              flexShrink: 0,
              height: bottomPadding,
            }}
          />
        </>
      )}
    </div>
  );
};

export default VirtualList;
