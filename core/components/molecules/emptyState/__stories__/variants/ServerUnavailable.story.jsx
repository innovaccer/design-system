import * as React from 'react';
import { EmptyState, Button } from '@/index';
import errorState from '@innovaccer/mds-images/ui-states/error.svg';

export const serverUnavailable = () => {
  return (
    <EmptyState>
      <EmptyState.Image src={errorState}></EmptyState.Image>
      <EmptyState.Title>Uh-oh, our server is taking a nap!</EmptyState.Title>
      <EmptyState.Description>
        The server is unavailable at the moment due to maintenance downtime or capacity problems. You can try again
        later.
      </EmptyState.Description>
      <EmptyState.Actions>
        <Button>Go back</Button>
      </EmptyState.Actions>
    </EmptyState>
  );
};

const ImagePath = JSON.stringify(errorState);

const customCode = `() => {
  // import errorState from '@innovaccer/mds-images/ui-states/error.svg';

  return (
      <EmptyState>
        <EmptyState.Image src={${ImagePath}}></EmptyState.Image>
        {/* Replace image path used above with imported image file name
        <EmptyState.Image src={errorState}></EmptyState.Image> */}

        <EmptyState.Title>Uh-oh, our server is taking a nap!</EmptyState.Title>
        <EmptyState.Description>
          The server is unavailable at the moment due to maintenance downtime or capacity problems. You can try again
          later.
        </EmptyState.Description>
        <EmptyState.Actions>
          <Button>Go back</Button>
        </EmptyState.Actions>
      </EmptyState>
  );
}`;

export default {
  title: 'Components/EmptyState/Variants/Server Unavailable',
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
