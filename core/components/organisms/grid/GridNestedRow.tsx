import * as React from 'react';
import { GridProps } from '@/index.type';
import { RowData } from './Grid';
import GridContext from './GridContext';

export interface GridNestedRowProps {
  data: RowData;
  rowIndex: number;
  expanded?: boolean;
}

export interface NestedRowProps {
  rowIndex: number;
  data: RowData;
  schema: GridProps['schema'];
  loading: GridProps['loading'];
  expanded?: boolean;
}

export const GridNestedRow = (props: GridNestedRowProps) => {
  const context = React.useContext(GridContext);

  const { schema, loading, nestedRowRenderer } = context;

  const { data, rowIndex, expanded } = props;

  if (nestedRowRenderer) return nestedRowRenderer({ data, schema, loading, rowIndex, expanded });
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
