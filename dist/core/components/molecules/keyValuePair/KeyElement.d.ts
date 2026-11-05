import * as React from 'react';
import { IconProps } from "../../../index.type";
import { BaseProps } from "../../../utils/types";
declare type IconPosition = 'left' | 'right';
export interface KeyElementProps extends BaseProps {
    children?: React.ReactNode;
    label?: React.ReactText;
    icon?: string;
    iconOptions?: IconProps;
    iconAlign?: IconPosition;
}
export declare const KeyElement: {
    (props: KeyElementProps): React.JSX.Element;
    defaultProps: {
        iconAlign: string;
    };
};
export default KeyElement;
