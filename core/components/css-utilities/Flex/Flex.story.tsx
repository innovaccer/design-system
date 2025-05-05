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
    /* New utility classes */
    {
      className: 'gap-0',
      properties: 'gap: 0 ;',
    },
    {
      className: 'gap-1',
      properties: 'gap: var(--spacing-2-5) ; /* 1px */',
    },
    {
      className: 'gap-2',
      properties: 'gap: var(--spacing-05) ; /* 2px */',
    },
    {
      className: 'gap-3',
      properties: 'gap: var(--spacing-10) ; /* 4px */',
    },
    {
      className: 'gap-4',
      properties: 'gap: var(--spacing-20) ; /* 8px */',
    },
    {
      className: 'gap-5',
      properties: 'gap: var(--spacing-60) ; /* 24px */',
    },
    {
      className: 'row-gap-0',
      properties: 'row-gap: 0 ;',
    },
    {
      className: 'row-gap-1',
      properties: 'row-gap: var(--spacing-2-5) ; /* 1px */',
    },
    {
      className: 'row-gap-2',
      properties: 'row-gap: var(--spacing-05) ; /* 2px */',
    },
    {
      className: 'row-gap-3',
      properties: 'row-gap: var(--spacing-10) ; /* 4px */',
    },
    {
      className: 'row-gap-4',
      properties: 'row-gap: var(--spacing-20) ; /* 8px */',
    },
    {
      className: 'row-gap-5',
      properties: 'row-gap: var(--spacing-60) ; /* 24px */',
    },
    {
      className: 'column-gap-0',
      properties: 'column-gap: 0 ;',
    },
    {
      className: 'column-gap-1',
      properties: 'column-gap: var(--spacing-2-5) ; /* 1px */',
    },
    {
      className: 'column-gap-2',
      properties: 'column-gap: var(--spacing-05) ; /* 2px */',
    },
    {
      className: 'column-gap-3',
      properties: 'column-gap: var(--spacing-10) ; /* 4px */',
    },
    {
      className: 'column-gap-4',
      properties: 'column-gap: var(--spacing-20) ; /* 8px */',
    },
    {
      className: 'column-gap-5',
      properties: 'column-gap: var(--spacing-60) ; /* 24px */',
    },
    {
      className: 'justify-items-start',
      properties: 'justify-items: start ;',
    },
    {
      className: 'justify-items-end',
      properties: 'justify-items: end ;',
    },
    {
      className: 'justify-items-center',
      properties: 'justify-items: center ;',
    },
    {
      className: 'justify-items-stretch',
      properties: 'justify-items: stretch ;',
    },
    {
      className: 'justify-self-auto',
      properties: 'justify-self: auto ;',
    },
    {
      className: 'justify-self-start',
      properties: 'justify-self: start ;',
    },
    {
      className: 'justify-self-end',
      properties: 'justify-self: end ;',
    },
    {
      className: 'justify-self-center',
      properties: 'justify-self: center ;',
    },
    {
      className: 'justify-self-stretch',
      properties: 'justify-self: stretch ;',
    },
    {
      className: 'place-content-center',
      properties: 'place-content: center ;',
    },
    {
      className: 'place-content-start',
      properties: 'place-content: start ;',
    },
    {
      className: 'place-content-end',
      properties: 'place-content: end ;',
    },
    {
      className: 'place-content-between',
      properties: 'place-content: space-between ;',
    },
    {
      className: 'place-content-around',
      properties: 'place-content: space-around ;',
    },
    {
      className: 'place-content-evenly',
      properties: 'place-content: space-evenly ;',
    },
    {
      className: 'place-content-stretch',
      properties: 'place-content: stretch ;',
    },
    {
      className: 'place-items-start',
      properties: 'place-items: start ;',
    },
    {
      className: 'place-items-end',
      properties: 'place-items: end ;',
    },
    {
      className: 'place-items-center',
      properties: 'place-items: center ;',
    },
    {
      className: 'place-items-stretch',
      properties: 'place-items: stretch ;',
    },
    {
      className: 'place-self-auto',
      properties: 'place-self: auto ;',
    },
    {
      className: 'place-self-start',
      properties: 'place-self: start ;',
    },
    {
      className: 'place-self-end',
      properties: 'place-self: end ;',
    },
    {
      className: 'place-self-center',
      properties: 'place-self: center ;',
    },
    {
      className: 'place-self-stretch',
      properties: 'place-self: stretch ;',
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
      <div className="mt-5 mb-8 h-12">
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
      &nbsp;
      <Heading size="s">Use .gap-* utilities to control the spacing between flex items.</Heading>
      &nbsp;
      <div className="d-flex gap-3 Utilities-example">
        <div className="p-2">Flex item with gap</div>
        <div className="p-2">Flex item with gap</div>
        <div className="p-2">Flex item with gap</div>
      </div>
      &nbsp;
      <div className="DocPage-codeBlock pb-5 pt-5 pl-5">
        <code>
          {'<div className="d-flex gap-3">'}
          <br />
          &nbsp; {'<div className="p-2">Flex item with gap</div>'}
          <br />
          &nbsp; {'<div className="p-2">Flex item with gap</div>'}
          <br />
          &nbsp; {'<div className="p-2">Flex item with gap</div>'}
          <br />
          {'</div>'}
          <br />
        </code>
        <div className="color-text-subtle font-size-xs mt-2">
          {'/* gap-3 applies var(--spacing-10) which equals 4px */'}
        </div>
      </div>
      &nbsp;
      <Heading size="s">
        Use .row-gap-* and .column-gap-* utilities to control the spacing in different directions.
      </Heading>
      &nbsp;
      <div className="d-flex flex-wrap row-gap-3 column-gap-4 Utilities-example">
        <div className="p-2">Item with row and column gap</div>
        <div className="p-2">Item with row and column gap</div>
        <div className="p-2">Item with row and column gap</div>
        <div className="p-2">Item with row and column gap</div>
        <div className="p-2">Item with row and column gap</div>
        <div className="p-2">Item with row and column gap</div>
      </div>
      &nbsp;
      <div className="DocPage-codeBlock pb-5 pt-5 pl-5">
        <code>
          {'<div className="d-flex flex-wrap row-gap-3 column-gap-4">'}
          <br />
          &nbsp; {'<div className="p-2">Item with row and column gap</div>'}
          <br />
          &nbsp; {'<div className="p-2">Item with row and column gap</div>'}
          <br />
          &nbsp; {'<div className="p-2">Item with row and column gap</div>'}
          <br />
          &nbsp; {'<div className="p-2">Item with row and column gap</div>'}
          <br />
          &nbsp; {'<div className="p-2">Item with row and column gap</div>'}
          <br />
          &nbsp; {'<div className="p-2">Item with row and column gap</div>'}
          <br />
          {'</div>'}
          <br />
        </code>
        <div className="color-text-subtle font-size-xs mt-2">
          {'/* row-gap-3 applies var(--spacing-10) which equals 4px */'}
          <br />
          {'/* column-gap-4 applies var(--spacing-20) which equals 8px */'}
        </div>
      </div>
      &nbsp;
      <Heading size="s">Use .justify-items-* utilities to align grid items along their inline axis.</Heading>
      &nbsp;
      <div className="d-grid justify-items-center Utilities-example grid-cols-3">
        <div className="p-2">Centered grid item</div>
        <div className="p-2">Centered grid item</div>
        <div className="p-2">Centered grid item</div>
      </div>
      &nbsp;
      <div className="DocPage-codeBlock pb-5 pt-5 pl-5">
        <code>
          {'<div className="d-grid justify-items-center grid-cols-3">'}
          <br />
          &nbsp; {'<div className="p-2">Centered grid item</div>'}
          <br />
          &nbsp; {'<div className="p-2">Centered grid item</div>'}
          <br />
          &nbsp; {'<div className="p-2">Centered grid item</div>'}
          <br />
          {'</div>'}
          <br />
        </code>
      </div>
      &nbsp;
      <Heading size="s">Use .justify-self-* utilities to align individual grid items along their inline axis.</Heading>
      &nbsp;
      <div className="d-grid Utilities-example grid-cols-3">
        <div className="p-2 justify-self-start">Start</div>
        <div className="p-2 justify-self-center">Center</div>
        <div className="p-2 justify-self-end">End</div>
      </div>
      &nbsp;
      <div className="DocPage-codeBlock pb-5 pt-5 pl-5">
        <code>
          {'<div className="d-grid grid-cols-3">'}
          <br />
          &nbsp; {'<div className="p-2 justify-self-start">Start</div>'}
          <br />
          &nbsp; {'<div className="p-2 justify-self-center">Center</div>'}
          <br />
          &nbsp; {'<div className="p-2 justify-self-end">End</div>'}
          <br />
          {'</div>'}
          <br />
        </code>
      </div>
      &nbsp;
      <Heading size="s">
        Use .place-content-* utilities as a shorthand for both align-content and justify-content.
      </Heading>
      &nbsp;
      <div className="d-flex flex-wrap place-content-center Utilities-example h-10">
        <div className="p-2">Centered content</div>
        <div className="p-2">Centered content</div>
        <div className="p-2">Centered content</div>
      </div>
      &nbsp;
      <div className="DocPage-codeBlock pb-5 pt-5 pl-5">
        <code>
          {'<div className="d-flex flex-wrap place-content-center h-10">'}
          <br />
          &nbsp; {'<div className="p-2">Centered content</div>'}
          <br />
          &nbsp; {'<div className="p-2">Centered content</div>'}
          <br />
          &nbsp; {'<div className="p-2">Centered content</div>'}
          <br />
          {'</div>'}
          <br />
        </code>
      </div>
      &nbsp;
      <Heading size="s">Use .place-items-* utilities as a shorthand for both align-items and justify-items.</Heading>
      &nbsp;
      <div className="d-grid place-items-center Utilities-example h-10 grid-cols-3">
        <div className="p-2">Centered item</div>
        <div className="p-2">Centered item</div>
        <div className="p-2">Centered item</div>
      </div>
      &nbsp;
      <div className="DocPage-codeBlock pb-5 pt-5 pl-5">
        <code>
          {'<div className="d-grid place-items-center h-10 grid-cols-3">'}
          <br />
          &nbsp; {'<div className="p-2">Centered item</div>'}
          <br />
          &nbsp; {'<div className="p-2">Centered item</div>'}
          <br />
          &nbsp; {'<div className="p-2">Centered item</div>'}
          <br />
          {'</div>'}
          <br />
        </code>
      </div>
      &nbsp;
      <Heading size="s">Use .place-self-* utilities as a shorthand for both align-self and justify-self.</Heading>
      &nbsp;
      <div className="d-grid Utilities-example h-10 grid-cols-3">
        <div className="p-2 place-self-start">Start</div>
        <div className="p-2 place-self-center">Center</div>
        <div className="p-2 place-self-end">End</div>
      </div>
      &nbsp;
      <div className="DocPage-codeBlock pb-5 pt-5 pl-5">
        <code>
          {'<div className="d-grid h-10 grid-cols-3">'}
          <br />
          &nbsp; {'<div className="p-2 place-self-start">Start</div>'}
          <br />
          &nbsp; {'<div className="p-2 place-self-center">Center</div>'}
          <br />
          &nbsp; {'<div className="p-2 place-self-end">End</div>'}
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
