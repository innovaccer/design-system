import * as React from 'react';
import { BaseHtmlProps, BaseProps } from "../../../utils/types";
export interface CaptionProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
    children: React.ReactNode;
    error?: boolean;
    hide?: boolean;
    withInput?: boolean;
}
export declare const Caption: {
    (props: CaptionProps): React.JSX.Element;
    displayName: string;
};
export default Caption;
