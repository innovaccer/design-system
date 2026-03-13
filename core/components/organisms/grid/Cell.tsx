import * as React from 'react';
import classNames from 'classnames';
import { RowData, ColumnSchema, SortType } from './Grid';
import { Dropdown, Placeholder, PlaceholderParagraph, Text, Icon, Button, Tooltip, GridCell } from '@/index';
import { DropdownProps, GridCellProps } from '@/index.type';
import { resizeCol, hasSchema } from './utility';
import { getCellSize, getWidth } from './columnUtility';
import { GridHeadProps } from './GridHead';
import GridContext from './GridContext';
import { FilterSelect } from '../table/FilterSelect';
import styles from '@css/components/grid.module.css';

interface SharedCellProps {
  schema: ColumnSchema;
  colIndex: number;
  nestedRowData?: React.ReactNode;
}

type HeaderCellProps = SharedCellProps & {
  onSelectAll: GridHeadProps['onSelectAll'];
  onMenuChange: GridHeadProps['onMenuChange'];
  onFilterChange: GridHeadProps['onFilterChange'];
  updateColumnSchema: GridHeadProps['updateColumnSchema'];
  reorderColumn: GridHeadProps['reorderColumn'];
  setIsDragged: React.Dispatch<React.SetStateAction<boolean>>;
};

type BodyCellProps = SharedCellProps & {
  data: RowData;
  rowIndex: number;
  expandedState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
};

export type HeaderCellRendererProps = HeaderCellProps &
  SharedCellProps & {
    sortingList: {
      name: ColumnSchema['name'];
      type: SortType;
    }[];
  };

export type CellProps = Partial<HeaderCellProps> &
  Partial<BodyCellProps> &
  SharedCellProps & {
    isHead?: boolean;
    firstCell: boolean;
  };

const HeaderCell = (props: HeaderCellProps) => {
  const context = React.useContext(GridContext);

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

  const {
    schema,
    setIsDragged,
    colIndex,
    onSelectAll,
    onMenuChange,
    onFilterChange,
    updateColumnSchema,
    reorderColumn,
  } = props;

  const headProps: HeaderCellRendererProps = {
    schema,
    colIndex,
    onSelectAll,
    onMenuChange,
    onFilterChange,
    updateColumnSchema,
    reorderColumn,
    setIsDragged,
    sortingList,
  };

  const { sorting = true, name, filters, pinned, filterType = 'multiSelect', filterOptions } = schema;

  const isValidSchema = hasSchema(schemaProp);

  const listIndex = sortingList.findIndex((l) => l.name === name);
  const sorted = listIndex !== -1 ? sortingList[listIndex].type : null;

  const el = React.createRef<HTMLDivElement>();

  const sortOptions: DropdownProps['options'] = [
    { label: 'Sort Ascending', value: 'sortAsc', icon: 'arrow_upward' },
    { label: 'Sort Descending', value: 'sortDesc', icon: 'arrow_downward' },
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
    [styles['Grid-headCell']]: true,
    [styles['Grid-headCell--draggable']]: draggable,
  });

  const selectFilterOptions = filters
    ? filters.map((f) => ({
        label: f.label,
        value: f.value,
        id: f.value,
      }))
    : [];

  const renderLabel = () => (
    <>
      <Text weight="strong" className="ellipsis--noWrap">
        {schema.displayName}
      </Text>
      {sorting && (
        <div className={styles['Grid-sortingIcons']}>
          {sorted ? (
            sorted === 'asc' ? (
              <Icon name="arrow_upward" />
            ) : (
              <Icon name="arrow_downward" />
            )
          ) : (
            <Icon name="unfold_more" />
          )}
        </div>
      )}
    </>
  );

  const isSortable = !loading && sorting;
  const handleSortToggle = () => {
    if (!isSortable) return;
    if (sorted === 'asc') onMenuChange(name, 'sortDesc');
    if (sorted === 'desc') onMenuChange(name, 'unsort');
    if (!sorted) onMenuChange(name, 'sortAsc');
  };

  return (
    <div key={name} className={classes} ref={el}>
      <div
        className={styles['Grid-cellContent']}
        data-test="DesignSystem-Grid-cellContent"
        onClick={handleSortToggle}
        onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
          if (!isSortable) return;
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleSortToggle();
          }
        }}
        role={isSortable ? 'button' : undefined}
        tabIndex={isSortable ? 0 : -1}
        aria-disabled={!isSortable || undefined}
      >
        {loading && !isValidSchema ? (
          <Placeholder withImage={false}>
            <PlaceholderParagraph length="medium" />
          </Placeholder>
        ) : !schema.headerCellRenderer && headCellTooltip ? (
          <Tooltip position="top-start" triggerClass="w-100 overflow-hidden" tooltip={schema.displayName}>
            {renderLabel()}
          </Tooltip>
        ) : schema.headerCellRenderer && !headCellTooltip ? (
          schema.headerCellRenderer(headProps)
        ) : (
          renderLabel()
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
              <FilterSelect
                name={name}
                displayName=""
                filters={selectFilterOptions}
                filterList={filterList}
                onChange={(filterName, selected) => onFilterChange(filterName, selected)}
                filterOptions={{
                  selectionType: filterOptions?.selectionType || filterType,
                  minWidth: filterOptions?.minWidth,
                  maxWidth: filterOptions?.maxWidth,
                  maxVisibleSelection: filterOptions?.maxVisibleSelection,
                }}
                filterType={filterType}
                className="m-0"
                customTrigger={<Button icon="filter_list" appearance="transparent" />}
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
          className={styles['Grid-cellResize']}
          onMouseDown={() => {
            resizeCol({ updateColumnSchema }, name, el.current);
            setIsDragged(false);
          }}
          onKeyDown={(event: React.KeyboardEvent<HTMLSpanElement>) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              resizeCol({ updateColumnSchema }, name, el.current);
              setIsDragged(false);
            }
          }}
          role="button"
          tabIndex={0}
          aria-label={`Resize ${name} column`}
        />
      )}
    </div>
  );
};

