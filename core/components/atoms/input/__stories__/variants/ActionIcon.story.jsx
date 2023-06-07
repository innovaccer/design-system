import * as React from 'react';
import { Input } from '@/index';
import { action } from '@/utils/action';
import ActionButton from '../../actionButton';

export const actionIcon = () => {
  const customIcon = <Input.ActionButton name="events" onClick={action('custom action icon')} />;

  return <Input name="input" actionIcon={customIcon} />;
};

const customCode = `() => {
  const actionIcon = (
    <Input.ActionButton name="events" onClick={() => console.log("custom action icon")} />
  );

  return (
    <Input
      name="input"
      actionIcon={actionIcon}
    />
  );
}`;

export default {
  title: 'Components/Input/Variants/Action Icon',
  component: Input,
  subcomponents: { ActionButton },
  parameters: {
    docs: {
      docPage: {
        customCode,
        props: {
          exclude: ['autocomplete'],
        },
      },
    },
  },
};
