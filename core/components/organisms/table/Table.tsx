import * as React from 'react';
import Grid from './Grid';
import { Props, TableState } from './interfaces';

export interface TableProps extends Props {
  /**
   * Number of records to be shown on a page in case of pagination
   * @default 10
   */
  limit?: number;
  /**
   * Shows the loader when user is about to reach the end
   */
  loadingMoreData?: boolean;
}

class Table extends React.PureComponent<TableProps, TableState> {
  limit: number;

  constructor(props: TableProps) {
    super(props);
    this.limit = props.limit ? props.limit : 10;

    this.state = {
      offset: 0,
      data: this.getData(),
      totalPages: this.calcTotalPages(),
    };
  }

  calcTotalPages = () => {
    let totalPages = Math.round(this.props.data.length / this.limit);
    totalPages = (this.props.data.length / this.limit) <= totalPages ? totalPages : totalPages + 1;
    return totalPages;
  }

  getData = () => {
    if (!this.props.pagination || this.props.data.length === 0) {
      return this.props.data;
    }

    const recordsCopy = this.props.data.slice();
    const offset = 0;
    const slicedData = recordsCopy.slice(offset, offset + this.limit);
    return slicedData;
  }

  componentDidUpdate(prevProps: TableProps) {
    if ((prevProps.pagination !== this.props.pagination) ||
      (prevProps.limit !== this.props.limit) ||
      (prevProps.data.length !== this.props.data.length)
    ) {
      this.limit = this.props.limit ? this.props.limit : 10;
      this.setState({
        offset: 0,
        data: this.getData(),
        totalPages: this.calcTotalPages(),
      });
    }
  }

  onPageChange = (pageNo: number) => {
    const offset = (pageNo - 1) * this.limit;
    const dataCopy = this.props.data.slice();
    const data = dataCopy.slice(offset, offset + this.limit);
    this.setState({
      offset,
      data,
    });
  }

  render() {
    const {
      schema,
      style,
      loadMore,
      loading,
      getGridActions,
      buffer,
      dynamicRowHeight,
      rowHeight,
      headerHeight,
      loaderSchema,
      pagination,
    } = this.props;

    const loadingMoreData = this.props.pagination ? false : this.props.loadingMoreData;

    return (
      <Grid
        style={style}
        loadMore={loadMore}
        loading={loading}
        loadingMoreData={loadingMoreData}
        getGridActions={dynamicRowHeight ? getGridActions : undefined}
        buffer={buffer}
        dynamicRowHeight={dynamicRowHeight}
        rowHeight={rowHeight}
        headerHeight={headerHeight}
        schema={schema}
        loaderSchema={loaderSchema}
        data={this.state.data}
        offset={this.state.offset}
        pagination={pagination}
        totalPages={this.state.totalPages}
        onPageChange={this.onPageChange}
      />
    );
  }
}

export default Table;
