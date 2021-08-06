import * as React from 'react';
import { EmptyState, Button, Card } from '@/index';
import noSearch from '../assets/noSearch.png';

export const smallSizeWithButton = () => {
  return (
    <Card className="py-5">
      <EmptyState
        title="We didn't find a match"
        description="Try adjusting your search to find what you are looking for."
        size="small"
        imageSrc={noSearch}
      >
        <Button appearance="basic">Try Again</Button>
      </EmptyState>
    </Card>
  );
};

export default {
  title: 'Components/EmptyState/Variants/Small Size With Button',
  component: EmptyState,
};
