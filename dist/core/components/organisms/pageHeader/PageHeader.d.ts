import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export declare type navigationPositionType = 'center' | 'bottom';
export interface PageHeaderProps extends BaseProps {
    title: string;
    navigation?: React.ReactNode;
    actions?: React.ReactNode;
    tabs?: React.ReactNode;
    breadcrumbs?: React.ReactNode;
    badge?: React.ReactNode;
    status?: React.ReactNode;
    meta?: React.ReactNode;
    navigationPosition?: navigationPositionType;
    separator?: boolean;
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
        navigationPosition: string;
        separator: boolean;
    };
};
export default PageHeader;
