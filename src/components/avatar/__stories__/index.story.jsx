import * as React from 'react';
import { Text, Avatar } from '@/index';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      docPage: {
        description: 'Avatars are used to identify users through display pictures or their initials.',
      },
    },
  },
};

export const Basic = () => <Avatar text="JD" />;

export const Appearance = () => {
  const weight = 'strong';

  const appearances = [
    'primary',
    'secondary',
    'alert',
    'warning',
    'success',
    'accent1',
    'accent2',
    'accent3',
    'accent4',
  ];

  return (
    <div className="d-flex">
      {appearances.map((appearance, index) => {
        return (
          <div key={index} className="mr-9">
            <Text weight={weight}>{appearance.charAt(0).toUpperCase() + appearance.slice(1)}</Text>
            <br />
            <br />
            <Avatar text="JD" appearance={appearance} />
          </div>
        );
      })}
    </div>
  );
};

export const Size = () => {
  const weight = 'strong';

  return (
    <div className="d-flex">
      <div className="mr-9 d-flex flex-column">
        <Text weight={weight}>Regular</Text> <br />
        <Avatar text="JD" size="regular" />
      </div>
      <div className="mr-9  d-flex flex-column">
        <Text weight={weight}>Tiny</Text> <br />
        <Avatar size="tiny" text="JD" />
      </div>
    </div>
  );
};

export const AvatarText = () => {
  const weight = 'strong';

  return (
    <div className="d-flex">
      <div className="mr-9  d-flex flex-column">
        <Text weight={weight}>Initials</Text> <br />
        <Avatar text="JD" />
      </div>
      <div className="mr-9  d-flex flex-column">
        <Text weight={weight}>Name</Text> <br />
        <Avatar text="Doe" />
      </div>
    </div>
  );
};

export const AvatarIcon = () => {
  const weight = 'strong';

  return (
    <div className="d-flex">
      <div className="mr-9  d-flex flex-column">
        <Text weight={weight}>Tiny</Text> <br />
        <Avatar size="tiny" icon="person" />
      </div>

      <div className="mr-9  d-flex flex-column">
        <Text weight={weight}>Regular</Text> <br />
        <Avatar icon="group" />
      </div>
    </div>
  );
};

export const Image = () => {
  const weight = 'strong';

  return (
    <div className="d-flex">
      <div className="mr-9  d-flex flex-column">
        <Text weight={weight}>Regular</Text> <br />
        <Avatar appearance="secondary" image={{ src: '/logo.png', altText: 'avatar regular' }} />
      </div>
      <div className="mr-9  d-flex flex-column">
        <Text weight={weight}>Tiny</Text> <br />
        <Avatar appearance="secondary" size="tiny" image={{ src: '/logo.png', altText: 'avatar tiny' }} />
      </div>
    </div>
  );
};
export const withTooltip = () => {
  const weight = 'strong';

  return (
    <div className="d-flex">
      <div className="mr-9  d-flex flex-column">
        <Text weight={weight}>Tooltip</Text> <br />
        <Avatar text="JD" tooltip="John Doe" />
      </div>
    </div>
  );
};
