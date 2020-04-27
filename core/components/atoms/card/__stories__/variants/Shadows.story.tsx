import * as React from 'react';
import Card, { Shadow } from '../../Card';

// CSF format story
export const shadow = () => {
  const styles = {
    height: '150px',
    width: '150px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    marginRight: '3%',
  };

  const outerStyles = {
    display: 'flex',
    'flex-direction': 'row',
  };

  const shadows: Shadow[] = ['light', 'medium', 'dark'];

  return (
    <div style={outerStyles}>
      {
        shadows.map((CardShadow, ind) => {
          return (
            <Card key={ind} shadow={CardShadow} style={styles}>
              {CardShadow.charAt(0).toUpperCase() + CardShadow.slice(1)} Card
            </Card>
          );
        })
      }
    </div>
  );

};

export default {
  title: 'Atoms|Card/Variants',
  component: Card,
  parameters: {
    docs: {
      docPage: {
        title: 'Card'
      }
    }
  }
};
