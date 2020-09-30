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
  let sortingList = [...this.props.sortingList];

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
  if (width.charAt(width.length - 1) === '%' && this.state.init) {
    const {
      withCheckbox
    } = this.props;

    const checkboxWidth = withCheckbox ? this.gridRef!.querySelector('.Grid-cell--checkbox')!.clientWidth : 0;
    const gridWidth = this.gridRef!.clientWidth - checkboxWidth;
    return gridWidth * (+width.slice(0, -1) / 100);
  }
  return 0;
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
