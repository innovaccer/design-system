import * as React from 'react';
import { Chip, Text } from '@/index';
import { action } from '@/utils/action';

export const Size = () => {
  const type = 'selection';
  const label = 'Chip Label';
  const icon = 'assessment';
  const disabled = false;

  let clearButton;
  if (type !== 'action') {
    clearButton = true;
  }

  let selected;
  if (type === 'selection') {
    selected = false;
  }

  const sizes = ['regular', 'small'];

  return (
    <div className="d-flex align-items-center flex-wrap">
      {sizes.map((size) => (
        <div key={size} className="d-flex flex-column align-items-center mr-6">
          <Text size="small" weight="medium" className="mb-3">
            {size.charAt(0).toUpperCase() + size.slice(1)}
          </Text>
          <Chip
            icon={icon}
            label={label}
            clearButton={clearButton}
            disabled={disabled}
            type={type}
            onClose={action(`onClose: ${label} (${size})`)}
            onClick={action(`onClick: ${label} (${size})`)}
            selected={selected}
            name={`chip-${size}`}
            size={size}
          />
        </div>
      ))}
    </div>
  );
};
export default {
  title: 'Components/Chip/Chip/Size',
  component: Chip,
};
