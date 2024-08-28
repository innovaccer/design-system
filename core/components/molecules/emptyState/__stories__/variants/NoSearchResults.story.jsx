import * as React from 'react';
import { EmptyState, Button } from '@/index';
import searchState from '@innovaccer/mds-images/ui-states/search-1.svg';

export const noSearchResults = () => {
  return (
    <EmptyState>
      <EmptyState.Image src={searchState}></EmptyState.Image>
      <EmptyState.Title>No results found for your search</EmptyState.Title>
      <EmptyState.Description>Try adjusting your search to find what you are looking for.</EmptyState.Description>
      <EmptyState.Actions>
        <Button>Clear search</Button>
      </EmptyState.Actions>
    </EmptyState>
  );
};

const ImagePath = JSON.stringify(searchState);

const customCode = `() => {
  // import searchState from '@innovaccer/mds-images/ui-states/search-1.svg';

  return (
      <EmptyState>
        <EmptyState.Image src={${ImagePath}}></EmptyState.Image>
        {/* Replace image path used above with imported image file name
        <EmptyState.Image src={searchState}></EmptyState.Image> */}

        <EmptyState.Title>No results found for your search</EmptyState.Title>
        <EmptyState.Description>Try adjusting your search to find what you are looking for.</EmptyState.Description>
        <EmptyState.Actions>
          <Button>Clear search</Button>
        </EmptyState.Actions>
      </EmptyState>
  );
}`;

export default {
  title: 'Components/EmptyState/Variants/No Search Results',
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
