import * as React from 'react';
import { InsightsCard, Text } from '@/index';
import { data } from '../../data/singleNavData';

const singleNavDescription = (
  <div>
    <Text className="mb-3" weight="strong">
      🎯 Single Navigation Variant
    </Text>
    <Text>
      This variant demonstrates a simplified insights card with <strong>minimal data structure</strong> and single
      navigation flow. Perfect for focused use cases where you want to highlight specific insights without overwhelming
      the user with multiple categories or complex interactions.
    </Text>
  </div>
);

export const singleNav = () => {
  return (
    <div>
      <InsightsCard data={data} descriptionContent={singleNavDescription} />
    </div>
  );
};

export default {
  title: 'Components/Insights Card/Variants/Single Nav',
  component: InsightsCard,
};
