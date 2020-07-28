import * as React from 'react';
declare type PositionType = 'auto-start' | 'auto' | 'auto-end' | 'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-end' | 'bottom' | 'bottom-start' | 'left-end' | 'left' | 'left-start' | undefined;
declare type actionType = 'click' | 'hover';
declare enum Offsets {
    Small = "2px",
    Medium = "4px",
    Large = "8px"
}
interface Props {
    trigger: React.ReactElement<any>;
    triggerClass?: string;
    placement: PositionType;
    children: React.ReactElement<any>;
    style?: React.CSSProperties;
    appendToBody: boolean;
    on?: actionType;
    offset: keyof typeof Offsets;
    closeOnBackdropClick?: boolean;
    hoverable?: boolean;
    open?: boolean;
    onToggle: (open: boolean, type?: string) => void;
}
interface IState {
    open: boolean;
    mouseLeaveDelay: number;
    mouseEnterDelay: number;
}
declare class PopperWrapper extends React.Component<Props, IState> {
    private triggerRef;
    private popupRef;
    private _timer?;
    constructor(props: Props);
    componentWillUnmount(): void;
    handleMouseLeave: (event: React.MouseEvent<HTMLElement>) => void;
    handleMouseEnter: (event: React.MouseEvent<HTMLElement>) => void;
    togglePopper: (type?: string | undefined) => void;
    doesNodeContainClick: (event: Event) => void;
    componentDidMount(): void;
    componentDidUpdate(): void;
    getTriggerElement(trigger: React.ReactElement<any>, ref: React.Ref<any>, on: actionType): React.FunctionComponentElement<any>;
    getChildrenElement(children: React.ReactElement<any>, ref: React.Ref<any>, placement: string, style: React.CSSProperties): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
    render(): JSX.Element;
    private getUpdatedStyle;
    private findDOMNode;
}
export default PopperWrapper;
