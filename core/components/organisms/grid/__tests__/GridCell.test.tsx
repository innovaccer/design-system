import * as React from 'react';
import { render } from '@testing-library/react';
import { GridCell } from '@/components/organisms/grid/GridCell';
// import { GridProvider } from '@/components/organisms/grid/GridContext';
// import defaultProps from '@/components/organisms/grid/defaultProps';

// const ref = document.createElement('div');
// ref.style.width = '1200px';
// jest
//   .spyOn(ref, 'clientWidth', 'get')
//   .mockImplementation(() => 1000);

const schema = {
  name: 'test',
  displayName: 'Test',
  filters: [
    { label: 'Filter 1', value: 'filter_1' }
  ]
};

const data = { test: 'Testing data' };

// let onMenuChange = jest.fn();
// let setExpanded = jest.fn();
// beforeEach(() => {
//   onMenuChange = jest.fn();
//   setExpanded = jest.fn();
// });

// const customRender = (component: React.ReactNode, props: Record<string, any> = {}) => render(
//   <GridProvider value={{ ...defaultProps, ref, ...props }}>
//     {component}
//   </GridProvider>
// );

const renderCell = (props = {}, context = {}) => render(
  <GridCell
    schema={schema}
    data={data}
    size="standard"
    rowIndex={0}
    colIndex={0}
    loading={false}
    {...props}
  />
  , context
);

// const renderBodyCell = (props = {}, context = {}) => customRender(
//   <Cell
//     isHead={false}
//     schema={schema}
//     data={{ test: 'Foo' }}
//     colIndex={0}
//     rowIndex={0}
//     expandedState={[false, setExpanded]}
//     {...props}
//   />
//   , context
// );

// type JestObj = RenderResult<typeof import("/Users/i0691/Workspace/design-system/node_modules/@testing-library/dom/types/queries")>;

// const expectHeadCell = (jestObj: JestObj) => {
//   const { queryByTestId } = jestObj;

//   expect(queryByTestId('DesignSystem-Cell')).toHaveClass('Grid-cell--head');
//   expect(queryByTestId('DesignSystem-Cell')).not.toHaveClass('Grid-cell--body');
//   expect(queryByTestId('DesignSystem-HeadCell')).toBeInTheDocument();
//   expect(queryByTestId('DesignSystem-BodyCell')).not.toBeInTheDocument();
// }

// const expectBodyCell = (jestObj: JestObj) => {
//   const { queryByTestId } = jestObj;

//   expect(queryByTestId('DesignSystem-Cell')).not.toHaveClass('Grid-cell--head');
//   expect(queryByTestId('DesignSystem-Cell')).toHaveClass('Grid-cell--body');
//   expect(queryByTestId('DesignSystem-HeadCell')).not.toBeInTheDocument();
//   expect(queryByTestId('DesignSystem-BodyCell')).toBeInTheDocument();
// }

describe('GridCell component', () => {
  it('renders default', () => {
    const { queryByTestId } = renderCell();

    expect(queryByTestId('DesignSystem-GridCell')).toBeInTheDocument();
    expect(queryByTestId('DesignSystem-GridCell')).toHaveClass('GridCell');
    expect(queryByTestId('DesignSystem-GridCell')).toHaveClass('GridCell--default');
    expect(queryByTestId('DesignSystem-GridCell')).toHaveClass('GridCell--leftAlign');
  });

  // it('renders HeadCell', () => {
  //   const jestObj = renderHeadCell();
  //   const { queryByTestId } = jestObj;

  //   expect(queryByTestId('DesignSystem-Cell')).toBeInTheDocument();
  //   expect(queryByTestId('DesignSystem-Cell')).toHaveClass('Grid-cell');
  //   expectHeadCell(jestObj)
  // });

  // it('renders BodyCell', () => {
  //   const jestObj = renderBodyCell();
  //   const { queryByTestId } = jestObj;

  //   expect(queryByTestId('DesignSystem-Cell')).toBeInTheDocument();
  //   expect(queryByTestId('DesignSystem-Cell')).toHaveClass('Grid-cell');
  //   expectBodyCell(jestObj);
  // });

  // it('renders with width: 100', () => {
  //   const jestObj = renderBodyCell({
  //     schema: { ...schema, width: 100 }
  //   });
  //   const { queryByTestId } = jestObj;

  //   expect(queryByTestId('DesignSystem-Cell')).toHaveStyle({ width: '100px' });
  //   expectBodyCell(jestObj);
  // });

  // it("renders with width: '100px'", () => {
  //   const jestObj = renderBodyCell({
  //     schema: { ...schema, width: '100px' }
  //   });
  //   const { queryByTestId } = jestObj;

  //   expect(queryByTestId('DesignSystem-Cell')).toHaveStyle({ width: '100px' });
  //   expectBodyCell(jestObj);
  // });

  // it("renders with width: '15%'", () => {
  //   const jestObj = renderBodyCell({
  //     schema: { ...schema, width: '15%' }
  //   });
  //   const { queryByTestId } = jestObj;

  //   expect(queryByTestId('DesignSystem-Cell')).toHaveStyle({ width: '150px' });
  //   expectBodyCell(jestObj);
  // });
});

