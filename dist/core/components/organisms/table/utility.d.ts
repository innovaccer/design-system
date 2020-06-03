import { Table } from '@/index';
import { StateSchema } from './Table';
export declare const resizeCol: (_this: Table, name: string, el: HTMLDivElement | null) => void;
export declare const reorderCol: (_this: Table, name: string, el: HTMLDivElement | null) => void;
export declare function sortColumn(this: Table, name: StateSchema['name'], type: 'asc' | 'desc'): void;
export declare function pinColumn(this: Table, name: StateSchema['name'], type: 'left' | 'right'): void;
export declare function hideColumn(this: Table, name: StateSchema['name'], value: boolean): void;
