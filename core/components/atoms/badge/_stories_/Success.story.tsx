import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import Badge, { Appearance } from '../Badge';
import Text from '@/components/atoms/text';

// CSF format story
export const success = () => {
  const subtle = false;
  const weight = 'strong';

  const children = text('children', 'Badge');

  const appearances: Appearance[] = ['success'];

  const style = {
    display: 'flex',
  };

  const innerStyle = {
    marginRight: '5%',
  };

  return (
    <div style={style}>
      {
        appearances.map((appear, ind) => {
          return (
            <div key={ind} style={innerStyle}>
              <Badge
                appearance={appear}
                subtle={subtle}
              >
                {children}
              </Badge>
              <br />
              <Text weight={weight}>{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
            </div>
          );
        })
      }
    </div>
  );
};

export default {
  title: 'Atoms|Badge',
  component: Badge,
  parameters: {
    docs: {
      docPage: {
        title: 'Badge'
      }
    }
  }
};
