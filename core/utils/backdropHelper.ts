export const isElementOnTop = (container: HTMLElement, elementRef: Element): boolean => {
  const parent = elementRef.parentNode;
  const childNodes = parent?.childNodes;
  const containerIndex = parseInt(window.getComputedStyle(container).zIndex);
  const z = getHighestZIndex(childNodes);
  return containerIndex === z + 1;
};

export const getHighestZIndex = (childNodes: NodeListOf<ChildNode> | undefined): number => {
  let maxIndex = -1;
  childNodes?.forEach((node) => {
    const child = node as HTMLElement;
    if (child.getAttribute('data-layer') === 'true' && child.getAttribute('data-opened') === 'true') {
      const z = parseInt(window.getComputedStyle(child).zIndex);
      maxIndex = Math.max(maxIndex, z);
    }
  });
  return maxIndex;
};
