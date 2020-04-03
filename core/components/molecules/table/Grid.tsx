import * as React from 'react';
import { throttle, debounce } from 'throttle-debounce';

import Cell from './Cell';
import Header from './Header';
import Loader, { PartialLoader } from './Loader';

import { IState, IProps, ICache, ISchema, IGridActions } from './interfaces';

class Grid extends React.PureComponent<IProps, IState> {
  // Refs
  centerGridRef: React.RefObject<HTMLDivElement> = React.createRef();
  centerScrollRef: React.RefObject<HTMLDivElement> = React.createRef();
  centerHeaderRef: React.RefObject<HTMLDivElement> = React.createRef();
  gridRef: React.RefObject<HTMLDivElement> = React.createRef();

  // rows height map
  // rows height will be saved here after first calculation until changed
  calculatedRowHeight: number[] = [];
  calculatedRowTopPosition: number[] = [];
  calculateRowHeight = false;

  // Load more metadata
  loadMoreDataPosition = {
    position: -1,
    end: -1,
  };

  // Cache row with there index
  cache: ICache = {
    row: {},
    // this cache is needed to check for optimization during scroll
    // when user is scroll we can check the cache and row in row cache
    // iff row cache & height is available row can be picked from row cache
    // in case of dynamic scrolling else new row will be created
    // height cache only filled when row is created with actual height & top position
    // will never be cleared once created until done through gridActions
    height: [],
  };

  public static defaultProps = {
    buffer: 5,
    virtualization: true,
  };

  constructor(props: IProps) {
    super(props);
    this.state = {
      position: 0,
      isScrolling: false,
      gridMeta: this.updateSchema(this.props.schema),
    };

    if (props.getGridActions) {
      props.getGridActions({
        refreshRows: this.refreshRows,
      });
    }
  }

  componentDidUpdate(prevProps: IProps, prevState: IState) {
    if (prevProps.schema !== this.props.schema) {
      this.setState({ gridMeta: this.updateSchema(this.props.schema) });
    }

    if (
      this.props.dynamicRowHeight &&
      this.calculateRowHeight &&
      this.isColumnActive()
    ) {
      this.calculateRowHeight = false;
      if (
        (this.props.data && prevProps.data !== this.props.data) ||
        this.state.position !== prevState.position ||
        this.state.gridMeta !== prevState.gridMeta
      ) {
        this.calulateRowHeightAndRender();
      }
    }
  }

  isColumnActive = () =>
    this.state.gridMeta.leftSchema.length > 0 ||
    this.state.gridMeta.centerSchema.length > 0

  /**
   * Will clear height caches for provided set of indexs
   * and will re-render the grid
   * @memberof Grid
   */
  refreshRows: IGridActions['refreshRows'] = (indexs, all) => {
    if (all) {
      this.cache.height = [];
      this.calculatedRowHeight = [];
      this.calculatedRowTopPosition = [];
      return;
    }

    const minIndex = Math.min(...indexs);
    this.cache.height = this.cache.height.slice(0, minIndex);
    this.calculatedRowHeight = this.calculatedRowHeight.slice(0, minIndex);
    this.calculatedRowTopPosition = this.calculatedRowTopPosition.slice(
      0,
      minIndex
    );
  }

  getClientHeight = (element: Element) => {
    if (!element) {
      return 0;
    }
    return element.clientHeight;
  }

  calulateRowHeightAndRender = () => {
    const leftRows = document.querySelectorAll(
      '.grid .grid-body .grid-left-body .row'
    );
    const centerRows = document.querySelectorAll(
      '.grid .grid-body .grid-center-body .row'
    );

    if (
      leftRows.length === 0 &&
      this.state.gridMeta.leftSchema.length === 0 &&
      centerRows.length === 0 &&
      this.state.gridMeta.centerSchema.length === 0
    ) {
      return;
    }

    const rowNodes =
      leftRows.length > centerRows.length ? leftRows : centerRows;

    rowNodes.forEach((row, nodeIndex) => {
      const ind = row.getAttribute('data-row');
      const index = parseInt(ind || '', 10);

      const height = Math.max(
        this.getClientHeight(leftRows[nodeIndex]),
        this.getClientHeight(centerRows[nodeIndex])
      );

      if (!this.calculatedRowHeight[index]) {
        this.calculatedRowHeight[index] = height;
      }
      if (index !== 0) {
        if (this.calculatedRowTopPosition[index - 1] !== undefined) {
          this.calculatedRowTopPosition[index] =
            this.calculatedRowTopPosition[index - 1] +
            this.calculatedRowHeight[index - 1];
        }
      } else {
        this.calculatedRowTopPosition[index] = 0;
      }
    });
    this.forceUpdate();
  }

