import * as React from 'react';
import Card, { Shadow } from '../../Card';

// CSF format story
export const shadow = () => {
  const shadows: Shadow[] = ['none', 'light', 'medium', 'dark'];

  return (
    <div className="d-flex">
      {
        shadows.map((CardShadow, ind) => {
          return (
            <div className="w-25 mr-8" style={{ height: '150px' }} key={ind}>
              <Card shadow={CardShadow} className="h-100 w-100">
                {CardShadow.charAt(0).toUpperCase() + CardShadow.slice(1)}
              </Card>
            </div>
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
