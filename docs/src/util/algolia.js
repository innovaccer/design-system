const pageQuery = `{
  allMdx {
    edges {
      node {
        id
        slug
        frontmatter {
          title
          description
          tabs
        }
        headings {
          value
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

const transformAlgoliaData = (pageQuery) => {
  const result = pageQuery.allMdx.edges.map(({ node: { id, headings, frontmatter, slug, ...rest } }) => {
    let customTitle = '';
    let customDescription = '';
    let customTabs = '';

    const originalTitle = frontmatter.title;
    const originalDescription = frontmatter.description;
    const originalTabs = frontmatter.tabs;

    // To handle MDX files without frontmatter
    if (originalTitle == originalDescription) {
      const componentName = slug.slice(1, slug.lastIndexOf('/'));

      //Replace the default frontmatter(title & description) with their siblings markdown files
      const data = pageQuery.allMdx.edges.filter(item => {
        return item.node.slug.includes(componentName) && item.node.frontmatter.title != item.node.frontmatter.description
      });
      customDescription = data[0]?.node.frontmatter.description;
      customTitle = data[0]?.node.frontmatter.title;
      customTabs = data[0]?.node.frontmatter.tabs;
    } else {
      customDescription = originalDescription;
      customTitle = originalTitle;
      customTabs = originalTabs;
    }

    const customHeadings = headings.map((item) => item.value);
    return {
      objectID: id,
      title: customTitle,
      description: customDescription,
      tabs: customTabs,
      slug: slug,
      headings: customHeadings,
      ...rest,
    }
  });
  return result;
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => transformAlgoliaData(data),
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME || 'Algolia-Search',

    //tells Algolia you will want to generate “snippets” of context around your hits in the following attributes.
    settings: { attributesToSnippet: ['title', 'description', 'headings', 'excerpt'] },
  },
]
module.exports = queries;
