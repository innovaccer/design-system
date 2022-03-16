import * as React from 'react';
import Checkbox from '../../index';

// CSF format story
export const controlledCheckbox = () => {
  const [checked, setChecked] = React.useState(false);

  const handleParentChange = (event) => {
    const updatedChecked = event.target.checked;
    window.setTimeout(() => {
      setChecked(updatedChecked);
    }, 2000);
  };

  return <Checkbox checked={checked} label={'Innovaccer'} onChange={handleParentChange} value={'Innovaccer'} />;
};

const customCode = `() => {
  const [checked, setChecked] = React.useState(false);

  const handleParentChange = (event) => {
    const updatedChecked = event.target.checked;
    window.setTimeout(() => {
      setChecked(updatedChecked);
    }, 2000);
  };

  return (
      <Checkbox
        checked={checked}
        label={'Innovaccer'}
        onChange={handleParentChange}
        value={'Innovaccer'}
      />
  );
}`;

export default {
  title: 'Components/Checkbox/Variants/Controlled Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
