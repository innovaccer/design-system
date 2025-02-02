import React, { useState, useEffect, useRef, useCallback } from 'react';

export const isInView = (container, element) => {
  const containerTop = container.offsetTop;
  const elementRect = element.getBoundingClientRect();
  const elementTop = elementRect.top;
  const elementHeight = elementRect.height;

  return elementHeight - (containerTop - elementTop) > 0;
};

const VirtualScroll = ({
  buffer = 10,
  length = 30,
  offset: initialOffset = 0,
  minItemHeight,
  totalLength,
  renderItem,
  onScroll,
  onEndReached, // New callback prop
  forwardRef,
  ...rest
}) => {
  const [offset, setOffset] = useState(initialOffset);
  const [avgRowHeight, setAvgRowHeight] = useState(minItemHeight);
  const [init, setInit] = useState(false);
  const listRef = useRef(null);
  const lastScrollTop = useRef(0);

  // sets the initial scroll position of the list
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.requestAnimationFrame(() => {
        if (listRef.current) {
          listRef.current.scrollTop = offset * avgRowHeight;
        }
      });
    }
  }, [offset, avgRowHeight]);

  useEffect(() => {
    updateOffset(initialOffset);
  }, [initialOffset, updateOffset]);

  const updateOffset = useCallback(
    (prevOffset) => {
      const offsetDiff = prevOffset - offset;
      if (listRef.current) {
        const el = listRef.current;
        const items = el.querySelectorAll('.VS-item');

        let heightAdded = 0;
        let currOffset = prevOffset;
        const start = Math.min(offset, buffer);
        const end = start + offsetDiff;
        for (let i = Math.min(items.length, end) - 1; i >= start; i--) {
          const inView = isInView(el, items[i]);
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

  const onScrollHandler = useCallback(
    (event) => {
      if (listRef.current) {
        const el = listRef.current;
        const { scrollTop, scrollHeight, clientHeight } = el;
        const direction = Math.floor(scrollTop - lastScrollTop.current);

        if (direction === 0) return;

        const items = el.querySelectorAll('.VS-item');
        let newOffset = offset;
        let newAvgRowHeight = avgRowHeight;
        const start = Math.min(offset, buffer);

        // cursor scrolls down
        if (direction > 0) {
          if (offset < totalLength - length) {
            let heightAdded = 0;
            for (let i = start; i < items.length; i++) {
              const inView = isInView(el, items[i]);
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
          const scrollDiff = items[start].getBoundingClientRect().y - el.getBoundingClientRect().y;
          if (scrollDiff > 0) {
            const offsetDiff = Math.floor(scrollDiff / minItemHeight) || 1;
            const newOffset = offset - offsetDiff;
            if (newOffset < totalLength - (length + buffer)) {
              setOffset(Math.max(0, newOffset));
            }
          }
        }

        lastScrollTop.current = scrollTop;

        // Check if user has scrolled to the end
        if (scrollTop + clientHeight >= scrollHeight - minItemHeight) {
          if (onEndReached) onEndReached();
        }
      }

      if (onScroll) onScroll(event);
    },
    [offset, avgRowHeight, buffer, length, minItemHeight, totalLength, onScroll, onEndReached]
  );

  const renderItems = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, index) => {
      const rowIndex = start + index;
      const component = renderItem(rowIndex);
      return React.cloneElement(component, {
        key: rowIndex,
        className: ['VS-item', component.props.className].join(' ').trim(),
      });
    });
  };

  const start = Math.max(0, offset - buffer);
  const end = Math.min(offset + (length + buffer) - 1, totalLength - 1);

  const topPadding = Math.max(0, start * avgRowHeight);
  const bottomPadding = Math.max(0, (totalLength - end - 1) * avgRowHeight);

  return (
    <div
      {...rest}
      ref={(el) => {
        listRef.current = el;
        if (forwardRef) forwardRef.current = el;
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

export default React.forwardRef((props, ref) => <VirtualScroll key={props.totalLength} forwardRef={ref} {...props} />);
