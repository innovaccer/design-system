import * as React from 'react';
declare type Columns = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'auto';
export interface ColumnProps {
    size?: Columns;
    sizeXS?: Columns;
    sizeS?: Columns;
    sizeM?: Columns;
    sizeL?: Columns;
    sizeXL?: Columns;
    children?: React.ReactNode;
    className?: string;
}
export declare const Column: {
    (props: ColumnProps): JSX.Element;
    displayName: string;
};
export default Column;
