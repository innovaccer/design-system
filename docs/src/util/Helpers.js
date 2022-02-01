export function debounce(func, delay = 500) {
  let timerId;
  return function () {
    clearTimeout(timerId)
    timerId = setTimeout(() => func.apply(this, arguments), delay)
  };
};
