import { useStaticQuery, graphql } from 'gatsby';

export default function MdsChangelog() {
  const data = useStaticQuery(graphql`
    query MDS_CHANGELOG {
      allMdx(filter: { frontmatter: { title: { eq: "Release notes" } } }) {
        edges {
          node {
            body 
            frontmatter {
              date
            }
            headings {
              depth
              value
            }
          }
        }
      }
    }
  `);

  const edges = data.allMdx.edges;

  const record = {
    version: '',
    releaseDate: '',
    updatesList: [],
  };

  if (edges.length > 0) {
    const latestReleaseNote = edges[0].node;
    const versionInfo = latestReleaseNote.headings.find(heading => heading.depth === 2)?.value || '';

    const semVerRegex = /^(\d+\.\d+\.\d+)\s+\((\d{4}-\d{2}-\d{2})\)$/;

    const versionMatch = versionInfo.match(semVerRegex);


    if (versionMatch) {
      record.version = versionMatch[1].trim();
      record.releaseDate = versionMatch[2].trim();
    }

    const updatesSections = latestReleaseNote.body.split('###').slice(1); 

    updatesSections.forEach(section => {
      const lines = section.trim().split('\n').filter(Boolean); 

      if (lines.length > 1) {
        const title = lines[0].trim();
        const items = lines.slice(1).filter(line => line.startsWith('- ')).map(line => line.substring(2).trim());

        if (items.length > 0) {
          record.updatesList.push({
            title: title,
            items: items
          });
        }
      }
    });
  }

  return record;
}