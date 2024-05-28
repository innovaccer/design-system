import * as React from 'react';
import { EmptyState, Button } from '@/index';
import noContent from '../assets/connection-lost.svg';

export const internetIssue = () => {
  return (
    <EmptyState>
      <EmptyState.Image src={noContent}></EmptyState.Image>
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

const ImagePath = JSON.stringify(noContent);

const customCode = `() => {
  return (
      <EmptyState>
        <EmptyState.Image src={${ImagePath}}></EmptyState.Image>
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
