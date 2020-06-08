import { Grid } from '@/index';
import { ColumnSchema } from './Grid';

export const resizableCol = (_this: Grid, name: string, el: HTMLDivElement | null) => {
  function resizable(ev: MouseEvent) {
    ev.preventDefault();
    _this.updateColumnSchema(name, {
      width: ev.pageX - el!.getClientRects()[0].x
    });
  }

  window.addEventListener('mousemove', resizable);
  window.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', resizable);
  });
};

export const reorderCol = (_this: Grid, name: string, el: HTMLDivElement | null) => {
  const from = name;
  let to: string;

  const {
    schema
  } = _this.state;

  function reorder(ev: MouseEvent) {
    ev.preventDefault();
    const index = schema.findIndex(s => s.name === name);
    const cellType = schema[index].pinned ? 'pinned' : 'main';
    const columns = _this.gridRef.current!.querySelectorAll(`.Grid--${cellType} .Grid-head .Grid-cell.Grid-cell--head`);
    if (el) {
      columns.forEach(c => {
        const { x, width } = c.getClientRects()[0];
        if (c.contains(ev.target as Node)) {
          const { x: currX } = el.getClientRects()[0];
          // @ts-ignore
          let left = c.offsetLeft;
          if (currX < x) left += width;
          _this.updateReorderHighlighter(left);
          // @ts-ignore
          to = c.dataset.name;
        }
      });
    }
  }

  function stopReorder() {
    window.removeEventListener('mousemove', reorder);
    window.removeEventListener('mouseup', stopReorder);
    // _this.updateColumnSchema(name, { _selected: false });
    _this.updateReorderHighlighter(undefined);
    if (to && from !== to) _this.reorderCol(from, to);
  }

  // _this.updateColumnSchema(name, { _selected: true });
  window.addEventListener('mousemove', reorder);
  window.addEventListener('mouseup', stopReorder);
};

export function sortColumn(this: Grid, name: ColumnSchema['name'], type: 'asc' | 'desc') {
  let {
    sortingList
  } = this.state;

  const index = sortingList.findIndex(l => l.name === name);
  if (index === -1) {
    sortingList.push({ name, type });
  } else {
    sortingList = [
      ...sortingList.slice(0, index),
      ...sortingList.slice(index + 1),
      { name, type }
    ];
  }

  this.updateSortingList(sortingList);
}

export function pinColumn(this: Grid, name: ColumnSchema['name'], type: 'left' | 'right') {
  const schemaUpdate = {
    pinned: type === 'left' ? true : false
  };

  this.updateColumnSchema(name, schemaUpdate);
}

export function hideColumn(this: Grid, name: ColumnSchema['name'], value: boolean) {
  const schemaUpdate = {
    hidden: value,
  };

  this.updateColumnSchema(name, schemaUpdate);
}
