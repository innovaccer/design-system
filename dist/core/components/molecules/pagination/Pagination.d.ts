/// <reference types="react" />
export declare type PaginationType = 'basic' | 'jump';
export interface PaginationProps {
    type?: PaginationType;
    totalPages: number;
    page?: number;
    onPageChange: (page: number) => void;
}
export declare const Pagination: {
    (props: PaginationProps): JSX.Element;
    displayName: string;
};
export default Pagination;
