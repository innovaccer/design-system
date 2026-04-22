import * as React from 'react';
export interface NestedListProp {
    expanded?: boolean;
    nestedBody?: React.ReactNode;
}
export declare const NestedList: (props: NestedListProp) => React.JSX.Element;
export default NestedList;
