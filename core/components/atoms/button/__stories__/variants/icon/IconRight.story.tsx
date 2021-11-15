import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button, { Size } from '../../../Button';
import Text from '@/components/atoms/text';

// CSF format story
export const iconRight = () => {
  const disabled = false;
  const expanded = false;
  const loading = false;
  const iconAlign = 'right';

  const size: Size[] = ['tiny', 'regular', 'large'];

  const icon = text('icon', 'refresh');
  const children = text('children', 'Button');
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
  title: 'Components/Button/Variants/Icon/Icon Right',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        a11yProps: ` 
        **aria-label:** Add \`aria-label='Refresh'\` to describe the action of button 
         `,
      },
    },
  },
};
