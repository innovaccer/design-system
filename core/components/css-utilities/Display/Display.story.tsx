import * as React from 'react';
import { Heading, Card, Table, Text } from '@/index';
import utilitiesSchema from '../Schema';

export const display = () => {
  const data = [
    {
      className: 'd-none',
      properties: 'display: none;',
    },
    {
      className: 'd-inline',
      properties: 'display: inline;',
    },
    {
      className: 'd-inline-block',
      properties: 'display: inline-block;',
    },
    {
      className: 'd-block',
      properties: 'display: block;',
    },
    {
      className: 'd-table',
      properties: 'display: table;',
    },
    {
      className: 'd-table-row',
      properties: 'display: table-row;',
    },
    {
      className: 'd-table-cell',
      properties: 'display: table-cell;',
    },
    {
      className: 'd-flex',
      properties: 'display: flex;',
    },
    {
      className: 'd-inline-flex',
      properties: 'display: inline-flex;',
    },
    {
      className: 'd-grid',
      properties: 'display: grid;',
    },
    {
      className: 'd-inline-grid',
      properties: 'display: inline-grid;',
    },
  ];
  return (
    <div className="p-4">
      <Heading size="xxl">Display Utilities</Heading>
      <br />
      <Text appearance="default">
        Quickly and responsively toggle the display value of components and more with our display utilities.
      </Text>
      <div className="mt-8 mb-8">
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

      {/* Examples section */}
      <Heading size="m" className="mt-8">
        Examples
      </Heading>
      <Text appearance="default" className="mb-4">
        Here are examples of these display utilities in action:
      </Text>

      {/* d-inline example */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Inline Display
        </Heading>
        <Text appearance="subtle" className="mb-4">
          Elements flow inline and wrap as needed.
        </Text>
        <div className="mb-6 d-flex flex-wrap align-items-start">
          <Text appearance="default" className="d-inline bg-secondary-lightest border p-4 mr-2 mb-2 align-middle">
            d-inline
          </Text>
          <Text appearance="default" className="d-inline bg-secondary-lightest border p-4 mr-2 mb-2 align-middle">
            d-inline
          </Text>
          <Text appearance="default" className="d-inline bg-secondary-lightest border p-4 mr-2 mb-2 align-middle">
            d-inline
          </Text>
          <Text appearance="default" className="d-inline bg-secondary-lightest border p-4 mr-2 mb-2 align-middle">
            d-inline
          </Text>
          <Text appearance="default" className="d-inline bg-secondary-lightest border p-4 mr-2 mb-2 align-middle">
            d-inline
          </Text>
        </div>
        <Text appearance="subtle" className="mb-2 font-size-xs">
          Elements with d-inline display as inline elements, appearing side by side and taking up only as much width as
          necessary. They will wrap to new lines when they reach the container's edge.
        </Text>
        <div className="bg-secondary-lightest p-3 rounded-10 font-size-xs mb-8">
          <pre className="m-0">
            {[
              '<Text appearance="default" className="d-inline bg-secondary-lightest border p-4 mr-2 mb-2 align-middle">d-inline</Text>',
              '<Text appearance="default" className="d-inline bg-secondary-lightest border p-4 mr-2 mb-2 align-middle">d-inline</Text>',
            ].join('\n')}
          </pre>
        </div>
      </div>

      {/* d-block example */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Block Display
        </Heading>
        <Text appearance="subtle" className="mb-4">
          Blocks start on a new line and take full width.
        </Text>
        <div className="mb-6">
          <Text className="d-block bg-secondary-lightest border p-4 mb-2">d-block</Text>
          <Text className="d-block bg-secondary-lightest border p-4 mb-2">d-block</Text>
        </div>
        <Text appearance="subtle" className="mb-2 font-size-xs">
          Elements with d-block start on a new line and take up the full width available.
        </Text>
        <div className="bg-secondary-lightest p-3 rounded-10 font-size-xs mb-8">
          <pre className="m-0">
            {[
              '<Text className="d-block bg-secondary-lightest border p-4 mb-2">d-block</Text>',
              '<Text className="d-block bg-secondary-lightest border p-4 mb-2">d-block</Text>',
            ].join('\n')}
          </pre>
        </div>
      </div>

      {/* Flex display example */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Flex Display
        </Heading>
        <Text appearance="subtle" className="mb-4">
          Arrange children in a row by default.
        </Text>
        <div className="mb-6">
          <div className="d-flex bg-secondary-lightest border p-4 gap-3">
            <Text appearance="default" className="p-3 bg-secondary-lightest border">
              Flex item 1
            </Text>
            <Text appearance="default" className="p-3 bg-secondary-lightest border">
              Flex item 2
            </Text>
            <Text appearance="default" className="p-3 bg-secondary-lightest border">
              Flex item 3
            </Text>
          </div>
        </div>
        <Text appearance="subtle" className="mb-2 font-size-xs">
          Elements with d-flex become flex containers, with their children arranged in a row by default.
        </Text>
        <div className="bg-secondary-lightest p-3 rounded-10 font-size-xs mb-8">
          <pre className="m-0">
            {[
              '<div className="d-flex bg-secondary-lightest border p-4 gap-3">',
              '  <Text appearance="default" className="p-3 bg-secondary-lightest border">Flex item 1</Text>',
              '  <Text appearance="default" className="p-3 bg-secondary-lightest border">Flex item 2</Text>',
              '  <Text appearance="default" className="p-3 bg-secondary-lightest border">Flex item 3</Text>',
              '</div>',
            ].join('\n')}
          </pre>
        </div>
      </div>

      {/* d-inline-block example */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Inline Block Display
        </Heading>
        <Text appearance="subtle" className="mb-4">
          Flow inline but accept width and height.
        </Text>
        <div className="mb-6 d-flex flex-wrap align-items-start">
          <div className="d-inline-block bg-secondary-lightest border p-3 mr-2 mb-2 w-50 h-25 align-top">
            d-inline-block
            <br />
            w-50 class
            <br />
            h-25 class
          </div>
          <div className="d-inline-block bg-secondary-lightest border p-3 mr-2 mb-2 w-25 h-50 align-top">
            d-inline-block
            <br />
            w-25 class
            <br />
            h-50 class
          </div>
        </div>
        <Text appearance="subtle" className="mb-2 font-size-xs">
          Elements with d-inline-block flow like inline elements but can have width and height like block elements.
        </Text>
        <div className="bg-secondary-lightest p-3 rounded-10 font-size-xs mb-8">
          <pre className="m-0">
            {[
              '<div className="d-inline-block bg-secondary-lightest border p-3 mr-2 mb-2 w-25 h-50 align-top">',
              '  d-inline-block',
              '  <br />',
              '  w-25 class',
              '  <br />',
              '  h-50 class',
              '</div>',
            ].join('\n')}
          </pre>
        </div>
      </div>

      {/* d-grid example */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Grid Display
        </Heading>
        <Text appearance="subtle" className="mb-4">
          Two-dimensional layout for children.
        </Text>
        <div className="mb-6">
          <div className="d-grid bg-secondary-lightest border p-4 gap-3">
            <Text appearance="default" className="p-3 bg-secondary-lightest border">
              Grid item 1
            </Text>
            <Text appearance="default" className="p-3 bg-secondary-lightest border">
              Grid item 2
            </Text>
            <Text appearance="default" className="p-3 bg-secondary-lightest border">
              Grid item 3
            </Text>
            <Text appearance="default" className="p-3 bg-secondary-lightest border">
              Grid item 4
            </Text>
            <Text appearance="default" className="p-3 bg-secondary-lightest border">
              Grid item 5
            </Text>
            <Text appearance="default" className="p-3 bg-secondary-lightest border">
              Grid item 6
            </Text>
          </div>
        </div>
        <Text appearance="subtle" className="mb-2 font-size-xs">
          Elements with d-grid become grid containers, allowing for two-dimensional layouts.
        </Text>
        <div className="bg-secondary-lightest p-3 rounded-10 font-size-xs mb-8">
          <pre className="m-0">
            {[
              '<div className="d-grid bg-secondary-lightest border p-4 gap-3">',
              '  <Text appearance="default" className="p-3 bg-secondary-lightest border">Grid item 1</Text>',
              '  <Text appearance="default" className="p-3 bg-secondary-lightest border">Grid item 2</Text>',
              '  <Text appearance="default" className="p-3 bg-secondary-lightest border">Grid item 3</Text>',
              '  <Text appearance="default" className="p-3 bg-secondary-lightest border">Grid item 4</Text>',
              '  <Text appearance="default" className="p-3 bg-secondary-lightest border">Grid item 5</Text>',
              '  <Text appearance="default" className="p-3 bg-secondary-lightest border">Grid item 6</Text>',
              '</div>',
            ].join('\n')}
          </pre>
        </div>
      </div>

      {/* Table display example */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Table Display
        </Heading>
        <Text appearance="subtle" className="mb-4">
          Table-like layout using display utilities.
        </Text>
        <div className="mb-6">
          <div className="d-table w-100 bg-secondary-lightest border">
            <div className="d-table-row">
              <Text appearance="default" className="d-table-cell w-33 p-3 bg-secondary-lightest border">
                Table cell 1
              </Text>
              <Text appearance="default" className="d-table-cell w-33 p-3 bg-secondary-lightest border">
                Table cell 2
              </Text>
              <Text appearance="default" className="d-table-cell w-33 p-3 bg-secondary-lightest border">
                Table cell 3
              </Text>
            </div>
            <div className="d-table-row">
              <Text appearance="default" className="d-table-cell p-3 bg-secondary-lightest border">
                Table cell 4
              </Text>
              <Text appearance="default" className="d-table-cell p-3 bg-secondary-lightest border">
                Table cell 5
              </Text>
              <Text appearance="default" className="d-table-cell p-3 bg-secondary-lightest border">
                Table cell 6
              </Text>
            </div>
          </div>
        </div>
        <Text appearance="subtle" className="mb-2 font-size-xs">
          Elements with d-table, d-table-row, and d-table-cell create table-like layouts without using actual table
          elements.
        </Text>
        <div className="bg-secondary-lightest p-3 rounded-10 font-size-xs mb-8">
          <pre className="m-0">
            {[
              '<div className="d-table w-100 bg-secondary-lightest border">',
              '  <div className="d-table-row">',
              '    <Text appearance="default" className="d-table-cell w-33 p-3 bg-secondary-lightest border">Table cell 1</Text>',
              '    <Text appearance="default" className="d-table-cell w-33 p-3 bg-secondary-lightest border">Table cell 2</Text>',
              '    <Text appearance="default" className="d-table-cell w-33 p-3 bg-secondary-lightest border">Table cell 3</Text>',
              '  </div>',
              '  <div className="d-table-row">',
              '    <Text appearance="default" className="d-table-cell p-3 bg-secondary-lightest border">Table cell 4</Text>',
              '    <Text appearance="default" className="d-table-cell p-3 bg-secondary-lightest border">Table cell 5</Text>',
              '    <Text appearance="default" className="d-table-cell p-3 bg-secondary-lightest border">Table cell 6</Text>',
              '  </div>',
              '</div>',
            ].join('\n')}
          </pre>
        </div>
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
