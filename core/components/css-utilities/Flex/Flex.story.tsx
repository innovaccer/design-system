import * as React from 'react';
import { Heading, Paragraph, Card, Table, Text } from '@/index';
import utilitiesSchema from '../Schema';

export const flex = () => {
  const data = [
    {
      className: 'flex-fill',
      properties: 'flex: 1 1 auto ;',
    },
    {
      className: 'flex-row',
      properties: 'flex-direction: row ;',
    },
    {
      className: 'flex-column',
      properties: 'flex-direction: column ;',
    },
    {
      className: 'flex-row-reverse',
      properties: 'flex-direction: row-reverse ;',
    },
    {
      className: 'flex-column-reverse',
      properties: 'flex-direction: column-reverse ;',
    },
    {
      className: 'flex-grow-0',
      properties: 'flex-grow: 0 ;',
    },
    {
      className: 'flex-grow-1',
      properties: 'flex-grow: 1 ;',
    },
    {
      className: 'flex-shrink-0',
      properties: 'flex-shrink: 0 ;',
    },
    {
      className: 'flex-shrink-1',
      properties: 'flex-shrink: 1 ;',
    },
    {
      className: 'flex-wrap',
      properties: 'flex-wrap: wrap ;',
    },
    {
      className: 'flex-nowrap',
      properties: 'flex-wrap: nowrap ;',
    },
    {
      className: 'flex-wrap-reverse',
      properties: 'flex-wrap: wrap-reverse ;',
    },
    {
      className: 'justify-content-start',
      properties: 'justify-content: flex-start ;',
    },
    {
      className: 'justify-content-end',
      properties: 'justify-content: flex-end ;',
    },
    {
      className: 'justify-content-center',
      properties: 'justify-content: center ;',
    },
    {
      className: 'justify-content-between',
      properties: 'justify-content: space-between ;',
    },
    {
      className: 'justify-content-around',
      properties: 'justify-content: space-around ;',
    },
    {
      className: 'justify-content-evenly',
      properties: 'justify-content: space-evenly ;',
    },
    {
      className: 'align-items-start',
      properties: 'align-items: flex-start ;',
    },
    {
      className: 'align-items-end',
      properties: 'align-items: flex-end ;',
    },
    {
      className: 'align-items-center',
      properties: 'align-items: center ;',
    },
    {
      className: 'align-items-baseline',
      properties: 'align-items: baseline ;',
    },
    {
      className: 'align-items-stretch',
      properties: 'align-items: stretch ;',
    },
    {
      className: 'align-content-start',
      properties: 'align-content: flex-start ;',
    },
    {
      className: 'align-content-end',
      properties: 'align-content: flex-end ;',
    },
    {
      className: 'align-content-center',
      properties: 'align-content: center ;',
    },
    {
      className: 'align-content-between',
      properties: 'align-content: space-between ;',
    },
    {
      className: 'align-content-around',
      properties: 'align-content: space-around ;',
    },
    {
      className: 'align-content-stretch',
      properties: 'align-content: stretch ;',
    },
    {
      className: 'align-self-auto',
      properties: 'align-self: auto ;',
    },
    {
      className: 'align-self-start',
      properties: 'align-self: flex-start ;',
    },
    {
      className: 'align-self-end',
      properties: 'align-self: flex-end ;',
    },
    {
      className: 'align-self-center',
      properties: 'align-self: center ;',
    },
    {
      className: 'align-self-baseline',
      properties: 'align-self: baseline ;',
    },
    {
      className: 'align-self-stretch',
      properties: 'align-self: stretch ;',
    },
    {
      className: 'order-first',
      properties: 'order: -1 ;',
    },
    {
      className: 'order-0',
      properties: 'order: 0 ;',
    },
    {
      className: 'order-1',
      properties: 'order: 1 ;',
    },
    {
      className: 'order-2',
      properties: 'order: 2 ;',
    },
    {
      className: 'order-3',
      properties: 'order: 3 ;',
    },
    {
      className: 'order-4',
      properties: 'order: 4 ;',
    },
    {
      className: 'order-5',
      properties: 'order: 5 ;',
    },
    {
      className: 'order-last',
      properties: 'order: 6 ;',
    },
  ];
  return (
    <div>
      <Heading size="xxl">Flex</Heading>
      <br />
      <Text weight="strong">
        Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full
        suite of responsive flexbox utilities.
      </Text>
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
      &nbsp;
      <Heading size="s">
        Use .flex-row to set a horizontal direction (the browser default), or .flex-row-reverse to start the horizontal
        direction from the opposite side.
      </Heading>
      &nbsp;
      <div className="d-flex flex-row Utilities-example h-25">
        <div className="p-2">Flex item 1</div>
        <div className="p-2">Flex item 2</div>
        <div className="p-2">Flex item 3</div>
      </div>
      &nbsp;
      <div className="d-flex flex-row-reverse Utilities-example h-25">
        <div className="p-2">Flex item 1</div>
        <div className="p-2">Flex item 2</div>
        <div className="p-2">Flex item 3</div>
      </div>
      &nbsp;
      <div className="DocPage-codeBlock pb-5 pt-5 pl-5">
        {'<div className="d-flex flex-row ">'}
        <br />
        &nbsp; {'<div className="p-2">Flex item 1</div>'}
        <br />
        &nbsp; {'<div className="p-2">Flex item 2</div>'}
        <br />
        &nbsp; {'<div className="p-2">Flex item 3</div>'}
        <br />
        {'</div>'}
        <br />
        {'<div className="d-flex flex-row-reverse">'}
        <br />
        &nbsp; {'<div className="p-2">Flex item 1</div>'}
        <br />
        &nbsp; {'<div className="p-2">Flex item 2</div>'}
        <br />
        &nbsp; {'<div className="p-2">Flex item 3</div>'}
        <br />
        {'</div>'}
      </div>
      &nbsp;
      <Heading size="s">
        Use .flex-column to set a vertical direction, or .flex-column-reverse to start the vertical direction from the
        opposite side.
      </Heading>
      &nbsp;
      <div className="d-flex flex-column Utilities-example">
        <div className="p-2">Flex item 1</div>
        <div className="p-2">Flex item 2</div>
        <div className="p-2">Flex item 3</div>
      </div>
      &nbsp;
      <div className="d-flex flex-column-reverse Utilities-example">
        <div className="p-2">Flex item 1</div>
        <div className="p-2">Flex item 2</div>
        <div className="p-2">Flex item 3</div>
      </div>
      &nbsp;
      <div className="DocPage-codeBlock pb-5 pt-5 pl-5">
        <code>
          {'<div className="d-flex flex-column">'}
          <br />
          &nbsp; {'<div className="p-2">Flex item 1</div>'}
          <br />
          &nbsp; {'<div className="p-2">Flex item 2</div>'}
          <br />
          &nbsp; {'<div className="p-2">Flex item 3</div>'}
          <br />
          {'</div>'}
          <br />
        </code>
        &nbsp;
        <code>
          {'<div className="d-flex flex-column-reverse">'}
          <br />
          &nbsp; {'<div className="p-2">Flex item 1</div>'}
          <br />
          &nbsp; {'<div className="p-2">Flex item 2</div>'}
          <br />
          &nbsp; {'<div className="p-2">Flex item 3</div>'}
          <br />
          {'</div>'}
          <br />
        </code>
      </div>
    </div>
  );
};

export default {
  title: 'Styling/Helper Classes/Flex',
  component: flex,
  parameters: {
    viewMode: 'story',
    docs: {
      page: null,
      docPage: null,
    },
  },
};
