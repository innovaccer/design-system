import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { Text } from '@/index';
import Chip from '../../Chip';
import { action } from '@storybook/addon-actions';
const BooleanValue = [true, false];
export const Selection = () => {
  const icon = text('icon', 'assessment');
  const label = text('label', 'Selection');
  return (
    <div className="d-flex">
      {BooleanValue.map((booleanvalue, ind) => {
        return (
          <div key={ind} className="mr-9">
            <Chip
              icon={icon}
              label={label}
              clearButton={true}
              disabled={booleanvalue}
              type="selection"
              onClose={action(`onClose: ${name}`)}
              onClick={action(`onClick: ${name}`)}
              selected={false}
              name={'chip'}
            />
            <br />
            <Text weight="strong">{`Disabled: ${booleanvalue}`}</Text>
          </div>
        );
      })}
      <div className="mr-9">
        <Chip
          icon={icon}
          label={label}
          clearButton={true}
          type="selection"
          onClose={action(`onClose: ${name}`)}
          onClick={action(`onClick: ${name}`)}
          selected={true}
          name={'chip'}
        />
        <br />
        <Text weight="strong">Selected: true</Text>
      </div>
    </div>
  );
};
export default {
  title: 'Components/Chip/Variants/Selection',
  component: Chip,
  parameters: {
    docs: {
      docPage: {
        title: 'Chip',
      },
    },
  },
};
