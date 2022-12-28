import * as React from 'react';
import { Message, Text, Row, Column } from '@/index';

// CSF format story
export const appearanceWithTitle = () => {
  const appearances = ['alert', 'info', 'success', 'warning'];
  return (
    <Row>
      {appearances.map((appear, ind) => {
        return (
          <Column sizeM="4" className="p-4" key={ind}>
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
              appearance={appear}
              description="Patient record has been updated with new records."
              title="Outreach was not saved"
            />
            <br />
            <Text weight="strong" className="d-flex flex-column align-items-center">
              {appear.charAt(0).toUpperCase() + appear.slice(1)}
            </Text>
          </Column>
        );
      })}
    </Row>
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
