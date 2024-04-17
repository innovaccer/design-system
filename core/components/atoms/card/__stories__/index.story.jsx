import * as React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Text, CardSubdued } from '@/index';
import './style.css';

// CSF format story
export const all = () => {
  const shadow = 'default';

  return (
    <>
      <Card shadow={shadow} className="w-50 Card-wrapper">
        <CardHeader>
          <Text weight="strong" size="large">
            Card Heading
          </Text>
        </CardHeader>
        <CardBody>
          <div>Card Body</div>
        </CardBody>
        <CardFooter className="justify-content-end" withSeperator={false}>
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
        <CardSubdued className="mt-5">Subdued section.</CardSubdued>
      </Card>
    </>
  );
};

const customCode = `/*
// style.css
.Card-wrapper {
    height: 250px;
}
*/

() => {
  const shadow = 'default';

  return (
    <>
      <Card shadow={shadow} className="w-50 Card-wrapper">
        <CardHeader>
          <Text weight="strong" size="large">
            Card Heading
          </Text>
        </CardHeader>
        <CardBody>
          <div>Card Body</div>
        </CardBody>
        <CardFooter className="justify-content-end" withSeperator={false}>
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
        <CardSubdued className='mt-5'>Subdued section.</CardSubdued>
      </Card>
    </>
  );
}`;

export default {
  title: 'Components/Card/All',
  component: Card,
  parameters: {
    docs: {
      docPage: {
        customCode,
        props: {
          components: { Card, CardHeader, CardBody, CardFooter, CardSubdued },
        },
      },
    },
  },
};
