const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query MDXQuery {
      allMdx {
        nodes {
          slug
        }
      }
    }
  `)

  // Context basically defines what variables we want to pass to the template when we are generating this page
  data.allMdx.nodes.forEach(node => {
    actions.createPage({
      path: node.slug,
      component: path.resolve('./src/components/templates/Default.js'),
      context: { slug: node.slug }
    })
  })
}
