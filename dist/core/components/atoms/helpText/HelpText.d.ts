import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export interface HelpTextProps extends BaseProps {
    message?: string;
    error?: boolean;
}
export declare const HelpText: {
    (props: HelpTextProps): React.JSX.Element | null;
    displayName: string;
};
export default HelpText;
