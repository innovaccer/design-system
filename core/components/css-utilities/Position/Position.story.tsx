import * as React from 'react';
import { Heading, Card, Table, Text } from '@/index';
import utilitiesSchema from '../Schema';
import Paragraph from '@/components/atoms/paragraph';

export const position = () => {
  const data = [
    {
      className: 'position-static',
      properties: 'position: static ;',
    },
    {
      className: 'position-relative',
      properties: 'position: relative ;',
    },
    {
      className: 'position-absolute',
      properties: 'position: absolute ;',
    },
    {
      className: 'position-fixed',
      properties: 'position: fixed ;',
    },
    {
      className: 'position-sticky',
      properties: 'position: -webkit-sticky ;\nposition: sticky ;',
    },
  ];
  return (
    <div>
      <Heading size="xxl">Position</Heading>
      <br />
      <Text weight="strong">Use these shorthand utilities for quickly configuring the position of an element.</Text>
      <div className="mb-8 mt-5">
        <Card className="h-100">
          <Table
            data={data}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size={'standard'}
            showMenu={false}
          />
        </Card>
      </div>
      <Heading size="m">Examples</Heading>
      <Paragraph>Here are some representative examples of these classes:</Paragraph>
      <br />
      <div className="DocPage-codeBlock w-50">
        <code>
          {'<div className="position-static">...</div>'}
          <br />
          {'<div className="position-relative">...</div>'}
          <br />
          {'<div className="position-absolute">...</div>'}
          <br />
          {'<div className="position-fixed">...</div>'}
          <br />
          {'<div className="position-sticky">...</div>'}
          <br />
        </code>
      </div>
    </div>
  );
};

export default {
  title: 'Styling/Helper Classes/Position',
  component: position,
  parameters: {
    viewMode: 'story',
    docs: {
      page: null,
      docPage: null,
    },
  },
};
