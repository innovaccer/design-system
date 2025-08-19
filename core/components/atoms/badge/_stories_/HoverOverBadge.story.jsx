import * as React from 'react';
import { Text, Badge, Popover } from '@/index';

// CSF format story
export const hoverOverBadge = () => {
  return (
    <div className="mb-11">
      <Popover on="hover" position="bottom-start" trigger={<Badge appearance="primary">Hover over me</Badge>}>
        <div className="p-5">
          <Text>
            I am a popover, you can use me to display links,
            <br /> interactive elements, avatars, text formatting, meta data etc.
          </Text>
        </div>
      </Popover>
    </div>
  );
};

export default {
  title: 'Components/Badge/Hover Over Badge',
  component: Badge,
  parameters: {
    docs: {
      docPage: {
        title: 'Badge',
        propDescription: `Note: All the valid properties of HTML SPAN elements are acceptable as a prop`,
      },
    },
  },
};
