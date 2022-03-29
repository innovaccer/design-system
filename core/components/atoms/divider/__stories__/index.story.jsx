import * as React from 'react';
import { Divider, Row, Column, Card, CardBody, Text, Heading } from '@/index';

export const All = () => {
  return (
    <Row>
      <Column size="10">
        <Card shadow="none">
          <CardBody className="p-0">
            <Row className="py-4 px-6">
              <Heading>Assessment Report</Heading>
            </Row>

            <Divider appearance="header" />
            <Row>
              <Column>
                <div className="p-6">
                  <Heading size="s">Select Assessment</Heading>
                </div>
                <Divider />
                <div className="pl-6">
                  <div className="py-4">
                    <Text>Functional Assessment - Initial</Text>
                  </div>
                  <Divider />

                  <div className="py-4">
                    <Text>Social Influence of Health</Text>
                  </div>
                  <Divider />

                  <div className="py-4">
                    <Text>Social Determinants of Health</Text>
                  </div>
                  <Divider />

                  <div className="py-4">
                    <Text>Functional Assessment - Discharge</Text>
                  </div>
                </div>
              </Column>
              <Divider vertical={true} />

              <Column>
                <div className="p-6">
                  <Text appearance="disabled">MSSP - Track 3</Text>
                  <br />
                  <Text small={true}>Medicare</Text>
                  <br />
                  <div className="pt-6">
                    <Text appearance="disabled" small={true}>
                      Subscriber
                    </Text>
                    <br />
                    <Text appearance="disabled">LAWSON, JOY (Self)</Text>
                    <br />
                    <Text weight="medium">ZGP123456789</Text>
                  </div>
                </div>
                <Divider />
                <Row className="p-6">
                  <Column>
                    <Text appearance="disabled" small={true}>
                      Last attr:
                    </Text>
                    <Text className="ml-3" small={true}>
                      04/19
                    </Text>
                  </Column>
                  <Column>
                    <Text appearance="disabled" small={true}>
                      Plan ID:
                    </Text>
                    <Text className="ml-3" small={true}>
                      040
                    </Text>
                  </Column>
                </Row>
              </Column>
            </Row>
          </CardBody>
        </Card>
      </Column>
    </Row>
  );
};

export default {
  title: 'Components/Divider/All',
  component: Divider,
};
