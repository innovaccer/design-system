import * as React from 'react';
import { BaseProps } from '@/utils/types';
type DividerType = 'basic' | 'header';
export type DividerProps = {
    vertical?: boolean;
    appearance?: DividerType;
} & BaseProps;
export declare const Divider: {
    (props: DividerProps): React.JSX.Element;
    displayName: string;
};
export default Divider;
