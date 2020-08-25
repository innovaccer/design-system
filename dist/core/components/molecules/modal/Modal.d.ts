import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export declare type Dimension = 'small' | 'medium' | 'large';
export interface ModalProps extends BaseProps {
    backdropClose: (event?: Event, reason?: string) => void;
    backdrop?: boolean;
    closeOnEscape?: boolean;
    dimension?: Dimension;
    open: boolean;
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
    constructor(props: ModalProps);
    componentDidUpdate(prevProps: ModalProps): void;
    getUpdatedZIndex: () => number | undefined;
    render(): JSX.Element;
}
export default Modal;
