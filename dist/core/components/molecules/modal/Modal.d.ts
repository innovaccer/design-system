import * as React from 'react';
import { BaseProps } from "../../../utils/types";
import { ModalHeaderProps } from "../../../index.type";
export declare type Dimension = 'small' | 'medium' | 'large';
export interface ModalProps extends BaseProps {
    backdropClose?: boolean | ((event?: Event, reason?: string) => void);
    dimension: Dimension;
    open: boolean;
    onClose?: (event?: Event | React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
    headerOptions?: Omit<ModalHeaderProps, 'onClose'>;
    footer?: React.ReactNode;
    children?: React.ReactNode;
}
interface ModalState {
    open: boolean;
    animate: boolean;
    zIndex?: number;
}
declare class Modal extends React.Component<ModalProps, ModalState> {
    modalRef: React.RefObject<HTMLDivElement>;
    element: Element;
    static defaultProps: {
        dimension: string;
    };
    constructor(props: ModalProps);
    componentDidUpdate(prevProps: ModalProps): void;
    render(): JSX.Element;
}
export default Modal;
