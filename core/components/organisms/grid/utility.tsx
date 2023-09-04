import { Data, Schema } from './Grid';
import { GridProps } from '@/index.type';
export * from './columnUtility';
export * from './rowUtility';

export const getTotalPages = (totalRecords: number, pageSize: number) => Math.ceil(totalRecords / pageSize);

export const getSelectAll = (tableData: Data, selectDisabledRow?: boolean) => {
  const data = tableData.filter((d) => (d.disabled && selectDisabledRow) || !d.disabled);

  if (data.length) {
    const anyUnSelected = data.some((d) => !d._selected);
    const allUnSelected = data.every((d) => !d._selected);

    const indeterminate = data.length >= 0 && anyUnSelected && !allUnSelected;
    const checked = !indeterminate && !allUnSelected;

    return { indeterminate, checked };
  }
  return { indeterminate: false, checked: false };
};

export const hasSchema = (schema: Schema): boolean => schema && !!schema.length;

export const getSchema = (
  schema: GridProps['schema'],
  loading: GridProps['loading'],
  loaderSchema: GridProps['loaderSchema']
): GridProps['schema'] => {
  let response = schema;
  if (!hasSchema(schema) && loading) {
    response = loaderSchema;
  }

  return response;
};

export const getPluralSuffix = (count: number) => (count > 1 ? 's' : '');
