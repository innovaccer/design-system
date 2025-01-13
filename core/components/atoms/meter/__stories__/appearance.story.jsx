import * as React from 'react';
import { Meter, Text } from '@/index';

// CSF format story
export const appearance = () => {
  const appearance = ['alert', 'warning', 'success', 'info'];
  return (
    <div className="d-flex flex-column justify-content-around">
      {appearance.map((color, index) => (
        <div key={index} className="d-flex align-items-center mb-5">
          <Text weight="medium" className="mr-5">
            {color.charAt(0).toUpperCase() + color.slice(1)}:
          </Text>
          <Meter value={40} fillColor={color} />
        </div>
      ))}
    </div>
  );
};

export default {
  title: 'Components/Meter/Variants/Appearance',
  component: Meter,
  parameters: {
    docs: {
      docPage: {
        title: 'Meter',
      },
    },
  },
};
