import schema from './schema';

const loaderSchema = schema.filter((s) => {
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
