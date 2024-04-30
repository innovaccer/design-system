import * as React from 'react';
import Dropdown from '../../Dropdown';
import Text from '@/components/atoms/text';
import { Uncontrolled, Controlled } from '../_common_/types';
import { storyOptions, iconOptions, subInfoOptions, iconWithSubinfoOptions } from '../Options';

const labelMapping = {
  ['DEFAULT']: 'Default',
  ['WITH_ICON']: 'Icon',
  ['WITH_META']: 'SubInfo',
  ['ICON_WITH_META']: 'Icon with SubInfo',
};

const optionsMapping = {
  ['DEFAULT']: storyOptions,
  ['WITH_ICON']: iconOptions,
  ['WITH_META']: subInfoOptions,
  ['ICON_WITH_META']: iconWithSubinfoOptions,
};

// CSF format story
export const optionType = () => {
  const optionTypes = ['DEFAULT', 'WITH_ICON', 'WITH_META', 'ICON_WITH_META'];

  return (
    <div className="d-flex">
      {optionTypes.map((type, ind) => {
        return (
          <div className="d-flex flex-column mr-9 w-25" key={ind}>
            <Text weight="strong">{labelMapping[type]}</Text>
            <br />
            <Dropdown options={optionsMapping[type].slice(0, 3)} />
          </div>
        );
      })}
      <div className="d-flex flex-column w-25">
        <Text weight="strong">{'Checkboxes'}</Text>
        <br />
        <Dropdown options={storyOptions.slice(0, 3)} withCheckbox={true} />
      </div>
    </div>
  );
};

export default {
  title: 'Components/Dropdown (Deprecated)/Variants/Option Type',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
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
