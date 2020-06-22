import * as React from 'react';
import TextArea from '../../TextArea';
import Text from '@/components/atoms/text';
import { action } from '@storybook/addon-actions';

export const Disable = () => {

  const style = {
    display: 'flex',
    'flex-wrap': 'wrap',
  };

  const innerStyle = {
    display: 'flex',
    'flex-direction': 'column',
    alignItems: 'center',
    maxWidth: '300px',
    marginRight: '5%',
    marginBottom: '20px',
  };

  const BooleanValue = [true, false];

  return (
    <div style={style}>
      {
        BooleanValue.map((value, ind) => (
          <div style={innerStyle} key={ind}>
            <div style={innerStyle}>
              <div style={{ marginBottom: '20px', width: '230px' }}>
                <TextArea
                  name="TextArea"
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
  title: 'Atoms|TextArea/Variants',
  component: TextArea,
  parameters: {
    docs: {
      docPage: {
        title: 'TextArea'
      }
    }
  }
};
