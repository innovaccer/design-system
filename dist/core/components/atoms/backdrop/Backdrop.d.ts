import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export interface BackdropProps extends BaseProps {
    open: boolean;
    zIndex?: number;
}
export declare const Backdrop: React.FC<BackdropProps>;
export default Backdrop;
