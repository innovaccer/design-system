import * as React from 'react';
import Checkbox from '../../index';
import { action } from '@/utils/action';

// CSF format story
export const uncontrolledCheckbox = () => {
  const handleParentChange = (event) => {
    return action(`onChange: ${event.target.checked}`)();
  };

  return (
    <div>
      <Checkbox defaultChecked={true} label={'Innovaccer'} onChange={handleParentChange} value={'Innovaccer'} />
    </div>
  );
};

export default {
  title: 'Components/Checkbox/Variants/Uncontrolled Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      docPage: {
        title: 'Checkbox',
      },
    },
  },
};
