import * as React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import Chip, { ChipType } from '../../Chip';
import { action } from '@storybook/addon-actions';
import Text from '@/components/atoms/text';
export const Types = () => {
  const types: ChipType[] = ['action', 'selection', 'input'];
  const icon = text('icon', 'assessment');
  const label = text('label', 'ChipLabel');
  const clearButton = boolean('clearButton', true);
  const disabled = false;
  const selected = false;
  return (
    <div className="d-flex">
      {types.map((type, ind) => {
        return (
          <div key={ind} className="mr-9">
            <Chip
              icon={icon}
              label={label}
              clearButton={clearButton}
              disabled={disabled}
              type={type}
              onClose={action(`onClose: ${name}`)}
              onClick={action(`onClick: ${name}`)}
              selected={selected}
              name={'chip'}
            />
            <br />
            <Text weight="strong">{type.charAt(0).toUpperCase() + type.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
};
export default {
  title: 'Components/Chip/Variants/Types',
  component: Chip,
  parameters: {
    docs: {
      docPage: {
        title: 'Chip',
      },
    },
  },
};
