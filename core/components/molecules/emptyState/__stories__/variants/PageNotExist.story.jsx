import * as React from 'react';
import { EmptyState, Button } from '@/index';
import noContent from '../assets/file-broken-or-not-found.svg';

export const pageNotExist = () => {
  return (
    <EmptyState>
      <EmptyState.Image src={noContent}></EmptyState.Image>
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

const ImagePath = JSON.stringify(noContent);

const customCode = `
// import file-broken-or-not-found from '@innovaccer/mds-images/ui-states/file-broken-or-not-found.svg';

() => {
  return (
      <EmptyState>
        <EmptyState.Image src={${ImagePath}}></EmptyState.Image>
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
