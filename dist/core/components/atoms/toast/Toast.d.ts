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
}
export declare const Toast: {
    (props: ToastProps): JSX.Element;
    displayName: string;
    defaultProps: {
        appearance: string;
    };
};
export default Toast;
