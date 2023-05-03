import * as React from 'react';
import { Text } from '@/index';
import Chip from '../../Chip';
import { action } from '@/utils/action';

const BooleanValue = [true, false];
export const Action = () => {
  const icon = 'assessment';
  const label = 'Action';
  return (
    <div className="d-flex">
      {BooleanValue.map((booleanvalue, ind) => {
        return (
          <div key={ind} className="mr-9">
            <Chip
              icon={icon}
              label={label}
              disabled={booleanvalue}
              onClose={action(`onClose: ${label}`)}
              onClick={action(`onClick: ${label}`)}
              type="action"
              name={'chip'}
            />
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
