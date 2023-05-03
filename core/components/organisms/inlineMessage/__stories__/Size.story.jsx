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
            <div className="h-50">
              <InlineMessage size={size} appearance="info" description="There are two new referral requests." />
            </div>
            <br />
            <Text weight="strong">{size}</Text>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Indicators/InlineMessage/Size',
  component: InlineMessage,
};
