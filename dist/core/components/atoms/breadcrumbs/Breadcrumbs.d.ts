import * as React from 'react';
import { BaseProps } from '@/utils/types';
interface Breadcrumb {
    label: string;
    link: string;
}
export type BreadcrumbsProps = {
    list: Breadcrumb[];
    onClick?: (link: string) => void;
    showTooltip?: boolean;
} & BaseProps;
export declare const Breadcrumbs: (props: BreadcrumbsProps) => React.JSX.Element;
export default Breadcrumbs;
