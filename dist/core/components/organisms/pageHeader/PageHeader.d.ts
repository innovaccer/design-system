import * as React from 'react';
import { BaseProps } from '@/utils/types';
export type navigationPositionType = 'center' | 'bottom';
export type PageHeaderProps = {
    title: string;
    navigation?: React.ReactNode;
    stepper?: React.ReactNode;
    actions?: React.ReactNode;
    tabs?: React.ReactNode;
    breadcrumbs?: React.ReactNode;
    badge?: React.ReactNode;
    status?: React.ReactNode;
    meta?: React.ReactNode;
    button?: React.ReactNode;
    navigationPosition?: navigationPositionType;
    separator?: boolean;
} & BaseProps;
export declare const PageHeader: (props: PageHeaderProps) => React.JSX.Element;
export default PageHeader;
