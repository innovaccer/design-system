import * as React from 'react';
import { Checkbox } from '@/index';

// CSF format story
export const withHelpText = () => {
  return (
    <Checkbox
      aria-label="Guardian"
      aria-required={true}
      label={'Guardian'}
      helpText={'A member legally responsible for the care of the patient.'}
      className="w-50"
    />
  );
};

export default {
  title: 'Components/Checkbox/With Help Text',
  component: Checkbox,
};
