import { Grid } from '@/index';
import { ColumnSchema } from './Grid';
export declare const resizeCol: (_this: Grid, name: string, el: HTMLDivElement | null) => void;
export declare const reorderCol: (_this: Grid, name: string, el: HTMLDivElement | null) => void;
export declare function sortColumn(this: Grid, name: ColumnSchema['name'], type: 'asc' | 'desc'): void;
export declare function pinColumn(this: Grid, name: ColumnSchema['name'], type: 'left' | 'right'): void;
export declare function hideColumn(this: Grid, name: ColumnSchema['name'], value: boolean): void;
