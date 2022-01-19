import { useStaticQuery, graphql } from 'gatsby';

export function useGetStorybookData(componentName) {
  const {
    allKeyValue: { edges },
  } = useStaticQuery(graphql`
    query STORYBOOK_DATA {
      allKeyValue {
        edges {
          node {
            key
            value
          }
        }
      }
    }  
  `);

  const list = edges.filter((item) =>
    item.node.key.includes(componentName.toLowerCase())
  )
  const result = JSON.parse(list[0].node.value);
  return result;
}
