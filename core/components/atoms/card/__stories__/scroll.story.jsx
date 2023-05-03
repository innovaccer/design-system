import * as React from 'react';
import { Card, Text, List, CardHeader, Heading, Paragraph } from '@/index';
import { data } from './data';
import './style.css';

export const ScrollableContent = () => {
  const schema = [
    {
      width: '100%',
      name: 'data',
      displayName: '',
      cellRenderer: (props) => {
        return (
          <>
            <Paragraph>
              <Text weight="strong">{props.data.data.title}</Text>
              <br />
              <Text>{props.data.data.subTitle}</Text>
            </Paragraph>
          </>
        );
      },
    },
  ];

  return (
    <div>
      <Card className="">
        <CardHeader>
          <Heading size="s">Use a template</Heading>
        </CardHeader>
        <div className="Diagnosis-list">
          <List
            data={data}
            schema={schema}
            withHeader={true}
            headerOptions={{
              withSearch: true,
              dynamicColumn: false,
            }}
            withPagination={true}
            pageSize={5}
          />
        </div>
      </Card>
    </div>
  );
};

const customCode = `/*
// style.css
.Diagnosis-list {
    height: 70vh;
}
*/

() => {

  const data = ${JSON.stringify(data, null, 2)};

  const schema = [
    {
      width: '100%',
      name: 'data',
      displayName: '',
      cellRenderer: (props) => {
        return (
          <>
          <Paragraph>
            <Text weight="strong">
              {props.data.data.title}
            </Text>
            <br />
            <Text>
              {props.data.data.subTitle}
            </Text>

          </Paragraph>
          </>
        );
      }
    }
  ];

  return (
    <div>
      <Card className="">
        <CardHeader>
          <Heading size="s">Use a template</Heading>
        </CardHeader>
        <div className="Diagnosis-list">
          <List
            data={data}
            schema={schema}
            withHeader={true}
            headerOptions={{
              withSearch: true,
              dynamicColumn: false
            }}
            withPagination={true}
            pageSize={5}
          />
        </div>
      </Card>
    </div>
  );
};
`;

export default {
  title: 'Layout/Card/Scrollable Content',
  component: Card,
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
