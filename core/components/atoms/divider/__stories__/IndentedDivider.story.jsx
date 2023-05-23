import * as React from 'react';
import { Divider, Row, Column, Card, CardBody, Heading, Input, Text } from '@/index';

export const Indented = () => {
  return (
    <Row>
      <Column size="8">
        <Heading size="m">Select assessment</Heading>
        <Card>
          <CardBody className="p-0">
            <Row className="p-6">
              <Column size={8}>
                <Input className="w-25" icon="search" name="input" placeholder="Search" />
              </Column>
            </Row>

            <Divider appearance="header" />

            <div className="pl-6">
              <div className="py-6">
                <Text>Functional Assessment - Initial</Text>
              </div>
              <Divider />

              <div className="py-6">
                <Text>Functional Assessment - Discharge</Text>
              </div>
              <Divider />

              <div className="py-6">
                <Text>Social Influence of Health</Text>
              </div>
              <Divider />

              <div className="py-6">
                <Text>Social Determinants of Health</Text>
              </div>
            </div>
          </CardBody>
        </Card>
      </Column>
    </Row>
  );
};

export default {
  title: 'Components/Divider/Indented',
  component: Divider,
};
