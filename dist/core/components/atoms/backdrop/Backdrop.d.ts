import * as React from 'react';
import { BaseProps } from '@/utils/types';
export type BackdropProps = {
    open: boolean;
    zIndex?: number;
} & BaseProps;
export declare const Backdrop: React.FC<BackdropProps>;
export default Backdrop;
