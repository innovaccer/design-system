import * as React from 'react';
export interface NestedListProp {
    expanded?: boolean;
    nestedBody?: React.ReactNode;
    id?: string;
    'aria-label'?: string;
}
export declare const NestedList: (props: NestedListProp) => React.JSX.Element;
export default NestedList;
