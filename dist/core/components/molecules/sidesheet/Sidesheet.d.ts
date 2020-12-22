import * as React from 'react';
import { ModalHeaderProps } from "../../../index.type";
import { BaseProps } from "../../../utils/types";
export declare type Dimension = 'regular' | 'large';
export interface SidesheetProps extends BaseProps {
    headerOptions: Omit<ModalHeaderProps, 'onClose'>;
    dimension: Dimension;
    open: boolean;
    stickFooter?: boolean;
    seperator?: boolean;
    children?: React.ReactNode;
    footer?: React.ReactNode;
    backdropClose?: boolean;
    onClose?: (event?: Event | React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
}
interface SidesheetState {
    open: boolean;
    animate: boolean;
    zIndex?: number;
}
declare class Sidesheet extends React.Component<SidesheetProps, SidesheetState> {
    sidesheetRef: React.RefObject<HTMLDivElement>;
    element: Element;
    static defaultProps: {
        dimension: string;
        stickFooter: boolean;
        headerOptions: {};
    };
    constructor(props: SidesheetProps);
    componentDidUpdate(prevProps: SidesheetProps): void;
    getUpdatedZIndex: () => number | undefined;
    render(): JSX.Element;
}
export default Sidesheet;
