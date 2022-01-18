import * as React from 'react';
import { Avatar, Text } from '@/index';

export default {
  title: 'Components/Avatar',
  component: Avatar,
};

export const Basic = () => <Avatar firstName="John" lastName="Doe" appearance="primary" />;

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
      {appearances.map((appear, ind) => {
        return (
          <div key={ind} className="mr-9">
            <Text weight={weight}>{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
            <br />
            <br />
            <Avatar firstName="John" lastName="Doe" appearance={appear} />
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
        <Avatar firstName="John" lastName="Doe" />
      </div>
      <div className="mr-9  d-flex flex-column">
        <Text weight={weight}>Tiny</Text> <br />
        <Avatar firstName="John" lastName="Doe" size="tiny" />
      </div>
    </div>
  );
};
