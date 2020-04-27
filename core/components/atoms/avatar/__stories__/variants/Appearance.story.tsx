import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import Avatar, { Appearance } from '../../Avatar';
import Text from '@/components/atoms/text';

// CSF format story
export const appearance = () => {
  const children = text('children', 'JD');
  const weight = 'strong';

  const style = {
    display: 'flex',
  };

  const innerStyle = {
    marginRight: '5%',
  };

  const appearances: Appearance[] = ['primary', 'alert', 'warning', 'success', 'accent1', 'accent2', 'accent3', 'accent4'];

  return (
    <div style={style}>
      {appearances.map((appear, ind) => {
        return (
          <div key={ind} style={innerStyle}>
            <Avatar appearance={appear}>
              {children}
            </Avatar>
            <br />
            <Text weight={weight}>{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Atoms|Avatar/Variants',
  component: Avatar,
  parameters: {
    docs: {
      docPage: {
        title: 'Avatar'
      }
    }
  }
};
