import * as React from 'react';
import Dropdown from '../../Dropdown';
import Text from '@/components/atoms/text';
import { storyOptions } from '../../utils/Options';

// CSF format story
export const placeholder = () => {
  const placeholderValues = ['', 'Select'];

  return (
    <div style={{ display: 'flex' }}>
      {
        placeholderValues.map((state, ind) => {
          return (
            <div style={{ marginRight: '5%' }} key={ind}>
              <Text weight="strong">{state ? 'With Placeholder' : 'Without Placeholder'}</Text> <br /><br />
              <Dropdown placeholder={state} options={storyOptions} />
            </div>
          );
        })
      }
    </div>
  );
};

export default {
  title: 'Atoms|Dropdown/Button',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        title: 'Dropdown'
      }
    }
  }
};
