import * as React from 'react';
import { Heading, Paragraph, Card, Table } from '@/index';
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
      <Paragraph appearance="default">
        Quickly and responsively toggle the display value of components and more with our display utilities.
      </Paragraph>
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
      <Paragraph appearance="default">Here are examples of these display utilities in action:</Paragraph>

      {/* d-inline example */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Inline Display
        </Heading>
        <div className="mb-4">
          <div className="d-inline bg-stone-lightest border border-2 border-stone-light p-2 px-4 mr-2 mb-2 align-middle lh-8">
            d-inline
          </div>
          <div className="d-inline bg-jal-lightest border border-2 border-jal-light p-2 px-4 mr-2 mb-2 align-middle lh-8">
            d-inline
          </div>
          <div className="d-inline bg-neem-lightest border border-2 border-neem-light p-2 px-4 mr-2 mb-2 align-middle lh-8">
            d-inline
          </div>
          <div className="d-inline bg-tawak-lightest border border-2 border-tawak-light p-2 px-4 mr-2 mb-2 align-middle lh-8">
            d-inline
          </div>
          <div className="d-inline bg-mirch-lightest border border-2 border-mirch-light p-2 px-4 mr-2 mb-2 align-middle lh-8">
            d-inline
          </div>
        </div>
        <div className="mb-2 text-muted color-text-subtle font-size-xs">
          Elements with d-inline display as inline elements, appearing side by side and taking up only as much width as
          necessary. They will wrap to new lines when they reach the container's edge.
        </div>
        <div className="bg-stone-lightest p-3 rounded-10 font-monospace font-size-xs">
          &lt;div className="d-inline"&gt;d-inline&lt;/div&gt;
          <br />
          &lt;div className="d-inline"&gt;d-inline&lt;/div&gt;
        </div>
      </div>

      {/* d-block example */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Block Display
        </Heading>
        <div className="mb-4">
          <span className="d-block bg-stone-lightest border border-2 border-stone-light p-2 px-4 mb-2">
            d-block (span element)
          </span>
          <span className="d-block bg-jal-lightest border border-2 border-jal-light p-2 px-4 mb-2">
            d-block (span element)
          </span>
        </div>
        <div className="mb-2 text-muted color-text-subtle font-size-xs">
          Elements with d-block start on a new line and take up the full width available.
        </div>
        <div className="bg-stone-lightest p-3 rounded-10 font-monospace font-size-xs">
          &lt;span className="d-block"&gt;d-block (span element)&lt;/span&gt;
          <br />
          &lt;span className="d-block"&gt;d-block (span element)&lt;/span&gt;
        </div>
      </div>

      {/* Flex display example */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Flex Display
        </Heading>
        <div className="mb-4">
          <div className="d-flex bg-stone-lightest border border-2 border-stone-light p-4 gap-3">
            <div className="p-3 bg-jal-lightest border border-jal-light">Flex item 1</div>
            <div className="p-3 bg-neem-lightest border border-neem-light">Flex item 2</div>
            <div className="p-3 bg-haldi-lightest border border-haldi-light">Flex item 3</div>
          </div>
        </div>
        <div className="mb-2 text-muted color-text-subtle font-size-xs">
          Elements with d-flex become flex containers, with their children arranged in a row by default.
        </div>
      </div>

      {/* d-inline-block example */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Inline Block Display
        </Heading>
        <div className="mb-4">
          <div className="d-inline-block bg-jal-lightest border border-2 border-jal-light p-3 mr-2 mb-2 w-50 h-25 align-top">
            d-inline-block
            <br />
            Width: 200px
            <br />
            Height: 100px
          </div>
          <div className="d-inline-block bg-neem-lightest border border-2 border-neem-light p-3 mr-2 mb-2 w-37-5 h-37-5 align-top">
            d-inline-block
            <br />
            Width: 150px
            <br />
            Height: 150px
          </div>
        </div>
        <div className="mb-2 text-muted color-text-subtle font-size-xs">
          Elements with d-inline-block flow like inline elements but can have width and height like block elements.
        </div>
      </div>

      {/* d-grid example */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Grid Display
        </Heading>
        <div className="mb-4">
          <div className="d-grid bg-stone-lightest border border-2 border-stone-light p-4 gap-3 grid-cols-3">
            <div className="p-3 bg-stone-lightest border border-stone-light">Grid item 1</div>
            <div className="p-3 bg-jal-lightest border border-jal-light">Grid item 2</div>
            <div className="p-3 bg-haldi-lightest border border-haldi-light">Grid item 3</div>
            <div className="p-3 bg-mirch-lightest border border-mirch-light">Grid item 4</div>
            <div className="p-3 bg-tawak-lightest border border-tawak-light">Grid item 5</div>
            <div className="p-3 bg-jamun-lightest border border-jamun-light">Grid item 6</div>
          </div>
        </div>
        <div className="mb-2 text-muted color-text-subtle font-size-xs">
          Elements with d-grid become grid containers, allowing for two-dimensional layouts.
        </div>
      </div>

      {/* Table display example */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Table Display
        </Heading>
        <div className="mb-4">
          <div className="d-table w-100 bg-stone-lightest border border-2 border-stone-light">
            <div className="d-table-row">
              <div className="d-table-cell w-33 p-3 bg-jal-lightest border border-jal-light">Table cell 1</div>
              <div className="d-table-cell w-33 p-3 bg-neem-lightest border border-neem-light">Table cell 2</div>
              <div className="d-table-cell w-33 p-3 bg-haldi-lightest border border-haldi-light">Table cell 3</div>
            </div>
            <div className="d-table-row">
              <div className="d-table-cell p-3 bg-jamun-lightest border border-jamun-light">Table cell 4</div>
              <div className="d-table-cell p-3 bg-mirch-lightest border border-mirch-light">Table cell 5</div>
              <div className="d-table-cell p-3 bg-tawak-lightest border border-tawak-light">Table cell 6</div>
            </div>
          </div>
        </div>
        <div className="mb-2 text-muted color-text-subtle font-size-xs">
          Elements with d-table, d-table-row, and d-table-cell create table-like layouts without using actual table
          elements.
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
