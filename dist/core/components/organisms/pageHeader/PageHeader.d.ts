import * as React from 'react';
import { BaseProps } from '@/utils/types';
export declare type HeaderType = 'small' | 'large';
export interface PageHeaderProps extends BaseProps {
    title: string;
    navigation?: React.ReactNode;
    actions?: React.ReactNode;
    tabs?: React.ReactNode;
    breadcrumbs?: React.ReactNode;
    badge?: React.ReactNode;
    status?: React.ReactNode;
    meta?: React.ReactNode;
    type?: HeaderType;
}
export declare const PageHeader: {
    (props: PageHeaderProps): JSX.Element;
    defaultProps: {
        title: string;
        navigation: null;
        actions: null;
        tabs: null;
        breadcrumbs: null;
        badge: null;
        status: null;
        meta: null;
        type: string;
    };
};
export default PageHeader;
