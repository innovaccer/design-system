import * as React from 'react';
import {
  Row,
  Column,
  CardSubdued,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Paragraph,
  Radio,
  Text,
  StatusHint,
} from '@/index';

// CSF format story
export const HighlightingASection = () => {
  return (
    <Row>
      <Column size="7">
        <Card>
          <CardHeader>
            <Heading size="s">Set timing</Heading>
          </CardHeader>
          <CardBody>
            <Paragraph>
              After the campaign starts, the outreach attempt will be made with the recipients according to the sender's
              preferred timings.
            </Paragraph>
            <Row>
              <Column size="12" className="pt-4">
                <Radio label="Send now" name="gender" value="Checkbox" defaultChecked={true} />
                <Text small={true} appearance="disabled" className="ml-7">
                  Campaign will start immediately
                </Text>
              </Column>
              <Column size="12" className="py-4">
                <Radio label="Schedule for later" name="gender" value="Checkbox" />
                <Text small={true} appearance="disabled" className="ml-7">
                  Campaign will not start immediately
                </Text>
              </Column>
            </Row>
          </CardBody>

          <CardSubdued>
            <Text weight="strong" small={true}>
              SELECTED RECIPIENTS
            </Text>
            <div className="pt-5">
              <StatusHint appearance="success">437 wil receive the message.</StatusHint>
              <StatusHint appearance="alert">42 have opted out or never agreed to receive messages.</StatusHint>
            </div>
          </CardSubdued>
        </Card>
      </Column>
    </Row>
  );
};

export default {
  title: 'Components/Card/Highlighting A Section',
  component: Card,
  parameters: {
    docs: {
      docPage: {
        title: 'Card',
        props: {
          components: { Card, CardSubdued },
        },
      },
    },
  },
};
