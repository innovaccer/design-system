import * as React from 'react';
import { Label, Textarea, Row, Column } from '@/index';
import { action } from '@/utils/action';

export const Disable = () => {
  const BooleanValue = [true, false];

  return (
    <Row>
      {BooleanValue.map((value, ind) => (
        <Column key={ind} className="p-4">
          <Label withInput={true}>{value ? 'Disabled' : 'Enabled'}</Label>
          <Textarea
            name="Textarea"
            onChange={action('on-change')}
            placeholder="Placeholder"
            disabled={value}
            rows={3}
            aria-labelledby="Textarea"
          />
        </Column>
      ))}
    </Row>
  );
};

export default {
  title: 'Inputs/Textarea/Variants/Disable',
  component: Textarea,
  parameters: {
    docs: {
      docPage: {
        title: 'Textarea',
      },
    },
  },
};
