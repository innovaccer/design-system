import * as React from 'react';
export declare type Appearance = 'default' | 'info' | 'success' | 'alert' | 'warning';
export declare type Action = {
    label: string;
    onClick: (e: React.MouseEvent) => void;
};
export interface ToastProps {
    title: string;
    appearance?: Appearance;
    message?: string;
    actions?: Action[];
    onClose?: () => void;
}
export declare const Toast: React.FunctionComponent<ToastProps>;
export default Toast;
