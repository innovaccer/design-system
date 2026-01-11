import React, { createContext, useContext, useState, useCallback, useEffect, useMemo, memo, useRef } from 'react';
import { Card, Grid, Input, Select, EmptyState, Pagination, Button, Text, Checkbox } from '@/index';
import { debounce } from 'throttle-debounce';
import { GridProps, PaginationProps, InputProps, SelectProps, TableProps, GridCellProps } from '@/index.type';
// TODO: Update import path when copying - replace with your data fetching function
import { fetchUsersData } from './_common_/fetchData';
import noContent from '@innovaccer/mds-images/ui-states/404-nothing-here-3.svg';

/**
 * ============================================================================
 * TABLE FILTERING PATTERN WITH CUSTOM CHECKBOX - REUSABLE TEMPLATE
 * ============================================================================
 *
 * This component demonstrates a reusable table pattern with:
 * - Custom checkbox column using customCellRenderer
 * - Selective checkbox disabling (disable checkbox only, NOT the row)
 * - Search functionality
 * - Multiple filter dropdowns
 * - Sorting
 * - Pagination
 * - Async data fetching
 * - Manual selection state management
 *
 * KEY FEATURE: Custom checkbox implementation with selective disabling
 * - Uses customCellRenderer to add checkbox column
 * - Disables specific checkboxes while keeping rows fully interactive
 * - Row remains clickable and styled normally even when checkbox is disabled
 * - Perfect for view-only modes where certain rows can't be selected
 *
 * ADVANTAGES OVER BUILT-IN withCheckbox:
 * - Full control over checkbox behavior
 * - Can disable checkboxes without affecting row styling
 * - Row remains fully interactive (no disabled class on row)
 * - Custom selection logic per your requirements
 *
 * TO ADAPT FOR YOUR USE CASE:
 * 1. Update constants (PAGE_SIZE, filter options, etc.)
 * 2. Update TableContextType interface (add/remove filter fields)
 * 3. Update TableProvider state (add/remove filter state hooks)
 * 4. Update fetchData function import and implementation
 * 5. Update TableHeader component (add/remove filter Select components)
 * 6. Update TableContent schema (match your data structure)
 * 7. Update filterList keys to match schema filter fields
 * 8. Update isCheckboxDisabled function (define your checkbox disable logic)
 *
 * Look for TODO comments throughout the code for specific update points.
 * ============================================================================
 */

/**
 * ============================================================================
 * CONSTANTS - UPDATE THESE FOR YOUR USE CASE
 * ============================================================================
 */

// TODO: Adjust page size based on your requirements
const PAGE_SIZE = 10;
// TODO: Adjust debounce duration if needed
const PAGE_JUMP_DEBOUNCE_DURATION = 750;
// TODO: Adjust search debounce duration - delay before triggering search after user stops typing
const SEARCH_DEBOUNCE_DURATION = 500;

// TODO: Update filter options - Replace with your filter options
const ROLE_OPTIONS = [
  { label: 'Admin', value: 'Admin' },
  { label: 'User', value: 'User' },
];

const STATUS_OPTIONS = [
  { label: 'Active', value: 'Active' },
  { label: 'Inactive', value: 'Inactive' },
];

// TODO: Update status appearance mapping
const STATUS_APPEARANCE = {
  Active: 'success',
  Inactive: 'default',
} as const;

