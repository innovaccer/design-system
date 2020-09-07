// import * as React from 'react';
import { Grid } from '@/index';
import { GridProps } from '@/index.type';
import { RowData } from './Grid';

export interface GridNestedRowProps {
  _this: Grid;
  data: RowData;
  rowIndex: number;
}

export interface NestedRowProps {
  rowIndex: number;
  data: RowData;
  schema: GridProps['schema'];
  loading: GridProps['loading'];
}

export const GridNestedRow = (props: GridNestedRowProps) => {
  const {
    _this,
    data,
    rowIndex
  } = props;

  const {
    schema,
    loading,
    nestedRowRenderer
  } = _this.props;

  if (nestedRowRenderer) return nestedRowRenderer({ data, schema, loading, rowIndex });
  // return (
  //   <Text>{JSON.stringify(data)}</Text>
  // )

  // const {
  //   schema: propSchema
  // } = _this.props;

  // if (data._expanded) {
  //   const showHead = data._expanded.showHead;
  //   const schema = data._expanded.schema || propSchema;
  //   let gridData = data._expanded.data;
  //   if (!gridData) {
  //     const {
  //       _uid,
  //       _expanded,
  //       ...rest
  //     } = data;
  //     gridData = [rest];
  //   }

  //   return (
  //     <div className="Grid-expandedRow">
  //       <Grid
  //         key={'expanedRow'}
  //         showHead={showHead}
  //         data={gridData}
  //         schema={schema}
  //         totalRecords={gridData.length}
  //       />
  //     </div>
  //   );
  // }
  return null;
};

export default GridNestedRow;
