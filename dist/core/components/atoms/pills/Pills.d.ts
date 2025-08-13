import * as React from 'react';
import { BaseProps } from '@/utils/types';
import { AccentAppearance } from '@/common.type';
export type PillsProps = {
    appearance?: AccentAppearance;
    subtle?: boolean;
    children?: string | number;
} & BaseProps;
export declare const Pills: {
    (props: PillsProps): React.JSX.Element;
    displayName: string;
};
export default Pills;
