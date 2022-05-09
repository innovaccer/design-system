import React from 'react';
import Layout from '../Layout';

export default ({ pageContext, children, ...rest }) => {
  const { frontmatter = {}, titleType, relativePagePath } = pageContext;

  return (
    <Layout
      frontmatter={frontmatter}
      titleType={titleType}
      relativePagePath={relativePagePath}
      location={rest.location}
    >
      {children}
    </Layout>
  );
};
