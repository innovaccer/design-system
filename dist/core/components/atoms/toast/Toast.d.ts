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
    'aria-label'?: string;
    'aria-atomic'?: 'true' | 'false' | boolean;
    id?: string;
} & BaseProps;
export declare const Toast: {
    (props: ToastProps): React.JSX.Element;
    displayName: string;
};
export default Toast;
