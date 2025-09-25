import * as React from 'react';
import { Button, DocumentPreview } from '@/index';

export const all = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const documentUrls = [
    'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf',
    'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    'https://file-examples.com/wp-content/storage/2017/02/file_example_XLSX_10.xlsx',
  ];

  return (
    <>
      <Button appearance="primary" onClick={() => setIsOpen(true)}>
        Open Document Preview
      </Button>
      <DocumentPreview open={isOpen} onClose={() => setIsOpen(false)} documentUrls={documentUrls} dimension="regular" />
    </>
  );
};

const customCode = `() => {
  const [isOpen, setIsOpen] = React.useState(false);

  const documentUrls = [
    'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf',
    'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
    'https://file-examples.com/wp-content/storage/2017/02/file_example_XLSX_10.xlsx',
  ];

  return (
    <>
      <Button appearance="primary" onClick={() => setIsOpen(true)}>
        Open Document Preview
      </Button>
      <DocumentPreview
        open={isOpen}
        onClose={() => setIsOpen(false)}
        documentUrls={documentUrls}
        dimension="regular"
      />
    </>
  );
}`;

export default {
  title: 'Components/DocumentPreview/All',
  component: DocumentPreview,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'DocumentPreview',
        description:
          'DocumentPreview provides a viewing experience for multiple documents with zoom, navigation, print and download capabilities.',
        noHtml: true,
      },
    },
  },
};
