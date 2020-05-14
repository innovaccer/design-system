import * as React from 'react';
import {ColumnHeaderCell as BPColumnHeaderCell, IColumnHeaderCellProps} from '@blueprintjs/table';
// import {Icon} from '@/index';

export const ColumnHeaderCell = (props: IColumnHeaderCellProps) => {
  console.log(props);

  return (
    <BPColumnHeaderCell 
      {...props}
    />
  )
}

export default ColumnHeaderCell;
