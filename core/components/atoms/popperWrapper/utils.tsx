// Helper function to convert CSS class names to style objects
export const createStyleFromClass = (className: string) => {
  if (!className) return {};

  // Create a temporary element to get computed styles
  const tempElement = document.createElement('div');
  tempElement.className = className;
  document.body.appendChild(tempElement);

  const computedStyle = window.getComputedStyle(tempElement);
  const style: React.CSSProperties = {};

  // Extract relevant animation properties
  const animation = computedStyle.animation;
  const animationDuration = computedStyle.animationDuration;
  const animationTimingFunction = computedStyle.animationTimingFunction;
  const animationFillMode = computedStyle.animationFillMode;
  const opacity = computedStyle.opacity;
  const transform = computedStyle.transform;

  if (animation && animation !== 'none') {
    style.animation = animation;
  }
  if (animationDuration && animationDuration !== '0s') {
    style.animationDuration = animationDuration;
  }
  if (animationTimingFunction && animationTimingFunction !== 'ease') {
    style.animationTimingFunction = animationTimingFunction;
  }
  if (animationFillMode && animationFillMode !== 'none') {
    style.animationFillMode = animationFillMode;
  }
  if (opacity && opacity !== '1') {
    style.opacity = opacity;
  }
  if (transform && transform !== 'none') {
    style.transform = transform;
  }

  document.body.removeChild(tempElement);
  return style;
};
