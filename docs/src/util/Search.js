import { useStaticQuery, graphql } from 'gatsby';

export function useSearchItems() {
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

  const searchList = edges.filter((item) => {
    const { title, description } = item.node.frontmatter;
    return title && description && title != description
  })
  return searchList;
}
