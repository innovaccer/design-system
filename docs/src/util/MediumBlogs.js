import { useStaticQuery, graphql } from 'gatsby';

export default function MediumBlogs() {
  const {
    allMediumPost: { edges },
  } = useStaticQuery(graphql`
      query MEDIUM_BLOGS {
        allMediumPost(sort: {fields: [createdAt], order: DESC}) {
          edges {
            node {
              id
              title
              uniqueSlug
              firstPublishedAt
              author {
                name
                imageId
              }
            }
          }
        }
      }
  `)

  const items = edges.map(({ node }) => node);
  return items;
}
