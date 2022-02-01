import React from 'react';
import Homepage from '../components/templates/Homepage';
import {
  Heading,
  Button,
  Paragraph,
} from '@innovaccer/design-system';
import { navigate } from 'gatsby';

const PageNotFound = () => {
  return (
    <Homepage relativePagePath={'/404'} is404={true}>
      <div className='m-auto w-50 mt-10'>
        <Heading size='xl'>Page not found</Heading>
        <Paragraph className='my-8'>
          Oops! The page you are looking for has been
          removed or relocated.
        </Paragraph>
        <Button
          icon='arrow_backward'
          iconAlign='left'
          onClick={() => navigate(-1)}
        >
          Go Back
        </Button>
      </div>
    </Homepage>
  );
};

export default PageNotFound;
