import * as React from 'react';
import { DropdownProps, CheckboxProps, GridCellProps } from '@/index.type';
import { GridHead } from './GridHead';
import { GridBody } from './GridBody';
import { HeaderCellRendererProps } from './Cell';
import { sortColumn, pinColumn, hideColumn, moveToIndex, getSchema, isScrollAtTop, getWidth } from './utility';
import {
  AUTO_UNPIN_MAIN_REMAINDER_MAX,
  AUTO_REPIN_BUFFER,
  AutoUnpinStackEntry,
  getNextAutoUnpinTarget,
  pinnedLayoutSignature,
  pruneAutoUnpinStack,
} from './autoUnpinPinnedLayout';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { NestedRowProps } from './GridNestedRow';
import classNames from 'classnames';
import { GridProvider } from './GridContext';
import defaultProps from './defaultProps';
import uidGenerator from '@/utils/uidGenerator';
import styles from '@css/components/grid.module.css';

export type SortType = 'asc' | 'desc' | 'unsort';
export type Pinned = 'left' | 'right' | 'unpin';
export type Alignment = 'left' | 'right' | 'center';
export type Comparator = (a: RowData, b: RowData) => -1 | 0 | 1;
export type Filter = any[];
export type GridRef = HTMLDivElement | null;
export type PageInfo = { page: number; scrollTop: number };

export interface FetchDataOptions {
  page?: number;
  pageSize?: number;
  filterList?: GridProps['filterList'];
  sortingList?: GridProps['sortingList'];
  searchTerm?: string;
}

export type fetchDataFunction = (options: FetchDataOptions) => Promise<{
  searchTerm?: string;
  count: number;
  data: Data;
  schema: Schema;
  totalRowsCount?: number;
}>;

export type updateSortingListFunction = (newSortingList: GridProps['sortingList']) => void;
export type updateFilterListFunction = (newFilterList: GridProps['filterList']) => void;
export type updateSchemaFunction = (newSchema: Schema) => void;
export type updateSelectAllFunction = (attr: GridProps['selectAll']) => void;
export type updateColumnSchemaFunction = (name: ColumnSchema['name'], schemaUpdate: Partial<ColumnSchema>) => void;
export type updateRowDataFunction = (rowIndexes: number[], dataUpdate: Partial<RowData>) => void;
export type sortDataFunction = (comparator: Comparator, type: SortType) => void;
export type reorderColumnFunction = (from: string, to: string) => void;
export type onSelectFn = (rowIndex: number, selected: boolean) => void;
export type onFilterChangeFn = (name: ColumnSchema['name'], selected: any) => void;
export type onSelectAllFunction = (selected: boolean, selectAll?: boolean, headerCheckbox?: boolean) => void;
export type onFilterChangeFunction = (data: RowData, filters: Filter) => boolean;
export type onRowClickFunction = (data: RowData, rowIndex?: number) => void;
export type onMenuChangeFn = (name: ColumnSchema['name'], selected: any) => void;
export type updatePrevPageInfoFunction = (value: PageInfo) => void;
export type CellType =
  | 'DEFAULT'
  | 'WITH_META_LIST'
  | 'AVATAR'
  | 'AVATAR_WITH_TEXT'
  | 'AVATAR_WITH_META_LIST'
  | 'STATUS_HINT'
  | 'ICON';

