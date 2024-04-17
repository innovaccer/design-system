import * as React from 'react';
import { EmptyState, Button } from '@/index';
import noContent from './assets/noContent.png';

export const all = () => {
  const title = 'Manage your outreach campaigns';
  const description = 'Campaigns let you reach out to patients with text messages, emails and voice calls';
  return (
    <div className="h-100 bg-secondary-lightest">
      <EmptyState title={title} description={description} size="large" imageSrc={noContent}>
        <Button size="large" appearance="primary">
          Add campaigns
        </Button>
      </EmptyState>
    </div>
  );
};

export default {
  title: 'Components/EmptyState/All',
  component: EmptyState,
};
