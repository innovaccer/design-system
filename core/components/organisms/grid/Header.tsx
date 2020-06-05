import * as React from 'react';
import { Checkbox, Text, Input, Dropdown } from '@/index';
import { updateDataFn, ColumnSchema, Schema, Data, onSelectAllFn } from './Grid';
import { getSelectAll } from './utility';

export interface HeaderProps {
  data: Data;
  schema: Schema;
  withCheckbox?: boolean;
  withSearch?: boolean;
  children?: React.ReactNode;
  updateData?: updateDataFn;
  onSelectAll?: onSelectAllFn;
  totalRecords?: number;
}

export const Header = (props: HeaderProps) => {
  const {
    data,
    schema,
    withSearch,
    children,
    updateData,
    totalRecords = 0,
    onSelectAll
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
        filterList: newFilterList
      });
    }
  };

  return (
    <div className="Header">
      {withSearch && (
        <div className="Header-content">
          <div className="Header-search">
            <Input
              name="GridHeader-search"
              icon="search"
              placeholder="Search"
              onChange={onSearchChange}
            />
          </div>
          {filterSchema.length > 0 && (
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
                    options={filters}
                    onChange={selected => onFilterChange(name, selected)}
                  />
                );
              })}
            </div>
          )}

          {children}
        </div>
      )}

      <div className="Header-label">
        <Checkbox
          {...getSelectAll(data)}
          onChange={onSelectAll}
        />
        <Text small={true} weight={'medium'}>{`Showing ${totalRecords} items`}</Text>
      </div>
    </div>
  );
};

export default Header;
