import * as React from 'react';
import { action } from '@/utils/action';
import { InsightsCard, Text } from '@/index';
import { socialData } from '../../data/socialData';

const socialDescription = (
  <div>
    <Text className="mb-3" weight="strong">
      🏠 Social Determinants Assessment
    </Text>
    <Text>
      This variant showcases social factors data with <strong>bordered appearance</strong> and gradient border styling.
      Displays housing, food security, transportation, and social support insights. Demonstrates how the component
      adapts to different data domains while maintaining consistent visual hierarchy.
    </Text>
  </div>
);

export const Social = () => {
  return (
    <div>
      <InsightsCard
        data={socialData}
        descriptionContent={socialDescription}
        onInsightSelect={action('social insight selected')}
        appearance="bordered"
        showGradientBorder={true}
      />
    </div>
  );
};

export default {
  title: 'Components/Insights Card/Variants/Social',
  component: InsightsCard,
  parameters: {
    docs: {
      description: {
        story: 'Social determinants card showing housing, food security, transportation, and social support factors.',
      },
    },
  },
};
