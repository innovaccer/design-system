import * as React from 'react';
import { debounce } from 'throttle-debounce';
import data from '@/components/organisms/grid/__stories__/_common_/data';
import './style.css';

export const tableWithHeader = () => {
  return (<></>);
};

const customCode = `/*
import * as React from 'react';
import { debounce } from 'throttle-debounce';
import {
  Card,
  Button,
  Label,
  Grid,
  Placeholder,
  PlaceholderParagraph,
  Dropdown,
  Input,
  Checkbox,
  Subheading,
  Icon,
  Pagination,
  DatePicker,
} from '@innovaccer/design-system';
import './style.css';

// styles.css
.Table-container {
  display: flex;
  height: 100%;
}

.Table-filters {
  box-sizing: border-box;
  display: flex;
  flex-shrink: 0;
}

.Table-filters--vertical {
  flex-direction: column;
  height: 100%;
  width: var(--spacing-9);
  padding: 0 var(--spacing-l);
}

.Table-filtersHeading {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.Table-filtersCloseIcon {
  cursor: pointer;
}

.Table-filters--vertical .Table-filter {
  padding: var(--spacing) 0;
}

.Table-filters--vertical .Table-filter:first-of-type {
  padding-top: var(--spacing-l);
}

.Table-filters--vertical .Table-filter:last-of-type {
  padding-bottom: var(--spacing-l);
}

.Table-filters--horizontal .Table-filter {
  padding: 0 var(--spacing-m);
}

.Table-filters--horizontal .Table-filter:first-of-type {
  padding-left: 0;
}

.Table-filters--horizontal .Table-filter:last-of-type {
  padding-right: 0;
}

.Table-filter .Input {
  min-width: unset;
}
*/

() => {
  const getSelectAll = (data) => {
    if (data.length) {
      const anyUnSelected = data.some(d => !d._selected);
      const allUnSelected = data.every(d => !d._selected);
  
      const indeterminate = data.length >= 0 && anyUnSelected && !allUnSelected;
      const checked = !indeterminate && !allUnSelected;
  
      return { indeterminate, checked };
    }
    return { indeterminate: false, checked: false };
  };
  
  const getTotalPages = (totalRecords, pageSize) => Math.ceil(totalRecords / pageSize);
  
  const getInit = schema => (schema && !!schema.length);

  const getPluralSuffix = (count) => count > 1 ? 's' : '';
  
  const updateBatchData = (data, rowIndexes, dataUpdate) => {
    const updatedData = [...data];
    for (const rowIndex of rowIndexes) {
      updatedData[rowIndex] = {
        ...updatedData[rowIndex],
        ...dataUpdate
      };
    }
  
    return updatedData;
  };

  const moveToIndex = (arr, from, to) => {
    if (from === to) return arr;
  
    let newArr = arr;
    if (from < to) {
      newArr = [
        ...arr.slice(0, from),
        ...arr.slice(from + 1, to + 1),
        arr[from],
        ...arr.slice(to + 1)
      ];
    } else {
      newArr = [
        ...arr.slice(0, to),
        arr[from],
        ...arr.slice(to, from),
        ...arr.slice(from + 1)
      ];
    }
  
    return newArr;
  };

  const DraggableDropdown = (props) => {
    const {
      options,
      onChange
    } = props;
  
    const [open, setOpen] = React.useState(false);
    const [tempOptions, setTempOptions] = React.useState(options);
    const [triggerWidth, setTriggerWidth] = React.useState('var(--spacing-8)');
  
    React.useEffect(() => {
      setTempOptions(options);
    }, [open]);
  
    const handleParentChange = (e) => {
      setTempOptions(tempOptions.map(option => ({ ...option, selected: e.target.checked })));
    };
  
    const handleChildChange = (e, index) => {
      const newOptions = [...tempOptions];
      newOptions[index] = {
        ...newOptions[index],
        selected: e.target.checked
      };
  
      setTempOptions(newOptions);
    };
  
    const onToggleHandler = (newOpen) => {
      setOpen(newOpen);
    };
  
    const onCancelHandler = () => {
      setOpen(false);
    };
  
    const onApplyHandler = () => {
      setOpen(false);
  
      if (onChange) onChange(tempOptions);
    };
  
    return (
      <div className="Dropdown">
        <Popover
          open={open}
          onToggle={onToggleHandler}
          trigger={(
            <Button
              ref={el => {
                // setTriggerWidth(\`\${el.clientWidth}px\`);
              }}
              size="tiny"
              appearance="transparent"
              icon="keyboard_arrow_down_filled"
              iconAlign="right"
            >
              {\`Showing \${options.filter(option => option.selected).length} of \${options.length} column\${getPluralSuffix(options.length)}\`}
            </Button>
          )}
          triggerClass="w-100"
          customStyle={{
            width: triggerWidth
          }}
          className="Header-draggableDropdown"
        >
          <div className="Dropdown-wrapper">
            <div className="OptionWrapper">
              <Checkbox
                className="OptionCheckbox"
                label="Select All"
                checked={tempOptions.every(option => option.selected)}
                indeterminate={tempOptions.some(option => option.selected)
                  && tempOptions.some(option => !option.selected)}
                onChange={handleParentChange}
              />
            </div>
            {tempOptions.map((option, index) => {
              return (
                <div
                  key={option.value}
                  className="OptionWrapper d-flex flex-space-between align-items-center cursor-pointer"
                  draggable={true}
                  onDragStart={e => {
                    e.dataTransfer.setData('index', \`\${index}\`);
                  }}
                  onDragOver={e => e.preventDefault()}
                  onDrop={e => {
                    const from = +e.dataTransfer.getData('index');
                    const to = index;
  
                    if (from !== to) setTempOptions(moveToIndex(tempOptions, from, to));
                  }}
                >
                  <Checkbox
                    className="OptionCheckbox"
                    name={option.value}
                    label={option.label}
                    checked={tempOptions[index].selected}
                    onChange={e => handleChildChange(e, index)}
                  />
                  <Icon name="drag_handle" className="mr-4" />
                </div>
              );
            })}
          </div>
          <div className="Dropdown-buttonWrapper">
            <Button className="mr-4" size="tiny" onClick={onCancelHandler}>Cancel</Button>
            <Button appearance="primary" size="tiny" onClick={onApplyHandler}>Apply</Button>
          </div>
        </Popover>
      </div>
    );
  };
  
  const Header = (props) => {
    const {
      loading,
      error,
      data,
      schema,
      showHead,
      withPagination,
      page,
      pageSize,
      withCheckbox,
      updateSchema,
      filterList = {},
      updateFilterList,
      totalRecords = 0,
      onSelectAll,
      searchPlaceholder,
      selectAll,
      searchTerm,
      updateSearchTerm,
      allowSelectAll,
      updateShowVerticalFilters
    } = props;
  
    const [selectAllRecords, setSelectAllRecords] = React.useState(false);
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
  
    const onSearchChange = e => {
      const value = e.target.value;
      if (updateSearchTerm) {
        updateSearchTerm(value);
      }
    };
  
    const onFilterChange = (name, filters) => {
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
  
    const onDynamicColumnUpdate = (options) => {
      const newSchema = options.map(option => ({
        ...schema.find(colSchema => colSchema.name === option.value),
        hidden: !option.selected
      }));
  
      if (updateSchema) updateSchema(newSchema);
    };
  
    const selectedCount = data.filter(d => d._selected).length;
    const startIndex = (page - 1) * pageSize + 1;
  const endIndex = Math.min(page * pageSize, totalRecords);
  const label = error
    ? \`Showing 0 items\`
    : withCheckbox && selectedCount
      ? selectAllRecords
        ? \`Selected all \${totalRecords} item\${getPluralSuffix(totalRecords)}\`
        : \`Selected \${selectedCount} item\${getPluralSuffix(totalRecords)} on this page\`
      : withPagination
        ? \`Showing \${startIndex}-\${endIndex} of \${totalRecords} item\${getPluralSuffix(totalRecords)}\`
        : \`Showing \${totalRecords} item\${getPluralSuffix(totalRecords)}\`;
  
    return (
      <div className="Header">
        <div className="Header-content Header-content--top">
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
          <div className="Header-dropdown">
            <div className="Table-filters Table-filters--horizontal">
              <div className="Table-filter">
                <Dropdown
                  key="name"
                  disabled={loading}
                  withCheckbox={true}
                  showApplyButton={true}
                  inlineLabel={"Name"}
                  options={[
                    { label: 'A-G', value: 'a-g', selected: true },
                    { label: 'H-R', value: 'h-r', selected: true },
                    { label: 'S-Z', value: 's-z', selected: true },
                  ]}
                  onChange={selected => onFilterChange("name", selected)}
                />
              </div>
              <div className="Table-filter">
                <Button
                  icon="add"
                  onClick={() => updateShowVerticalFilters(true)}
                >
                  More Filters
                </Button>
              </div>
            </div>
          </div>
          <div className="Header-actions">
          </div>
        </div>
        <div className="Header-content Header-content--bottom">
          <div className="Header-label">
            {showHead && !loading && (
              <Checkbox
                {...selectAll}
                onChange={event => {
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
                  {withPagination && selectAll.checked && allowSelectAll && (
                    <div className="ml-4">
                      {!selectAllRecords ? (
                        <Button
                          size="tiny"
                          onClick={() => setSelectAllRecords(true)}
                        >
                          {\`Select all \totalRecords} items\`}
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
          <div className="Header-hideColumns">
            <DraggableDropdown
              options={columnOptions}
              onChange={onDynamicColumnUpdate}
            />
          </div>
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
  
  class Table extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        data: [],
        schema: [],
        page: 1,
        totalRecords: 0,
        sortingList: props.sortingList || [],
        filterList: props.filterList || {},
        loading: true,
        error: false,
        selectAll: getSelectAll([]),
        searchTerm: undefined,
        showVerticalFilters: props.showVerticalFilters,
      };
  
      this.pageSize = 3;
      this.searchDebounceDuration = 750;
      this.debounceUpdate = debounce(this.searchDebounceDuration, this.updateDataFn);
    }

    componentDidMount() {
      this.updateData();
    }
  
    componentDidUpdate(_prevProps, prevState) {
      if (prevState.page !== this.state.page) {
        const { onPageChange } = this.props;
        if (onPageChange) onPageChange(this.state.page);
      }
  
      if (prevState.page !== this.state.page
        || prevState.filterList !== this.state.filterList
        || prevState.sortingList !== this.state.sortingList
        || prevState.searchTerm !== this.state.searchTerm) {
        if (!this.props.loading) this.updateData({});
      }
    }

    updateData() {
      this.setState({
        loading: true
      });
  
      this.debounceUpdate();
    }
  
    updateDataFn() {
      this.onSelect(-1, false);
  
      const {
        fetchData,
      } = this.props;
  
      const {
        page,
        sortingList,
        filterList,
        searchTerm
      } = this.state;
  
      const {
        pageSize
      } = this;
  
      const opts = {
        page,
        pageSize,
        sortingList,
        filterList,
        searchTerm,
      };
  
      this.setState({
        loading: true
      });
      if (fetchData) {
        fetchData(opts)
          .then((res) => {
            const data = res.data;
            const schema = this.state.schema.length ? this.state.schema : res.schema;
            this.setState({
              data,
              schema,
              selectAll: getSelectAll(data),
              totalRecords: res.count,
              loading: false,
              error: !data.length
            });
          })
          .catch(() => {
            this.setState({
              loading: false,
              error: true,
              data: []
            });
          });
      }
    }
  
    onSelect(rowIndexes, selected) {
      const {
        data
      } = this.state;
  
      const {
        onSelect
      } = this.props;
  
      const indexes = [rowIndexes];
      let newData = data;
      if (rowIndexes >= 0) {
        newData = updateBatchData(data, indexes, {
          _selected: selected
        });
  
        this.setState({
          data: newData,
          selectAll: getSelectAll(newData)
        });
      }
  
      if (onSelect) {
        onSelect(indexes, selected, rowIndexes === -1 ? [] : newData.filter(d => d._selected));
      }
    }
  
    onSelectAll(selected, selectAll) {
      const {
        onSelect
      } = this.props;
  
      const {
        data
      } = this.state;
  
      const indexes = Array.from({ length: data.length }, (_, i) => i);
  
      const newData = updateBatchData(data, indexes, {
        _selected: selected
      });
  
      if (onSelect) {
        onSelect(indexes, selected, newData.filter(d => d._selected), selectAll);
      }
  
      this.setState({
        data: newData,
        selectAll: getSelectAll(newData)
      });
    }
  
    onPageChange(newPage) {
      this.setState({
        page: newPage
      });
    }
  
    onFilterChange(name, selected) {
      const {
        filterList
      } = this.props;
  
      const newFilterList = {
        ...filterList,
        [name]: selected
      };
  
      this.updateFilterList(newFilterList);
    }
  
    updateShowVerticalFilters(val) {
      this.setState({
        showVerticalFilters: val
      });
    }
  
    updateSchema(newSchema) {
      this.setState({
        schema: newSchema
      });
    }
  
    updateSortingList(newSortingList) {
      const {
        multipleSorting
      } = this.props;
  
      this.setState({
        sortingList: multipleSorting ? [...newSortingList] : newSortingList.slice(-1),
        page: 1,
      });
    }
  
    updateFilterList(newFilterList) {
      this.setState({
        filterList: newFilterList,
        page: 1,
      });
    }
  
    updateSearchTerm(newSearchTerm) {
      this.setState({
        searchTerm: newSearchTerm,
        page: 1
      });
    }
  
    render() {
      const {
        loaderSchema,
      } = this.props;
  
      const withCheckbox = true;
      const withPagination = true;
      const {
        pageSize
      } = this;
  
      const {
        totalRecords,
        showVerticalFilters,
        loading
      } = this.state;
      const totalPages = getTotalPages(totalRecords, pageSize);
  
      return (
        <div className="Table-container">
          <div style={{ width: showVerticalFilters ? 'calc(100% - var(--spacing-9))' : '100%' }}>
            <Card className="Table overflow-hidden">
              <div className="Table-header">
                <Header
                  {...this.state}
                  updateSchema={this.updateSchema.bind(this)}
                  updateFilterList={this.updateFilterList.bind(this)}
                  updateSearchTerm={this.updateSearchTerm.bind(this)}
                  updateShowVerticalFilters={this.updateShowVerticalFilters.bind(this)}
                  onSelectAll={this.onSelectAll.bind(this)}
                  withCheckbox={withCheckbox}
                  withPagination={withPagination}
                  pageSize={pageSize}
                />
              </div>
              <div className="Table-grid">
                <Grid
                  {...this.state}
                  updateData={this.updateData.bind(this)}
                  updateSchema={this.updateSchema.bind(this)}
                  updateSortingList={this.updateSortingList.bind(this)}
                  updateFilterList={this.updateFilterList.bind(this)}
                  withCheckbox={withCheckbox}
                  onSelect={this.onSelect.bind(this)}
                  onSelectAll={this.onSelectAll.bind(this)}
                  showMenu={true}
                  type="data"
                  size="comfortable"
                  draggable={true}
                  withPagination={withPagination && totalPages > 1}
                  pageSize={pageSize}
                  loaderSchema={loaderSchema}
                />
              </div>
              {withPagination && (totalPages > 1) && (
                <div className="Table-pagination">
                  <Pagination
                    page={this.state.page}
                    totalPages={getTotalPages(totalRecords, pageSize)}
                    type="jump"
                    onPageChange={this.onPageChange.bind(this)}
                  />
                </div>
              )}
            </Card>
          </div>
          <div className={\`Table-filters Table-filters--vertical\${!showVerticalFilters ? ' d-none' : ''}\`}>
            <div className="Table-filtersHeading">
              <Subheading>Filters</Subheading>
              <Icon name="close" className="Table-filtersCloseIcon" onClick={() => this.setState({ showVerticalFilters: false })} />
            </div>
            <div>
              <div className="Table-filter">
                <Dropdown
                  key="gender"
                  disabled={loading}
                  withCheckbox={true}
                  showApplyButton={true}
                  inlineLabel={"Gender"}
                  options={[
                    { label: 'Male', value: 'male', selected: true },
                    { label: 'Female', value: 'female', selected: true },
                  ]}
                  onChange={selected => this.onFilterChange("gender", selected)}
                />
              </div>
              <div className="Table-filter">
                <DatePicker
                  withInput={true}
                  label="Date"
                  inputOptions={{
                    placeholder: "mm/dd/yyyy",
                    disabled: loading,
                    minWidth: 'unset'
                  }}
                  onDateChange={(_date, dateStr) => this.onFilterChange("date", dateStr)}
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  const translateData = (schema, data) => {
    let newData = data;

    if (schema.translate) {
      const translatedData = schema.translate(data);
      newData = {
        ...newData,
        [schema.name]: typeof translatedData === 'object' ? {
          ...newData[schema.name],
          ...translatedData
        } : translatedData
      };
    }
    if (typeof newData[schema.name] !== 'object') newData[schema.name] = { title: newData[schema.name] };

    return newData;
  }

  const onFilterChange = {
    "name": (a, filters) => {
      for (const filter of filters) {
        switch (filter) {
          case 'a-g':
            if (a.firstName[0].toLowerCase() >= 'a' && a.firstName[0].toLowerCase() <= 'g') return true;
            break;
          case 'h-r':
            if (a.firstName[0].toLowerCase() >= 'h' && a.firstName[0].toLowerCase() <= 'r') return true;
            break;
          case 's-z':
            if (a.firstName[0].toLowerCase() >= 's' && a.firstName[0].toLowerCase() <= 'z') return true;
            break;
        }
      }
      return false;
    },
    "gender": (a, filters) => {
      for (const filter of filters) {
        if (a.gender.toLowerCase() === filter) return true;
      }
      return false;
    }
  };

  const filterData = (data, filterList) => {
    let filteredData = data;
    if (filterList) {
      Object.keys(filterList).forEach(name => {
        const filters = filterList[name];
        const onChange = onFilterChange[name];
        if (onChange) {
          filteredData = filteredData.filter(d => onChange(d, filters));
        }
      });
    }

    return filteredData;
  };

  const sortData = (schema, data, sortingList) => {
    const sortedData = [...data];
    sortingList.forEach(l => {
      const sIndex = schema.findIndex(s => s.name === l.name);
      if (sIndex !== -1) {
        const defaultComparator = (a, b) => {
          const aData = translateData(schema[sIndex], a);
          const bData = translateData(schema[sIndex], b);
          return aData[l.name].title.localeCompare(bData[l.name].title);
        };

        const {
          comparator = defaultComparator
        } = schema[sIndex];

        sortedData.sort(comparator);
        if (l.type === 'desc') sortedData.reverse();
      }
    });

    return sortedData;
  };

  const paginateData = (data, page, pageSize) => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginatedData = data.slice(start, end);
    return paginatedData;
  };

  const data = ${JSON.stringify(data.slice(0, 10), null, 4)};

  const schema = [
    {
      name: 'name',
      displayName: 'Name',
      width: 300,
      resizable: true,
      separator: true,
      tooltip: true,
      translate: a => ({
        title: \`\${a.firstName} \${a.lastName}\`,
        firstName: a.firstName,
        lastName: a.lastName
      }),
      cellType: 'AVATAR_WITH_TEXT',
    },
    {
      name: 'email',
      displayName: 'Email',
      width: 350,
      resizable: true,
      sorting: false,
      cellType: 'WITH_META_LIST'
    },
    {
      name: 'gender',
      displayName: 'Gender',
      width: 200,
      resizable: true,
      comparator: (a, b) => a.gender.localeCompare(b.gender),
      cellType: 'STATUS_HINT',
      translate: a => ({
        title: a.gender,
        statusAppearance: (a.gender === 'Female') ? 'alert' : 'success'
      }),
    },
    {
      name: 'icon',
      displayName: 'Icon',
      width: 100,
      resizable: true,
      align: 'center',
      cellType: 'ICON',
      translate: _ => ({
        icon: 'events'
      })
    },
    {
      name: 'customCell',
      displayName: 'Custom Cell',
      width: 200,
      resizable: true,
      separator: true,
      cellRenderer: (props) => {
        const {
          loading
        } = props;

        if (loading) return <></>;

        return (
          <Button appearance={'primary'}>Button</Button>
        );
      }
    },
  ];

  const fetchData = (options) => {
    const {
      page,
      pageSize,
      sortingList,
      filterList,
      searchTerm
    } = options;

    const onSearch = (d, searchTerm = '') => {
      return (
        d.firstName.toLowerCase().match(searchTerm.toLowerCase())
        || d.lastName.toLowerCase().match(searchTerm.toLowerCase())
      );

      return true;
    }

    const filteredData = filterData(data, filterList);
    const searchedData = filteredData.filter(d => onSearch(d, searchTerm));
    const sortedData = sortData(schema, searchedData, sortingList);

    if (page && pageSize) {
      return new Promise(resolve => {
        window.setTimeout(() => {
          const start = (page - 1) * pageSize;
          const end = start + pageSize;
          const slicedData = sortedData.slice(start, end);
          resolve({
            searchTerm,
            schema,
            count: sortedData.length,
            data: slicedData,
          });
        }, 2000);
      });
    }

    return new Promise(resolve => {
      window.setTimeout(() => {
        resolve({
          searchTerm,
          schema,
          count: sortedData.length,
          data: sortedData,
        });
      }, 2000);
    });
  }

  const loaderSchema = schema.filter(s => {
    const { name, displayName, width, separator, cellType, cellRenderer } = s;
    return {
      name, displayName, width, separator, cellType, cellRenderer
    };
  });

  return (
    <div
      style={{
        height: '350px',
        background: 'var(--secondary-lightest)'
      }}
    >
      <Table
        loaderSchema={loaderSchema}
        fetchData={fetchData}
      />
    </div>
  );
}`

export default {
  title: 'Patterns/Table/Table With Header',
  parameters: {
    docs: {
      docPage: {
        title: 'Table with header',
        customCode,
        imports: {
          debounce: debounce
        },
        props: {
          exclude: ['showHead'],
        },
        noProps: true,
        noSandbox: true
      }
    }
  }
};
