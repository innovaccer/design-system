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
            aria-label="Add document"
          />
          <Button
            onClick={action('button-clicked')}
            onMouseEnter={action('mouse-enter')}
            onMouseLeave={action('mouse-leave')}
            className=""
            icon="add"
            size="tiny"
            largeIcon={true}
            aria-label="Add document"
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
            aria-label="Print"
          />
          <Button
            onClick={action('button-clicked')}
            onMouseEnter={action('mouse-enter')}
            onMouseLeave={action('mouse-leave')}
            className=""
            icon="print"
            size="regular"
            largeIcon={true}
            aria-label="Print"
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
            aria-label="Menu"
          />
          <Button
            onClick={action('button-clicked')}
            onMouseEnter={action('mouse-enter')}
            onMouseLeave={action('mouse-leave')}
            className=""
            icon="more_horiz"
            size="large"
            largeIcon={true}
            aria-label="Menu"
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
        a11yProps: ` 
        **aria-label:** 
        <br/> 
        - Add \`aria-label='Add document'\` on button with *add* icon to indicate its purpose.
        <br/> 
        - Add \`aria-label='Print'\` on button with *print* icon to indicate its purpose.
        <br/> 
        - Add \`aria-label='Menu'\` on button with *menu* icon to indicate its purpose.
         `,
      },
    },
  },
};
