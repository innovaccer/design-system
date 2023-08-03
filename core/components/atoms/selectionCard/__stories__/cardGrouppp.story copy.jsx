import * as React from 'react';
import { SelectionCard, Row, Column, Button } from '@/index';
import { CardItem } from '../CardItem';

// CSF format story
export const cardGroup = () => {
  return (
    <SelectionCard multiSelect={true} selectedList={['r1']}>
      <Row>
        <Column>
          <SelectionCard.Item id="r1" className="p-5 mr-3">
            card 1<Button>Click me</Button>
          </SelectionCard.Item>
        </Column>
        <Column>
          <SelectionCard.Item id="r2" className="p-5 mr-3">
            card 2
          </SelectionCard.Item>
        </Column>
        <Column>
          <SelectionCard.Item id="r3" className="p-5 mr-3">
            card 3
          </SelectionCard.Item>
        </Column>
        <Column>
          <SelectionCard.Item id="r4" className="p-5 mr-3">
            card 4
          </SelectionCard.Item>
        </Column>
      </Row>
    </SelectionCard>
  );
};

export default {
  title: 'Layout/Selection Card/Card Groupppp',
  component: SelectionCard,
  subcomponents: { CardItem },
  parameters: {
    docs: {
      docPage: {
        title: 'SelectionCard',
      },
    },
  },
};
