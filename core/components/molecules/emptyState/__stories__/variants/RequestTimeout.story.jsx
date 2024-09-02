import * as React from 'react';
import { EmptyState, Button } from '@/index';
import historyTime from '@innovaccer/mds-images/ui-states/history-time.svg';

export const requestTimeout = () => {
  return (
    <EmptyState>
      <EmptyState.Image src={historyTime}></EmptyState.Image>
      <EmptyState.Title>This is taking unexpectedly long</EmptyState.Title>
      <EmptyState.Description>
        Failed to complete the request due to slow api response, or server overload. You can try again later.
      </EmptyState.Description>
      <EmptyState.Actions>
        <Button icon="refresh">Try again</Button>
      </EmptyState.Actions>
    </EmptyState>
  );
};

const ImagePath = JSON.stringify(historyTime);

const customCode = `() => {
  // import historyTime from '@innovaccer/mds-images/ui-states/history-time.svg';

  return (
      <EmptyState>
        <EmptyState.Image src={${ImagePath}}></EmptyState.Image>
        {/* Replace image path used above with imported image file name
        <EmptyState.Image src={historyTime}></EmptyState.Image> */}

        <EmptyState.Title>This is taking unexpectedly long</EmptyState.Title>
        <EmptyState.Description>
          Failed to complete the request due to slow api response, or server overload. You can try again later.
        </EmptyState.Description>
        <EmptyState.Actions>
          <Button icon="refresh">Try again</Button>
        </EmptyState.Actions>
      </EmptyState>
  );
}`;

export default {
  title: 'Components/EmptyState/Variants/Request Timeout',
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
