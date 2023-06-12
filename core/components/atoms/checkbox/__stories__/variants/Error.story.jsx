import * as React from 'react';
import { action } from '@/utils/action';
import { Checkbox } from '@/index';

// CSF format story
export const error = () => {
  const size = 'regular';

  const label = 'Checkbox';

  const [checked, setChecked] = React.useState(false);

  const [indeterminate, setIndeterminate] = React.useState(false);

  const disabled = false;

  const onChangeHandler = (event) => {
    setChecked(!checked);
    setIndeterminate(!indeterminate);
    return action(`onChange: ${event.target.checked}`)();
  };

  return (
    <Checkbox
      error={true}
      checked={checked}
      indeterminate={indeterminate}
      disabled={disabled}
      size={size}
      label={label}
      onChange={onChangeHandler}
    />
  );
};

export default {
  title: 'Components/Checkbox/Variants/Error',
  component: Checkbox,
  parameters: {
    docs: {
      docPage: {
        title: 'Checkbox',
      },
    },
  },
};
