import * as React from 'react';
import { Card, Row, Column, CardHeader, CardBody, Heading, Text, Badge, CardFooter } from '@/index';

export const CardWithinACard = () => {
  const withSeperator = false;

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
              </CardBody>

              <CardFooter className="position-relative" withSeperator={withSeperator}>
                <div>
                  <Text appearance="disabled" small={true}>
                    Last attr:
                  </Text>
                  <Text small={true} className="ml-3">
                    04/19
                  </Text>
                  <Text appearance="disabled" small={true} className="ml-7">
                    Payer ID:
                  </Text>
                  <Text small={true} className="ml-3">
                    001
                  </Text>
                </div>
              </CardFooter>
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
              </CardBody>
              <CardFooter className="position-relative" withSeperator={withSeperator}>
                <div>
                  <Text appearance="disabled" small={true}>
                    Last attr:
                  </Text>
                  <Text small={true} className="ml-3">
                    11/18
                  </Text>
                  <Text appearance="disabled" small={true} className="ml-7">
                    Payer ID:
                  </Text>
                  <Text small={true} className="ml-3">
                    042
                  </Text>
                </div>
              </CardFooter>
            </Card>
          </CardBody>
        </Card>
      </Column>
    </Row>
  );
};

const customCode = `
  () => {
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
              </CardBody>

              <CardFooter className="position-relative" withSeperator={false}>
                <div>
                  <Text appearance="disabled" small={true}>
                    Last attr:
                  </Text>
                  <Text small={true} className="ml-3">
                    04/19
                  </Text>
                  <Text appearance="disabled" small={true} className="ml-7">
                    Payer ID:
                  </Text>
                  <Text small={true} className="ml-3">
                    001
                  </Text>
                </div>
              </CardFooter>
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
              </CardBody>
              <CardFooter className="position-relative" withSeperator={false}>
                <div>
                  <Text appearance="disabled" small={true}>
                    Last attr:
                  </Text>
                  <Text small={true} className="ml-3">
                    11/18
                  </Text>
                  <Text appearance="disabled" small={true} className="ml-7">
                    Payer ID:
                  </Text>
                  <Text small={true} className="ml-3">
                    042
                  </Text>
                </div>
              </CardFooter>
            </Card>
          </CardBody>
        </Card>
      </Column>
    </Row>
  )
}
`;

export default {
  title: 'Components/Card/Card Within A Card',
  component: Card,
  parameters: {
    docs: {
      docPage: {
        customCode,
        props: {
          components: { Card, CardHeader, CardBody, CardFooter },
        },
      },
    },
  },
};
