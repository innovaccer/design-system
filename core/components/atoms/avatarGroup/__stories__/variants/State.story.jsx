import * as React from 'react';
import { AvatarGroup, Text } from '@/index';
import { list, disabledList } from '../AvatarList';

export const State = () => {
  const popoverOptions = { on: 'hover' };

  return (
    <div className="d-flex">
      <div className="flex-column mr-9 ">
        <Text weight="strong">Default</Text>
        <div className="mt-4">
          <AvatarGroup size="regular" list={list.slice(0, 4)} popoverOptions={popoverOptions} />
        </div>
      </div>
      <div className="flex-column">
        <Text weight="strong">Disabled</Text>
        <div className="mt-4">
          <AvatarGroup list={disabledList.slice(0, 4)} popoverOptions={popoverOptions} />
        </div>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Avatar/AvatarGroup/Variants/State',
  component: AvatarGroup,
  parameters: {
    docs: {
      docPage: {},
    },
  },
};
