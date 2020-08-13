import * as React from 'react';
import { Heading, Paragraph, Card, Table, Text } from '@/index';
import utilitiesSchema from './Schema';

export const spacing = () => {
  const data = [
    {
      marginClasses: 'm-0',
      paddingClasses: 'p-0'
    },
    {
      marginClasses: 'm-1',
      paddingClasses: 'p-1'
    },
    {
      marginClasses: 'm-2',
      paddingClasses: 'p-2'
    },
    {
      marginClasses: 'm-3',
      paddingClasses: 'p-3'
    },
    {
      marginClasses: 'm-4',
      paddingClasses: 'p-4'
    },
    {
      marginClasses: 'm-5',
      paddingClasses: 'p-5'
    },
    {
      marginClasses: 'm-6',
      paddingClasses: 'p-6'
    },
    {
      marginClasses: 'm-7',
      paddingClasses: 'p-7'
    },
    {
      marginClasses: 'm-8',
      paddingClasses: 'p-8'
    },
    {
      marginClasses: 'm-9',
      paddingClasses: 'p-9'
    },
    {
      marginClasses: 'm-10',
      paddingClasses: 'p-10'
    },
    {
      marginClasses: 'm-11',
      paddingClasses: 'p-11'
    },
    {
      marginClasses: 'm-12',
      paddingClasses: 'p-12'
    },
    {
      marginClasses: 'm-13',
      paddingClasses: 'p-13'
    },
    {
      marginClasses: 'm-14',
      paddingClasses: 'p-14'
    },
    {
      marginClasses: 'm-auto',
      paddingClasses: 'p-auto'
    },
    {
      marginClasses: 'mx-0',
      paddingClasses: 'px-0'
    },
    {
      marginClasses: 'mx-1',
      paddingClasses: 'px-1'
    },
    {
      marginClasses: 'mx-2',
      paddingClasses: 'px-2'
    },
    {
      marginClasses: 'mx-3',
      paddingClasses: 'px-3'
    },
    {
      marginClasses: 'mx-4',
      paddingClasses: 'px-4'
    },
    {
      marginClasses: 'mx-5',
      paddingClasses: 'px-5'
    },
    {
      marginClasses: 'mx-6',
      paddingClasses: 'px-6'
    },
    {
      marginClasses: 'mx-7',
      paddingClasses: 'px-7'
    },
    {
      marginClasses: 'mx-8',
      paddingClasses: 'px-8'
    },
    {
      marginClasses: 'mx-9',
      paddingClasses: 'px-9'
    },
    {
      marginClasses: 'mx-10',
      paddingClasses: 'px-10'
    },
    {
      marginClasses: 'mx-11',
      paddingClasses: 'px-11'
    },
    {
      marginClasses: 'mx-12',
      paddingClasses: 'px-12'
    },
    {
      marginClasses: 'mx-13',
      paddingClasses: 'px-13'
    },
    {
      marginClasses: 'mx-14',
      paddingClasses: 'px-14'
    },
    {
      marginClasses: 'mx-auto',
      paddingClasses: 'px-auto'
    },
    {
      marginClasses: 'my-0',
      paddingClasses: 'py-0'
    },
    {
      marginClasses: 'my-1',
      paddingClasses: 'py-1'
    },
    {
      marginClasses: 'my-2',
      paddingClasses: 'py-2'
    },
    {
      marginClasses: 'my-3',
      paddingClasses: 'py-3'
    },
    {
      marginClasses: 'my-4',
      paddingClasses: 'py-4'
    },
    {
      marginClasses: 'my-5',
      paddingClasses: 'py-5'
    },
    {
      marginClasses: 'my-6',
      paddingClasses: 'py-6'
    },
    {
      marginClasses: 'my-7',
      paddingClasses: 'py-7'
    },
    {
      marginClasses: 'my-8',
      paddingClasses: 'py-8'
    },
    {
      marginClasses: 'my-9',
      paddingClasses: 'py-9'
    },
    {
      marginClasses: 'my-10',
      paddingClasses: 'py-10'
    },
    {
      marginClasses: 'my-11',
      paddingClasses: 'py-11'
    },
    {
      marginClasses: 'my-12',
      paddingClasses: 'py-12'
    },
    {
      marginClasses: 'my-13',
      paddingClasses: 'py-13'
    },
    {
      marginClasses: 'my-14',
      paddingClasses: 'py-14'
    },
    {
      marginClasses: 'my-auto',
      paddingClasses: 'py-auto'
    },
    {
      marginClasses: 'mt-0',
      paddingClasses: 'pt-0'
    },
    {
      marginClasses: 'mt-1',
      paddingClasses: 'pt-1'
    },
    {
      marginClasses: 'mt-2',
      paddingClasses: 'pt-2'
    },
    {
      marginClasses: 'mt-3',
      paddingClasses: 'pt-3'
    },
    {
      marginClasses: 'mt-4',
      paddingClasses: 'pt-4'
    },
    {
      marginClasses: 'mt-5',
      paddingClasses: 'pt-5'
    },
    {
      marginClasses: 'mt-6',
      paddingClasses: 'pt-6'
    },
    {
      marginClasses: 'mt-7',
      paddingClasses: 'pt-7'
    },
    {
      marginClasses: 'mt-8',
      paddingClasses: 'pt-8'
    },
    {
      marginClasses: 'mt-9',
      paddingClasses: 'pt-9'
    },
    {
      marginClasses: 'mt-10',
      paddingClasses: 'pt-10'
    },
    {
      marginClasses: 'mt-11',
      paddingClasses: 'pt-11'
    },
    {
      marginClasses: 'mt-12',
      paddingClasses: 'pt-12'
    },
    {
      marginClasses: 'mt-13',
      paddingClasses: 'pt-13'
    },
    {
      marginClasses: 'mt-14',
      paddingClasses: 'pt-14'
    },
    {
      marginClasses: 'mt-auto',
      paddingClasses: 'pt-auto'
    },
    {
      marginClasses: 'mb-0',
      paddingClasses: 'pb-0'
    },
    {
      marginClasses: 'mb-1',
      paddingClasses: 'pb-1'
    },
    {
      marginClasses: 'mb-2',
      paddingClasses: 'pb-2'
    },
    {
      marginClasses: 'mb-3',
      paddingClasses: 'pb-3'
    },
    {
      marginClasses: 'mb-4',
      paddingClasses: 'pb-4'
    },
    {
      marginClasses: 'mb-5',
      paddingClasses: 'pb-5'
    },
    {
      marginClasses: 'mb-6',
      paddingClasses: 'pb-6'
    },
    {
      marginClasses: 'mb-7',
      paddingClasses: 'pb-7'
    },
    {
      marginClasses: 'mb-8',
      paddingClasses: 'pb-8'
    },
    {
      marginClasses: 'mb-9',
      paddingClasses: 'pb-9'
    },
    {
      marginClasses: 'mb-10',
      paddingClasses: 'pb-10'
    },
    {
      marginClasses: 'mb-11',
      paddingClasses: 'pb-11'
    },
    {
      marginClasses: 'mb-12',
      paddingClasses: 'pb-12'
    },
    {
      marginClasses: 'mb-13',
      paddingClasses: 'pb-13'
    },
    {
      marginClasses: 'mb-14',
      paddingClasses: 'pb-14'
    },
    {
      marginClasses: 'mb-auto',
      paddingClasses: 'pb-auto'
    },
    {
      marginClasses: 'mr-0',
      paddingClasses: 'pr-0'
    },
    {
      marginClasses: 'mr-1',
      paddingClasses: 'pr-1'
    },
    {
      marginClasses: 'mr-2',
      paddingClasses: 'pr-2'
    },
    {
      marginClasses: 'mr-3',
      paddingClasses: 'pr-3'
    },
    {
      marginClasses: 'mr-4',
      paddingClasses: 'pr-4'
    },
    {
      marginClasses: 'mr-5',
      paddingClasses: 'pr-5'
    },
    {
      marginClasses: 'mr-6',
      paddingClasses: 'pr-6'
    },
    {
      marginClasses: 'mr-7',
      paddingClasses: 'pr-7'
    },
    {
      marginClasses: 'mr-8',
      paddingClasses: 'pr-8'
    },
    {
      marginClasses: 'mr-9',
      paddingClasses: 'pr-9'
    },
    {
      marginClasses: 'mr-10',
      paddingClasses: 'pr-10'
    },
    {
      marginClasses: 'mr-11',
      paddingClasses: 'pr-11'
    },
    {
      marginClasses: 'mr-12',
      paddingClasses: 'pr-12'
    },
    {
      marginClasses: 'mr-13',
      paddingClasses: 'pr-13'
    },
    {
      marginClasses: 'mr-14',
      paddingClasses: 'pr-14'
    },
    {
      marginClasses: 'mr-auto',
      paddingClasses: 'pr-auto'
    },
    {
      marginClasses: 'ml-0',
      paddingClasses: 'pl-0'
    },
    {
      marginClasses: 'ml-1',
      paddingClasses: 'pl-1'
    },
    {
      marginClasses: 'ml-2',
      paddingClasses: 'pl-2'
    },
    {
      marginClasses: 'ml-3',
      paddingClasses: 'pl-3'
    },
    {
      marginClasses: 'ml-4',
      paddingClasses: 'pl-4'
    },
    {
      marginClasses: 'ml-5',
      paddingClasses: 'pl-5'
    },
    {
      marginClasses: 'ml-6',
      paddingClasses: 'pl-6'
    },
    {
      marginClasses: 'ml-7',
      paddingClasses: 'pl-7'
    },
    {
      marginClasses: 'ml-8',
      paddingClasses: 'pl-8'
    },
    {
      marginClasses: 'ml-9',
      paddingClasses: 'pl-9'
    },
    {
      marginClasses: 'ml-10',
      paddingClasses: 'pl-10'
    },
    {
      marginClasses: 'ml-11',
      paddingClasses: 'pl-11'
    },
    {
      marginClasses: 'ml-12',
      paddingClasses: 'pl-12'
    },
    {
      marginClasses: 'ml-13',
      paddingClasses: 'pl-13'
    },
    {
      marginClasses: 'ml-14',
      paddingClasses: 'pl-14'
    },
    {
      marginClasses: 'ml-auto',
      paddingClasses: 'pl-auto'
    }
  ];
  return (
    <div>
      <Heading size="xxl" >Spacing</Heading>< br />
      <Text weight="strong">The classes are named using the format (property)(sides)-(size) for
        xs and (property)(sides)-(breakpoint)-(size) for sm, md, lg, and xl.</Text>< br />
        &nbsp;
      <Paragraph >
        <Heading size="m">Where property is one of:</Heading>

m - for classes that set margin<br />
p - for classes that set padding<br />
Where sides is one of:<br />

t - for classes that set margin-top or padding-top<br />
b - for classes that set margin-bottom or padding-bottom<br />
l - for classes that set margin-left or padding-left<br />
r - for classes that set margin-right or padding-right<br />
x - for classes that set both *-left and *-right<br />
y - for classes that set both *-top and *-bottom<br />
blank - for classes that set a margin or padding on all 4 sides of the element</Paragraph>
     &nbsp;
      <div
        style={{
          height: '350px',
        }}
        className="mt-5 mb-8"
      >
        <Card className="h-100">
          <Table
            data={data}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true
            }}
            size={'standard'}
            showMenu={false}
          />
        </Card>
      </div>
      <Heading size="m">Examples</Heading>
      <Paragraph >Here are some representative examples of these classes:</Paragraph>
      &nbsp;
      <div className="w-50 bg-secondary p-10 m-10">This text is the content of the box. We have added a (p-10) padding,
       (m-10) margin to it.</div>
      <div className="DocPage-codeBlock pt-5 pb-5 pl-5">
        {'<div className="w-50 bg-secondary p-10 m-10 ">'}< br />
        {'This text is the content of the box.'}
        {'We have added a (p-10) padding, (m-10) margin to it.'}< br />
        {'</div>'}
      </div>
       &nbsp;
    </div>

  );
};

export default {
  title: 'Utilities',
  component: spacing,
};
