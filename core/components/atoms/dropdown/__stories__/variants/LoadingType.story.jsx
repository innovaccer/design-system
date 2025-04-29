import * as React from 'react';
import Dropdown from '../../Dropdown';
import Text from '@/components/atoms/text';
import { storyOptions } from '../Options';
import { Uncontrolled, Controlled } from '../_common_/types';

const labelMapping = {
  ['DEFAULT']: 'Default',
  ['WITH_ICON']: 'Icon',
  ['WITH_META']: 'SubInfo',
  ['ICON_WITH_META']: 'Icon with SubInfo',
};

// CSF format story
export const loadingType = () => {
  const optionTypes = ['DEFAULT', 'WITH_ICON', 'WITH_META', 'ICON_WITH_META'];

  return (
    <div className="d-flex">
      {optionTypes.map((type, ind) => {
        return (
          <div className="d-flex flex-column align-items-center mr-8 w-25" key={ind}>
            <Text weight="strong">{labelMapping[type]}</Text>
            <br />
            <Dropdown options={storyOptions.slice(0, 5)} optionType={type} loading={true} />
          </div>
        );
      })}
      <div className="d-flex flex-column align-items-center w-25">
        <Text weight="strong">{'Checkboxes'}</Text>
        <br />
        <Dropdown options={storyOptions.slice(0, 5)} withCheckbox={true} loading={true} />
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

  return (
    <div className='d-flex'>
      <div className='mr-8 w-25'>
        <Text weight="strong">Default</Text><br /><br />
        <Dropdown options={storyOptions} optionType={'DEFAULT'} loading={true}/>
      </div>
      <div className='mr-8 w-25'>
        <Text weight="strong">Icon</Text><br /><br />
        <Dropdown options={storyOptions} optionType={'WITH_ICON'} loading={true}/>
      </div>
      <div className='mr-8 w-25'>
        <Text weight="strong">SubInfo</Text><br /><br />
        <Dropdown options={storyOptions} optionType={'WITH_META'} loading={true}/>
      </div>
      <div className='mr-8 w-25'>
        <Text weight="strong">Icon with subInfo</Text><br /><br />
        <Dropdown options={storyOptions} optionType={'ICON_WITH_META'} loading={true}/>
      </div>
      <div className='mr-8 w-25'>
        <Text weight="strong">{'Checkboxes'}</Text><br /><br />
        <Dropdown options={storyOptions} withCheckbox={true} loading={true}/>
      </div>
    </div>
  )
}`;

export default {
  title: 'Components/Dropdown (Deprecated)/Variants/Loading Type',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Dropdown',
        isDeprecated: true,
        props: {
          components: { Uncontrolled, Controlled },
          exclude: ['showHead'],
        },
      },
    },
  },
};
