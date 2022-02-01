import { useStaticQuery, graphql } from 'gatsby';

export function useFooterItems() {
  const {
    allFooterItemsYaml: { edges },
  } = useStaticQuery(graphql`
    query FOOTER_QUERY {
      allFooterItemsYaml {
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
