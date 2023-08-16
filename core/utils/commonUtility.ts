export const moveToIndex = (arr: any[], from: number, to: number) => {
  if (from === to) return arr;

  let newArr = arr;
  if (from < to) {
    newArr = [...arr.slice(0, from), ...arr.slice(from + 1, to + 1), arr[from], ...arr.slice(to + 1)];
  } else {
    newArr = [...arr.slice(0, to), arr[from], ...arr.slice(to, from), ...arr.slice(from + 1)];
  }

  return newArr;
};
