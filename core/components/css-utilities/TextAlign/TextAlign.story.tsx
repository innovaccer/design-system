import * as React from 'react';
import { Heading, Paragraph, Card, Table } from '@/index';
import utilitiesSchema from '../Schema';

export const textAlign = () => {
  const data = [
    {
      className: 'text-align-start',
      properties: 'text-align: start ;',
    },
    {
      className: 'text-align-end',
      properties: 'text-align: end ;',
    },
    {
      className: 'text-align-center',
      properties: 'text-align: center ;',
    },
    {
      className: 'text-align-justify',
      properties: 'text-align: justify ;',
    },
    {
      className: 'text-align-left',
      properties: 'text-align: left ;',
    },
    {
      className: 'text-align-right',
      properties: 'text-align: right ;',
    },
  ];
  return (
    <div>
      <Heading size="xxl">Text alignment</Heading>
      <br />
      &nbsp;
      <div className="mt-5 mb-8 vh-50">
        <Card className="h-100">
          <Table
            data={data}
            schema={utilitiesSchema}
            size={'standard'}
            headerOptions={{
              withSearch: true,
            }}
            showMenu={false}
          />
        </Card>
      </div>
      <Heading size="m">Examples</Heading>
      <Paragraph>Here are some representative examples of these classes:</Paragraph>
      <div className="h-25 Utilities-example w-25">
        <Card className="p-5 mb-5 text-align-start">Text Alignment: Start </Card>
        <Card className="p-5 mb-5 text-align-end">Text Alignment: End </Card>
        <Card className="p-5 mb-5 text-align-center">Text Alignment: Center </Card>
        <Card className="p-5 mb-5 text-align-justify">Text Alignment: Justify</Card>
        <Card className="p-5 mb-5 text-align-left">Text Alignment: Left </Card>
        <Card className="p-5 mb-5 text-align-right">Text Alignment: Right </Card>
      </div>
      <div className="DocPage-codeBlock w-50 pl-10">
        {'<Card className="p-5 mb-5 text-align-start">Text Alignment: Start </Card>'}
        <br />
        {'<Card className="p-5 mb-5 text-align-end">Text Alignment: End </Card>'}
        <br />
        {'<Card className="p-5 mb-5 text-align-center">Text Alignment: Center </Card>'}
        <br />
        {'<Card className="p-5 mb-5 text-align-justify">Text Alignment: Justify </Card>'}
        <br />
        {'<Card className="p-5 mb-5 text-align-left">Text Alignment: Left </Card>'}
        <br />
        {'<Card className="p-5 mb-5 text-align-right">Text Alignment: Right </Card>'}
        <br />
      </div>
      &nbsp;
    </div>
  );
};

export default {
  title: 'Styling/Helper Classes/Text Align',
  component: textAlign,
  parameters: {
    viewMode: 'story',
    docs: {
      docPage: null,
      page: null,
    },
  },
};
