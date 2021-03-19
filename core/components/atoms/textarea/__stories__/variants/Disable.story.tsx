import * as React from 'react';
import { Text, Textarea } from '@/index';
import { action } from '@storybook/addon-actions';

export const Disable = () => {

  const innerStyle = {
    display: 'flex',
    'flex-direction': 'column',
    alignItems: 'center',
    maxWidth: '300px',
  };

  const BooleanValue = [true, false];

  return (
    <div className="Row">
      {
        BooleanValue.map((value, ind) => (
          <div style={innerStyle} className="mr-9 mb-5"  key={ind}>
            <div style={innerStyle} className="mr-9 mb-5">
              <div className="w-100 mb-6">
                <Textarea
                  name="Textarea"
                  onChange={action('on-change')}
                  placeholder="Placeholder"
                  disabled={value}
                  rows={3}
                />
              </div>
              <Text weight="strong">{value ? 'Disabled' : 'Enabled'}</Text>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default {
  title: 'Components/Textarea/Variants',
  component: Textarea,
  parameters: {
    docs: {
      docPage: {
        title: 'Textarea'
      }
    }
  }
};
