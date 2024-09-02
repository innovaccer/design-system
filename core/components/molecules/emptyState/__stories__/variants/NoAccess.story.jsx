import * as React from 'react';
import { EmptyState, Button } from '@/index';
import lockedState from '@innovaccer/mds-images/ui-states/locked.svg';

export const noAccess = () => {
  return (
    <EmptyState>
      <EmptyState.Image src={lockedState}></EmptyState.Image>
      <EmptyState.Title>Access denied</EmptyState.Title>
      <EmptyState.Description>
        You don’t have the access to this page. Contact your admin for more information.
      </EmptyState.Description>
      <EmptyState.Actions>
        <Button>Go back</Button>
      </EmptyState.Actions>
    </EmptyState>
  );
};

const ImagePath = JSON.stringify(lockedState);

const customCode = `() => {
  // import lockedState from '@innovaccer/mds-images/ui-states/locked.svg';

  return (
      <EmptyState>
        <EmptyState.Image src={${ImagePath}}></EmptyState.Image>
        {/* Replace image path used above with imported image file name
        <EmptyState.Image src={lockedState}></EmptyState.Image> */}

        <EmptyState.Title>Access denied</EmptyState.Title>
        <EmptyState.Description>
          You don’t have the access to this page. Contact your admin for more information.
        </EmptyState.Description>
        <EmptyState.Actions>
          <Button>Go back</Button>
        </EmptyState.Actions>
      </EmptyState>
  );
}`;

export default {
  title: 'Components/EmptyState/Variants/No Access',
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
