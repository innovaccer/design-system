import * as React from 'react';
import { Heading, Card, Table, Text } from '@/index';
import utilitiesSchema from '../Schema';

export const display = () => {
  // Basic display utilities
  const basicDisplayData = [
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
  ];

  // Flex display utilities
  const flexDisplayData = [
    {
      className: 'd-flex',
      properties: 'display: flex;',
    },
    {
      className: 'd-inline-flex',
      properties: 'display: inline-flex;',
    },
  ];

  // Grid display utilities
  const gridDisplayData = [
    {
      className: 'd-grid',
      properties: 'display: grid;',
    },
    {
      className: 'd-inline-grid',
      properties: 'display: inline-grid;',
    },
  ];

  // Table display utilities
  const tableDisplayData = [
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
  ];

  return (
    <div className="p-4">
      <Heading size="xxl">Display Utilities</Heading>
      <br />
      <Text weight="strong">
        Quickly and responsively toggle the display value of components and more with our display utilities.
      </Text>

      {/* Basic Display */}
      <Heading size="m" className="mt-8">
        Basic Display
      </Heading>
      <Text weight="strong">Control the fundamental display behavior of elements.</Text>
      <div className="mt-8 mb-8">
        <Card className="h-100">
          <Table
            data={basicDisplayData}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size={'standard'}
            showMenu={false}
          />
        </Card>
      </div>

      {/* Flex Display */}
      <Heading size="m" className="mt-8">
        Flex Display
      </Heading>
      <Text weight="strong">Create flex containers for flexible layouts.</Text>
      <div className="mt-8 mb-8">
        <Card className="h-100">
          <Table
            data={flexDisplayData}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size={'standard'}
            showMenu={false}
          />
        </Card>
      </div>

      {/* Grid Display */}
      <Heading size="m" className="mt-8">
        Grid Display
      </Heading>
      <Text weight="strong">Create grid containers for two-dimensional layouts.</Text>
      <div className="mt-8 mb-8">
        <Card className="h-100">
          <Table
            data={gridDisplayData}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size={'standard'}
            showMenu={false}
          />
        </Card>
      </div>

      {/* Table Display */}
      <Heading size="m" className="mt-8">
        Table Display
      </Heading>
      <Text weight="strong">Create table-like layouts without using actual table elements.</Text>
      <div className="mt-8 mb-8">
        <Card className="h-100">
          <Table
            data={tableDisplayData}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size={'standard'}
            showMenu={false}
          />
        </Card>
      </div>

      {/* Examples Section */}
      <Heading size="m" className="mt-8">
        Examples
      </Heading>
      <Text weight="strong" className="mb-4">
        Here are examples of these display utilities in action:
      </Text>

      {/* None Display */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          None Display
        </Heading>
        <Text appearance="subtle" className="mb-4">
          Hide elements completely from the layout.
        </Text>
        <div className="mb-6">
          <div className="bg-secondary-lightest border p-4">
            <div className="d-inline-block bg-white border p-3 mr-2">Visible item</div>
            <div className="d-none bg-white border p-3 mr-2">
              <Text appearance="default">Hidden item (d-none)</Text>
            </div>
            <div className="d-inline-block bg-white border p-3">Visible item</div>
          </div>
        </div>
        <div className="mb-8 bg-secondary-lightest p-3 rounded-10">
          <pre className="m-0">
            <code>
              {`<div className="d-none bg-white border p-3">
  Hidden content
</div>`}
            </code>
          </pre>
        </div>
        <Text appearance="subtle" className="mb-2">
          Elements with d-none are completely removed from the document flow and not visible.
        </Text>
      </div>

      {/* Inline Display */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Inline Display
        </Heading>
        <Text appearance="subtle" className="mb-4">
          Elements flow inline and wrap as needed.
        </Text>
        <div className="mb-6">
          <div className="bg-secondary-lightest border p-4">
            <div className="d-inline bg-white border p-4 mr-2 mb-2">
              <Text appearance="default">d-inline</Text>
            </div>
            <div className="d-inline bg-white border p-4 mr-2 mb-2">
              <Text appearance="default">d-inline</Text>
            </div>
            <div className="d-inline bg-white border p-4 mr-2 mb-2">
              <Text appearance="default">d-inline</Text>
            </div>
            <div className="d-inline bg-white border p-4 mr-2 mb-2">
              <Text appearance="default">d-inline</Text>
            </div>
            <div className="d-inline bg-white border p-4 mb-2">
              <Text appearance="default">d-inline</Text>
            </div>
          </div>
        </div>
        <div className="mb-8 bg-secondary-lightest p-3 rounded-10">
          <pre className="m-0">
            <code>
              {`<div className="d-inline bg-white border p-4 mr-2 mb-2">
  <Text appearance="default">d-inline</Text>
</div>
<div className="d-inline bg-white border p-4 mr-2 mb-2">
  <Text appearance="default">d-inline</Text>
</div>`}
            </code>
          </pre>
        </div>
        <Text appearance="subtle" className="mb-2">
          Elements with d-inline display as inline elements, appearing side by side and taking up only as much width as
          necessary. They will wrap to new lines when they reach the container's edge.
        </Text>
      </div>

      {/* Block Display */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Block Display
        </Heading>
        <Text appearance="subtle" className="mb-4">
          Blocks start on a new line and take full width.
        </Text>
        <div className="mb-6">
          <div className="bg-secondary-lightest border p-4">
            <div className="d-block bg-white border p-4 mb-2">
              <Text appearance="default">d-block</Text>
            </div>
            <div className="d-block bg-white border p-4">
              <Text appearance="default">d-block</Text>
            </div>
          </div>
        </div>
        <div className="mb-8 bg-secondary-lightest p-3 rounded-10">
          <pre className="m-0">
            <code>
              {`<div className="d-block bg-white border p-4">
  <Text appearance="default">d-block</Text>
</div>
<div className="d-block bg-white border p-4">
  <Text appearance="default">d-block</Text>
</div>`}
            </code>
          </pre>
        </div>
        <Text appearance="subtle" className="mb-2">
          Elements with d-block start on a new line and take up the full width available.
        </Text>
      </div>

      {/* Inline Block Display */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Inline Block Display
        </Heading>
        <Text appearance="subtle" className="mb-4">
          Flow inline but accept width and height.
        </Text>
        <div className="mb-6">
          <div className="bg-secondary-lightest border p-4">
            <div className="d-inline-block bg-white border p-3 mr-2 mb-2 w-50 h-25">
              <Text appearance="default">d-inline-block</Text>
              <br />
              <Text appearance="subtle" size="small">
                w-50 h-25
              </Text>
            </div>
            <div className="d-inline-block bg-white border p-3 mb-2 w-25 h-50">
              <Text appearance="default">d-inline-block</Text>
              <br />
              <Text appearance="subtle" size="small">
                w-25 h-50
              </Text>
            </div>
          </div>
        </div>
        <div className="mb-8 bg-secondary-lightest p-3 rounded-10">
          <pre className="m-0">
            <code>
              {`<div className="d-inline-block bg-white border p-3 mr-2 mb-2 w-50 h-25">
  <Text appearance="default">d-inline-block</Text>
  <br />
  <Text appearance="subtle" size="small">w-50 h-25</Text>
</div>
<div className="d-inline-block bg-white border p-3 mb-2 w-25 h-50">
  <Text appearance="default">d-inline-block</Text>
  <br />
  <Text appearance="subtle" size="small">w-25 h-50</Text>
</div>`}
            </code>
          </pre>
        </div>
        <Text appearance="subtle" className="mb-2">
          Elements with d-inline-block flow like inline elements but can have width and height like block elements.
        </Text>
      </div>

      {/* Flex Display Example */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Flex Display
        </Heading>
        <Text appearance="subtle" className="mb-4">
          Arrange children in a row by default.
        </Text>
        <div className="mb-6">
          <div className="d-flex bg-secondary-lightest border p-4 gap-10">
            <div className="p-3 bg-white border">
              <Text appearance="default">Flex item 1</Text>
            </div>
            <div className="p-3 bg-white border">
              <Text appearance="default">Flex item 2</Text>
            </div>
            <div className="p-3 bg-white border">
              <Text appearance="default">Flex item 3</Text>
            </div>
          </div>
        </div>
        <div className="mb-8 bg-secondary-lightest p-3 rounded-10">
          <pre className="m-0">
            <code>
              {`<div className="d-flex bg-secondary-lightest border p-4 gap-10">
  <div className="p-3 bg-white border">
    <Text appearance="default">Flex item 1</Text>
  </div>
  <div className="p-3 bg-white border">
    <Text appearance="default">Flex item 2</Text>
  </div>
  <div className="p-3 bg-white border">
    <Text appearance="default">Flex item 3</Text>
  </div>
</div>`}
            </code>
          </pre>
        </div>
        <Text appearance="subtle" className="mb-2">
          Elements with d-flex become flex containers, with their children arranged in a row by default.
        </Text>
      </div>

      {/* Inline Flex Display */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Inline Flex Display
        </Heading>
        <Text appearance="subtle" className="mb-4">
          Flex container that flows inline.
        </Text>
        <div className="mb-6">
          <div className="bg-secondary-lightest border p-4">
            <div className="d-inline-flex bg-white border p-4 gap-10 mr-2">
              <div className="p-2 bg-secondary-lightest border">
                <Text appearance="default">Item 1</Text>
              </div>
              <div className="p-2 bg-secondary-lightest border">
                <Text appearance="default">Item 2</Text>
              </div>
            </div>
            <div className="d-inline-flex bg-white border p-4 gap-10">
              <div className="p-2 bg-secondary-lightest border">
                <Text appearance="default">Item 3</Text>
              </div>
              <div className="p-2 bg-secondary-lightest border">
                <Text appearance="default">Item 4</Text>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-8 bg-secondary-lightest p-3 rounded-10">
          <pre className="m-0">
            <code>
              {`<div className="d-inline-flex bg-white border p-4 gap-10">
  <div className="p-2 bg-secondary-lightest border">
    <Text appearance="default">Item 1</Text>
  </div>
  <div className="p-2 bg-secondary-lightest border">
    <Text appearance="default">Item 2</Text>
  </div>
</div>`}
            </code>
          </pre>
        </div>
        <Text appearance="subtle" className="mb-2">
          Elements with d-inline-flex create flex containers that flow inline, allowing multiple flex containers on the
          same line.
        </Text>
      </div>

      {/* Grid Display Example */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Grid Display
        </Heading>
        <Text appearance="subtle" className="mb-4">
          Two-dimensional layout for children.
        </Text>
        <div className="mb-6">
          <div className="d-grid bg-secondary-lightest border p-4 gap-10">
            <div className="p-3 bg-white border">
              <Text appearance="default">Grid item 1</Text>
            </div>
            <div className="p-3 bg-white border">
              <Text appearance="default">Grid item 2</Text>
            </div>
            <div className="p-3 bg-white border">
              <Text appearance="default">Grid item 3</Text>
            </div>
            <div className="p-3 bg-white border">
              <Text appearance="default">Grid item 4</Text>
            </div>
            <div className="p-3 bg-white border">
              <Text appearance="default">Grid item 5</Text>
            </div>
            <div className="p-3 bg-white border">
              <Text appearance="default">Grid item 6</Text>
            </div>
          </div>
        </div>
        <div className="mb-8 bg-secondary-lightest p-3 rounded-10">
          <pre className="m-0">
            <code>
              {`<div className="d-grid bg-secondary-lightest border p-4 gap-10">
  <div className="p-3 bg-white border">
    <Text appearance="default">Grid item 1</Text>
  </div>
  <div className="p-3 bg-white border">
    <Text appearance="default">Grid item 2</Text>
  </div>
  <div className="p-3 bg-white border">
    <Text appearance="default">Grid item 3</Text>
  </div>
</div>`}
            </code>
          </pre>
        </div>
        <Text appearance="subtle" className="mb-2">
          Elements with d-grid become grid containers, allowing for two-dimensional layouts.
        </Text>
      </div>

      {/* Inline Grid Display */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Inline Grid Display
        </Heading>
        <Text appearance="subtle" className="mb-4">
          Grid container that flows inline.
        </Text>
        <div className="mb-6">
          <div className="bg-secondary-lightest border p-4">
            <div className="d-inline-grid bg-white border p-4 gap-10 mr-2">
              <div className="p-2 bg-secondary-lightest border">
                <Text appearance="default">Item 1</Text>
              </div>
              <div className="p-2 bg-secondary-lightest border">
                <Text appearance="default">Item 2</Text>
              </div>
            </div>
            <div className="d-inline-grid bg-white border p-4 gap-10">
              <div className="p-2 bg-secondary-lightest border">
                <Text appearance="default">Item 3</Text>
              </div>
              <div className="p-2 bg-secondary-lightest border">
                <Text appearance="default">Item 4</Text>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-8 bg-secondary-lightest p-3 rounded-10">
          <pre className="m-0">
            <code>
              {`<div className="d-inline-grid bg-white border p-4 gap-10">
  <div className="p-2 bg-secondary-lightest border">
    <Text appearance="default">Item 1</Text>
  </div>
  <div className="p-2 bg-secondary-lightest border">
    <Text appearance="default">Item 2</Text>
  </div>
</div>`}
            </code>
          </pre>
        </div>
        <Text appearance="subtle" className="mb-2">
          Elements with d-inline-grid create grid containers that flow inline, allowing multiple grid containers on the
          same line.
        </Text>
      </div>

      {/* Table Display Example */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Table Display
        </Heading>
        <Text appearance="subtle" className="mb-4">
          Table-like layout using display utilities.
        </Text>
        <div className="mb-6">
          <div className="bg-secondary-lightest border p-4">
            <div className="d-table w-100 bg-white border">
              <div className="d-table-row">
                <div className="d-table-cell p-3 bg-secondary-lightest border">
                  <Text appearance="default">Table cell 1</Text>
                </div>
                <div className="d-table-cell p-3 bg-secondary-lightest border">
                  <Text appearance="default">Table cell 2</Text>
                </div>
                <div className="d-table-cell p-3 bg-secondary-lightest border">
                  <Text appearance="default">Table cell 3</Text>
                </div>
              </div>
              <div className="d-table-row">
                <div className="d-table-cell p-3 bg-secondary-lightest border">
                  <Text appearance="default">Table cell 4</Text>
                </div>
                <div className="d-table-cell p-3 bg-secondary-lightest border">
                  <Text appearance="default">Table cell 5</Text>
                </div>
                <div className="d-table-cell p-3 bg-secondary-lightest border">
                  <Text appearance="default">Table cell 6</Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-8 bg-secondary-lightest p-3 rounded-10">
          <pre className="m-0">
            <code>
              {`<div className="d-table w-100 bg-white border">
  <div className="d-table-row">
    <div className="d-table-cell p-3 bg-secondary-lightest border">
      <Text appearance="default">Table cell 1</Text>
    </div>
    <div className="d-table-cell p-3 bg-secondary-lightest border">
      <Text appearance="default">Table cell 2</Text>
    </div>
    <div className="d-table-cell p-3 bg-secondary-lightest border">
      <Text appearance="default">Table cell 3</Text>
    </div>
  </div>
  <div className="d-table-row">
    <div className="d-table-cell p-3 bg-secondary-lightest border">
      <Text appearance="default">Table cell 4</Text>
    </div>
    <div className="d-table-cell p-3 bg-secondary-lightest border">
      <Text appearance="default">Table cell 5</Text>
    </div>
    <div className="d-table-cell p-3 bg-secondary-lightest border">
      <Text appearance="default">Table cell 6</Text>
    </div>
  </div>
</div>`}
            </code>
          </pre>
        </div>
        <Text appearance="subtle" className="mb-2">
          Elements with d-table, d-table-row, and d-table-cell create table-like layouts without using actual table
          elements.
        </Text>
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
