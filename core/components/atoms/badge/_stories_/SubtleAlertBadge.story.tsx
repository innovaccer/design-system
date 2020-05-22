import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import Badge, { Appearance } from '../Badge';

export const subtleAlert = () => {
  const ButtonSubtle = true;
  const children = text('children', 'Badge');

  const appearances: Appearance[] = ['alert'];

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
                subtle={ButtonSubtle}
              >
                {children}
              </Badge>
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