const BodyCell = (props: BodyCellProps) => {
  const context = React.useContext(GridContext);
  const { data, schema, expandedState, rowIndex, colIndex, nestedRowData } = props;

  const { size, loading, nestedRows, showNestedRowTrigger } = context;

  const [expanded, setExpanded] = expandedState;

  const { verticalAlign } = schema;

  const cellProps: GridCellProps = {
    rowIndex,
    colIndex,
    size,
    schema,
    data,
    loading,
    expanded,
  };

  const cellClass = classNames({
    [styles['Grid-cellContent']]: true,
    ['align-items-start']: verticalAlign === 'top',
    ['align-items-end']: verticalAlign === 'bottom',
  });

  const NestedRowTrigger = () => {
    if (showNestedRowTrigger) {
      return (
        <Icon
          className={styles['Grid-nestedRowTrigger']}
          data-test="DesignSystem-Grid-nestedRowTrigger"
          name={expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
          size={20}
          appearance={'default'}
          onClick={(e) => {
            if (nestedRowData) {
              e.stopPropagation();
              setExpanded(!expanded);
            }
          }}
        />
      );
    }

    return null;
  };

  return (
    <div className={cellClass} data-test="DesignSystem-Grid-bodyCell">
      {colIndex === 0 && nestedRows && (
        <>{nestedRowData ? <NestedRowTrigger /> : <span className={styles['Grid-nestedRowPlaceholder']} />}</>
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
    data,
    rowIndex,
    colIndex,
    expandedState,
    onSelectAll,
    onMenuChange,
    onFilterChange,
    updateColumnSchema,
    reorderColumn,
    nestedRowData,
  } = props as CellProps;

  const { draggable, separator, nestedRows, ref, withCheckbox, showNestedRowTrigger } = context;

  const { name, hidden, pinned, cellType = 'DEFAULT' } = schema;

  const { width, minWidth = 96, maxWidth = 800 } = getCellSize(cellType);

  const [isDragged, setIsDragged] = React.useState<boolean>(false);

  const cellClass = classNames({
    [styles['Grid-cell']]: true,
    [styles['Grid-cell--head']]: isHead,
    [styles['Grid-cell--dragged']]: isDragged && draggable,
    [styles['Grid-cell--body']]: !isHead,
    [styles['Grid-cell--separator']]: !firstCell && (schema.separator !== undefined ? schema.separator : separator),
    [styles['Grid-cell--nestedRow']]: !isHead && colIndex === 0 && nestedRows && showNestedRowTrigger,
  });

  if (hidden) return null;

  return (
    <div
      key={`${rowIndex}-${colIndex}`}
      className={cellClass}
      draggable={isHead && draggable}
      onDragStart={(e) => {
        if (draggable) {
          setIsDragged(true);
          e.dataTransfer.setData('name', name);
          if (pinned) e.dataTransfer.setData('type', pinned);
        }
      }}
      onDrag={() => {
        setIsDragged(false);
      }}
      onDragOver={(e) => e.preventDefault()}
      onMouseUpCapture={() => {
        setIsDragged(false);
      }}
      onDragEnd={(e) => {
        e.preventDefault();
        setIsDragged(false);
      }}
      onDrop={(e) => {
        if (draggable) {
          setIsDragged(false);
          const from = {
            name: e.dataTransfer.getData('name'),
            type: e.dataTransfer.getData('type'),
          };
          const to = {
            name,
            type: pinned || '',
          };

          if (from.type === to.type && reorderColumn) reorderColumn(from.name, to.name);
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
          onMenuChange={onMenuChange!}
          onFilterChange={onFilterChange!}
          updateColumnSchema={updateColumnSchema!}
          reorderColumn={reorderColumn!}
          setIsDragged={setIsDragged}
        />
      ) : (
        <BodyCell
          rowIndex={rowIndex!}
          colIndex={colIndex}
          data={data!}
          schema={schema}
          expandedState={expandedState!}
          nestedRowData={nestedRowData}
        />
      )}
    </div>
  );
};

export default Cell;
