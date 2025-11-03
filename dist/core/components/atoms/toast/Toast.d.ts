import * as React from 'react';
import { BaseProps } from '@/utils/types';
import { MessageAppearance } from '@/common.type';
export type Action = {
    label: string;
    onClick: (e: React.MouseEvent) => void;
};
export type ToastProps = {
    title: string;
    appearance?: MessageAppearance;
    message?: string;
    actions?: Action[];
    onClose?: () => void;
} & BaseProps;
export declare const Toast: {
    (props: ToastProps): React.JSX.Element;
    displayName: string;
};
export default Toast;
