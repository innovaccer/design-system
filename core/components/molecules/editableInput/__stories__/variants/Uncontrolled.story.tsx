import * as React from 'react';
import { EditableInput } from '@/index';

// CSF format story
export const uncontrolled = () => {
  return (
    <div style={{ width: 'var(--spacing-9)' }}>
      <EditableInput placeholder="First Name" />
    </div>
  );
};

export default {
  title: 'Components/EditableInput/Variants/Uncontrolled',
  component: EditableInput,
};
