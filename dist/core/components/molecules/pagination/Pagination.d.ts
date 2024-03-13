import { BaseProps } from "../../../utils/types";
export declare type PaginationType = 'basic' | 'jump';
export interface PaginationProps extends BaseProps {
    type: PaginationType;
    totalPages: number;
    page: number;
    pageJumpDebounceDuration: number;
    onPageChange: (page: number) => void;
}
export declare const Pagination: {
    (props: PaginationProps): JSX.Element;
    displayName: string;
    defaultProps: {
        type: string;
        page: number;
        totalPages: number;
        pageJumpDebounceDuration: number;
    };
};
export default Pagination;
