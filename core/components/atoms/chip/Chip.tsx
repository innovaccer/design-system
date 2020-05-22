import * as React from 'react';
import GenericChip from '../_chip';
export type Type = 'Action' | 'Selection' | 'Input';
export interface ChipProps {
  label: string;
  icon?: string;
  clearbutton?: boolean;
  disabled?: boolean;
  type?: Type;
  // onClear?: (e: React.MouseEvent<HTMLElement>) => void;
  // onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}
export const Chip = (props: ChipProps) => {
  const {
    label = 'Selection',
    icon,
    clearbutton,
    type,
    disabled
  } = props;
  return (
    <GenericChip label={label} icon={icon} clearbutton={clearbutton} disabled={disabled} type={type} />
  );
};
Chip.displayName = 'Chip';
export default Chip;
