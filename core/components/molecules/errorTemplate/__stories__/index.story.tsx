import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { ErrorTemplate, Button } from '@/index';
import noContent from './assets/noContent.png';

export const all = () => {
  const title = text('title', 'Manage your outreach campaigns');
  const description = text(
    'description',
    'Campaigns let you reach out to patients with text messages, emails and voice calls'
  );

  return (
    <div className="h-100" style={{ backgroundColor: 'var(--secondary-lightest)' }}>
      <ErrorTemplate
        title={title}
        description={description}
        templateType="NO_CONTENT"
        image={{
          src: noContent,
        }}
      >
        <Button size="large" appearance="primary">Add campaigns</Button>
      </ErrorTemplate>
    </div>
  );
};

export default {
  title: 'Molecules|ErrorTemplate',
  component: ErrorTemplate,
};
