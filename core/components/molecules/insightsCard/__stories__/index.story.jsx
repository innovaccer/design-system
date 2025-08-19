import * as React from 'react';
import { InsightsCard, Text } from '@/index';
import { data } from '../data/indexData';

const description = (
  <Text>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur dolore aliquid, officia molestias magni
    nostrum recusandae animi. Nostrum asperiores rem earum debitis expedita. Molestias officia dicta commodi debitis,
    nam architecto aliquam magnam quo fugit impedit rem, ducimus excepturi deleniti cumque ipsa autem, repudiandae ea
    fugiat perferendis veniam ullam ipsam nihil.
  </Text>
);

export const all = () => {
  return (
    <div>
      <InsightsCard data={data} description={description} />
    </div>
  );
};

export default {
  title: 'Components/Insights Card/All',
  component: InsightsCard,
};
