import * as React from 'react';
import { Listbox, Card, CardHeader, Heading, Text } from '@/index';
import { ListboxItem } from '../listboxItem';
import './style.css';

export const selectAndReorderList = () => {
  const [selected, setSelected] = React.useState('Functional Assessment - Initial');

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

      <Listbox type="option" aria-label="Assessment options" draggable={true}>
        {data.map((item, key) => {
          const labelId = `assessment-list-item-${key}`;
          return (
            <Listbox.Item
              key={key + 1}
              id={key + 1}
              selected={selected === item.assessment}
              onClick={() => setSelected(item.assessment)}
            >
              <div className="d-flex align-items-center w-100 justify-content-between">
                <Text id={labelId}>{item.assessment}</Text>
              </div>
            </Listbox.Item>
          );
        })}
      </Listbox>
    </Card>
  );
};

const customCode = `() => {
  const [selected, setSelected] = React.useState('Functional Assessment - Initial');

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

      <Listbox type="option" aria-label="Assessment options" draggable={true}>
        {data.map((item, key) => {
          const labelId = \`assessment-list-item-\${key}\`;
          return (
            <Listbox.Item 
              key={key + 1} 
              id={key + 1}
              selected={selected === item.assessment}
              onClick={() => setSelected(item.assessment)}
            >
              <div className="d-flex align-items-center w-100 justify-content-between">
                <Text id={labelId}>{item.assessment}</Text>
              </div>
            </Listbox.Item>
          );
        })}
      </Listbox>
    </Card>
  );
}`;

export default {
  title: 'Components/Listbox/Select And Reorder List',
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
