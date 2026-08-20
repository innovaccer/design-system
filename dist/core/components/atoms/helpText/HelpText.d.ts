import * as React from 'react';
import { BaseProps } from '@/utils/types';
export type HelpTextProps = {
    id?: string;
    message?: string;
    error?: boolean;
} & BaseProps;
export declare const HelpText: {
    (props: HelpTextProps): React.JSX.Element | null;
    displayName: string;
};
export default HelpText;
