import * as React from 'react';
import { BaseProps } from '@/utils/types';
export type KeyValuePairProps = {
    children: React.ReactNode;
} & BaseProps;
export declare const KeyValuePair: {
    (props: KeyValuePairProps): React.JSX.Element;
    Key: (props: import("./KeyElement").KeyElementProps) => React.JSX.Element;
    Value: (props: import("./ValueElement").ValueElementProps) => React.JSX.Element;
};
export default KeyValuePair;
