import * as React from 'react';
import { BaseProps } from "../../../utils/types";
import { OverlayHeaderProps } from "../overlayHeader";
import { FooterOptions } from "../../../common.type";
export declare type FullScreenDimension = 'medium' | 'large';
export interface FullscreenModalProps extends BaseProps {
    dimension: FullScreenDimension;
    open: boolean;
    onClose?: (event?: Event | React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
    headerOptions?: OverlayHeaderProps;
    header?: React.ReactNode;
    footerOptions?: FooterOptions;
    footer?: React.ReactNode;
    children?: React.ReactNode;
    closeOnEscape?: boolean;
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
    onOutsideClickHandler: (event: Event) => void;
    onCloseHandler: (event: KeyboardEvent) => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: FullscreenModalProps): void;
    render(): JSX.Element;
}
export default FullscreenModal;
