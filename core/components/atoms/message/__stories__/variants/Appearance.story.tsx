import * as React from 'react';
import Message, { Appearance } from '../../index';
import Text from '@/components/atoms/text';

// CSF format story
export const appearanceWithoutTitle = () => {

  const appearances: Appearance[] = ['default', 'alert', 'info', 'success', 'warning'];
  const innerStyle = {
    display: 'flex',
    'align-items': 'center',
    'flex-direction': 'column',
  };
  return (
    <div className="Row">
      {
        appearances.map((appear, ind) => {
          return (
            <div key={ind} style={innerStyle} className="mr-7 mb-7 w-25 d-flex">
              <Message appearance={appear}>
                Patient record has been updated with new records.
              </Message>
              <br />
              <Text weight="strong">{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
            </div>
          );
        })
      }
    </div>

  );
};

export default {
  title: 'Components/Message/Variants',
  component: Message,
  parameters: {
    docs: {
      docPage: {
        title: 'Message'
      }
    }
  }
};