export type ColumnSchema = {
  /**
   * Key value of `Data` object
   */
  name: string;
  /**
   * Header name
   */
  displayName: string;
  /**
   * width of the column(px/%)
   */
  width?: React.ReactText;
  /**
   * min-width of the column(px/%)
   * @default 96
   */
  minWidth?: React.ReactText;
  /**
   * max-width of the column(px/%)
   * @default 800
   */
  maxWidth?: React.ReactText;
  /**
   * Denotes if column is resizable
   */
  resizable?: boolean;
  /**
   * Enable sorting of the column
   * @default true
   */
  sorting?: boolean;
  /**
   * Sorting Function
   */
  comparator?: Comparator;
  /**
   * Show left separator
   */
  separator?: boolean;
  /**
   * Pinned
   */
  pinned?: Pinned;
  /**
   * Hidden
   */
  hidden?: boolean;
  /**
   * Filter list
   */
  filters?: DropdownProps['options'];
  /**
   * Filter Type
   * @default 'multiSelect'
   * @deprecated Use filterOptions.selectionType instead
   */
  filterType?: 'singleSelect' | 'multiSelect';
  /**
   * Filter Options Configuration
   * <pre>
   * FilterOptions: {
   *   type?: 'singleSelect' | 'multiSelect';
   *   minWidth?: number | string;
   *   maxWidth?: number | string;
   *   maxVisibleSelection?: number;
   * }
   * </pre>
   *
   * | Name | Description | Default |
   * | --- | --- | --- |
   * | type | Filter type for single or multi select | 'multiSelect' |
   * | minWidth | Minimum width of filter trigger | - |
   * | maxWidth | Maximum width of filter trigger | - |
   * | maxVisibleSelection | Max number of options to show in trigger before showing count | - |
   */
  filterOptions?: {
    selectionType?: 'singleSelect' | 'multiSelect';
    minWidth?: number | string;
    maxWidth?: number | string;
    maxVisibleSelection?: number;
  };
  /**
   * Callback onFilterChange
   */
  onFilterChange?: onFilterChangeFunction;
  /**
   * Translate cell data
   */
  translate?: (data: RowData) => RowData;
  /**
   * Cell type
   * @default DEFAULT
   */
  cellType?: CellType;
  /**
   * Custom header cell renderer
   */
  headerCellRenderer?: React.FC<HeaderCellRendererProps>;
  /**
   * Custom cell renderer
   */
  cellRenderer?: React.FC<GridCellProps>;
  /**
   * Horizontal Alignment of column
   * @default 'left'
   */
  align?: Alignment;
  /**
   * Vertical Alignment of column
   */
  verticalAlign?: 'top' | 'center' | 'bottom';
  /**
   * Show tooltip on hover
   */
  tooltip?: boolean;
  /**
   * Highlight Cell
   */
  highlightCell?: boolean;
};

export type RowData = Record<string, any> & {
  _selected?: boolean;
  disabled?: boolean;
  _expandNestedRow?: boolean;
  _activated?: boolean;
};

export type GridSize = 'comfortable' | 'standard' | 'compressed' | 'tight';
export type GridType = 'resource' | 'data';
export type Data = RowData[];
export type Schema = ColumnSchema[];
export type thresholdTypes = 'early' | 'balanced' | 'lazy' | 'at-end';

export interface VirtualRowProps {
  /**
   * Number of rows to be rendered within the visible viewport.
   */
  visibleRows?: number;
  /**
   * Number of additional rows to render before and after the visible rows.
   */
  buffer?: number;
}

export interface InfiniteScrollProps {
  /**
   * Number of rows to Pre-fetch at a time in case of async table
   */
  fetchRowsCount: number;
  /**
   * the distance from the end of the scrollable content at which new data should start fetching in case of async table.
   */
  fetchThreshold: thresholdTypes;
  /**
   * Error Renderer to be displayed in case of async table when fetch new data fails
   */
  fetchErrorRenderer?: (fetchNextRowsFn: () => Promise<void>) => React.ReactNode;
  /**
   * Retry Renderer to be displayed when loading new data after fetch fails
   */
  retryFetchRenderer?: () => React.ReactNode;
}

