import * as React from 'react';
import { OverlayHeaderProps } from "../overlayHeader";
import { BaseProps } from "../../../utils/types";
import { FooterOptions } from "../../../common.type";
export declare type SidesheetDimension = 'regular' | 'large';
export interface SidesheetProps extends BaseProps {
    headerOptions: Omit<OverlayHeaderProps, 'onClose'>;
    header?: React.ReactNode;
    dimension: SidesheetDimension;
    open: boolean;
    stickFooter?: boolean;
    seperator?: boolean;
    children?: React.ReactNode;
    footer?: React.ReactNode;
    footerOptions?: FooterOptions;
    backdropClose?: boolean;
    closeOnEscape?: boolean;
    onClose?: (event?: Event | React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
    'aria-labelledby'?: string;
}
interface SidesheetState {
    open: boolean;
    animate: boolean;
    zIndex?: number;
}
declare class Sidesheet extends React.Component<SidesheetProps, SidesheetState> {
    sidesheetRef: React.RefObject<HTMLDivElement>;
    sidesheetContentRef: React.RefObject<HTMLDivElement>;
    previousActiveElement: HTMLElement | null;
    autofocusRAF: number | null;
    autoHeadingId: string;
    element: Element;
    static defaultProps: {
        dimension: string;
        stickFooter: boolean;
        headerOptions: {};
        closeOnEscape: boolean;
    };
    constructor(props: SidesheetProps);
    onCloseHandler: (event: KeyboardEvent) => void;
    onFocusTrapKeyDown: (event: KeyboardEvent) => void;
    focusFirstFocusable: () => void;
    onOpenAnimationStart: (event: React.AnimationEvent<HTMLDivElement>) => void;
    activateFocusTrap: () => void;
    deactivateFocusTrap: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: SidesheetProps): void;
    onOutsideClickHandler(event: Event): void;
    handleAnimationEnd(): void;
    render(): React.JSX.Element;
}
export default Sidesheet;
