import * as React from 'react';
import { Pills, Text } from '@/index';

export default {
  title: 'Components/Pills',
  component: Pills,
  parameters: {
    docs: {
      docPage: {
        title: 'Pills',
        description: 'Pills are used to highlight number of items. For status and text, use a Badge.',
        a11yProps: "**ariaLabel:** Add \`ariaLabel='Total records'\` to describe the numeric value in Pills.",
      },
    },
  },
};

export const SolidAppearances = () => {
  const subtle = false;
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
            <Pills appearance={appear} subtle={subtle} ariaLabel="Total records">
              10
            </Pills>
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
            <Pills appearance={appear} subtle={true} ariaLabel="Total records">
              10
            </Pills>
            <br />
            <Text weight="strong">{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
};

export const Solid = () => (
  <Pills appearance="alert" ariaLabel="Total records">
    {'10'}
  </Pills>
);

export const Subtle = () => (
  <Pills appearance="alert" subtle={true} ariaLabel="Total records">
    {'10'}
  </Pills>
);

export const Default = () => <Pills ariaLabel="Total records">10</Pills>;
