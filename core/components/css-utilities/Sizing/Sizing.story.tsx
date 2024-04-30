import * as React from 'react';
import { Heading, Paragraph, Card, Table, Text } from '@/index';
import utilitiesSchema from '../Schema';

export const sizing = () => {
  const data = [
    {
      className: 'w-25',
      properties: 'width: 25% ;',
    },
    {
      className: 'w-50',
      properties: 'width: 50% ;',
    },
    {
      className: 'w-75',
      properties: 'width: 75% ;',
    },
    {
      className: 'w-100',
      properties: 'width: 100% ;',
    },
    {
      className: 'w-auto',
      properties: 'width: auto ;',
    },
    {
      className: 'mw-100',
      properties: 'max-width: 100% ;',
    },
    {
      className: 'vw-25',
      properties: 'width: 25vw ;',
    },
    {
      className: 'vw-50',
      properties: 'width: 50vw ;',
    },
    {
      className: 'vw-75',
      properties: 'width: 75vw ;',
    },
    {
      className: 'vw-100',
      properties: 'width: 100vw ;',
    },
    {
      className: 'min-vw-100',
      properties: 'min-width: 100vw ;',
    },
  ];
  const Data = [
    {
      className: 'h-25',
      properties: 'height: 25% ;',
    },
    {
      className: 'h-50',
      properties: 'height: 50% ;',
    },
    {
      className: 'h-75',
      properties: 'height: 75% ;',
    },
    {
      className: 'h-100',
      properties: 'height: 100% ;',
    },
    {
      className: 'h-auto',
      properties: 'height: auto ;',
    },
    {
      className: 'mh-100',
      properties: 'max-height: 100% ;',
    },
    {
      className: 'vh-25',
      properties: 'height: 25vh ;',
    },
    {
      className: 'vh-50',
      properties: 'height: 50vh ;',
    },
    {
      className: 'vh-75',
      properties: 'height: 75vh ;',
    },
    {
      className: 'vh-100',
      properties: 'height: 100vh ;',
    },
    {
      className: 'min-vh-100',
      properties: 'min-height: 100vh ;',
    },
  ];
  return (
    <div>
      <Heading size="xxl"> Sizing</Heading>
      <br />
      <Text weight="strong">
        You can make an element as wide or as tall (relative to its parent) with our width and height utilities.
      </Text>
      <br />
      &nbsp;
      <Heading size="s">WIDTH</Heading>
      <div className="mt-4 mb-8">
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
      &nbsp;
      <div className="w-25 p-3 mb-2 width-color">Width 25%</div>
      <div className="w-50 p-3 mb-2 width-color">Width 50%</div>
      <div className="w-75 p-3 mb-2 width-color">Width 75%</div>
      <div className="w-100 p-3 mb-2 width-color">Width 100%</div>
      &nbsp;
      <div className="DocPage-codeBlock">
        {'<div className="w-25 p-3">Width 25%</div>'}
        <br />
        {'<div className="w-50 p-3">Width 50%</div>'}
        <br />
        {'<div className="w-75 p-3">Width 75%</div>'}
        <br />
        {'<div className="w-100 p-3">Width 100%</div>'}
        <br />
      </div>
      &nbsp;
      <Heading size="m">HEIGHT</Heading>
      <div className="mt-4 mb-8">
        <Card className="h-100">
          <Table
            data={Data}
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
      &nbsp;
      <div className="height w-50">
        <div className="h-25 d-inline-block height-color mr-2">Height 25%</div>
        <div className="h-50 d-inline-block height-color mr-2">Height 50%</div>
        <div className="h-75 d-inline-block height-color mr-2">Height 75%</div>
        <div className="h-100 d-inline-block height-color mr-2">Height 100%</div>
      </div>
      &nbsp;
      <div className="DocPage-codeBlock">
        <code>
          {'<div className="h-25 d-inline-block">Height 25%</div>'}
          <br />
          {'<div className="h-50 d-inline-block">Height 50%</div>'}
          <br />
          {'<div className="h-75 d-inline-block">Height 75%</div>'}
          <br />
          {'<div className="h-100 d-inline-block">Height 100%</div>'}
          <br />
        </code>
      </div>
    </div>
  );
};

export default {
  title: 'Styling/Helper Classes/Sizing',
  component: sizing,
  parameters: {
    viewMode: 'story',
    docs: {
      page: null,
      docPage: null,
    },
  },
};
