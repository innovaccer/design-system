import * as React from 'react';
import Dropdown from '../../Dropdown';
import Text from '@/components/atoms/text';
import { storyOptions } from '../Options';

// CSF format story
export const sections = () => {
  const options: any[] = [];

  for (let i = 1; i <= 10; i++) {
    options.push({
      label: `Option ${i}`,
      value: `Option ${i}`,
      group: 'Group'
    });
  }
  const BooleanValue = [true, false];

  const style = {
    display: 'flex',
    alignItems: 'center',
    'flex-direction': 'column',
  };

  const innerStyle = {
    display: 'flex',
    'flex-direction': 'column',
    alignItems: 'center',
    marginRight: '20px',
    width: '128px',
  };

  return (
    <div style={{ display: 'flex' }}>
      {
        BooleanValue.map((value, index) => {
          return (
            <div key={index} style={style}>
              <div style={{ display: 'flex' }}>
                <div style={innerStyle}>
                  <Text weight="strong">{'With Sections'}</Text><br />
                  <Dropdown options={options} checkboxes={value} />
                </div>
                <div style={innerStyle}>
                  <Text weight="strong">{'Without Sections'}</Text> <br />
                  <Dropdown options={storyOptions} checkboxes={value} />
                </div>
              </div> <br />
              <Text weight="strong">{value ? ' Multi Select' : 'Single Select'}</Text>
            </div>
          );
        })
      }
    </div>
  );
};

export default {
  title: 'Atoms|Dropdown/Variants',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        title: 'Dropdown'
      }
    }
  }
};
