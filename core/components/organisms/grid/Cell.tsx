import * as React from 'react';
import classNames from 'classnames';
import { RowData, ColumnSchema } from './Grid';
import { Dropdown, Grid, Placeholder, PlaceholderParagraph, Text, Icon, Button, Tooltip, GridCell } from '@/index';
import { resizeCol, getInit } from './utility';
import { DropdownProps } from '@/components/atoms/dropdown';
import { getCellSize, getWidth } from './columnUtility';
import { GridNestedRow } from './GridNestedRow';

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
  firstCell: boolean;
};

const HeaderCell = (props: HeaderCellProps) => {
  const {
    _this,
    schema,
    draggable,
  } = props;

  const {
    schema: schemaProp,
    loading,
    showMenu,
    sortingList,
    filterList,
    headCellTooltip,
    showFilters
  } = _this.props;

  const {
    sorting = true,
    name,
    filters,
    pinned
  } = schema;

  const init = getInit(schemaProp);

  const listIndex = sortingList.findIndex(l => l.name === name);
  const sorted = listIndex !== -1 ? sortingList[listIndex].type : null;

  const el = React.createRef<HTMLDivElement>();

  const sortOptions: DropdownProps['options'] = [
    { label: 'Sort Ascending', value: 'sortAsc', icon: 'arrow_downward' },
    { label: 'Sort Descending', value: 'sortDesc', icon: 'arrow_upward' },
  ];
  const pinOptions: DropdownProps['options'] = [
    { label: 'Pin Left', value: 'pinLeft', icon: 'skip_previous' },
    { label: 'Pin Right', value: 'pinRight', icon: 'skip_next' },
  ];
  const unpinOption = { label: 'Unpin', value: 'unpin', icon: 'replay' };
  if (pinned === 'left') pinOptions[0] = unpinOption;
  if (pinned === 'right') pinOptions[1] = unpinOption;

  const hideOptions: DropdownProps['options'] = [
    { label: 'Hide Column', value: 'hide', icon: 'cancel' },
  ];
  const unsortOption = { label: 'Unsort', value: 'unsort', icon: 'unfold_more' };
  if (sorted === 'asc') sortOptions[0] = unsortOption;
  if (sorted === 'desc') sortOptions[1] = unsortOption;

  let options: DropdownProps['options'] = [
    ...pinOptions,
    ...hideOptions
  ];
  if (sorting) options = [...sortOptions, ...options];

  const classes = classNames({
    'Grid-headCell': true,
    'Grid-headCell--draggable': draggable
  });

  const filterOptions = filters
    ? filters.map(f => ({
      ...f,
      selected: filterList[name] && filterList[name].findIndex(fl => fl === f.value) !== -1
    }))
    : [];

  const renderLabel = () => (
    <>
      <Text weight="strong" className="ellipsis--noWrap">{schema.displayName}</Text>
      {sorting && (
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
  );

  return (
    <div
      key={name}
      className={classes}
      ref={el}
    >
      <div
        className="Grid-cellContent"
        onClick={() => {
          if (!loading && sorting) {
            if (sorted === 'asc') _this.onMenuChange(name, 'sortDesc');
            if (sorted === 'desc') _this.onMenuChange(name, 'unsort');
            if (!sorted) _this.onMenuChange(name, 'sortAsc');
          }
        }}
      >
        {loading && !init ? (
          <Placeholder withImage={false}>
            <PlaceholderParagraph length="medium" />
          </Placeholder>
        ) : (
            <>
              {headCellTooltip ? (
                <Tooltip position="top-start" triggerClass="w-100 overflow-hidden" tooltip={schema.displayName}>
                  {renderLabel()}
                </Tooltip>
              ) : (
                  renderLabel()
                )
              }
            </>
          )
        }
      </div>
      {showFilters && filters && (
        <>
          {loading && !init ? (
            <span>
              <Placeholder />
            </span>
          ) : (
              <div>
                <Dropdown
                  menu={true}
                  showApplyButton={true}
                  withCheckbox={true}
                  triggerOptions={{
                    customTrigger: () => (
                      <Button
                        icon="filter_list"
                        appearance="transparent"
                      />
                    )
                  }}
                  options={filterOptions}
                  align={'left'}
                  onChange={(selected: any) => _this.onFilterChange(name, selected)}
                  minWidth={176}
                />
              </div>
            )
          }
        </>
      )}
      {showMenu && (
        <>
          {loading && !init ? (
            <span className="ml-4">
              <Placeholder />
            </span>
          ) : (
              <div>
                <Dropdown
                  key={`${name}-${sorted}-${pinned}`}
                  menu={true}
                  optionType="WITH_ICON"
                  triggerOptions={{
                    customTrigger: () => (
                      <Button
                        icon="more_vert_filled"
                        appearance="transparent"
                      />
                    )
                  }}
                  options={options}
                  align={'left'}
                  onChange={(selected: any) => _this.onMenuChange(name, selected)}
                  minWidth={176}
                />
              </div>
            )
          }
        </>
      )}
      {schema.resizable && (
        <span
          className="Grid-cellResize"
          onMouseDown={() => {
            resizeCol(_this, name, el.current);
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
    nestedRows
  } = _this.props;

  const [expanded, setExpanded] = expandedState;

  const cellProps = {
    rowIndex,
    colIndex,
    size,
    schema,
    data,
    loading,
  };

  const nestedProps = {
    _this,
    data,
    rowIndex,
  };

  const isNestedRowDisabled = !GridNestedRow(nestedProps);

  return (
    <div className="Grid-cellContent">
      {colIndex === 0 && nestedRows && (
        <>
          {!isNestedRowDisabled ? (
            <Icon
              className={'Grid-nestedRowTrigger'}
              name={expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
              size={20}
              appearance={'default'}
              onClick={e => {
                if (!isNestedRowDisabled) {
                  e.stopPropagation();
                  setExpanded(!expanded);
                }
              }}
            />
          ) : (
              <span className="Grid-nestedRowPlaceholder" />
            )}
        </>
      )}
      {schema.cellRenderer ?
        schema.cellRenderer(cellProps)
        : (
          <GridCell
            key={`${rowIndex}-${colIndex}`}
            {...cellProps}
          />
        )}
    </div>
  );
};

export const Cell = (props: CellProps) => {
  const {
    _this,
    head,
    colIndex,
    firstCell,
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
    separator,
    nestedRows
  } = _this.props;

  const {
    init
  } = _this.state;

  const {
    name,
    hidden,
    pinned,
    cellType = 'DEFAULT'
  } = schema;

  const {
    width,
    minWidth = 96,
    maxWidth = 800
  } = getCellSize(cellType);

  const cellClass = classNames({
    'Grid-cell': true,
    'Grid-cell--head': head,
    'Grid-cell--body': !head,
    'Grid-cell--separator': !firstCell && (schema.separator !== undefined ? schema.separator : separator),
    'Grid-cell--nestedRow': !head && colIndex === 0 && nestedRows
  });

  if (hidden) return null;

  return (
    <div
      key={`${rowIndex}-${colIndex}`}
      className={cellClass}
      draggable={head && draggable}
      onDragStart={e => {
        if (draggable) {
          e.dataTransfer.setData('name', name);
          if (pinned) e.dataTransfer.setData('type', pinned);
        }
      }}
      onDragOver={e => e.preventDefault()}
      onDrop={e => {
        if (draggable) {
          const from = {
            name: e.dataTransfer.getData('name'),
            type: e.dataTransfer.getData('type')
          };
          const to = {
            name,
            type: pinned || ''
          };

          if (from.type === to.type) _this.reorderCol(from.name, to.name);
        }
      }}
      style={{
        visibility: !init ? 'hidden' : 'visible',
        width: getWidth.call(_this, schema.width || width),
        minWidth: getWidth.call(_this, schema.minWidth || minWidth),
        maxWidth: getWidth.call(_this, schema.maxWidth || maxWidth)
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
