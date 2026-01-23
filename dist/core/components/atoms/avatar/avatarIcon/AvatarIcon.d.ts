import * as React from 'react';
import { BaseProps } from '@/utils/types';
export type AvatarIconProps = {
    name?: string;
    type?: 'outlined' | 'rounded';
} & BaseProps;
export declare const AvatarIcon: (props: AvatarIconProps) => React.JSX.Element;
export default AvatarIcon;
