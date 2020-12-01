import * as React from 'react';
import { ErrorTemplate, Button } from '@/index';
import noContent from '../assets/noContent.png';

export const noContentTemplate = () => {
  return (
    <div className="h-100 pb-5" style={{ backgroundColor: 'var(--secondary-lightest)' }}>
      <ErrorTemplate
        title="There's a problem loading this page."
        description="A technical problem is preventing the page from loading. Try reloading this page."
        templateType="ERROR"
        image={{
          src: noContent,
        }}
      >
        <Button size="large" appearance="primary">Reload page</Button>
      </ErrorTemplate>
    </div>
  );
};

export default {
  title: 'Molecules|ErrorTemplate/Variants',
  component: ErrorTemplate,
};
