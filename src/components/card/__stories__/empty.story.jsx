import * as React from 'react';
import { Card, CardBody, CardHeader, Heading, Row, Column, Button, EmptyState } from '@/index';
import image from './assets/empty.png';

// CSF format story
export const EmptyCard = () => {
  return (
    <Row>
      <Column size="8">
        <Card>
          <CardHeader>
            <Heading size="s">Daily progress</Heading>
          </CardHeader>
          <CardBody>
            <EmptyState
              title="Unable to fetch data"
              description="Sorry there was a technical issue while getting this data. Please try again."
              imageSrc={image}
              size="small"
              className="pb-6"
            >
              <Button icon="refresh" iconAlign="left" className="mt-3">
                Reload
              </Button>
            </EmptyState>
          </CardBody>
        </Card>
      </Column>
    </Row>
  );
};

export default {
  title: 'Components/Card/Empty Card',
  component: Card,
};
