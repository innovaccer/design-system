import * as React from 'react';
import { action } from '@/utils/action';
import { Button } from '@/index';

export const Selected = () => {
  return (
    <div className="d-flex flex-column" style={{ gap: '16px' }}>
      <div className="d-flex" style={{ gap: '16px' }}>
        <Button
          onClick={action('button-clicked')}
          appearance="basic"
          selected={true}
          aria-label="Selected Basic Filled"
        >
          Basic Filled
        </Button>
        <Button
          onClick={action('button-clicked')}
          appearance="basic"
          styleType="outlined"
          selected={true}
          aria-label="Selected Basic Outlined"
        >
          Basic Outlined
        </Button>
      </div>
      <div className="d-flex" style={{ gap: '16px' }}>
        <Button
          onClick={action('button-clicked')}
          appearance="transparent"
          selected={true}
          aria-label="Selected Transparent"
        >
          Transparent
        </Button>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Button/Button/State/Selected',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
      },
    },
  },
};
