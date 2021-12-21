import * as React from 'react';
import { Heading, Card, Table, Text } from '@/index';
import utilitiesSchema from '../Schema';

export const animation = () => {
  const data = [
    {
      className: 'fade-in',
      properties: 'animation: fadeIn 120ms cubic-bezier(0.2, 0, 0.38, 0.9);',
    },
    {
      className: 'fade-out',
      properties: 'animation: fadeOut 120ms cubic-bezier(0.4, 0.14, 0.3, 1);',
    },
  ];

  return (
    <div>
      <Heading size="xxl">Animation</Heading>
      <br />
      <Text weight="strong">Easily set the animation using below classes</Text>
      <div className="mt-5 mb-8">
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
    </div>
  );
};

export default {
  title: 'Others/Styles/Animation',
  component: animation,
  parameters: {
    viewMode: 'story',
    docs: {
      page: null,
      docPage: null,
    },
  },
};
