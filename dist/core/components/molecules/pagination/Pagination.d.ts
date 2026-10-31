import * as React from 'react';
import { BaseProps } from '@/utils/types';
export type PaginationType = 'basic' | 'jump';
export type PaginationProps = {
    type?: PaginationType;
    totalPages?: number;
    page?: number;
    pageJumpDebounceDuration?: number;
    onPageChange: (page: number) => void;
} & BaseProps;
export declare const Pagination: {
    (props: PaginationProps): React.JSX.Element;
    displayName: string;
};
export default Pagination;
