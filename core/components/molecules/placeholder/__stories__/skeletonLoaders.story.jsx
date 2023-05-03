import * as React from 'react';
import { PlaceholderParagraph, Placeholder, Card } from '@/index';

export const skeletonLoaders = () => {
  return (
    <Card>
      <div className="px-6 py-5">
        <Placeholder round={true} imageSize="large">
          <PlaceholderParagraph length="large" size="m" />
          <PlaceholderParagraph size="m" />
        </Placeholder>
      </div>
      <div className="px-6 py-5 border-top">
        <Placeholder round={true} imageSize="large">
          <PlaceholderParagraph length="large" size="m" />
          <PlaceholderParagraph size="m" />
        </Placeholder>
      </div>
      <div className="px-6 py-5 border-top">
        <Placeholder round={true} imageSize="large">
          <PlaceholderParagraph length="large" size="m" />
          <PlaceholderParagraph size="m" />
        </Placeholder>
      </div>
      <div className="px-6 py-5 border-top">
        <Placeholder round={true} imageSize="large">
          <PlaceholderParagraph length="large" size="m" />
          <PlaceholderParagraph size="m" />
        </Placeholder>
      </div>
    </Card>
  );
};

export default {
  title: 'Indicators/Loaders/Placeholder/Skeleton Loaders',
  component: Placeholder,
  subcomponents: { PlaceholderParagraph },
};
