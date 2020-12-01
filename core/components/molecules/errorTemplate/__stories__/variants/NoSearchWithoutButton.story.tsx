import * as React from 'react';
import { ErrorTemplate, Card } from '@/index';
import noSearch from '../assets/noSearch.png';

export const noSearchTemplateWithoutButton = () => {
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
      />
    </Card>
  );
};

export default {
  title: 'Molecules|ErrorTemplate/Variants',
  component: ErrorTemplate,
};
