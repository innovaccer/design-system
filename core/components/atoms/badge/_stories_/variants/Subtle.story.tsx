import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import Badge, { Appearance } from '../../Badge';
import Text from '@/components/atoms/text';

// CSF format story
export const subtle = () => {
  const ButtonSubtle = true;
  const weight = 'strong';

  const children = text('children', 'Badge');

  const appearances: Appearance[] = [
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
            <Badge appearance={appear} subtle={ButtonSubtle}>
              {children}
            </Badge>
            <br />
            <Text weight={weight}>{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/Badge/Variants/Subtle',
  component: Badge,
  parameters: {
    docs: {
      docPage: {
        title: 'Badge',
      },
    },
  },
};
