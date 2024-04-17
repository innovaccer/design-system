import * as React from 'react';
import { Text, LinkButton } from '@/index';

// CSF format story
export const withIcon = () => {
  return (
    <div className="d-flex">
      <div className="mr-10">
        <LinkButton icon="add" iconAlign="left" aria-label="left">
          add items
        </LinkButton>
        <br />
        <Text weight="strong">Left</Text>
      </div>

      <div>
        <LinkButton icon="keyboard_arrow_down_round" iconAlign="right" aria-label="right">
          more details
        </LinkButton>
        <br />
        <Text weight="strong">Right</Text>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Button/LinkButton/With Icon',
  component: LinkButton,
  parameters: {
    docs: {
      docPage: {
        title: 'LinkButton',
        a11yProps: ` **aria-label:** name accordingly which describe the action of button `,
      },
    },
  },
};
