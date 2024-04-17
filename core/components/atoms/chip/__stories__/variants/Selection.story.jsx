import * as React from 'react';
import { Chip, Text } from '@/index';
import { action } from '@/utils/action';

const BooleanValue = [false, true];

export const Selection = () => {
  const icon = 'assessment';
  const label = 'Selection';

  return (
    <div className="d-flex justify-content-between">
      {BooleanValue.map((booleanvalue, ind) => {
        return (
          <div key={ind}>
            <Chip
              icon={icon}
              label={label}
              clearButton={true}
              disabled={booleanvalue}
              type="selection"
              selected={false}
              name={'chip'}
            />
            <br />
            <br />
            <Text weight="strong">{`Disabled: ${booleanvalue}`}</Text>
          </div>
        );
      })}
      <div>
        <Chip
          icon={icon}
          label={label}
          clearButton={true}
          type="selection"
          onClose={action(`onClose: ${label}`)}
          onClick={action(`onClick: ${label}`)}
          selected={true}
          name={'chip'}
        />
        <br />
        <br />
        <Text weight="strong">Selected: true</Text>
      </div>
      <div>
        <Chip
          icon={icon}
          label={label}
          clearButton={true}
          type="selection"
          onClose={action(`onClose: ${label}`)}
          onClick={action(`onClick: ${label}`)}
          selected={true}
          disabled={true}
          name={'chip'}
        />
        <br />
        <br />
        <Text weight="strong">Selected: true</Text>
        <br></br>
        <Text weight="strong">Disabled: true</Text>
      </div>
    </div>
  );
};
export default {
  title: 'Components/Chip/Chip/Variants/Selection',
  component: Chip,
  parameters: {
    docs: {
      docPage: {
        title: 'Chip',
      },
    },
  },
};
