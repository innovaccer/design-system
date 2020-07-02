import * as React from 'react';
import classNames from 'classnames';
import { RowData, ColumnSchema } from './Grid';
import { Dropdown, Grid, Placeholder, PlaceholderParagraph, Heading, Icon, Button } from '@/index';
import { reorderCol, resizeCol, getInit } from './utility';
import { GridCell } from './GridCell';
import { DropdownProps } from '@/components/atoms/dropdown';

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
    showMenu,
    sortingList,
    filterList
  } = _this.props;

  const init = getInit(_this);

  const listIndex = sortingList.findIndex(l => l.name === schema.name);
  const sorted = listIndex !== -1 ? sortingList[listIndex].type : null;

  const el = React.createRef<HTMLDivElement>();

  const sortOptions: DropdownProps['options'] = [
    { label: 'Sort Ascending', value: 'sortAsc', icon: 'arrow_downward', optionType: 'WITH_ICON' },
    { label: 'Sort Descending', value: 'sortDesc', icon: 'arrow_upward', optionType: 'WITH_ICON' },
  ];
  let options: DropdownProps['options'] = [
    { label: 'Pin Left', value: 'pinLeft', icon: 'skip_previous', optionType: 'WITH_ICON' },
    { label: 'Pin Right', value: 'pinRight', icon: 'skip_next', optionType: 'WITH_ICON' },
    { label: 'Hide Column', value: 'hide', icon: 'cancel', optionType: 'WITH_ICON' },
  ];
  if (schema.sortFn) options = [...sortOptions, ...options];

  const classes = classNames({
    'Grid-headCell': true,
    'Grid-headCell--draggable': draggable
  });

  const filterOptions = schema.filters
    ? schema.filters.map(f => ({
      ...f,
      selected: filterList[schema.name] && filterList[schema.name].findIndex(fl => fl === f.value) !== -1
    }))
    : [];

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
              <Heading size="s">{schema.displayName}</Heading>
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
    'Grid-cell--separator': !(withCheckbox && colIndex === 0) && schema.separator,
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
