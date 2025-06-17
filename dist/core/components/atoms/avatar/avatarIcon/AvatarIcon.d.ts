import * as React from 'react';
import { BaseProps } from '@/utils/types';
export interface AvatarIconProps extends BaseProps {
    name?: string;
    type?: 'outlined' | 'rounded';
}
export declare const AvatarIcon: (props: AvatarIconProps) => React.JSX.Element;
export default AvatarIcon;
