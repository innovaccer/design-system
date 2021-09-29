import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button, { ButtonAppearance } from '../../Button';
import Text from '@/components/atoms/text';

// CSF format story
export const appearance = () => {
  const disabled = false;
  const expanded = false;
  const loading = false;

  const appearances: ButtonAppearance[] = ['basic', 'primary',  'alert', 'transparent'];

  const children = text('children', 'Button');

  return (
    <div className="d-flex">
      {appearances.map((appear, ind) => {
        return (
          <div key={ind} className="mr-9">
            <Button
              onClick={action('button-clicked')}
              onMouseEnter={action('mouse-enter')}
              onMouseLeave={action('mouse-leave')}
              appearance={appear}
              size={'regular'}
              expanded={expanded}
              disabled={disabled}
              loading={loading}
              aria-label={`${appear}`}
            >
              {children}
            </Button>
            <br />
            <Text weight="strong">{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Button/Variants/Appearance',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        a11yProps: ` 
        **aria-label:** name accordingly which describe the action of button 
         `,
      },
    },
  },
};
