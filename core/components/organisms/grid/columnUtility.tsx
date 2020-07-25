import { Grid } from '@/index';
import { ColumnSchema, Pinned, SortType } from './Grid';

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
