import * as React from 'react';
import { action } from '@/utils/action';
import Switch from '../index';
import { Label } from '@/index';

// CSF format story
export const all = () => {
  const size = 'tiny';

  const [checked, setChecked] = React.useState(false);

  const disabled = false;

  const onChangeHandler = (_event, checkedValue) => {
    setChecked(!checked);
    return action(`switch-change: ${checkedValue}`)();
  };

  return (
    <form>
      <Label htmlFor="vaccination-status">Have you been vaccinated ?</Label>
      <div>
        <Switch id="vaccination-status" disabled={disabled} checked={checked} size={size} onChange={onChangeHandler} />
      </div>
    </form>
  );
};

export default {
  title: 'Components/Switch/All',
  component: Switch,
  parameters: {
    docs: {
      docPage: {
        a11yProps: ` 
        **htmlFor:** 
        <br/> 
        -Add \`htmlFor='vaccination-status'\` to label to programmatically associated it with switch 
        which has \`id='vaccination-status'\`. 
        <br/> 
        -This means that,a screen reader will read out the label when the user is focused on the switch, 
        making it easier for an assistive technology user to understand 
        what data should be entered.
        <br/> 
        -When a user clicks or touches/taps a label, the browser passes the focus to its associated switch. That increased hit 
        area for focusing the input provides an advantage to anyone trying to activate it.
         `,
      },
    },
  },
};
