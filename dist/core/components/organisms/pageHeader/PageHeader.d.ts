import * as React from 'react';
export interface PageHeaderProps {
    title: string;
    navigation?: React.ReactNode;
    actions?: React.ReactNode;
    tabs?: React.ReactNode;
}
export declare const PageHeader: {
    (props: PageHeaderProps): JSX.Element;
    defaultProps: {
        title: string;
        navigation: null;
        actions: null;
        tabs: null;
    };
};
export default PageHeader;
