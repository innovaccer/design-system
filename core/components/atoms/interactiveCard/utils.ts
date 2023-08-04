export const removeItem = (targetItem: any, arr = []) => {
  return arr.filter((item: any) => item !== targetItem);
};
