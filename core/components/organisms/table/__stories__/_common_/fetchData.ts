import { FetchDataOptions, fetchDataFunction, RowData } from '@/components/organisms/grid';
import { mockUsersData } from './mockUsersData';

/**
 * Simulates an API call with filtering, sorting, search, and pagination
 * @param options - Fetch options including page, pageSize, filterList, sortingList, and searchTerm
 * @returns Promise with filtered, sorted, and paginated data
 */
export const fetchUsersData: fetchDataFunction = async (options: FetchDataOptions) => {
  const { page = 1, pageSize = 10, filterList = {}, sortingList = [], searchTerm = '' } = options;

  // Simulate API delay
  const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(1200); // Simulate network latency

  try {
    // Start with all data
    let filteredData: RowData[] = mockUsersData as RowData[];

    // Apply search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filteredData = filteredData.filter(
        (user: RowData) =>
          (user.firstName as string)?.toLowerCase().includes(searchLower) ||
          (user.lastName as string)?.toLowerCase().includes(searchLower) ||
          (user.email as string)?.toLowerCase().includes(searchLower) ||
          (user.role as string)?.toLowerCase().includes(searchLower)
      );
    }

    // Apply column filters
    if (filterList.role && filterList.role.length > 0) {
      filteredData = filteredData.filter((user: RowData) => filterList.role.includes(user.role as string));
    }
    if (filterList.status && filterList.status.length > 0) {
      filteredData = filteredData.filter((user: RowData) => filterList.status.includes(user.status as string));
    }

    // Apply sorting
    const sortedData = [...filteredData];
    if (sortingList.length > 0) {
      sortingList.forEach((sort) => {
        sortedData.sort((a, b) => {
          let aValue: any;
          let bValue: any;

          switch (sort.name) {
            case 'name':
              aValue = `${a.firstName} ${a.lastName}`;
              bValue = `${b.firstName} ${b.lastName}`;
              break;
            case 'email':
              aValue = a.email;
              bValue = b.email;
              break;
            case 'role':
              aValue = a.role;
              bValue = b.role;
              break;
            case 'status':
              aValue = a.status;
              bValue = b.status;
              break;
            default:
              aValue = a[sort.name];
              bValue = b[sort.name];
          }

          // Handle null/undefined values
          if (aValue == null && bValue == null) return 0;
          if (aValue == null) return 1;
          if (bValue == null) return -1;

          // Compare values
          if (typeof aValue === 'string' && typeof bValue === 'string') {
            const comparison = aValue.localeCompare(bValue);
            return sort.type === 'asc' ? comparison : -comparison;
          }

          if (aValue < bValue) return sort.type === 'asc' ? -1 : 1;
          if (aValue > bValue) return sort.type === 'asc' ? 1 : -1;
          return 0;
        });
      });
    }

    // Calculate total count before pagination
    const totalCount = sortedData.length;

    // Apply pagination
    let paginatedData = sortedData;
    if (page && pageSize) {
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      paginatedData = sortedData.slice(startIndex, endIndex);
    }

    return {
      searchTerm,
      count: totalCount,
      data: paginatedData,
      schema: [],
      totalRowsCount: totalCount,
    };
  } catch (error) {
    console.error('Error fetching users data:', error);
    throw error;
  }
};
