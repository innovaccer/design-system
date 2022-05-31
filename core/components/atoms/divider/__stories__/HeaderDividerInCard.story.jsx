import * as React from 'react';
import { Divider, Row, Column, Card, CardBody, Radio, Heading } from '@/index';

export const HeaderDividerInCard = () => {
  return (
    <Row>
      <Column size="6">
        <Card className="pb-6" shadow="none">
          <CardBody className="p-0">
            <Row className="p-4">
              <Heading size="s">Section 1</Heading>
            </Row>

            <Divider appearance="header" />

            <div className="px-4 pt-4">
              <Heading size="s">1. Little interest or pleasure in doing things.</Heading>
              <br />
              <Column className="px-4">
                <Radio defaultChecked={true} label="Not at all" name="section" size="regular" value="Not at all" />
                <Radio label="Several Days" name="section" size="regular" value="Several Days" />
                <Radio label="More than half the days" name="section" size="regular" value="More than half days" />
              </Column>
            </div>
          </CardBody>
        </Card>
      </Column>
    </Row>
  );
};

export default {
  title: 'Components/Divider/Header Divider In Card',
  component: Divider,
};
