import * as React from 'react';
import { action } from '@/utils/action';
import Button from '../../../Button';
import Text from '@/components/atoms/text';

// CSF format story
export const alert = () => {
  const disabled = false;
  const expanded = false;
  const loading = false;
  const children = 'Delete';

  return (
    <div className="d-flex w-25 justify-content-between">
      <div className="mr-9">
        <Button
          onClick={action('button-clicked')}
          onMouseEnter={action('mouse-enter')}
          onMouseLeave={action('mouse-leave')}
          appearance={'alert'}
          size={'regular'}
          expanded={expanded}
          disabled={disabled}
          loading={loading}
          aria-label="Delete"
        >
          {children}
        </Button>
        <br />
        <Text weight="strong">Default</Text>
      </div>
      <div className="mr-9">
        <Button
          onClick={action('button-clicked')}
          onMouseEnter={action('mouse-enter')}
          onMouseLeave={action('mouse-leave')}
          appearance={'alert'}
          size={'regular'}
          expanded={expanded}
          disabled={true}
          loading={loading}
          aria-label="Delete"
        >
          {children}
        </Button>
        <br />
        <Text weight="strong">Disabled</Text>
      </div>
      <div className="mr-9">
        <Button
          onClick={action('button-clicked')}
          onMouseEnter={action('mouse-enter')}
          onMouseLeave={action('mouse-leave')}
          appearance={'alert'}
          size={'regular'}
          expanded={expanded}
          disabled={disabled}
          loading={true}
          aria-label="Loading"
        >
          {''}
        </Button>
        <br />
        <Text weight="strong">Loading</Text>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Button/Variants/State/Alert',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        a11yProps: ` **aria-label:** Add \`aria-label='Delete'\` to describe the action of button `,
      },
    },
  },
};
