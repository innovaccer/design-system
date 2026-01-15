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
      className: 'border-accent-1',
      properties: 'border-color: var(--accent1) !important;',
    },
    {
      className: 'border-accent-2',
      properties: 'border-color: var(--accent2) !important;',
    },
    {
      className: 'border-accent-3',
      properties: 'border-color: var(--accent3) !important;',
    },
    {
      className: 'border-accent-4',
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
      <Text weight="strong">
        Use border utilities to add or remove an element's borders. Choose from all borders or one at a time.
      </Text>
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
      <Text weight="strong">Use these utilities to change the style of your element's border.</Text>

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
      <Text weight="strong">Use these utilities to change the color of your element's border.</Text>

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
      <Text weight="strong">Use these utilities to apply different levels of border-radius to your elements.</Text>

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
      <Text weight="strong">Use these utilities to apply border-radius to individual corners of your elements.</Text>

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
      <Text weight="strong" className="mb-4">
        Here are examples of these border utilities in action:
      </Text>

      {/* Border examples */}
      <div className="mt-8 mb-8">
        <Heading size="s" className="mb-3">
          Border Placement
        </Heading>
        <Text appearance="subtle" className="mb-4">
          Apply borders to all sides or specific sides.
        </Text>
        <div className="mb-6 d-flex flex-wrap align-items-start">
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border bg-secondary-lightest p-8 d-inline-block mb-2">
              <Text appearance="default">border</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              border
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border-s bg-secondary-lightest p-8 d-inline-block mb-2">
              <Text appearance="default">border-s</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              border-s
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border-top bg-secondary-lightest p-8 d-inline-block mb-2">
              <Text appearance="default">top</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              border-top
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border-top-s bg-secondary-lightest p-8 d-inline-block mb-2">
              <Text appearance="default">top-s</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              border-top-s
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border-right bg-secondary-lightest p-8 d-inline-block mb-2">
              <Text appearance="default">right</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              border-right
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border-bottom bg-secondary-lightest p-8 d-inline-block mb-2">
              <Text appearance="default">bottom</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              border-bottom
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mb-4">
            <div className="border-left bg-secondary-lightest p-8 d-inline-block mb-2">
              <Text appearance="default">left</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              border-left
            </Text>
          </div>
        </div>
        <div className="mb-8 bg-secondary-lightest p-3 rounded-10">
          <pre className="m-0">
            <code>
              {`<div className="border bg-secondary-lightest p-8 d-inline-block">
  <Text appearance="default">border</Text>
</div>
<div className="border-top bg-secondary-lightest p-8 d-inline-block">
  <Text appearance="default">top</Text>
</div>
<div className="border-right bg-secondary-lightest p-8 d-inline-block">
  <Text appearance="default">right</Text>
</div>
<div className="border-bottom bg-secondary-lightest p-8 d-inline-block">
  <Text appearance="default">bottom</Text>
</div>
<div className="border-left bg-secondary-lightest p-8 d-inline-block">
  <Text appearance="default">left</Text>
</div>`}
            </code>
          </pre>
        </div>
        <Text appearance="subtle" className="mb-2">
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
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border border-0 bg-secondary-lightest p-8 d-inline-block mb-2">
              <Text appearance="default">border-0</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              border-0
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border border-top-0 bg-secondary-lightest p-8 d-inline-block mb-2">
              <Text appearance="default">top-0</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              border-top-0
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border border-right-0 bg-secondary-lightest p-8 d-inline-block mb-2">
              <Text appearance="default">right-0</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              border-right-0
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border border-bottom-0 bg-secondary-lightest p-8 d-inline-block mb-2">
              <Text appearance="default">bottom-0</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              border-bottom-0
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mb-4">
            <div className="border border-left-0 bg-secondary-lightest p-8 d-inline-block mb-2">
              <Text appearance="default">left-0</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              border-left-0
            </Text>
          </div>
        </div>
        <div className="mb-8 bg-secondary-lightest p-3 rounded-10">
          <pre className="m-0">
            <code>
              {`<div className="border border-0 bg-secondary-lightest p-8 d-inline-block">
  <Text appearance="default">border-0</Text>
</div>
<div className="border border-top-0 bg-secondary-lightest p-8 d-inline-block">
  <Text appearance="default">top-0</Text>
</div>
<div className="border border-right-0 bg-secondary-lightest p-8 d-inline-block">
  <Text appearance="default">right-0</Text>
</div>
<div className="border border-bottom-0 bg-secondary-lightest p-8 d-inline-block">
  <Text appearance="default">bottom-0</Text>
</div>
<div className="border border-left-0 bg-secondary-lightest p-8 d-inline-block">
  <Text appearance="default">left-0</Text>
</div>`}
            </code>
          </pre>
        </div>
        <Text appearance="subtle" className="mb-2">
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
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border rounded-0 bg-secondary-lightest p-8 d-inline-block mb-2">
              <Text appearance="default">rounded-0</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              rounded-0
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border rounded-2-5 bg-secondary-lightest p-8 d-inline-block mb-2">
              <Text appearance="default">rounded-2-5</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              rounded-2-5
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border rounded-05 bg-secondary-lightest p-8 d-inline-block mb-2">
              <Text appearance="default">rounded-05</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              rounded-05
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border rounded-10 bg-secondary-lightest p-8 d-inline-block mb-2">
              <Text appearance="default">rounded-10</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              rounded-10
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border rounded-15 bg-secondary-lightest p-8 d-inline-block mb-2">
              <Text appearance="default">rounded-15</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              rounded-15
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border rounded-20 bg-secondary-lightest p-8 d-inline-block mb-2">
              <Text appearance="default">rounded-20</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              rounded-20
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border rounded-30 bg-secondary-lightest p-8 d-inline-block mb-2">
              <Text appearance="default">rounded-30</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              rounded-30
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border rounded-40 bg-secondary-lightest p-8 d-inline-block mb-2">
              <Text appearance="default">rounded-40</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              rounded-40
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mb-4">
            <div className="border rounded-full bg-secondary-lightest p-8 d-inline-block mb-2">
              <Text appearance="default">rounded-full</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              rounded-full
            </Text>
          </div>
        </div>
        <div className="mb-8 bg-secondary-lightest p-3 rounded-10">
          <pre className="m-0">
            <code>
              {`<div className="border rounded-2-5 bg-secondary-lightest p-8 d-inline-block">
  <Text appearance="default">rounded-2-5</Text>
</div>
<div className="border rounded-05 bg-secondary-lightest p-8 d-inline-block">
  <Text appearance="default">rounded-05</Text>
</div>
<div className="border rounded-10 bg-secondary-lightest p-8 d-inline-block">
  <Text appearance="default">rounded-10</Text>
</div>
<div className="border rounded-15 bg-secondary-lightest p-8 d-inline-block">
  <Text appearance="default">rounded-15</Text>
</div>
<div className="border rounded-20 bg-secondary-lightest p-8 d-inline-block">
  <Text appearance="default">rounded-20</Text>
</div>
<div className="border rounded-30 bg-secondary-lightest p-8 d-inline-block">
  <Text appearance="default">rounded-30</Text>
</div>
<div className="border rounded-40 bg-secondary-lightest p-8 d-inline-block">
  <Text appearance="default">rounded-40</Text>
</div>
<div className="border rounded-full bg-secondary-lightest p-8 d-inline-block">
  <Text appearance="default">rounded-full</Text>
</div>`}
            </code>
          </pre>
        </div>
        <Text appearance="subtle" className="mb-2">
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
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border border-primary bg-white p-8 d-inline-block mb-2">
              <Text appearance="default">border-primary</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              border-primary
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border border-secondary bg-white p-8 d-inline-block mb-2">
              <Text appearance="default">border-secondary</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              border-secondary
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border border-success bg-white p-8 d-inline-block mb-2">
              <Text appearance="default">border-success</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              border-success
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border border-warning bg-white p-8 d-inline-block mb-2">
              <Text appearance="default">border-warning</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              border-warning
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border border-alert bg-white p-8 d-inline-block mb-2">
              <Text appearance="default">border-alert</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              border-alert
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border border-accent-1 bg-white p-8 d-inline-block mb-2">
              <Text appearance="default">border-accent-1</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              border-accent-1
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border border-accent-2 bg-white p-8 d-inline-block mb-2">
              <Text appearance="default">border-accent-2</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              border-accent-2
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border border-accent-3 bg-white p-8 d-inline-block mb-2">
              <Text appearance="default">border-accent-3</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              border-accent-3
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border border-accent-4 bg-white p-8 d-inline-block mb-2">
              <Text appearance="default">border-accent-4</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              border-accent-4
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border border-inverse bg-white p-8 d-inline-block mb-2">
              <Text appearance="default">border-inverse</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              border-inverse
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mb-4">
            <div className="border border-white bg-secondary-lightest p-8 d-inline-block mb-2">
              <Text appearance="default">border-white</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              border-white
            </Text>
          </div>
        </div>
        <div className="mb-8 bg-secondary-lightest p-3 rounded-10">
          <pre className="m-0">
            <code>
              {`<div className="border border-primary bg-white p-8 d-inline-block">
  <Text appearance="default">border-primary</Text>
</div>
<div className="border border-secondary bg-white p-8 d-inline-block">
  <Text appearance="default">border-secondary</Text>
</div>
<div className="border border-success bg-white p-8 d-inline-block">
  <Text appearance="default">border-success</Text>
</div>
<div className="border border-warning bg-white p-8 d-inline-block">
  <Text appearance="default">border-warning</Text>
</div>
<div className="border border-alert bg-white p-8 d-inline-block">
  <Text appearance="default">border-alert</Text>
</div>
<div className="border border-accent-1 bg-white p-8 d-inline-block">
  <Text appearance="default">border-accent-1</Text>
</div>
<div className="border border-accent-2 bg-white p-8 d-inline-block">
  <Text appearance="default">border-accent-2</Text>
</div>
<div className="border border-accent-3 bg-white p-8 d-inline-block">
  <Text appearance="default">border-accent-3</Text>
</div>
<div className="border border-accent-4 bg-white p-8 d-inline-block">
  <Text appearance="default">border-accent-4</Text>
</div>
<div className="border border-inverse bg-white p-8 d-inline-block">
  <Text appearance="default">border-inverse</Text>
</div>
<div className="border border-white bg-secondary-lightest p-8 d-inline-block">
  <Text appearance="default">border-white</Text>
</div>`}
            </code>
          </pre>
        </div>
        <Text appearance="subtle" className="mb-2">
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
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border border-solid bg-secondary-lightest p-8 d-inline-block mb-2">
              <Text appearance="default">border-solid</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              border-solid
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border border-dashed bg-secondary-lightest p-8 d-inline-block mb-2">
              <Text appearance="default">border-dashed</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              border-dashed
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border border-dotted bg-secondary-lightest p-8 d-inline-block mb-2">
              <Text appearance="default">border-dotted</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              border-dotted
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border border-inset bg-secondary-lightest p-8 d-inline-block mb-2">
              <Text appearance="default">border-inset</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              border-inset
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border border-outset bg-secondary-lightest p-8 d-inline-block mb-2">
              <Text appearance="default">border-outset</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              border-outset
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mb-4">
            <div className="border border-none bg-secondary-lightest p-8 d-inline-block mb-2">
              <Text appearance="default">border-none</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              border-none
            </Text>
          </div>
        </div>
        <div className="mb-8 bg-secondary-lightest p-3 rounded-10">
          <pre className="m-0">
            <code>
              {`<div className="border border-solid bg-secondary-lightest p-8 d-inline-block">
  <Text appearance="default">border-solid</Text>
</div>
<div className="border border-dashed bg-secondary-lightest p-8 d-inline-block">
  <Text appearance="default">border-dashed</Text>
</div>
<div className="border border-dotted bg-secondary-lightest p-8 d-inline-block">
  <Text appearance="default">border-dotted</Text>
</div>
<div className="border border-inset bg-secondary-lightest p-8 d-inline-block">
  <Text appearance="default">border-inset</Text>
</div>
<div className="border border-outset bg-secondary-lightest p-8 d-inline-block">
  <Text appearance="default">border-outset</Text>
</div>
<div className="border border-none bg-secondary-lightest p-8 d-inline-block">
  <Text appearance="default">border-none</Text>
</div>`}
            </code>
          </pre>
        </div>
        <Text appearance="subtle" className="mb-2">
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
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border rounded-top-left-20 bg-secondary-lightest p-8 d-inline-block mb-2">
              <Text appearance="default">top-left-20</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              rounded-top-left-20
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border rounded-top-right-20 bg-secondary-lightest p-8 d-inline-block mb-2">
              <Text appearance="default">top-right-20</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              rounded-top-right-20
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mr-6 mb-4">
            <div className="border rounded-bottom-left-20 bg-secondary-lightest p-8 d-inline-block mb-2">
              <Text appearance="default">bottom-left-20</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              rounded-bottom-left-20
            </Text>
          </div>
          <div className="d-flex flex-column align-items-center mb-4">
            <div className="border rounded-bottom-right-20 bg-secondary-lightest p-8 d-inline-block mb-2">
              <Text appearance="default">bottom-right-20</Text>
            </div>
            <Text appearance="subtle" size="small" className="color-inverse">
              rounded-bottom-right-20
            </Text>
          </div>
        </div>
        <div className="mb-8 bg-secondary-lightest p-3 rounded-10">
          <pre className="m-0">
            <code>
              {`<div className="border rounded-top-left-20 bg-secondary-lightest p-8 d-inline-block">
  <Text appearance="default">top-left-20</Text>
</div>
<div className="border rounded-top-right-20 bg-secondary-lightest p-8 d-inline-block">
  <Text appearance="default">top-right-20</Text>
</div>
<div className="border rounded-bottom-left-20 bg-secondary-lightest p-8 d-inline-block">
  <Text appearance="default">bottom-left-20</Text>
</div>
<div className="border rounded-bottom-right-20 bg-secondary-lightest p-8 d-inline-block">
  <Text appearance="default">bottom-right-20</Text>
</div>`}
            </code>
          </pre>
        </div>
        <Text appearance="subtle" className="mb-2">
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
