import { Grid } from '@/index';
import { ColumnSchema, Pinned, SortType, CellType } from './Grid';

export const resizeCol = (_this: Grid, name: string, el: HTMLDivElement | null) => {
  const elX = el?.getBoundingClientRect().x;
  function resizable(ev: MouseEvent) {
    ev.preventDefault();
    if (elX) {
      _this.updateColumnSchema(name, {
        width: ev.pageX - elX
      });
    }
  }

  window.addEventListener('mousemove', resizable);
  window.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', resizable);
  });
};

export function sortColumn(this: Grid, name: ColumnSchema['name'], type: SortType) {
  let {
    sortingList
  } = this.props;

  const index = sortingList.findIndex(l => l.name === name);
  if (index !== -1) {
    sortingList = [
      ...sortingList.slice(0, index),
      ...sortingList.slice(index + 1),
    ];
  }

  if (type !== 'unsort') sortingList.push({ name, type });

  this.updateSortingList(sortingList);
}

export function pinColumn(this: Grid, name: ColumnSchema['name'], type: Pinned) {
  const schemaUpdate = {
    pinned: type !== 'unpin' ? type : undefined
  };

  this.updateColumnSchema(name, schemaUpdate);
}

export function hideColumn(this: Grid, name: ColumnSchema['name'], value: boolean) {
  const schemaUpdate = {
    hidden: value,
  };

  this.updateColumnSchema(name, schemaUpdate);
}

export function getWidth(this: Grid, width: React.ReactText) {
  if (typeof width === 'number') return width;
  if (width.charAt(width.length - 1) === '%') {
    if (this.gridRef.current) {
      const gridWidth = this.gridRef.current.clientWidth;
      return gridWidth * (+width.slice(0, -1) / 100);
    }
  }
  return 0;
}

export function getCellSize(cellType: CellType) {
  const sizes: Record<CellType, any> = {
    AVATAR: {
      width: 50,
      minWidth: 50
    },
    AVATAR_WITH_TEXT: {
      width: 250,
    },
    AVATAR_WITH_META_LIST: {
      width: 250,
    },
    ICON: {
      width: 50,
      minWidth: 50
    },
    STATUS_HINT: {
      width: 100,
    },
    WITH_META_LIST: {
      width: 200,
    },
    DEFAULT: {
      width: 200,
    },
  };

  return sizes[cellType];
}
