import * as React from 'react';
import { AvatarGroup, Avatar, Text } from '@/index';
import { list } from '../AvatarList';

export const customPopper = () => {

  const popperRenderer = (names: any) => {
    const AvatarList = names.map((avatar: any, index: number) => {
      const { firstName, lastName, appearance } = avatar;

      return (
        <div className="d-flex align-items-center mr-4 mb-4" key={index}>
          <Avatar
            firstName={firstName}
            lastName={lastName}
            appearance={appearance}
            className="mr-4"
            withTooltip={false}
          />
          <Text>{`${firstName} ${lastName}`}</Text>
        </div>
      );
    });

    return (
      <div className="overflow-auto py-4 px-6" style={{ maxHeight: '150px' }}>
        {AvatarList}
      </div>
    );
  };

  return (
    <AvatarGroup
      list={list}
      popoverOptions={{ popperRenderer, dark: false, on: 'click' }}
    />
  );
};

const customCode = `() => {
  const list = [
    {
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      firstName: 'Steven',
      lastName: 'Packton',
    },
    {
      firstName: 'Nancy',
      lastName: 'Wheeler'
    },
    {
      firstName: 'Monica',
      lastName: 'Geller'
    },
    {
      firstName: 'Arya',
      lastName: 'Stark',
    },
    {
      firstName: 'Rachel',
      lastName: 'Green',
    },
    {
      firstName: 'Walter',
      lastName: 'Wheeler'
    },
  ];

  const popperRenderer = (list) => {
    const AvatarList = list.map((avatar, index) => {
      const { firstName, lastName, appearance } = avatar;

      return (
        <div className="d-flex align-items-center mr-4 mb-4" key={index}>
          <Avatar
            firstName={firstName}
            lastName={lastName}
            appearance={appearance}
            className="mr-4"
            withTooltip={false}
          />
          <Text>{\`\${firstName} \${lastName}\`}</Text>
        </div>
      )
    });

    return (
      <div className="overflow-auto py-4 px-6" style={{ maxHeight: '150px' }}>
        {AvatarList}
      </div>
    )
  };

  return (
    <AvatarGroup
      list={list}
      popoverOptions={{ dark: false, on: 'click', popperRenderer }}
    />
  );
}`;

export default {
  title: 'Components/AvatarGroup/Variants/Custom Popper',
  component: AvatarGroup,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
