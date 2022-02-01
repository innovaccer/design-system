import { useStaticQuery, graphql } from 'gatsby';

export function useLogoItems() {
  const {
    allImageSharp: { nodes },
  } = useStaticQuery(graphql`
    query IMAGES {
      allImageSharp {
        nodes {
          fluid {
            src
          }
          gatsbyImageData
        }
      }
    }
  `);
  return nodes;
}
