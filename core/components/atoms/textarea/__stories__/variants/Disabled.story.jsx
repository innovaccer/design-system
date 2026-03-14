import * as React from 'react';
import { Label, Textarea } from '@/index';

export const Disabled = () => {
  return (
    <div className="d-flex">
      <div>
        <Label htmlFor="disabled-textarea" withInput={true}>
          Disabled
        </Label>
        <Textarea
          id="disabled-textarea"
          disabled={true}
          resize={false}
          name="Textarea"
          placeholder="Placeholder"
          rows={3}
        />
      </div>
      <div className="ml-6">
        <Label htmlFor="enabled-textarea" withInput={true}>
          Enabled
        </Label>
        <Textarea id="enabled-textarea" name="Textarea" placeholder="Placeholder" rows={3} />
      </div>
    </div>
  );
};

const customCode = `() => {
  return (
    <div className="d-flex">
      <div>
        <Label htmlFor="disabled-textarea" withInput={true}>Disabled</Label>
        <Textarea
          id="disabled-textarea"
          disabled={true}
          resize={false}
          name="Textarea"
          placeholder="Placeholder"
          rows={3}
        />
      </div>
      <div className="ml-6">
        <Label htmlFor="enabled-textarea" withInput={true}>Enabled</Label>
        <Textarea
          id="enabled-textarea"
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
