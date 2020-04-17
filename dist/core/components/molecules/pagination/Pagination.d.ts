import * as React from 'react';
export declare type PaginationType = 'basic' | 'jump';
export interface PaginationProps {
    type?: PaginationType;
    totalPages: number;
    page?: number;
    onPageChange: (page: number) => void;
}
export declare const Pagination: React.FunctionComponent<PaginationProps>;
export default Pagination;
