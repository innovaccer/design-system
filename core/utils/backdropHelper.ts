export const isElementOnTop = (container: HTMLElement, elementRef: Element): boolean => {
  const parent = elementRef.parentNode;
  const childNodes = parent?.querySelectorAll(
    '[data-layer="true"][data-opened="true"]:not([class*="Overlay-container"])'
  );
  const containerIndex = parseInt(window.getComputedStyle(container).zIndex);
  const z = getHighestZIndex(childNodes);
  return containerIndex === z + 1;
};

export const getHighestZIndex = (childNodes: NodeListOf<ChildNode> | undefined): number => {
  let maxIndex = -1;
  childNodes?.forEach((node) => {
    const child = node as HTMLElement;
    const z = parseInt(window.getComputedStyle(child).zIndex);
    maxIndex = Math.max(maxIndex, z);
  });
  return maxIndex;
};
