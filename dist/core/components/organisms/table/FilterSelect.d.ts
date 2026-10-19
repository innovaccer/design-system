import * as React from 'react';
import { OptionType } from "../../../common.type";
import { ColumnSchema } from "../grid/Grid";
export interface FilterSelectProps {
    name: ColumnSchema['name'];
    displayName: string;
    filters: OptionType[];
    filterList: Record<string, any[]>;
    onChange: (name: string, selected: any[]) => void;
    filterOptions?: {
        selectionType?: 'singleSelect' | 'multiSelect';
        minWidth?: number | string;
        maxWidth?: number | string;
        maxVisibleSelection?: number;
    };
    filterType?: 'singleSelect' | 'multiSelect';
    className?: string;
    customTrigger?: React.ReactElement;
}
export declare const FilterSelect: React.FC<FilterSelectProps>;
export default FilterSelect;
