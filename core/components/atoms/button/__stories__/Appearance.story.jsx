import * as React from 'react';
import { action } from '@/utils/action';
import { Button } from '@/index';

// CSF format story
export const all = () => {
  const appearances = ['basic', 'primary', 'alert', 'transparent'];

  return (
    <div className="d-flex w-75 justify-content-between">
      {appearances.map((appear, ind) => {
        return (
          <Button key={ind} onClick={action('button-clicked')} appearance={appear} aria-label={`${appear}`}>
            {appear.charAt(0).toUpperCase() + appear.slice(1)}
          </Button>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Button/Button/Appearance/All',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        a11yProps: ` **aria-label:** name accordingly which describe the action of button `,
      },
    },
  },
};
