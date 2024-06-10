import * as React from 'react';
import { Heading, Card, Text, Column, Row, Button } from '@/index';

type ContainerProp = {
  className: string;
  property: string;
};

const Container = (props: ContainerProp) => {
  const { className, property } = props;
  return (
    <Column size={4} className="m-5">
      <Card className="h-100 p-4">
        <div className="mb-4 d-flex align-items-center">
          <Text weight="strong" className="mr-5">
            ClassName:
          </Text>
          <code>{className}</code>
          <Button
            title="Copy className to clipboard"
            appearance="transparent"
            icon="content_copy"
            className="ml-4"
            onClick={() => navigator.clipboard.writeText(className)}
          />
        </div>
        <Text weight="strong" className="mr-5">
          Properties:
        </Text>
        <code>{property}</code>
      </Card>
    </Column>
  );
};

export const animation = () => {
  const data = [
    {
      className: 'opacity-0',
      properties: 'opacity: 0',
    },
    {
      className: 'opacity-1',
      properties: 'opacity: 1',
    },
    {
      className: 'fade-in',
      properties: '0 to 100 opacity',
    },
    {
      className: 'fade-out',
      properties: '100 to 0 opacity',
    },
    {
      className: 'slideOut-left',
      properties: 'The object is moving 16px left while fading out, using an exit-expressive-curve',
    },
    {
      className: 'slideIn-left',
      properties: 'The object is moving 16px left while fading in, using an entrance-expressive-curve',
    },
    {
      className: 'slideOut-right',
      properties: 'The object is moving 16px from left to right while fading out, using an exit-expressive-curve',
    },
    {
      className: 'slideIn-right',
      properties: 'The object is moving 16px from left to right while fading in, using an entrance-expressive-curve',
    },
    {
      className: 'rotate-clockwise',
      properties: 'The object is rotating in a clockwise direction, using a standard-productive-curve',
    },
    {
      className: 'rotate-anticlockwise',
      properties: 'The object is rotating in an anti-clockwise direction, using a standard-productive-curve',
    },
    {
      className: 'shimmer-text',
      properties:
        'Creates a shimmer animation over a text element from left to right with two second linear infinite loop',
    },
  ];

  return (
    <div>
      <Heading size="xxl">Animation</Heading>
      <br />
      <Text weight="strong">Easily set the animation using below classes</Text>
      <Row className="mt-5 mb-8">
        {data.map((item, key) => {
          const { className, properties } = item;
          return <Container key={key} className={className} property={properties} />;
        })}
      </Row>
    </div>
  );
};

export default {
  title: 'Styling/Helper Classes/Animation',
  component: animation,
  parameters: {
    viewMode: 'story',
    docs: {
      page: null,
      docPage: null,
    },
  },
};
