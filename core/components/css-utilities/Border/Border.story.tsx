import * as React from 'react';
import { Heading, Card, Table, Text } from '@/index';
import utilitiesSchema from '../Schema';

export const border = () => {
  const data = [
    {
      className: 'border',
      properties: 'border: var(--border);',
    },
    {
      className: 'border-s',
      properties: 'border: var(--border-s);',
    },
    {
      className: 'border-top',
      properties: 'border-top: var(--border);',
    },
    {
      className: 'border-top-s',
      properties: 'border-top: var(--border-s);',
    },
    {
      className: 'border-bottom',
      properties: 'border-bottom: var(--border);',
    },
    {
      className: 'border-bottom-s',
      properties: 'border-bottom: var(--border-s);',
    },
    {
      className: 'border-right',
      properties: 'border-right: var(--border);',
    },
    {
      className: 'border-right-s',
      properties: 'border-right: var(--border-s);',
    },
    {
      className: 'border-left',
      properties: 'border-left: var(--border);',
    },
    {
      className: 'border-left-s',
      properties: 'border-left: var(--border-s);',
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
      className: 'rounded-0',
      properties: 'border-radius: 0;',
    },
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

  const styleData = [
    {
      className: 'border-solid',
      properties: 'border-style: solid !important;',
    },
    {
      className: 'border-dashed',
      properties: 'border-style: dashed !important;',
    },
    {
      className: 'border-dotted',
      properties: 'border-style: dotted !important;',
    },
    {
      className: 'border-inset',
      properties: 'border-style: inset !important;',
    },
    {
      className: 'border-outset',
      properties: 'border-style: outset !important;',
    },
    {
      className: 'border-none',
      properties: 'border-style: none !important;',
    },
  ];

  const colorData = [
    {
      className: 'border-primary',
      properties: 'border-color: var(--primary) !important;',
    },
    {
      className: 'border-secondary',
      properties: 'border-color: var(--secondary) !important;',
    },
    {
      className: 'border-success',
      properties: 'border-color: var(--success) !important;',
    },
    {
      className: 'border-warning',
      properties: 'border-color: var(--warning) !important;',
    },
    {
      className: 'border-alert',
      properties: 'border-color: var(--alert) !important;',
    },
    {
      className: 'border-accent1',
      properties: 'border-color: var(--accent1) !important;',
    },
    {
      className: 'border-accent2',
      properties: 'border-color: var(--accent2) !important;',
    },
    {
      className: 'border-accent3',
      properties: 'border-color: var(--accent3) !important;',
    },
    {
      className: 'border-accent4',
      properties: 'border-color: var(--accent4) !important;',
    },
    {
      className: 'border-inverse',
      properties: 'border-color: var(--inverse) !important;',
    },
    {
      className: 'border-white',
      properties: 'border-color: var(--white) !important;',
    },
  ];

  const individualRadiusData = [
    {
      className: 'rounded-top-left-10',
      properties: 'border-top-left-radius: var(--border-radius-10);',
    },
    {
      className: 'rounded-top-right-10',
      properties: 'border-top-right-radius: var(--border-radius-10);',
    },
    {
      className: 'rounded-bottom-left-10',
      properties: 'border-bottom-left-radius: var(--border-radius-10);',
    },
    {
      className: 'rounded-bottom-right-10',
      properties: 'border-bottom-right-radius: var(--border-radius-10);',
    },
    {
      className: 'rounded-top-left-20',
      properties: 'border-top-left-radius: var(--border-radius-20);',
    },
    {
      className: 'rounded-top-right-20',
      properties: 'border-top-right-radius: var(--border-radius-20);',
    },
    {
      className: 'rounded-bottom-left-20',
      properties: 'border-bottom-left-radius: var(--border-radius-20);',
    },
    {
      className: 'rounded-bottom-right-20',
      properties: 'border-bottom-right-radius: var(--border-radius-20);',
    },
  ];

  return (
    <div className="p-4">
      <Heading size="xxl">Border Utilities</Heading>
      <br />
      <Text>Use border utilities to add or remove an element's borders. Choose from all borders or one at a time.</Text>
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
        Border Style
      </Heading>
      <Text>Use these utilities to change the style of your element's border.</Text>

      <div className="mt-8 mb-8">
        <Card className="h-100">
          <Table
            data={styleData}
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
        Border Color
      </Heading>
      <Text>Use these utilities to change the color of your element's border.</Text>

      <div className="mt-8 mb-8">
        <Card className="h-100">
          <Table
            data={colorData}
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
      <Text>Use these utilities to apply different levels of border-radius to your elements.</Text>

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

      <Heading size="m" className="mt-8">
        Individual Corner Radius
      </Heading>
      <Text>Use these utilities to apply border-radius to individual corners of your elements.</Text>

      <div className="mt-8 mb-8">
        <Card className="h-100">
          <Table
            data={individualRadiusData}
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
      <Text className="mb-4">Here are examples of these border utilities in action:</Text>

      {/* Border examples */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Border Placement
        </Heading>
        <Text appearance="subtle" className="mb-4">
          Apply borders to all sides or specific sides.
        </Text>
        <div className="mb-6 d-flex flex-wrap align-items-start">
          <Text appearance="default" className="border bg-secondary-lightest p-8 d-inline-block mr-6">
            border
          </Text>
          <Text appearance="default" className="border-s bg-secondary-lightest p-8 d-inline-block mr-6">
            border-s
          </Text>
          <Text appearance="default" className="border-top bg-secondary-lightest p-8 d-inline-block mr-6">
            top
          </Text>
          <Text appearance="default" className="border-top-s bg-secondary-lightest p-8 d-inline-block mr-6">
            top-s
          </Text>
          <Text appearance="default" className="border-right bg-secondary-lightest p-8 d-inline-block mr-6">
            right
          </Text>
          <Text appearance="default" className="border-bottom bg-secondary-lightest p-8 d-inline-block mr-6">
            bottom
          </Text>
          <Text appearance="default" className="border-left bg-secondary-lightest p-8 d-inline-block">
            left
          </Text>
        </div>
        <div className="mb-8 bg-secondary-lightest p-3 rounded-10 font-size-xs">
          <pre className="m-0">
            {[
              '<Text className="border bg-secondary-lightest p-8 d-inline-block mr-6">border</Text>',
              '<Text className="border-top bg-secondary-lightest p-8 d-inline-block mr-6">top</Text>',
              '<Text className="border-right bg-secondary-lightest p-8 d-inline-block mr-6">right</Text>',
              '<Text className="border-bottom bg-secondary-lightest p-8 d-inline-block mr-6">bottom</Text>',
              '<Text className="border-left bg-secondary-lightest p-8 d-inline-block">left</Text>',
            ].join('\n')}
          </pre>
        </div>
        <Text appearance="subtle" className="mb-2 font-size-xs">
          These classes allow you to add borders to specific sides of an element.
        </Text>
      </div>

      {/* Border removal examples */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Border Removal
        </Heading>
        <Text appearance="subtle" className="mb-4">
          Remove all borders or from specific sides.
        </Text>
        <div className="mb-6 d-flex flex-wrap align-items-start">
          <Text appearance="default" className="border border-0 bg-secondary-lightest p-8 d-inline-block mr-6">
            border-0
          </Text>
          <Text appearance="default" className="border border-top-0 bg-secondary-lightest p-8 d-inline-block mr-6">
            top-0
          </Text>
          <Text appearance="default" className="border border-right-0 bg-secondary-lightest p-8 d-inline-block mr-6">
            right-0
          </Text>
          <Text appearance="default" className="border border-bottom-0 bg-secondary-lightest p-8 d-inline-block mr-6">
            bottom-0
          </Text>
          <Text appearance="default" className="border border-left-0 bg-secondary-lightest p-8 d-inline-block">
            left-0
          </Text>
        </div>
        <div className="mb-8 bg-secondary-lightest p-3 rounded-10 font-size-xs">
          <pre className="m-0">
            {[
              '<Text className="border border-0 bg-secondary-lightest p-8 d-inline-block mr-6">border-0</Text>',
              '<Text className="border border-top-0 bg-secondary-lightest p-8 d-inline-block mr-6">top-0</Text>',
              '<Text className="border border-right-0 bg-secondary-lightest p-8 d-inline-block mr-6">right-0</Text>',
              '<Text className="border border-bottom-0 bg-secondary-lightest p-8 d-inline-block mr-6">bottom-0</Text>',
              '<Text className="border border-left-0 bg-secondary-lightest p-8 d-inline-block">left-0</Text>',
            ].join('\n')}
          </pre>
        </div>
        <Text appearance="subtle" className="mb-2 font-size-xs">
          These utilities let you remove borders from specific sides of an element.
        </Text>
      </div>

      {/* Border radius examples */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Border Radius
        </Heading>
        <Text appearance="subtle" className="mb-4">
          Rounded corners from subtle to full.
        </Text>
        <div className="mb-6 d-flex flex-wrap align-items-start">
          <Text appearance="default" className="border rounded-0 bg-secondary-lightest p-8 d-inline-block mr-6">
            rounded-0
          </Text>
          <Text appearance="default" className="border rounded-2-5 bg-secondary-lightest p-8 d-inline-block mr-6">
            rounded-2-5
          </Text>
          <Text appearance="default" className="border rounded-05 bg-secondary-lightest p-8 d-inline-block mr-6">
            rounded-05
          </Text>
          <Text appearance="default" className="border rounded-10 bg-secondary-lightest p-8 d-inline-block mr-6">
            rounded-10
          </Text>
          <Text appearance="default" className="border rounded-15 bg-secondary-lightest p-8 d-inline-block mr-6">
            rounded-15
          </Text>
          <Text appearance="default" className="border rounded-20 bg-secondary-lightest p-8 d-inline-block mr-6">
            rounded-20
          </Text>
          <Text appearance="default" className="border rounded-30 bg-secondary-lightest p-8 d-inline-block mr-6">
            rounded-30
          </Text>
          <Text appearance="default" className="border rounded-40 bg-secondary-lightest p-8 d-inline-block mr-6">
            rounded-40
          </Text>
          <Text appearance="default" className="border rounded-full bg-secondary-lightest p-8 d-inline-block">
            rounded-full
          </Text>
        </div>
        <div className="mb-8 bg-secondary-lightest p-3 rounded-10 font-size-xs">
          <pre className="m-0">
            {[
              '<Text className="border rounded-2-5 bg-secondary-lightest p-8 d-inline-block mr-6">rounded-2-5</Text>',
              '<Text className="border rounded-05 bg-secondary-lightest p-8 d-inline-block mr-6">rounded-05</Text>',
              '<Text className="border rounded-10 bg-secondary-lightest p-8 d-inline-block mr-6">rounded-10</Text>',
              '<Text className="border rounded-15 bg-secondary-lightest p-8 d-inline-block mr-6">rounded-15</Text>',
              '<Text className="border rounded-20 bg-secondary-lightest p-8 d-inline-block mr-6">rounded-20</Text>',
              '<Text className="border rounded-30 bg-secondary-lightest p-8 d-inline-block mr-6">rounded-30</Text>',
              '<Text className="border rounded-40 bg-secondary-lightest p-8 d-inline-block mr-6">rounded-40</Text>',
              '<Text className="border rounded-full bg-secondary-lightest p-8 d-inline-block">rounded-full</Text>',
            ].join('\n')}
          </pre>
        </div>
        <Text appearance="subtle" className="mb-2 font-size-xs">
          These utilities help you apply different border radius values to your elements.
        </Text>
      </div>

      {/* Border color examples */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Border Colors
        </Heading>
        <Text appearance="subtle" className="mb-4">
          Use semantic and accent border colors.
        </Text>
        <div className="mb-6 d-flex flex-wrap align-items-start">
          <Text appearance="default" className="border border-primary bg-white p-8 d-inline-block mr-6 mb-4">
            border-primary
          </Text>
          <Text appearance="default" className="border border-secondary bg-white p-8 d-inline-block mr-6 mb-4">
            border-secondary
          </Text>
          <Text appearance="default" className="border border-success bg-white p-8 d-inline-block mr-6 mb-4">
            border-success
          </Text>
          <Text appearance="default" className="border border-warning bg-white p-8 d-inline-block mr-6 mb-4">
            border-warning
          </Text>
          <Text appearance="default" className="border border-alert bg-white p-8 d-inline-block mr-6 mb-4">
            border-alert
          </Text>
          <Text appearance="default" className="border border-accent1 bg-white p-8 d-inline-block mr-6 mb-4">
            border-accent1
          </Text>
          <Text appearance="default" className="border border-accent2 bg-white p-8 d-inline-block mr-6 mb-4">
            border-accent2
          </Text>
          <Text appearance="default" className="border border-accent3 bg-white p-8 d-inline-block mr-6 mb-4">
            border-accent3
          </Text>
          <Text appearance="default" className="border border-accent4 bg-white p-8 d-inline-block mr-6 mb-4">
            border-accent4
          </Text>
          <Text appearance="default" className="border border-inverse bg-white p-8 d-inline-block mr-6 mb-4">
            border-inverse
          </Text>
          <Text appearance="default" className="border border-white bg-secondary-lightest p-8 d-inline-block mb-4">
            border-white
          </Text>
        </div>
        <div className="mb-8 bg-secondary-lightest p-3 rounded-10 font-size-xs">
          <pre className="m-0">
            {[
              '<Text className="border border-primary bg-white p-8 d-inline-block mr-6">border-primary</Text>',
              '<Text className="border border-secondary bg-white p-8 d-inline-block mr-6">border-secondary</Text>',
              '<Text className="border border-success bg-white p-8 d-inline-block mr-6">border-success</Text>',
              '<Text className="border border-warning bg-white p-8 d-inline-block mr-6">border-warning</Text>',
              '<Text className="border border-alert bg-white p-8 d-inline-block mr-6">border-alert</Text>',
              '<Text className="border border-accent1 bg-white p-8 d-inline-block mr-6">border-accent1</Text>',
              '<Text className="border border-accent2 bg-white p-8 d-inline-block mr-6">border-accent2</Text>',
              '<Text className="border border-accent3 bg-white p-8 d-inline-block mr-6">border-accent3</Text>',
              '<Text className="border border-accent4 bg-white p-8 d-inline-block mr-6">border-accent4</Text>',
              '<Text className="border border-inverse bg-white p-8 d-inline-block mr-6">border-inverse</Text>',
              '<Text className="border border-white bg-secondary-lightest p-8 d-inline-block">border-white</Text>',
            ].join('\n')}
          </pre>
        </div>
        <Text appearance="subtle" className="mb-2 font-size-xs">
          These utilities allow you to change the color of your element's border.
        </Text>
      </div>

      {/* Border style examples */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Border Styles
        </Heading>
        <Text appearance="subtle" className="mb-4">
          Different border styles supported.
        </Text>
        <div className="mb-6 d-flex flex-wrap align-items-start">
          <Text appearance="default" className="border border-solid bg-secondary-lightest p-8 d-inline-block mr-6">
            border-solid
          </Text>
          <Text appearance="default" className="border border-dashed bg-secondary-lightest p-8 d-inline-block mr-6">
            border-dashed
          </Text>
          <Text appearance="default" className="border border-dotted bg-secondary-lightest p-8 d-inline-block mr-6">
            border-dotted
          </Text>
          <Text appearance="default" className="border border-inset bg-secondary-lightest p-8 d-inline-block mr-6">
            border-inset
          </Text>
          <Text appearance="default" className="border border-outset bg-secondary-lightest p-8 d-inline-block mr-6">
            border-outset
          </Text>
          <Text appearance="default" className="border border-none bg-secondary-lightest p-8 d-inline-block">
            border-none
          </Text>
        </div>
        <div className="mb-8 bg-secondary-lightest p-3 rounded-10 font-size-xs">
          <pre className="m-0">
            {[
              '<Text className="border border-solid bg-secondary-lightest p-8 d-inline-block mr-6">border-solid</Text>',
              '<Text className="border border-dashed bg-secondary-lightest p-8 d-inline-block mr-6">border-dashed</Text>',
              '<Text className="border border-dotted bg-secondary-lightest p-8 d-inline-block mr-6">border-dotted</Text>',
              '<Text className="border border-inset bg-secondary-lightest p-8 d-inline-block mr-6">border-inset</Text>',
              '<Text className="border border-outset bg-secondary-lightest p-8 d-inline-block mr-6">border-outset</Text>',
              '<Text className="border border-none bg-secondary-lightest p-8 d-inline-block">border-none</Text>',
            ].join('\n')}
          </pre>
        </div>
        <Text appearance="subtle" className="mb-2 font-size-xs">
          These utilities allow you to change the style of your element's border.
        </Text>
      </div>

      {/* Individual corner radius examples */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Individual Corner Radius
        </Heading>
        <Text appearance="subtle" className="mb-4">
          Apply radius to a single corner.
        </Text>
        <div className="mb-6 d-flex flex-wrap align-items-start">
          <Text
            appearance="default"
            className="border rounded-top-left-20 bg-secondary-lightest p-8 d-inline-block mr-6"
          >
            top-left-20
          </Text>
          <Text
            appearance="default"
            className="border rounded-top-right-20 bg-secondary-lightest p-8 d-inline-block mr-6"
          >
            top-right-20
          </Text>
          <Text
            appearance="default"
            className="border rounded-bottom-left-20 bg-secondary-lightest p-8 d-inline-block mr-6"
          >
            bottom-left-20
          </Text>
          <Text
            appearance="default"
            className="border rounded-bottom-right-20 bg-secondary-lightest p-8 d-inline-block"
          >
            bottom-right-20
          </Text>
        </div>
        <div className="mb-8 bg-secondary-lightest p-3 rounded-10 font-size-xs">
          <pre className="m-0">
            {[
              '<Text className="border rounded-top-left-20 bg-secondary-lightest p-8 d-inline-block mr-6">top-left-20</Text>',
              '<Text className="border rounded-top-right-20 bg-secondary-lightest p-8 d-inline-block mr-6">top-right-20</Text>',
              '<Text className="border rounded-bottom-left-20 bg-secondary-lightest p-8 d-inline-block mr-6">bottom-left-20</Text>',
              '<Text className="border rounded-bottom-right-20 bg-secondary-lightest p-8 d-inline-block">bottom-right-20</Text>',
            ].join('\n')}
          </pre>
        </div>
        <Text appearance="subtle" className="mb-2 font-size-xs">
          These utilities allow you to apply border-radius to individual corners of your elements.
        </Text>
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
