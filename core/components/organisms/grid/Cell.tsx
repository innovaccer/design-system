import * as React from 'react';
import classNames from 'classnames';
import { RowData, ColumnSchema, SortType } from './Grid';
import { Dropdown, Placeholder, PlaceholderParagraph, Text, Icon, Button, Tooltip, GridCell } from '@/index';
import { DropdownProps, GridCellProps, GridProps } from '@/index.type';
import { resizeCol, hasSchema } from './utility';
import { getDefaultCellSize, getWidth } from './columnUtility';
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
  expandedState: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
};

export type CellProps = (HeaderCellProps | BodyCellProps) & {
  isHead?: boolean;
  firstCell: boolean;
};

const isSorted = (sortingList: GridProps['sortingList'], name: ColumnSchema['name']) => {
  const listIndex = sortingList.findIndex(l => l.name === name);
  return listIndex !== -1 ? sortingList[listIndex].type : undefined;
};

const getMenuOptions = (pinned: ColumnSchema['pinned'], sorting: boolean, sorted?: SortType): DropdownProps['options'] => {
  const sortOptions: DropdownProps['options'] = React.useMemo(() => ([
    { label: 'Sort Ascending', value: 'sortAsc', icon: 'arrow_downward' },
    { label: 'Sort Descending', value: 'sortDesc', icon: 'arrow_upward' },
  ]), []);
  const pinOptions: DropdownProps['options'] = React.useMemo(() => ([
    { label: 'Pin Left', value: 'pinLeft', icon: 'skip_previous' },
    { label: 'Pin Right', value: 'pinRight', icon: 'skip_next' },
  ]), []);
  const hideOptions: DropdownProps['options'] = React.useMemo(() => ([
    { label: 'Hide Column', value: 'hide', icon: 'cancel' },
  ]), []);
  const unpinOption = React.useMemo(() => {
    return { label: 'Unpin', value: 'unpin', icon: 'replay' };
  }, []);
  const unsortOption = React.useMemo(() => {
    return { label: 'Unsort', value: 'unsort', icon: 'unfold_more' };
  }, []);

  if (pinned === 'left') pinOptions[0] = unpinOption;
  if (pinned === 'right') pinOptions[1] = unpinOption;
  if (sorted === 'asc') sortOptions[0] = unsortOption;
  if (sorted === 'desc') sortOptions[1] = unsortOption;

  let options: DropdownProps['options'] = [
    ...pinOptions,
    ...hideOptions
  ];
  if (sorting) options = [...sortOptions, ...options];

  return options;
}

const HeaderCell = React.memo((props: HeaderCellProps) => {
  const context = React.useContext(GridContext);
  const {
    schema,
    onMenuChange,
    onFilterChange,
    updateColumnSchema
  } = props;

  const {
    loading,
    draggable,
    showMenu,
    sortingList,
    filterList,
    headCellTooltip,
    showFilters,
    schema: schemaProp
  } = context;

  const {
    sorting = true,
    name,
    filters,
    pinned
  } = schema;

  const el = React.useRef<HTMLDivElement | null>(null);

  const isValidSchema = React.useMemo(() => hasSchema(schemaProp), [schemaProp]);
  const sorted = React.useMemo(() => {
    return isSorted(sortingList, name)
  }, [sortingList, name]);

  const options = React.useMemo(() => {
    return getMenuOptions(pinned, sorting, sorted);
  }, [pinned, sorting]);

  const filterOptions = React.useMemo(() => filters
    ? filters.map(f => ({
      ...f,
      selected: filterList[name] && filterList[name].findIndex(fl => fl === f.value) !== -1
    }))
    : [], [filters, filterList]);

  const renderLabel = React.useCallback(() => (
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
  ), [sorting, sorted]);

  const classes = classNames({
    'Grid-headCell': true,
    'Grid-headCell--draggable': draggable
  });

  const wrapperClickHandler = React.useCallback(() => {
    if (!loading && sorting) {
      if (sorted === 'asc') onMenuChange(name, 'sortDesc');
      if (sorted === 'desc') onMenuChange(name, 'unsort');
      if (!sorted) onMenuChange(name, 'sortAsc');
    }
  }, [loading, sorting, name]);

  const resizeMouseDownHandler = React.useCallback(() => {
    resizeCol({ updateColumnSchema }, name, el.current);
  }, [name, el]);

  return (
    <div
      className={classes}
      ref={el}
    >
      <div
        className="Grid-cellContent"
        onClick={wrapperClickHandler}
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
            )
            }
          </>
        )
        }
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
                  customTrigger: () => (
                    <Button
                      icon="filter_list"
                      appearance="transparent"
                    />
                  )
                }}
                options={filterOptions}
                align={'left'}
                onChange={(selected: any) => onFilterChange(name, selected)}
                minWidth={176}
              />
            </div>
          )
          }
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
                // key={`${name}-${sorted}-${pinned}`}
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
                onChange={(selected: any) => onMenuChange(name, selected)}
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
          onMouseDown={resizeMouseDownHandler}
        />
      )}
    </div>
  );
});

