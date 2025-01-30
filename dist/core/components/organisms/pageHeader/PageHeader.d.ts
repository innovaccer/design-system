import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export declare type navigationPositionType = 'center' | 'bottom';
export interface PageHeaderProps extends BaseProps {
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
    navigationPosition: navigationPositionType;
    separator: boolean;
}
export declare const PageHeader: {
    (props: PageHeaderProps): React.JSX.Element;
    defaultProps: {
        navigationPosition: string;
        separator: boolean;
    };
};
export default PageHeader;
