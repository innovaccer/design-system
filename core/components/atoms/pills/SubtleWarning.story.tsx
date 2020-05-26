import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import Pills, { Appearance } from '../pills';
import Text from '@/components/atoms/text';

// CSF format story
export const subtleWarning = () => {
  const ButtonSubtle = true;
  const weight = 'strong';

  const children = text('children', 'Pills');

  const appearances: Appearance[] = ['warning'];

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
                subtle={ButtonSubtle}
              >
                {children}
              </Pills>
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
