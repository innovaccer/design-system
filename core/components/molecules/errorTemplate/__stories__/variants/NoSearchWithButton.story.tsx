import * as React from 'react';
import { ErrorTemplate, Button, Card } from '@/index';
import noSearch from '../assets/noSearch.png';

export const noSearchTemplateWithButton = () => {
  return (
    <Card className="py-5">
      <ErrorTemplate
        title="We didn't find a match"
        description="Try adjusting your search to find what you are looking for."
        templateType="NO_SEARCH"
        image={{
          src: noSearch,
          height: '85px'
        }}
      >
        <Button appearance="basic">Try Again</Button>
      </ErrorTemplate>
    </Card>
  );
};

export default {
  title: 'Molecules|ErrorTemplate/Variants',
  component: ErrorTemplate,
};
