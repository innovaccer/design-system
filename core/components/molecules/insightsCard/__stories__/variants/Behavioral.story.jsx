import * as React from 'react';
import { InsightsCard, Text } from '@/index';
import { behavioralData } from '../../data/behavioralData';

const behavioralDescription = (
  <div>
    <Text className="mb-3" weight="strong">
      🧠 Behavioral Health Assessment
    </Text>
    <Text>
      This variant demonstrates behavioral health insights with <strong>default appearance</strong> and mental health
      data. Shows protected information handling and demonstrates how sensitive data can be displayed with appropriate
      privacy indicators and styling.
    </Text>
  </div>
);

export const Behavioral = () => {
  return (
    <div>
      <InsightsCard data={behavioralData} descriptionContent={behavioralDescription} />
    </div>
  );
};

export default {
  title: 'Components/Insights Card/Variants/Behavioral',
  component: InsightsCard,
  parameters: {
    docs: {
      description: {
        story: 'Behavioral health card showing mental health and substance use insights.',
      },
    },
  },
};
