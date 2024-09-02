import * as React from 'react';
import { EmptyState, Button } from '@/index';
import previewContent from '@innovaccer/mds-images/ui-states/content-unavailable.svg';

export const previewUnavailable = () => {
  return (
    <EmptyState>
      <EmptyState.Image src={previewContent}></EmptyState.Image>
      <EmptyState.Title>Preview for this file is not available</EmptyState.Title>
      <EmptyState.Description>
        The file size is too big or not supported. You can download the file to view it on your computer.
      </EmptyState.Description>
      <EmptyState.Actions>
        <Button icon="download">Download</Button>
      </EmptyState.Actions>
    </EmptyState>
  );
};

const ImagePath = JSON.stringify(previewContent);

const customCode = `() => {
  // import previewContent from '@innovaccer/mds-images/ui-states/content-unavailable.svg';

  return (
      <EmptyState>
        <EmptyState.Image src={${ImagePath}}></EmptyState.Image>
        {/* Replace image path used above with imported image file name
        <EmptyState.Image src={previewContent}></EmptyState.Image> */}

        <EmptyState.Title>Preview for this file is not available</EmptyState.Title>
        <EmptyState.Description>
          The file size is too big or not supported. You can download the file to view it on your computer.
        </EmptyState.Description>
        <EmptyState.Actions>
          <Button icon="download">Download</Button>
        </EmptyState.Actions>
      </EmptyState>
  );
}`;

export default {
  title: 'Components/EmptyState/Variants/Preview Unavailable',
  component: EmptyState,
  subcomponents: {
    'EmptyState.Image': EmptyState.Image,
    'EmptyState.Title': EmptyState.Title,
    'EmptyState.Description': EmptyState.Description,
    'EmptyState.Actions': EmptyState.Actions,
  },
  parameters: {
    docs: {
      docPage: {
        title: 'EmptyState',
        customCode,
      },
    },
  },
};
