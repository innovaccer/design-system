import * as React from 'react';
import { Meter, Text } from '@/index';

// CSF format story
export const labelSize = () => {
  const sizes = ['small', 'regular', 'large'];

  return (
    <div className="d-flex flex-column justify-content-around">
      {sizes.map((size, index) => (
        <div key={index} className="d-flex align-items-center mb-5">
          <Text weight="medium" className="mr-5">
            {size.charAt(0).toUpperCase() + size.slice(1)}:{' '}
          </Text>
          <Meter
            value={40}
            labelSize={size}
            renderLabel={({ filledSteps, stepCount }) => `${filledSteps} out of ${stepCount}`}
          />
        </div>
      ))}
    </div>
  );
};

const customCode = `() => {
  const sizes = ['small', 'regular', 'large'];

  return (
    <div className="d-flex flex-column justify-content-around">
      {sizes.map((size, index) => (
        <div key={index} className="d-flex align-items-center mb-5">
          <Text weight="medium" className="mr-5">
            {size.charAt(0).toUpperCase() + size.slice(1)}: 
          </Text>
          <Meter value={40} labelSize={size} renderLabel={({filledSteps, stepCount}) => \`\${ filledSteps } out of \${stepCount} \`} />
        </div>
      ))}
    </div>
  );
}`;

export default {
  title: 'Components/Meter/Variants/Label Size',
  component: Meter,
  parameters: {
    docs: {
      docPage: {
        title: 'Meter',
        customCode,
      },
    },
  },
};
