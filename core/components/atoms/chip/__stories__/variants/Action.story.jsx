import * as React from 'react';
import { Chip, Text } from '@/index';

const BooleanValue = [false, true];

export const Action = () => {
  const icon = 'assessment';
  const label = 'Action';
  return (
    <div className="d-flex justify-content-between w-50">
      {BooleanValue.map((booleanvalue, ind) => {
        return (
          <div key={ind}>
            <Chip icon={icon} label={label} disabled={booleanvalue} type="action" name={'chip'} />
            <br />
            <br />
            <Text weight="strong">{`Disabled: ${booleanvalue}`}</Text>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Chip/Chip/Variants/Action',
  component: Chip,
  parameters: {
    docs: {
      docPage: {
        title: 'Chip',
      },
    },
  },
};
