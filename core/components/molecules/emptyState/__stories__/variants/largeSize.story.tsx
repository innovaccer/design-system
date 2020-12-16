import * as React from 'react';
import { EmptyState, Button } from '@/index';
import noContent from '../assets/noContent.png';

export const largeSize = () => (
  <div className="h-100 pb-5" style={{ backgroundColor: 'var(--secondary-lightest)' }}>
    <EmptyState
      title="There's a problem loading this page."
      description="A technical problem is preventing the page from loading. Try reloading this page."
      imageSrc={noContent}
      size="large"
    >
      <Button size="large" appearance="primary">Reload page</Button>
    </EmptyState>
  </div>
);

export default {
  title: 'Molecules|EmptyState/Variants',
  component: EmptyState,
};
