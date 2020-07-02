import { Grid } from '@/index';
import { ColumnSchema, Pinned } from './Grid';

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

export const reorderCol = (_this: Grid, name: string, el: HTMLDivElement | null) => {
  const from = name;
  let to: string;

  const {
    schema
  } = _this.props;

  const getColumns = () => (
    _this.gridRef.current!.querySelectorAll(`.Grid-cellGroup--${cellType} .Grid-cell.Grid-cell--head`)
  );

  const sI = schema.findIndex(s => s.name === name);
  const cellType = schema[sI].pinned ? 'pinned' : 'main';
  const cols = getColumns();
  const colRect: any[] = [];
  cols.forEach(c => {
    colRect.push(c.getBoundingClientRect());
  });
  const currX = el?.getBoundingClientRect().x;

  function reorder(ev: MouseEvent) {
    ev.preventDefault();

    if (el) {
      const columns = getColumns();
      columns.forEach((c, index) => {
        const { x, width } = colRect[index];

        if (currX && c.contains(ev.target as Node)) {
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
  } = this.props;

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

export function pinColumn(this: Grid, name: ColumnSchema['name'], type: Pinned) {
  const schemaUpdate = {
    pinned: type === 'left' ? 'left' as Pinned : undefined
  };

  this.updateColumnSchema(name, schemaUpdate);
}

export function hideColumn(this: Grid, name: ColumnSchema['name'], value: boolean) {
  const schemaUpdate = {
    hidden: value,
  };

  this.updateColumnSchema(name, schemaUpdate);
}