export const filteringPatternWithCustomCheckbox = () => {
  /**
   * ============================================================================
   * CONTEXT TYPE DEFINITION
   * ============================================================================
   */
  interface TableContextType {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    roleFilter: string[];
    setRoleFilter: (roles: string[]) => void;
    statusFilter: string[];
    setStatusFilter: (statuses: string[]) => void;
    fetchData: TableProps['fetchData'];
    currentPage: number;
    setCurrentPage: (page: number) => void;
    totalRecords: number;
    setTotalRecords: (records: number) => void;
    selectedRows: Set<number>;
    setSelectedRows: React.Dispatch<React.SetStateAction<Set<number>>>;
  }

  const TableContext = createContext<TableContextType | undefined>(undefined);

  const useTableContext = () => {
    const context = useContext(TableContext);
    if (!context) {
      throw new Error('useTableContext must be used within TableProvider');
    }
    return context;
  };

  interface TableProviderProps {
    children: React.ReactNode;
  }

  const TableProvider: React.FC<TableProviderProps> = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [roleFilter, setRoleFilter] = useState<string[]>([]);
    const [statusFilter, setStatusFilter] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalRecords, setTotalRecords] = useState<number>(0);
    const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

    // TODO: Replace fetchUsersData with your data fetching function
    const fetchData: TableProps['fetchData'] = useCallback(async (options: any) => {
      return fetchUsersData(options);
    }, []);

    const value: TableContextType = useMemo(
      () => ({
        searchTerm,
        setSearchTerm,
        roleFilter,
        setRoleFilter,
        statusFilter,
        setStatusFilter,
        fetchData,
        currentPage,
        setCurrentPage,
        totalRecords,
        setTotalRecords,
        selectedRows,
        setSelectedRows,
      }),
      [searchTerm, roleFilter, statusFilter, fetchData, currentPage, totalRecords, selectedRows]
    );

    return <TableContext.Provider value={value}>{children}</TableContext.Provider>;
  };

  /**
   * ============================================================================
   * SELECTION COUNTER COMPONENT (Separate to avoid re-rendering filters)
   * ============================================================================
   */
  const SelectionCounter: React.FC = memo(() => {
    const { selectedRows, setSelectedRows } = useTableContext();

    const handleClearSelection = useCallback(() => {
      setSelectedRows(new Set());
    }, [setSelectedRows]);

    if (selectedRows.size === 0) return null;

    return (
      <div className="d-flex align-items-center justify-content-between bg-primary-lighter p-5 border-bottom">
        <Text weight="medium">{`${selectedRows.size} row(s) selected`}</Text>
        <Button appearance="basic" size="tiny" onClick={handleClearSelection}>
          Clear Selection
        </Button>
      </div>
    );
  });
  SelectionCounter.displayName = 'SelectionCounter';

  /**
   * ============================================================================
   * TABLE HEADER COMPONENT (Filters - isolated from selection state)
   * ============================================================================
   */
  const TableHeader: React.FC = memo(() => {
    const { searchTerm, setSearchTerm, roleFilter, setRoleFilter, statusFilter, setStatusFilter } = useTableContext();

    const [localSearchTerm, setLocalSearchTerm] = useState<string>(searchTerm);
    const [localRoleFilter, setLocalRoleFilter] = useState<string[]>(roleFilter);
    const selectRef = useRef<React.ElementRef<typeof Select> | null>(null);

    useEffect(() => {
      setLocalSearchTerm(searchTerm);
    }, [searchTerm]);

    const debouncedSetSearchTermRef = useRef(
      debounce(SEARCH_DEBOUNCE_DURATION, (value: string) => {
        setSearchTerm(value);
      })
    );

    const handleSearchChange: InputProps['onChange'] = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setLocalSearchTerm(value);
        debouncedSetSearchTermRef.current(value);
      },
      [setSearchTerm]
    );

    const handleSearchClear = useCallback(() => {
      setLocalSearchTerm('');
      debouncedSetSearchTermRef.current.cancel();
      setSearchTerm('');
    }, [setSearchTerm]);

    useEffect(() => {
      setLocalRoleFilter(roleFilter);
    }, [roleFilter]);

    const handleRoleSelect: SelectProps['onSelect'] = useCallback((selectedOption: any) => {
      const selectedRoles = Array.isArray(selectedOption) ? selectedOption : [selectedOption];
      setLocalRoleFilter(selectedRoles.map((opt: any) => opt.value || opt));
    }, []);

    const handleRoleApply = useCallback(() => {
      setRoleFilter(localRoleFilter);
      if (selectRef.current) {
        selectRef.current.setOpen(false);
      }
    }, [localRoleFilter, setRoleFilter]);

    const handleRoleCancel = useCallback(() => {
      setLocalRoleFilter(roleFilter);
      if (selectRef.current) {
        selectRef.current.setOpen(false);
      }
    }, [roleFilter]);

    const handleRoleOutsideClick = useCallback(() => {
      setLocalRoleFilter(roleFilter);
    }, [roleFilter]);

    const handleRoleClear = useCallback(() => {
      setLocalRoleFilter([]);
      setRoleFilter([]);
    }, [setRoleFilter]);

    const handleStatusSelect: SelectProps['onSelect'] = useCallback(
      (selectedOption: any) => {
        const selectedStatuses = Array.isArray(selectedOption) ? selectedOption : [selectedOption];
        setStatusFilter(selectedStatuses.map((opt: any) => opt.value || opt));
      },
      [setStatusFilter]
    );

    const handleStatusClear = useCallback(() => {
      setStatusFilter([]);
    }, [setStatusFilter]);

    const rolePlaceholder = useMemo(
      () => (roleFilter.length > 0 ? `${roleFilter.length} role(s) selected` : 'Filter by Role'),
      [roleFilter.length]
    );

    const selectedRoleOptions = useMemo(
      () => ROLE_OPTIONS.filter((option) => localRoleFilter.includes(option.value)),
      [localRoleFilter]
    );

    const statusPlaceholder = useMemo(
      () => (statusFilter.length > 0 ? `${statusFilter.length} status(es) selected` : 'Filter by Status'),
      [statusFilter.length]
    );

    return (
      <div className="d-flex flex-column">
        <SelectionCounter />
        <div className="d-flex p-5">
          <div className="mr-4">
            <Input
              name="search"
              icon="search"
              placeholder="Search by name, email, or role"
              value={localSearchTerm}
              onChange={handleSearchChange}
              onClear={handleSearchClear}
              className="w-100"
            />
          </div>

          <Select
            ref={selectRef}
            triggerOptions={{
              placeholder: rolePlaceholder,
              onClear: handleRoleClear,
            }}
            multiSelect={true}
            onSelect={handleRoleSelect}
            onOutsideClick={handleRoleOutsideClick}
            value={selectedRoleOptions}
            className="mr-4"
          >
            <Select.List>
              {ROLE_OPTIONS.map((option) => (
                <Select.Option key={option.value} option={option}>
                  {option.label}
                </Select.Option>
              ))}
            </Select.List>
            <Select.Footer>
              <Button size="tiny" className="mr-4" appearance="basic" onClick={handleRoleCancel} type="button">
                Cancel
              </Button>
              <Button appearance="primary" size="tiny" onClick={handleRoleApply} type="button">
                Apply
              </Button>
            </Select.Footer>
          </Select>

          <Select
            triggerOptions={{
              placeholder: statusPlaceholder,
              onClear: handleStatusClear,
            }}
            multiSelect={false}
            onSelect={handleStatusSelect}
            className="mr-4"
          >
            <Select.List>
              {STATUS_OPTIONS.map((option) => (
                <Select.Option key={option.value} option={option}>
                  {option.label}
                </Select.Option>
              ))}
            </Select.List>
          </Select>
        </div>
      </div>
    );
  });
  TableHeader.displayName = 'TableHeader';

  /**
   * ============================================================================
   * TABLE CONTENT COMPONENT WITH CUSTOM CHECKBOX
   * ============================================================================
   */
  const TableContent: React.FC = memo(() => {
    const {
      fetchData,
      roleFilter,
      statusFilter,
      searchTerm,
      currentPage,
      setCurrentPage,
      totalRecords,
      setTotalRecords,
      selectedRows,
      setSelectedRows,
    } = useTableContext();

    const [data, setData] = useState<GridProps['data']>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [sortingList, setSortingList] = useState<GridProps['sortingList']>([]);
    const [hasActiveFilters, setHasActiveFilters] = useState<boolean>(false);

    const filterList = useMemo<GridProps['filterList']>(
      () => ({
        role: roleFilter,
        status: statusFilter,
      }),
      [roleFilter, statusFilter]
    );

    useEffect(() => {
      const hasFilters = roleFilter.length > 0 || statusFilter.length > 0 || searchTerm.trim().length > 0;
      setHasActiveFilters(hasFilters);
    }, [roleFilter, statusFilter, searchTerm]);

    /**
     * ============================================================================
     * CHECKBOX DISABLE LOGIC - CUSTOMIZE THIS FOR YOUR USE CASE
     * ============================================================================
     */
    // TODO: Update this function to define when checkboxes should be disabled
    // Examples:
    // - Disable based on status: row.status === 'Inactive'
    // - Disable based on role: row.role === 'Admin'
    // - Disable based on permission: !row.hasEditPermission
    const isCheckboxDisabled = useCallback((row: GridProps['data'][number]) => {
      // Example: Disable checkbox for inactive users
      return row.status === 'Inactive';
    }, []);

    /**
     * ============================================================================
     * CUSTOM CHECKBOX CELL RENDERER
     * ============================================================================
     */
    const CheckboxCellRenderer: React.FC<GridCellProps> = useCallback(
      (props: GridCellProps) => {
        const { data: rowData, rowIndex } = props;

        if (rowIndex === undefined) return null;

        const globalIndex = (currentPage - 1) * PAGE_SIZE + rowIndex;
        const isSelected = selectedRows.has(globalIndex);
        const isDisabled = isCheckboxDisabled(rowData);

        const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          event.stopPropagation();
          const checked = event.target.checked;

          setSelectedRows((prev: Set<number>) => {
            const newSet = new Set(prev);
            if (checked) {
              newSet.add(globalIndex);
            } else {
              newSet.delete(globalIndex);
            }
            return newSet;
          });
        };

        return (
          <div className="d-flex align-items-center" onClick={(e) => e.stopPropagation()}>
            <Checkbox checked={isSelected} disabled={isDisabled} onChange={handleCheckboxChange} />
          </div>
        );
      },
      [currentPage, selectedRows, isCheckboxDisabled, setSelectedRows]
    );

    /**
     * ============================================================================
     * HEADER CHECKBOX CELL RENDERER
     * ============================================================================
     */
    const HeaderCheckboxRenderer: React.FC<any> = useCallback(() => {
      const selectableRowsOnPage = data.filter((row) => !isCheckboxDisabled(row));
      const selectedRowsOnPage = data.filter(
        (row, index) => !isCheckboxDisabled(row) && selectedRows.has((currentPage - 1) * PAGE_SIZE + index)
      );

      const allSelected = selectableRowsOnPage.length > 0 && selectedRowsOnPage.length === selectableRowsOnPage.length;
      const someSelected = selectedRowsOnPage.length > 0 && selectedRowsOnPage.length < selectableRowsOnPage.length;

      const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checked = event.target.checked;

        setSelectedRows((prev: Set<number>) => {
          const newSet = new Set(prev);

          data.forEach((row, index) => {
            if (!isCheckboxDisabled(row)) {
              const globalIndex = (currentPage - 1) * PAGE_SIZE + index;
              if (checked) {
                newSet.add(globalIndex);
              } else {
                newSet.delete(globalIndex);
              }
            }
          });

          return newSet;
        });
      };

      return (
        <div className="d-flex align-items-center">
          <Checkbox
            checked={allSelected}
            indeterminate={someSelected}
            onChange={handleSelectAll}
            disabled={selectableRowsOnPage.length === 0}
          />
        </div>
      );
    }, [data, selectedRows, currentPage, isCheckboxDisabled, setSelectedRows]);

    /**
     * ============================================================================
     * SCHEMA DEFINITION WITH CUSTOM CHECKBOX COLUMN
     * ============================================================================
     */
    const schema = useMemo<GridProps['schema']>(
      () => [
        {
          name: '_checkbox',
          displayName: '',
          width: 48,
          cellRenderer: CheckboxCellRenderer,
          headerCellRenderer: HeaderCheckboxRenderer,
          resizable: false,
          sorting: false,
        },
        {
          name: 'name',
          displayName: 'Name',
          cellType: 'AVATAR_WITH_TEXT',
          translate: (rowData: GridProps['data'][number]) => ({
            title: `${rowData.firstName} ${rowData.lastName}`,
            firstName: rowData.firstName,
            lastName: rowData.lastName,
          }),
          sorting: true,
        },
        {
          name: 'email',
          displayName: 'Email',
          sorting: true,
        },
        {
          name: 'role',
          displayName: 'Role',
          sorting: true,
        },
        {
          name: 'status',
          displayName: 'Status',
          cellType: 'STATUS_HINT' as const,
          sorting: true,
          translate: (rowData: GridProps['data'][number]) => {
            const status = rowData.status as keyof typeof STATUS_APPEARANCE;
            return {
              title: status,
              statusAppearance: STATUS_APPEARANCE[status] || 'default',
            };
          },
        },
      ],
      [CheckboxCellRenderer, HeaderCheckboxRenderer]
    );

    // Reset page and selection when filters change
    useEffect(() => {
      setCurrentPage(1);
      setSelectedRows(new Set());
    }, [roleFilter, statusFilter, searchTerm, setCurrentPage, setSelectedRows]);

    /**
     * Fetch data when filters, sorting, pagination, or search changes
     */
    useEffect(() => {
      let cancelled = false;

      const loadData = async () => {
        setLoading(true);
        setError(false);

        try {
          if (!fetchData) throw new Error('fetchData is undefined');
          const result = await fetchData({
            page: currentPage,
            pageSize: PAGE_SIZE,
            filterList,
            sortingList,
            searchTerm,
          });

          if (!cancelled) {
            setData(result.data);
            setTotalRecords(result.totalRowsCount || result.count);
            setError(false);
          }
        } catch (err) {
          if (!cancelled) {
            setError(true);
            console.error('Error fetching data:', err);
          }
        } finally {
          if (!cancelled) {
            setLoading(false);
          }
        }
      };

      loadData();

      return () => {
        cancelled = true;
      };
    }, [fetchData, currentPage, filterList, sortingList, searchTerm]);

    const handleFilterListUpdate: GridProps['updateFilterList'] = useCallback(() => {
      setCurrentPage(1);
      setSelectedRows(new Set());
    }, [setCurrentPage, setSelectedRows]);

    const handleSortingListUpdate: GridProps['updateSortingList'] = useCallback(
      (newSortingList: GridProps['sortingList']) => {
        setSortingList(newSortingList);
        setCurrentPage(1);
      },
      [setCurrentPage]
    );

    const errorTemplate = useMemo(
      () => (
        <EmptyState>
          <EmptyState.Image src={noContent} />
          <EmptyState.Title>Failed to load data</EmptyState.Title>
          <EmptyState.Description>
            We are unable to fetch the data. Try again. If the issue persists, contact Innovaccer support.
          </EmptyState.Description>
          <EmptyState.Actions>
            <Button icon="refresh">Try again</Button>
          </EmptyState.Actions>
        </EmptyState>
      ),
      []
    );

    const emptyStateTemplate = useMemo(() => {
      if (hasActiveFilters) {
        return (
          <EmptyState>
            <EmptyState.Title>No results found</EmptyState.Title>
            <EmptyState.Description>
              Try adjusting your search or filters to find what you are looking for.
            </EmptyState.Description>
          </EmptyState>
        );
      }
      return (
        <EmptyState>
          <EmptyState.Title>No data available</EmptyState.Title>
          <EmptyState.Description>There is no data to display at this time.</EmptyState.Description>
        </EmptyState>
      );
    }, [hasActiveFilters]);

    return (
      <div className="overflow-auto flex-grow-1">
        {error && !loading ? (
          <div className="d-flex align-items-center justify-content-center h-100">{errorTemplate}</div>
        ) : (
          <>
            {!loading && !error && data.length === 0 ? (
              <div className="d-flex align-items-center justify-content-center h-100">{emptyStateTemplate}</div>
            ) : (
              <Grid
                schema={schema}
                loaderSchema={schema}
                data={data}
                size="standard"
                type="resource"
                loading={loading}
                error={false}
                errorTemplate={errorTemplate}
                showHead={true}
                showMenu={false}
                withPagination={false}
                page={currentPage}
                pageSize={PAGE_SIZE}
                totalRecords={totalRecords}
                sortingList={sortingList}
                updateSortingList={handleSortingListUpdate}
                filterList={filterList}
                updateFilterList={handleFilterListUpdate}
                showFilters={true}
                searchTerm={searchTerm}
                separator={false}
                // NOTE: withCheckbox is FALSE - we use custom checkbox column instead
                withCheckbox={false}
              />
            )}
          </>
        )}
      </div>
    );
  });
  TableContent.displayName = 'TableContent';

  const TableFooter: React.FC = memo(() => {
    const { currentPage, setCurrentPage, totalRecords } = useTableContext();

    const totalPages = useMemo(() => Math.ceil(totalRecords / PAGE_SIZE), [totalRecords]);

    const handlePageChange: PaginationProps['onPageChange'] = useCallback(
      (newPage: number) => {
        setCurrentPage(newPage);
      },
      [setCurrentPage]
    );

    if (totalPages <= 1) {
      return null;
    }

    return (
      <div className="d-flex justify-content-center w-100 py-4 align-items-center border-top">
        <Pagination
          type="jump"
          page={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          pageJumpDebounceDuration={PAGE_JUMP_DEBOUNCE_DURATION}
        />
      </div>
    );
  });
  TableFooter.displayName = 'TableFooter';

  return (
    <div className="vh-75">
      <TableProvider>
        <Card className="overflow-hidden h-100">
          <div className="d-flex flex-column h-100">
            <TableHeader />
            <TableContent />
            <TableFooter />
          </div>
        </Card>
      </TableProvider>
    </div>
  );
};

export default {
  title: 'Components/Table/Filtering Pattern With Custom Checkbox',
  parameters: {
    docs: {
      docPage: {
        tsxStory: true,
        title: 'Table Filters with Custom Checkbox (Selective Disabling)',
        description:
          'This pattern uses customCellRenderer to create a custom checkbox column with selective disabling. Unlike setting disabled on row data, this approach disables ONLY the checkbox while keeping the entire row fully interactive. No modifications to Grid/Table components required.',
        isPattern: true,
        props: {
          components: { Grid, Pagination, Select, EmptyState, Button, Input, Checkbox },
        },
      },
    },
  },
};
