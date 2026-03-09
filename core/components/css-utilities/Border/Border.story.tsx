import * as React from 'react';
import { Heading, Paragraph, Card, Table, Text } from '@/index';
import utilitiesSchema from '../Schema';

export const border = () => {
  const borderData = [
    { className: 'border', properties: 'border: var(--border);' },
    { className: 'border-top', properties: 'border-top: var(--border);' },
    { className: 'border-bottom', properties: 'border-bottom: var(--border);' },
    { className: 'border-right', properties: 'border-right: var(--border);' },
    { className: 'border-left', properties: 'border-left: var(--border);' },
    { className: 'border-0', properties: 'border: 0;' },
    { className: 'border-top-0', properties: 'border-top: 0;' },
    { className: 'border-bottom-0', properties: 'border-bottom: 0;' },
    { className: 'border-right-0', properties: 'border-right: 0;' },
    { className: 'border-left-0', properties: 'border-left: 0;' },
    { className: 'border-2-5', properties: 'border-width: var(--border-width-2-5);' },
    { className: 'border-05', properties: 'border-width: var(--border-width-05);' },
    { className: 'border-7-5', properties: 'border-width: var(--border-width-7-5);' },
    { className: 'border-10', properties: 'border-width: var(--border-width-10);' },
    { className: 'border-solid', properties: 'border-style: solid;' },
    { className: 'border-dashed', properties: 'border-style: dashed;' },
    { className: 'border-dotted', properties: 'border-style: dotted;' },
    { className: 'border-inset', properties: 'border-style: inset;' },
    { className: 'border-outset', properties: 'border-style: outset;' },
  ];

  const borderColorData = [
    { className: 'border-primary', properties: 'border-color: var(--primary);' },
    { className: 'border-primary-light', properties: 'border-color: var(--primary-light);' },
    { className: 'border-primary-lighter', properties: 'border-color: var(--primary-lighter);' },
    { className: 'border-primary-lightest', properties: 'border-color: var(--primary-lightest);' },
    { className: 'border-secondary', properties: 'border-color: var(--secondary);' },
    { className: 'border-secondary-light', properties: 'border-color: var(--secondary-light);' },
    { className: 'border-secondary-lighter', properties: 'border-color: var(--secondary-lighter);' },
    { className: 'border-secondary-lightest', properties: 'border-color: var(--secondary-lightest);' },
    { className: 'border-success', properties: 'border-color: var(--success);' },
    { className: 'border-success-light', properties: 'border-color: var(--success-light);' },
    { className: 'border-success-lighter', properties: 'border-color: var(--success-lighter);' },
    { className: 'border-success-lightest', properties: 'border-color: var(--success-lightest);' },
    { className: 'border-alert', properties: 'border-color: var(--alert);' },
    { className: 'border-alert-light', properties: 'border-color: var(--alert-light);' },
    { className: 'border-alert-lighter', properties: 'border-color: var(--alert-lighter);' },
    { className: 'border-alert-lightest', properties: 'border-color: var(--alert-lightest);' },
    { className: 'border-warning', properties: 'border-color: var(--warning);' },
    { className: 'border-warning-light', properties: 'border-color: var(--warning-light);' },
    { className: 'border-warning-lighter', properties: 'border-color: var(--warning-lighter);' },
    { className: 'border-warning-lightest', properties: 'border-color: var(--warning-lightest);' },
    { className: 'border-accent-1', properties: 'border-color: var(--accent1);' },
    { className: 'border-accent-1-light', properties: 'border-color: var(--accent1-light);' },
    { className: 'border-accent-1-lighter', properties: 'border-color: var(--accent1-lighter);' },
    { className: 'border-accent-1-lightest', properties: 'border-color: var(--accent1-lightest);' },
    { className: 'border-accent-2', properties: 'border-color: var(--accent2);' },
    { className: 'border-accent-2-light', properties: 'border-color: var(--accent2-light);' },
    { className: 'border-accent-2-lighter', properties: 'border-color: var(--accent2-lighter);' },
    { className: 'border-accent-2-lightest', properties: 'border-color: var(--accent2-lightest);' },
    { className: 'border-accent-3', properties: 'border-color: var(--accent3);' },
    { className: 'border-accent-3-light', properties: 'border-color: var(--accent3-light);' },
    { className: 'border-accent-3-lighter', properties: 'border-color: var(--accent3-lighter);' },
    { className: 'border-accent-3-lightest', properties: 'border-color: var(--accent3-lightest);' },
    { className: 'border-accent-4', properties: 'border-color: var(--accent4);' },
    { className: 'border-accent-4-light', properties: 'border-color: var(--accent4-light);' },
    { className: 'border-accent-4-lighter', properties: 'border-color: var(--accent4-lighter);' },
    { className: 'border-accent-4-lightest', properties: 'border-color: var(--accent4-lightest);' },
    { className: 'border-inverse', properties: 'border-color: var(--inverse);' },
    { className: 'border-inverse-light', properties: 'border-color: var(--inverse-light);' },
    { className: 'border-inverse-lighter', properties: 'border-color: var(--inverse-lighter);' },
    { className: 'border-inverse-lightest', properties: 'border-color: var(--inverse-lightest);' },
  ];

  const radiusData = [
    { className: 'rounded-2-5', properties: 'border-radius: var(--border-radius-2-5);' },
    { className: 'rounded-05', properties: 'border-radius: var(--border-radius-05);' },
    { className: 'rounded-10', properties: 'border-radius: var(--border-radius-10);' },
    { className: 'rounded-15', properties: 'border-radius: var(--border-radius-15);' },
    { className: 'rounded-20', properties: 'border-radius: var(--border-radius-20);' },
    { className: 'rounded-30', properties: 'border-radius: var(--border-radius-30);' },
    { className: 'rounded-40', properties: 'border-radius: var(--border-radius-40);' },
    { className: 'rounded-full', properties: 'border-radius: var(--border-radius-full);' },
  ];

  return (
    <div>
      <Heading size="xxl">Border</Heading>
      <br />
      <Text weight="strong">Use border utilities to add, remove, style, and color borders consistently.</Text>

      <Heading size="m" className="mt-6">
        Border & Border Width
      </Heading>
      <div style={{ height: '300px' }} className="mt-5 mb-8">
        <Card className="h-100">
          <Table
            data={borderData}
            schema={utilitiesSchema}
            size="standard"
            headerOptions={{ withSearch: true }}
            showMenu={false}
          />
        </Card>
      </div>

      <Heading size="m">Border Colors</Heading>
      <div style={{ height: '300px' }} className="mt-5 mb-8">
        <Card className="h-100">
          <Table
            data={borderColorData}
            schema={utilitiesSchema}
            size="standard"
            headerOptions={{ withSearch: true }}
            showMenu={false}
          />
        </Card>
      </div>

      <Heading size="m">Border Radius</Heading>
      <div style={{ height: '250px' }} className="mt-5 mb-8">
        <Card className="h-100">
          <Table
            data={radiusData}
            schema={utilitiesSchema}
            size="standard"
            headerOptions={{ withSearch: true }}
            showMenu={false}
          />
        </Card>
      </div>

      <Heading size="m">Examples</Heading>
      <Paragraph>Representative examples of the newly introduced token-backed classes:</Paragraph>
      <div className="d-flex gap-20 mb-5 mt-5">
        <div className="border border-10 border-primary-lightest rounded-20 p-6 bg-secondary-lightest">
          border-10 + color + radius
        </div>
        <div className="border border-7-5 border-accent-2-light border-dashed rounded-30 p-6 bg-accent2-lightest">
          accent + dashed
        </div>
      </div>
      <div className="DocPage-codeBlock pb-5 pt-5 pl-5">
        <code>
          {'<div className="border border-10 border-primary-lightest rounded-20 p-6 bg-secondary-lightest">...</div>'}
          <br />
          {
            '<div className="border border-7-5 border-accent-2-light border-dashed rounded-30 p-6 bg-accent2-lightest">...</div>'
          }
        </code>
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
