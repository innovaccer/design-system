import * as React from 'react';
import { EditableInput } from '@/index';

// CSF format story
export const uncontrolled = () => {
  return (
    <div className="vw-25">
      <EditableInput placeholder="First Name" />
    </div>
  );
};

export default {
  title: 'Components/Inputs/EditableInput/Variants/Uncontrolled',
  component: EditableInput,
};
