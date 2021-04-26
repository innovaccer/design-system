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
  StatusHint
} from '@/index';

// CSF format story
export const WithBorder = () => {
  return (
    <div className="d-flex">
      <Row>
        <Column size="7" className="p-6">
          <Text>
            Border: top
          </Text>
          <Card>
            <CardHeader>
              <Heading size="s">Set timing</Heading>
            </CardHeader>
            <CardBody>
              <Paragraph>
                After the campaign starts, the outreach attempt will be made with the recipients according to the
                sender's preferred timings.
              </Paragraph>
              <Row>
                <Column size="12" className="pt-4">
                  <Radio label="Send now" name="gender" value="Checkbox" checked={true} />
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
            <CardSubdued border="top">
              <Text weight="strong" small={true}>
                SELECTED RECIPIENTS
              </Text>
              <div className="pt-6">
                <StatusHint appearance="success">437 wil receive the message.</StatusHint>
                <StatusHint appearance="alert">42 have opted out or never agreed to receive messages.</StatusHint>
              </div>
            </CardSubdued>
          </Card>
        </Column>

        <Column size="7" className="p-6">
          <Text>
            Border: bottom
          </Text>
          <Card>
            <CardSubdued border="bottom">
              <Text weight="strong" small={true}>
                SELECTED RECIPIENTS
              </Text>
              <div className="pt-6">
                <StatusHint appearance="success">437 wil receive the message.</StatusHint>
                <StatusHint appearance="alert">42 have opted out or never agreed to receive messages.</StatusHint>
              </div>
            </CardSubdued>

            <CardHeader>
              <Heading size="s">Set timing</Heading>
            </CardHeader>
            <CardBody>
              <Paragraph>
                After the campaign starts, the outreach attempt will be made with the recipients according to the
                sender's preferred timings.
              </Paragraph>
              <Row>
                <Column size="12" className="pt-4">
                  <Radio label="Send now" name="gender" value="Checkbox" checked={true} />
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
          </Card>
        </Column>

        <Column size="7" className="p-6">
          <Text>
            Border: left
          </Text>
          <Card>
            <Row>
              <Column>
                <CardHeader>
                  <Heading size="s">Set timing</Heading>
                </CardHeader>
                <CardBody>
                  <Paragraph>
                    After the campaign starts, the outreach attempt will be made with the recipients according to the
                    sender's preferred timings.
                  </Paragraph>
                  <Row>
                    <Column size="12" className="pt-4">
                      <Radio label="Send now" name="gender" value="Checkbox" checked={true} />
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
              </Column>
              <Column>
                <CardSubdued border="left" className="h-100">
                  <Text weight="strong" small={true}>
                    SELECTED RECIPIENTS
                  </Text>
                  <div className="pt-6">
                    <StatusHint appearance="success">437 wil receive the message.</StatusHint>
                    <StatusHint appearance="alert">42 have opted out or never agreed to receive messages.</StatusHint>
                  </div>
                </CardSubdued>
              </Column>
            </Row>
          </Card>
        </Column>

        <Column size="7" className="p-6">
          <Text>
            Border: right
          </Text>
          <Card>
            <Row>
              <Column>
                <CardSubdued border="right" className="h-100">
                  <Text weight="strong" small={true}>
                    SELECTED RECIPIENTS
                  </Text>
                  <div className="pt-6">
                    <StatusHint appearance="success">437 wil receive the message.</StatusHint>
                    <StatusHint appearance="alert">42 have opted out or never agreed to receive messages.</StatusHint>
                  </div>
                </CardSubdued>
              </Column>
              <Column>
                <CardHeader>
                  <Heading size="s">Set timing</Heading>
                </CardHeader>
                <CardBody>
                  <Paragraph>
                    After the campaign starts, the outreach attempt will be made with the recipients according to the
                    sender's preferred timings.
                  </Paragraph>
                  <Row>
                    <Column size="12" className="pt-4">
                      <Radio label="Send now" name="gender" value="Checkbox" checked={true} />
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
              </Column>
            </Row>
          </Card>
        </Column>
      </Row>
    </div>
  );
};

export default {
  title: 'Components/CardSubdued/With Border',
  component: CardSubdued,
  parameters: {
    docs: {
      docPage: {
        title: 'CardSubdued'
      }
    }
  }
};
