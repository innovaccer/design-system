import { useStaticQuery, graphql } from 'gatsby';

export default function useHomeMenu() {
  const {
    allHomeMenuYaml: { edges },
  } = useStaticQuery(graphql`
    query HOME_QUERY {
      allHomeMenuYaml {
        edges {
          node {
            name
            link
            content
            img
          }
        }
      }
    }
  `);

  const items = edges.map(({ node }) => node);
  return items;
}
