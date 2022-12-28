import * as React from 'react';
import { action } from '@/utils/action';
import Button from '../../../Button';
import Text from '@/components/atoms/text';

// CSF format story
export const iconLeft = () => {
  const disabled = false;
  const expanded = false;
  const loading = false;
  const iconAlign = 'left';

  const size = ['tiny', 'regular', 'large'];

  const icon = 'refresh';
  const children = 'Button';
  return (
    <div className="d-flex w-25">
      {size.map((IconSize, ind) => {
        return (
          <div key={ind} className="mr-5">
            <div className="h-50">
              <Button
                onClick={action('button-clicked')}
                onMouseEnter={action('mouse-enter')}
                onMouseLeave={action('mouse-leave')}
                appearance={'basic'}
                size={IconSize}
                expanded={expanded}
                disabled={disabled}
                loading={loading}
                icon={icon}
                iconAlign={iconAlign}
                aria-label="Refresh"
              >
                {children}
              </Button>
            </div>
            <br />
            <Text weight="strong">{IconSize.charAt(0).toUpperCase() + IconSize.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Button/Variants/Icon/Icon Left',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        a11yProps: ` **aria-label:** Add \`aria-label='Refresh'\` to describe the action of button `,
      },
    },
  },
};
