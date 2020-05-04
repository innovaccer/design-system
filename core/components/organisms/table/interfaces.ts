export interface Schema {
  width?: number;
  template?: React.ElementType;
  pinned?: 'LEFT';
  get?: (props: any) => any;
  header?: React.ElementType;
  name: string;
  displayName: string;
}

export interface LoadingSchema {
  width?: number;
  withImage?: boolean;
  round?: boolean;
  imageSize?: string;
  pinned?: 'LEFT';
}

export interface Cache {
  row: Record<string, { left: React.ReactElement | null; center: React.ReactElement | null }>;
  height: number[];
}

export interface Props {
  data: Record<string, any>[];
  /**
   * <pre style="font-family: monospace; font-size: 13px; background: #f8f8f8">
   * Schema: {
   *    width?: number;
   *    template?: React.ElementType;
   *    pinned?: 'LEFT';
   *    get?: (props: any) => any;
   *    header?: React.ElementType;
   *    name: string;
   *    displayName: string;
   * }
   * </pre>
   */
  schema: Schema[];
  /**
   * <pre style="font-family: monospace; font-size: 13px; background: #f8f8f8">
   * LoadingSchema: {
   *    width?: number;
   *    withImage?: boolean;
   *    round?: boolean;
   *    imageSize?: string;
   *    pinned?: 'LEFT';
   * }
   * </pre>
   */
  loaderSchema?: LoadingSchema[];
  /**
   * In case of dynamic height this will be taken
   * as minimun height
   * @default  50
   */
  rowHeight?: number;
  /**
   * Height of header row
   * @default 40
   */
  headerHeight?: number;
  /**
   * Function which is invoked when user is about to reach
   * the end
   */
  loadMore?: () => void;
  /**
   * Extra rows to be rendered
   * above and below visible table
   * @default 5
   */
  buffer?: number;
  /**
   * Shows the loader
   */
  loading?: boolean;
  /**
   * Each row height will be calculated dynamically
   * and given row height will be considered as minimun row height
   */
  dynamicRowHeight?: boolean;
  /**
   * Adds pagination component
   * @default false
   */
  pagination?: boolean;
  /**
   * Assign the gridActions to passed variable
   */
  getGridActions?: (gridActions?: GridActions) => void;
  /**
   * Adds Custom CSS to `Table`
   */
  style?: React.CSSProperties;
  /**
   * Adds Custom class name to `Table grid`
   */
  className?: string;
}

export interface State {
  isScrolling: Boolean;
  position: number;
  gridMeta: {
    leftSchema: Schema[];
    centerSchema: Schema[];
    leftWidth: number;
    centerWidth: number;
    leftLoaderSchema?: LoadingSchema[];
    centerLoaderSchema?: LoadingSchema[];
  };
}

export interface TableState {
  offset: number;
  totalPages: number;
  data: any[];
}

export interface GridActions {
  refreshRows: (indexs: number[], all?: boolean) => void;
}
