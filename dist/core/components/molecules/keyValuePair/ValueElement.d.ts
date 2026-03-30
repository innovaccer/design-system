import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export interface ValueElementProps extends BaseProps {
    children?: React.ReactNode;
    value?: React.ReactText;
}
export declare const ValueElement: (props: ValueElementProps) => React.JSX.Element;
export default ValueElement;
