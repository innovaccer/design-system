import * as React from 'react';
import { select } from '@storybook/addon-knobs';
import { Card, CardHeader, CardBody, CardFooter, Button, Text, CardSubdued } from '@/index';

// CSF format story
export const all = () => {
  const shadow = select('shadow', ['none', 'default'], undefined);

  return (
    <>
      <Card shadow={shadow} className="w-50" style={{ height: '250px' }}>
        <CardHeader>
          <Text weight="strong" size="large">
            Card Heading
          </Text>
        </CardHeader>
        <CardBody>
          <div>Card Body</div>
        </CardBody>
        <CardFooter className="justify-content-end">
          <>
            <Button appearance="basic">Cancel</Button>
            <Button appearance="primary" className="ml-4">
              Submit
            </Button>
          </>
        </CardFooter>
      </Card>
      <Card className="mt-5 w-50">
        <CardHeader>
          <Text weight="strong" size="large">
            Card Heading
          </Text>
        </CardHeader>
        <CardBody>
          <div>Card Body</div>
        </CardBody>
        <CardSubdued border="top">
          Subdued section.
        </CardSubdued>
      </Card>
    </>
  );
};

export default {
  title: 'Components/Card/All',
  component: Card,
  parameters: {
    docs: {
      docPage: {
        props: {
          components: { Card, CardHeader, CardBody, CardFooter, CardSubdued }
        }
      }
    }
  }
};
