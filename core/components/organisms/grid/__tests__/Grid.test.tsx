import * as React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
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
const onSelectAll = jest.fn();
const updateSortingList = jest.fn();
const updateSchema = jest.fn();
const updateFilterList = jest.fn();
const nestedRowRenderer = jest.fn();

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

describe('renders Grid with showHead true and false', () => {
  it('renders Grid with showHead true', () => {
    const { queryByTestId } = render(<Grid showHead={true} />);
    expect(queryByTestId('DesignSystem-GridHead-wrapper')).toBeInTheDocument();
  });
  it('renders Grid with showHead false', () => {
    const { queryByTestId } = render(<Grid showHead={false} />);
    expect(queryByTestId('DesignSystem-GridHead-wrapper')).not.toBeInTheDocument();
  });
});

describe('Grid component prop: onSelectAll when withCheckbox is true', () => {
  it('calls onSelectAll when head checkbox is rendered', () => {
    const schema = [
      {
        name: 'name',
        displayName: 'Name',
        width: '50%',
      },
    ];
    const { getByTestId } = render(<Grid schema={schema} withCheckbox={true} onSelectAll={onSelectAll} />);
    const input = getByTestId('DesignSystem-Checkbox-InputBox');
    fireEvent.click(input);
    expect(onSelectAll).toHaveBeenCalledTimes(1);
  });
});

describe('render Grid component prop: updateSortingList with sortTypes', () => {
  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: '50%',
    },
  ];
  const data = [
    {
      name: 'Zara',
      gender: 'f',
    },
  ];
  it('calls updateSortingList with sorting order as asc when no sortingList is passed', () => {
    const { getAllByTestId } = render(
      <Grid
        schema={schema}
        data={data}
        withCheckbox={true}
        withPagination={true}
        updateSortingList={updateSortingList}
      />
    );
    const input = getAllByTestId('DesignSystem-Grid-cellContent')[0];
    fireEvent.click(input);
    expect(updateSortingList).toHaveBeenCalledTimes(1);
    expect(updateSortingList).toHaveBeenCalledWith([{ name: 'name', type: 'asc' }]);
  });

  it('calls updateSortingList without sorting order when  sortingList is passed with type desc', () => {
    const { getByTestId } = render(
      <Grid
        schema={schema}
        data={data}
        withCheckbox={true}
        withPagination={true}
        updateSortingList={updateSortingList}
        sortingList={[{ name: 'name', type: 'desc' }]}
      />
    );
    const input = getByTestId('DesignSystem-Grid-cellContent');
    fireEvent.click(input);
    expect(updateSortingList).toHaveBeenCalled();
    expect(updateSortingList.mock.calls[1]).toEqual([[]]);
  });

  it('calls updateSortingList with sorting order as desc when  sortingList is passed with type asc', () => {
    const { getByTestId } = render(
      <Grid
        schema={schema}
        data={data}
        withCheckbox={true}
        withPagination={true}
        updateSortingList={updateSortingList}
        sortingList={[{ name: 'name', type: 'asc' }]}
      />
    );
    const input = getByTestId('DesignSystem-Grid-cellContent');
    fireEvent.click(input);
    expect(updateSortingList).toHaveBeenCalled();
    expect(updateSortingList.mock.calls[2]).toEqual([[{ name: 'name', type: 'desc' }]]);
  });
});

describe('render Grid component prop: updateSchema ', () => {
  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: '50%',
    },
  ];
  const data = [
    {
      name: 'Zara',
      selected: true,
    },
  ];
  it('calls updateSchema with pinned left', () => {
    const { getAllByTestId } = render(<Grid schema={schema} showMenu={true} data={data} updateSchema={updateSchema} />);
    const popoverButton = getAllByTestId('DesignSystem-Button')[0];
    fireEvent.click(popoverButton);
    const dropdownOption = getAllByTestId('DesignSystem-DropdownOption--WITH_ICON')[2];
    fireEvent.click(dropdownOption);
    expect(updateSchema).toHaveBeenCalledTimes(1);
    expect(updateSchema).toHaveBeenCalledWith([{ displayName: 'Name', name: 'name', pinned: 'left', width: '50%' }]);
  });
  it('calls updateSchema with pinned right', () => {
    const { getAllByTestId } = render(<Grid schema={schema} showMenu={true} data={data} updateSchema={updateSchema} />);
    const popoverButton = getAllByTestId('DesignSystem-Button')[0];
    fireEvent.click(popoverButton);
    const dropdownOption = getAllByTestId('DesignSystem-DropdownOption--WITH_ICON')[3];
    fireEvent.click(dropdownOption);
    expect(updateSchema).toHaveBeenCalledTimes(2);
    expect(updateSchema).toHaveBeenCalledWith([{ displayName: 'Name', name: 'name', pinned: 'right', width: '50%' }]);
  });
  it('calls updateSchema with hidden true', () => {
    const { getAllByTestId } = render(<Grid schema={schema} showMenu={true} data={data} updateSchema={updateSchema} />);
    const popoverButton = getAllByTestId('DesignSystem-Button')[0];
    fireEvent.click(popoverButton);
    const dropdownOption = getAllByTestId('DesignSystem-DropdownOption--WITH_ICON')[4];
    fireEvent.click(dropdownOption);
    expect(updateSchema).toHaveBeenCalledTimes(3);
    expect(updateSchema).toHaveBeenCalledWith([{ displayName: 'Name', name: 'name', hidden: true, width: '50%' }]);
  });
});

