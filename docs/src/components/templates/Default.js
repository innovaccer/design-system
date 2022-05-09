import React from 'react';
import { graphql } from "gatsby";
import Layout from '../Layout';
import { useFrontmatter } from '../../util/Frontmatter';
import MDXPage from '../PageLayout/MDXPage';

function getFrontmatter(frontmatter, relativePagePath) {
  const { title, description } = frontmatter;
  if (!description && title === "") {
    const newFrontmatter = useFrontmatter(relativePagePath);
    return newFrontmatter;
  } else {
    return frontmatter;
  }
}

export default function defaultTemplate({ data }) {
  // const { frontmatter = {}, titleType, relativePagePath } = pageContext;
  console.log('dataaa', data);
  const { frontmatter, fileAbsolutePath, rawBody, slug, body } = data.allMdx.nodes[0];

  const titleType = 'page';
  const [relativePagePath] = fileAbsolutePath
    .split('src/pages')
    .splice('-1');

  const updatedFrontmatter = getFrontmatter(frontmatter, relativePagePath);
  const { title, description, keywords, tabs, logos, showMobile = false } = updatedFrontmatter;

  return (
    <Layout
      frontmatter={updatedFrontmatter}
      titleType={titleType}
      relativePagePath={relativePagePath}
      location={slug}
    >
      <MDXPage
        relativePagePath={relativePagePath}
        description={description}
        newFrontmatter={updatedFrontmatter}
        title={title}
        tabs={tabs}
        location={slug}
        logos={logos}
      >
        {body}
      </MDXPage>
    </Layout>
  );
};

//It will take the variable value automatically from gatsby-node file

export const query = graphql`
query MdxDetails($slug: String){
  allMdx(filter: {slug: {eq: $slug}}) {
    nodes {
      slug
      body
      rawBody
      fileAbsolutePath
      frontmatter {
        tabs
        date
        logos
        title
        showMobile
        description
      }
    }
  }
}
`