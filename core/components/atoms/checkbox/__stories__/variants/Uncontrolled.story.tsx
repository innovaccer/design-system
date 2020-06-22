import * as React from 'react';
import Checkbox from '../../index';
import { action } from '@storybook/addon-actions';

// CSF format story
export const uncontrolledCheckbox = () => {
  const handleParentChange = (checkedValue: boolean) => {
    return action(`onChange: ${checkedValue}`)();
  };

  return (
    <div>
      <Checkbox
        defaultChecked={true}
        label={'Innovaccer'}
        onChange={handleParentChange}
        value={'Innovaccer'}
      />
    </div>
  );
};

export default {
  title: 'Atoms|Checkbox/Variants',
  component: Checkbox,
  parameters: {
    docs: {
      docPage: {
        title: 'Checkbox'
      }
    }
  }
};