// describe('Cell component rendering HeadCell', () => {
//   it("with 'firstCell: true'", () => {
//     const { queryByTestId } = renderHeadCell({
//       firstCell: true
//     }, {
//       separator: true
//     });

//     expect(queryByTestId('DesignSystem-Cell')).not.toHaveClass('Grid-cell--separator');
//   });

//   it("with 'firstCell: false'", () => {
//     const { queryByTestId } = renderHeadCell({
//       firstCell: false
//     }, {
//       separator: true
//     });

//     expect(queryByTestId('DesignSystem-Cell')).toHaveClass('Grid-cell--separator');
//   });

//   it("with 'sorting: false'", () => {
//     const { getByTestId, queryByTestId } = renderHeadCell({
//       schema: { ...schema, sorting: false }
//     });

//     expect(queryByTestId("DesignSystem-SortingIcons")).not.toBeInTheDocument();

//     const cellEl = getByTestId("DesignSystem-HeadCell--cellContent");
//     fireEvent.click(cellEl);
//     expect(onMenuChange).not.toBeCalled();
//   });

//   describe("with 'sorting: true'", () => {
//     it("default", () => {
//       const { getByTestId, queryByTestId } = renderHeadCell({
//         schema: { ...schema, sorting: true }
//       });

//       expect(queryByTestId("DesignSystem-SortingIcons")).toBeInTheDocument();
//       expect(queryByTestId("DesignSystem-SortingIcons--Icon")).toHaveTextContent('unfold_more');

//       const cellEl = getByTestId("DesignSystem-HeadCell--cellContent");
//       fireEvent.click(cellEl);
//       expect(onMenuChange).toBeCalledWith('test', 'sortAsc');
//     });

//     it("with pre-defined sorting as 'asc'", () => {
//       const { getByTestId, queryByTestId } = renderHeadCell({
//         schema: { ...schema, sorting: true }
//       }, {
//         sortingList: [{ name: 'test', type: 'asc' }]
//       });

//       expect(queryByTestId("DesignSystem-SortingIcons")).toBeInTheDocument();
//       expect(queryByTestId("DesignSystem-SortingIcons--Icon")).toHaveTextContent('arrow_downward');

//       const cellEl = getByTestId("DesignSystem-HeadCell--cellContent");
//       fireEvent.click(cellEl);
//       expect(onMenuChange).toBeCalledWith('test', 'sortDesc');
//     });

//     it("with pre-defined sorting as 'desc'", () => {
//       const { getByTestId, queryByTestId } = renderHeadCell({
//         schema: { ...schema, sorting: true }
//       }, {
//         sortingList: [{ name: 'test', type: 'desc' }]
//       });

//       expect(queryByTestId("DesignSystem-SortingIcons")).toBeInTheDocument();
//       expect(queryByTestId("DesignSystem-SortingIcons--Icon")).toHaveTextContent('arrow_upward');

//       const cellEl = getByTestId("DesignSystem-HeadCell--cellContent");
//       fireEvent.click(cellEl);
//       expect(onMenuChange).toBeCalledWith('test', 'unsort');
//     });
//   });

//   // with filters
//   // it("with 'sorting: true' and pre-defined sorting as 'desc'", () => {
//   //   const { getByTestId, queryByTestId } = renderHeadCell({
//   //     sorting: true
//   //   }, {
//   //     sortingList: [{ name: 'test', type: 'desc' }]
//   //   });

//   //   expect(queryByTestId("DesignSystem-SortingIcons")).toBeInTheDocument();
//   //   expect(queryByTestId("DesignSystem-SortingIcons--Icon")).toHaveTextContent('arrow_upward');

//   //   const cellEl = getByTestId("DesignSystem-HeadCell--cellContent");
//   //   fireEvent.click(cellEl);
//   //   expect(onMenuChange).toBeCalledWith('test', 'unsort');
//   // });

//   it('with showMenu: false', () => {
//     const { queryByTestId } = renderHeadCell({}, {
//       showMenu: false
//     });

