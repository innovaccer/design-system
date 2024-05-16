import path from 'path';
import fs from 'fs';
import mkdirp from 'mkdirp';
import { createFilePath } from 'gatsby-source-filesystem';
import { compileMDXWithCustomOptions } from "gatsby-plugin-mdx";
import remarkHeadingsPlugin from "./remark-headings-plugin.mjs";

export const onPreBootstrap = ({ store, reporter }) => {
  const { program } = store.getState();

  const dirs = [
    path.join(program.directory, 'src/images'),
    path.join(program.directory, 'src/data'),
  ];

  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      reporter.log(`creating the ${dir} directory`);
      mkdirp.sync(dir);
    }
  });
};

export const onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

// We need to provide the actual file that created a specific page to append links for EditLink.
// We can't do page queries from MDX templates, so we'll add the page's relative path to context after it's created.
// The context object **is** supplied to MDX templates through the pageContext prop.
export const onCreatePage = (
  { page, actions, getNodesByType, ...rest },
  pluginOptions
) => {
  // Don't override if it's already been provided
  if (!page.context.MdxNode) {
    // Find the MdxNode that created our page
    const MdxNode = getNodesByType('Mdx').find(
      (node) => node.fields.slug === page.path // Assuming your page paths match the slugs
    );
    let frontmatter = {
      ...page.context.frontmatter,
    };

    const { titleType = 'page' } = pluginOptions;
    const { createPage, deletePage } = actions;
    const [relativePagePath] = page.componentPath
      .split('src/pages')
      .splice('-1');

    // Inject titles and descriptions for pages that don't include them
    if (!frontmatter.title) {
      const title = page.path
        .split('/')
        .filter((part) => part)
        // .map((part) => startCase(part))
        .join(' / ');

      frontmatter = {
        description: title,
        ...frontmatter,
        title,
      };
    }

    if (MdxNode) {
      Object.assign(MdxNode, { frontmatter });
    }

    deletePage(page);
    createPage({
      ...page,
      context: {
        ...page.context,
        relativePagePath,
        titleType,
        frontmatter,
        MdxNode,
      },
    });
  }
};

export const createSchemaCustomization = async ({ getNode, getNodesByType, pathPrefix, reporter, cache, actions, schema, store }) => {
  const { createTypes } = actions

  const headingsResolver = schema.buildObjectType({
    name: `Mdx`,
    fields: {
      headings: {
        type: `[MdxHeading]`,
        async resolve(mdxNode) {
          const fileNode = getNode(mdxNode.parent)

          if (!fileNode) {
            return null
          }

          const result = await compileMDXWithCustomOptions(
            {
              source: mdxNode.body,
              absolutePath: fileNode.absolutePath,
            },
            {
              pluginOptions: {},
              customOptions: {
                mdxOptions: {
                  remarkPlugins: [remarkHeadingsPlugin],
                },
              },
              getNode,
              getNodesByType,
              pathPrefix,
              reporter,
              cache,
              store,
            }
          )

          if (!result) {
            return null
          }

          return result.metadata.headings
        }
      }
    }
  })

  createTypes([
    `
      type MdxHeading {
        value: String
        depth: Int
      }
    `,
    headingsResolver,
  ])
}
