import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { Button, Text } from '@/index';

// CSF format story
export const icon = () => {
  return (
    <div>
      <div className="mb-7">
        <Text weight="medium" size="large">
          Tiny
        </Text>
        <div className="d-flex align-items-center mt-4">
          <Button
            onClick={action('button-clicked')}
            onMouseEnter={action('mouse-enter')}
            onMouseLeave={action('mouse-leave')}
            className="mr-7"
            icon="add"
            size="tiny"
            largeIcon={false}
          />
          <Button
            onClick={action('button-clicked')}
            onMouseEnter={action('mouse-enter')}
            onMouseLeave={action('mouse-leave')}
            className=""
            icon="add"
            size="tiny"
            largeIcon={true}
          />
        </div>
      </div>
      <div className="mb-7">
        <Text weight="medium" size="large">
          Regular
        </Text>
        <div className="d-flex align-items-center mt-4">
          <Button
            onClick={action('button-clicked')}
            onMouseEnter={action('mouse-enter')}
            onMouseLeave={action('mouse-leave')}
            className="mr-7"
            icon="print"
            size="regular"
            largeIcon={false}
          />
          <Button
            onClick={action('button-clicked')}
            onMouseEnter={action('mouse-enter')}
            onMouseLeave={action('mouse-leave')}
            className=""
            icon="print"
            size="regular"
            largeIcon={true}
          />
        </div>
      </div>
      <div className="mb-7">
        <Text weight="medium" size="large">
          Large
        </Text>
        <div className="d-flex align-items-center mt-4">
          <Button
            onClick={action('button-clicked')}
            onMouseEnter={action('mouse-enter')}
            onMouseLeave={action('mouse-leave')}
            className="mr-7"
            icon="more_horiz"
            size="large"
            largeIcon={false}
          />
          <Button
            onClick={action('button-clicked')}
            onMouseEnter={action('mouse-enter')}
            onMouseLeave={action('mouse-leave')}
            className=""
            icon="more_horiz"
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
        title: 'Button',
      },
    },
  },
};
