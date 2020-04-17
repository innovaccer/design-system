import * as React from 'react';
export declare type DivProps = JSX.IntrinsicElements['div'];
export interface OutsideClickProps extends DivProps {
    onOutsideClick: (event: Event) => void;
    children: React.ReactElement<any>;
}
export declare class OutsideClick extends React.Component<OutsideClickProps, never> {
    container: React.RefObject<HTMLDivElement>;
    constructor(props: OutsideClickProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleOutsideClick: (event: Event) => void;
    render(): React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
}
export default OutsideClick;
