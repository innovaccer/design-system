// @ts-ignore
import image from './image.png';
import { GridProps } from '../../Grid';
import schema from './schema';

const loaderSchema: GridProps['loaderSchema'] = schema.filter((s) => {
  const { name, displayName, width, separator, cellType, cellRenderer, filters } = s;
  return {
    name,
    displayName,
    width,
    separator,
    cellType,
    cellRenderer,
    filters,
  };
});

export default loaderSchema;
