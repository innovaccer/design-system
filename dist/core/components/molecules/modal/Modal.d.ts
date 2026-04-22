import * as React from 'react';
import { BaseProps } from '@/utils/types';
import { OverlayHeaderProps } from '@/components/molecules/overlayHeader';
import { FooterOptions } from '@/common.type';
export type ModalDimension = 'small' | 'medium' | 'large';
export type ModalProps = {
    backdropClose?: boolean | ((event?: Event, reason?: string) => void);
    dimension: ModalDimension;
    open: boolean;
    onClose?: (event?: Event | React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
    headerOptions?: OverlayHeaderProps;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    footerOptions?: FooterOptions;
    children?: React.ReactNode;
    seperator?: boolean;
    closeOnEscape?: boolean;
    'aria-labelledby'?: string;
} & BaseProps;
interface ModalState {
    open: boolean;
    animate: boolean;
    zIndex?: number;
}
declare class Modal extends React.Component<ModalProps, ModalState> {
    modalRef: React.RefObject<HTMLDivElement | null>;
    modalContentRef: React.RefObject<HTMLDivElement | null>;
    previousActiveElement: HTMLElement | null;
    autoHeadingId: string;
    element: Element;
    static defaultProps: {
        dimension: string;
        closeOnEscape: boolean;
    };
    constructor(props: ModalProps);
    onCloseHandler: (event: KeyboardEvent) => void;
    onFocusTrapKeyDown: (event: KeyboardEvent) => void;
    activateFocusTrap: () => void;
    deactivateFocusTrap: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: ModalProps): void;
    onOutsideClickHandler(event: Event): void;
    render(): React.JSX.Element;
}
export default Modal;
