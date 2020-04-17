import * as React from 'react';
declare type DivIntrinsicProps = JSX.IntrinsicElements['div'];
interface Props extends DivIntrinsicProps {
    template: React.ElementType;
    width: React.CSSProperties['width'];
    rowIndex: number;
}
declare class Cell extends React.PureComponent<Props> {
    render(): JSX.Element;
}
export default Cell;
