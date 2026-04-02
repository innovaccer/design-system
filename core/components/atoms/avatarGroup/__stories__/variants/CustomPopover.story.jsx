import * as React from 'react';
import { AvatarGroup, Avatar, Text } from '@/index';
import { list } from '../AvatarList';
import './style.css';

const MyCustomPopover = ({ names }) => {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus({ preventScroll: true });
    }
  }, []);

  const AvatarList = names.map((avatar, index) => {
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
    <div
      ref={containerRef}
      tabIndex={-1}
      style={{ outline: 'none' }}
      className="overflow-auto py-4 px-6 UserAvatars-popover"
    >
      {AvatarList}
    </div>
  );
};

export const customPopover = () => {
  const popperRenderer = (names) => <MyCustomPopover names={names} />;

  return <AvatarGroup list={list} popoverOptions={{ popperRenderer, dark: false }} />;
};

const customCode = `/*
// style.css
.UserAvatars-popover {
    max-height: var(--spacing-320);
}
*/

() => {
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

  const MyCustomPopover = ({ names }) => {
    const containerRef = React.useRef(null);

    React.useEffect(() => {
      if (containerRef.current) {
        containerRef.current.focus({ preventScroll: true });
      }
    }, []);

    const AvatarList = names.map((avatar, index) => {
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
      );
    });

    return (
      <div
        ref={containerRef}
        tabIndex={-1}
        style={{ outline: 'none' }}
        className="overflow-auto py-4 px-6 UserAvatars-popover"
      >
        {AvatarList}
      </div>
    );
  };

  const popperRenderer = (names) => <MyCustomPopover names={names} />;

  return (
    <AvatarGroup
      list={list}
      popoverOptions={{ dark: false, popperRenderer }}
    />
  );
}`;

export default {
  title: 'Components/Avatar/AvatarGroup/Variants/Custom Popover',
  component: AvatarGroup,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
