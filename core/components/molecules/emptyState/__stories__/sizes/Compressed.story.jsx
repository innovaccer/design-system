import * as React from 'react';
import { EmptyState, Button } from '@/index';
import noContent from '../assets/no-files-empty-files.svg';

export const compressed = () => {
  return (
    <div className="h-100">
      <EmptyState size="compressed">
        <EmptyState.Image src={noContent}></EmptyState.Image>
        <EmptyState.Title>Title goes here</EmptyState.Title>
        <EmptyState.Description>Description goes here</EmptyState.Description>
        <EmptyState.Actions>
          <Button className="mr-4">Secondary action</Button>
          <Button appearance="primary">Primary action</Button>
        </EmptyState.Actions>
      </EmptyState>
    </div>
  );
};

const ImagePath = JSON.stringify(noContent);

const customCode = `() => {
  return (
    <div className="h-100">
      <EmptyState size="compressed">
        <EmptyState.Image src={${ImagePath}}></EmptyState.Image>
        <EmptyState.Title>Title goes here</EmptyState.Title>
        <EmptyState.Description>
          Description goes here
        </EmptyState.Description>
        <EmptyState.Actions>
          <Button className="mr-4">Secondary action</Button>
          <Button appearance="primary">Primary action</Button>
        </EmptyState.Actions>
      </EmptyState>
    </div>
  );
}`;

export default {
  title: 'Components/EmptyState/Sizes/Compressed',
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
