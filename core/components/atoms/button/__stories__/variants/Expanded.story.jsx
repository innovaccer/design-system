import * as React from 'react';
import { action } from '@/utils/action';
import Button from '../../Button';
import Text from '@/components/atoms/text';

// CSF format story
export const expanded = () => {
  const disabled = false;
  const ButtonExpanded = true;
  const loading = false;
  const appearances = ['basic', 'primary', 'alert'];
  const children = 'Button';

  return (
    <div className="Row">
      {appearances.map((appear, ind) => {
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
  title: 'Components/Button/Variants/Expanded',
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
