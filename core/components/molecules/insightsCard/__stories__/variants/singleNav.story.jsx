import * as React from 'react';
import { InsightsCard, Text } from '@/index';
import { data } from '../../data/singleNavData';

const description = (
  <Text>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aspernatur magnam et a voluptate repellendus, ducimus
    minus odit tempore libero est modi mollitia molestias laborum distinctio fugiat deserunt veniam! Natus ea ipsum
    assumenda accusantium cupiditate? Architecto nulla voluptates odio cum.
  </Text>
);

export const singleNav = () => {
  return (
    <div>
      <InsightsCard data={data} description={description} />
    </div>
  );
};

export default {
  title: 'Components/Insights Card/Variants/Single Nav',
  component: InsightsCard,
};
