import * as React from 'react';
import { EmptyState, Button } from '@/index';

export const all = () => {
  return (
    <EmptyState>
      <EmptyState.Image src="https://mds.innovaccer.com/static/media/no-files-empty-files.442ee36a.svg"></EmptyState.Image>
      <EmptyState.Title>Title goes here</EmptyState.Title>
      <EmptyState.Description>Description goes here</EmptyState.Description>
      <EmptyState.Actions>
        <Button className="mr-4">Secondary action</Button>
        <Button appearance="primary">Primary action</Button>
      </EmptyState.Actions>
    </EmptyState>
  );
};

const customCode = `() => {
  // import noFilesEmptyFiles from '@innovaccer/mds-images/ui-states/no-files-empty-files.svg';

  return (
    <EmptyState>
      <EmptyState.Image src="https://mds.innovaccer.com/static/media/no-files-empty-files.442ee36a.svg" />
      {/* Replace image path used above with imported image file name
      <EmptyState.Image src={noFilesEmptyFiles} /> */}

      <EmptyState.Title>Title goes here</EmptyState.Title>
      <EmptyState.Description>Description goes here</EmptyState.Description>
      <EmptyState.Actions>
        <Button className="mr-4">Secondary action</Button>
        <Button appearance="primary">Primary action</Button>
      </EmptyState.Actions>
    </EmptyState>
  );
}`;

export default {
  title: 'Components/EmptyState/All',
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
