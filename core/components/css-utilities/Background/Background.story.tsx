import * as React from 'react';
import { Heading, Card, Table, Text } from '@/index';
import utilitiesSchema from '../Schema';
import Paragraph from '@/components/atoms/paragraph';

export const background = () => {
  const data = [
    { className: 'bg-primary', properties: 'background-color: var(--primary);' },
    { className: 'bg-primary-light', properties: 'background-color: var(--primary-light);' },
    { className: 'bg-primary-lighter', properties: 'background-color: var(--primary-lighter);' },
    { className: 'bg-primary-lightest', properties: 'background-color: var(--primary-lightest);' },
    { className: 'bg-secondary', properties: 'background-color: var(--secondary);' },
    { className: 'bg-secondary-light', properties: 'background-color: var(--secondary-light);' },
    { className: 'bg-secondary-lighter', properties: 'background-color: var(--secondary-lighter);' },
    { className: 'bg-secondary-lightest', properties: 'background-color: var(--secondary-lightest);' },
    { className: 'bg-success', properties: 'background-color: var(--success);' },
    { className: 'bg-success-light', properties: 'background-color: var(--success-light);' },
    { className: 'bg-success-lighter', properties: 'background-color: var(--success-lighter);' },
    { className: 'bg-success-lightest', properties: 'background-color: var(--success-lightest);' },
    { className: 'bg-warning', properties: 'background-color: var(--warning);' },
    { className: 'bg-warning-light', properties: 'background-color: var(--warning-light);' },
    { className: 'bg-warning-lighter', properties: 'background-color: var(--warning-lighter);' },
    { className: 'bg-warning-lightest', properties: 'background-color: var(--warning-lightest);' },
    { className: 'bg-danger', properties: 'background-color: var(--alert);' },
    { className: 'bg-alert', properties: 'background-color: var(--alert);' },
    { className: 'bg-alert-light', properties: 'background-color: var(--alert-light);' },
    { className: 'bg-alert-lighter', properties: 'background-color: var(--alert-lighter);' },
    { className: 'bg-alert-lightest', properties: 'background-color: var(--alert-lightest);' },
    { className: 'bg-accent1', properties: 'background-color: var(--accent1);' },
    { className: 'bg-accent1-light', properties: 'background-color: var(--accent1-light);' },
    { className: 'bg-accent1-lighter', properties: 'background-color: var(--accent1-lighter);' },
    { className: 'bg-accent1-lightest', properties: 'background-color: var(--accent1-lightest);' },
    { className: 'bg-accent2', properties: 'background-color: var(--accent2);' },
    { className: 'bg-accent2-light', properties: 'background-color: var(--accent2-light);' },
    { className: 'bg-accent2-lighter', properties: 'background-color: var(--accent2-lighter);' },
    { className: 'bg-accent2-lightest', properties: 'background-color: var(--accent2-lightest);' },
    { className: 'bg-accent3', properties: 'background-color: var(--accent3);' },
    { className: 'bg-accent3-light', properties: 'background-color: var(--accent3-light);' },
    { className: 'bg-accent3-lighter', properties: 'background-color: var(--accent3-lighter);' },
    { className: 'bg-accent3-lightest', properties: 'background-color: var(--accent3-lightest);' },
    { className: 'bg-accent4', properties: 'background-color: var(--accent4);' },
    { className: 'bg-accent4-light', properties: 'background-color: var(--accent4-light);' },
    { className: 'bg-accent4-lighter', properties: 'background-color: var(--accent4-lighter);' },
    { className: 'bg-accent4-lightest', properties: 'background-color: var(--accent4-lightest);' },
    { className: 'bg-dark', properties: 'background-color: var(--inverse);' },
    { className: 'bg-inverse-light', properties: 'background-color: var(--inverse-light);' },
    { className: 'bg-inverse-lighter', properties: 'background-color: var(--inverse-lighter);' },
    { className: 'bg-inverse-lightest', properties: 'background-color: var(--inverse-lightest);' },
    { className: 'bg-light', properties: 'background-color: var(--white);' },
    { className: 'bg-transparent', properties: 'background-color: transparent;' },
  ];

  return (
    <div>
      <Heading size="xxl">Background color</Heading>
      <br />
      <Text weight="strong">Easily set the background of an element to any contextual class.</Text>
      <div style={{ height: '300px' }} className="mt-5 mb-8">
        <Card className="h-100">
          <Table
            data={data}
            schema={utilitiesSchema}
            headerOptions={{ withSearch: true }}
            size="standard"
            showMenu={false}
          />
        </Card>
      </div>
      <Heading size="m">Examples</Heading>
      <Paragraph>Representative examples of the most common utility classes:</Paragraph>
      <div className="p-7 mb-4 bg-primary">.bg-primary</div>
      <div className="p-7 mb-4 bg-secondary-lightest">.bg-secondary-lightest</div>
      <div className="p-7 mb-4 bg-success-lightest">.bg-success-lightest</div>
      <div className="p-7 mb-4 bg-alert-lightest">.bg-alert-lightest</div>
      <div className="p-7 mb-4 bg-accent2-lightest">.bg-accent2-lightest</div>
      <div className="p-7 mb-4 bg-inverse-lightest">.bg-inverse-lightest</div>
      <div className="DocPage-codeBlock pb-5 pt-5 pl-5">
        <code>
          {'<div className="p-7 mb-4 bg-primary">.bg-primary</div>'}
          <br />
          {'<div className="p-7 mb-4 bg-secondary-lightest">.bg-secondary-lightest</div>'}
          <br />
          {'<div className="p-7 mb-4 bg-success-lightest">.bg-success-lightest</div>'}
          <br />
          {'<div className="p-7 mb-4 bg-alert-lightest">.bg-alert-lightest</div>'}
          <br />
          {'<div className="p-7 mb-4 bg-accent2-lightest">.bg-accent2-lightest</div>'}
          <br />
          {'<div className="p-7 mb-4 bg-inverse-lightest">.bg-inverse-lightest</div>'}
        </code>
      </div>
    </div>
  );
};

export default {
  title: 'Styling/Helper Classes/Background',
  component: background,
  parameters: {
    viewMode: 'story',
    docs: {
      page: null,
      docPage: null,
    },
  },
};
