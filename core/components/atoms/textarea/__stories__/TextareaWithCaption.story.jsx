import * as React from 'react';
import { Textarea, Label, Caption } from '@/index';

export const textareaWithCaption = () => {
  const [value, setValue] = React.useState('Patient moved out of country last week.');

  return (
    <div className="w-50">
      <Label withInput={true} htmlFor="notes">
        Confirmation Notes
      </Label>
      <Textarea
        name="notes"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="Enter your comments here"
        aria-labelledby="Confirmation Notes"
        id="notes"
      />
      <Caption withInput={true}>This note will be automatically pinned for export.</Caption>
    </div>
  );
};

const customCode = `() => {
  const [value, setValue] = React.useState('Patient moved out of country last week.');

  return (
    <div className="w-50">
      <Label withInput={true} htmlFor="notes">
        Confirmation Notes
      </Label>
      <Textarea
        name="notes"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="Enter your comments here"
        aria-labelledby="Confirmation Notes"
        id="notes"
      />
      <Caption withInput={true}>This note will be automatically pinned for export.</Caption>
    </div>
  );
};`;

export default {
  title: 'Components/Input/Textarea/Textarea With Caption',
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
