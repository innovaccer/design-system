import * as React from 'react';
import { BaseProps } from '@/utils/types';
export declare type Appearance = 'default' | 'info' | 'success' | 'alert' | 'warning';
export declare type Action = {
    label: string;
    onClick: (e: React.MouseEvent) => void;
};
export interface ToastProps extends BaseProps {
    title: string;
    appearance?: Appearance;
    message?: string;
    actions?: Action[];
    onClose?: () => void;
}
export declare const Toast: {
    (props: ToastProps): JSX.Element;
    displayName: string;
};
export default Toast;
