import * as React from 'react';
import { Checkbox } from '@/index';

// CSF format story
export const controlledCheckbox = () => {
  const [checked, setChecked] = React.useState(false);

  const handleParentChange = (event) => {
    const updatedChecked = event.target.checked;
    setChecked(updatedChecked);
  };

  return <Checkbox checked={checked} label={'Innovaccer'} onChange={handleParentChange} value={'Innovaccer'} />;
};

const customCode = `() => {
  const [checked, setChecked] = React.useState(false);

  const handleParentChange = (event) => {
    const updatedChecked = event.target.checked;
    setChecked(updatedChecked);
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
        description:
          '######Checkbox has two types:\n- [Controlled Checkbox](https://reactjs.org/docs/forms.html#controlled-components)\n- [Uncontrolled Checkbox](https://reactjs.org/docs/uncontrolled-components.html)',
      },
    },
  },
};
