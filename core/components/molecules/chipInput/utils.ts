export type ChipInputBorderFocusRegion = 'input' | 'icon' | 'chip' | 'fieldChrome' | null;

export const getChipInputBorderFocusRegion = (
  target: EventTarget | null,
  inputClassName: string
): ChipInputBorderFocusRegion => {
  if (!(target instanceof HTMLElement)) return null;
  if (
    target.getAttribute('data-test') === 'DesignSystem-ChipInput--Input' ||
    target.classList.contains(inputClassName)
  ) {
    return 'input';
  }
  if (target.closest('[data-test="DesignSystem-ChipInput--Icon"]')) return 'icon';
  if (target.closest('[data-test="DesignSystem-ChipInput--Chip"]')) return 'chip';
  return 'fieldChrome';
};
