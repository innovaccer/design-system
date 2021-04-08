import Grid, { Data, Schema } from './Grid';
export * from './columnUtility';
export * from './rowUtility';

export const moveToIndex = (arr: any[], from: number, to: number) => {
  if (from === to) return arr;

  let newArr = arr;
  if (from < to) {
    newArr = [
      ...arr.slice(0, from),
      ...arr.slice(from + 1, to + 1),
      arr[from],
      ...arr.slice(to + 1)
    ];
  } else {
    newArr = [
      ...arr.slice(0, to),
      arr[from],
      ...arr.slice(to, from),
      ...arr.slice(from + 1)
    ];
  }

  return newArr;
};

export const getTotalPages = (totalRecords: number, pageSize: number) => Math.ceil(totalRecords / pageSize);

export const getSelectAll = (data: Data) => {
  if (data.length) {
    const anyUnSelected = data.some(d => !d._selected);
    const allUnSelected = data.every(d => !d._selected);

    const indeterminate = data.length >= 0 && anyUnSelected && !allUnSelected;
    const checked = !indeterminate && !allUnSelected;

    return { indeterminate, checked };
  }
  return { indeterminate: false, checked: false };
};

export const getInit = (schema: Schema): boolean => (schema && !!schema.length);

export const getSchema = (_this: Grid): Schema => {
  const {
    loading,
    loaderSchema
  } = _this.props;

  let {
    schema,
  } = _this.props;

  const init = getInit(schema);
  if (!init && loading) {
    schema = loaderSchema;
  }

  return schema;
};

export const getPluralSuffix = (count: number) => count > 1 ? 's' : '';
