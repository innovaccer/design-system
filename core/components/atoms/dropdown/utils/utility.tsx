const getSearchedOptions = (options: any, searchTerm: string) => {
  const result = options.filter((option: any) => option.label.toLowerCase().includes(searchTerm.toLowerCase()));
  return result;
};

export const getOptions = (offset: number, limit: number, searchTerm: string, options: any) => {
  const searchedOptions = searchTerm ? getSearchedOptions(options, searchTerm) : options;
  return new Promise(resolve => {
    resolve({
      offset,
      slicedOptions: searchedOptions.slice(offset, offset + limit),
      length: searchedOptions.length,
      options: searchedOptions,
    });
  });
};

export const getValuesFromSelectedObj = (selectedArray: any[] = []) => {
  const selectedValues: any[] = [];

  selectedArray.forEach((selectedObj: any) => {
    const { value } = selectedObj;
    selectedValues.push(value);
  });

  return selectedValues;
};

export const getIndexesFromSelectedObj = (selectedArray: any[] = []) => {
  return (Array.from(Array(selectedArray.length).keys()));
};

export const getValuesFromInd = (selectedArray: number[], options: any[]) => {
  const result: any[] = [];
  selectedArray.forEach(ind => {
    result.push(options[ind].value);
  });

  return result;
};

export const getLabelsFromSelectedObj = (options: any[]) => {
  const result: string[] = [];
  options.forEach(option => {
    result.push(option.label);
  });

  return result;
};