export interface GridProps extends BaseProps {
  /**
   * Controls spacing of `Grid`
   */
  size: GridSize;
  /**
   * Grid type
   */
  type: GridType;
  /**
   * Callback on Row click in case of `Resource Grid`
   */
  onRowClick?: onRowClickFunction;
  /**
   * Schema used to render `loading` state
   */
  loaderSchema: Schema;
  /**
   * Schema used to render `data` object
   */
  schema: Schema;
  /**
   * Data object
   */
  data: Data;
  /**
   * Total records in grid
   */
  totalRecords: number;
  /**
   * Loading state of Grid
   */
  loading: boolean;
  /**
   * Error state of Grid
   */
  error: boolean;
  /**
   * Callback to be called to get the updated data
   */
  updateData?: () => void;
  /**
   * Callback to be called to get the updated data
   */
  updateSchema?: updateSchemaFunction;
  /**
   * Shows grid head
   */
  showHead?: boolean;
  /**
   * Shows menu in head cell
   */
  showMenu?: boolean;
  /**
   * Allows dragging of column
   */
  draggable?: boolean;
  /**
   * Allows nested rows
   */
  nestedRows?: boolean;
  /**
   * Renderer to be used for nested rows
   */
  nestedRowRenderer?: React.FC<NestedRowProps>;
  /**
   * Shows pagination component
   */
  withPagination?: boolean;
  /**
   * Current page
   */
  page: number;
  /**
   * Number of rows on a page
   */
  pageSize: number;
  /**
   * Shows checkbox in the left most column
   */
  withCheckbox?: boolean;
  /**
   * Defines position of checkbox in the row
   */
  checkboxAlignment?: 'top' | 'center' | 'bottom';
  /**
   * Callback on row select
   */
  onSelect?: onSelectFn;
  /**
   * Callback on column head select
   */
  onSelectAll?: onSelectAllFunction;
  /**
   * Error Template
   * **Functional Component will be deprecated soon**
   */
  errorTemplate?: React.FunctionComponent | React.ReactNode;
  /**
   * Sorting List
   */
  sortingList: {
    name: ColumnSchema['name'];
    type: SortType;
  }[];
  /**
   * update Sorting List Callback
   */
  updateSortingList?: updateSortingListFunction;
  /**
   * Filter List
   */
  filterList: Record<ColumnSchema['name'], Filter>;
  /**
   * update Filter List Callback
   */
  updateFilterList?: updateFilterListFunction;
  /**
   * Select All
   */
  selectAll?: {
    checked: boolean;
    indeterminate: boolean;
  };
  /**
   * Shows tooltip on Head Cell hover
   */
  headCellTooltip?: boolean;
  /**
   * Shows left separator to all columns
   *
   * **Can be override by Column Schema**
   */
  separator?: boolean;
  /**
   * Show filters in Head Cell
   */
  showFilters: boolean;
  /**
   * Enable row virtualization
   */
  enableRowVirtualization?: boolean;
  /**
   * Virtual Scroll Options
   */
  virtualRowOptions: VirtualRowProps;
  /**
   * Enable infinite scroll of rows in case of async table & without pagination
   */
  enableInfiniteScroll?: boolean;
  /**
   * Infinite Scroll Options
   */
  infiniteScrollOptions: InfiniteScrollProps;
  /**
   * Callback to be triggered on scroll
   */
  onScroll?: (event: Event) => void;
  /**
   * Fetch Data Function to be called on scroll when threshold is reached in case of async table
   */
  fetchDataOnScroll?: (props: { page: number; rowsCount: number }) => Promise<Data>;
  /**
   * Search term to highlight in cells
   */
  searchTerm?: string;
  /**
   * Function to create custom regex pattern for highlighting matched text in cells.
   * If not provided, will use default case-insensitive match.
   * @param searchTerm - The current search term
   * @returns RegExp to use for highlighting
   */
  highlightRegex?: (searchTerm: string) => RegExp;
  /**
   * Show nested row trigger
   */
  showNestedRowTrigger?: boolean;
  /**
   * Accessible label for grid container
   */
  'aria-label'?: string;
  /**
   * Associates grid with an external label element
   */
  'aria-labelledby'?: string;
}

export interface GridState {
  init: boolean;
  prevPageInfo: PageInfo;
  isSortingListUpdated: boolean;
  mainRemainder: number | null;
}

export class Grid extends React.Component<GridProps, GridState> {
  static defaultProps: GridProps;
  gridRef: GridRef = null;
  gridId: string = uidGenerator();
  isHeadSyncing = false;
  isBodySyncing = false;
  private autoUnpinStackRef: { current: AutoUnpinStackEntry[] } = { current: [] };
  private autoUnpinResizeObserver: any = null;
  private autoUnpinRafId: number | null = null;

  constructor(props: GridProps) {
    super(props);

    const pageInfo = { page: 1, scrollTop: 0 };

    this.state = {
      init: false,
      prevPageInfo: pageInfo,
      isSortingListUpdated: false,
      mainRemainder: null,
    };
  }

  componentDidMount() {
    this.setState(
      {
        init: true,
      },
      () => {
        this.adjustPaddingRight();
      }
    );
    window.addEventListener('resize', this.forceRerender.bind(this));
  }

