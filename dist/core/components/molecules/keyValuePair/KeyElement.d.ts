import * as React from 'react';
import { IconProps } from '@/index.type';
import { BaseProps } from '@/utils/types';
type IconPosition = 'left' | 'right';
export type KeyElementProps = {
    children?: React.ReactNode;
    label?: string | number;
    icon?: string;
    iconOptions?: IconProps;
    iconAlign?: IconPosition;
} & BaseProps;
export declare const KeyElement: (props: KeyElementProps) => React.JSX.Element;
export default KeyElement;
