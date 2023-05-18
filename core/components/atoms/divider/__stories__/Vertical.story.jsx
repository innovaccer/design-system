import * as React from 'react';
import { Divider, Row, Column, Card, CardBody, Text, Radio } from '@/index';

export const Vertical = () => {
  return (
    <Row>
      <Column size="10">
        <Card shadow="none">
          <CardBody className="p-0">
            <Row>
              <Column className="p-6">
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
              </Column>

              <Divider vertical={true} />

              <Column className="p-6">
                <div>
                  <Text weight="strong">1. Little interest or pleasure in doing things.</Text>
                  <br />
                  <Column className="px-4 mt-5">
                    <Radio defaultChecked={true} label="Not at all" name="section" size="regular" value="Not at all" />
                    <Radio label="Several Days" name="section" size="regular" value="Several Days" />
                    <Radio label="More than half the days" name="section" size="regular" value="More than half days" />
                  </Column>
                </div>
              </Column>
            </Row>
          </CardBody>
        </Card>
      </Column>
    </Row>
  );
};

export default {
  title: 'Components/Divider/Vertical',
  component: Divider,
};
