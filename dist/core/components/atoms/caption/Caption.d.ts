import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export interface CaptionProps extends BaseProps {
    children: React.ReactNode;
    error?: boolean;
    hide?: boolean;
    withInput?: boolean;
}
export declare const Caption: {
    (props: CaptionProps): JSX.Element;
    displayName: string;
};
export default Caption;
