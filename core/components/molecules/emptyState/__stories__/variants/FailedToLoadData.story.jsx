import * as React from 'react';
import { EmptyState, Button } from '@/index';
import noContent from '@innovaccer/mds-images/ui-states/404-nothing-here-3.svg';

export const failedToLoadData = () => {
  return (
    <EmptyState>
      <EmptyState.Image src={noContent}></EmptyState.Image>
      <EmptyState.Title>Failed to load data</EmptyState.Title>
      <EmptyState.Description>
        We are unable to fetch the data. Try again. If the issue persists, contact Innovaccer support.
      </EmptyState.Description>
      <EmptyState.Actions>
        <Button icon="refresh">Try again</Button>
      </EmptyState.Actions>
    </EmptyState>
  );
};

const ImagePath = JSON.stringify(noContent);

const customCode = `() => {
  // import noContent from '@innovaccer/mds-images/ui-states/404-nothing-here-3.svg';

  return (
      <EmptyState>
        <EmptyState.Image src={${ImagePath}}></EmptyState.Image>
        {/* Replace image path used above with imported image file name
        <EmptyState.Image src={noContent}></EmptyState.Image> */}

        <EmptyState.Title>Failed to load data</EmptyState.Title>
        <EmptyState.Description>
          We are unable to fetch the data. Try again. If the issue persists, contact Innovaccer support.
        </EmptyState.Description>
        <EmptyState.Actions>
          <Button icon="refresh">Try again</Button>
        </EmptyState.Actions>
      </EmptyState>
  );
}`;

export default {
  title: 'Components/EmptyState/Variants/Failed To Load Data',
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
