import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { Message, Text } from '@/index';
import { MessageProps } from '@/index.type';

// CSF format story
export const appearanceWithTitle = () => {
  const appearances: MessageProps['appearance'][] = ['default', 'alert', 'info', 'success', 'warning'];
  const innerStyle = {
    display: 'flex',
    'align-items': 'center',
    'flex-direction': 'column',
  };

  const title = text('title', 'Outreach was not saved');

  return (
    <div className="Row">
      {appearances.map((appear, ind) => {
        return (
          <div key={ind} style={innerStyle} className="mr-7 mb-7 w-25 d-flex">
            <Message
              appearance={appear}
              title={title}
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
  title: 'Components/Message/Variants/Appearance With Title',
  component: Message,
  parameters: {
    docs: {
      docPage: {
        title: 'Message',
      },
    },
  },
};