describe('renders children with pagination and page', () => {
  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: '50%',
      filters: [{ label: 'Sort Descending', value: 'sortDesc', icon: 'arrow_upward' }],
    },
  ];
  const data = [{ name: 'Zara' }];
  it('renders children with pagination', () => {
    const { getAllByTestId, getByTestId } = render(
      <Grid withPagination={true} schema={schema} data={data} showFilters={true} updateFilterList={updateFilterList} />
    );
    const popoverButton = getAllByTestId('DesignSystem-Button')[0];
    fireEvent.click(popoverButton);
    const dropdownOption = getAllByTestId('DesignSystem-Checkbox-InputBox')[0];
    fireEvent.click(dropdownOption);
    const applyButton = getByTestId('DesignSystem-Dropdown-ApplyButton');
    fireEvent.click(applyButton);
    expect(updateFilterList).toHaveBeenCalledTimes(1);
  });
});

describe('renders children with nestedRows', () => {
  const schema = [
    {
      name: 'name',
      displayName: 'Name',
    },
  ];

  it('renders children with nestedRows & _expandNestedRow: true', () => {
    const data = [{ name: 'Zara', _expandNestedRow: true }];
    render(<Grid schema={schema} data={data} nestedRows={true} nestedRowRenderer={nestedRowRenderer} />);
    expect(nestedRowRenderer).toBeCalled();
    expect(nestedRowRenderer).toBeCalledWith({ data: data[0], schema, loading: false, rowIndex: 0, expanded: true });
  });

  it('renders children with nestedRows & _expandNestedRow: false', () => {
    const data = [{ name: 'Zara' }];

    render(<Grid schema={schema} data={data} nestedRows={true} nestedRowRenderer={nestedRowRenderer} />);
    expect(nestedRowRenderer).toBeCalled();
    expect(nestedRowRenderer).toBeCalledWith({ data: data[0], schema, loading: false, rowIndex: 0, expanded: false });
  });
});

describe('Check for selected row classes', () => {
  const schema = [
    {
      name: 'name',
      displayName: 'Name',
    },
  ];
  const data = [{ name: 'Zara', _selected: true }];
  const { getByTestId } = render(<Grid schema={schema} data={data} />);
  expect(getByTestId('DesignSystem-Grid-row')).toHaveClass('Grid-row--selected');
});

describe('Check for disabled row classes', () => {
  const schema = [
    {
      name: 'name',
      displayName: 'Name',
    },
  ];
  const data = [{ name: 'Zara', disabled: true }];
  cleanup();
  const { getByTestId } = render(<Grid schema={schema} data={data} />);
  expect(getByTestId('DesignSystem-Grid-row')).toHaveClass('Grid-row--disabled');
});

describe('Check for grid custom class', () => {
  const schema = [
    {
      name: 'name',
      displayName: 'Name',
    },
  ];
  const data = [{ name: 'Zara', disabled: true }];
  cleanup();
  const { getByTestId } = render(<Grid schema={schema} data={data} className="grid-custom-class" />);
  expect(getByTestId('DesignSystem-Grid')).toHaveClass('grid-custom-class');
  expect(getByTestId('DesignSystem-Grid')).toHaveClass('Grid');
});

describe('Check for grid data-test attribute', () => {
  const schema = [
    {
      name: 'name',
      displayName: 'Name',
    },
  ];
  const data = [{ name: 'Zara' }];

  cleanup();
  const { getByTestId } = render(<Grid schema={schema} data={data} data-test="Custom-grid-data-test" />);
  const gridElement = getByTestId('Custom-grid-data-test');
  expect(gridElement).toBeInTheDocument();
});