  getVisibleRowsCount = () =>
    this.gridRef.current
      ? Math.round(this.gridRef.current.offsetHeight / this.props.rowHeight)
      : 0

  getScrollPosition = () => {
    if (!this.gridRef.current) {
      return 0;
    }

    const scrollTop = this.gridRef.current.scrollTop;
    const { dynamicRowHeight, rowHeight } = this.props;
    if (!dynamicRowHeight) {
      return Math.round(scrollTop / this.props.rowHeight);
    }

    const index = this.calculatedRowTopPosition.findIndex(
      position => position > scrollTop
    );

    if (index !== -1) {
      return Math.max(index, 0);
    }

    if (this.calculatedRowTopPosition.length === 0) {
      return 0;
    }

    return (
      Math.round(
        (scrollTop -
          this.calculatedRowTopPosition[this.calculatedRowTopPosition.length - 1]) /
        rowHeight
      ) + this.calculatedRowTopPosition.length
    );
  }

  sync = throttle(75, false, (scrollLeft: number, scrollTarget: any) => {
    if (
      this.centerGridRef.current &&
      scrollTarget !== this.centerGridRef.current
    ) {
      this.centerGridRef.current.scrollLeft = scrollLeft;
    }
    if (
      this.centerScrollRef.current &&
      scrollTarget !== this.centerScrollRef.current
    ) {
      this.centerScrollRef.current.scrollLeft = scrollLeft;
    }
    if (
      this.centerHeaderRef.current &&
      scrollTarget !== this.centerHeaderRef.current
    ) {
      this.centerHeaderRef.current.scrollLeft = scrollLeft;
    }
  });

  // TODO: add proper types for scroll events
  syncHorizontalScroll = (event: any) => {
    const scrollLeft = event.target.scrollLeft;
    const scrollTarget = event.target;

    this.sync(scrollLeft, scrollTarget);
  }

  updateSchema = (schema: ISchema[]) => {
    const leftSchema = schema.filter(({ pinned }) => pinned === 'LEFT');
    const centerSchema = schema.filter(({ pinned }) => !pinned);

    const leftWidth = leftSchema.reduce(
      (total, current) => total + current.width,
      0
    );

    const centerWidth = centerSchema.reduce(
      (total, current) => total + current.width,
      0
    );

    return {
      leftSchema,
      centerSchema,
      leftWidth,
      centerWidth,
    };
  }

  handleGridScroll = (event: any) => {
    if (event.target !== this.gridRef.current) {
      return;
    }

    const scrollTop = event.target.scrollTop;
    if (scrollTop < 0) {
      return;
    }

    const { data } = this.props;
    const position = this.getScrollPosition();

    if (Math.abs(position - this.state.position) < 1) {
      return;
    }

    const visibleCount = this.getVisibleRowsCount();

    this.setState({ position, isScrolling: true });

    // set scrolling to false once scroll is paused for a definite time
    this.debouncedSetScroll(false);

    this.loadMoreData(position, visibleCount, data.length);
  }

  debouncedSetScroll = debounce(300, false, (isScrolling: boolean) => {
    this.setState({ isScrolling });
  });

