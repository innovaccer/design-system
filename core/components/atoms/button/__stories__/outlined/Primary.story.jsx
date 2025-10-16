import * as React from 'react';
import { action } from '@/utils/action';
import { Button, Text } from '@/index';

export const Primary = () => {
  const buttonStates = [
    {
      label: 'Default',
      props: {
        children: 'Submit',
        'aria-label': 'Submit',
      },
    },
    {
      label: 'Disabled',
      props: {
        children: 'Submit',
        disabled: true,
        'aria-label': 'Submit',
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
        children: 'Submit',
        icon: 'send',
        'aria-label': 'Submit',
      },
    },
    {
      label: 'Icon Right',
      props: {
        children: 'Submit',
        icon: 'send',
        iconAlign: 'right',
        'aria-label': 'Submit',
      },
    },
    {
      label: 'Icon Only',
      props: {
        icon: 'check',
        'aria-label': 'Submit',
      },
    },
  ];

  return (
    <div className="d-flex w-100 justify-content-between flex-wrap">
      {buttonStates.map((state, index) => (
        <div key={index} className="mb-6">
          <Button onClick={action('button-clicked')} appearance="primary" styleType="outlined" {...state.props} />
          <br />
          <Text weight="strong">{state.label}</Text>
        </div>
      ))}
    </div>
  );
};

export default {
  title: 'Components/Button/Button/Outlined/Primary',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        description: 'Outlined Primary Button - All States',
        a11yProps: ` **aria-label:** Add \`aria-label='Submit'\` to describe the action of outlined button `,
      },
    },
  },
};
