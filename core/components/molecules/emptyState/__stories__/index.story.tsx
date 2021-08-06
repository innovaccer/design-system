import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { EmptyState, Button } from '@/index';
import noContent from './assets/noContent.png';

export const all = () => {
  const title = text('title', 'Manage your outreach campaigns');
  const description = text(
    'description',
    'Campaigns let you reach out to patients with text messages, emails and voice calls'
  );

  return (
    <div className="h-100" style={{ backgroundColor: 'var(--secondary-lightest)' }}>
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
