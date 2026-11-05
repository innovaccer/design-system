import * as React from 'react';
import { BaseHtmlProps, BaseProps } from "../../../utils/types";
export interface OutsideClickProps extends BaseHtmlProps<HTMLDivElement>, BaseProps {
    onOutsideClick: (event: Event) => void;
    children: React.ReactElement<any>;
    wrapperElement?: 'div' | 'span';
}
export declare const OutsideClick: React.ForwardRefExoticComponent<OutsideClickProps & React.RefAttributes<HTMLDivElement>>;
export default OutsideClick;
