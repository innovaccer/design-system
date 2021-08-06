import * as React from 'react';
import { Textarea, Label, Caption } from '@/index';

export const textareaWithCaption = () => {
  const [value, setValue] = React.useState('Patient moved out of country last week.');

  return (
    <>
      <Label withInput={true}>Confirmation Notes</Label>
      <Textarea
        name="Textarea"
        className="w-50"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="Enter your comments here"
      />
      <Caption withInput={true}>This note will be automatically pinned for export.</Caption>
    </>
  );
};

const customCode = `() => {
  const [value, setValue] = React.useState('Patient moved out of country last week.');

  return (
    <>
      <Label withInput={true}>Confirmation Notes</Label>
      <Textarea
        name="Textarea"
        className="w-50"
        value={value}
        onChange={e => { setValue(e.target.value); }}
        placeholder="Enter your comments here"
      />
      <Caption withInput={true}>This note will be automatically pinned for export.</Caption>
    </>
  );
}`;

export default {
  title: 'Components/Textarea/Textarea With Caption',
  component: Textarea,
  parameters: {
    docs: {
      customCode,
      docPage: {
        title: 'Textarea',
      },
    },
  },
};
