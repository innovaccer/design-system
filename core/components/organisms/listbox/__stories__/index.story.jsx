import * as React from 'react';
import { Listbox, Heading } from '@/index';
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
    <div>
      <Heading size="s" className="mb-5">
        Select Assessment
      </Heading>
      <Listbox>
        {data.map((item, key) => {
          return <Listbox.Item key={key}>{item.assessment}</Listbox.Item>;
        })}
      </Listbox>
    </div>
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
    <div>
      <Heading size="s" className='mb-5'>Select Assessment</Heading>
      <Listbox>
        {data.map((item, key) => {
          return <Listbox.Item key={key}>{item.assessment}</Listbox.Item>;
        })}
      </Listbox>
    </div>
  );
}`;

export default {
  title: 'Layout/Listbox/All',
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
