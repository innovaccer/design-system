import * as React from 'react';
import { Message, Text } from '@/index';
import { MessageProps } from '@/index.type';

// CSF format story
export const appearanceWithoutTitle = () => {
  const appearances: MessageProps['appearance'][] = ['default', 'alert', 'info', 'success', 'warning'];
  const innerStyle = {
    display: 'flex',
    'align-items': 'center',
    'flex-direction': 'column',
  };
  return (
    <div className="Row">
      {appearances.map((appear, ind) => {
        return (
          <div key={ind} style={innerStyle} className="mr-7 mb-7 w-25 d-flex">
            <Message
              appearance={appear}
              description="Patient record has been updated with new records."
              actions={
                <>
                  <Text className="cursor-pointer" appearance="link">
                    Action 1
                  </Text>
                  <Text className="ml-5 cursor-pointer" appearance="link">
                    Action 2
                  </Text>
                </>
              }
            />
            <br />
            <Text weight="strong">{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
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
