import * as React from 'react';
import Dropdown from '../../Dropdown';
import Text from '@/components/atoms/text';
import { storyOptions } from '../../utils/Options';

// CSF format story
export const state = () => {
  const disabled = [true, false];

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '5%' }}>
        <div style={{ display: 'flex' }}>
          {
            disabled.map((buttonState, ind) => {
              return (
                <div style={{ marginRight: '5%' }} key={ind}>
                  <Text weight="strong">{state ? 'Disabled' : 'Enabled'}</Text> <br /><br />
                  <Dropdown icon={'events'} disabled={buttonState} options={storyOptions} placeholder={'Select'} />
                </div>
              );
            })
          }
        </div>
        <br />
        <Text weight="strong">{'Icon'}</Text>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex' }}>
          {
            disabled.map((buttonState, ind) => {
              return (
                <div style={{ marginRight: '5%' }} key={ind}>
                  <Text weight="strong">{state ? 'Disabled' : 'Enabled'}</Text> <br /><br />
                  <Dropdown
                    inlineLabel={'label'}
                    disabled={buttonState}
                    options={storyOptions}
                    placeholder={'Select'}
                  />
                </div>
              );
            })
          }
        </div>
        <br />
        <Text weight="strong">{'Label'}</Text>
      </div>
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
