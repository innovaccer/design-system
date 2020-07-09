import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button, { Appearance } from '../../Button';
import Text from '@/components/atoms/text';

// CSF format story
export const expanded = () => {
  const disabled = false;
  const ButtonExpanded = true;
  const loading = false;

  const appearances: Appearance[] = ['basic', 'primary', 'success', 'alert'];

  const children = text(
    'children',
    'Button'
  );

  return (
    <div className="Row">
      {
        appearances.map((appear, ind) => {
          return (
            <div key={ind} className="mr-9 mb-4 w-50">
              <Button
                onClick={action('button-clicked')}
                onMouseEnter={action('mouse-enter')}
                onMouseLeave={action('mouse-leave')}
                appearance={appear}
                size={'regular'}
                expanded={ButtonExpanded}
                disabled={disabled}
                loading={loading}
              >
                {children}
              </Button>
              <br />
              <Text weight="strong">{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
            </div>
          );
        })
      }
    </div>
  );
};

export default {
  title: 'Atoms|Button/Variants',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button'
      }
    }
  }
};
