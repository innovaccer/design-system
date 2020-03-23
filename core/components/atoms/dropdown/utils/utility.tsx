
export const getOptions = (offset: number, limit: number, options: any) => {
  return new Promise(resolve => {
    resolve({
      offset,
      slicedOptions: options.slice(offset, offset + limit),
    });
  });
};