  forceRerender() {
    this.forceUpdate();
    this.scheduleAutoUnpinLayoutCheck();
  }

  componentWillUnmount() {
    this.removeScrollListeners();
    this.teardownAutoUnpinObserver();
    window.removeEventListener('resize', this.forceRerender.bind(this));
  }

  componentDidUpdate(prevProps: GridProps, prevState: GridState) {
    if (prevState.init !== this.state.init) {
      this.addScrollListeners();
      this.adjustPaddingRight();
      if (this.state.init) {
        this.setupAutoUnpinObserver();
      }
    }

    if (prevProps.page !== this.props.page || prevProps.error !== this.props.error) {
      this.removeScrollListeners();
      this.addScrollListeners();
      this.adjustPaddingRight();
      if (this.state.init) {
        this.setupAutoUnpinObserver();
      }
    }

    if (prevProps.data !== this.props.data) {
      this.adjustPaddingRight();
    }

    if (
      this.state.init &&
      (prevProps.loading !== this.props.loading ||
        pinnedLayoutSignature(prevProps.schema) !== pinnedLayoutSignature(this.props.schema) ||
        prevProps.withCheckbox !== this.props.withCheckbox ||
        // When showHead is false, pin widths are measured from the first body row.
        // A data change can add/remove those DOM nodes, so re-check layout.
        (!this.props.showHead && prevProps.data !== this.props.data))
    ) {
      this.scheduleAutoUnpinLayoutCheck();
    }
  }

  addScrollListeners() {
    const gridHeadEl = this.gridRef!.querySelector(`.${styles['Grid-head']}`);
    const gridBodyEl = this.gridRef!.querySelector(`.${styles['Grid-body']}`);

    if (gridHeadEl && gridBodyEl) {
      gridHeadEl.addEventListener('scroll', this.syncScroll('head'));
      gridBodyEl.addEventListener('scroll', this.syncScroll('body'));
    }
  }

  removeScrollListeners() {
    const gridHeadEl = this.gridRef!.querySelector(`.${styles['Grid-head']}`);
    const gridBodyEl = this.gridRef!.querySelector(`.${styles['Grid-body']}`);

    if (gridHeadEl && gridBodyEl) {
      gridHeadEl.removeEventListener('scroll', this.syncScroll('head'));
      gridBodyEl.removeEventListener('scroll', this.syncScroll('body'));
    }
  }

  adjustPaddingRight() {
    const gridHeadEl = this.gridRef!.querySelector(`.${styles['Grid-head']}`) as HTMLElement;
    let gridBodyEl = this.gridRef!.querySelector(`.${styles['Grid-body']}`) as HTMLElement;

    if (this.props.enableRowVirtualization) {
      gridBodyEl = this.gridRef!.querySelector(`.VS-container`) as HTMLElement;
    }

    if (gridHeadEl && gridBodyEl) {
      const hasVerticalScrollbar = gridBodyEl.scrollHeight > gridBodyEl.clientHeight;
      const scrollbarWidth = gridBodyEl.offsetWidth - gridBodyEl.clientWidth;
      gridHeadEl.style.marginRight = hasVerticalScrollbar ? `${scrollbarWidth}px` : '';
    }
  }

  syncScroll = (type: string) => () => {
    const gridHeadEl = this.gridRef!.querySelector(`.${styles['Grid-head']}`);
    const gridBodyEl = this.gridRef!.querySelector(`.${styles['Grid-body']}`);
    this.adjustPaddingRight();

    if (type === 'head') {
      if (!this.isBodySyncing) {
        this.isHeadSyncing = true;
        gridBodyEl!.scrollLeft = gridHeadEl!.scrollLeft;
      }
    } else if (type === 'body') {
      if (!this.isHeadSyncing) {
        this.isBodySyncing = true;
        gridHeadEl!.scrollLeft = gridBodyEl!.scrollLeft;
      }
    }
    setTimeout(() => {
      this.isHeadSyncing = false;
      this.isBodySyncing = false;
    }, 0);
  };

  updateRenderedSchema = (newSchema: Schema) => {
    const { updateSchema } = this.props;

    if (updateSchema) {
      updateSchema(newSchema);
    }
  };

