import * as React from 'react';
import classNames from 'classnames';
import { StateData, StateSchema } from './Table';
import { Dropdown, Table, Placeholder, PlaceholderParagraph, Heading, Icon, Button } from '@/index';
import { reorderCol, resizeCol } from './utility';
import { TableCell } from './TableCell';

interface SharedCellProps {
  _this: Table;
  schema: StateSchema;
}

type HeaderCellProps = SharedCellProps & {
  colIndex: number;
  draggable: boolean;
};

type BodyCellProps = SharedCellProps & {
  data: StateData;
  rowIndex: number;
  colIndex: number;
  expandedState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
};

export type CellProps = (HeaderCellProps | BodyCellProps) & {
  header?: boolean;
};

const HeaderCell = (props: HeaderCellProps) => {
  const {
    _this,
    schema,
    draggable,
  } = props;

  const {
    init,
    loading,
    sortingList,
  } = _this.state;

  const {
    showMenu
  } = _this;

  const listIndex = sortingList.findIndex(l => l.name === schema.name);
  const sorted = listIndex !== -1 ? sortingList[listIndex].type : null;

  const el = React.createRef<HTMLDivElement>();

  const sortOptions = [
    { label: 'Sort Ascending', value: 'sortAsc', icon: 'arrow_downward' },
    { label: 'Sort Descending', value: 'sortDesc', icon: 'arrow_upward' },
  ];
  let options = [
    { label: 'Pin Left', value: 'pinLeft', icon: 'first_page' },
    { label: 'Pin Right', value: 'pinRight', icon: 'last_page' },
    { label: 'Hide Column', value: 'hide', icon: 'cancel' },
  ];
  if (schema.sortFn) options = [...sortOptions, ...options];

  const classes = classNames({
    'Table-headerCell': true,
    'Table-headerCell--draggable': draggable
  });

  return (
    <div
      key={schema.name}
      className={classes}
      ref={el}
    >
      <div
        className="Table-cellContent"
        onMouseDown={() => {
          if (draggable) reorderCol(_this, schema.name, el.current);
        }}
      >
        {loading && !init ? (
          <Placeholder style={{ flexGrow: 1 }}>
            <PlaceholderParagraph length="medium" />
          </Placeholder>
        ) : (
            <>
              <Heading>{schema.displayName}</Heading>
              {schema.sortFn && (
                <div className="Table-sortingIcons">
                  {sorted ? sorted === 'asc' ? (
                    <Icon name="arrow_downward" />
                  ) : (
                      <Icon name="arrow_upward" />
                    ) : (
                      <Icon name="unfold_more" />
                    )
                  }
                </div>
              )}
            </>
          )
        }
      </div>
      {schema.filters && (
        <>
          {loading && !init ? (
            <Placeholder withImage={true} />
          ) : (
              <Dropdown
                menu={true}
                buttonAppearance={'transparent'}
                showApplyButton={true}
                checkboxes={true}
                options={schema.filters}
                icon={'filter_list'}
                dropdownAlign={'left'}
                onChange={(selected: any) => _this.onFilterChange(schema.name, selected)}
              />
            )
          }
        </>
      )}
      {showMenu && (
        <>
          {loading && !init ? (
            <Placeholder withImage={true} />
          ) : (
              <Dropdown
                key={schema.name}
                menu={true}
                buttonAppearance={'transparent'}
                options={options}
                dropdownAlign={'left'}
                onChange={(selected: any) => _this.onMenuChange(schema.name, selected)}
              />
            )
          }
        </>
      )}
      {schema.resize && (
        <span className="Table-cellResize" onMouseDown={() => resizeCol(_this, schema.name, el.current)} />
      )}
    </div>
  );
};

const BodyCell = (props: BodyCellProps) => {
  const {
    _this,
    data,
    schema,
    expandedState,
    rowIndex,
    colIndex
  } = props;

  const {
    loading
  } = _this.state;

  const {
    size
  } = _this;

  const {
    statusMapper
  } = _this.props;

  const [expanded, setExpanded] = expandedState;

  return (
    <div className="Table-cellContent">
      {colIndex === 0 && data._expanded && !schema.pinned && (
        <Button
          appearance={'transparent'}
          icon={expanded ? 'expand_less' : 'expand_more'}
          onClick={() => setExpanded(!expanded)}
        />
      )}
      <TableCell
        size={size}
        rowIndex={rowIndex}
        schema={schema}
        data={data}
        loading={loading}
        statusMapper={statusMapper}
      />
    </div>
  );
};

export const Cell = (props: CellProps) => {
  const {
    _this,
    header,
    colIndex,
    schema,
    // @ts-ignore
    expandedState,
    // @ts-ignore
    draggable,
    // @ts-ignore
    data,
    // @ts-ignore
    rowIndex,
  } = props;

  const {
    withCheckbox
  } = _this.props;

  const cellClass = classNames({
    'Table-cell': true,
    'Table-cell--header': header,
    'Table-cell--body': !header,
    'Table-cell--withSeparator': header ? !(withCheckbox && colIndex === 0) : schema.separator,
    'Table-cell--selected': schema.selected,
  });

  if (schema.hidden) return null;

  return (
    <div
      className={cellClass}
      data-name={schema.name}
      style={{
        width: schema.width
      }}
    >
      {header ? (
        <HeaderCell
          _this={_this}
          draggable={draggable}
          colIndex={colIndex}
          schema={schema}
        />
      ) : (
          <BodyCell
            _this={_this}
            rowIndex={rowIndex}
            colIndex={colIndex}
            data={data}
            schema={schema}
            expandedState={expandedState}
          />
        )}
    </div>
  );
};

export default Cell;
