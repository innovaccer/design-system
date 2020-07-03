import * as React from 'react';
import { BaseProps } from '@/utils/types';
export declare type Dimension = 'small' | 'medium' | 'large';
export interface ModalProps extends BaseProps {
    onClose: (event?: Event, reason?: string) => void;
    backdrop?: boolean;
    closeOnEscape?: boolean;
    dimension?: Dimension;
    open: boolean;
    children?: React.ReactNode;
}
declare const Modal: {
    (props: ModalProps): JSX.Element;
    displayName: string;
};
export default Modal;
