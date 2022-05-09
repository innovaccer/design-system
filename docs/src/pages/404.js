import React, { useEffect } from 'react';
import Homepage from '../components/templates/Homepage';
import {
  Button,
  EmptyState
} from '@innovaccer/design-system';
import { navigate } from 'gatsby';
import notFoundImage from './home/404.png'
import { useNavItems } from '../util/NavItems';

const PageNotFound = () => {
  const pathName = typeof window !== 'undefined' && window.location.pathname;
  const navItemsList = pathName ? useNavItems(pathName): [];

  useEffect(() => {
    let redirectPath;
    if (pathName.includes('/mobile')) {
      redirectPath = navItemsList.find((nav) => !nav.hideInMobile)
    } else {
      redirectPath = navItemsList.find((nav) => !nav.hideInWeb)
    }
    navigate(redirectPath?.link);
  }, []);

  return (
    <Homepage relativePagePath={'/404'} is404={true}>
      <div
        className="d-flex justify-content-center"
        style={{ transform: "translate(0,50%)" }}
      >
        <EmptyState
          description="Sorry, the page you are lookikng for does not exist. Let's get you back"
          imageSrc={notFoundImage}
          size="small"
          title="Oh no! There's no masala"
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
