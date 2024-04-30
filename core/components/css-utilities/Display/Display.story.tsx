import * as React from 'react';
import { Heading, Paragraph, Card, Table, Text } from '@/index';
import utilitiesSchema from '../Schema';

export const display = () => {
  const data = [
    {
      className: 'd-none',
      properties: 'display: none ;',
    },
    {
      className: 'd-inline',
      properties: 'display: inline ;',
    },
    {
      className: 'd-inline-block',
      properties: 'display: inline-block ;',
    },
    {
      className: 'd-block',
      properties: 'display: block ;',
    },
    {
      className: 'd-table',
      properties: 'display: table ;',
    },
    {
      className: 'd-table-row',
      properties: 'display: table-row ;',
    },
    {
      className: 'd-table-cell',
      properties: 'display: table-cell ;',
    },
    {
      className: 'd-flex',
      properties: 'display: flex ;',
    },
    {
      className: 'd-inline-flex',
      properties: 'display: inline-flex ;',
    },
  ];
  return (
    <div>
      <Heading size="xxl">Display property</Heading>
      <br />
      <Text weight="strong">
        Quickly and responsively toggle the display value of components and more with our display utilities.
      </Text>
      &nbsp;
      <Heading size="m">How it works</Heading>
      <Paragraph>
        Change the value of the display property with our responsive display utility classes. We purposely support only
        a subset of all possible values for display. Classes can be combined for various effects as you need.
      </Paragraph>
      &nbsp;
      <Heading size="m">Notation</Heading>
      <Paragraph> Value of display is one of:</Paragraph>
      <div
        style={{
          height: '350px',
        }}
        className="mt-5 mb-8"
      >
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
      <div className="d-inline p-2 Utilities-example">d-inline</div>
      <div className="d-inline p-2 bg-dark Utilities-example Utilities-text--color">d-inline</div>
      <br />
      &nbsp;
      <div className="DocPage-codeBlock pb-5 pt-5 pl-5">
        {'<div className="d-inline p-2">d-inline</div>'}
        <br />
        {'<div className="d-inline p-2">d-inline</div>'}
        <br />
      </div>
      &nbsp;
      <span className="d-block p-2 Utilities-example">d-block</span>
      <span className="d-block p-2 bg-dark Utilities-example Utilities-text--color ">d-block</span>
      &nbsp;
      <div className="DocPage-codeBlock pb-5 pt-5 pl-5">
        {'<span className="d-block p-2">d-block</span>'}
        <br />
        {'<span className="d-block p-2">d-block</span>'}
        <br />
      </div>
    </div>
  );
};

export default {
  title: 'Styling/Helper Classes/Display',
  component: display,
  parameters: {
    viewMode: 'story',
    docs: {
      page: null,
      docPage: null,
    },
  },
};
