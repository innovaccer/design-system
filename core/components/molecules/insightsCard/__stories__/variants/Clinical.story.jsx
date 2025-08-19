import * as React from 'react';
import { action } from '@/utils/action';
import { InsightsCard, Text } from '@/index';
import { clinicalData } from '../../data/clinicalData';

const clinicalDescription = (
  <div>
    <Text className="mb-3" weight="strong">
      🏥 Clinical Risk Assessment
    </Text>
    <Text>
      This variant demonstrates a healthcare-focused insights card with <strong>elevated appearance</strong> and medical
      data. Shows critical alerts, lab results, and health indicators with no scrolling to emphasize all medical
      information at once. Perfect for clinical dashboards where all patient data must be immediately visible.
    </Text>
  </div>
);

export const Clinical = () => {
  return (
    <div>
      <InsightsCard
        data={clinicalData}
        descriptionContent={clinicalDescription}
        onInsightSelect={action('clinical insight selected')}
        appearance="elevated"
        enableScrolling={false}
        maxInsightsHeight="auto"
      />
    </div>
  );
};

export default {
  title: 'Components/Insights Card/Variants/Clinical',
  component: InsightsCard,
  parameters: {
    docs: {
      description: {
        story: 'Clinical insights card showing medical alerts, lab results, and health indicators.',
      },
    },
  },
};
