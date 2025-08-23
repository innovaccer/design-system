import * as React from 'react';
import { InsightsCard, Text } from '@/index';
import { behavioralData } from '../../data/behavioralData';

const description = (
  <Text>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aspernatur magnam et a voluptate repellendus, ducimus
    minus odit tempore libero est modi mollitia molestias laborum distinctio fugiat deserunt veniam! Natus ea ipsum
    assumenda accusantium cupiditate? Architecto nulla voluptates odio cum.
  </Text>
);

export const Behavioral = () => {
  return (
    <div>
      <InsightsCard data={behavioralData} description={description} />
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