  updateColumnSchema: updateColumnSchemaFunction = (name, schemaUpdate) => {
    const { schema } = this.props;
    const newSchema = [...schema];

    const ind = newSchema.findIndex((s) => s.name === name);
    newSchema[ind] = {
      ...newSchema[ind],
      ...schemaUpdate,
    };

    this.updateRenderedSchema(newSchema);
  };

  reorderColumn: reorderColumnFunction = (from, to) => {
    const { schema } = this.props;

    const fromInd = schema.findIndex((s) => s.name === from);
    const toInd = schema.findIndex((s) => s.name === to);
    const newSchema = moveToIndex(schema, fromInd, toInd);
    this.updateRenderedSchema(newSchema);
  };

  updateSortingList = (sortingList: GridProps['sortingList']) => {
    const { updateSortingList } = this.props;

    const shouldScrollToTop =
      !isScrollAtTop(this.props.enableRowVirtualization, this.gridRef!) && this.props.enableInfiniteScroll;

    if (shouldScrollToTop) {
      this.scrollToTop();
    }
    if (updateSortingList) {
      updateSortingList(sortingList);
    }
  };

  scrollToTop = () => {
    // Find the correct scrollable element
    let scrollableElement: HTMLElement | null = null;
    if (this.props.enableRowVirtualization) {
      scrollableElement = this.gridRef?.querySelector('.VS-container') as HTMLElement;
    } else {
      scrollableElement = this.gridRef?.querySelector(`.${styles['Grid-body']}`) as HTMLElement;
    }

    if (scrollableElement) {
      scrollableElement.scrollTo({ top: 0, behavior: 'smooth' });
      this.setState({ isSortingListUpdated: true });
    }
  };

  updateIsSortingListUpdated = () => {
    this.setState({ isSortingListUpdated: false });
  };

  updateFilterList = (filterList: GridProps['filterList']) => {
    const { updateFilterList } = this.props;

    if (updateFilterList) {
      updateFilterList(filterList);
    }
  };

  onMenuChange: onMenuChangeFn = (name, selected) => {
    const { sortingList } = this.props;
    switch (selected) {
      case 'sortAsc':
        sortColumn({ sortingList, updateSortingList: this.updateSortingList }, name, 'asc');
        break;
      case 'sortDesc':
        sortColumn({ sortingList, updateSortingList: this.updateSortingList }, name, 'desc');
        break;
      case 'unsort':
        sortColumn({ sortingList, updateSortingList: this.updateSortingList }, name, 'unsort');
        break;
      case 'pinLeft':
        pinColumn({ updateColumnSchema: this.updateColumnSchema }, name, 'left');
        break;
      case 'pinRight':
        pinColumn({ updateColumnSchema: this.updateColumnSchema }, name, 'right');
        break;
      case 'unpin':
        pinColumn({ updateColumnSchema: this.updateColumnSchema }, name, 'unpin');
        break;
      case 'hide':
        hideColumn({ updateColumnSchema: this.updateColumnSchema }, name, true);
        break;
    }
  };

  onFilterChange: onFilterChangeFn = (name, selected) => {
    const { filterList } = this.props;

    const newFilterList = {
      ...filterList,
      [name]: selected,
    };

    this.updateFilterList(newFilterList);
  };

  onSelect: onSelectFn = (rowIndex, selected) => {
    const { onSelect } = this.props;

    if (onSelect) {
      onSelect(rowIndex, selected);
    }
  };

  onSelectAll: CheckboxProps['onChange'] = (event) => {
    const { onSelectAll } = this.props;

    if (onSelectAll) {
      onSelectAll(event.target.checked, undefined, true);
    }
  };

  updatePrevPageInfo: updatePrevPageInfoFunction = (value) => {
    this.setState({
      prevPageInfo: value,
    });
  };

  getScrollContainer(): HTMLElement | null {
    if (!this.gridRef) return null;
    if (this.props.enableRowVirtualization) {
      return this.gridRef.querySelector('.VS-container') as HTMLElement | null;
    }
    return this.gridRef.querySelector(`.${styles['Grid-body']}`) as HTMLElement | null;
  }

