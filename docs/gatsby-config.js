require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require('path');

const remarkSlug = require(`remark-slug`);


  const repositoryDefault = {
    baseUrl: '',
    subDirectory: '',
    branch: 'main',
  };

  const {
    isSearchEnabled = true,
    withWebp = false,
    mdxExtensions = ['.mdx', '.md'],
    imageQuality = 75,
    repository,
    pngCompressionSpeed = 4, // default for gatsby-plugin-sharp
    gatsbyRemarkPlugins = [],
    remarkPlugins = [],
    gatsbyPluginSharpOptions = {},
    isServiceWorkerEnabled = false,
  } = {};

  const defaultRemarkPlugins = [
    { resolve: `gatsby-remark-unwrap-images` },
    { resolve: `gatsby-remark-smartypants` },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1152,
        linkImagesToOriginal: false,
        quality: imageQuality,
        withWebp,
        pngCompressionSpeed,
        ...gatsbyPluginSharpOptions,
      },
    },
    { resolve: `gatsby-remark-responsive-iframe` },
    { resolve: `gatsby-remark-copy-linked-files` },
    {
      resolve: `gatsby-remark-prismjs`,
      options: {
        // Class prefix for <pre> tags containing syntax highlighting;
        // defaults to 'language-' (e.g. <pre class="language-js">).
        // If your site loads Prism into the browser at runtime,
        // (e.g. for use with libraries like react-live),
        // you may use this to prevent Prism from re-processing syntax.
        // This is an uncommon use-case though;
        // If you're unsure, it's best to use the default value.
        classPrefix: "language-",
        // This is used to allow setting a language for inline code
        // (i.e. single backticks) by creating a separator.
        // This separator is a string and will do no white-space
        // stripping.
        // A suggested value for English speakers is the non-ascii
        // character '›'.
        inlineCodeMarker: null,
        // This lets you set up language aliases.  For example,
        // setting this to '{ sh: "bash" }' will let you use
        // the language "sh" which will highlight using the
        // bash highlighter.
        aliases: {},
        // This toggles the display of line numbers globally alongside the code.
        // To use it, add the following line in gatsby-browser.js
        // right after importing the prism color scheme:
        //  require("prismjs/plugins/line-numbers/prism-line-numbers.css")
        // Defaults to false.
        // If you wish to only show line numbers on certain code blocks,
        // leave false and use the {numberLines: true} syntax below
        showLineNumbers: false,
        // If setting this to true, the parser won't handle and highlight inline
        // code used in markdown i.e. single backtick code like `this`.
        noInlineHighlight: false,
        // This adds a new language definition to Prism or extend an already
        // existing language definition. More details on this option can be
        // found under the header "Add new language definition or extend an
        // existing language" below.
        languageExtensions: [
          {
            language: "superscript",
            extend: "javascript",
            definition: {
              superscript_types: /(SuperType)/,
            },
            insertBefore: {
              function: {
                superscript_keywords: /(superif|superelse)/,
              },
            },
          },
        ],
        // Customize the prompt used in shell output
        // Values below are default
        prompt: {
          user: "root",
          host: "localhost",
          global: false,
        },
        // By default the HTML entities <>&'" are escaped.
        // Add additional HTML escapes by providing a mapping
        // of HTML entities and their escape value IE: { '}': '&#123;' }
        escapeEntities: {},
      },
    },
  ];

  module.exports = {
    siteMetadata: {
      isSearchEnabled,
      isServiceWorkerEnabled,
      title: 'Gatsby Theme MDS',
      description:
        'Documentation site for using Innovaccer Masala Design System.',
      keywords: 'gatsby,theme,MDS,masala,design,system, masala design system,style,guide,component,library,design system,styleguide',
      lang: 'en',
      repository: { ...repositoryDefault, ...repository },
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        name: `Nav`,
        options: {
          path: path.resolve(`./src/data`),
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        name: 'pages',
        options: {
          path: path.resolve(`./src/pages`),
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `StaticImages`,
          path: `./static/images`,
        },
      },
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-transformer-yaml`,
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: mdxExtensions,
          remarkPlugins: [remarkSlug],
          gatsbyRemarkPlugins: [
            ...defaultRemarkPlugins,
            ...gatsbyRemarkPlugins,
            `gatsby-remark-images`
          ],
          plugins: [ `gatsby-remark-images` ],
          defaultLayouts: {
            default: require.resolve('./src/components/templates/Default.js'),
            home: require.resolve('./src/components/templates/Homepage.js'),
          },
        },
      },
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `innovaccer-tech`,
      },
    },
    `gatsby-transformer-json-key-value-to-array`
    ]
  }

