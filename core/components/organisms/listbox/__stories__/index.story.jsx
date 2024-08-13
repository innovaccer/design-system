import * as React from 'react';
import { Listbox, Heading, Card, CardHeader } from '@/index';
import { ListboxItem } from '../listboxItem';

export const all = () => {
  const data = [
    {
      assessment: 'Alcohol Usage Disorders Identification Test - C (Audit C)',
    },
    {
      assessment: 'Functional Assessment - Initial',
    },
    {
      assessment: 'Functional Assessment - Discharge',
    },
    {
      assessment: 'Hypertension - Diabetes Symptoms Identification Test',
    },
    {
      assessment: 'Patient Health Question',
    },
  ];

  return (
    <Card shadow="none">
      <CardHeader>
        <Heading size="s">Select Assessment</Heading>
      </CardHeader>

      <Listbox>
        {data.map((item, key) => {
          return <Listbox.Item key={key}>{item.assessment}</Listbox.Item>;
        })}
      </Listbox>
    </Card>
  );
};

const customCode = `() => {
  const data = [
    {
      assessment: 'Alcohol Usage Disorders Identification Test - C (Audit C)',
    },
    {
      assessment: 'Functional Assessment - Initial',
    },
    {
      assessment: 'Functional Assessment - Discharge',
    },
    {
      assessment: 'Hypertension - Diabetes Symptoms Identification Test',
    },
    {
      assessment: 'Patient Health Question',
    },
  ];

  return (
    <Card shadow="none">
      <CardHeader>
        <Heading size="s">Select Assessment</Heading>
      </CardHeader>

      <Listbox>
        {data.map((item, key) => {
          return <Listbox.Item key={key}>{item.assessment}</Listbox.Item>;
        })}
      </Listbox>
    </Card>
  );
}`;

export default {
  title: 'Components/Listbox/All',
  component: Listbox,
  subcomponents: { Listbox, ListboxItem },
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Listbox',
      },
    },
  },
};
