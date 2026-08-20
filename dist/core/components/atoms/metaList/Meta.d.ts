import * as React from 'react';
import { MetaSize } from './MetaList';
import { IconType } from '@/common.type';
export interface MetaProps {
    label: string;
    icon?: string;
    size?: MetaSize;
    iconType?: IconType;
}
export declare const Meta: {
    (props: MetaProps): React.JSX.Element;
    displayName: string;
};
export default Meta;
