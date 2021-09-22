import * as React from 'react';
import classNames from 'classnames';
import { RowData, ColumnSchema } from './Grid';
import { Dropdown, Placeholder, PlaceholderParagraph, Text, Icon, Button, Tooltip, GridCell } from '@/index';
import { DropdownProps, GridCellProps } from '@/index.type';
import { resizeCol, hasSchema } from './utility';
import { getCellSize, getWidth } from './columnUtility';
import { GridNestedRow } from './GridNestedRow';
import { GridHeadProps } from './GridHead';
import GridContext from './GridContext';

interface SharedCellProps {
  schema: ColumnSchema;
  colIndex: number;
}

type HeaderCellProps = SharedCellProps & {
  onSelectAll: GridHeadProps['onSelectAll'];
  onMenuChange: GridHeadProps['onMenuChange'];
  onFilterChange: GridHeadProps['onFilterChange'];
  updateColumnSchema: GridHeadProps['updateColumnSchema'];
  reorderColumn: GridHeadProps['reorderColumn'];
};

type BodyCellProps = SharedCellProps & {
  data: RowData;
  rowIndex: number;
  expandedState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
};

export type CellProps = (HeaderCellProps | BodyCellProps) & {
  isHead?: boolean;
  firstCell: boolean;
};

const HeaderCell = (props: HeaderCellProps) => {
  const context = React.useContext(GridContext);
  const { schema, onMenuChange, onFilterChange, updateColumnSchema } = props;

  const {
    loading,
    draggable,
    showMenu,
    sortingList,
    filterList,
    headCellTooltip,
    showFilters,
    schema: schemaProp,
  } = context;

  const { sorting = true, name, filters, pinned } = schema;

  const isValidSchema = hasSchema(schemaProp);

  const listIndex = sortingList.findIndex((l) => l.name === name);
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

  const hideOptions: DropdownProps['options'] = [{ label: 'Hide Column', value: 'hide', icon: 'cancel' }];
  const unsortOption = { label: 'Unsort', value: 'unsort', icon: 'unfold_more' };
  if (sorted === 'asc') sortOptions[0] = unsortOption;
  if (sorted === 'desc') sortOptions[1] = unsortOption;

  let options: DropdownProps['options'] = [...pinOptions, ...hideOptions];
  if (sorting) options = [...sortOptions, ...options];

  const classes = classNames({
    'Grid-headCell': true,
    'Grid-headCell--draggable': draggable,
  });

  const filterOptions = filters
    ? filters.map((f) => ({
        ...f,
        selected: filterList[name] && filterList[name].findIndex((fl) => fl === f.value) !== -1,
      }))
    : [];

  const renderLabel = () => (
    <>
      <Text weight="strong" className="ellipsis--noWrap">
        {schema.displayName}
      </Text>
      {sorting && (
        <div className="Grid-sortingIcons">
          {sorted ? (
            sorted === 'asc' ? (
              <Icon name="arrow_downward" />
            ) : (
              <Icon name="arrow_upward" />
            )
          ) : (
            <Icon name="unfold_more" />
          )}
        </div>
      )}
    </>
  );

  return (
    <div key={name} className={classes} ref={el}>
      <div
        className="Grid-cellContent"
        data-test="Designsystem-Cell--Content"
        onClick={() => {
          if (!loading && sorting) {
            if (sorted === 'asc') onMenuChange(name, 'sortDesc');
            if (sorted === 'desc') onMenuChange(name, 'unsort');
            if (!sorted) onMenuChange(name, 'sortAsc');
          }
        }}
      >
        {loading && !isValidSchema ? (
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
            )}
          </>
        )}
      </div>
      {showFilters && filters && (
        <>
          {loading && !isValidSchema ? (
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
                  customTrigger: () => <Button icon="filter_list" appearance="transparent" />,
                }}
                options={filterOptions}
                align={'left'}
                onChange={(selected: any) => onFilterChange(name, selected)}
                minWidth={176}
              />
            </div>
          )}
        </>
      )}
      {showMenu && (
        <>
          {loading && !isValidSchema ? (
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
                  customTrigger: () => <Button icon="more_vert_filled" appearance="transparent" />,
                }}
                options={options}
                align={'left'}
                onChange={(selected: any) => onMenuChange(name, selected)}
                minWidth={176}
              />
            </div>
          )}
        </>
      )}
      {schema.resizable && (
        <span
          className="Grid-cellResize"
          onMouseDown={() => {
            resizeCol({ updateColumnSchema }, name, el.current);
          }}
        />
      )}
    </div>
  );
};

