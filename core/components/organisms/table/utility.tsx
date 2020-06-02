import { Table } from '@/index';
import { StateSchema } from './Table';

export const resizeCol = (_this: Table, name: string, el: HTMLDivElement | null) => {
  function resize(ev: MouseEvent) {
    ev.preventDefault();
    _this.updateCellSchema(name, {
      // @ts-ignore
      width: ev.pageX - el.getClientRects()[0].x
    });
  }

  window.addEventListener('mousemove', resize);
  window.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', resize);
  });
};

export const reorderCol = (_this: Table, name: string, el: HTMLDivElement | null) => {
  const from = name;
  let to: string;

  function reorder(ev: MouseEvent) {
    ev.preventDefault();
    const index = _this.state.schema.findIndex(s => s.name === name);
    const cellType = _this.state.schema[index].pinned ? 'pinned' : 'main';
    const columns = _this.tableRef.current!.querySelectorAll(`.Table--${cellType} .Table-header .Table-cell.Table-cell--header`);
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
    _this.updateCellSchema(name, { selected: false });
    _this.updateReorderHighlighter(undefined);
    if (to && from !== to) _this.reorderSchema(from, to);
  }

  _this.updateCellSchema(name, { selected: true });
  window.addEventListener('mousemove', reorder);
  window.addEventListener('mouseup', stopReorder);
};

export function sortColumn(this: Table, name: StateSchema['name'], type: 'asc' | 'desc') {
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

  this.updateSortedList(sortingList);
}

export function pinColumn(this: Table, name: StateSchema['name'], type: 'left' | 'right') {
  const schemaUpdate = {
    pinned: type === 'left' ? true : false
  };

  this.updateCellSchema(name, schemaUpdate);
}

export function hideColumn(this: Table, name: StateSchema['name'], value: boolean) {
  const schemaUpdate = {
    hidden: value,
  };

  this.updateCellSchema(name, schemaUpdate);
}
