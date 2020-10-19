import * as React from 'react';
import { Checkbox, Label, Input, Dropdown, Placeholder, PlaceholderParagraph, Button } from '@/index';
import {
  updateSchemaFunction,
  ColumnSchema,
  Schema,
  Data,
  onSelectAllFunction,
  GridProps,
  updateFilterListFunction
} from './Grid';
import { getInit } from './utility';
import { DraggableDropdown } from './DraggableDropdown';
import { DropdownProps } from '@/index.type';

export interface ExternalHeaderProps {
  children?: React.ReactNode;
  withSearch?: boolean;
  searchPlaceholder?: string;
  dynamicColumn?: boolean;
  allowSelectAll?: boolean;
}

export type updateSearchTermFunction = (newSearchTerm: string) => void;

export interface HeaderProps extends ExternalHeaderProps {
  loading?: boolean;
  error?: boolean;
  data: Data;
  schema: Schema;
  selectAll?: GridProps['selectAll'];
  totalRecords: number;
  withPagination?: boolean;
  withCheckbox?: boolean;
  showHead?: boolean;
  // updateData?: updateDataFunction;
  updateSchema?: updateSchemaFunction;
  filterList?: GridProps['filterList'];
  updateFilterList?: updateFilterListFunction;
  onSelectAll?: onSelectAllFunction;
  searchTerm?: string;
  updateSearchTerm?: updateSearchTermFunction;
}

export const Header = (props: HeaderProps) => {
  const {
    loading,
    error,
    data,
    schema,
    withSearch,
    showHead,
    withPagination,
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
    dynamicColumn,
    allowSelectAll
  } = props;

  const [selectAllRecords, setSelectAllRecords] = React.useState<boolean>(false);
  const [flag, setFlag] = React.useState(true);

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

  const filterSchema = schema.filter(s => s.filters);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (updateSearchTerm) {
      updateSearchTerm(value);
    }
  };

  const onFilterChange = (name: ColumnSchema['name'], filters: any[]) => {
    const newFilterList = {
      ...filterList,
      [name]: filters
    };

    if (updateFilterList) {
      updateFilterList(newFilterList);
    }
  };

  const columnOptions = schema.map(s => ({
    label: s.displayName,
    value: s.name,
    selected: !s.hidden
  }));

  const onDynamicColumnUpdate = (options: DropdownProps['options']) => {
    const newSchema = options.map(option => ({
      ...schema.find(colSchema => colSchema.name === option.value),
      hidden: !option.selected
    /* tslint:disable:no-object-literal-type-assertion */
    } as ColumnSchema));
    /* tslint:enable:no-object-literal-type-assertion */

    if (updateSchema) updateSchema(newSchema);
  };

  const selectedCount = data.filter(d => d._selected).length;
  const label = withCheckbox && selectedCount ?
    selectAllRecords ? `Selected all ${totalRecords} items` : `Selected ${selectedCount} items on this page`
    : `Showing ${!error ? totalRecords : 0} items`;

  return (
    <div className="Header">
      <div className="Header-content Header-content--top">
        {withSearch && (
          <div className="Header-search">
            <Input
              name="GridHeader-search"
              icon="search"
              placeholder={searchPlaceholder}
              onChange={onSearchChange}
              value={searchTerm}
              onClear={() => updateSearchTerm && updateSearchTerm('')}
              disabled={loading && !getInit(schema)}
            />
          </div>
        )}
        {!showHead && (
          <div className="Header-dropdown">
            {/* {sortingSchema.length > 0 && (
              <div className="Header-sorting">
                {sortingSchema.map(s => {
                  const {
                    name,
                    displayName,
                    filters
                  } = s;

                  return (
                    <Dropdown
                      key={name}
                      checkboxes={true}
                      showApplyButton={true}
                      placeholder={displayName}
                      icon={'sort'}
                      options={filters}
                      onChange={selected => onSortChange(name, selected)}
                    />
                  );
                })}
              </div>
            )} */}
            {!showHead && filterSchema.length > 0 && (
              <div className="Header-filters">
                {filterSchema.map(s => {
                  const {
                    name,
                    displayName,
                    filters
                  } = s;

                  const filterOptions = filters
                    ? filters.map(f => ({
                      ...f,
                      selected: filterList[name] && filterList[name].findIndex(fl => fl === f.value) !== -1
                    }))
                    : [];

                  return (
                    <Dropdown
                      key={name}
                      withCheckbox={true}
                      showApplyButton={true}
                      inlineLabel={displayName}
                      icon={'filter_list'}
                      options={filterOptions}
                      onChange={selected => onFilterChange(name, selected)}
                    />
                  );
                })}
              </div>
            )}
          </div>
        )}
        {children && (
          <div className="Header-actions">
            {children}
          </div>
        )}
      </div>
      <div className="Header-content Header-content--bottom">
        <div className="Header-label">
          {!showHead && withCheckbox && !loading && (
            <Checkbox
              {...selectAll}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                if (onSelectAll) onSelectAll(event.target.checked);
              }}
            />
          )}
          {loading ? (
            <Placeholder withImage={!showHead && withCheckbox}>
              <PlaceholderParagraph length={'small'} size={'s'} />
            </Placeholder>
          ) : (
              <>
                <Label>{label}</Label>
                {withPagination && selectAll?.checked && allowSelectAll && (
                  <div className="ml-4">
                    {!selectAllRecords ? (
                      <Button
                        size="tiny"
                        onClick={() => setSelectAllRecords(true)}
                      >
                        {`Select all ${totalRecords} items`}
                      </Button>
                    ) : (
                        <Button
                          size="tiny"
                          onClick={() => setSelectAllRecords(false)}
                        >
                          Clear Selection
                        </Button>
                      )
                    }
                  </div>
                )}
              </>
            )
          }
        </div>
        {dynamicColumn && (
          <div className="Header-hideColumns">
            <DraggableDropdown
              options={columnOptions}
              onChange={onDynamicColumnUpdate}
            />
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
  dynamicColumn: true
};

export default Header;
