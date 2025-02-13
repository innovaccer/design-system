import * as React from 'react';

const isInView = (container, element) => {
  const containerTop = container.offsetTop;
  const elementRect = element.getBoundingClientRect();
  const elementTop = elementRect.top;
  const elementHeight = elementRect.height;

  return elementHeight - (containerTop - elementTop) > 0;
};

class VirtualScroll extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offset: props.offset,
    };

    this.lastScrollTop = 0;
    this.endReached = false;
    this.avgRowHeight = props.minItemHeight;
  }

  static defaultProps = {
    buffer: 10,
    length: 30,
    offset: 0,
  };

  componentDidMount() {
    window.requestAnimationFrame(() => {
      if (this.listRef) {
        this.listRef.scrollTop = this.state.offset * this.avgRowHeight;
      }
    });
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.offset > this.state.offset) {
      this.updateOffset(prevState);
    }
  }

  updateOffset(prevState) {
    const offsetDiff = prevState.offset - this.state.offset;
    if (this.listRef) {
      const el = this.listRef;
      const items = el.querySelectorAll('.VS-item');

      let heightAdded = 0;
      let currOffset = prevState.offset;
      const start = Math.min(this.state.offset, this.props.buffer);
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
        heightAdded += diff * this.props.minItemHeight;
        currOffset -= diff;
      }

      const newAvgRowHeight =
        currOffset === 0 ? this.props.minItemHeight : (this.avgRowHeight * prevState.offset - heightAdded) / currOffset;

      this.setState({
        offset: currOffset,
      });
      this.avgRowHeight = Math.max(this.props.minItemHeight, newAvgRowHeight);
    }
  }

  onScrollHandler(event) {
    const el = this.listRef;
    const { scrollTop, scrollHeight, clientHeight } = el;
    if (this.listRef) {
      const { totalLength, length, buffer } = this.props;

      const { offset } = this.state;

      const { avgRowHeight } = this;

      const direction = Math.floor(scrollTop - this.lastScrollTop);

      if (direction === 0) return;

      const items = el.querySelectorAll('.VS-item');
      let newOffset = offset;
      let newAvgRowHeight = avgRowHeight;
      const start = Math.min(offset, buffer);
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
            const offsetToBeAdded = Math.floor(heightLeft / this.props.minItemHeight);
            newOffset += offsetToBeAdded;
            heightAdded += offsetToBeAdded * this.props.minItemHeight;
          }
          newAvgRowHeight =
            newOffset > 0 ? (offset * avgRowHeight + heightAdded) / newOffset : this.props.minItemHeight;

          this.setState({
            offset: Math.min(newOffset, totalLength - length),
          });
          this.avgRowHeight = Math.max(this.props.minItemHeight, newAvgRowHeight);
        }
      } else {
        const scrollDiff = items[start].getBoundingClientRect().y - el.getBoundingClientRect().y;
        if (scrollDiff > 0) {
          const offsetDiff = Math.floor(scrollDiff / this.props.minItemHeight) || 1;
          const newOffset = offset - offsetDiff;
          if (newOffset < totalLength - (length + buffer)) {
            this.setState({
              offset: Math.max(0, newOffset),
            });
          }
        }
      }

      this.lastScrollTop = scrollTop;
    }

    if (this.props.onScroll) this.props.onScroll(event);

    // Check if user has scrolled to the end
    if (scrollTop + clientHeight >= scrollHeight - this.props.minItemHeight) {
      if (!this.endReached.current && this.props.onEndReached) {
        // this.endReached.current = true;
        this.props.onEndReached();
      }
    } else {
      // this.endReached.current = false; // Reset the flag when not at the end
    }
  }

  renderItems(start, end) {
    const { renderItem } = this.props;

    return Array.from({ length: end - start + 1 }, (_, index) => {
      const rowIndex = start + index;
      const component = renderItem(rowIndex);
      return React.cloneElement(component, {
        key: rowIndex,
        className: ['VS-item', component.props.className].join(' ').trim(),
      });
    });
  }

  render() {
    const {
      totalLength,
      length,
      buffer,
      minItemHeight,
      forwardRef,
      offset: _offset,
      renderItem: _renderItem,
      ...rest
    } = this.props;

    const { init, offset } = this.state;

    const { avgRowHeight } = this;

    const start = Math.max(0, offset - buffer);
    const end = Math.min(offset + (length + buffer) - 1, totalLength - 1);

    const topPadding = Math.max(0, start * avgRowHeight);
    const bottomPadding = Math.max(0, (totalLength - end - 1) * avgRowHeight);

    return (
      <div
        {...rest}
        ref={(el) => {
          this.listRef = el;
          if (forwardRef) forwardRef.current = el;
          if (!init) this.setState({ init: true });
        }}
        onScroll={this.onScrollHandler.bind(this)}
      >
        {init && (
          <>
            <div
              style={{
                flexShrink: 0,
                height: topPadding,
              }}
            />
            {this.renderItems(start, end)}
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
  }
}

export default React.forwardRef((props, ref) => <VirtualScroll key={props.totalLength} forwardRef={ref} {...props} />);
