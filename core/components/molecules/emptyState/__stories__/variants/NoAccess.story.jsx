import * as React from 'react';
import { EmptyState, Button } from '@/index';
import noContent from '../assets/locked.svg';

export const noAccess = () => {
  return (
    <EmptyState>
      <EmptyState.Image src={noContent}></EmptyState.Image>
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

const ImagePath = JSON.stringify(noContent);

const customCode = `() => {
  return (
      <EmptyState>
        <EmptyState.Image src={${ImagePath}}></EmptyState.Image>
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
