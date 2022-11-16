const pageQuery = `{
    allMdx {
      edges {
        node {
          id
          slug
          frontmatter {
            title
            description
            keywords
            parentTab
          }
          headings {
            value
            depth
          }
        }
      }
    }
  }`;

const transformAlgoliaData = (pageQuery) => {
  const result = pageQuery.allMdx.edges.map(({ node: { id, headings, frontmatter, slug, ...rest } }) => {
    let customTitle = '';
    let customDescription = '';
    let customKeywords = '';
    let customParentTab = '';
    const customHeadings = [];
    let pageName = '';

    const originalTitle = frontmatter.title;
    const originalDescription = frontmatter.description;
    const originalKeywords = frontmatter.keywords;
    const originalParentTab = frontmatter.parentTab;

    if (originalTitle !== originalDescription) {
      customDescription = originalDescription;
      customTitle = originalTitle;
      customKeywords = originalKeywords;
      customParentTab = originalParentTab;

      headings.filter((item) => {
        if (item.depth === 4) {
          customHeadings.push(item.value);
        }
      });

      headings.filter((item) => {
        if (item.depth === 5) {
          customHeadings.push(item.value);
        }
      });

      if(slug.includes("mobile")){
        pageName = "mobile";
      }
      else{
        pageName = "web";
      }

      return {
        objectID: id,
        title: customTitle,
        description: customDescription,
        slug: slug,
        headings: customHeadings,
        keywords: customKeywords,
        parentTab: customParentTab, 
        pageName: pageName,
        ...rest,
      };
    }

    return {
      objectID: id,
    };
  });
  return result;
};

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => transformAlgoliaData(data),
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME || 'search_bar',

    //tells Algolia you will want to generate “snippets” of context around your hits in the following attributes.
    settings: {
      attributesToSnippet: ['title', 'description', 'headings'],
      searchableAttributes: ['title', 'unordered(headings)', 'unordered(description)', 'unordered(keywords)', 'unordered(parentTab)'],
      disableTypoToleranceOnAttributes: ['headings', 'keywords', 'parentTab'],
    },
  },
];
module.exports = queries;
