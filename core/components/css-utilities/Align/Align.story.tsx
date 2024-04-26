import * as React from 'react';
import { Heading, Paragraph, Card, Table, Text } from '@/index';
import utilitiesSchema from '../Schema';

export const align = () => {
  const data = [
    {
      className: 'align-baseline',
      properties: 'vertical-align: baseline ;',
    },
    {
      className: 'align-top',
      properties: 'vertical-align: top ;',
    },
    {
      className: 'align-middle',
      properties: 'vertical-align: middle ;',
    },
    {
      className: 'align-bottom',
      properties: 'vertical-align: bottom ;',
    },
    {
      className: 'align-text-bottom',
      properties: 'vertical-align: text-bottom ;',
    },
    {
      className: 'align-text-top',
      properties: 'vertical-align: text-top ;',
    },
  ];
  return (
    <div>
      <Heading size="xxl">Vertical alignment</Heading>
      <br />
      &nbsp;
      <Text weight="strong">Change the vertical alignment of inline, inline-block, inline-table </Text>
      &nbsp;
      <div
        style={{
          height: '250px',
        }}
        className="mt-5 mb-8"
      >
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
      &nbsp;
      <div className="pl-10 h-25 Utilities-example w-50">
        <span className="align-baseline">baseline </span>
        <span className="align-top">top </span>
        <span className="align-middle">middle </span>
        <span className="align-bottom">bottom </span>
        <span className="align-text-top">text-top </span>
        <span className="align-text-bottom">text-bottom </span>
      </div>
      &nbsp;
      <div className="DocPage-codeBlock w-50 pl-10">
        {'<span className="align-baseline">baseline </span>'}
        <br />
        {'<span className="align-top">top </span>'}
        <br />
        {'<span className="align-middle">middle </span>'}
        <br />
        {'<span className="align-bottom">bottom </span>'}
        <br />
        {'<span className="align-text-top">text-top </span>'}
        <br />
        {'<span className="align-text-bottom">text-bottom </span>'}
        <br />
      </div>
      &nbsp;
    </div>
  );
};

export default {
  title: 'Styling/Helper Classes/Align',
  component: align,
  parameters: {
    viewMode: 'story',
    docs: {
      docPage: null,
      page: null,
    },
  },
};
