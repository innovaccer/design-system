import * as React from 'react';
import { EmptyState, Card } from '@/index';
import noSearch from '../assets/noSearch.png';

export const smallSizeWithoutButton = () => {
  return (
    <Card className="py-5">
      <EmptyState
        title="We didn't find a match"
        description="Try adjusting your search to find what you are looking for."
        size="small"
        imageSrc={noSearch}
      />
    </Card>
  );
};

export default {
  title: 'Components/EmptyState/Variants/Small Size Without Button',
  component: EmptyState,
};
