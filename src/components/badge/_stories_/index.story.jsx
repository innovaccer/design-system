import * as React from 'react';
import { Badge, Text } from '@/index';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    docs: {
      docPage: {
        title: 'Badge',
        description: 'Badges are used to tag entities with concise and relevant information.',
        a11yProps: `
          **ariaLabel:** Add \`ariaLabel='Current Status'\` to describe additional information for badge.
         `,
      },
    },
  },
};

export const SolidAppearances = () => {
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
            <Badge ariaLabel='Current Status' appearance={appear}>Badge</Badge>
            <br />
            <Text weight={weight}>{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
};

export const SubtleAppearances = () => {
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
            <Badge ariaLabel='Current Status' appearance={appear} subtle={true}>
              Badge
            </Badge>
            <br />
            <Text weight="strong">{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
};

export const Default = () => <Badge ariaLabel='Current Status'>Badge</Badge>;

export const SolidWarning = () => <Badge ariaLabel='Current Status' appearance="warning">Disapproved</Badge>;

export const SubtleWarning = () => (
  <Badge ariaLabel='Current Status' appearance="warning" subtle={true}>
    Pending
  </Badge>
);
