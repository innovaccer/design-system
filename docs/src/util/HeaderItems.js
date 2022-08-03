import { useStaticQuery, graphql } from 'gatsby';

export function useHeaderItems() {
  const {
    allHeaderItemsYaml: { edges },
  } = useStaticQuery(graphql`
    query HEADER_QUERY {
      allHeaderItemsYaml {
        edges {
          node {
            label
            link
          }
        }
      }
    }
  `);

  const items = edges.map(({ node }) => node);
  return items;
}
