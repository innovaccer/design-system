import { useStaticQuery, graphql } from 'gatsby';

export function useLogoItems() {
  const {
    allFile: { edges },
  } = useStaticQuery(graphql`
    query IMAGES {
      allFile(filter: { sourceInstanceName: { eq: "StaticImages" } }) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `);
  const data = edges.map((item) => item.node.childImageSharp);
  return data;
}
