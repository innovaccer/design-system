import React from 'react';
import Layout from '../Layout';
import { useFrontmatter } from '../../util/Frontmatter';
import ComponentPage from '../PageLayout/ComponentPage';

export default ({ pageContext, children, ...rest }) => {
  const { frontmatter = {}, titleType, relativePagePath } = pageContext;
  const { title, description, keywords, tabs, showMobile = false } = frontmatter;
  const is404 = children && children.key === null;
  const newFrontmatter = useFrontmatter(relativePagePath);

  return (
    <Layout
      titleType={titleType}
      pageTitle={title}
      pageDescription={description}
      pageKeywords={keywords}
      relativePagePath={relativePagePath}
      showMobile={showMobile}
      frontmatter={newFrontmatter}
      showAnimation={rest.location.state?.animation === false ? false : true}
      is404Page={is404}
    >
      <ComponentPage 
        frontmatter={newFrontmatter}
        relativePagePath={relativePagePath}
        description={description}
        title={title}
        tabs={tabs}
        children={children}
        is404Page={is404}
        location={rest.location}
      />
    </Layout>
  );
};
