import * as React from 'react';
import { Heading, Card, Table, Text } from '@/index';
import utilitiesSchema from '../Schema';

export const flex = () => {
  // Flex direction and wrap utilities
  const flexData = [
    {
      className: 'flex-fill',
      properties: 'flex: 1 1 auto;',
    },
    {
      className: 'flex-row',
      properties: 'flex-direction: row;',
    },
    {
      className: 'flex-column',
      properties: 'flex-direction: column;',
    },
    {
      className: 'flex-row-reverse',
      properties: 'flex-direction: row-reverse;',
    },
    {
      className: 'flex-column-reverse',
      properties: 'flex-direction: column-reverse;',
    },
    {
      className: 'flex-grow-0',
      properties: 'flex-grow: 0;',
    },
    {
      className: 'flex-grow-1',
      properties: 'flex-grow: 1;',
    },
    {
      className: 'flex-shrink-0',
      properties: 'flex-shrink: 0;',
    },
    {
      className: 'flex-shrink-1',
      properties: 'flex-shrink: 1;',
    },
    {
      className: 'flex-wrap',
      properties: 'flex-wrap: wrap;',
    },
    {
      className: 'flex-nowrap',
      properties: 'flex-wrap: nowrap;',
    },
    {
      className: 'flex-wrap-reverse',
      properties: 'flex-wrap: wrap-reverse;',
    },
  ];

  // Justify content utilities
  const justifyContentData = [
    {
      className: 'justify-content-start',
      properties: 'justify-content: flex-start;',
    },
    {
      className: 'justify-content-end',
      properties: 'justify-content: flex-end;',
    },
    {
      className: 'justify-content-center',
      properties: 'justify-content: center;',
    },
    {
      className: 'justify-content-between',
      properties: 'justify-content: space-between;',
    },
    {
      className: 'justify-content-around',
      properties: 'justify-content: space-around;',
    },
    {
      className: 'justify-content-evenly',
      properties: 'justify-content: space-evenly;',
    },
  ];

  // Align items utilities
  const alignItemsData = [
    {
      className: 'align-items-start',
      properties: 'align-items: flex-start;',
    },
    {
      className: 'align-items-end',
      properties: 'align-items: flex-end;',
    },
    {
      className: 'align-items-center',
      properties: 'align-items: center;',
    },
    {
      className: 'align-items-baseline',
      properties: 'align-items: baseline;',
    },
    {
      className: 'align-items-stretch',
      properties: 'align-items: stretch;',
    },
  ];

  // Align content utilities
  const alignContentData = [
    {
      className: 'align-content-start',
      properties: 'align-content: flex-start;',
    },
    {
      className: 'align-content-end',
      properties: 'align-content: flex-end;',
    },
    {
      className: 'align-content-center',
      properties: 'align-content: center;',
    },
    {
      className: 'align-content-between',
      properties: 'align-content: space-between;',
    },
    {
      className: 'align-content-around',
      properties: 'align-content: space-around;',
    },
    {
      className: 'align-content-stretch',
      properties: 'align-content: stretch;',
    },
  ];

  // Align self utilities
  const alignSelfData = [
    {
      className: 'align-self-auto',
      properties: 'align-self: auto;',
    },
    {
      className: 'align-self-start',
      properties: 'align-self: flex-start;',
    },
    {
      className: 'align-self-end',
      properties: 'align-self: flex-end;',
    },
    {
      className: 'align-self-center',
      properties: 'align-self: center;',
    },
    {
      className: 'align-self-baseline',
      properties: 'align-self: baseline;',
    },
    {
      className: 'align-self-stretch',
      properties: 'align-self: stretch;',
    },
  ];

  // Order utilities
  const orderData = [
    {
      className: 'order-first',
      properties: 'order: -1;',
    },
    {
      className: 'order-0',
      properties: 'order: 0;',
    },
    {
      className: 'order-1',
      properties: 'order: 1;',
    },
    {
      className: 'order-2',
      properties: 'order: 2;',
    },
    {
      className: 'order-3',
      properties: 'order: 3;',
    },
    {
      className: 'order-4',
      properties: 'order: 4;',
    },
    {
      className: 'order-5',
      properties: 'order: 5;',
    },
    {
      className: 'order-last',
      properties: 'order: 6;',
    },
  ];

  // Gap utilities
  const gapData = [
    {
      className: 'gap-0',
      properties: 'gap: 0;',
    },
    {
      className: 'gap-2-5',
      properties: 'gap: var(--spacing-2-5); /* 1px */',
    },
    {
      className: 'gap-05',
      properties: 'gap: var(--spacing-05); /* 2px */',
    },
    {
      className: 'gap-10',
      properties: 'gap: var(--spacing-10); /* 4px */',
    },
    {
      className: 'gap-15',
      properties: 'gap: var(--spacing-15); /* 6px */',
    },
    {
      className: 'gap-20',
      properties: 'gap: var(--spacing-20); /* 8px */',
    },
    {
      className: 'gap-30',
      properties: 'gap: var(--spacing-30); /* 12px */',
    },
  ];

  // Row gap utilities
  const rowGapData = [
    {
      className: 'row-gap-0',
      properties: 'row-gap: 0;',
    },
    {
      className: 'row-gap-2-5',
      properties: 'row-gap: var(--spacing-2-5); /* 1px */',
    },
    {
      className: 'row-gap-05',
      properties: 'row-gap: var(--spacing-05); /* 2px */',
    },
    {
      className: 'row-gap-10',
      properties: 'row-gap: var(--spacing-10); /* 4px */',
    },
    {
      className: 'row-gap-15',
      properties: 'row-gap: var(--spacing-15); /* 6px */',
    },
    {
      className: 'row-gap-20',
      properties: 'row-gap: var(--spacing-20); /* 8px */',
    },
    {
      className: 'row-gap-30',
      properties: 'row-gap: var(--spacing-30); /* 12px */',
    },
  ];

  // Column gap utilities
  const columnGapData = [
    {
      className: 'column-gap-0',
      properties: 'column-gap: 0;',
    },
    {
      className: 'column-gap-2-5',
      properties: 'column-gap: var(--spacing-2-5); /* 1px */',
    },
    {
      className: 'column-gap-05',
      properties: 'column-gap: var(--spacing-05); /* 2px */',
    },
    {
      className: 'column-gap-10',
      properties: 'column-gap: var(--spacing-10); /* 4px */',
    },
    {
      className: 'column-gap-15',
      properties: 'column-gap: var(--spacing-15); /* 6px */',
    },
    {
      className: 'column-gap-20',
      properties: 'column-gap: var(--spacing-20); /* 8px */',
    },
    {
      className: 'column-gap-30',
      properties: 'column-gap: var(--spacing-30); /* 12px */',
    },
  ];

  // Justify items utilities
  const justifyItemsData = [
    {
      className: 'justify-items-start',
      properties: 'justify-items: start;',
    },
    {
      className: 'justify-items-end',
      properties: 'justify-items: end;',
    },
    {
      className: 'justify-items-center',
      properties: 'justify-items: center;',
    },
    {
      className: 'justify-items-stretch',
      properties: 'justify-items: stretch;',
    },
  ];

  // Justify self utilities
  const justifySelfData = [
    {
      className: 'justify-self-auto',
      properties: 'justify-self: auto;',
    },
    {
      className: 'justify-self-start',
      properties: 'justify-self: start;',
    },
    {
      className: 'justify-self-end',
      properties: 'justify-self: end;',
    },
    {
      className: 'justify-self-center',
      properties: 'justify-self: center;',
    },
    {
      className: 'justify-self-stretch',
      properties: 'justify-self: stretch;',
    },
  ];

  // Place content utilities
  const placeContentData = [
    {
      className: 'place-content-center',
      properties: 'place-content: center;',
    },
    {
      className: 'place-content-start',
      properties: 'place-content: start;',
    },
    {
      className: 'place-content-end',
      properties: 'place-content: end;',
    },
    {
      className: 'place-content-between',
      properties: 'place-content: space-between;',
    },
    {
      className: 'place-content-around',
      properties: 'place-content: space-around;',
    },
    {
      className: 'place-content-evenly',
      properties: 'place-content: space-evenly;',
    },
    {
      className: 'place-content-stretch',
      properties: 'place-content: stretch;',
    },
  ];

  // Place items utilities
  const placeItemsData = [
    {
      className: 'place-items-start',
      properties: 'place-items: start;',
    },
    {
      className: 'place-items-end',
      properties: 'place-items: end;',
    },
    {
      className: 'place-items-center',
      properties: 'place-items: center;',
    },
    {
      className: 'place-items-stretch',
      properties: 'place-items: stretch;',
    },
  ];

  // Place self utilities
  const placeSelfData = [
    {
      className: 'place-self-auto',
      properties: 'place-self: auto;',
    },
    {
      className: 'place-self-start',
      properties: 'place-self: start;',
    },
    {
      className: 'place-self-end',
      properties: 'place-self: end;',
    },
    {
      className: 'place-self-center',
      properties: 'place-self: center;',
    },
    {
      className: 'place-self-stretch',
      properties: 'place-self: stretch;',
    },
  ];

  return (
    <div className="p-4">
      <Heading size="xxl">Flex Utilities</Heading>
      <br />
      <Text weight="strong">
        Quickly manage the layout, alignment, and sizing of flex containers and items with a full suite of responsive
        flexbox utilities.
      </Text>

      {/* Flex Direction and Wrap */}
      <Heading size="m" className="mt-8">
        Flex Direction and Wrap
      </Heading>
      <Text weight="strong">Control the direction and wrapping behavior of flex containers.</Text>
      <div className="mt-8 mb-8">
        <Card className="h-100">
          <Table
            data={flexData}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size={'standard'}
            showMenu={false}
            withPagination={true}
            pageSize={10}
          />
        </Card>
      </div>

      {/* Justify Content */}
      <Heading size="m" className="mt-8">
        Justify Content
      </Heading>
      <Text weight="strong">Control how flex items are distributed along the main axis.</Text>
      <div className="mt-8 mb-8">
        <Card className="h-100">
          <Table
            data={justifyContentData}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size={'standard'}
            showMenu={false}
            withPagination={true}
            pageSize={10}
          />
        </Card>
      </div>

      {/* Align Items */}
      <Heading size="m" className="mt-8">
        Align Items
      </Heading>
      <Text weight="strong">Control how flex items are aligned along the cross axis.</Text>
      <div className="mt-8 mb-8">
        <Card className="h-100">
          <Table
            data={alignItemsData}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size={'standard'}
            showMenu={false}
            withPagination={true}
            pageSize={10}
          />
        </Card>
      </div>

      {/* Align Content */}
      <Heading size="m" className="mt-8">
        Align Content
      </Heading>
      <Text weight="strong">
        Control how flex lines are distributed along the cross axis when there is extra space.
      </Text>
      <div className="mt-8 mb-8">
        <Card className="h-100">
          <Table
            data={alignContentData}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size={'standard'}
            showMenu={false}
            withPagination={true}
            pageSize={10}
          />
        </Card>
      </div>

      {/* Align Self */}
      <Heading size="m" className="mt-8">
        Align Self
      </Heading>
      <Text weight="strong">Control how individual flex items are aligned along the cross axis.</Text>
      <div className="mt-8 mb-8">
        <Card className="h-100">
          <Table
            data={alignSelfData}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size={'standard'}
            showMenu={false}
            withPagination={true}
            pageSize={10}
          />
        </Card>
      </div>

      {/* Order */}
      <Heading size="m" className="mt-8">
        Order
      </Heading>
      <Text weight="strong">Control the order of flex items.</Text>
      <div className="mt-8 mb-8">
        <Card className="h-100">
          <Table
            data={orderData}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size={'standard'}
            showMenu={false}
            withPagination={true}
            pageSize={10}
          />
        </Card>
      </div>

      {/* Gap */}
      <Heading size="m" className="mt-8">
        Gap
      </Heading>
      <Text weight="strong">Control spacing between flex items.</Text>
      <div className="mt-8 mb-8">
        <Card className="h-100">
          <Table
            data={gapData}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size={'standard'}
            showMenu={false}
            withPagination={true}
            pageSize={10}
          />
        </Card>
      </div>

      {/* Row Gap */}
      <Heading size="m" className="mt-8">
        Row Gap
      </Heading>
      <Text weight="strong">Control spacing between rows in flex containers.</Text>
      <div className="mt-8 mb-8">
        <Card className="h-100">
          <Table
            data={rowGapData}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size={'standard'}
            showMenu={false}
            withPagination={true}
            pageSize={10}
          />
        </Card>
      </div>

      {/* Column Gap */}
      <Heading size="m" className="mt-8">
        Column Gap
      </Heading>
      <Text weight="strong">Control spacing between columns in flex containers.</Text>
      <div className="mt-8 mb-8">
        <Card className="h-100">
          <Table
            data={columnGapData}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size={'standard'}
            showMenu={false}
            withPagination={true}
            pageSize={10}
          />
        </Card>
      </div>

      {/* Justify Items */}
      <Heading size="m" className="mt-8">
        Justify Items
      </Heading>
      <Text weight="strong">Control how grid items are aligned along their inline axis.</Text>
      <div className="mt-8 mb-8">
        <Card className="h-100">
          <Table
            data={justifyItemsData}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size={'standard'}
            showMenu={false}
            withPagination={true}
            pageSize={10}
          />
        </Card>
      </div>

      {/* Justify Self */}
      <Heading size="m" className="mt-8">
        Justify Self
      </Heading>
      <Text weight="strong">Control how individual grid items are aligned along their inline axis.</Text>
      <div className="mt-8 mb-8">
        <Card className="h-100">
          <Table
            data={justifySelfData}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size={'standard'}
            showMenu={false}
            withPagination={true}
            pageSize={10}
          />
        </Card>
      </div>

      {/* Place Content */}
      <Heading size="m" className="mt-8">
        Place Content
      </Heading>
      <Text weight="strong">Shorthand for both align-content and justify-content.</Text>
      <div className="mt-8 mb-8">
        <Card className="h-100">
          <Table
            data={placeContentData}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size={'standard'}
            showMenu={false}
            withPagination={true}
            pageSize={10}
          />
        </Card>
      </div>

      {/* Place Items */}
      <Heading size="m" className="mt-8">
        Place Items
      </Heading>
      <Text weight="strong">Shorthand for both align-items and justify-items.</Text>
      <div className="mt-8 mb-8">
        <Card className="h-100">
          <Table
            data={placeItemsData}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size={'standard'}
            showMenu={false}
            withPagination={true}
            pageSize={10}
          />
        </Card>
      </div>

      {/* Place Self */}
      <Heading size="m" className="mt-8">
        Place Self
      </Heading>
      <Text weight="strong">Shorthand for both align-self and justify-self.</Text>
      <div className="mt-8 mb-8">
        <Card className="h-100">
          <Table
            data={placeSelfData}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size={'standard'}
            showMenu={false}
            withPagination={true}
            pageSize={10}
          />
        </Card>
      </div>

      {/* Examples Section */}
      <Heading size="m" className="mt-8">
        Examples
      </Heading>
      <Text weight="strong" className="mb-4">
        Here are examples of these flex utilities in action:
      </Text>

      {/* Direction Examples */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Flex Direction
        </Heading>
        <Text appearance="subtle" className="mb-4">
          Control the direction of flex items.
        </Text>
        <div className="mb-6">
          <div className="d-flex flex-row bg-secondary-lightest border p-4 gap-10 mb-4">
            <div className="p-3 bg-white border">
              <Text appearance="default">Item 1</Text>
            </div>
            <div className="p-3 bg-white border">
              <Text appearance="default">Item 2</Text>
            </div>
            <div className="p-3 bg-white border">
              <Text appearance="default">Item 3</Text>
            </div>
          </div>
          <div className="d-flex flex-row-reverse bg-secondary-lightest border p-4 gap-10 mb-4">
            <div className="p-3 bg-white border">
              <Text appearance="default">Item 1</Text>
            </div>
            <div className="p-3 bg-white border">
              <Text appearance="default">Item 2</Text>
            </div>
            <div className="p-3 bg-white border">
              <Text appearance="default">Item 3</Text>
            </div>
          </div>
          <div className="d-flex flex-column bg-secondary-lightest border p-4 gap-10">
            <div className="p-3 bg-white border">
              <Text appearance="default">Item 1</Text>
            </div>
            <div className="p-3 bg-white border">
              <Text appearance="default">Item 2</Text>
            </div>
            <div className="p-3 bg-white border">
              <Text appearance="default">Item 3</Text>
            </div>
          </div>
        </div>
        <div className="mb-8 bg-secondary-lightest p-3 rounded-10">
          <pre className="m-0">
            <code>
              {`<div className="d-flex flex-row bg-secondary-lightest border p-4 gap-10">
  <div className="p-3 bg-white border">Item 1</div>
  <div className="p-3 bg-white border">Item 2</div>
  <div className="p-3 bg-white border">Item 3</div>
</div>
<div className="d-flex flex-row-reverse bg-secondary-lightest border p-4 gap-10">
  <div className="p-3 bg-white border">Item 1</div>
  <div className="p-3 bg-white border">Item 2</div>
  <div className="p-3 bg-white border">Item 3</div>
</div>
<div className="d-flex flex-column bg-secondary-lightest border p-4 gap-10">
  <div className="p-3 bg-white border">Item 1</div>
  <div className="p-3 bg-white border">Item 2</div>
  <div className="p-3 bg-white border">Item 3</div>
</div>`}
            </code>
          </pre>
        </div>
      </div>

      {/* Justify Content Examples */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Justify Content
        </Heading>
        <Text appearance="subtle" className="mb-4">
          Distribute items along the main axis.
        </Text>
        <div className="mb-6">
          <div className="d-flex justify-content-start bg-secondary-lightest border p-4 gap-10 mb-4">
            <div className="p-3 bg-white border">
              <Text appearance="default">Start</Text>
            </div>
            <div className="p-3 bg-white border">
              <Text appearance="default">Start</Text>
            </div>
          </div>
          <div className="d-flex justify-content-center bg-secondary-lightest border p-4 gap-10 mb-4">
            <div className="p-3 bg-white border">
              <Text appearance="default">Center</Text>
            </div>
            <div className="p-3 bg-white border">
              <Text appearance="default">Center</Text>
            </div>
          </div>
          <div className="d-flex justify-content-end bg-secondary-lightest border p-4 gap-10 mb-4">
            <div className="p-3 bg-white border">
              <Text appearance="default">End</Text>
            </div>
            <div className="p-3 bg-white border">
              <Text appearance="default">End</Text>
            </div>
          </div>
          <div className="d-flex justify-content-between bg-secondary-lightest border p-4 gap-10">
            <div className="p-3 bg-white border">
              <Text appearance="default">Between</Text>
            </div>
            <div className="p-3 bg-white border">
              <Text appearance="default">Between</Text>
            </div>
          </div>
        </div>
        <div className="mb-8 bg-secondary-lightest p-3 rounded-10">
          <pre className="m-0">
            <code>
              {`<div className="d-flex justify-content-start bg-secondary-lightest border p-4 gap-10">
  <div className="p-3 bg-white border">Start</div>
  <div className="p-3 bg-white border">Start</div>
</div>
<div className="d-flex justify-content-center bg-secondary-lightest border p-4 gap-10">
  <div className="p-3 bg-white border">Center</div>
  <div className="p-3 bg-white border">Center</div>
</div>
<div className="d-flex justify-content-between bg-secondary-lightest border p-4 gap-10">
  <div className="p-3 bg-white border">Between</div>
  <div className="p-3 bg-white border">Between</div>
</div>`}
            </code>
          </pre>
        </div>
      </div>

      {/* Align Items Examples */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Align Items
        </Heading>
        <Text appearance="subtle" className="mb-4">
          Align items along the cross axis.
        </Text>
        <div className="mb-6">
          <div className="d-flex align-items-start bg-secondary-lightest border p-4 gap-10 mb-4 h-25">
            <div className="p-3 bg-white border">
              <Text appearance="default">Start</Text>
            </div>
            <div className="p-3 bg-white border">
              <Text appearance="default">Start</Text>
            </div>
          </div>
          <div className="d-flex align-items-center bg-secondary-lightest border p-4 gap-10 mb-4 h-25">
            <div className="p-3 bg-white border">
              <Text appearance="default">Center</Text>
            </div>
            <div className="p-3 bg-white border">
              <Text appearance="default">Center</Text>
            </div>
          </div>
          <div className="d-flex align-items-end bg-secondary-lightest border p-4 gap-10 h-25">
            <div className="p-3 bg-white border">
              <Text appearance="default">End</Text>
            </div>
            <div className="p-3 bg-white border">
              <Text appearance="default">End</Text>
            </div>
          </div>
        </div>
        <div className="mb-8 bg-secondary-lightest p-3 rounded-10">
          <pre className="m-0">
            <code>
              {`<div className="d-flex align-items-start bg-secondary-lightest border p-4 gap-10 h-25">
  <div className="p-3 bg-white border">Start</div>
  <div className="p-3 bg-white border">Start</div>
</div>
<div className="d-flex align-items-center bg-secondary-lightest border p-4 gap-10 h-25">
  <div className="p-3 bg-white border">Center</div>
  <div className="p-3 bg-white border">Center</div>
</div>
<div className="d-flex align-items-end bg-secondary-lightest border p-4 gap-10 h-25">
  <div className="p-3 bg-white border">End</div>
  <div className="p-3 bg-white border">End</div>
</div>`}
            </code>
          </pre>
        </div>
      </div>

      {/* Gap Examples */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Gap Utilities
        </Heading>
        <Text appearance="subtle" className="mb-4">
          Control spacing between flex items.
        </Text>
        <div className="mb-6 d-flex flex-wrap gap-20">
          <div className="d-flex flex-column align-items-center">
            <div className="d-flex gap-2-5 bg-secondary-lightest border p-4 mb-2">
              <div className="p-3 bg-white border">Item 1</div>
              <div className="p-3 bg-white border">Item 2</div>
              <div className="p-3 bg-white border">Item 3</div>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              gap-2-5
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div className="d-flex gap-10 bg-secondary-lightest border p-4 mb-2">
              <div className="p-3 bg-white border">Item 1</div>
              <div className="p-3 bg-white border">Item 2</div>
              <div className="p-3 bg-white border">Item 3</div>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              gap-10
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div className="d-flex gap-20 bg-secondary-lightest border p-4 mb-2">
              <div className="p-3 bg-white border">Item 1</div>
              <div className="p-3 bg-white border">Item 2</div>
              <div className="p-3 bg-white border">Item 3</div>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              gap-20
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center">
            <div className="d-flex gap-30 bg-secondary-lightest border p-4 mb-2">
              <div className="p-3 bg-white border">Item 1</div>
              <div className="p-3 bg-white border">Item 2</div>
              <div className="p-3 bg-white border">Item 3</div>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              gap-30
            </Text>
          </div>
        </div>
        <div className="mb-8 bg-secondary-lightest p-3 rounded-10">
          <pre className="m-0">
            <code>
              {`<div className="d-flex gap-10 bg-secondary-lightest border p-4">
  <div className="p-3 bg-white border">Item 1</div>
  <div className="p-3 bg-white border">Item 2</div>
  <div className="p-3 bg-white border">Item 3</div>
</div>`}
            </code>
          </pre>
        </div>
      </div>

      {/* Row and Column Gap Examples */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Row and Column Gap
        </Heading>
        <Text appearance="subtle" className="mb-4">
          Control spacing by axis in flex wrap containers.
        </Text>
        <div className="mb-6">
          <div className="d-flex flex-wrap row-gap-10 column-gap-20 bg-secondary-lightest border p-4">
            <div className="p-3 bg-white border">
              <Text appearance="default">Item 1</Text>
            </div>
            <div className="p-3 bg-white border">
              <Text appearance="default">Item 2</Text>
            </div>
            <div className="p-3 bg-white border">
              <Text appearance="default">Item 3</Text>
            </div>
            <div className="p-3 bg-white border">
              <Text appearance="default">Item 4</Text>
            </div>
            <div className="p-3 bg-white border">
              <Text appearance="default">Item 5</Text>
            </div>
            <div className="p-3 bg-white border">
              <Text appearance="default">Item 6</Text>
            </div>
          </div>
        </div>
        <div className="mb-8 bg-secondary-lightest p-3 rounded-10">
          <pre className="m-0">
            <code>
              {`<div className="d-flex flex-wrap row-gap-10 column-gap-20 bg-secondary-lightest border p-4">
  <div className="p-3 bg-white border">Item 1</div>
  <div className="p-3 bg-white border">Item 2</div>
  <div className="p-3 bg-white border">Item 3</div>
  <div className="p-3 bg-white border">Item 4</div>
  <div className="p-3 bg-white border">Item 5</div>
  <div className="p-3 bg-white border">Item 6</div>
</div>`}
            </code>
          </pre>
        </div>
        <Text appearance="subtle" className="mb-2">
          row-gap-10 uses var(--spacing-10), column-gap-20 uses var(--spacing-20)
        </Text>
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
