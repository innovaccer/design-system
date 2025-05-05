import * as React from 'react';
import { Heading, Paragraph, Card, Table } from '@/index';
import utilitiesSchema from '../Schema';

export const border = () => {
  const data = [
    {
      className: 'border',
      properties: 'border: var(--border);',
    },
    {
      className: 'border-top',
      properties: 'border-top: var(--border);',
    },
    {
      className: 'border-bottom',
      properties: 'border-bottom: var(--border);',
    },
    {
      className: 'border-right',
      properties: 'border-right: var(--border);',
    },
    {
      className: 'border-left',
      properties: 'border-left: var(--border);',
    },
    {
      className: 'border-0',
      properties: 'border: 0;',
    },
    {
      className: 'border-top-0',
      properties: 'border-top: 0;',
    },
    {
      className: 'border-bottom-0',
      properties: 'border-bottom: 0;',
    },
    {
      className: 'border-right-0',
      properties: 'border-right: 0;',
    },
    {
      className: 'border-left-0',
      properties: 'border-left: 0;',
    },
  ];

  const radiusData = [
    {
      className: 'rounded-2-5',
      properties: 'border-radius: var(--border-radius-2-5); /* 1px */',
    },
    {
      className: 'rounded-05',
      properties: 'border-radius: var(--border-radius-05); /* 2px */',
    },
    {
      className: 'rounded-10',
      properties: 'border-radius: var(--border-radius-10); /* 4px */',
    },
    {
      className: 'rounded-15',
      properties: 'border-radius: var(--border-radius-15); /* 6px */',
    },
    {
      className: 'rounded-20',
      properties: 'border-radius: var(--border-radius-20); /* 8px */',
    },
    {
      className: 'rounded-30',
      properties: 'border-radius: var(--border-radius-30); /* 12px */',
    },
    {
      className: 'rounded-40',
      properties: 'border-radius: var(--border-radius-40); /* 16px */',
    },
    {
      className: 'rounded-full',
      properties: 'border-radius: var(--border-radius-full); /* 9999px */',
    },
  ];

  return (
    <div className="p-4">
      <Heading size="xxl">Border Utilities</Heading>
      <br />
      <Paragraph appearance="default">
        Use border utilities to add or remove an element's borders. Choose from all borders or one at a time.
      </Paragraph>

      <div className="mt-8 mb-8">
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

      <Heading size="m" className="mt-8">
        Border Radius
      </Heading>
      <Paragraph appearance="default">
        Use these utilities to apply different levels of border-radius to your elements.
      </Paragraph>

      <div className="mt-8 mb-8">
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

      {/* Examples section */}
      <Heading size="m" className="mt-8">
        Examples
      </Heading>
      <Paragraph appearance="default">Here are examples of these border utilities in action:</Paragraph>

      {/* Border examples */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Border Placement
        </Heading>
        <div className="mb-4 d-flex flex-wrap gap-5">
          <div>
            <div className="text-center mb-2">border</div>
            <div className="border w-30 h-30 bg-stone-lightest d-flex align-items-center justify-content-center">
              All sides
            </div>
          </div>
          <div>
            <div className="text-center mb-2">border-top</div>
            <div className="border-top w-30 h-30 bg-jal-lightest d-flex align-items-center justify-content-center">
              Top only
            </div>
          </div>
          <div>
            <div className="text-center mb-2">border-right</div>
            <div className="border-right w-30 h-30 bg-neem-lightest d-flex align-items-center justify-content-center">
              Right only
            </div>
          </div>
          <div>
            <div className="text-center mb-2">border-bottom</div>
            <div className="border-bottom w-30 h-30 bg-haldi-lightest d-flex align-items-center justify-content-center">
              Bottom only
            </div>
          </div>
          <div>
            <div className="text-center mb-2">border-left</div>
            <div className="border-left w-30 h-30 bg-jamun-lightest d-flex align-items-center justify-content-center">
              Left only
            </div>
          </div>
        </div>
        <div className="mb-2 color-text-subtle font-size-xs">
          These classes allow you to add borders to specific sides of an element.
        </div>
      </div>

      {/* Border removal examples */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Border Removal
        </Heading>
        <div className="mb-4 d-flex flex-wrap gap-5">
          <div>
            <div className="text-center mb-2">border border-0</div>
            <div className="border border-0 w-30 h-30 bg-stone-lightest d-flex align-items-center justify-content-center">
              No borders
            </div>
          </div>
          <div>
            <div className="text-center mb-2">border border-top-0</div>
            <div className="border border-top-0 w-30 h-30 bg-jal-lightest d-flex align-items-center justify-content-center">
              No top border
            </div>
          </div>
          <div>
            <div className="text-center mb-2">border border-right-0</div>
            <div className="border border-right-0 w-30 h-30 bg-neem-lightest d-flex align-items-center justify-content-center">
              No right border
            </div>
          </div>
          <div>
            <div className="text-center mb-2">border border-bottom-0</div>
            <div className="border border-bottom-0 w-30 h-30 bg-haldi-lightest d-flex align-items-center justify-content-center">
              No bottom border
            </div>
          </div>
          <div>
            <div className="text-center mb-2">border border-left-0</div>
            <div className="border border-left-0 w-30 h-30 bg-jamun-lightest d-flex align-items-center justify-content-center">
              No left border
            </div>
          </div>
        </div>
        <div className="mb-2 color-text-subtle font-size-xs">
          These utilities let you remove borders from specific sides of an element.
        </div>
      </div>

      {/* Border radius examples */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Border Radius
        </Heading>
        <div className="mb-4 d-flex flex-wrap gap-5">
          <div>
            <div className="text-center mb-2">rounded-2-5</div>
            <div className="border rounded-2-5 w-30 h-30 bg-stone-lightest d-flex align-items-center justify-content-center">
              1px radius
            </div>
          </div>
          <div>
            <div className="text-center mb-2">rounded-05</div>
            <div className="border rounded-05 w-30 h-30 bg-jal-lightest d-flex align-items-center justify-content-center">
              2px radius
            </div>
          </div>
          <div>
            <div className="text-center mb-2">rounded-10</div>
            <div className="border rounded-10 w-30 h-30 bg-neem-lightest d-flex align-items-center justify-content-center">
              4px radius
            </div>
          </div>
          <div>
            <div className="text-center mb-2">rounded-20</div>
            <div className="border rounded-20 w-30 h-30 bg-haldi-lightest d-flex align-items-center justify-content-center">
              8px radius
            </div>
          </div>
          <div>
            <div className="text-center mb-2">rounded-full</div>
            <div className="border rounded-full w-30 h-30 bg-jamun-lightest d-flex align-items-center justify-content-center">
              Full radius
            </div>
          </div>
        </div>
        <div className="mb-2 color-text-subtle font-size-xs">
          These utilities help you apply different border radius values to your elements.
        </div>
      </div>
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
