import * as React from 'react';
import { Checkbox, Label, Input, Dropdown, Button, Divider } from '@/index';
import {
  updateSchemaFunction,
  ColumnSchema,
  Schema,
  Data,
  onSelectAllFunction,
  GridProps,
  updateFilterListFunction,
  RowData,
} from '../grid/Grid';
import { hasSchema, getPluralSuffix } from '../grid/utility';
import { DraggableDropdown } from './DraggableDropdown';
import { DropdownProps } from '@/index.type';
import classNames from 'classnames';
import tableStyles from '@css/components/table.module.css';
import gridStyles from '@css/components/grid.module.css';

export interface ExternalHeaderProps {
  children?: React.ReactNode;
  withSearch?: boolean;
  searchPlaceholder?: string;
  dynamicColumn?: boolean;
  allowSelectAll?: boolean;
  customSelectionLabel?: string;
  globalActionRenderer?: (data: Data) => React.ReactNode;
  selectionActionRenderer?: (selectedRows: RowData[], selectAll?: boolean) => React.ReactNode;
}

export type updateSearchTermFunction = (newSearchTerm: string) => void;

export interface HeaderProps extends ExternalHeaderProps {
  loading?: boolean;
  error?: boolean;
  data: Data;
  displayData: Data;
  schema: Schema;
  selectAll?: GridProps['selectAll'];
  totalRecords: number;
  withPagination?: boolean;
  page: number;
  pageSize: number;
  withCheckbox?: boolean;
  showHead?: boolean;
  // updateData?: updateDataFunction;
  updateSchema?: updateSchemaFunction;
  filterList?: GridProps['filterList'];
  showFilters: boolean;
  updateFilterList?: updateFilterListFunction;
  onSelectAll?: onSelectAllFunction;
  searchTerm?: string;
  updateSearchTerm?: updateSearchTermFunction;
  selectedRowsRef?: React.MutableRefObject<any>;
  selectedAllRef?: React.MutableRefObject<any>;
  onClearSelection?: () => void;
  onSelectAllRows?: () => void;
  uniqueColumnName?: string;
  totalRowsCount?: number;
  enableInfiniteScroll?: boolean;
}

