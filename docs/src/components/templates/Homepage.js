import React from 'react';
import Header from '../Header';

export default (props) => {

  const { pageContext, children, relativePagePath } = props

  const pagePath = pageContext && pageContext.relativePagePath;

  return (
    <div>
      {pagePath && ( <Header relativePagePath={pagePath} />)}
      {children}
    </div>
  );
};
