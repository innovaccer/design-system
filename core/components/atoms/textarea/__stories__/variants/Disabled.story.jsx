import * as React from 'react';
import { Label, Textarea } from '@/index';

export const Disabled = () => {
  return (
    <div className="d-flex">
      <div>
        <Label withInput={true}>Disabled</Label>
        <Textarea
          aria-labelledby="Textarea"
          disabled={true}
          resize={false}
          name="Textarea"
          placeholder="Placeholder"
          rows={3}
        />
      </div>
      <div className="ml-6">
        <Label withInput={true}>Enabled</Label>
        <Textarea aria-labelledby="Textarea" name="Textarea" placeholder="Placeholder" rows={3} />
      </div>
    </div>
  );
};

const customCode = `() => {
  return (
    <div className="d-flex">
      <div>
        <Label withInput={true}>Disabled</Label>
        <Textarea
          aria-labelledby="Textarea"
          disabled={true}
          resize={false}
          name="Textarea"
          placeholder="Placeholder"
          rows={3}
        />
      </div>
      <div className="ml-6">
        <Label withInput={true}>Enabled</Label>
        <Textarea
          aria-labelledby="Textarea"
          name="Textarea"
          placeholder="Placeholder"
          rows={3}
        />
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/Input/Textarea/Variants/Disabled',
  component: Textarea,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Textarea',
      },
    },
  },
};