  // checks if user has scrolled to end of the table
  isScrollEnd = () => {
    const element = this.gridRef.current;
    if (!element) {
      return false;
    }
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      return true;
    }
    return false;
  }

  loadMoreData = (
    currentPosition: number,
    visibleCount: number,
    dataLength: number
  ) => {
    if (
      currentPosition > this.loadMoreDataPosition.position &&
      dataLength > this.loadMoreDataPosition.end &&
      currentPosition > dataLength - visibleCount - 5
    ) {
      if (this.props.loadMore) {
        this.props.loadMore();
      }
      this.loadMoreDataPosition = {
        position: currentPosition,
        end: dataLength,
      };
    }
  }

  getHiddenRowStyling = (index: number): React.CSSProperties => {
    const { dynamicRowHeight } = this.props;

    if (
      !dynamicRowHeight ||
      this.calculatedRowTopPosition[index] ||
      index === 0
    ) {
      return {};
    }

    return { position: 'fixed', top: -10000, visibility: 'hidden' };
  }

  createRow = ({
    index,
    rowHeight,
    row,
    schema,
    dynamicRowHeight,
  }: {
    index: number;
    rowHeight?: IProps['rowHeight'];
    row: IProps['data'][0];
    schema: IProps['schema'];
    dynamicRowHeight: boolean;
  }) => {
    return (
      <div
        data-row={index}
        style={{
          width: '100%',
          height: dynamicRowHeight
            ? this.calculatedRowHeight[index]
            : rowHeight,
          transform: `translateY(${this.getTopPosition(index)}px)`,
          ...this.getHiddenRowStyling(index),
        }}
        className={`row ${row.className || ''}`}
        key={index}
      >
        {schema.map(({ width, template, get }, j) => (
          <Cell
            rowIndex={index}
            key={j}
            width={width}
            template={template}
            {...get(row)}
          />
        ))}
      </div>
    );
  }

  getVirtualList = (state: IState, props: IProps) => {
    const leftRows = [];
    const centerRows = [];

    const heightCache = this.cache.height;

    const {
      gridMeta: { leftSchema, centerSchema },
    } = state;
    const { buffer, data, rowHeight, dynamicRowHeight = false, virtualization } = props;

    const position = this.getScrollPosition();

    const visibleCount = this.getVisibleRowsCount();
    let start = Math.max(position - visibleCount - buffer!, 0);
    let end = Math.min(position + visibleCount + buffer!, data.length - 1);
    const rowCache = this.cache.row;

    if (!virtualization) {
      start = 0;
      end = data.length - 1;
    }

    // We can approximate where the user has landed but we can
    // show if the correct row there unitl we have redered all the
    // previous rows once
    // expect the case when table is first rendered
    if (
      dynamicRowHeight &&
      !this.calculatedRowTopPosition[position] &&
      position !== 0
    ) {
      start = Math.min(this.calculatedRowTopPosition.length - 1, start);
    }

    for (let index = start; index <= end; index++) {
      if (index === data.length) {
        break;
      }

      // To stop unnecessary renders
      this.calculateRowHeight = !this.calculateRowHeight
        ? this.cache.height[index] === undefined
        : this.calculateRowHeight;

      if (
        dynamicRowHeight
          ? heightCache[index] && rowCache[index]
          : rowCache[index]
      ) {
        leftRows.push(rowCache[index].left);
        centerRows.push(rowCache[index].center);
      } else {
        const row = data[index];

        rowCache[index] = {
          left: null,
          center: null
        };
        // Left grid
        rowCache[index].left = this.createRow({
          index,
          rowHeight,
          row,
          dynamicRowHeight,
          schema: leftSchema,
        });

        leftRows.push(rowCache[index].left);

        // Center grid
        rowCache[index].center = this.createRow({
          index,
          rowHeight,
          row,
          dynamicRowHeight,
          schema: centerSchema,
        });
        centerRows.push(rowCache[index].center);

        heightCache[index] = this.calculatedRowHeight[index];
      }
    }

    return { leftGrid: leftRows, centerGrid: centerRows };
  }

  getTopPosition = (index: number) => {
    const { dynamicRowHeight } = this.props;
    if (!dynamicRowHeight) {
      return this.props.rowHeight * index;
    }
    return this.calculatedRowTopPosition[index];
  }

  getHeaderRef = (ref: React.RefObject<HTMLDivElement>) => {
    this.centerHeaderRef = ref;
  }

  getGridHeight = () => {
    const { dynamicRowHeight, data, rowHeight, loadingMoreData } = this.props;

    if (!dynamicRowHeight) {
      return data.length * rowHeight + (loadingMoreData ? rowHeight * 2 : 0);
    }

    let total = 0;

    data.forEach((__, index) => {
      total += this.calculatedRowHeight[index] || rowHeight;
    });

    return total;
  }

  render() {
    const {
      data,
      schema: __,
      loadMore: __1,
      buffer: __2,
      getGridActions: __3,
      dynamicRowHeight,
      rowHeight,
      virtualization,
      loading,
      loader,
      overlay,
      showOverlay,
      loadingMoreData,
      headerHeight,
      className,
      ...rest
    } = this.props;

    const { gridMeta } = this.state;
    const visibleCount = this.getVisibleRowsCount();

    const girdRestProps = {
      className: `craft-smart-grid ${className || ''}`,
      ...rest,
    };

    if (visibleCount === -1) {
      return (
        <div ref={this.gridRef} style={this.props.style}>
          Loading No Mounted yet
        </div>
      );
    }

    if (loading) {
      if (loader) {
        return loader;
      }
      return (
        <div {...girdRestProps} ref={this.gridRef}>
          <Loader
            rows={visibleCount > 0 ? visibleCount + 1 : undefined}
            rowHeight={rowHeight}
          />
        </div>
      );
    }

    if (showOverlay) {
      return (
        <div ref={this.gridRef} {...girdRestProps}>
          {overlay}
        </div>
      );
    }

    const { leftGrid, centerGrid } = this.getVirtualList(
      this.state,
      this.props
    );

    // Clear cache to save memory or it can lead to page crash
    if (!this.state.isScrolling) {
      this.cache = {
        ...this.cache,
        row: {},
      };
    }

    let gridHeight = this.getGridHeight();

    if (dynamicRowHeight && loadingMoreData) {
      gridHeight += rowHeight * 2;
    }

    return (
      <div {...girdRestProps}>
        <Header
          getRef={this.getHeaderRef}
          centerSchema={gridMeta.centerSchema}
          leftSchema={gridMeta.leftSchema}
          centerWidth={gridMeta.centerWidth}
          leftWidth={gridMeta.leftWidth}
          headerHeight={headerHeight}
          syncHorizontalScroll={this.syncHorizontalScroll}
        />

        {/* Grid Body */}
        <div
          className="grid"
          ref={this.gridRef}
          onScroll={virtualization ? this.handleGridScroll : undefined}
        >
          <div
            style={{
              height: gridHeight,
            }}
            className="grid-body"
          >
            {/*
             * Left Pinned Grid
             */}
            {gridMeta.leftWidth > 0 && (
              <div style={{ width: gridMeta.leftWidth }} className="grid-left">
                <div className="grid-left-body">
                  {leftGrid}
                  {loadingMoreData && (
                    <PartialLoader
                      style={{
                        transform: `translateY(${
                          dynamicRowHeight
                            ? gridHeight - rowHeight * 2
                            : this.getTopPosition(data.length)
                          }px)`,
                      }}
                      schema={gridMeta.leftSchema}
                      className="partial-loader"
                      rowStyle={{ height: rowHeight }}
                    />
                  )}
                </div>
              </div>
            )}
            {/*
             * Center Grid
             */}
            {gridMeta.centerWidth > 0 && (
              <div
                style={{ width: `calc(100% - ${gridMeta.leftWidth}px)` }}
                className="grid-center"
              >
                <div
                  ref={this.centerGridRef}
                  className="grid-center-body hide-scroll-bar"
                  onScroll={this.syncHorizontalScroll}
                >
                  <div
                    style={{ minWidth: gridMeta.centerWidth }}
                    className="grid-center-body-inner"
                  >
                    {centerGrid}
                    {loadingMoreData && (
                      <PartialLoader
                        schema={gridMeta.centerSchema}
                        style={{
                          transform: `translateY(${
                            dynamicRowHeight
                              ? gridHeight - rowHeight * 2
                              : this.getTopPosition(data.length)
                            }px)`,
                        }}
                        className="partial-loader"
                        rowStyle={{
                          height: rowHeight,
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="grid-scroll">
          <div
            className="grid-scroll-left"
            style={{ width: gridMeta.leftWidth }}
          />
          <div
            style={{
              width: `calc(100% - ${gridMeta.leftWidth}px)`,
            }}
            className="grid-scroll-center overflow-y-hidden"
            ref={this.centerScrollRef}
            onScroll={this.syncHorizontalScroll}
          >
            <div style={{ width: gridMeta.centerWidth }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Grid;
