import * as React from 'react';
import Dropdown from '../../../Dropdown';
import Text from '@/components/atoms/text';
import { Uncontrolled, Controlled } from '../../_common_/types';
import { storyOptions } from '../../Options';

// CSF format story
export const state = () => {
  const disabled = [true, false];

  return (
    <div className="d-flex pb-14">
      <div className="d-flex mr-8 flex-column align-items-center">
        <div className="d-flex">
          {disabled.map((buttonState, ind) => {
            return (
              <div className="mr-8" key={ind}>
                <Text weight="strong">{buttonState ? 'Disabled' : 'Enabled'}</Text> <br />
                <br />
                <Dropdown icon={'event'} disabled={buttonState} options={storyOptions} placeholder={'Select'} />
              </div>
            );
          })}
        </div>
        <br />
        <Text weight="strong">{'Icon'}</Text>
      </div>
      <div className="d-flex flex-column align-items-center">
        <div className="d-flex">
          {disabled.map((buttonState, ind) => {
            return (
              <div className="mr-8" key={ind}>
                <Text weight="strong">{buttonState ? 'Disabled' : 'Enabled'}</Text> <br />
                <br />
                <Dropdown inlineLabel={'label'} disabled={buttonState} options={storyOptions} placeholder={'Select'} />
              </div>
            );
          })}
        </div>
        <br />
        <Text weight="strong">{'Label'}</Text>
      </div>
    </div>
  );
};

const customCode = `() => {
  const storyOptions = [];
  for (let i = 1; i <= 10; i++) {
    storyOptions.push({
      label: \`Option \${i}\`,
      value: \`Option \${i}\`,
      icon: 'event',
      subInfo: 'subInfo'
    });
  }

  const disabled = [true, false];

  return (
    <div className='d-flex'>
      <div className='mr-8 w-25'>
        <Text weight="strong">Icon Disabled</Text> <br /><br />
        <Dropdown icon={'event'} disabled={true} options={storyOptions} />
      </div>
      <div className='mr-8 w-25'>
        <Text weight="strong">Icon Enabled</Text> <br /><br />
        <Dropdown icon={'event'} disabled={false} options={storyOptions} />
      </div>
      <div className='mr-8 w-25'>
        <Text weight="strong">Label Disabled</Text> <br /><br />
        <Dropdown inlineLabel={'label'} disabled={true} options={storyOptions} />
      </div>
      <div className='mr-8 w-25'>
        <Text weight="strong">Label Enabled</Text> <br /><br />
        <Dropdown inlineLabel={'label'} disabled={false} options={storyOptions} />
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/Dropdown (Deprecated)/Variants/Trigger/State',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        customCode,
        isDeprecated: true,
        props: {
          components: { Uncontrolled, Controlled },
          exclude: ['showHead'],
        },
      },
    },
  },
};
