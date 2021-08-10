export const colorToHex = (color: string) => getComputedStyle(document.documentElement).getPropertyValue(`--${color}`);