export const Header = (props: HeaderProps) => {
  const {
    loading,
    error,
    data,
    displayData,
    schema,
    withSearch,
    showHead,
    withPagination,
    page,
    pageSize,
    withCheckbox,
    children,
    // updateData,
    updateSchema,
    filterList = {},
    updateFilterList,
    totalRecords = 0,
    onSelectAll,
    searchPlaceholder,
    selectAll,
    searchTerm,
    updateSearchTerm,
    globalActionRenderer,
    dynamicColumn,
    allowSelectAll,
    showFilters,
    customSelectionLabel,
    selectedRowsRef,
    selectedAllRef,
    onClearSelection,
    onSelectAllRows,
    selectionActionRenderer,
    uniqueColumnName,
    totalRowsCount,
    enableInfiniteScroll,
  } = props;

  const [selectAllRecords, setSelectAllRecords] = React.useState<boolean>(false);
  const [flag, setFlag] = React.useState(true);
  const customLabel = customSelectionLabel ? customSelectionLabel : 'item';
  const selectedCount = data.filter((d) => d._selected).length;
  const startIndex = (page - 1) * pageSize + 1;
  const endIndex = Math.min(page * pageSize, totalRecords);
  const selectedRowsCount = selectedAllRef?.current === true ? totalRecords : selectedRowsRef?.current?.length || 0;

  const showSelectedRowLabel = withCheckbox && (selectedCount || selectedRowsCount > 0);

  const [showSelectedLabel, setShowSelectedLabel] = React.useState(true);
  const [animateSelectedLabel, setAnimateSelectedLabel] = React.useState(false);
  const [animateUnSelectedLabel, setAnimateUnSelectedLabel] = React.useState(false);

  React.useEffect(() => {
    if (showSelectedRowLabel) {
      setAnimateUnSelectedLabel(true);
      setAnimateSelectedLabel(false);
    } else {
      setAnimateUnSelectedLabel(false);
      setAnimateSelectedLabel(true);
    }
  }, [showSelectedRowLabel]);

  const onUnSelectAnimationEnd = () => {
    showSelectedRowLabel ? setShowSelectedLabel(true) : setShowSelectedLabel(false);
    setAnimateSelectedLabel(true);
    setAnimateUnSelectedLabel(false);
  };

  const onSelectAnimationEnd = () => {
    showSelectedRowLabel ? setShowSelectedLabel(true) : setShowSelectedLabel(false);
    setAnimateSelectedLabel(false);
    setAnimateUnSelectedLabel(true);
  };

  const unselectedRowLabelClass = classNames({
    [tableStyles['Table-Header-Label--hide']]: animateUnSelectedLabel && showSelectedRowLabel,
    [tableStyles['Table-Header-Label--show']]: animateUnSelectedLabel && !showSelectedRowLabel,
  });

  const selectedRowLabelClass = classNames({
    [tableStyles['Table-Header-Label--hide']]: animateSelectedLabel && !showSelectedRowLabel,
    [tableStyles['Table-Header-Label--show']]: animateSelectedLabel && showSelectedRowLabel,
  });

  React.useEffect(() => {
    setFlag(!flag);
  }, [schema]);

  React.useEffect(() => {
    if (selectAll && selectAll.checked) {
      if (onSelectAll) onSelectAll(true, selectAllRecords);
    }
  }, [selectAllRecords]);

  React.useEffect(() => {
    if (selectAll && !selectAll.checked) setSelectAllRecords(false);
  }, [selectAll]);

  const filterSchema = schema.filter((s) => s.filters);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (updateSearchTerm) {
      updateSearchTerm(value);
    }
  };

  const onFilterChange = (name: ColumnSchema['name'], filters: any[]) => {
    const newFilterList = {
      ...filterList,
      [name]: filters,
    };

    if (updateFilterList) {
      updateFilterList(newFilterList);
    }
  };

  const columnOptions = schema.map((s) => ({
    label: s.displayName,
    value: s.name,
    selected: !s.hidden,
  }));

  const onDynamicColumnUpdate = (options: DropdownProps['options']) => {
    const newSchema = options.map(
      (option) =>
        ({
          ...schema.find((colSchema) => colSchema.name === option.value),
          hidden: !option.selected,
          /* tslint:disable:no-object-literal-type-assertion */
        }) as ColumnSchema
    );
    /* tslint:enable:no-object-literal-type-assertion */

    if (updateSchema) updateSchema(newSchema);
  };

  const getUnSelectedRowLabel = () => {
    if (error) {
      return `Showing 0 ${customLabel}s`;
    } else if (withPagination) {
      return `Showing ${startIndex}-${endIndex} of ${totalRecords} ${customLabel}${getPluralSuffix(totalRecords)}`;
    } else if (enableInfiniteScroll && totalRowsCount) {
      return `Showing ${totalRecords} of ${totalRowsCount} ${customLabel}${getPluralSuffix(totalRecords)}`; // here
    }
    return `Showing ${totalRecords} ${customLabel}${getPluralSuffix(totalRecords)}`; // here
  };

  const getSelectedRowLabel = () => {
    if (selectedRowsCount > 0 && uniqueColumnName && withCheckbox) {
      return `Selected ${selectedRowsCount} ${customLabel}${getPluralSuffix(selectedRowsCount)}`;
    } else if (selectedCount && !uniqueColumnName && withCheckbox) {
      return `Selected ${selectedCount} ${customLabel}${getPluralSuffix(selectedCount)}`;
    } else if (withPagination) {
      return `Showing ${startIndex}-${endIndex} of ${totalRecords} ${customLabel}${getPluralSuffix(totalRecords)}`;
    }
    return `Showing ${totalRecords} ${customLabel}${getPluralSuffix(totalRecords)}`;
  };

  const headerClasses = classNames(gridStyles['Header-content'], gridStyles['Header-content--bottom']);
  const tableDividerClasses = classNames(tableStyles['Table-Header--Divider'], 'mx-4');

  return (
    <div className={gridStyles['Header']}>
      <div className={gridStyles['Header-content']}>
        <div className="d-flex w-100">
          {withSearch && (
            <div className={gridStyles['Header-search']}>
              <Input
                data-test="DesignSystem-Table-Header--withSearch"
                name="GridHeader-search"
                icon="search"
                placeholder={searchPlaceholder}
                onChange={onSearchChange}
                value={searchTerm}
                onClear={() => updateSearchTerm && updateSearchTerm('')}
                disabled={loading && !hasSchema(schema)}
                autoComplete="off"
              />
            </div>
          )}
          {showFilters && filterSchema.length > 0 && (
            <div className={gridStyles['Header-dropdown']}>
              <div className={gridStyles['Header-filters']}>
                {filterSchema.map((s) => {
                  const { name, displayName, filters } = s;

                  const filterOptions = filters
                    ? filters.map((f) => ({
                        ...f,
                        selected: filterList[name] && filterList[name].findIndex((fl) => fl === f.value) !== -1,
                      }))
                    : [];

                  return (
                    <Dropdown
                      key={name}
                      withCheckbox={true}
                      className="my-0 mx-3"
                      showApplyButton={true}
                      inlineLabel={displayName}
                      icon={'filter_list'}
                      options={filterOptions}
                      onChange={(selected) => onFilterChange(name, selected)}
                    />
                  );
                })}
              </div>
            </div>
          )}
          {children && <div className={gridStyles['Header-actions']}>{children}</div>}
        </div>
        {globalActionRenderer && (
          <div className={gridStyles['Header-global-actions']}>{globalActionRenderer(displayData)}</div>
        )}
      </div>
      <div className={headerClasses}>
        <div className={gridStyles['Header-label']}>
          {!showHead && withCheckbox && !loading && (
            <Checkbox
              className="mr-4"
              {...selectAll}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                if (onSelectAll) onSelectAll(event.target.checked);
              }}
            />
          )}
          {
            <>
              {showSelectedLabel ? (
                <span className={selectedRowLabelClass} onAnimationEnd={onSelectAnimationEnd}>
                  <Label>{getSelectedRowLabel()}</Label>
                </span>
              ) : (
                <span className={unselectedRowLabelClass} onAnimationEnd={onUnSelectAnimationEnd}>
                  <Label>{getUnSelectedRowLabel()}</Label>
                </span>
              )}

              {selectedRowsCount > 0 && allowSelectAll && showSelectedLabel && (
                <div className={selectedRowLabelClass}>
                  <div className="ml-4 d-flex">
                    <Button
                      data-test="DesignSystem-Table-Header--selectAllItemsButton"
                      size="tiny"
                      disabled={selectedRowsCount === totalRecords}
                      onClick={onSelectAllRows}
                    >
                      {`Select ${totalRecords} ${customLabel}s`}
                    </Button>

                    <Button
                      data-test="DesignSystem-Table-Header--clearSelectionItemsButton"
                      size="tiny"
                      className="ml-4"
                      onClick={onClearSelection}
                    >
                      Clear selection
                    </Button>
                    {selectionActionRenderer && <Divider vertical={true} className={tableDividerClasses} />}
                  </div>
                </div>
              )}

              {selectionActionRenderer && selectedRowsCount > 0 && showSelectedLabel && (
                <div data-test="DesignSystem-Table-Header--ActionRenderer" className={selectedRowLabelClass}>
                  {selectionActionRenderer(selectedRowsRef?.current, selectedAllRef?.current)}
                </div>
              )}
            </>
          }
        </div>
        {dynamicColumn && (
          <div>
            <DraggableDropdown options={columnOptions} onChange={onDynamicColumnUpdate} />
          </div>
        )}
      </div>
    </div>
  );
};

Header.defaultProps = {
  schema: [],
  data: [],
  searchPlaceholder: 'Search',
  dynamicColumn: true,
  showFilters: true,
};

export default Header;
