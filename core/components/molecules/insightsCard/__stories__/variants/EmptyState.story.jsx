import * as React from 'react';
import { action } from '@/utils/action';
import { InsightsCard, Text } from '@/index';

const emptyData = {
  categories: [],
};

const minimalData = {
  title: 'No Insights Available',
  description: 'No insights have been generated for this context.',
  categories: [],
};

const emptyDescription = (
  <div>
    <Text className="mb-3" weight="strong">
      📭 Empty State Demonstration
    </Text>
    <Text>
      This variant shows how the component handles <strong>empty data gracefully</strong>. Demonstrates fallback
      behavior when no insights are available, maintaining proper layout structure while providing helpful messaging to
      users about the absence of data.
    </Text>
  </div>
);

const emptyWithTitleDescription = (
  <div>
    <Text className="mb-3" weight="strong">
      📝 Empty State with Title
    </Text>
    <Text>
      This version shows an empty state with a defined title and description, demonstrating how the component maintains
      its structure even when the insights array is empty. Perfect for loading states or data unavailable scenarios.
    </Text>
  </div>
);

export const EmptyState = () => {
  return (
    <div>
      <InsightsCard
        data={emptyData}
        descriptionContent={emptyDescription}
        onInsightSelect={action('empty insight selected')}
      />
    </div>
  );
};

export const EmptyWithTitle = () => {
  return (
    <div>
      <InsightsCard
        data={minimalData}
        descriptionContent={emptyWithTitleDescription}
        onInsightSelect={action('minimal insight selected')}
      />
    </div>
  );
};

export default {
  title: 'Components/Insights Card/Variants/Empty State',
  component: InsightsCard,
  parameters: {
    docs: {
      description: {
        story: 'Empty state cards showing fallback behavior when no insights are available.',
      },
    },
  },
};
