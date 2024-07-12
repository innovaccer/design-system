import * as React from 'react';
import { BaseProps } from "../../../utils/types";
interface SelectEmptyTemplateProps extends BaseProps {
    title?: string;
    description?: string;
    children?: React.ReactNode;
}
export declare const SelectEmptyTemplate: (props: SelectEmptyTemplateProps) => JSX.Element;
export default SelectEmptyTemplate;
