import * as React from 'react';
import { action } from '@/utils/action';
import { Button } from '@/index';

export const Default = () => {
  return (
    <div className="d-flex flex-column" style={{ gap: '16px' }}>
      <div className="d-flex" style={{ gap: '16px' }}>
        <Button onClick={action('button-clicked')} appearance="primary" aria-label="Primary Filled">
          Primary Filled
        </Button>
        <Button
          onClick={action('button-clicked')}
          appearance="primary"
          styleType="outlined"
          aria-label="Primary Outlined"
        >
          Primary Outlined
        </Button>
      </div>
      <div className="d-flex" style={{ gap: '16px' }}>
        <Button onClick={action('button-clicked')} appearance="basic" aria-label="Basic Filled">
          Basic Filled
        </Button>
        <Button onClick={action('button-clicked')} appearance="basic" styleType="outlined" aria-label="Basic Outlined">
          Basic Outlined
        </Button>
      </div>
      <div className="d-flex" style={{ gap: '16px' }}>
        <Button onClick={action('button-clicked')} appearance="alert" aria-label="Alert Filled">
          Alert Filled
        </Button>
        <Button onClick={action('button-clicked')} appearance="alert" styleType="outlined" aria-label="Alert Outlined">
          Alert Outlined
        </Button>
      </div>
      <div className="d-flex" style={{ gap: '16px' }}>
        <Button onClick={action('button-clicked')} appearance="transparent" aria-label="Transparent">
          Transparent
        </Button>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Button/Button/State/Default',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        a11yProps: ` **aria-label:** Add \`aria-label\` to describe the action of button.`,
      },
    },
  },
};
