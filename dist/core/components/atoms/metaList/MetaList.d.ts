import * as React from 'react';
import { MetaProps } from './Meta';
import { IconProps, TextProps } from '@/index.type';
import { BaseProps } from '@/utils/types';
export type MetaSize = 'small' | 'regular';
export type MetaListProps = {
    list: MetaProps[];
    seperator?: boolean;
    seperatorAppearance?: IconProps['appearance'];
    iconAppearance?: IconProps['appearance'];
    labelAppearance?: TextProps['appearance'];
    size?: MetaSize;
} & BaseProps;
export declare const MetaList: {
    (props: MetaListProps): React.JSX.Element;
    displayName: string;
};
export default MetaList;
