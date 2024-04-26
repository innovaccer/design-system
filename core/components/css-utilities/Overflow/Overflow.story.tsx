import * as React from 'react';
import { Heading, Paragraph, Card, Table, Text } from '@/index';
import utilitiesSchema from '../Schema';

export const overflow = () => {
  const data = [
    {
      className: 'overflow-auto',
      properties: 'overflow: auto !important;',
    },
    {
      className: 'overflow-hidden',
      properties: 'overflow: hidden !important;',
    },
  ];
  return (
    <div>
      <Heading size="xxl">Overflow</Heading>
      <br />
      <Text weight="strong">
        The CSS overflow property controls what happens to content that is too big to fit into an area.
      </Text>
      <div className="mb-8 mt-5">
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
      <Heading size="s">The auto value adds scrollbars when necessary:</Heading>
      <br />
      <div className="overflow-auto Utilities-overflow">
        You can use the overflow property when you want to have better control of the layout. The overflow property
        specifies what happens if content overflows an element's box.
      </div>
      &nbsp;
      <div className="DocPage-codeBlock">
        {'<div className="overflow-auto overflow">'}
        <br />
        {
          'You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an element box.'
        }
        <br />
        {'</div>'}
      </div>
      &nbsp;
      <Heading size="s">With the hidden value, the overflow is clipped, and the rest of the content is hidden</Heading>
      <br />
      <div className="overflow-hidden Utilities-overflow">
        You can use the overflow property when you want to have better control of the layout. The overflow property
        specifies what happens if content overflows an element's box.
      </div>
      &nbsp;
      <div className="DocPage-codeBlock">
        {'<div className="overflow-hidden overflow">'}
        <br />
        {
          'You can use the overflow property when you want to have better control of the layout. The overflow property specifies what happens if content overflows an elements box.'
        }
        <br />
        {'</div>'}
      </div>
    </div>
  );
};

export default {
  title: 'Styling/Helper Classes/Overflow',
  component: overflow,
  parameters: {
    viewMode: 'story',
    docs: {
      page: null,
      docPage: null,
    },
  },
};