//     expect(queryByTestId("DesignSystem-CellMenu")).not.toBeInTheDocument();
//   });

//   describe('with showMenu: true', () => {
//     it('default', () => {
//       const { queryByTestId } = renderHeadCell({}, {
//         showMenu: true
//       });

//       expect(queryByTestId("DesignSystem-CellMenu")).toBeInTheDocument();
//     });
//   });

//   it('with draggable: true', () => {
//     const { queryByTestId } = renderHeadCell({}, {
//       draggable: true
//     });

//     expect(queryByTestId('DesignSystem-Cell')).toHaveAttribute('draggable', 'true');
//     expect(queryByTestId("DesignSystem-HeadCell")).toHaveClass("Grid-headCell--draggable");
//   });

//   it('with resizable: true', () => {
//     const { queryByTestId } = renderHeadCell({
//       schema: { ...schema, resizable: true }
//     });

//     expect(queryByTestId("DesignSystem-CellResizeHandle")).toBeInTheDocument();
//   });

//   it('with resizable: false', () => {
//     const { queryByTestId } = renderHeadCell({
//       schema: { ...schema, resizable: false }
//     });

//     expect(queryByTestId("DesignSystem-CellResizeHandle")).not.toBeInTheDocument();
//   });
// });

// describe('Cell component rendering BodyCell', () => {
//   describe('with nestedRow: true', () => {
//     it('colIndex: 0', () => {
//       const { queryByTestId } = renderBodyCell({
//         colIndex: 0
//       }, {
//         nestedRows: true,
//         nestedRowRenderer: () => <></>
//       });

//       expect(queryByTestId('DesignSystem-Cell')).toHaveClass('Grid-cell--nestedRow');
//       expect(queryByTestId("DesignSystem-NestedRowPlaceholder")).not.toBeInTheDocument();
//       expect(queryByTestId("DesignSystem-NestedRowTrigger")).toBeInTheDocument();
//     });

//     it('colIndex: 0, expanded: false', () => {
//       const { getByTestId } = renderBodyCell({
//         colIndex: 0,
//         expandedState: [false, setExpanded]
//       }, {
//         nestedRows: true,
//         nestedRowRenderer: () => <></>
//       });

//       const trigger = getByTestId("DesignSystem-NestedRowTrigger");
//       expect(trigger).toBeInTheDocument();
//       expect(trigger).toHaveTextContent("keyboard_arrow_down");
//       fireEvent.click(trigger);
//       expect(setExpanded).toBeCalledWith(true);
//     });

//     it('colIndex: 0, expanded: true', () => {
//       const { getByTestId } = renderBodyCell({
//         colIndex: 0,
//         expandedState: [true, setExpanded]
//       }, {
//         nestedRows: true,
//         nestedRowRenderer: () => <></>
//       });

//       const trigger = getByTestId("DesignSystem-NestedRowTrigger");
//       expect(trigger).toBeInTheDocument();
//       expect(trigger).toHaveTextContent("keyboard_arrow_up");
//       fireEvent.click(trigger);
//       expect(setExpanded).toBeCalledWith(false);
//     });

//     it('colIndex: 0, nestedRowRenderer returning null', () => {
//       const { queryByTestId } = renderBodyCell({
//         colIndex: 0
//       }, {
//         nestedRows: true,
//         nestedRowRenderer: () => null
//       });

//       expect(queryByTestId('DesignSystem-Cell')).toHaveClass('Grid-cell--nestedRow');
//       expect(queryByTestId("DesignSystem-NestedRowTrigger")).not.toBeInTheDocument();
//       expect(queryByTestId("DesignSystem-NestedRowPlaceholder")).toBeInTheDocument();
//     });

//     it('colIndex: 1', () => {
//       const { queryByTestId } = renderBodyCell({
//         colIndex: 1
//       }, {
//         nestedRows: true,
//         nestedRowRenderer: () => <></>
//       });

//       expect(queryByTestId('DesignSystem-Cell')).not.toHaveClass('Grid-cell--nestedRow');
//       expect(queryByTestId("DesignSystem-NestedRowTrigger")).not.toBeInTheDocument();
//       expect(queryByTestId("DesignSystem-NestedRowPlaceholder")).not.toBeInTheDocument();
//     });
//   });

//   it('with draggable: true', () => {
//     const { queryByTestId } = renderBodyCell({}, {
//       draggable: true
//     });

//     expect(queryByTestId('DesignSystem-Cell')).toHaveAttribute('draggable', 'false');
//   });
// });
