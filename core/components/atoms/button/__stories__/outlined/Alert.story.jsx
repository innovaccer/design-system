import * as React from 'react';
import { action } from '@/utils/action';
import { Button, Text } from '@/index';

export const Alert = () => {
  const buttonStates = [
    {
      label: 'Default',
      props: {
        children: 'Delete',
        'aria-label': 'Delete',
      },
    },
    {
      label: 'Disabled',
      props: {
        children: 'Delete',
        disabled: true,
        'aria-label': 'Delete',
      },
    },
    {
      label: 'Loading',
      props: {
        children: '',
        loading: true,
        'aria-label': 'Loading',
      },
    },
    {
      label: 'With Icon',
      props: {
        children: 'Delete',
        icon: 'delete',
        'aria-label': 'Delete',
      },
    },
    {
      label: 'Icon Right',
      props: {
        children: 'Delete',
        icon: 'delete',
        iconAlign: 'right',
        'aria-label': 'Delete',
      },
    },
    {
      label: 'Icon Only',
      props: {
        icon: 'delete',
        'aria-label': 'Delete',
      },
    },
  ];

  return (
    <div className="d-flex w-100 justify-content-between flex-wrap">
      {buttonStates.map((state, index) => (
        <div key={index} className="mb-6">
          <Button onClick={action('button-clicked')} appearance="alert" styleType="outlined" {...state.props} />
          <br />
          <Text weight="strong">{state.label}</Text>
        </div>
      ))}
    </div>
  );
};

export default {
  title: 'Components/Button/Button/Outlined/Alert',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        description: 'Outlined Alert Button - All States',
        a11yProps: ` **aria-label:** Add \`aria-label='Delete'\` to describe the action of outlined button `,
      },
    },
  },
};
