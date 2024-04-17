import * as React from 'react';
import { action } from '@/utils/action';
import { Button } from '@/index';

// CSF format story
export const size = () => {
  const sizes = ['tiny', 'regular', 'large'];

  return (
    <div className="d-flex justify-content-between w-50">
      {sizes.map((ButtonSize, ind) => {
        return (
          <Button
            key={ind}
            size={ButtonSize}
            appearance={'primary'}
            aria-label={`${ButtonSize}`}
            onClick={action('button-clicked')}
          >
            {ButtonSize.charAt(0).toUpperCase() + ButtonSize.slice(1)}
          </Button>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Button/Button/Size',
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
