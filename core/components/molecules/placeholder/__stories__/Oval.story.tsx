import * as React from 'react';
import Placeholder from '../Placeholder';

export const Oval = () => {
  return (
    <Placeholder round={true} >
    </Placeholder>
  );
};

const customCode= `() =>{
  return (
    <Placeholder round={true} >
    </Placeholder>
  );
}`; 

export default {
  title: 'Components/Loaders/Placeholder/Oval',
  component: Placeholder,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
