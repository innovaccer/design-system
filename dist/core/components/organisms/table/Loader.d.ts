import * as React from 'react';
import { LoadingSchema, Schema } from './interfaces';
interface Props {
    loaderSchema?: LoadingSchema[];
    schema?: Schema[];
    rows?: number;
    rowHeight?: number;
    style?: React.CSSProperties;
    className: string;
}
declare class Loader extends React.PureComponent<Props> {
    defaultLoaderSchema: LoadingSchema[];
    getLoaderRows: (rows: number, height: number, loadingSchema: LoadingSchema[], schema: Schema[]) => JSX.Element[];
    render(): JSX.Element;
    static defaultProps: {
        rowHeight: number;
        rows: number;
    };
}
export default Loader;
