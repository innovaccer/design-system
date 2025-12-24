import * as React from 'react';
import { render, fireEvent, waitFor, screen, cleanup } from '@testing-library/react';
import { Table, Button } from '@/index';
import { TableProps as Props } from '@/index.type';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { fetchDataFunction } from '../../grid';

export type RowData = Record<string, any> & {
  _selected?: boolean;
  disabled?: boolean;
};

export type Data = RowData[];

const BooleanValue = [true, false];

const FunctionValue = jest.fn();
const onSelect = jest.fn();
const tableData = [{ name: 'Zara' }, { name: 'Sara' }];
const tableSchema = [
  {
    name: 'name',
    displayName: 'Name',
    filters: [
      { label: 'A-G', value: 'a-g' },
      { label: 'H-R', value: 'h-r' },
      { label: 'S-Z', value: 's-z' },
    ],
  },
];

const fetchTableData = jest.fn(() =>
  Promise.resolve({
    schema: tableSchema,
    data: tableData,
    count: tableData.length,
    searchTerm: '',
  })
);

describe('Table component sync', () => {
  const mapper = {
    data: valueHelper(tableData, { required: true }),
    schema: valueHelper(tableSchema, { required: true }),
    loading: valueHelper(BooleanValue, { required: true, iterate: true }),
    error: valueHelper(BooleanValue, { required: true, iterate: true }),
    errorType: valueHelper('errorType', { required: true }),
    onSearch: valueHelper(FunctionValue, { required: true }),
    showHead: valueHelper(BooleanValue, { required: true, iterate: true }),
    type: valueHelper('resource', { required: true }),
    size: valueHelper('standard', { required: true }),
    draggable: valueHelper(BooleanValue, { required: true, iterate: true }),
    withHeader: valueHelper(BooleanValue, { required: true, iterate: true }),
    nestedRows: valueHelper(BooleanValue, { required: true, iterate: true }),
    withCheckbox: valueHelper(BooleanValue, { required: true, iterate: true }),
    showMenu: valueHelper(BooleanValue, { required: true, iterate: true }),
    headCellTooltip: valueHelper(BooleanValue, { required: true, iterate: true }),
    separator: valueHelper(BooleanValue, { required: true, iterate: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;
    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Table {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };
  testHelper(mapper, testFunc);
});

describe('Table component async', () => {
  const mapper = {
    fetchData: valueHelper(fetchTableData, { required: true }),
    type: valueHelper('data', { required: true }),
    size: valueHelper('compressed', { required: true }),
    draggable: valueHelper(BooleanValue, { required: true, iterate: true }),
    withHeader: valueHelper(BooleanValue, { required: true, iterate: true }),
    withPagination: valueHelper(BooleanValue, { required: true, iterate: true }),
    page: valueHelper(1, { required: true }),
    paginationType: valueHelper('basic', { required: true }),
    pageSize: valueHelper(10, { required: true }),
    loaderSchema: valueHelper(tableSchema, { required: true }),
    multipleSorting: valueHelper(BooleanValue, { required: true, iterate: true }),
    sortingList: valueHelper([], { required: true }),
    searchDebounceDuration: valueHelper(100, { required: true }),
    onRowClick: valueHelper(FunctionValue, { required: true }),
    onPageChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;
    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Table {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };
  testHelper(mapper, testFunc);
});

describe('render Table component', () => {
  it('render table', () => {
    const { getByTestId } = render(<Table />);
    expect(getByTestId('DesignSystem-Table-wrapper')).toBeInTheDocument();
  });

  it('render table with className prop', () => {
    const { getByTestId } = render(<Table className="table-wrapper" />);
    expect(getByTestId('DesignSystem-Table-wrapper')).toHaveClass('table-wrapper');
  });
});

describe('render Table component with header', () => {
  it('called headerOptions with withSearch as true ', () => {
    const headerOptions = { withSearch: true };
    const { getByTestId } = render(<Table withHeader={true} headerOptions={headerOptions} />);
    const input = getByTestId('DesignSystem-Table-Header--withSearch');
    fireEvent.change(input, { target: { value: 'ss' } });
    expect(input).toHaveDisplayValue('ss');
  });

  it('called headerOptions with filterPosition and filters ', () => {
    const headerOptions = { withSearch: true };
    const { getByTestId, getAllByTestId } = render(
      <Table withHeader={true} filterPosition="HEADER" schema={tableSchema} headerOptions={headerOptions} />
    );
    const dropdownButton = getByTestId('DesignSystem-DropdownTrigger');
    fireEvent.click(dropdownButton);
    const dropdownCheckbox = getAllByTestId('DesignSystem-Checkbox-InputBox')[1];
    expect(dropdownCheckbox).not.toBeChecked();
    fireEvent.click(dropdownCheckbox);
    const applyButton = getByTestId('DesignSystem-Dropdown-ApplyButton');
    fireEvent.click(applyButton);
    expect(dropdownCheckbox).toBeChecked();
  });

  it('render table with globalActionRenderer', () => {
    const onDataExport = jest.fn();
    const globalActionRenderer = (data: Data) => {
      return (
        <Button data-test="DesignSystem-Table-GlobalActionTrigger" onClick={() => onDataExport(data)}>
          Export
        </Button>
      );
    };
    const headerOptions = { withSearch: true, globalActionRenderer };
    const { getByTestId } = render(
      <Table
        withHeader={true}
        withCheckbox={true}
        data={tableData}
        schema={tableSchema}
        headerOptions={headerOptions}
      />
    );
    const globalActionTrigger = getByTestId('DesignSystem-Table-GlobalActionTrigger');
    expect(globalActionTrigger).toBeInTheDocument();
    fireEvent.click(globalActionTrigger);
    expect(onDataExport).toHaveBeenCalledWith(tableData);
  });

  it('render table with globalActionRenderer and withPagination true, trigger selectAll Button', () => {
    const onDataExport = jest.fn();
    const globalActionRenderer = (data: Data) => {
      return (
        <Button data-test="DesignSystem-Table-GlobalActionTrigger" onClick={() => onDataExport(data)}>
          Export
        </Button>
      );
    };
    const headerOptions = { withSearch: true, allowSelectAll: true, globalActionRenderer };
    const schema = [{ name: 'name', displayName: 'Name', width: '50%' }];
    const { getAllByTestId, getByTestId } = render(
      <Table
        withHeader={true}
        withCheckbox={true}
        withPagination={true}
        data={tableData}
        schema={schema}
        headerOptions={headerOptions}
      />
    );
    const globalActionTrigger = getByTestId('DesignSystem-Table-GlobalActionTrigger');
    expect(globalActionTrigger).toBeInTheDocument();
    fireEvent.click(globalActionTrigger);
    expect(onDataExport).toHaveBeenCalledWith(tableData);
    const checkbox = getAllByTestId('DesignSystem-Checkbox-InputBox')[0];
    fireEvent.click(checkbox);
    const selectAllButton = getByTestId('DesignSystem-Table-Header--selectAllItemsButton');
    expect(selectAllButton).toBeInTheDocument();
    fireEvent.click(selectAllButton);
    fireEvent.click(globalActionTrigger);
    expect(onDataExport).toHaveBeenCalledWith(tableData);
    const clearSelectionButton = getByTestId('DesignSystem-Table-Header--clearSelectionItemsButton');
    expect(clearSelectionButton).toBeInTheDocument();
    fireEvent.click(clearSelectionButton);
  });

  it('render table with withHeader and withCheckbox and showHead false,trigger onSelectAll', () => {
    const schema = [{ name: 'name', displayName: 'Name', width: '50%' }];
    const { getAllByTestId } = render(
      <Table withHeader={true} withCheckbox={true} showHead={false} data={tableData} schema={schema} />
    );
    const checkbox = getAllByTestId('DesignSystem-Checkbox-InputBox')[0];
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it('render table with withHeader and withCheckbox and withPagination true, trigger selectAll Button', () => {
    const headerOptions = { withSearch: true, allowSelectAll: true };
    const schema = [{ name: 'name', displayName: 'Name', width: '50%' }];
    const { getAllByTestId, getByTestId } = render(
      <Table
        withHeader={true}
        withCheckbox={true}
        withPagination={true}
        data={tableData}
        schema={schema}
        headerOptions={headerOptions}
      />
    );
    const checkbox = getAllByTestId('DesignSystem-Checkbox-InputBox')[0];
    fireEvent.click(checkbox);
    const selectAllButton = getByTestId('DesignSystem-Table-Header--selectAllItemsButton');
    expect(selectAllButton).toBeInTheDocument();
    fireEvent.click(selectAllButton);
    const clearSelectionButton = getByTestId('DesignSystem-Table-Header--clearSelectionItemsButton');
    expect(clearSelectionButton).toBeInTheDocument();
    fireEvent.click(clearSelectionButton);
  });
});

describe('render Table component with DraggableDropdown', () => {
  it('render table : draggableDropDown Apply button is triggered', () => {
    const schema = [{ name: 'name', displayName: 'Name', width: '50%' }];
    const { getAllByTestId } = render(<Table withHeader={true} data={tableData} schema={schema} />);
    const tableColumnData = getAllByTestId('DesignSystem-Text')[0];
    expect(tableColumnData).toHaveTextContent('Name');
    const draggableDropdown = getAllByTestId('DesignSystem-Button')[0];
    fireEvent.click(draggableDropdown);
    const draggableDropdownCheckbox = getAllByTestId('DesignSystem-Checkbox-InputBox')[0];
    fireEvent.click(draggableDropdownCheckbox);
    const draggableApplyButton = getAllByTestId('DesignSystem-Button')[3];
    fireEvent.click(draggableApplyButton);
    expect(tableColumnData).not.toBeInTheDocument();
  });

  it('render table : draggableDropDown checkbox is changed', () => {
    const schema = [{ name: 'name', displayName: 'Name', width: '50%' }];
    const { getAllByTestId } = render(<Table withHeader={true} data={tableData} schema={schema} />);
    const draggableDropdown = getAllByTestId('DesignSystem-Button')[0];
    fireEvent.click(draggableDropdown);
    const draggableDropdownCheckbox = getAllByTestId('DesignSystem-Checkbox-InputBox')[1];
    fireEvent.click(draggableDropdownCheckbox);
    expect(draggableDropdownCheckbox).not.toBeChecked();
  });
  it('render table : drag drop is performed', () => {
    const schema = [
      { name: 'name', displayName: 'Name', width: '50%' },
      { name: 'gender', displayName: 'Gender', width: '50%' },
    ];
    const { getAllByTestId } = render(<Table withHeader={true} data={tableData} schema={schema} />);
    const draggableDropdown = getAllByTestId('DesignSystem-Button')[0];
    fireEvent.click(draggableDropdown);
    const draggableSrc = getAllByTestId('DesignSystem-Table-Header--draggableDropdownOption')[0];
    const draggableDest = getAllByTestId('DesignSystem-Table-Header--draggableDropdownOption')[1];
    const dropDownOptionsBeforeDrag = getAllByTestId('DesignSystem-Text');
    expect(dropDownOptionsBeforeDrag[5]).toHaveTextContent('Name');
    fireEvent.dragStart(draggableSrc, { dataTransfer: { setData: jest.fn() } });
    fireEvent.dragOver(draggableSrc);
    fireEvent.drop(draggableDest, { dataTransfer: { getData: jest.fn().mockReturnValueOnce(0) } });
    const dropDownOptionsAfterDrag = getAllByTestId('DesignSystem-Text');
    expect(dropDownOptionsAfterDrag[5]).toHaveTextContent('Gender');
  });
});

describe('render Table without headerOptions', () => {
  it('render Table: updateSortingList ', () => {
    const schema = [{ name: 'name', displayName: 'Name', width: '50%' }];
    const { getAllByTestId } = render(<Table schema={schema} data={tableData} />);
    const input = getAllByTestId('DesignSystem-Grid-cellContent')[0];
    const cellContent = getAllByTestId('DesignSystem-Text')[1];
    expect(cellContent).toHaveTextContent('Zara');
    fireEvent.click(input);
    expect(cellContent).toHaveTextContent('Sara');
  });

  it('render Table: updateSchema ', () => {
    const schema = [
      { name: 'name', displayName: 'Name', width: '50%' },
      { name: 'gender', displayName: 'Gender', width: '50%' },
    ];
    const data = [
      { name: 'Zara', gender: 'f' },
      { name: 'Sara', gender: 'm' },
    ];
    const { getAllByTestId } = render(<Table schema={schema} data={data} />);
    const popoverButton = getAllByTestId('DesignSystem-Button')[0];
    fireEvent.click(popoverButton);
    const cellGroupBeforePin = getAllByTestId('DesignSystem-Grid-cellGroup')[1];
    expect(cellGroupBeforePin).toHaveClass('Grid-cellGroup Grid-cellGroup--main');
    const dropdownOption = getAllByTestId('DesignSystem-DropdownOption--WITH_ICON')[3];
    fireEvent.click(dropdownOption);
    const cellGroup = getAllByTestId('DesignSystem-Grid-cellGroup')[1];
    expect(cellGroup).toHaveClass('Grid-cellWrapper--pinned-right');
  });

  it('render Table: call onSelectAll ', () => {
    const schema = [
      { name: 'name', displayName: 'Name', width: '50%' },
      { name: 'gender', displayName: 'Gender', width: '50%' },
    ];
    const { getByTestId } = render(<Table schema={schema} withCheckbox={true} onSelect={onSelect} />);
    const checkbox = getByTestId('DesignSystem-Checkbox-InputBox');
    fireEvent.click(checkbox);
    expect(onSelect).toHaveBeenCalled();
  });
  it('render Table: prop onselect ', () => {
    const schema = [
      { name: 'name', displayName: 'Name', width: '50%' },
      { name: 'gender', displayName: 'Gender', width: '50%' },
    ];
    const data = [
      { name: 'Zara', gender: 'f', selected: true },
      { name: 'Sara', gender: 'm' },
    ];
    const { getAllByTestId } = render(<Table schema={schema} withCheckbox={true} onSelect={onSelect} data={data} />);
    const checkbox = getAllByTestId('DesignSystem-Checkbox-InputBox')[1];
    fireEvent.click(checkbox);
    expect(onSelect).toHaveBeenCalled();
  });
});

describe('render Table with pagination', () => {
  it('render Table: trigger page change ', () => {
    const schema = [{ name: 'name', displayName: 'Name', width: '50%' }];
    const { getByTestId } = render(<Table schema={schema} data={tableData} withPagination={true} pageSize={1} />);
    const nextButton = getByTestId('DesignSystem-Pagination--NextButton');
    const pageText = getByTestId('DesignSystem-Pagination--Input');
    expect(pageText).toHaveDisplayValue('1');
    fireEvent.click(nextButton);
    expect(pageText).toHaveDisplayValue('2');
  });
});

describe('render Table with async true', () => {
  it('render Table: fetchData with promise resolve ', () => {
    const fetchData = jest.fn(() =>
      Promise.resolve({
        schema: tableSchema,
        data: tableData,
        count: tableData.length,
        searchTerm: '',
      })
    );
    render(<Table withPagination={false} fetchData={fetchData} loading={false} />);
    expect(fetchData).toBeCalled();
  });
  it('render Table: fetchData with promise reject ', () => {
    const fetchData = jest.fn(() => Promise.reject());
    render(<Table withPagination={false} fetchData={fetchData} loading={false} />);
    expect(fetchData).toBeCalled();
  });
});

describe('render Table with drag', () => {
  it('render Table: drag column', () => {});
  const schema = [
    { name: 'name', displayName: 'Name', width: '50%' },
    { name: 'gender', displayName: 'Gender', width: '50%' },
  ];
  const data = [
    { name: 'Zara', gender: 'f' },
    { name: 'Sara', gender: 'm' },
  ];
  const { container } = render(<Table schema={schema} data={data} />);
  const column = container.getElementsByClassName('Grid-cell')[0];
  expect(column).toHaveClass('Grid-cell--head');
  fireEvent.mouseDown(column);
  fireEvent.dragStart(column, { dataTransfer: { setData: jest.fn() } });
  expect(column).toHaveClass('Grid-cell--dragged');
});

describe('render Table with disabled row', () => {
  const schema = [
    { name: 'name', displayName: 'Name', width: '50%' },
    { name: 'gender', displayName: 'Gender', width: '50%' },
  ];

  const data = [
    { name: 'Zara', gender: 'f', selected: true },
    { name: 'Sara', gender: 'f', disabled: true },
    { name: 'Sam', gender: 'm' },
  ];

  it('check css for disabled row ', () => {
    const { getAllByTestId } = render(<Table schema={schema} withCheckbox={true} onSelect={onSelect} data={data} />);
    const tableRow = getAllByTestId('DesignSystem-Grid-row')[1];
    expect(tableRow).toHaveClass('Grid-row--disabled');
  });

  it('check onSelect callback arguments when selectDisabledRow is false', () => {
    const onSelectFn = jest.fn();

    const { getAllByTestId } = render(<Table schema={schema} withCheckbox={true} onSelect={onSelectFn} data={data} />);

    const checkbox = getAllByTestId('DesignSystem-Checkbox-InputBox')[0];
    fireEvent.click(checkbox);
    expect(onSelectFn).toHaveBeenCalled();
    expect(onSelectFn.mock.calls.length).toBe(2);

    // To check the first arg of the second call to the mock function
    expect(onSelectFn.mock.calls[1][0]).toStrictEqual([0, 2]);

    // To check the second arg of the second call to the mock function
    expect(onSelectFn.mock.calls[1][1]).toBe(true);
  });

  it('check onSelect callback arguments when selectDisabledRow is true', () => {
    const onSelectMockFn = jest.fn();

    const { getAllByTestId } = render(
      <Table schema={schema} withCheckbox={true} selectDisabledRow={true} onSelect={onSelectMockFn} data={data} />
    );

    const checkbox = getAllByTestId('DesignSystem-Checkbox-InputBox')[0];
    fireEvent.click(checkbox);
    expect(onSelectMockFn).toHaveBeenCalled();
    expect(onSelectMockFn.mock.calls.length).toBe(2);

    // To check the first arg of the second call to the mock function
    expect(onSelectMockFn.mock.calls[1][0]).toStrictEqual([0, 1, 2]);

    // To check the second arg of the second call to the mock function
    expect(onSelectMockFn.mock.calls[1][1]).toBe(true);
  });
});

describe('render Table with selectAll Row option', () => {
  it('check custom label in header on row selection', () => {
    const headerOptions = { withSearch: true, allowSelectAll: true, customSelectionLabel: 'user' };
    const schema = [{ name: 'name', displayName: 'Name', width: '50%' }];
    const { getAllByTestId, getByTestId } = render(
      <Table
        withHeader={true}
        withCheckbox={true}
        withPagination={true}
        data={tableData}
        schema={schema}
        headerOptions={headerOptions}
      />
    );
    const checkbox = getAllByTestId('DesignSystem-Checkbox-InputBox')[0];
    fireEvent.click(checkbox);
    const selectAllButton = getByTestId('DesignSystem-Table-Header--selectAllItemsButton');
    const selectionLabel = getByTestId('DesignSystem-Label--Text');

    expect(selectAllButton).toBeInTheDocument();
    expect(selectionLabel).toHaveTextContent('Selected 2 users');
    expect(selectAllButton).toHaveTextContent('Select 2 users');

    fireEvent.click(selectAllButton);
    expect(selectionLabel).toHaveTextContent('Selected 2 users');

    const clearSelectionButton = getByTestId('DesignSystem-Table-Header--clearSelectionItemsButton');
    expect(clearSelectionButton).toBeInTheDocument();
  });

  it('check default label of button on row selection', () => {
    const headerOptions = { withSearch: true, allowSelectAll: true };
    const schema = [{ name: 'name', displayName: 'Name', width: '50%' }];
    const { getAllByTestId, getByTestId } = render(
      <Table
        withHeader={true}
        withCheckbox={true}
        withPagination={true}
        data={tableData}
        schema={schema}
        headerOptions={headerOptions}
      />
    );
    const checkbox = getAllByTestId('DesignSystem-Checkbox-InputBox')[0];
    fireEvent.click(checkbox);
    const selectAllButton = getByTestId('DesignSystem-Table-Header--selectAllItemsButton');
    const selectionLabel = getByTestId('DesignSystem-Label--Text');

    expect(selectAllButton).toBeInTheDocument();
    expect(selectionLabel).toHaveTextContent('Selected 2 items');
    expect(selectAllButton).toHaveTextContent('Select 2 items');

    fireEvent.click(selectAllButton);
    expect(selectionLabel).toHaveTextContent('Selected 2 items');

    const clearSelectionButton = getByTestId('DesignSystem-Table-Header--clearSelectionItemsButton');
    expect(clearSelectionButton).toBeInTheDocument();
  });
});

describe('render table with selection persistence', () => {
  it('check for table selection persistence across pages when uniqueColumnName is provided', () => {
    const schema = [
      { name: 'name', displayName: 'Name', width: '50%' },
      { name: 'gender', displayName: 'Gender', width: '50%' },
    ];
    const data = [
      { name: 'Zara', gender: 'f' },
      { name: 'Sara', gender: 'm' },
    ];
    const { getAllByTestId, getByTestId } = render(
      <Table schema={schema} pageSize={1} withCheckbox={true} onSelect={onSelect} data={data} uniqueColumnName="name" />
    );
    const checkbox = getAllByTestId('DesignSystem-Checkbox-InputBox');
    fireEvent.click(checkbox[0]);
    expect(onSelect).toHaveBeenCalled();

    const tableRow = getAllByTestId('DesignSystem-Grid-row');
    expect(tableRow[0]).toHaveClass('Grid-row--selected');

    // Move to Next Page
    const nextButton = getByTestId('DesignSystem-Pagination--NextButton');
    const pageText = getByTestId('DesignSystem-Pagination--Input');
    expect(pageText).toHaveDisplayValue('1');
    fireEvent.click(nextButton);
    expect(pageText).toHaveDisplayValue('2');

    // Move back to previous page
    const prevButton = getByTestId('DesignSystem-Pagination--PrevButton');
    fireEvent.click(prevButton);
    expect(pageText).toHaveDisplayValue('1');
    expect(tableRow[0]).toHaveClass('Grid-row--selected');
  });
});

describe('render table with clear selection button', () => {
  it('check for clear selection button on selection', () => {
    const schema = [
      { name: 'name', displayName: 'Name', width: '50%' },
      { name: 'gender', displayName: 'Gender', width: '50%' },
    ];
    const data = [
      { name: 'Zara', gender: 'f' },
      { name: 'Sara', gender: 'm' },
    ];

    const headerOptions = { withSearch: true, allowSelectAll: true };

    const { getAllByTestId, getByTestId } = render(
      <Table
        schema={schema}
        pageSize={1}
        withHeader={true}
        withCheckbox={true}
        headerOptions={headerOptions}
        onSelect={onSelect}
        data={data}
        uniqueColumnName="name"
      />
    );
    const checkbox = getAllByTestId('DesignSystem-Checkbox-InputBox');
    fireEvent.click(checkbox[0]);
    expect(onSelect).toHaveBeenCalled();

    const tableRow = getAllByTestId('DesignSystem-Grid-row');
    expect(tableRow[0]).toHaveClass('Grid-row--selected');

    const selectionLabel = getByTestId('DesignSystem-Label--Text');
    expect(selectionLabel).toHaveTextContent('Selected 1 item');

    const clearSelectionButton = getByTestId('DesignSystem-Table-Header--clearSelectionItemsButton');
    expect(clearSelectionButton).toBeInTheDocument();
    fireEvent.click(clearSelectionButton);

    expect(checkbox[0]).not.toBeChecked();

    expect(tableRow[0]).not.toHaveClass('Grid-row--selected');
  });
});

describe('render table with persistent selection across search', () => {
  it('check for selection persistence on searching', () => {
    const headerOptions = { withSearch: true, allowSelectAll: true };

    const schema = [
      { name: 'name', displayName: 'Name', width: '50%' },
      { name: 'gender', displayName: 'Gender', width: '50%' },
    ];
    const data = [
      { name: 'Zara', gender: 'f' },
      { name: 'Sara', gender: 'm' },
      { name: 'Frazer', gender: 'm' },
      { name: 'Lemmie', gender: 'm' },
    ];

    const { getAllByTestId, getByTestId } = render(
      <Table
        data={data}
        pageSize={2}
        schema={schema}
        withCheckbox={true}
        withHeader={true}
        onSelect={onSelect}
        uniqueColumnName="name"
        headerOptions={headerOptions}
      />
    );

    const input = getByTestId('DesignSystem-Table-Header--withSearch');
    fireEvent.change(input, { target: { value: 'sara' } });
    expect(input).toHaveDisplayValue('sara');
    fireEvent.keyDown(input, { key: 'Enter' });

    const tableRows = getAllByTestId('DesignSystem-Grid-row');

    const checkbox = getAllByTestId('DesignSystem-Checkbox-InputBox');
    fireEvent.click(checkbox[0]);
    expect(tableRows[0]).toHaveClass('Grid-row--selected');
  });
});

describe('render table with selection action renderer', () => {
  it('check for selection action trigger', async () => {
    cleanup();

    const data = [{ name: 'Zara' }, { name: 'Sara', _selected: true }, { name: 'Frazer' }, { name: 'Lemmie' }];

    const selectionActionRenderer = () => {
      return <Button data-test="DesignSystem-Table-SelectionActionTrigger">Export</Button>;
    };

    const headerOptions = { withSearch: true, selectionActionRenderer, allowSelectAll: true };
    const { getAllByTestId } = render(
      <Table
        withHeader={true}
        withCheckbox={true}
        data={data}
        uniqueColumnName="name"
        schema={tableSchema}
        headerOptions={headerOptions}
      />
    );

    const tableRows = getAllByTestId('DesignSystem-Grid-row');

    const checkbox = getAllByTestId('DesignSystem-Checkbox-InputBox');
    fireEvent.click(checkbox[0]);

    await waitFor(() => {
      expect(tableRows[0]).toHaveClass('Grid-row--selected');
    });

    const selectionActionTrigger = screen.getByTestId('DesignSystem-Table-Header--ActionRenderer');
    expect(selectionActionTrigger).toBeInTheDocument();
  });
});

describe('render table with checkboxAlignment', () => {
  it('check for checkboxAlignment top', () => {
    const schema = [
      { name: 'name', displayName: 'Name', width: '50%' },
      { name: 'gender', displayName: 'Gender', width: '50%' },
    ];

    const data = [
      { name: 'Zara', gender: 'f', selected: true },
      { name: 'Sara', gender: 'm' },
    ];

    const { getAllByTestId } = render(
      <Table schema={schema} withCheckbox={true} onSelect={onSelect} data={data} checkboxAlignment="top" />
    );
    const checkbox = getAllByTestId('DesignSystem-Grid-cellCheckbox')[1];
    expect(checkbox).toHaveClass('align-items-start');
  });

  it('check for checkboxAlignment bottom', () => {
    const schema = [
      { name: 'name', displayName: 'Name', width: '50%' },
      { name: 'gender', displayName: 'Gender', width: '50%' },
    ];

    const data = [
      { name: 'Zara', gender: 'f', selected: true },
      { name: 'Sara', gender: 'm' },
    ];

    const { getAllByTestId } = render(
      <Table schema={schema} withCheckbox={true} onSelect={onSelect} data={data} checkboxAlignment="bottom" />
    );
    const checkbox = getAllByTestId('DesignSystem-Grid-cellCheckbox')[1];
    expect(checkbox).toHaveClass('align-items-end');
  });
});

describe('render table with verticalAlign', () => {
  it('check for grid cell alignment verticalAlign:top', () => {
    const schema = [
      { name: 'name', displayName: 'Name', width: '50%', verticalAlign: 'top' as const },
      { name: 'gender', displayName: 'Gender', width: '50%', verticalAlign: 'top' as const },
    ];

    const data = [
      { name: 'Zara', gender: 'f', selected: true },
      { name: 'Sara', gender: 'm' },
    ];

    const { getAllByTestId } = render(
      <Table schema={schema} withCheckbox={true} onSelect={onSelect} data={data} checkboxAlignment="bottom" />
    );
    const checkbox = getAllByTestId('DesignSystem-Grid-bodyCell')[1];
    expect(checkbox).toHaveClass('align-items-start');
  });

  it('check for grid cell alignment verticalAlign:bottom', () => {
    const schema = [
      { name: 'name', displayName: 'Name', width: '50%', verticalAlign: 'bottom' as const },
      { name: 'gender', displayName: 'Gender', width: '50%', verticalAlign: 'bottom' as const },
    ];

    const data = [
      { name: 'Zara', gender: 'f', selected: true },
      { name: 'Sara', gender: 'm' },
    ];

    const { getAllByTestId } = render(
      <Table schema={schema} withCheckbox={true} onSelect={onSelect} data={data} checkboxAlignment="bottom" />
    );
    const checkbox = getAllByTestId('DesignSystem-Grid-bodyCell')[1];
    expect(checkbox).toHaveClass('align-items-end');
  });

  it('check for prop:enableRowVirtualization', () => {
    const schema = [
      { name: 'name', displayName: 'Name' },
      { name: 'gender', displayName: 'Gender' },
    ];

    const data = [
      { name: 'Zara', gender: 'f', selected: true },
      { name: 'Sara', gender: 'f' },
      { name: 'Tony', gender: 'm' },
      { name: 'Lemmie', gender: 'f' },
      { name: 'Randy', gender: 'm' },
      { name: 'Sayres', gender: 'm' },
    ];

    const { getAllByTestId } = render(<Table schema={schema} data={data} enableRowVirtualization={true} />);
    const items = getAllByTestId('DesignSystem-Grid-rowWrapper')[1];
    expect(items).toHaveClass('VS-item');
  });
});

describe('render table with highlightCell feature', () => {
  const schema = [
    { name: 'name', displayName: 'Name', width: '50%', highlightCell: true },
    { name: 'status', displayName: 'Status', width: '50%', highlightCell: true },
  ];

  const data = [
    { name: 'Zara', status: 'Active' },
    { name: 'Sara', status: 'Inactive' },
  ];

  it('should highlight matched text in cells when search term is entered', () => {
    const { getByTestId, getAllByTestId } = render(
      <Table withHeader={true} headerOptions={{ withSearch: true }} data={data} schema={schema} />
    );

    const searchInput = getByTestId('DesignSystem-Table-Header--withSearch');
    fireEvent.change(searchInput, { target: { value: 'za' } });
    fireEvent.keyDown(searchInput, { key: 'Enter' });

    const highlightedMarks = getAllByTestId('DesignSystem-GridCell-mark');
    expect(highlightedMarks[0]).toHaveTextContent('Za');
  });

  it('should highlight matched text in multiple cells when search term matches multiple values', () => {
    const { getByTestId, getAllByTestId } = render(
      <Table withHeader={true} headerOptions={{ withSearch: true }} data={data} schema={schema} />
    );

    const searchInput = getByTestId('DesignSystem-Table-Header--withSearch');
    fireEvent.change(searchInput, { target: { value: 'a' } });
    fireEvent.keyDown(searchInput, { key: 'Enter' });

    const highlightedMarks = getAllByTestId('DesignSystem-GridCell-mark');
    expect(highlightedMarks.length).toBeGreaterThan(1);
  });

  it('should not highlight text when search term does not match', () => {
    const { getByTestId, queryByTestId } = render(
      <Table withHeader={true} headerOptions={{ withSearch: true }} data={data} schema={schema} />
    );

    const searchInput = getByTestId('DesignSystem-Table-Header--withSearch');
    fireEvent.change(searchInput, { target: { value: 'xyz' } });
    fireEvent.keyDown(searchInput, { key: 'Enter' });

    const highlightedMarks = queryByTestId('DesignSystem-GridCell-mark');
    expect(highlightedMarks).not.toBeInTheDocument();
  });

  it('should highlight text case-insensitively', () => {
    const { getByTestId, getAllByTestId } = render(
      <Table withHeader={true} headerOptions={{ withSearch: true }} data={data} schema={schema} />
    );

    const searchInput = getByTestId('DesignSystem-Table-Header--withSearch');
    fireEvent.change(searchInput, { target: { value: 'ZARA' } });
    fireEvent.keyDown(searchInput, { key: 'Enter' });

    const highlightedMarks = getAllByTestId('DesignSystem-GridCell-mark');
    expect(highlightedMarks[0]).toHaveTextContent('Zara');
  });

  it('should highlight text in cells with different cell types', () => {
    const complexSchema = [
      { name: 'name', displayName: 'Name', width: '50%', highlightCell: true, cellType: 'WITH_META_LIST' as const },
      { name: 'status', displayName: 'Status', width: '50%', highlightCell: true, cellType: 'STATUS_HINT' as const },
    ];

    const complexData = [
      { name: 'Zara', status: 'Active', metaList: ['Info 1'] },
      { name: 'Sara', status: 'Inactive', metaList: ['Info 2'] },
    ];

    const { getByTestId, getAllByTestId } = render(
      <Table withHeader={true} headerOptions={{ withSearch: true }} data={complexData} schema={complexSchema} />
    );

    const searchInput = getByTestId('DesignSystem-Table-Header--withSearch');
    fireEvent.change(searchInput, { target: { value: 'za' } });
    fireEvent.keyDown(searchInput, { key: 'Enter' });

    const highlightedMarks = getAllByTestId('DesignSystem-GridCell-mark');
    expect(highlightedMarks.length).toBeGreaterThan(0);
  });

  it('should use custom highlight regex when provided', () => {
    const customRegex = (searchTerm: string) => new RegExp(`^(${searchTerm})`, 'gi');

    const { getByTestId, getAllByTestId } = render(
      <Table
        withHeader={true}
        headerOptions={{ withSearch: true }}
        data={data}
        schema={schema}
        highlightRegex={customRegex}
      />
    );

    const searchInput = getByTestId('DesignSystem-Table-Header--withSearch');
    fireEvent.change(searchInput, { target: { value: 'za' } });
    fireEvent.keyDown(searchInput, { key: 'Enter' });

    const highlightedMarks = getAllByTestId('DesignSystem-GridCell-mark');
    expect(highlightedMarks[0]).toHaveTextContent('Za');
  });

  it('should not highlight text in cells where highlightCell is false', () => {
    const mixedSchema = [
      { name: 'name', displayName: 'Name', width: '50%', highlightCell: true },
      { name: 'status', displayName: 'Status', width: '50%', highlightCell: false },
    ];

    const { getByTestId, queryByTestId } = render(
      <Table withHeader={true} headerOptions={{ withSearch: true }} data={data} schema={mixedSchema} />
    );

    const searchInput = getByTestId('DesignSystem-Table-Header--withSearch');
    fireEvent.change(searchInput, { target: { value: 'active' } });
    fireEvent.keyDown(searchInput, { key: 'Enter' });

    const highlightedMarks = queryByTestId('DesignSystem-GridCell-mark');
    expect(highlightedMarks).not.toBeInTheDocument();
  });

  it('should clear highlights when search term is cleared', () => {
    const { getByTestId, queryByTestId } = render(
      <Table withHeader={true} headerOptions={{ withSearch: true }} data={data} schema={schema} />
    );

    const searchInput = getByTestId('DesignSystem-Table-Header--withSearch');

    // First search
    fireEvent.change(searchInput, { target: { value: 'za' } });
    fireEvent.keyDown(searchInput, { key: 'Enter' });

    // Clear search
    fireEvent.change(searchInput, { target: { value: '' } });
    fireEvent.keyDown(searchInput, { key: 'Enter' });

    const highlightedMarks = queryByTestId('DesignSystem-GridCell-mark');
    expect(highlightedMarks).not.toBeInTheDocument();
  });
});

describe('render Table with filterType feature', () => {
  const testData = [
    { name: 'Asthma Outreach', status: 'In Progress', category: 'Health' },
    { name: 'HbA1c Test due', status: 'Scheduled', category: 'Health' },
    { name: 'ER Education', status: 'Draft', category: 'Education' },
    { name: 'Flu Vaccination', status: 'Failed', category: 'Health' },
    { name: 'Well-child Visit', status: 'In Progress', category: 'Health' },
  ];

  describe('singleSelect filterType', () => {
    const singleSelectSchema = [
      {
        name: 'name',
        displayName: 'Name',
        width: '40%',
        filterType: 'singleSelect' as const,
        filters: [
          { label: 'Asthma Outreach', value: 'Asthma Outreach' },
          { label: 'HbA1c Test due', value: 'HbA1c Test due' },
          { label: 'ER Education', value: 'ER Education' },
        ],
        onFilterChange: (a: any, filters: any) => {
          for (const filter of filters) {
            if (a.name === filter) return true;
          }
          return false;
        },
      },
      {
        name: 'status',
        displayName: 'Status',
        width: '30%',
        filterType: 'singleSelect' as const,
        filters: [
          { label: 'In Progress', value: 'In Progress' },
          { label: 'Scheduled', value: 'Scheduled' },
          { label: 'Draft', value: 'Draft' },
          { label: 'Failed', value: 'Failed' },
        ],
        onFilterChange: (a: any, filters: any) => {
          for (const filter of filters) {
            if (a.status === filter) return true;
          }
          return false;
        },
      },
      { name: 'category', displayName: 'Category', width: '30%' },
    ];

    it('should render dropdown without apply button for singleSelect', () => {
      const { getAllByTestId, queryByTestId } = render(
        <Table
          withHeader={true}
          filterPosition="HEADER"
          data={testData}
          schema={singleSelectSchema}
          headerOptions={{ withSearch: true }}
        />
      );

      const dropdownTriggers = getAllByTestId('DesignSystem-DropdownTrigger');
      fireEvent.click(dropdownTriggers[0]);

      // Apply button should not be present in singleSelect
      const applyButton = queryByTestId('DesignSystem-Dropdown-ApplyButton');
      expect(applyButton).not.toBeInTheDocument();
    });

    it('should render dropdown without checkboxes for singleSelect', () => {
      const { getAllByTestId, queryByTestId } = render(
        <Table
          withHeader={true}
          filterPosition="HEADER"
          data={testData}
          schema={singleSelectSchema}
          headerOptions={{ withSearch: true }}
        />
      );

      const dropdownTriggers = getAllByTestId('DesignSystem-DropdownTrigger');
      fireEvent.click(dropdownTriggers[0]);

      // Checkboxes should not be present in singleSelect
      const checkbox = queryByTestId('DesignSystem-Checkbox-InputBox');
      expect(checkbox).not.toBeInTheDocument();
    });

    it('should apply filter immediately on option click for singleSelect', () => {
      const { getAllByTestId } = render(
        <Table
          withHeader={true}
          filterPosition="HEADER"
          data={testData}
          schema={singleSelectSchema}
          headerOptions={{ withSearch: true }}
        />
      );

      // Check initial data count
      let tableRows = getAllByTestId('DesignSystem-Grid-row');
      expect(tableRows).toHaveLength(5);

      const dropdownTriggers = getAllByTestId('DesignSystem-DropdownTrigger');
      fireEvent.click(dropdownTriggers[0]);

      // Click on first filter option
      const dropdownOptions = getAllByTestId('DesignSystem-DropdownOption--DEFAULT');
      fireEvent.click(dropdownOptions[0]);

      // Check that data is filtered immediately (should show only 'Asthma Outreach')
      tableRows = getAllByTestId('DesignSystem-Grid-row');
      expect(tableRows).toHaveLength(1);
    });

    it('should allow switching between different singleSelect options', () => {
      const { getAllByTestId } = render(
        <Table
          withHeader={true}
          filterPosition="HEADER"
          data={testData}
          schema={singleSelectSchema}
          headerOptions={{ withSearch: true }}
        />
      );

      const dropdownTriggers = getAllByTestId('DesignSystem-DropdownTrigger');

      // Select first option
      fireEvent.click(dropdownTriggers[0]);
      const dropdownOptions = getAllByTestId('DesignSystem-DropdownOption--DEFAULT');
      fireEvent.click(dropdownOptions[0]);

      let tableRows = getAllByTestId('DesignSystem-Grid-row');
      expect(tableRows).toHaveLength(1);

      // Select second option
      fireEvent.click(dropdownTriggers[0]);
      const newDropdownOptions = getAllByTestId('DesignSystem-DropdownOption--DEFAULT');
      fireEvent.click(newDropdownOptions[1]);

      tableRows = getAllByTestId('DesignSystem-Grid-row');
      expect(tableRows).toHaveLength(1);
    });

    it('should handle empty selection in singleSelect', () => {
      const { getAllByTestId } = render(
        <Table
          withHeader={true}
          filterPosition="HEADER"
          data={testData}
          schema={singleSelectSchema}
          headerOptions={{ withSearch: true }}
        />
      );

      // Initially all rows should be visible
      let tableRows = getAllByTestId('DesignSystem-Grid-row');
      expect(tableRows).toHaveLength(5);

      const dropdownTriggers = getAllByTestId('DesignSystem-DropdownTrigger');
      fireEvent.click(dropdownTriggers[0]);

      // Select an option to filter
      const dropdownOptions = getAllByTestId('DesignSystem-DropdownOption--DEFAULT');
      fireEvent.click(dropdownOptions[0]);

      tableRows = getAllByTestId('DesignSystem-Grid-row');
      expect(tableRows).toHaveLength(1);

      // Click again to deselect (if supported)
      fireEvent.click(dropdownTriggers[0]);
      const newOptions = getAllByTestId('DesignSystem-DropdownOption--DEFAULT');
      fireEvent.click(newOptions[0]);
    });
  });

  describe('multiSelect filterType', () => {
    const multiSelectSchema = [
      {
        name: 'name',
        displayName: 'Name',
        width: '40%',
        filterType: 'multiSelect' as const,
        filters: [
          { label: 'Asthma Outreach', value: 'Asthma Outreach' },
          { label: 'HbA1c Test due', value: 'HbA1c Test due' },
          { label: 'ER Education', value: 'ER Education' },
        ],
        onFilterChange: (a: any, filters: any) => {
          if (filters.length === 0) return true;
          for (const filter of filters) {
            if (a.name === filter) return true;
          }
          return false;
        },
      },
      {
        name: 'status',
        displayName: 'Status',
        width: '30%',
        filterType: 'multiSelect' as const,
        filters: [
          { label: 'In Progress', value: 'In Progress' },
          { label: 'Scheduled', value: 'Scheduled' },
          { label: 'Draft', value: 'Draft' },
          { label: 'Failed', value: 'Failed' },
        ],
        onFilterChange: (a: any, filters: any) => {
          if (filters.length === 0) return true;
          for (const filter of filters) {
            if (a.status === filter) return true;
          }
          return false;
        },
      },
      { name: 'category', displayName: 'Category', width: '30%' },
    ];

    it('should render dropdown with apply button for multiSelect', () => {
      const { getAllByTestId, getByTestId } = render(
        <Table
          withHeader={true}
          filterPosition="HEADER"
          data={testData}
          schema={multiSelectSchema}
          headerOptions={{ withSearch: true }}
        />
      );

      const dropdownTriggers = getAllByTestId('DesignSystem-DropdownTrigger');
      fireEvent.click(dropdownTriggers[0]);

      // Apply button should be present in multiSelect
      const applyButton = getByTestId('DesignSystem-Dropdown-ApplyButton');
      expect(applyButton).toBeInTheDocument();
    });

    it('should render dropdown with checkboxes for multiSelect', () => {
      const { getAllByTestId } = render(
        <Table
          withHeader={true}
          filterPosition="HEADER"
          data={testData}
          schema={multiSelectSchema}
          headerOptions={{ withSearch: true }}
        />
      );

      const dropdownTriggers = getAllByTestId('DesignSystem-DropdownTrigger');
      fireEvent.click(dropdownTriggers[0]);

      // Checkboxes should be present in multiSelect
      const checkboxes = getAllByTestId('DesignSystem-Checkbox-InputBox');
      expect(checkboxes.length).toBeGreaterThan(0);
    });

    it('should not apply filter immediately on checkbox click for multiSelect', () => {
      const { getAllByTestId } = render(
        <Table
          withHeader={true}
          filterPosition="HEADER"
          data={testData}
          schema={multiSelectSchema}
          headerOptions={{ withSearch: true }}
        />
      );

      // Check initial data count
      let tableRows = getAllByTestId('DesignSystem-Grid-row');
      expect(tableRows).toHaveLength(5);

      const dropdownTriggers = getAllByTestId('DesignSystem-DropdownTrigger');
      fireEvent.click(dropdownTriggers[0]);

      // Click on first checkbox
      const checkboxes = getAllByTestId('DesignSystem-Checkbox-InputBox');
      fireEvent.click(checkboxes[1]); // Skip the "select all" checkbox if present

      // Data should not be filtered yet (still 5 rows)
      tableRows = getAllByTestId('DesignSystem-Grid-row');
      expect(tableRows).toHaveLength(5);
    });

    it('should apply filter only after clicking apply button for multiSelect', () => {
      const { getAllByTestId, getByTestId } = render(
        <Table
          withHeader={true}
          filterPosition="HEADER"
          data={testData}
          schema={multiSelectSchema}
          headerOptions={{ withSearch: true }}
        />
      );

      const dropdownTriggers = getAllByTestId('DesignSystem-DropdownTrigger');
      fireEvent.click(dropdownTriggers[0]);

      // Select first option
      const checkboxes = getAllByTestId('DesignSystem-Checkbox-InputBox');
      fireEvent.click(checkboxes[1]); // Skip the "select all" checkbox if present

      // Click apply button
      const applyButton = getByTestId('DesignSystem-Dropdown-ApplyButton');
      fireEvent.click(applyButton);

      // Now data should be filtered
      const tableRows = getAllByTestId('DesignSystem-Grid-row');
      expect(tableRows).toHaveLength(1);
    });

    it('should allow selecting multiple options for multiSelect', () => {
      const { getAllByTestId, getByTestId } = render(
        <Table
          withHeader={true}
          filterPosition="HEADER"
          data={testData}
          schema={multiSelectSchema}
          headerOptions={{ withSearch: true }}
        />
      );

      const dropdownTriggers = getAllByTestId('DesignSystem-DropdownTrigger');
      fireEvent.click(dropdownTriggers[0]);

      // Select multiple options
      const checkboxes = getAllByTestId('DesignSystem-Checkbox-InputBox');
      fireEvent.click(checkboxes[1]);
      fireEvent.click(checkboxes[2]);

      // Click apply button
      const applyButton = getByTestId('DesignSystem-Dropdown-ApplyButton');
      fireEvent.click(applyButton);

      // Should show filtered results (2 items selected should show 2 rows)
      const tableRows = getAllByTestId('DesignSystem-Grid-row');
      expect(tableRows).toHaveLength(2);
    });

    it('should handle empty multiSelect filter correctly', () => {
      const { getAllByTestId, getByTestId } = render(
        <Table
          withHeader={true}
          filterPosition="HEADER"
          data={testData}
          schema={multiSelectSchema}
          headerOptions={{ withSearch: true }}
        />
      );

      // Initially all rows should be visible
      let tableRows = getAllByTestId('DesignSystem-Grid-row');
      expect(tableRows).toHaveLength(5);

      const dropdownTriggers = getAllByTestId('DesignSystem-DropdownTrigger');
      fireEvent.click(dropdownTriggers[0]);

      // Don't select any options, just click apply
      const applyButton = getByTestId('DesignSystem-Dropdown-ApplyButton');
      fireEvent.click(applyButton);

      // All rows should still be visible when no filter is applied
      tableRows = getAllByTestId('DesignSystem-Grid-row');
      expect(tableRows).toHaveLength(5);
    });
  });

  describe('default filterType behavior', () => {
    const defaultFilterSchema = [
      {
        name: 'name',
        displayName: 'Name',
        width: '40%',
        // No filterType specified - should default to multiSelect
        filters: [
          { label: 'Asthma Outreach', value: 'Asthma Outreach' },
          { label: 'HbA1c Test due', value: 'HbA1c Test due' },
          { label: 'ER Education', value: 'ER Education' },
        ],
        onFilterChange: (a: any, filters: any) => {
          if (filters.length === 0) return true;
          for (const filter of filters) {
            if (a.name === filter) return true;
          }
          return false;
        },
      },
      { name: 'status', displayName: 'Status', width: '30%' },
      { name: 'category', displayName: 'Category', width: '30%' },
    ];

    it('should default to multiSelect behavior when filterType is not specified', () => {
      const { getAllByTestId, getByTestId } = render(
        <Table
          withHeader={true}
          filterPosition="HEADER"
          data={testData}
          schema={defaultFilterSchema}
          headerOptions={{ withSearch: true }}
        />
      );

      const dropdownTriggers = getAllByTestId('DesignSystem-DropdownTrigger');
      fireEvent.click(dropdownTriggers[0]);

      // Should have apply button (multiSelect behavior)
      const applyButton = getByTestId('DesignSystem-Dropdown-ApplyButton');
      expect(applyButton).toBeInTheDocument();
    });
  });

  describe('mixed filterType scenario', () => {
    const mixedFilterSchema = [
      {
        name: 'name',
        displayName: 'Name',
        width: '40%',
        filterType: 'singleSelect' as const,
        filters: [
          { label: 'Asthma Outreach', value: 'Asthma Outreach' },
          { label: 'HbA1c Test due', value: 'HbA1c Test due' },
        ],
        onFilterChange: (a: any, filters: any) => {
          for (const filter of filters) {
            if (a.name === filter) return true;
          }
          return false;
        },
      },
      {
        name: 'status',
        displayName: 'Status',
        width: '30%',
        filterType: 'multiSelect' as const,
        filters: [
          { label: 'In Progress', value: 'In Progress' },
          { label: 'Scheduled', value: 'Scheduled' },
        ],
        onFilterChange: (a: any, filters: any) => {
          if (filters.length === 0) return true;
          for (const filter of filters) {
            if (a.status === filter) return true;
          }
          return false;
        },
      },
      { name: 'category', displayName: 'Category', width: '30%' },
    ];

    it('should handle mixed filterType columns correctly', () => {
      const { getAllByTestId } = render(
        <Table
          withHeader={true}
          filterPosition="HEADER"
          data={testData}
          schema={mixedFilterSchema}
          headerOptions={{ withSearch: true }}
        />
      );

      const dropdownTriggers = getAllByTestId('DesignSystem-DropdownTrigger');
      expect(dropdownTriggers).toHaveLength(2); // Name and Status columns

      // Test singleSelect dropdown (Name column)
      fireEvent.click(dropdownTriggers[0]);
      // Should not have apply button for singleSelect
      expect(() => getAllByTestId('DesignSystem-Dropdown-ApplyButton')[0]).toThrow();

      // Close first dropdown and open second
      fireEvent.click(dropdownTriggers[0]);
      fireEvent.click(dropdownTriggers[1]);

      // Test multiSelect dropdown (Status column)
      // Should have apply button for multiSelect
      const applyButton = getAllByTestId('DesignSystem-Dropdown-ApplyButton');
      expect(applyButton.length).toBeGreaterThan(0);
    });
  });
});

describe('render table with custom selection/unselection label renderers', () => {
  it('uses selectedLabelRenderer when rows are selected', () => {
    const schema = [{ name: 'name', displayName: 'Name', width: '50%' }];

    const selectedLabelRenderer = (context: Record<string, any>) => {
      return `Picked ${context.selectedRowsCount} rows`;
    };

    const { getAllByTestId, getByTestId } = render(
      <Table
        withHeader={true}
        withCheckbox={true}
        withPagination={true}
        data={tableData}
        schema={schema}
        headerOptions={{ allowSelectAll: true, selectedLabelRenderer }}
      />
    );

    const checkbox = getAllByTestId('DesignSystem-Checkbox-InputBox')[0];
    fireEvent.click(checkbox);

    const selectionLabel = getByTestId('DesignSystem-Label--Text');
    expect(selectionLabel).toHaveTextContent('Picked 2 rows');
  });

  it('uses unSelectedLabelRenderer when no rows are selected', () => {
    const schema = [{ name: 'name', displayName: 'Name', width: '50%' }];

    const unSelectedLabelRenderer = () => {
      return 'Custom unselected label';
    };

    const { getByTestId } = render(
      <Table
        withHeader={true}
        withCheckbox={true}
        withPagination={true}
        data={tableData}
        schema={schema}
        headerOptions={{ allowSelectAll: true, unSelectedLabelRenderer }}
      />
    );

    const selectionLabel = getByTestId('DesignSystem-Label--Text');

    // Trigger animation end to switch to unselected label span
    fireEvent.animationEnd(selectionLabel);

    expect(selectionLabel).toHaveTextContent('Custom unselected label');
  });
});

describe('render table with pagination and search behavior', () => {
  const schema = [{ name: 'name', displayName: 'Name', width: '50%' }];
  const largeData = Array.from({ length: 30 }, (_, i) => ({ name: `Item ${i + 1}` }));

  it('should hide pagination when user starts searching', async () => {
    const headerOptions = { withSearch: true };
    const { getByTestId, queryByTestId } = render(
      <Table
        schema={schema}
        data={largeData}
        withPagination={true}
        pageSize={10}
        withHeader={true}
        headerOptions={headerOptions}
        searchDebounceDuration={100}
      />
    );

    const pagination = queryByTestId('DesignSystem-Pagination');
    expect(pagination).toBeInTheDocument();

    const searchInput = getByTestId('DesignSystem-Table-Header--withSearch');
    fireEvent.change(searchInput, { target: { value: 'Item' } });

    await waitFor(() => {
      const paginationAfterSearch = queryByTestId('DesignSystem-Pagination');
      expect(paginationAfterSearch).not.toBeInTheDocument();
    });
  });

  it('should show pagination after search completes with multiple pages', async () => {
    const headerOptions = { withSearch: true };
    const searchResults = Array.from({ length: 25 }, (_, i) => ({ name: `Item ${i + 1}` }));

    const { getByTestId, queryByTestId } = render(
      <Table
        schema={schema}
        data={largeData}
        withPagination={true}
        pageSize={10}
        withHeader={true}
        headerOptions={headerOptions}
        searchDebounceDuration={100}
        onSearch={(data, searchTerm) => {
          if (!searchTerm) return data;
          return searchResults;
        }}
      />
    );

    const searchInput = getByTestId('DesignSystem-Table-Header--withSearch');
    fireEvent.change(searchInput, { target: { value: 'Item' } });

    await waitFor(
      () => {
        const pagination = queryByTestId('DesignSystem-Pagination');
        expect(pagination).toBeInTheDocument();
      },
      { timeout: 500 }
    );
  });

  it('should keep pagination visible during page navigation', async () => {
    const { getByTestId } = render(<Table schema={schema} data={largeData} withPagination={true} pageSize={10} />);

    const pagination = getByTestId('DesignSystem-Pagination');
    expect(pagination).toBeInTheDocument();

    const nextButton = getByTestId('DesignSystem-Pagination--NextButton');
    fireEvent.click(nextButton);

    await waitFor(() => {
      const paginationAfterPageChange = getByTestId('DesignSystem-Pagination');
      expect(paginationAfterPageChange).toBeInTheDocument();
    });
  });

  it('should hide pagination when search term is cleared', async () => {
    const headerOptions = { withSearch: true };
    const { getByTestId, queryByTestId } = render(
      <Table
        schema={schema}
        data={largeData}
        withPagination={true}
        pageSize={10}
        withHeader={true}
        headerOptions={headerOptions}
        searchDebounceDuration={100}
      />
    );

    const searchInput = getByTestId('DesignSystem-Table-Header--withSearch');
    fireEvent.change(searchInput, { target: { value: 'Item' } });

    await waitFor(() => {
      const paginationDuringSearch = queryByTestId('DesignSystem-Pagination');
      expect(paginationDuringSearch).not.toBeInTheDocument();
    });

    fireEvent.change(searchInput, { target: { value: '' } });

    await waitFor(
      () => {
        const paginationAfterClear = queryByTestId('DesignSystem-Pagination');
        expect(paginationAfterClear).toBeInTheDocument();
      },
      { timeout: 500 }
    );
  });
});

describe('render table with race condition prevention', () => {
  const schema = [{ name: 'name', displayName: 'Name', width: '50%' }];
  const page1Data = Array.from({ length: 10 }, (_, i) => ({ name: `Page1 Item ${i + 1}` }));
  const page2Data = Array.from({ length: 10 }, (_, i) => ({ name: `Page2 Item ${i + 1}` }));
  const page3Data = Array.from({ length: 10 }, (_, i) => ({ name: `Page3 Item ${i + 1}` }));

  it('should process only the latest page request when multiple pages are clicked rapidly', async () => {
    const resolvePromises: Record<number, (value: any) => void> = {};

    const fetchData: fetchDataFunction = jest.fn((opts: any) => {
      const page = opts.page || 1;
      return new Promise((resolve) => {
        resolvePromises[page] = resolve;
      });
    });

    const { getByTestId, getAllByTestId, queryByTestId } = render(
      <Table schema={schema} fetchData={fetchData} withPagination={true} pageSize={10} searchDebounceDuration={100} />
    );

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalled();
    });

    resolvePromises[1]!({
      schema,
      data: page1Data,
      count: 30,
    });

    await waitFor(() => {
      const pagination = queryByTestId('DesignSystem-Pagination');
      expect(pagination).toBeInTheDocument();
    });

    const nextButton = getByTestId('DesignSystem-Pagination--NextButton');
    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(resolvePromises[2]).toBeDefined();
    });

    const nextButton2 = getByTestId('DesignSystem-Pagination--NextButton');
    fireEvent.click(nextButton2);

    await waitFor(() => {
      expect(resolvePromises[3]).toBeDefined();
    });

    resolvePromises[3]!({
      schema,
      data: page3Data,
      count: 30,
    });

    await waitFor(() => {
      const rows = getAllByTestId('DesignSystem-Grid-row');
      expect(rows.length).toBeGreaterThan(0);
      if (rows.length > 0) {
        expect(rows[0]).toHaveTextContent('Page3');
      }
    });

    if (resolvePromises[2]) {
      resolvePromises[2]!({
        schema,
        data: page2Data,
        count: 30,
      });
    }
  });

  it('should handle async table pagination without race conditions', async () => {
    const fetchData: fetchDataFunction = jest.fn((opts: any) => {
      const pageData = opts.page === 1 ? page1Data : opts.page === 2 ? page2Data : page3Data;
      return Promise.resolve({
        schema,
        data: pageData,
        count: 30,
      });
    });

    const { getByTestId, getAllByTestId } = render(
      <Table schema={schema} fetchData={fetchData} withPagination={true} pageSize={10} />
    );

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledWith(
        expect.objectContaining({
          page: 1,
        })
      );
    });

    const nextButton = getByTestId('DesignSystem-Pagination--NextButton');
    fireEvent.click(nextButton);

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalledWith(
        expect.objectContaining({
          page: 2,
        })
      );
    });

    await waitFor(() => {
      const rows = getAllByTestId('DesignSystem-Grid-row');
      expect(rows.length).toBeGreaterThan(0);
      if (rows.length > 0) {
        expect(rows[0]).toHaveTextContent('Page2');
      }
    });
  });
});

