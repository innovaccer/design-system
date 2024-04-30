import * as React from 'react';
import { Divider, Row, Column, Card, CardBody, Text, Badge } from '@/index';

export const BasicDividerInCard = () => {
  return (
    <Row>
      <Column size="9">
        <Card className="pt-6" shadow="none">
          <CardBody>
            <div className="d-flex justify-content-between">
              <Text appearance="disabled">MSSP - Track 3</Text>
              <Badge appearance="success" subtle={true}>
                ACTIVE
              </Badge>
            </div>
            <br />
            <Text small={true}>Medicare</Text>
            <br />
            <div className="py-6">
              <Text appearance="disabled" small={true}>
                Subscriber
              </Text>
              <br />
              <Text appearance="disabled">LAWSON, JOY (Self)</Text>
              <br />
              <Text weight="medium">ZGP123456789</Text>
            </div>
          </CardBody>

          {/* Horizontal Divider */}
          <Divider />

          <CardBody className="py-4">
            <Row>
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
              <Column>
                <Text appearance="disabled" small={true}>
                  Payer ID:
                </Text>
                <Text className="ml-3" small={true}>
                  001
                </Text>
              </Column>
            </Row>
          </CardBody>
        </Card>
      </Column>
    </Row>
  );
};

export default {
  title: 'Components/Divider/Horizontal/Basic Divider In Card',
  component: Divider,
};
