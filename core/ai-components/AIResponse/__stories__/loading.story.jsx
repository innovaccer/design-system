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
  title: 'Components/AI/AI Response (Beta)/Generating Response',
  component: AIResponse,
  subcomponents: {
    'AIResponse.Button': AIResponse.Button,
    'AIResponse.ActionBar': AIResponse.ActionBar,
    'AIResponse.Body': AIResponse.Body,
  },
  parameters: {
    docs: {
      docPage: {
        title: 'AIResponse',
      },
    },
  },
};
