import { useStaticQuery, graphql } from 'gatsby';

export function useNavItems(relativePagePath) {
  const {
    allMdx: { edges },
  } = useStaticQuery(graphql`
    query IN_PAGE_NAV_QUERY {
      allMdx {
        edges {
          node {
            tableOfContents
            fileAbsolutePath
            headings {
              depth
              value
            }
          }
        }
      }
    }
  `);

  const headings = edges
    .filter(({ node }) => {
      const fileName = node.fileAbsolutePath.split('pages')[1];
      if (fileName === relativePagePath && node.headings.length) {
        return node;
      }
    })
    .map(({ node }) => node.tableOfContents);
  return headings.length ? headings[0].items : [];
}
