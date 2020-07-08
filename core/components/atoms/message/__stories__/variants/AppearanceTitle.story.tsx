import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import Message, { Appearance } from '../../index';
import Text from '@/components/atoms/text';

// CSF format story
export const appearanceWithTitle = () => {

  const appearances: Appearance[] = ['default', 'alert', 'info', 'success', 'warning'];
  const innerStyle = {
    display: 'flex',
    'align-items': 'center',
    'flex-direction': 'column',
  };

  const title = text(
    'title',
    'Outreach was not saved'
  );

  return (
    <div className="Row">
      {
        appearances.map((appear, ind) => {
          return (
            <div key={ind} style={innerStyle} className="mr-7 mb-7 w-25 d-flex">
              <Message appearance={appear} title={title}>
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
  title: 'Atoms|Message/Variants',
  component: Message,
  parameters: {
    docs: {
      docPage: {
        title: 'Message'
      }
    }
  }
};
