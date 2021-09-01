import * as React from 'react';
import { render } from '@testing-library/react';
import { Grid } from '@/index';
import { GridProps as Props } from '@/index.type';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const totalRecords = 10;
const page = 20;
const pageSize = 15;
const loading = [true, false];
const error = [true, false];
const showHead = [true, false];
const showMenu = [true, false];
const draggable = [true, false];
const nestedRows = [true, false];
const withPagination = [true, false];
const withCheckbox = [true, false];
const headCellTooltip = [true, false];
const separator = [true, false];
const showFilters = [true, false];
const FunctionValue = jest.fn();

describe('Grid component', () => {
  const mapper: Record<string, any> = {
    totalRecords: valueHelper(totalRecords, { required: true }),
    page: valueHelper(page, { required: true }),
    pageSize: valueHelper(pageSize, { required: true }),
    loading: valueHelper(loading, { required: true, iterate: true }),
    error: valueHelper(error, { required: true, iterate: true }),
    showHead: valueHelper(showHead, { required: true, iterate: true }),
    showMenu: valueHelper(showMenu, { required: true, iterate: true }),
    draggable: valueHelper(draggable, { required: true, iterate: true }),
    nestedRows: valueHelper(nestedRows, { required: true, iterate: true }),
    withPagination: valueHelper(withPagination, { required: true, iterate: true }),
    withCheckbox: valueHelper(withCheckbox, { required: true, iterate: true }),
    headCellTooltip: valueHelper(headCellTooltip, { required: true, iterate: true }),
    separator: valueHelper(separator, { required: true, iterate: true }),
    showFilters: valueHelper(showFilters, { required: true, iterate: true }),
    updateData: valueHelper(FunctionValue, { required: true }),
    updateSchema: valueHelper(FunctionValue, { required: true }),
    onSelect: valueHelper(FunctionValue, { required: true }),
    onSelectAll: valueHelper(FunctionValue, { required: true }),
    updateSortingList: valueHelper(FunctionValue, { required: true }),
    updateFilterList: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Grid {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('renders children with and without pagination', () => {
  it('renders children with pagination', () => {
    const { getByTestId } = render(<Grid withPagination={true} />);
    expect(getByTestId('DesignSystem-Grid-body-with-NoPagination')).toBeInTheDocument();
  });

  it('renders children without pagination', () => {
    const { getByTestId } = render(<Grid withPagination={false} />);
    expect(getByTestId('DesignSystem-Grid-body-with-virtual-scroll')).toBeInTheDocument();
  });
});
