import * as React from 'react';
import Legend from '../Legend';

// CSF format story
export const all = () => {
  const children = 'Legend';
  const iconAppearance = 'inverse';
  const labelAppearance = 'white';
  const labelWeight = 'strong';
  const iconSize = 14;

  const options = {
    iconAppearance,
    labelAppearance,
    labelWeight,
    iconSize,
  };
  return (
    <div className={labelAppearance === 'white' ? 'bg-dark' : 'bg-transparent'}>
      <Legend {...options}>{children}</Legend>
    </div>
  );
};
const customCode = `() => {
  return(
    <Legend iconAppearance="inverse" iconSize={14}>
    Legend
  </Legend>
    );
}`;
export default {
  title: 'Components/Legend/All',
  component: Legend,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
