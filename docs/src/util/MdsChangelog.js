import { useStaticQuery, graphql } from 'gatsby';

export default function MdsChangelog() {
  const {
    allMdx: { edges },
  } = useStaticQuery(graphql`
    query MDS_CHANGELOG {
      allMdx(filter: { frontmatter: { title: { eq: "Release notes" } } }) {
        edges {
          node {
            internal {
              content
            }
            headings(depth: h2) {
              value
            }
          }
        }
      }
    }
  `);

  const items = edges.map(({ node }) => node);

  const record = {
    version: '',
    releaseDate: '',
    updatesList: [],
  };

  if (items.length > 0) {
    const metadata = items[0].headings[0].value;

    record.version = metadata.substring(0, metadata.indexOf('('));
    record.releaseDate = metadata.substring(metadata.indexOf('(') + 1, metadata.lastIndexOf(')'));

    const htmlContent = items[0].internal.content;
    const latestUpdate = htmlContent.split('\n----')[0];

    let updateList = latestUpdate.split('###');

    const listSeparator = /[*-]+\s/;

    updateList.shift();
    updateList
      .filter((item) => listSeparator.test(item))
      .map((item) => record.updatesList.push(item.split(listSeparator)));
  }
  return record;
}
