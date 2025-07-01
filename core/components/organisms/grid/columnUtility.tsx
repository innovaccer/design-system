import { GridProps } from '@/index.type';
import {
  ColumnSchema,
  Pinned,
  SortType,
  CellType,
  GridRef,
  updateColumnSchemaFunction,
  updateSortingListFunction,
} from './Grid';
import styles from '@css/components/grid.module.css';

type resizeColFn = (
  gridInfo: { updateColumnSchema: updateColumnSchemaFunction },
  name: ColumnSchema['name'],
  el: GridRef
) => void;
type sortColumnFn = (
  gridInfo: {
    sortingList: GridProps['sortingList'];
    updateSortingList: updateSortingListFunction;
  },
  name: ColumnSchema['name'],
  type: SortType
) => void;
type pinColumnFn = (
  gridInfo: { updateColumnSchema: updateColumnSchemaFunction },
  name: ColumnSchema['name'],
  type: Pinned
) => void;
type hideColumnFn = (
  gridInfo: { updateColumnSchema: updateColumnSchemaFunction },
  name: ColumnSchema['name'],
  value: boolean
) => void;

export const resizeCol: resizeColFn = ({ updateColumnSchema }, name, el) => {
  const elX = el?.getBoundingClientRect().x;
  function resizable(ev: MouseEvent) {
    ev.preventDefault();
    if (elX) {
      updateColumnSchema(name, {
        width: ev.pageX - elX,
      });
    }
  }

  window.addEventListener('mousemove', resizable);
  window.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', resizable);
  });
};

export const sortColumn: sortColumnFn = ({ sortingList, updateSortingList }, name, type) => {
  let newSortingList = [...sortingList];

  const index = newSortingList.findIndex((l) => l.name === name);
  if (index !== -1) {
    newSortingList = [...newSortingList.slice(0, index), ...newSortingList.slice(index + 1)];
  }

  if (type !== 'unsort') newSortingList.push({ name, type });

  updateSortingList(newSortingList);
};

export const pinColumn: pinColumnFn = ({ updateColumnSchema }, name: ColumnSchema['name'], type: Pinned) => {
  const schemaUpdate = {
    pinned: type !== 'unpin' ? type : undefined,
  };

  updateColumnSchema(name, schemaUpdate);
};

export const hideColumn: hideColumnFn = ({ updateColumnSchema }, name, value) => {
  const schemaUpdate = {
    hidden: value,
  };

  updateColumnSchema(name, schemaUpdate);
};

export function getWidth({ ref, withCheckbox }: { ref: GridRef; withCheckbox?: boolean }, width: string | number) {
  const isPercent = typeof width === 'string' && width.slice(-1) === '%';

  if (isPercent) {
    const checkboxCell = ref!.querySelector(`.${styles['Grid-cell--checkbox']}`);
    const checkboxWidth = withCheckbox ? checkboxCell?.clientWidth || 28 : 0;
    const gridWidth = ref!.clientWidth - checkboxWidth;
    return gridWidth * (+(width as string).slice(0, -1) / 100);
  }
  return width;
}

export function getCellSize(cellType: CellType) {
  const sizes: Record<CellType, any> = {
    AVATAR: {
      minWidth: 48,
    },
    AVATAR_WITH_TEXT: {
      width: 256,
    },
    AVATAR_WITH_META_LIST: {
      width: 256,
    },
    ICON: {
      minWdth: 48,
    },
    STATUS_HINT: {
      width: 96,
    },
    WITH_META_LIST: {
      width: 176,
    },
    DEFAULT: {
      width: 176,
    },
  };

  return sizes[cellType];
}
