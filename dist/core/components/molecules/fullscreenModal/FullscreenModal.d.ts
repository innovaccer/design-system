import * as React from 'react';
import { BaseProps } from "../../../utils/types";
import { OverlayFooterProps } from "../overlayFooter";
import { OverlayHeaderProps } from "../overlayHeader";
export declare type Dimension = 'medium' | 'large';
declare type FooterOptions = {
    actions: OverlayFooterProps['actions'];
};
export interface FullscreenModalProps extends BaseProps {
    dimension: Dimension;
    open: boolean;
    onClose?: (event?: Event | React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
    headerOptions?: OverlayHeaderProps;
    header?: React.ReactNode;
    footerOptions?: FooterOptions;
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
