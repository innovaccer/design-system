export interface IItemProps {
  key?: number;
  tabIndex?: number;
  'aria-roledescription'?: string;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  onWheel?: (e: React.WheelEvent) => void;
  style?: React.CSSProperties;
  ref?: React.RefObject<any>;
}

export interface RenderItemParams<Value> {
  value: Value;
  props: IItemProps;
  index?: number;
  isDragged: boolean;
  isSelected: boolean;
  isOutOfBounds: boolean;
}

export interface RenderListParams {
  children: React.ReactNode;
  isDragged: boolean;
  props: {
    ref: React.RefObject<any>;
  };
}

export interface BeforeDragParams {
  elements: Element[];
  index: number;
}

export interface OnChangeMeta {
  oldIndex: number;
  newIndex: number;
  targetRect: ClientRect;
}

export interface IProps<Value> {
  beforeDrag?: (params: BeforeDragParams) => void;
  renderItem: (params: RenderItemParams<Value>) => React.ReactNode;
  renderList: (props: RenderListParams) => React.ReactNode;
  // values: Value[];
  values: any;
  onChange: (meta: OnChangeMeta) => void;
  transitionDuration: number;
  removableByMove: boolean;
  lockVertically: boolean;
  container?: Element | null;
}

export type TEvent = React.MouseEvent | React.TouchEvent | React.KeyboardEvent;
