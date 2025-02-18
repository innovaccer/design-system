import { GridProps } from '@/index.type';

export const defaultProps: GridProps = {
  showHead: true,
  loaderSchema: [],
  schema: [],
  data: [],
  totalRecords: 0,
  type: 'data',
  size: 'standard',
  page: 1,
  pageSize: 15,
  loading: false,
  error: false,
  sortingList: [],
  filterList: {},
  showFilters: true,
  virtualScrollOptions: {
    preFetchRows: 50,
    loadMoreThreshold: 'balanced',
  },
};

export default defaultProps;
