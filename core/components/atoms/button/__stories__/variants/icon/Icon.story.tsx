import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button, { Size } from '../../../Button';
import Text from '@/components/atoms/text';

// CSF format story
export const icon = () => {
  const disabled = false;
  const expanded = false;
  const loading = false;

  const sizes: Size[] = ['tiny', 'regular', 'large'];

  const ButtonIcon = text(
    'icon',
    'refresh'
  );
  return (
    <div className="d-flex w-25">
      {
        sizes.map((IconSize, ind) => {
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
                  icon={ButtonIcon}
                >
                  {''}
                </Button>
              </div>
              <br />
              <Text weight="strong">{IconSize.charAt(0).toUpperCase() + IconSize.slice(1)}</Text>
            </div>
          );
        })
      }
    </div>
  );
};

export default {
  title: 'Components/Button/Variants/Icon',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button'
      }
    }
  }
};
