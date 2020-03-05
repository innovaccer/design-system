import * as React from 'react';
import { select } from '@storybook/addon-knobs';
import Card from './Card';

// CSF format story
export const all = () => {
  const shadow = select(
    'shadow',
    ['light', 'medium', 'dark'],
    undefined
  );

  const styles = {
    height: '150px',
    width: '150px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex'
  };

  const getChildren = (shadowType: any) => {
    switch (shadowType) {
      case 'light':
        return <span>Light Shadow</span>;

      case 'medium':
        return <span>Medium Shadow</span>;

      case 'dark':
        return <span>Dark Shadow</span>;

      default:
        return <span>No Shadow</span>;
    }
  };

  const children = getChildren(shadow);

  return (
    <Card shadow={shadow} style={styles}>
      {children}
    </Card>
  );
};

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Card' };
