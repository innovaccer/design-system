import * as React from 'react';
import { BaseProps } from '@/utils/types';
export type CaptionProps = {
    children: React.ReactNode;
    error?: boolean;
    hide?: boolean;
    withInput?: boolean;
} & BaseProps;
export declare const Caption: {
    (props: CaptionProps): React.JSX.Element;
    displayName: string;
};
export default Caption;
