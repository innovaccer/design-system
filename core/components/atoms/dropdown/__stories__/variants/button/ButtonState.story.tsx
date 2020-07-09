import * as React from 'react';
import Dropdown from '../../../Dropdown';
import Text from '@/components/atoms/text';
import { storyOptions } from '../../Options';

// CSF format story
export const state = () => {
  const disabled = [true, false];

  return (
    <div className="d-flex" style={{ minHeight: '270px' }}>
      <div className="d-flex mr-8" style={{ flexDirection: 'column', alignItems: 'center' }}>
        <div className="d-flex">
          {
            disabled.map((buttonState, ind) => {
              return (
                <div style={{ marginRight: '5%' }} key={ind}>
                  <Text weight="strong">{buttonState ? 'Disabled' : 'Enabled'}</Text> <br /><br />
                  <Dropdown icon={'events'} disabled={buttonState} options={storyOptions} placeholder={'Select'} />
                </div>
              );
            })
          }
        </div>
        <br />
        <Text weight="strong">{'Icon'}</Text>
      </div>
      <div className="d-flex" style={{ flexDirection: 'column', alignItems: 'center' }}>
        <div className="d-flex">
          {
            disabled.map((buttonState, ind) => {
              return (
                <div className="mr-8" key={ind}>
                  <Text weight="strong">{buttonState ? 'Disabled' : 'Enabled'}</Text> <br /><br />
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

const customCode =  `() => {
  const storyOptions = [];
  for (let i = 1; i <= 10; i++) {
    storyOptions.push({
      label: \`Option \${i}\`,
      value: \`Option \${i}\`,
      icon: 'events',
      subInfo: 'subInfo'
    });
  }

  const disabled = [true, false];

  return (
    <div className='d-flex' style={{ minHeight: '270px' }}>
      <div className='mr-8'>
        <Text weight="strong">Icon Disabled</Text> <br /><br />
        <Dropdown icon={'events'} disabled={true} options={storyOptions} />
      </div>
      <div className='mr-8'>
        <Text weight="strong">Icon Enabled</Text> <br /><br />
        <Dropdown icon={'events'} disabled={false} options={storyOptions} />
      </div>
      <div className='mr-8'>
        <Text weight="strong">Label Disabled</Text> <br /><br />
        <Dropdown inlineLabel={'label'} disabled={true} options={storyOptions} />
      </div>
      <div className='mr-8'>
        <Text weight="strong">Label Enabled</Text> <br /><br />
        <Dropdown inlineLabel={'label'} disabled={false} options={storyOptions} />
      </div>
    </div>
  );
}`;

export default {
  title: 'Atoms|Dropdown/Variants/Button',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
