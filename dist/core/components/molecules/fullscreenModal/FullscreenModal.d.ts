import * as React from 'react';
import { BaseProps } from '@/utils/types';
import { OverlayHeaderProps } from '@/components/molecules/overlayHeader';
import { FooterOptions } from '@/common.type';
export type FullScreenDimension = 'medium' | 'large';
export type FullscreenModalProps = {
    dimension: FullScreenDimension;
    open: boolean;
    onClose?: (event?: Event | React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
    headerOptions?: OverlayHeaderProps;
    header?: React.ReactNode;
    footerOptions?: FooterOptions;
    footer?: React.ReactNode;
    children?: React.ReactNode;
    closeOnEscape?: boolean;
} & BaseProps;
interface ModalState {
    open: boolean;
    animate: boolean;
    zIndex?: number;
}
declare class FullscreenModal extends React.Component<FullscreenModalProps, ModalState> {
    modalRef: React.RefObject<HTMLDivElement | null>;
    element: Element;
    static defaultProps: {
        dimension: string;
    };
    constructor(props: FullscreenModalProps);
    onOutsideClickHandler: (event: Event) => void;
    onCloseHandler: (event: KeyboardEvent) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: FullscreenModalProps): void;
    render(): React.JSX.Element;
}
export default FullscreenModal;
