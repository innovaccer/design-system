import * as React from 'react';
import { Divider, Row, Column, Card, CardBody, Text, Badge } from '@/index';

export const BasicDividerInCard = () => {
  return (
    <Row>
      <Column size="9">
        <Card className="pt-6" shadow="none">
          <CardBody>
            <Row>
              <Column size={10}>
                <Text appearance="disabled">MSSP - Track 3</Text>
              </Column>
              <Column size={2}>
                <Badge appearance="success" subtle={true}>
                  ACTIVE
                </Badge>
              </Column>
            </Row>
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
  title: 'Layout/Divider/Basic Divider In Card',
  component: Divider,
};
