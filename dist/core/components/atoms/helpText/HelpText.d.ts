import * as React from 'react';
import { BaseProps } from '@/utils/types';
export type HelpTextProps = {
    message?: string;
    error?: boolean;
} & BaseProps;
export declare const HelpText: {
    (props: HelpTextProps): React.JSX.Element | null;
    displayName: string;
};
export default HelpText;
