export const removeItem = (targetItem: string, arr: string[]) => {
  return arr.filter((item: string) => item !== targetItem);
};

export const handleMultiSelect = (
  selectedOptions: string[],
  isItemSelected: boolean,
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>,
  id: string
) => {
  let resultList = [...selectedOptions];
  if (isItemSelected) {
    resultList = removeItem(id, selectedOptions);
  } else {
    resultList.push(id);
  }
  setSelectedOptions(resultList);
};

export const handleSingleSelect = (
  selectedOptions: string[],
  isItemSelected: boolean,
  setSelectedOptions: React.Dispatch<React.SetStateAction<string[]>>,
  id: string
) => {
  let resultList = [...selectedOptions];
  if (isItemSelected) {
    resultList = [];
  } else {
    resultList = [id];
  }

  setSelectedOptions(resultList);
};
