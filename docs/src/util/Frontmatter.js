import { useStaticQuery, graphql } from 'gatsby';

export function useFrontmatter(relativePagePath) {
  const {
    allMdx: { edges },
  } = useStaticQuery(graphql`
    query FRONTMATTER_QUERY {
      allMdx {
        edges {
          node {
            slug
            frontmatter {
              description
              logos
              showMobile
              tabs
              title
            }
          }
        }
      }
    }   
  `);

  const componentName = relativePagePath.slice(1, relativePagePath.lastIndexOf('/'));

  const data = edges.filter(item => {
    const { slug, frontmatter } = item.node;
    if (relativePagePath.includes('mobile')) {
      return slug.includes(componentName) && slug.includes('mobile') && frontmatter.title != frontmatter.description
    }
    return slug.includes(componentName) && !slug.includes('mobile') && frontmatter.title != frontmatter.description
  });
  const frontmatter = data[0]?.node.frontmatter;
  return frontmatter;
}