describe('render table with pagination during loading', () => {
  const schema = [{ name: 'name', displayName: 'Name', width: '50%' }];
  const largeData = Array.from({ length: 30 }, (_, i) => ({ name: `Item ${i + 1}` }));

  it('should keep pagination visible and clickable during page loading', async () => {
    let resolveFetch: (value: any) => void;
    const fetchData: fetchDataFunction = jest.fn(() => {
      return new Promise((resolve) => {
        resolveFetch = resolve;
      });
    });

    const { getByTestId, queryByTestId } = render(
      <Table schema={schema} fetchData={fetchData} withPagination={true} pageSize={10} searchDebounceDuration={100} />
    );

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalled();
    });

    resolveFetch!({
      schema,
      data: largeData.slice(0, 10),
      count: 30,
    });

    await waitFor(() => {
      const pagination = queryByTestId('DesignSystem-Pagination');
      expect(pagination).toBeInTheDocument();
    });

    const nextButton = getByTestId('DesignSystem-Pagination--NextButton');
    expect(nextButton).not.toBeDisabled();

    fireEvent.click(nextButton);

    await waitFor(() => {
      const pageInput = getByTestId('DesignSystem-Pagination--Input');
      expect(pageInput).toHaveDisplayValue('2');
    });
  });

  it('should hide pagination only during search, not during page loading', async () => {
    const headerOptions = { withSearch: true };
    let resolveFetch: (value: any) => void;
    const fetchData: fetchDataFunction = jest.fn(() => {
      return new Promise((resolve) => {
        resolveFetch = resolve;
      });
    });

    const { getByTestId, queryByTestId } = render(
      <Table
        schema={schema}
        fetchData={fetchData}
        withPagination={true}
        pageSize={10}
        withHeader={true}
        headerOptions={headerOptions}
        searchDebounceDuration={100}
      />
    );

    await waitFor(() => {
      expect(fetchData).toHaveBeenCalled();
    });

    resolveFetch!({
      schema,
      data: largeData.slice(0, 10),
      count: 30,
    });

    await waitFor(() => {
      const paginationAfterLoad = queryByTestId('DesignSystem-Pagination');
      expect(paginationAfterLoad).toBeInTheDocument();
    });

    const searchInput = getByTestId('DesignSystem-Table-Header--withSearch');
    fireEvent.change(searchInput, { target: { value: 'test' } });

    await waitFor(() => {
      const paginationDuringSearch = queryByTestId('DesignSystem-Pagination');
      expect(paginationDuringSearch).not.toBeInTheDocument();
    });
  });
});
