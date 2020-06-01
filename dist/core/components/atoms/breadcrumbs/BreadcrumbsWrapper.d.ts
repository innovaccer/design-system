import * as React from 'react';
import { BreadcrumbProps } from './Breadcrumb';
export interface BreadcrumbsWrapperProps {
    heading?: string;
    children: React.ReactElement<BreadcrumbProps> | React.ReactElement<BreadcrumbProps>[];
}
export declare const BreadcrumbsWrapper: React.FunctionComponent<BreadcrumbsWrapperProps>;
export default BreadcrumbsWrapper;
