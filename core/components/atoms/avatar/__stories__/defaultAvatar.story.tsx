import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import Avatar, { Appearance } from '../Avatar';

export const defaultAvatar = () => {
  const children = text('children', 'JD');
  const style = {
    display: 'flex',
  };

  const innerStyle = {
    marginRight: '5%',
  };

  const appearances: Appearance[] = ['primary'];

  return (
    <div style={style}>
      {appearances.map((appear, ind) => {
        return (
          <div key={ind} style={innerStyle}>
            <Avatar appearance={appear}>
              {children}
            </Avatar>
          </div>
        );
      })}
    </div>
  );
};

export default {
  title: 'Atoms|Avatar',
  component: Avatar,
  parameters: {
    docs: {
      docPage: {
        title: 'Avatar'
      }
    }
  }
};
