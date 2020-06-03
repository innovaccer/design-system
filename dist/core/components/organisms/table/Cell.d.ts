import * as React from 'react';
import { StateData, StateSchema } from './Table';
import { Table } from '@/index';
interface SharedCellProps {
    _this: Table;
    schema: StateSchema;
}
declare type HeaderCellProps = SharedCellProps & {
    colIndex: number;
    draggable: boolean;
};
declare type BodyCellProps = SharedCellProps & {
    data: StateData;
    rowIndex: number;
    colIndex: number;
    expandedState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
};
export declare type CellProps = (HeaderCellProps | BodyCellProps) & {
    header?: boolean;
};
export declare const Cell: (props: CellProps) => JSX.Element | null;
export default Cell;
