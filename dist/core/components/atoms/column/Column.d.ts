import * as React from 'react';
import { BaseContainerProps } from "../../../utils/types";
declare type Columns = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export interface ColumnProps extends Omit<BaseContainerProps, 'size'> {
    size?: Columns;
    sizeXS?: Columns;
    sizeS?: Columns;
    sizeM?: Columns;
    sizeL?: Columns;
    sizeXL?: Columns;
}
export declare const Column: React.ForwardRefExoticComponent<ColumnProps & React.RefAttributes<HTMLDivElement>>;
export default Column;
