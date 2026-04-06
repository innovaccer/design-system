import * as React from 'react';
import { AvatarGroup, Text } from '@/index';
import { list, disabledList } from '../AvatarList';

export const State = () => {
  return (
    <div className="d-flex">
      <div className="flex-column mr-9 ">
        <Text weight="strong">Default</Text>
        <div className="mt-4">
          <AvatarGroup size="regular" list={list.slice(0, 4)} />
        </div>
      </div>
      <div className="flex-column">
        <Text weight="strong">Disabled</Text>
        <div className="mt-4">
          <AvatarGroup list={disabledList.slice(0, 4)} />
        </div>
      </div>
    </div>
  );
};

const customCode = `() => {
  const list = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Steven', lastName: 'Packton' },
    { firstName: 'Nancy', lastName: 'Wheeler' },
    { firstName: 'Monica', lastName: 'Geller' },
  ];

  const disabledList = [
    {
      firstName: 'John',
      lastName: 'Doe',
      disabled: true,
      tooltipSuffix: '(Deactivated)',
    },
    { firstName: 'Steven', lastName: 'Packton' },
    { firstName: 'Nancy', lastName: 'Wheeler' },
    {
      firstName: 'Monica',
      lastName: 'Geller',
      disabled: true,
      tooltipSuffix: '(Deactivated)',
    },
  ];

  return (
    <div className="d-flex">
      <div className="flex-column mr-9 ">
        <Text weight="strong">Default</Text>
        <div className="mt-4">
          <AvatarGroup size="regular" list={list} />
        </div>
      </div>
      <div className="flex-column">
        <Text weight="strong">Disabled</Text>
        <div className="mt-4">
          <AvatarGroup list={disabledList} />
        </div>
      </div>
    </div>
  );
}`;

export default {
  title: 'Components/Avatar/AvatarGroup/Variants/State',
  component: AvatarGroup,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
