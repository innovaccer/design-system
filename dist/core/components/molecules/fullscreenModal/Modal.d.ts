import * as React from 'react';
import { BaseProps } from "../../../utils/types";
import { ModalHeaderProps } from "./ModalHeader";
import { ModalFooterProps } from "./ModalFooter";
export declare type Dimension = 'medium' | 'large';
export interface FullscreenModalProps extends BaseProps {
    dimension: Dimension;
    open: boolean;
    onClose?: (event?: Event | React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
    headerOptions?: ModalHeaderProps;
    header?: React.ReactNode;
    footerOptions?: ModalFooterProps;
    footer?: React.ReactNode;
    children?: React.ReactNode;
}
interface ModalState {
    open: boolean;
    animate: boolean;
    zIndex?: number;
}
declare class FullscreenModal extends React.Component<FullscreenModalProps, ModalState> {
    modalRef: React.RefObject<HTMLDivElement>;
    element: Element;
    static defaultProps: {
        dimension: string;
    };
    constructor(props: FullscreenModalProps);
    componentDidUpdate(prevProps: FullscreenModalProps): void;
    render(): JSX.Element;
}
export default FullscreenModal;
