import * as React from 'react';
import { BaseProps } from "../../../utils/types";
import { OverlayFooterProps } from "../overlayFooter";
import { OverlayHeaderProps } from "../overlayHeader";
export declare type Dimension = 'small' | 'medium' | 'large';
declare type FooterOptions = {
    actions: OverlayFooterProps['actions'];
};
export interface ModalProps extends BaseProps {
    backdropClose?: boolean | ((event?: Event, reason?: string) => void);
    dimension: Dimension;
    open: boolean;
    onClose?: (event?: Event | React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
    headerOptions?: OverlayHeaderProps;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    footerOptions?: FooterOptions;
    children?: React.ReactNode;
    seperator?: boolean;
    closeOnEscape?: boolean;
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
    onCloseHandler: (event: KeyboardEvent) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: ModalProps): void;
    onOutsideClickHandler(event: Event): void;
    render(): JSX.Element;
}
export default Modal;
