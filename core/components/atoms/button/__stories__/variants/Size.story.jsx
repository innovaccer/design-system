import * as React from 'react';
import { action } from '@/utils/action';
import Button from '../../Button';
import Text from '@/components/atoms/text';

// CSF format story
export const size = () => {
  const disabled = false;
  const expanded = false;
  const loading = false;
  const sizes = ['tiny', 'regular', 'large'];
  const children = 'Button';

  return (
    <div className="d-flex w-25">
      {sizes.map((ButtonSize, ind) => {
        return (
          <div key={ind} className="mr-5">
            <div className="h-50">
              <Button
                onClick={action('button-clicked')}
                onMouseEnter={action('mouse-enter')}
                onMouseLeave={action('mouse-leave')}
                appearance={'primary'}
                size={ButtonSize}
                expanded={expanded}
                disabled={disabled}
                loading={loading}
                aria-label={`${ButtonSize}`}
              >
                {children}
              </Button>
            </div>
            <br />
            <Text weight="strong">{ButtonSize.charAt(0).toUpperCase() + ButtonSize.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Actions/Button/Variants/Size',
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
