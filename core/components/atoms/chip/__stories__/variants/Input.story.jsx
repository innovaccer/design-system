import * as React from 'react';
import { Chip, Text } from '@/index';

const BooleanValue = [false, true];

export const Input = () => {
  const icon = 'assessment';
  const label = 'Input';
  return (
    <div className="d-flex justify-content-between w-50">
      {BooleanValue.map((booleanvalue, ind) => {
        return (
          <div key={ind}>
            <Chip icon={icon} label={label} clearButton={true} disabled={booleanvalue} type="input" name={'chip'} />
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
  title: 'Components/Chip/Chip/Variants/Input',
  component: Chip,
  parameters: {
    docs: {
      docPage: {
        title: 'Chip',
      },
    },
  },
};
