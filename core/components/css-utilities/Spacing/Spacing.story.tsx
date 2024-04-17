import * as React from 'react';
import { Heading, Paragraph, Card, Table, Text, Row, Column } from '@/index';
import { classSchema } from './Schema';
import { sizeData, classData } from './Data';

export const spacing = () => {
  return (
    <div>
      <Heading size="xxl">Spacing</Heading>
      <br />
      <br />
      <Text weight="strong">
        The classes are named using the format (property)(sides)-(size) for xs and (property)(sides)-(breakpoint)-(size)
        for sm, md, lg, and xl.
      </Text>
      <br />
      <Paragraph>
        <br />
        <Text weight="strong">Where property is one of:</Text>
        <br />
        m - for classes that set margin
        <br />
        p - for classes that set padding
        <br />
        <br />
        <Text weight="strong">Where sides is one of:</Text>
        <br />
        t - for classes that set margin-top or padding-top
        <br />
        b - for classes that set margin-bottom or padding-bottom
        <br />
        l - for classes that set margin-left or padding-left
        <br />
        r - for classes that set margin-right or padding-right
        <br />
        x - for classes that set both *-left and *-right
        <br />
        y - for classes that set both *-top and *-bottom
        <br />
        blank - for classes that set a margin or padding on all 4 sides of the element
        <br />
        <br />
        <Text weight="strong">Where size is one of:</Text>
      </Paragraph>
      <br />
      <div className="mt-5 mb-8 bg-secondary-lightest p-3 Card w-50">
        <Row>
          <Column className="p-2">
            <Text weight="strong">Size</Text>
          </Column>
          <Column className="p-2">
            <Text weight="strong">Token</Text>
          </Column>
          <Column className="p-2">
            <Text weight="strong">Pixels</Text>
          </Column>
        </Row>
        {sizeData.map(({ value, properties, pixel }, index) => {
          return (
            <Row key={index}>
              <Column className="p-2">{value}</Column>
              <Column className="p-2">{properties}</Column>
              <Column className="p-2">{pixel}</Column>
            </Row>
          );
        })}
      </div>
      <Heading size="m">Class List</Heading>
      <div className="mt-5 mb-8">
        <Card className="h-100 overflow-hidden">
          <Table
            data={classData}
            schema={classSchema}
            separator={true}
            withHeader={true}
            headerOptions={{
              withSearch: true,
            }}
            size="tight"
            showMenu={false}
            pageSize={16}
            onSearch={(currData, searchTerm) => {
              return currData.filter((d) => d.pixel.toLowerCase().includes(searchTerm.toLowerCase()));
            }}
          />
        </Card>
      </div>
      <Heading size="m">Examples</Heading>
      <Paragraph>Here are some representative examples of these classes:</Paragraph>
      &nbsp;
      <div className="w-50 bg-secondary p-10 m-10">
        This text is the content of the box. We have added a (p-10) padding, (m-10) margin to it.
      </div>
      <div className="DocPage-codeBlock pt-5 pb-5 pl-5">
        {'<div className="w-50 bg-secondary p-10 m-10 ">'}
        <br />
        {'This text is the content of the box.'}
        {'We have added a (p-10) padding, (m-10) margin to it.'}
        <br />
        {'</div>'}
      </div>
      &nbsp;
    </div>
  );
};

export default {
  title: 'Styling/Helper Classes/Spacing',
  component: spacing,
  parameters: {
    viewMode: 'story',
    docs: {
      page: null,
      docPage: null,
    },
  },
};
