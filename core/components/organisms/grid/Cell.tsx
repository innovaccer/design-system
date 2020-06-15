import * as React from 'react';
import classNames from 'classnames';
import { RowData, ColumnSchema } from './Grid';
import { Dropdown, Grid, Placeholder, PlaceholderParagraph, Heading, Icon, Button } from '@/index';
import { reorderCol, resizeCol } from './utility';
import { GridCell } from './GridCell';

interface SharedCellProps {
  _this: Grid;
  schema: ColumnSchema;
}

type HeaderCellProps = SharedCellProps & {
  colIndex: number;
  draggable: boolean;
};

type BodyCellProps = SharedCellProps & {
  data: RowData;
  rowIndex: number;
  colIndex: number;
  expandedState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
};

export type CellProps = (HeaderCellProps | BodyCellProps) & {
  head?: boolean;
};

const HeaderCell = (props: HeaderCellProps) => {
  const {
    _this,
    schema,
    draggable,
  } = props;

  const {
    loading,
    showMenu
  } = _this.props;

  const {
    init,
    sortingList,
  } = _this.state;

  const listIndex = sortingList.findIndex(l => l.name === schema.name);
  const sorted = listIndex !== -1 ? sortingList[listIndex].type : null;

  const el = React.createRef<HTMLDivElement>();

  const sortOptions = [
    { label: 'Sort Ascending', value: 'sortAsc', icon: 'arrow_downward' },
    { label: 'Sort Descending', value: 'sortDesc', icon: 'arrow_upward' },
  ];
  let options = [
    { label: 'Pin Left', value: 'pinLeft', icon: 'skip_previous' },
    { label: 'Pin Right', value: 'pinRight', icon: 'skip_next' },
    { label: 'Hide Column', value: 'hide', icon: 'cancel' },
  ];
  if (schema.sortFn) options = [...sortOptions, ...options];

  const classes = classNames({
    'Grid-headCell': true,
    'Grid-headCell--draggable': draggable
  });

  return (
    <div
      key={schema.name}
      className={classes}
      ref={el}
    >
      <div
        className="Grid-cellContent"
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
                <div className="Grid-sortingIcons">
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
                options={options}
                dropdownAlign={'left'}
                onChange={(selected: any) => _this.onMenuChange(schema.name, selected)}
              />
            )
          }
        </>
      )}
      {schema.resizable && (
        <span
          className="Grid-cellResize"
          onMouseDown={() => {
            resizeCol(_this, schema.name, el.current);
          }}
        />
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
    size,
    loading,
  } = _this.props;

  const [expanded, setExpanded] = expandedState;

  return (
    <div className="Grid-cellContent">
      {colIndex === 0 && data._expanded && !schema.pinned && (
        <Button
          appearance={'transparent'}
          icon={expanded ? 'expand_less' : 'expand_more'}
          onClick={() => setExpanded(!expanded)}
        />
      )}
      <GridCell
        key={`${rowIndex}-${colIndex}`}
        rowIndex={rowIndex}
        colIndex={colIndex}
        size={size}
        schema={schema}
        data={data}
        loading={loading}
      />
    </div>
  );
};

export const Cell = (props: CellProps) => {
  const {
    _this,
    head,
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
    'Grid-cell': true,
    'Grid-cell--head': head,
    'Grid-cell--body': !head,
    'Grid-cell--withSeparator': head ? !(withCheckbox && colIndex === 0) : schema.separator,
    // 'Grid-cell--selected': schema._selected,
  });

  if (schema.hidden) return null;

  return (
    <div
      key={`${rowIndex}-${colIndex}`}
      className={cellClass}
      data-name={schema.name}
      style={{
        width: schema.width
      }}
    >
      {head ? (
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
