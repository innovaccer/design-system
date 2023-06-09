import * as React from 'react';
import { Message, Text, LinkButton } from '@/index';

// CSF format story
export const appearanceWithTitle = () => {
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
                  <LinkButton>Action 1</LinkButton>
                  <LinkButton className="ml-5">Action 2</LinkButton>
                </>
              }
              className="mt-4"
              appearance={appear}
              title="Outreach was not saved"
              description="Patient record has been updated with new records."
            />
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
