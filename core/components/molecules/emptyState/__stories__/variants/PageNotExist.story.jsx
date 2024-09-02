import * as React from 'react';
import { EmptyState, Button } from '@/index';
import fileBroken from '@innovaccer/mds-images/ui-states/file-broken-or-not-found.svg';

export const pageNotExist = () => {
  return (
    <EmptyState>
      <EmptyState.Image src={fileBroken}></EmptyState.Image>
      <EmptyState.Title>Page does not exist</EmptyState.Title>
      <EmptyState.Description>
        You seem to have followed a dead link. Check the URL or use the go home button given below.
      </EmptyState.Description>
      <EmptyState.Actions>
        <Button>Go home</Button>
      </EmptyState.Actions>
    </EmptyState>
  );
};

const ImagePath = JSON.stringify(fileBroken);

const customCode = `() => {
  // import fileBroken from '@innovaccer/mds-images/ui-states/file-broken-or-not-found.svg';

  return (
      <EmptyState>
        <EmptyState.Image src={${ImagePath}}></EmptyState.Image>
        {/* Replace image path used above with imported image file name
        <EmptyState.Image src={fileBroken}></EmptyState.Image> */}

        <EmptyState.Title>Page does not exist</EmptyState.Title>
        <EmptyState.Description>
          You seem to have followed a dead link. Check the URL or use the go home button given below.
        </EmptyState.Description>
        <EmptyState.Actions>
          <Button>Go home</Button>
        </EmptyState.Actions>
      </EmptyState>
  );
}`;

export default {
  title: 'Components/EmptyState/Variants/Page Not Exist',
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