describe('showNestedRowTrigger flag behavior', () => {
  const schema = [
    {
      name: 'name',
      displayName: 'Name',
    },
  ];

  // Create a proper nested row renderer that returns content
  const mockNestedRowRenderer = jest.fn(() => <div>Nested Content</div>);

  describe('when showNestedRowTrigger is true (default)', () => {
    it('renders nested row trigger icon when nestedRows is true and data has nested content', () => {
      const data = [{ name: 'Zara' }];
      const { getByTestId } = render(
        <Grid
          schema={schema}
          data={data}
          nestedRows={true}
          nestedRowRenderer={mockNestedRowRenderer}
          showNestedRowTrigger={true}
        />
      );

      expect(getByTestId('DesignSystem-Grid-nestedRowTrigger')).toBeInTheDocument();
    });

    it('renders placeholder when nestedRows is true but no nested content', () => {
      const data = [{ name: 'Zara' }];
      const { container } = render(<Grid schema={schema} data={data} nestedRows={true} showNestedRowTrigger={true} />);

      expect(container.querySelector('.Grid-nestedRowPlaceholder')).toBeInTheDocument();
    });

    it('shows expanded state when _expandNestedRow is true', () => {
      const data = [{ name: 'Zara', _expandNestedRow: true }];
      render(
        <Grid
          schema={schema}
          data={data}
          nestedRows={true}
          nestedRowRenderer={mockNestedRowRenderer}
          showNestedRowTrigger={true}
        />
      );

      expect(mockNestedRowRenderer).toBeCalledWith({
        data: data[0],
        schema,
        loading: false,
        rowIndex: 0,
        expanded: true,
      });
    });

    it('shows collapsed state when _expandNestedRow is false', () => {
      const data = [{ name: 'Zara', _expandNestedRow: false }];
      render(
        <Grid
          schema={schema}
          data={data}
          nestedRows={true}
          nestedRowRenderer={mockNestedRowRenderer}
          showNestedRowTrigger={true}
        />
      );

      expect(mockNestedRowRenderer).toBeCalledWith({
        data: data[0],
        schema,
        loading: false,
        rowIndex: 0,
        expanded: false,
      });
    });

    it('shows collapsed state when _expandNestedRow is undefined', () => {
      const data = [{ name: 'Zara' }];
      render(
        <Grid
          schema={schema}
          data={data}
          nestedRows={true}
          nestedRowRenderer={mockNestedRowRenderer}
          showNestedRowTrigger={true}
        />
      );

      expect(mockNestedRowRenderer).toBeCalledWith({
        data: data[0],
        schema,
        loading: false,
        rowIndex: 0,
        expanded: false,
      });
    });

    it('does not render trigger when nestedRows is false', () => {
      const data = [{ name: 'Zara' }];
      const { queryByTestId } = render(
        <Grid schema={schema} data={data} nestedRows={false} showNestedRowTrigger={true} />
      );

      expect(queryByTestId('DesignSystem-Grid-nestedRowTrigger')).not.toBeInTheDocument();
    });
  });

  describe('when showNestedRowTrigger is false', () => {
    it('does not render nested row trigger icon', () => {
      const data = [{ name: 'Zara' }];
      const { queryByTestId } = render(
        <Grid
          schema={schema}
          data={data}
          nestedRows={true}
          nestedRowRenderer={mockNestedRowRenderer}
          showNestedRowTrigger={false}
        />
      );

      expect(queryByTestId('DesignSystem-Grid-nestedRowTrigger')).not.toBeInTheDocument();
    });

    it('always shows expanded state regardless of _expandNestedRow value', () => {
      const data = [{ name: 'Zara', _expandNestedRow: false }];
      render(
        <Grid
          schema={schema}
          data={data}
          nestedRows={true}
          nestedRowRenderer={mockNestedRowRenderer}
          showNestedRowTrigger={false}
        />
      );

      expect(mockNestedRowRenderer).toBeCalledWith({
        data: data[0],
        schema,
        loading: false,
        rowIndex: 0,
        expanded: true,
      });
    });

    it('always shows expanded state when _expandNestedRow is true', () => {
      const data = [{ name: 'Zara', _expandNestedRow: true }];
      render(
        <Grid
          schema={schema}
          data={data}
          nestedRows={true}
          nestedRowRenderer={mockNestedRowRenderer}
          showNestedRowTrigger={false}
        />
      );

      expect(mockNestedRowRenderer).toBeCalledWith({
        data: data[0],
        schema,
        loading: false,
        rowIndex: 0,
        expanded: true,
      });
    });

    it('always shows expanded state when _expandNestedRow is undefined', () => {
      const data = [{ name: 'Zara' }];
      render(
        <Grid
          schema={schema}
          data={data}
          nestedRows={true}
          nestedRowRenderer={mockNestedRowRenderer}
          showNestedRowTrigger={false}
        />
      );

      expect(mockNestedRowRenderer).toBeCalledWith({
        data: data[0],
        schema,
        loading: false,
        rowIndex: 0,
        expanded: true,
      });
    });
  });

  describe('default behavior (showNestedRowTrigger not specified)', () => {
    it('defaults to true and renders trigger', () => {
      const data = [{ name: 'Zara' }];
      const { getByTestId } = render(
        <Grid schema={schema} data={data} nestedRows={true} nestedRowRenderer={mockNestedRowRenderer} />
      );

      expect(getByTestId('DesignSystem-Grid-nestedRowTrigger')).toBeInTheDocument();
    });

    it('defaults to true and shows collapsed state when _expandNestedRow is false', () => {
      const data = [{ name: 'Zara', _expandNestedRow: false }];
      render(<Grid schema={schema} data={data} nestedRows={true} nestedRowRenderer={mockNestedRowRenderer} />);

      expect(mockNestedRowRenderer).toBeCalledWith({
        data: data[0],
        schema,
        loading: false,
        rowIndex: 0,
        expanded: false,
      });
    });
  });

  describe('edge cases', () => {
    it('handles multiple rows with different _expandNestedRow values when trigger is enabled', () => {
      const data = [
        { name: 'Zara', _expandNestedRow: true },
        { name: 'John', _expandNestedRow: false },
        { name: 'Jane' }, // undefined _expandNestedRow
      ];

      render(
        <Grid
          schema={schema}
          data={data}
          nestedRows={true}
          nestedRowRenderer={mockNestedRowRenderer}
          showNestedRowTrigger={true}
        />
      );

      expect(mockNestedRowRenderer).toBeCalledWith({
        data: data[0],
        schema,
        loading: false,
        rowIndex: 0,
        expanded: true,
      });
      expect(mockNestedRowRenderer).toBeCalledWith({
        data: data[1],
        schema,
        loading: false,
        rowIndex: 1,
        expanded: false,
      });
      expect(mockNestedRowRenderer).toBeCalledWith({
        data: data[2],
        schema,
        loading: false,
        rowIndex: 2,
        expanded: false,
      });
    });

    it('handles multiple rows with different _expandNestedRow values when trigger is disabled', () => {
      const data = [
        { name: 'Zara', _expandNestedRow: true },
        { name: 'John', _expandNestedRow: false },
        { name: 'Jane' }, // undefined _expandNestedRow
      ];

      render(
        <Grid
          schema={schema}
          data={data}
          nestedRows={true}
          nestedRowRenderer={mockNestedRowRenderer}
          showNestedRowTrigger={false}
        />
      );

      expect(mockNestedRowRenderer).toBeCalledWith({
        data: data[0],
        schema,
        loading: false,
        rowIndex: 0,
        expanded: true,
      });
      expect(mockNestedRowRenderer).toBeCalledWith({
        data: data[1],
        schema,
        loading: false,
        rowIndex: 1,
        expanded: true,
      });
      expect(mockNestedRowRenderer).toBeCalledWith({
        data: data[2],
        schema,
        loading: false,
        rowIndex: 2,
        expanded: true,
      });
    });

    it('prevents event propagation when trigger is clicked', () => {
      const data = [{ name: 'Zara' }];
      const onRowClick = jest.fn();
      const { getByTestId } = render(
        <Grid
          schema={schema}
          data={data}
          nestedRows={true}
          nestedRowRenderer={mockNestedRowRenderer}
          showNestedRowTrigger={true}
          type="resource"
          onRowClick={onRowClick}
        />
      );

      const trigger = getByTestId('DesignSystem-Grid-nestedRowTrigger');
      fireEvent.click(trigger);

      // onRowClick should not be called because stopPropagation is called
      expect(onRowClick).not.toHaveBeenCalled();
    });

    it('handles loading state correctly with trigger enabled', () => {
      const data = [{ name: 'Zara' }];
      const { queryByTestId } = render(
        <Grid schema={schema} data={data} nestedRows={true} loading={true} showNestedRowTrigger={true} />
      );

      // Should not render trigger during loading
      expect(queryByTestId('DesignSystem-Grid-nestedRowTrigger')).not.toBeInTheDocument();
    });

    it('handles loading state correctly with trigger disabled', () => {
      const data = [{ name: 'Zara' }];
      const { queryByTestId } = render(
        <Grid schema={schema} data={data} nestedRows={true} loading={true} showNestedRowTrigger={false} />
      );

      // Should not render trigger during loading
      expect(queryByTestId('DesignSystem-Grid-nestedRowTrigger')).not.toBeInTheDocument();
    });
  });
});
