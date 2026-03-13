import React from 'react';
import { AIResponse, PlaceholderParagraph } from '@/index';

export const GeneratingResponse = () => {
  return (
    <AIResponse className="w-50">
      <PlaceholderParagraph length="large" />
      <PlaceholderParagraph length="medium" />
    </AIResponse>
  );
};

export default {
  title: 'Components/AI/AI Response/Generating Response',
  component: AIResponse,
  subcomponents: {
    'AIResponse.Button': AIResponse.Button,
    'AIResponse.ActionBar': AIResponse.ActionBar,
    'AIResponse.Body': AIResponse.Body,
  },
  parameters: {
    docs: {
      docPage: {
        a11yPropsTable: {
          AIResponse: 'all',
          'AIResponse.Button': 'all',
          'AIResponse.ActionBar': 'all',
          'AIResponse.Body': 'all',
        },
        title: 'AIResponse',
      },
    },
  },
};
