import * as React from 'react';
import { action } from '@/utils/action';
import { Button, Text } from '@/index';

export const Basic = () => {
  const buttonStates = [
    {
      label: 'Default',
      props: {
        children: 'Cancel',
        'aria-label': 'Cancel',
      },
    },
    {
      label: 'Disabled',
      props: {
        children: 'Cancel',
        disabled: true,
        'aria-label': 'Cancel',
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
      label: 'Selected',
      props: {
        children: 'Cancel',
        selected: true,
        'aria-label': 'Selected',
      },
    },
    {
      label: 'Selected Disabled',
      props: {
        children: 'Cancel',
        selected: true,
        disabled: true,
        'aria-label': 'Selected Disabled',
      },
    },
    {
      label: 'Selected Icon',
      props: {
        selected: true,
        icon: 'event',
        'aria-label': 'Selected',
      },
    },
    {
      label: 'With Icon',
      props: {
        children: 'Cancel',
        icon: 'add',
        'aria-label': 'Add',
      },
    },
    {
      label: 'Icon Right',
      props: {
        children: 'Cancel',
        icon: 'add',
        iconAlign: 'right',
        'aria-label': 'Add',
      },
    },
    {
      label: 'Icon Only',
      props: {
        icon: 'settings',
        'aria-label': 'Settings',
      },
    },
  ];

  return (
    <div className="d-flex w-100 justify-content-between flex-wrap">
      {buttonStates.map((state, index) => (
        <div key={index} className="mb-6">
          <Button onClick={action('button-clicked')} appearance="basic" styleType="outlined" {...state.props} />
          <br />
          <Text weight="strong">{state.label}</Text>
        </div>
      ))}
    </div>
  );
};

export default {
  title: 'Components/Button/Button/Outlined/Basic',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        description: 'Outlined Basic Button - All States',
        a11yProps: `**aria-label:** Add \`aria-label='Cancel'\` to describe the action of outlined button `,
      },
    },
  },
};
