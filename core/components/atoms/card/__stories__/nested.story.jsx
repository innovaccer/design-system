import * as React from 'react';
import { Card, Row, Column, CardHeader, CardBody, Heading, Text, Badge } from '@/index';

export const CardWithinACard = () => {
  return (
    <Row>
      <Column size="8">
        <Card>
          <CardHeader>
            <Heading size="s">Managed Plans</Heading>
          </CardHeader>
          <CardBody>
            <Card shadow="none" className="mb-6">
              <CardHeader className="d-flex justify-content-between">
                <Text weight="strong">PRIMARY</Text>
                <Badge appearance="accent4">ACTIVE</Badge>
              </CardHeader>
              <CardBody>
                <Text appearance="disabled">MSSP - Track 3</Text>
                <br />
                <Text small={true}>Medicare</Text>
                <br />
                <div className="py-6">
                  <Text small={true} appearance="disabled">
                    Subscriber
                  </Text>
                  <br />
                  <Text appearance="disabled">LAWSON, JOY (Self)</Text>
                  <br />
                  <Text weight="medium">ZGP123456789</Text>
                </div>
                <Row className="py-4 border-top">
                  <Column>
                    <Text appearance="disabled" small={true}>
                      Last attr:
                    </Text>
                    <Text small={true} className="ml-3">
                      04/19
                    </Text>
                  </Column>
                  <Column>
                    <Text appearance="disabled" small={true}>
                      Payer ID:
                    </Text>
                    <Text small={true} className="ml-3">
                      001
                    </Text>
                  </Column>
                </Row>
              </CardBody>
            </Card>

            <Card shadow="none" className="mb-6">
              <CardHeader className="d-flex justify-content-between">
                <Text weight="strong" appearance="disabled">
                  SECONDARY
                </Text>
                <Badge>INACTIVE</Badge>
              </CardHeader>
              <CardBody>
                <Text appearance="disabled">Community Plan</Text>
                <br />
                <Text small={true}>Blue Shield of California</Text>
                <br />
                <div className="py-6">
                  <Text small={true} appearance="disabled">
                    Subscriber
                  </Text>
                  <br />
                  <Text appearance="disabled">LAWSON, MICHAEL (Spouse)</Text>
                  <br />
                  <Text weight="medium">HKA987654321</Text>
                </div>
                <Row className="py-4 border-top">
                  <Column>
                    <Text appearance="disabled" small={true}>
                      Last attr:
                    </Text>
                    <Text small={true} className="ml-3">
                      11/18
                    </Text>
                  </Column>
                  <Column>
                    <Text appearance="disabled" small={true}>
                      Payer ID:
                    </Text>
                    <Text small={true} className="ml-3">
                      042
                    </Text>
                  </Column>
                </Row>
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </Column>
    </Row>
  );
};

export default {
  title: 'Layout/Card/Card Within A Card',
  component: Card,
};
