import * as React from 'react';
import { Schema } from './interfaces';
interface Props {
    leftSchema: Schema[];
    centerSchema: Schema[];
    leftWidth: number;
    centerWidth: number;
    getRef: (ref: React.RefObject<HTMLDivElement>) => void;
    headerHeight: number;
    syncHorizontalScroll: (event: any) => void;
}
declare class Header extends React.Component<Props> {
    centerHeaderRef: React.RefObject<HTMLDivElement>;
    getHeader: (schema: Schema[]) => JSX.Element;
    componentDidMount(): void;
    render(): JSX.Element;
}
export default Header;
