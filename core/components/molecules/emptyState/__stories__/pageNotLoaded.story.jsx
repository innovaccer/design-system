import * as React from 'react';
import { EmptyState, Button } from '@/index';
import noContent from './assets/pageNotLoaded.png';

export const pageNotLoaded = () => (
  <div className="h-100 pb-5 bg-secondary-lightest">
    <EmptyState
      title="There's a problem loading this page."
      description="A technical problem is preventing the page from loading. Try reloading this page."
      imageSrc={noContent}
      size="large"
    >
      <Button size="large" appearance="primary">
        Reload page
      </Button>
    </EmptyState>
  </div>
);

export default {
  title: 'Components/EmptyState/Page Not Loaded',
  component: EmptyState,
};
