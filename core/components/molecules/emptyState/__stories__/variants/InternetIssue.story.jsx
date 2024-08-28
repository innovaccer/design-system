import * as React from 'react';
import { EmptyState, Button } from '@/index';
import connectionLost from '@innovaccer/mds-images/ui-states/connection-lost.svg';

export const internetIssue = () => {
  return (
    <EmptyState>
      <EmptyState.Image src={connectionLost}></EmptyState.Image>
      <EmptyState.Title>You are offline</EmptyState.Title>
      <EmptyState.Description>
        Looks like you are not connected to the internet. Check your connection and try again.
      </EmptyState.Description>
      <EmptyState.Actions>
        <Button icon="refresh">Try again</Button>
      </EmptyState.Actions>
    </EmptyState>
  );
};

const ImagePath = JSON.stringify(connectionLost);

const customCode = `() => {
  // import connectionLost from '@innovaccer/mds-images/ui-states/connection-lost.svg';

  return (
      <EmptyState>
        <EmptyState.Image src={${ImagePath}}></EmptyState.Image>
        {/* Replace image path used above with imported image file name
        <EmptyState.Image src={connectionLost}></EmptyState.Image> */}

        <EmptyState.Title>You are offline</EmptyState.Title>
        <EmptyState.Description>
          Looks like you are not connected to the internet. Check your connection and try again.
        </EmptyState.Description>
        <EmptyState.Actions>
          <Button icon="refresh">Try again</Button>
        </EmptyState.Actions>
      </EmptyState>
  );
}`;

export default {
  title: 'Components/EmptyState/Variants/Internet Issue',
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
