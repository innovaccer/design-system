import React, { useEffect } from 'react';
import Homepage from '../components/templates/Homepage';
import {
  Button,
  EmptyState
} from '@innovaccer/design-system';
import { navigate } from 'gatsby';
import notFoundImage from './home/404.png'


const PageNotFound = () => {

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.pathname.includes('/components')) {
      navigate('/components/overview/tabs/all-components/');
    }
  }, []);

  return (
    <Homepage relativePagePath={'/404'} is404={true}>
      <div className="d-flex justify-content-center" style={{ transform: "translate(0,50%)" }}>
        <EmptyState description="Sorry, the page you are lookikng for does not exist. Let's get you back"
          imageSrc={notFoundImage}
          size="small" title="Oh no! There's no masala"
        >
          <Button
          icon='arrow_backward'
          iconAlign='left'
          onClick={() => navigate('/')}
          >
          Go Back
          </Button>
        </EmptyState>
      </div>
    </Homepage>
  );
};

export default PageNotFound;
