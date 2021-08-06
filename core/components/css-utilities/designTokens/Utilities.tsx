export function giveBgColor(htmlCollection: HTMLCollection) {
  const htmlArr = Array.from(htmlCollection);
  htmlArr.forEach((element) => element.parentNode?.parentElement?.classList.add('bg-dark'));
}
