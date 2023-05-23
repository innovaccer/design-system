import * as React from 'react';
import { InlineMessage, Text } from '@/index';

// CSF format story
export const Size = () => {
  const sizes = ['small', 'regular'];

  return (
    <div className="d-flex align-items-center">
      {sizes.map((size, key) => {
        return (
          <div className="mr-9" key={key}>
            <InlineMessage size={size} appearance="info" description="There are two new referral requests." />
            <br />
            <Text weight="strong">{size.charAt(0).toUpperCase() + size.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/InlineMessage/Size',
  component: InlineMessage,
};
