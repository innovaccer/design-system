import * as React from 'react';
import Dropdown from '../../Dropdown';
import Text from '@/components/atoms/text';
import { storyOptions } from '../Options';
import { OptionType } from '../../DropdownList';

const labelMapping: { [key: string]: string } = {
  ['DEFAULT']: 'Default',
  ['WITH_ICON']: 'Icon',
  ['WITH_META']: 'SubInfo',
  ['ICON_WITH_META']: 'Icon with SubInfo'
};

// CSF format story
export const loadingType = () => {
  const optionTypes = ['DEFAULT', 'WITH_ICON', 'WITH_META', 'ICON_WITH_META'];

  const style = {
    display: 'flex',
    'flex-direction': 'column',
    alignItems: 'center',
    marginRight: '5%',
    width: '150px'
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', minHeight: '270px' }}>
      {
        optionTypes.map((type, ind) => {
          return (
            <div style={style} key={ind}>
              <Text weight="strong">{labelMapping[type]}</Text><br />
              <Dropdown
                options={storyOptions.slice(0, 5)}
                optionType={type as OptionType}
                loading={true}
              />
            </div>
          );
        })
      }
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '150px' }}>
        <Text weight="strong">{'Checkboxes'}</Text><br />
        <Dropdown options={storyOptions.slice(0, 5)} withCheckbox={true} loading={true} />
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
