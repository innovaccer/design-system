import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button, { Size } from '../../Button';
import Text from '@/components/atoms/text';

// CSF format story
export const size = () => {
  const disabled = false;
  const expanded = false;
  const loading = false;

  const sizes: Size[] = ['tiny', 'regular', 'large'];

  const children = text(
    'children',
    'Button'
  );

  return (
    <div className="d-flex w-25">
      {
        sizes.map((ButtonSize, ind) => {
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
                >
                  {children}
                </Button>
              </div>
              <br />
              <Text weight="strong">{ButtonSize.charAt(0).toUpperCase() + ButtonSize.slice(1)}</Text>
            </div>
          );
        })
      }
    </div>
  );
};

export default {
  title: 'Components/Button/Variants',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button'
      }
    }
  }
};