  getPinMeasurementElements(): { left: HTMLElement | null; right: HTMLElement | null } {
    if (!this.gridRef) {
      return { left: null, right: null };
    }
    if (this.props.showHead) {
      const head = this.gridRef.querySelector(`.${styles['Grid-head']}`) as HTMLElement | null;
      if (head) {
        return {
          left: head.querySelector(`.${styles['Grid-cellGroup--pinned-left']}`) as HTMLElement | null,
          right: head.querySelector(`.${styles['Grid-cellGroup--pinned-right']}`) as HTMLElement | null,
        };
      }
    }
    const body = this.getScrollContainer();
    if (!body) {
      return { left: null, right: null };
    }
    const firstRowWrapper = body.querySelector(`.${styles['Grid-rowWrapper']}`) as HTMLElement | null;
    if (!firstRowWrapper) {
      return { left: null, right: null };
    }
    return {
      left: firstRowWrapper.querySelector(`.${styles['Grid-cellGroup--pinned-left']}`) as HTMLElement | null,
      right: firstRowWrapper.querySelector(`.${styles['Grid-cellGroup--pinned-right']}`) as HTMLElement | null,
    };
  }

  measureMainRemainder(): number | null {
    const scrollEl = this.getScrollContainer();

    if (!scrollEl) return null;
    const { left, right } = this.getPinMeasurementElements();
    const leftW = left?.getBoundingClientRect().width ?? 0;
    const rightW = right?.getBoundingClientRect().width ?? 0;

    return scrollEl.clientWidth - leftW - rightW;
  }

  scheduleAutoUnpinLayoutCheck(): void {
    if (this.autoUnpinRafId !== null) return;
    this.autoUnpinRafId = window.requestAnimationFrame(() => {
      this.autoUnpinRafId = null;
      this.runAutoUnpinLayoutCheck();
    });
  }

  runAutoUnpinLayoutCheck(): void {
    const { updateSchema, loading, error, schema, loaderSchema } = this.props;
    if (!updateSchema || loading || error || !this.gridRef || !this.state.init) return;

    const effectiveSchema = getSchema(schema, loading, loaderSchema);
    const columnLike = effectiveSchema.map((s) => ({
      name: s.name,
      hidden: s.hidden,
      pinned: s.pinned === 'left' || s.pinned === 'right' ? s.pinned : undefined,
    }));

    this.autoUnpinStackRef.current = pruneAutoUnpinStack(this.autoUnpinStackRef.current, columnLike);

    const remainder = this.measureMainRemainder();

    if (remainder === null) return;

    if (this.state.mainRemainder !== remainder) {
      this.setState({ mainRemainder: remainder });
    }

    if (this.autoUnpinStackRef.current.length > 0) {
      const stack = this.autoUnpinStackRef.current;
      const last = stack[stack.length - 1];
      const col = effectiveSchema.find((s) => s.name === last.name);

      let estimatedWidth = 176;
      if (col) {
        if (col.width) {
          const w = getWidth({ ref: this.gridRef, withCheckbox: this.props.withCheckbox }, col.width);
          const parsed = typeof w === 'string' ? parseInt(w, 10) : w;
          if (typeof parsed === 'number' && !isNaN(parsed)) estimatedWidth = parsed;
        } else if (col.minWidth) {
          const mw = getWidth({ ref: this.gridRef, withCheckbox: this.props.withCheckbox }, col.minWidth);
          const parsed = typeof mw === 'string' ? parseInt(mw, 10) : mw;
          if (typeof parsed === 'number' && !isNaN(parsed)) estimatedWidth = Math.max(estimatedWidth, parsed);
        }
      }

      let checkboxWidth = 0;
      if (this.props.withCheckbox && last.side === 'left') {
        const hasLeftPinned = effectiveSchema.some((s) => s.pinned === 'left' && !s.hidden);
        if (!hasLeftPinned) {
          const checkboxCell = this.gridRef?.querySelector(`.${styles['Grid-cell--checkbox']}`);
          checkboxWidth = checkboxCell?.clientWidth || 28;
        }
      }

      const dynamicRepinThreshold = AUTO_UNPIN_MAIN_REMAINDER_MAX + estimatedWidth + checkboxWidth + AUTO_REPIN_BUFFER;

      if (remainder >= dynamicRepinThreshold) {
        this.autoUnpinStackRef.current = stack.slice(0, -1);
        this.updateColumnSchema(last.name, { pinned: last.side });
        return;
      }
    }

    if (remainder < AUTO_UNPIN_MAIN_REMAINDER_MAX) {
      const target = getNextAutoUnpinTarget(columnLike);
      if (!target) return;
      const col = effectiveSchema.find((s) => s.name === target.name);
      if (!col || !(col.pinned === 'left' || col.pinned === 'right')) return;
      this.updateColumnSchema(target.name, { pinned: undefined });
      this.autoUnpinStackRef.current = [...this.autoUnpinStackRef.current, { name: target.name, side: target.side }];
    }
  }

