import * as React from 'react';
import { Checkbox, Text, Input, Dropdown } from '@/index';
import { updateDataFn, updateSchemaFn, ColumnSchema, Schema, Data, onSelectAllFn } from './Grid';
import { getSelectAll } from './utility';

export interface ExternalHeaderProps {
  children?: React.ReactNode;
  withSearch?: boolean;
  searchPlaceholder?: string;
}

export interface HeaderProps extends ExternalHeaderProps {
  data: Data;
  schema: Schema;
  totalRecords?: number;
  withCheckbox?: boolean;
  showHead?: boolean;
  updateData?: updateDataFn;
  updateSchema?: updateSchemaFn;
  onSelectAll?: onSelectAllFn;
}

export const Header = (props: HeaderProps) => {
  const {
    data,
    schema,
    withSearch,
    showHead,
    withCheckbox,
    children,
    updateData,
    updateSchema,
    totalRecords = 0,
    onSelectAll,
    searchPlaceholder = 'Search'
  } = props;

  const filterSchema = schema.filter(s => s.filters);
  // const sortingSchema = schema.filter(s => s.sortFn);

  const [state, setState] = React.useState({
    // sortingList: [],
    filterList: {},
  });

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (updateData) {
      updateData({
        searchTerm: value
      });
    }
  };

  // const onSortChange = (name: ColumnSchema['name'], filters: any[]) => {
  //   const newFilterList = {
  //     ...state.filterList,
  //     [name]: filters
  //   };

  //   setState({
  //     ...state,
  //     filterList: newFilterList
  //   });

  //   if (updateData) {
  //     updateData({
  //       page: 1,
  //       filterList: newFilterList
  //     });
  //   }
  // };

  const onFilterChange = (name: ColumnSchema['name'], filters: any[]) => {
    const newFilterList = {
      ...state.filterList,
      [name]: filters
    };

    setState({
      ...state,
      filterList: newFilterList
    });

    if (updateData) {
      updateData({
        page: 1,
        filterList: newFilterList
      });
    }
  };

  const onHideColumn = (selected: any[]) => {
    const newSchema = schema.map(s => ({
      ...s,
      hidden: selected.findIndex(val => val === s.name) === -1
    }));

    if (updateSchema) updateSchema(newSchema);
  };

  const columnOptions = schema.map(s => ({
    label: s.displayName,
    value: s.name,
    selected: !s.hidden
  }));

  const selectedCount = data.filter(d => d._selected).length;
  const label = withCheckbox && selectedCount ? `Selected ${selectedCount} items on this page` : `Showing ${totalRecords} items`;

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

                  return (
                    <Dropdown
                      key={name}
                      checkboxes={true}
                      showApplyButton={true}
                      inlineLabel={displayName}
                      // icon={'filter_list'}
                      options={filters}
                      onChange={selected => onFilterChange(name, selected)}
                    />
                  );
                })}
              </div>
            )}
          </div>
        )}
        <div className="Header-actions">
          {children}
        </div>
      </div>
      <div className="Header-content Header-content--bottom">
        <div className="Header-label">
          {withCheckbox && (
            <Checkbox
              {...getSelectAll(data)}
              onChange={onSelectAll}
            />
          )}
          <Text small={true} weight={'medium'}>{label}</Text>
        </div>
        <div className="Header-hideColumns">
          <Dropdown
            triggerSize={'tiny'}
            checkboxes={true}
            showApplyButton={true}
            selected={columnOptions.filter(o => o.selected)}
            options={columnOptions}
            checkedValuesOffset={0}
            totalOptions={columnOptions.length}
            onChangeTriggerLabel={(selected, totalOptions) => `Showing ${selected} of ${totalOptions} columns`}
            onChange={selected => onHideColumn(selected)}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
