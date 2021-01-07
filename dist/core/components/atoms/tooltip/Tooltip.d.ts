import * as React from 'react';
import { Omit } from 'utility-types';
import { PopoverProps } from "../../../index.type";
export declare type PositionType = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'right';
declare type DivProps = Omit<JSX.IntrinsicElements['div'], 'ref'>;
export interface TooltipProps extends DivProps {
    tooltip: string;
    children: React.ReactElement<any>;
    position: PositionType;
    appendToBody: boolean;
    triggerClass?: string;
    hideOnReferenceEscape?: PopoverProps['hideOnReferenceEscape'];
    boundaryElement?: PopoverProps['boundaryElement'];
}
interface IState {
    open: boolean;
}
export declare class Tooltip extends React.Component<TooltipProps, IState> {
    static defaultProps: {
        position: string;
        appendToBody: boolean;
        hideOnReferenceEscape: boolean;
    };
    constructor(props: TooltipProps);
    onToggle: (open: boolean) => void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default Tooltip;
