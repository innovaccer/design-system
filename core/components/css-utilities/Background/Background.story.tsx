import * as React from 'react';
import { Heading, Card, Table, Text } from '@/index';
import utilitiesSchema from '../Schema';
import Paragraph from '@/components/atoms/paragraph';

export const background = () => {
  const data = [
    {
      className: 'bg-primary',
      properties: 'background-color: var(--primary);',
    },
    {
      className: 'bg-secondary',
      properties: 'background-color: var(--secondary);',
    },
    {
      className: 'bg-secondary-lighter',
      properties: 'background-color: var(--secondary-lighter);',
    },
    {
      className: 'bg-secondary-lightest',
      properties: 'background-color: var(--secondary-lightest);',
    },
    {
      className: 'bg-success',
      properties: 'background-color: var(--success);',
    },
    {
      className: 'bg-warning',
      properties: 'background-color: var(--warning);',
    },
    {
      className: 'bg-danger',
      properties: 'background-color: var(--alert);',
    },
    {
      className: 'bg-light',
      properties: 'background-color: var(--white);',
    },
    {
      className: 'bg-dark',
      properties: 'background-color: var(--inverse);',
    },
    {
      className: 'bg-transparent',
      properties: 'background-color: transparent;',
    },
  ];

  return (
    <div>
      <Heading size="xxl">Background color</Heading>
      <br />
      <Text weight="strong">Easily set the background of an element to any contextual class</Text>
      <div
        style={{
          height: '250px',
        }}
        className="mt-5 mb-8"
      >
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
      <div className="p-7 mb-4 bg-primary">.bg-primary</div>
      <div className="p-7 mb-4 bg-secondary">.bg-secondary</div>
      <div className="p-7 mb-4 bg-secondary-lighter">.bg-secondary-lighter</div>
      <div className="p-7 mb-4 bg-secondary-lightest">.bg-secondary-lightest</div>
      <div className="p-7 mb-4 bg-success ">.bg-success</div>
      <div className="p-7 mb-4 bg-danger ">.bg-danger</div>
      <div className="p-7 mb-4 bg-warning text-dark">.bg-warning</div>
      <div className="p-7 mb-4 bg-light text-dark">.bg-light</div>
      <div className="p-7 mb-4 bg-transparent text-dark">.bg-transparent</div>
      <div className="p-7 mb-4 bg-dark Utilities-text--color">.bg-dark</div>
      &nbsp;
      <div className="DocPage-codeBlock pb-5 pt-5 pl-5">
        {'<div className="p-7 mb-4 bg-primary" >.bg-primary </div>'}
        <br />
        {'<div className="p-7 mb-4 bg-secondary">.bg-secondary </div>'}
        <br />
        {'<div className="p-7 mb-4 bg-secondary-lighter">.bg-secondary-lighter</div>'}
        <br />
        {'<div className="p-7 mb-4 bg-secondary-lightest">.bg-secondary-lightest</div>'}
        <br />
        {'<div className="p-7 mb-4 bg-success">.bg-success </div>'}
        <br />
        {'<div className="p-7 mb-4 bg-danger">.bg-danger </div>'}
        <br />
        {'<div className="p-7 mb-4 bg-warning">.bg-warning </div>'}
        <br />
        {'<div className="p-7 mb-4 bg-light">.bg-light </div>'}
        <br />
        {'<div className="p-7 mb-4 bg-transparent">.bg-transparent </div>'}
        <br />
        {'<div className="p-7 mb-4 bg-dark">.bg-dark </div>'}
        <br />
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
