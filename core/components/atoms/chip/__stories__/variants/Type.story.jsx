import * as React from 'react';
import Chip from '../../Chip';
import { action } from '@/utils/action';
import Text from '@/components/atoms/text';
export const Types = () => {
  const types = ['action', 'selection', 'input'];
  const icon = 'assessment';
  const label = 'ChipLabel';
  const clearButton = true;
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
              onClose={action(`onClose: ${label}`)}
              onClick={action(`onClick: ${label}`)}
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
