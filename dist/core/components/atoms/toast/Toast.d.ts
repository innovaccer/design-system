import * as React from 'react';
import { BaseProps } from "../../../utils/types";
import { MessageAppearance } from "../../../common.type";
export declare type Action = {
    label: string;
    onClick: (e: React.MouseEvent) => void;
};
export interface ToastProps extends BaseProps {
    title: string;
    appearance: MessageAppearance;
    message?: string;
    actions?: Action[];
    onClose?: () => void;
    'aria-label'?: string;
    'aria-atomic'?: 'true' | 'false' | boolean;
    id?: string;
}
export declare const Toast: {
    (props: ToastProps): React.JSX.Element;
    displayName: string;
    defaultProps: {
        appearance: string;
    };
};
export default Toast;
