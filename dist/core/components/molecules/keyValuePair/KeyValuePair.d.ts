import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export interface KeyValuePairProps extends BaseProps {
    children: React.ReactNode;
}
export declare const KeyValuePair: {
    (props: KeyValuePairProps): JSX.Element;
    Key: {
        (props: import("./KeyElement").KeyElementProps): JSX.Element;
        defaultProps: {
            iconAlign: string;
        };
    };
    Value: (props: import("./ValueElement").ValueElementProps) => JSX.Element;
};
export default KeyValuePair;
