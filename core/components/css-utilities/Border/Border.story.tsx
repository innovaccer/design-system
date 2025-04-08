import * as React from 'react';
import { Heading, Paragraph, Card, Table, Text } from '@/index';
import utilitiesSchema from '../Schema';

export const border = () => {
  const data = [
    {
      className: 'border',
      properties: 'border: var(--border) ;',
    },
    {
      className: 'border-top',
      properties: ' border-top: var(--border) ;',
    },
    {
      className: 'border-bottom',
      properties: 'border-bottom: var(--border) ;',
    },
    {
      className: 'border-right',
      properties: 'border-right: var(--border) ;',
    },
    {
      className: 'border-left',
      properties: 'border-left: var(--border) ;',
    },
    {
      className: 'border-0',
      properties: 'border: 0 ;',
    },
    {
      className: 'border-top-0',
      properties: ' border-top: 0 ;',
    },
    {
      className: 'border-bottom-0',
      properties: 'border-bottom: 0 ;',
    },
    {
      className: 'border-right-0',
      properties: 'border-right: 0 ;',
    },
    {
      className: 'border-left-0',
      properties: 'border-left: 0 ;',
    },
  ];

  const radiusData = [
    {
      className: 'rounded-2-5',
      properties: 'border-radius: 1px ;',
    },
    {
      className: 'rounded-05',
      properties: 'border-radius: 2px ;',
    },
    {
      className: 'rounded-10',
      properties: 'border-radius: 4px ;',
    },
    {
      className: 'rounded-15',
      properties: 'border-radius: 6px ;',
    },
    {
      className: 'rounded-20',
      properties: 'border-radius: 8px ;',
    },
    {
      className: 'rounded-30',
      properties: 'border-radius: 12px ;',
    },
    {
      className: 'rounded-40',
      properties: 'border-radius: 16px ;',
    },
    {
      className: 'rounded-full',
      properties: 'border-radius: 9999px ;',
    },
  ];

  return (
    <div>
      <Heading size="xxl">Border</Heading>
      <br />
      &nbsp;
      <Text weight="strong">
        Use border utilities to add or remove an element’s borders. Choose from all borders or one at a time.
      </Text>
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
      <br />
      <Heading size="m">Border Radius</Heading>
      <br />
      <div
        style={{
          height: '250px',
        }}
        className="mt-5 mb-8"
      >
        <Card className="h-100">
          <Table
            data={radiusData}
            schema={utilitiesSchema}
            size={'standard'}
            headerOptions={{
              withSearch: true,
            }}
            showMenu={false}
          />
        </Card>
      </div>
      <br />
      <Heading size="m">Examples</Heading>
      <Paragraph>Here are some representative examples of these classes:</Paragraph>
      &nbsp;
      <div className="pl-10 h-25 bg-light w-50">
        <span className="border bg-secondary-lightest p-8 d-inline-block mr-6">border</span>
        <span className="border-top bg-secondary-lightest p-8 d-inline-block mr-6">top</span>
        <span className="border-right bg-secondary-lightest p-8 d-inline-block mr-6">right</span>
        <span className="border-bottom bg-secondary-lightest p-8 d-inline-block mr-6">bottom</span>
        <span className="border-left bg-secondary-lightest p-8 d-inline-block">left</span>
      </div>
      &nbsp;
      <div className="DocPage-codeBlock w-50 pl-10">
        {'<span className="border bg-secondary-lightest p-8 d-inline-block mr-6">border</span>'}
        <br />
        {'<span className="border-top bg-secondary-lightest p-8 d-inline-block mr-6">top</span>'}
        <br />
        {'<span className="border-right bg-secondary-lightest p-8 d-inline-block mr-6">right</span>'}
        <br />
        {'<span className="border-bottom bg-secondary-lightest p-8 d-inline-block mr-6">bottom</span>'}
        <br />
        {'<span className="border-left bg-secondary-lightest p-8 d-inline-block">left</span>'}
      </div>
      &nbsp;
      <div className="pl-10 h-25 bg-light w-50">
        <span className="border border-0 bg-secondary-lightest p-8 d-inline-block mr-6">border-0</span>
        <span className="border border-top-0 bg-secondary-lightest p-8 d-inline-block mr-6">top-0</span>
        <span className="border border-right-0 bg-secondary-lightest p-8 d-inline-block mr-6">right-0</span>
        <span className="border border-bottom-0 bg-secondary-lightest p-8 d-inline-block mr-6">bottom-0</span>
        <span className="border border-left-0 bg-secondary-lightest p-8 d-inline-block">left-0</span>
      </div>
      &nbsp;
      <div className="DocPage-codeBlock w-50 pl-10">
        {'<span className="border border-0 bg-secondary-lightest p-8 d-inline-block mr-6">border-0</span>'}
        <br />
        {'<span className="border border-top-0 bg-secondary-lightest p-8 d-inline-block mr-6">top-0</span>'}
        <br />
        {'<span className="border border-right-0 bg-secondary-lightest p-8 d-inline-block mr-6">right-0</span>'}
        <br />
        {'<span className="border border-bottom-0 bg-secondary-lightest p-8 d-inline-block mr-6">bottom-0</span>'}
        <br />
        {'<span className="border border-left-0 bg-secondary-lightest p-8 d-inline-block">left-0</span>'}
      </div>
      &nbsp;
    </div>
  );
};

export default {
  title: 'Styling/Helper Classes/Border',
  component: border,
  parameters: {
    viewMode: 'story',
    docs: {
      docPage: null,
      page: null,
    },
  },
};
