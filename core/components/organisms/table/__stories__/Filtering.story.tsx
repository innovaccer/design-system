import React, { createContext, useContext, useState, useCallback, useEffect, useMemo, memo, useRef } from 'react';
import { Card, Grid, Input, Select, EmptyState, Pagination, Button } from '@/index';
import { debounce } from 'throttle-debounce';
import { SelectMethods } from '@/components/organisms/select/Select';

import { GridProps, PaginationProps, InputProps, SelectProps, TableProps } from '@/index.type';
// TODO: Update import path when copying - replace with your data fetching function
import { fetchUsersData } from './_common_/fetchData';

/**
 * ============================================================================
 * TABLE FILTERING PATTERN - REUSABLE TEMPLATE
 * ============================================================================
 *
 * This component demonstrates a reusable table pattern with:
 * - Search functionality
 * - Multiple filter dropdowns
 * - Sorting
 * - Pagination
 * - Async data fetching
 *
 * TO ADAPT FOR YOUR USE CASE:
 * 1. Update constants (PAGE_SIZE, filter options, etc.)
 * 2. Update TableContextType interface (add/remove filter fields)
 * 3. Update TableProvider state (add/remove filter state hooks)
 * 4. Update fetchData function import and implementation
 * 5. Update TableHeader component (add/remove filter Select components)
 * 6. Update TableContent schema (match your data structure)
 * 7. Update filterList keys to match schema filter fields
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
// TODO: Adjust virtual row options if using virtualization
const VIRTUAL_ROW_OPTIONS = {
  visibleRows: 10,
  buffer: 5,
};
// TODO: Adjust infinite scroll options if using infinite scroll
const INFINITE_SCROLL_OPTIONS = {
  fetchRowsCount: 10,
  fetchThreshold: 'balanced' as const,
};

// TODO: Update filter options - Replace with your filter options
// These should match the filter fields in your data schema
const ROLE_OPTIONS = [
  { label: 'Admin', value: 'Admin' },
  { label: 'User', value: 'User' },
];

const STATUS_OPTIONS = [
  { label: 'Active', value: 'Active' },
  { label: 'Inactive', value: 'Inactive' },
];

// TODO: Update status appearance mapping - Map your status values to appearance types
const STATUS_APPEARANCE = {
  Active: 'success',
  Inactive: 'default',
} as const;

export const filtering = () => {
  /**
   * ============================================================================
   * CONTEXT TYPE DEFINITION - UPDATE FILTER FIELDS FOR YOUR USE CASE
   * ============================================================================
   */
  // TODO: Add/remove filter state fields based on your filter requirements
  // Example: If you need a "department" filter, add:
  //   departmentFilter: string[];
  //   setDepartmentFilter: (departments: string[]) => void;
  interface TableContextType {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    // TODO: Update filter field names - Replace 'roleFilter' with your filter field name
    roleFilter: string[];
    setRoleFilter: (roles: string[]) => void;
    // TODO: Update filter field names - Replace 'statusFilter' with your filter field name
    statusFilter: string[];
    setStatusFilter: (statuses: string[]) => void;
    fetchData: TableProps['fetchData'];
    currentPage: number;
    setCurrentPage: (page: number) => void;
    totalRecords: number;
    setTotalRecords: (records: number) => void;
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
    // TODO: Add/remove filter state hooks based on your filter requirements
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [roleFilter, setRoleFilter] = useState<string[]>([]);
    const [statusFilter, setStatusFilter] = useState<string[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalRecords, setTotalRecords] = useState<number>(0);

    // TODO: Replace fetchUsersData with your data fetching function
    // This function should accept FetchDataOptions and return Promise with data, count, schema, etc.
    const fetchData: TableProps['fetchData'] = useCallback(async (options) => {
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
      }),
      [searchTerm, roleFilter, statusFilter, fetchData, currentPage, totalRecords]
    );

    return <TableContext.Provider value={value}>{children}</TableContext.Provider>;
  };

  /**
   * ============================================================================
   * TABLE HEADER COMPONENT - UPDATE FILTER CONTROLS FOR YOUR USE CASE
   * ============================================================================
   */
  const TableHeader: React.FC = memo(() => {
    // TODO: Update destructured values to match your filter fields
    const { searchTerm, setSearchTerm, roleFilter, setRoleFilter, statusFilter, setStatusFilter } = useTableContext();

    // Local state for immediate input updates (for better UX)
    const [localSearchTerm, setLocalSearchTerm] = useState<string>(searchTerm);

    // Local state for role filter with Apply/Cancel pattern
    const [localRoleFilter, setLocalRoleFilter] = useState<string[]>(roleFilter);
    const selectRef = useRef<SelectMethods | null>(null);

    // Sync local state with context when context changes externally (e.g., clear)
    useEffect(() => {
      setLocalSearchTerm(searchTerm);
    }, [searchTerm]);

    // Create debounced function to update context search term
    const debouncedSetSearchTermRef = useRef(
      debounce(SEARCH_DEBOUNCE_DURATION, (value: string) => {
        setSearchTerm(value);
      })
    );

    const handleSearchChange: InputProps['onChange'] = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // Update local state immediately for responsive UI
        setLocalSearchTerm(value);
        // Debounce the context update to avoid excessive API calls
        debouncedSetSearchTermRef.current(value);
      },
      [setSearchTerm]
    );

    const handleSearchClear = useCallback(() => {
      setLocalSearchTerm('');
      // Cancel any pending debounced calls and clear immediately
      debouncedSetSearchTermRef.current.cancel();
      setSearchTerm('');
    }, [setSearchTerm]);

    // Sync local role filter with context when context changes externally
    useEffect(() => {
      setLocalRoleFilter(roleFilter);
    }, [roleFilter]);

    // TODO: Update filter handlers - Add/remove handlers for each filter field
    // Each filter needs: handleXxxSelect, handleXxxClear handlers
    /**
     * Role filter with Apply/Cancel pattern:
     * - Uses localRoleFilter for temporary selections (not applied until Apply is clicked)
     * - Apply: Updates context filter (triggers data fetch) and closes dropdown
     * - Cancel: Resets local filter to context filter and closes dropdown
     * - Outside click: Resets local filter to context filter (same as Cancel)
     * - Clear: Immediately clears both local and context filters
     */
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

    // TODO: Update placeholder text to match your filter labels
    const rolePlaceholder = useMemo(
      () => (roleFilter.length > 0 ? `${roleFilter.length} role(s) selected` : 'Filter by Role'),
      [roleFilter.length]
    );

    // Get selected role options for Select component
    const selectedRoleOptions = useMemo(
      () => ROLE_OPTIONS.filter((option) => localRoleFilter.includes(option.value)),
      [localRoleFilter]
    );

    const statusPlaceholder = useMemo(
      () => (statusFilter.length > 0 ? `${statusFilter.length} status(es) selected` : 'Filter by Status'),
      [statusFilter.length]
    );

    return (
      <div className="d-flex p-5">
        <div className="mr-4">
          {/* TODO: Update search placeholder text to describe what fields are searchable */}
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

        {/* TODO: Update filter Select components - Add/remove Select components for each filter */}
        {/* TODO: Update multiSelect prop - Set to true for multi-select, false for single-select */}
        {/* TODO: Update options constant - Replace ROLE_OPTIONS with your filter options constant */}
        {/* Role filter with multi-select and Apply/Cancel actions */}
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
    );
  });
  TableHeader.displayName = 'TableHeader';

  /**
   * ============================================================================
   * TABLE CONTENT COMPONENT - UPDATE SCHEMA AND DATA HANDLING FOR YOUR USE CASE
   * ============================================================================
   */
  const TableContent: React.FC = memo(() => {
    // TODO: Update destructured values to match your filter fields
    const {
      fetchData,
      roleFilter,
      statusFilter,
      searchTerm,
      currentPage,
      setCurrentPage,
      totalRecords,
      setTotalRecords,
    } = useTableContext();

    const [data, setData] = useState<GridProps['data']>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [sortingList, setSortingList] = useState<GridProps['sortingList']>([]);

    // TODO: Update filterList keys to match your filter field names
    // The keys should match the filter field names in your schema
    const filterList = useMemo<GridProps['filterList']>(
      () => ({
        role: roleFilter,
        status: statusFilter,
        // TODO: Add more filter fields here if needed
        // Example: department: departmentFilter,
      }),
      [roleFilter, statusFilter]
    );

    /**
     * ============================================================================
     * SCHEMA DEFINITION - UPDATE THIS TO MATCH YOUR DATA STRUCTURE
     * ============================================================================
     */
    // TODO: Replace entire schema array with your column definitions
    // Each column should have: name, displayName, and optional properties like:
    //   - cellType: 'AVATAR_WITH_TEXT' | 'STATUS_HINT' | 'DEFAULT' | etc.
    //   - sorting: boolean
    //   - filters: filter options array (if filterable)
    //   - onFilterChange: filter function
    //   - translate: data transformation function
    const schema = useMemo<GridProps['schema']>(
      () => [
        {
          name: 'name',
          displayName: 'Name',
          cellType: 'AVATAR_WITH_TEXT',
          // TODO: Update translate function to match your data structure
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
          // TODO: Update translate function to match your status appearance mapping
          translate: (rowData: GridProps['data'][number]) => {
            const status = rowData.status as keyof typeof STATUS_APPEARANCE;
            return {
              title: status,
              statusAppearance: STATUS_APPEARANCE[status] || 'default',
            };
          },
        },
        // TODO: Add more columns as needed
      ],
      []
    );

    // TODO: Update dependency array to include all your filter fields
    // Reset page when filters or search term changes
    useEffect(() => {
      setCurrentPage(1);
    }, [roleFilter, statusFilter, searchTerm, setCurrentPage]);

    // Fetch data when filters, sorting, pagination, or search changes
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
            setError(result.data.length === 0);
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
      // Note: Filters are managed through context, but this callback is required by Grid
      setCurrentPage(1);
    }, [setCurrentPage]);

    const handleSortingListUpdate: GridProps['updateSortingList'] = useCallback(
      (newSortingList: GridProps['sortingList']) => {
        setSortingList(newSortingList);
        setCurrentPage(1);
      },
      [setCurrentPage]
    );

    // TODO: Customize error template - Update error message and image as needed
    const errorTemplate = useMemo(
      () => (
        <EmptyState>
          <EmptyState.Image src="static/media/mds-images/ui-states/404-nothing-here-3.svg" />
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

    return (
      <div className="overflow-auto flex-grow-1">
        <Grid
          schema={schema}
          loaderSchema={schema}
          data={data}
          size="standard"
          // TODO: Update Grid type - 'resource' for clickable rows, 'data' for non-clickable
          type="resource"
          loading={loading}
          error={error}
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
          virtualRowOptions={VIRTUAL_ROW_OPTIONS}
          // TODO: Enable virtualization if dealing with large datasets
          enableRowVirtualization={false}
          infiniteScrollOptions={INFINITE_SCROLL_OPTIONS}
          // TODO: Enable infinite scroll if needed instead of pagination
          enableInfiniteScroll={false}
          separator={false}
          // TODO: Enable checkbox if row selection is needed
          withCheckbox={false}
          selectAll={{
            checked: false,
            indeterminate: false,
          }}
        />
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

  /**
   * All these components are defined above in this code only.
   * You need to copy the complete file content to use in your project.
   */
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
  title: 'Components/Table/Filtering',
  parameters: {
    docs: {
      docPage: {
        tsxStory: true,
        title: 'Table Filters',
        description:
          'This is a table filtering pattern, composed with Grid and Pagination, all states are managed through context.',
        isPattern: true,
        props: {
          components: { Grid, Pagination, Select, EmptyState, Button, Input },
        },
      },
    },
  },
};
