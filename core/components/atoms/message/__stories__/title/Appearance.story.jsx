import * as React from 'react';
import { Message, Text } from '@/index';

// CSF format story
export const appearanceWithoutTitle = () => {
  const appearances = ['alert', 'info', 'success', 'warning'];
  return (
    <div>
      {appearances.map((appear, ind) => {
        return (
          <div key={ind} className="mb-7">
            <Text weight="strong">{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
            <Message
              actions={
                <>
                  <Text appearance="link" className="cursor-pointer">
                    Action 1
                  </Text>
                  <Text appearance="link" className="ml-5 cursor-pointer">
                    Action 2
                  </Text>
                </>
              }
              className="mt-4"
              appearance={appear}
              description="Patient record has been updated with new records."
            />
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Message/Variants/Appearance Without Title',
  component: Message,
  parameters: {
    docs: {
      docPage: {
        title: 'Message',
      },
    },
  },
};
