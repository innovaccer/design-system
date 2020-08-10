import * as React from 'react';
import Dropdown from '../../Dropdown';
import Text from '@/components/atoms/text';
import { storyOptions, iconOptions, subInfoOptions, iconWithSubinfoOptions  } from '../Options';

const labelMapping: { [key: string]: string } = {
  ['DEFAULT']: 'Default',
  ['WITH_ICON']: 'Icon',
  ['WITH_META']: 'SubInfo',
  ['ICON_WITH_META']: 'Icon with SubInfo'
};

const optionsMapping: { [key: string]: any } = {
  ['DEFAULT']: storyOptions,
  ['WITH_ICON']: iconOptions,
  ['WITH_META']: subInfoOptions,
  ['ICON_WITH_META']: iconWithSubinfoOptions
};

// CSF format story
export const optionType = () => {
  const optionTypes = ['DEFAULT', 'WITH_ICON', 'WITH_META', 'ICON_WITH_META'];

  return (
    <div className="d-flex" style={{ minHeight: '240px' }}>
      {
        optionTypes.map((type, ind) => {
          return (
            <div
              className="d-flex mr-9"
              key={ind}
              style={{ flexDirection: 'column' }}
            >
              <Text weight="strong">{labelMapping[type]}</Text><br />
              <Dropdown options={optionsMapping[type].slice(0, 3)} width={128}/>
            </div>
          );
        })
      }
      <div className="d-flex" style={{ flexDirection: 'column', width: '128px' }}>
        <Text weight="strong">{'Checkboxes'}</Text><br />
        <Dropdown options={storyOptions.slice(0, 3)} withCheckbox={true} />
      </div>

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
