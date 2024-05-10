import React from 'react';
import DefaultLayout from './templates/Default';
import HomepageLayout from './templates/Homepage';
import PageNotFound from '../pages/404';

export const LayoutWrapper = ({ children, ...rest }) => {
  // Depending on the page context, return a different layout
  const { path, custom404 } = rest;


  if(custom404){
    const { props } = custom404
    return <HomepageLayout {...rest}>{PageNotFound(props)}</HomepageLayout>
  }

  switch (path) {
    case '/':
      return <HomepageLayout {...rest}>{children}</HomepageLayout>;
    default:
      return <DefaultLayout {...rest}>{children}</DefaultLayout>;
  }
};