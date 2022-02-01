import { useStaticQuery, graphql } from 'gatsby';

export function useSearchItems(query) {
  const {
    allMdx: { edges },
  } = useStaticQuery(graphql`
    query SEARCH_QUERY {
      allMdx {
        edges {
          node {
            frontmatter {
              title
              description
            }
            slug
          }
        }
      }
    }
  `);

  const list = edges.map(({ node }) => node);
  const searchList = list.filter((item) => item.frontmatter.title != item.frontmatter.description )
  return searchList;
}
