import * as React from 'react';
import { Text } from '@/index';

export default {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    docs: {
      docPage: {
        title: 'Text',
      },
    },
  },
};

export const Default = () => {

  return (
    <Text>Default</Text>
  );
};

export const Appearances = () => {
  const appearances = ['default', 'white', 'destructive', 'subtle', 'disabled', 'success', 'link'];

  return (
    <div className="d-flex">
      {appearances.map((appear, ind) => {
        return (
          <div key={ind} className={`mr-6 ${appear === 'white'? 'bg-dark' : 'bg-light'}`}>
            <Text appearance={appear}>{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
          </div>
        );
      })}
    </div>
  );
}

export const Size = () => {

  const sizes = ['small', 'regular', 'large'];

  return (
    <div className="d-flex align-items-center">
      {
        sizes.map((size, ind) => {
          return (
            <div key={ind} className="mr-6">
              <Text size={size}>{size.charAt(0).toUpperCase() + size.slice(1)}</Text>
            </div>
          )
        })
      }
    </div>
  );
}

export const Weight = () => {

  const textWeights = ['strong', 'medium'];

  return (
    <div className="d-flex">
      {
        textWeights.map((weight, ind) => {
          return (
            <div key={ind} className="mr-6">
              <Text weight={weight}>{weight.charAt(0).toUpperCase() + weight.slice(1)}</Text>
            </div>
          )
        })
      }
    </div>
  );
}