const BodyCell = (props: BodyCellProps) => {
  const context = React.useContext(GridContext);
  const { data, schema, expandedState, rowIndex, colIndex } = props;

  const { size, loading, nestedRows } = context;

  const [expanded, setExpanded] = expandedState;

  const cellProps: GridCellProps = {
    rowIndex,
    colIndex,
    size,
    schema,
    data,
    loading,
    expanded,
  };

  const nestedProps = {
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
              onClick={(e) => {
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
      {schema.cellRenderer ? (
        schema.cellRenderer(cellProps)
      ) : (
        <GridCell key={`${rowIndex}-${colIndex}`} {...cellProps} />
      )}
    </div>
  );
};

export const Cell = (props: CellProps) => {
  const context = React.useContext(GridContext);
  const {
    isHead,
    firstCell,
    schema,
    // @ts-ignore
    data,
    // @ts-ignore
    rowIndex,
    colIndex,
    // @ts-ignore
    expandedState,
    // @ts-ignore
    onSelectAll,
    // @ts-ignore
    onMenuChange,
    // @ts-ignore
    onFilterChange,
    // @ts-ignore
    updateColumnSchema,
    // @ts-ignore
    reorderColumn,
  } = props;

  const { draggable, separator, nestedRows, ref, withCheckbox } = context;

  const { name, hidden, pinned, cellType = 'DEFAULT' } = schema;

  const { width, minWidth = 96, maxWidth = 800 } = getCellSize(cellType);

  const cellClass = classNames({
    'Grid-cell': true,
    'Grid-cell--head': isHead,
    'Grid-cell--body': !isHead,
    'Grid-cell--separator': !firstCell && (schema.separator !== undefined ? schema.separator : separator),
    'Grid-cell--nestedRow': !isHead && colIndex === 0 && nestedRows,
  });

  if (hidden) return null;

  return (
    <div
      key={`${rowIndex}-${colIndex}`}
      className={cellClass}
      draggable={isHead && draggable}
      onDragStart={(e) => {
        if (draggable) {
          e.dataTransfer.setData('name', name);
          if (pinned) e.dataTransfer.setData('type', pinned);
        }
      }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        if (draggable) {
          const from = {
            name: e.dataTransfer.getData('name'),
            type: e.dataTransfer.getData('type'),
          };
          const to = {
            name,
            type: pinned || '',
          };

          if (from.type === to.type) reorderColumn(from.name, to.name);
        }
      }}
      style={{
        width: getWidth({ ref, withCheckbox }, schema.width || width),
        minWidth: getWidth({ ref, withCheckbox }, schema.minWidth || minWidth),
        maxWidth: getWidth({ ref, withCheckbox }, schema.maxWidth || maxWidth),
      }}
    >
      {isHead ? (
        <HeaderCell
          colIndex={colIndex}
          schema={schema}
          onSelectAll={onSelectAll}
          onMenuChange={onMenuChange}
          onFilterChange={onFilterChange}
          updateColumnSchema={updateColumnSchema}
          reorderColumn={reorderColumn}
        />
      ) : (
        <BodyCell rowIndex={rowIndex} colIndex={colIndex} data={data} schema={schema} expandedState={expandedState} />
      )}
    </div>
  );
};

export default Cell;