  setupAutoUnpinObserver(): void {
    this.teardownAutoUnpinObserver();
    const el = this.getScrollContainer();
    if (!el || typeof (window as any).ResizeObserver === 'undefined') {
      this.scheduleAutoUnpinLayoutCheck();
      return;
    }
    this.autoUnpinResizeObserver = new (window as any).ResizeObserver(() => {
      this.scheduleAutoUnpinLayoutCheck();
    });
    this.autoUnpinResizeObserver.observe(el);
    this.scheduleAutoUnpinLayoutCheck();
  }

  teardownAutoUnpinObserver(): void {
    this.autoUnpinResizeObserver?.disconnect();
    this.autoUnpinResizeObserver = null;
    if (this.autoUnpinRafId !== null) {
      window.cancelAnimationFrame(this.autoUnpinRafId);
      this.autoUnpinRafId = null;
    }
  }

  render() {
    const baseProps = extractBaseProps(this.props);

    const { init, prevPageInfo } = this.state;

    const {
      type,
      size,
      showHead,
      className,
      page,
      loading,
      loaderSchema,
      virtualRowOptions,
      infiniteScrollOptions,
      enableInfiniteScroll,
      enableRowVirtualization,
      onScroll,
      fetchDataOnScroll,
      error,
      errorTemplate,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
    } = this.props;

    const schema = getSchema(this.props.schema, loading, loaderSchema);

    const classes = classNames(
      {
        [styles.Grid]: 'true',
        [styles[`Grid--${type}`]]: type,
        [styles[`Grid--${size}`]]: size,
      },
      className
    );

    return (
      <div
        data-test="DesignSystem-Grid"
        {...baseProps}
        className={classes}
        role="grid"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        ref={(el) => {
          this.gridRef = el;
        }}
      >
        {init && (
          <GridProvider
            value={{
              ...this.props,
              ref: this.gridRef,
              gridId: this.gridId,
              isSortingListUpdated: this.state.isSortingListUpdated,
              updateIsSortingListUpdated: this.updateIsSortingListUpdated.bind(this),
              mainRemainder: this.state.mainRemainder,
              onResizeEnd: this.scheduleAutoUnpinLayoutCheck.bind(this),
            }}
          >
            {showHead && (
              <GridHead
                schema={schema}
                onSelectAll={this.onSelectAll?.bind(this)}
                onMenuChange={this.onMenuChange.bind(this)}
                onFilterChange={this.onFilterChange.bind(this)}
                updateColumnSchema={this.updateColumnSchema.bind(this)}
                reorderColumn={this.reorderColumn.bind(this)}
              />
            )}
            {!loading && error ? (
              errorTemplate && (typeof errorTemplate === 'function' ? errorTemplate({}) : errorTemplate)
            ) : (
              <GridBody
                key={`${page}`}
                schema={schema}
                prevPageInfo={prevPageInfo}
                updatePrevPageInfo={this.updatePrevPageInfo.bind(this)}
                onSelect={this.onSelect.bind(this)}
                enableRowVirtualization={enableRowVirtualization}
                virtualRowOptions={virtualRowOptions}
                infiniteScrollOptions={infiniteScrollOptions}
                enableInfiniteScroll={enableInfiniteScroll}
                onScroll={onScroll}
                fetchDataOnScroll={fetchDataOnScroll}
              />
            )}
          </GridProvider>
        )}
      </div>
    );
  }
}

Grid.defaultProps = defaultProps;

export default Grid;