const BodyCell = React.memo((props: BodyCellProps) => {
  const context = React.useContext(GridContext);
  const {
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
  } = context;

  const [expanded, setExpanded] = expandedState;

  const cellProps: GridCellProps = {
    rowIndex,
    colIndex,
    size,
    schema,
    data,
    loading,
    expanded
  };

  const nestedProps = {
    data,
    rowIndex,
  };

  const isNestedRowDisabled = React.useMemo(() => !GridNestedRow(nestedProps), [nestedProps]);
  const nestedTriggerClickHandler = React.useCallback(e => {
    if (!isNestedRowDisabled) {
      e.stopPropagation();
      setExpanded(!expanded);
    }
  }, [isNestedRowDisabled, expanded]);

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
              onClick={nestedTriggerClickHandler}
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
            // key={`${rowIndex}-${colIndex}`}
            {...cellProps}
          />
        )}
    </div>
  );
});

export const Cell = React.memo((props: CellProps) => {
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
    reorderColumn
  } = props;

  const {
    draggable,
    separator,
    nestedRows,
    ref,
    withCheckbox
  } = context;

  const {
    name,
    hidden,
    pinned,
    cellType = 'DEFAULT'
  } = schema;

  if (hidden) return null;

  const {
    width: defaultWidth,
    minWidth: defaultMinWidth = 96,
    maxWidth: defaultMaxWidth = 800
  } = React.useMemo(() => getDefaultCellSize(cellType), [cellType]);

  const cellClass = classNames({
    'Grid-cell': true,
    'Grid-cell--head': isHead,
    'Grid-cell--body': !isHead,
    'Grid-cell--separator': !firstCell && (schema.separator !== undefined ? schema.separator : separator),
    'Grid-cell--nestedRow': !isHead && colIndex === 0 && nestedRows
  });

  const onDragStartHandler = React.useCallback(e => {
    if (draggable) {
      e.dataTransfer.setData('name', name);
      if (pinned) e.dataTransfer.setData('type', pinned);
    }
  }, [draggable, pinned]);

  const onDropHandler = React.useCallback(e => {
    if (draggable) {
      const from = {
        name: e.dataTransfer.getData('name'),
        type: e.dataTransfer.getData('type')
      };
      const to = {
        name,
        type: pinned || ''
      };

      if (from.type === to.type) reorderColumn(from.name, to.name);
    }
  }, [draggable]);

  const width = React.useMemo(() => {
    return getWidth({ ref, withCheckbox }, schema.width || defaultWidth);
  }, [ref, schema.width, defaultWidth]);
  const minWidth = React.useMemo(() => {
    return getWidth({ ref, withCheckbox }, schema.minWidth || defaultMinWidth);
  }, [ref, schema.width, defaultWidth]);
  const maxWidth = React.useMemo(() => {
    return getWidth({ ref, withCheckbox }, schema.maxWidth || defaultMaxWidth);
  }, [ref, schema.width, defaultWidth]);

  return (
    <div
      className={cellClass}
      draggable={isHead && draggable}
      onDragStart={onDragStartHandler}
      onDragOver={e => e.preventDefault()}
      onDrop={onDropHandler}
      style={{
        width,
        minWidth,
        maxWidth
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
        <BodyCell
          rowIndex={rowIndex}
          colIndex={colIndex}
          data={data}
          schema={schema}
          expandedState={expandedState}
        />
      )}
    </div>
  );
});

export default Cell;
