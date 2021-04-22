import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Button, Text } from '@/index';

// CSF format story
export const icon = () => {

  return (
    <div>
      <div className="mb-7">
        <Text weight="medium" size="large">Tiny</Text>
        <div className="d-flex align-items-center mt-4">
          <Button
            onClick={action('button-clicked')}
            onMouseEnter={action('mouse-enter')}
            onMouseLeave={action('mouse-leave')}
            className="mr-7"
            icon="events"
            size="tiny"
            largeIcon={false}
          />
          <Button
            onClick={action('button-clicked')}
            onMouseEnter={action('mouse-enter')}
            onMouseLeave={action('mouse-leave')}
            className=""
            icon="events"
            size="tiny"
            largeIcon={true}
          />
        </div>
      </div>
      <div className="mb-7">
        <Text weight="medium" size="large">Regular</Text>
        <div className="d-flex align-items-center mt-4">
          <Button
            onClick={action('button-clicked')}
            onMouseEnter={action('mouse-enter')}
            onMouseLeave={action('mouse-leave')}
            className="mr-7"
            icon="events"
            size="regular"
            largeIcon={false}
          />
          <Button
            onClick={action('button-clicked')}
            onMouseEnter={action('mouse-enter')}
            onMouseLeave={action('mouse-leave')}
            className=""
            icon="events"
            size="regular"
            largeIcon={true}
          />
        </div>
      </div>
      <div className="mb-7">
        <Text weight="medium" size="large">Large</Text>
        <div className="d-flex align-items-center mt-4">
          <Button
            onClick={action('button-clicked')}
            onMouseEnter={action('mouse-enter')}
            onMouseLeave={action('mouse-leave')}
            className="mr-7"
            icon="events"
            size="large"
            largeIcon={false}
          />
          <Button
            onClick={action('button-clicked')}
            onMouseEnter={action('mouse-enter')}
            onMouseLeave={action('mouse-leave')}
            className=""
            icon="events"
            size="large"
            largeIcon={true}
          />
        </div>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Button/Variants/Icon/Icon',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button'
      }
    }
  }
};
