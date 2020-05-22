import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import Pills, { Appearance } from '../../pills';

export const defaultpill = () => {
  const subtle = false;
  const children = text('children', 'Pills');

  const appearances: Appearance[] = ['secondary'];

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
              <Pills
                appearance={appear}
                subtle={subtle}
              >
                {children}
              </Pills>
            </div>
          );
        })
      }
    </div>
  );
};

export default {
  title: 'Atoms|Pills',
  component: Pills,
  parameters: {
    docs: {
      docPage: {
        title: 'Pills'
      }
    }
  }
};
