import * as React from 'react';
import { Heading, Card, Table, Text } from '@/index';
import utilitiesSchema from '../Schema';
import Paragraph from '@/components/atoms/paragraph';

export const position = () => {
  const positionData = [
    {
      className: 'position-static',
      properties: 'position: static !important;',
    },
    {
      className: 'position-relative',
      properties: 'position: relative !important;',
    },
    {
      className: 'position-absolute',
      properties: 'position: absolute !important;',
    },
    {
      className: 'position-fixed',
      properties: 'position: fixed !important;',
    },
    {
      className: 'position-sticky',
      properties: 'position: -webkit-sticky !important;\nposition: sticky !important;',
    },
  ];

  const placementData = [
    {
      className: 'top-0, top-25, top-50, top-75, top-100, top-auto',
      properties:
        'top: 0 !important;\ntop: 25% !important;\ntop: 50% !important;\ntop: 75% !important;\ntop: 100% !important;\ntop: auto !important;',
    },
    {
      className: 'right-0, right-25, right-50, right-75, right-100, right-auto',
      properties:
        'right: 0 !important;\nright: 25% !important;\nright: 50% !important;\nright: 75% !important;\nright: 100% !important;\nright: auto !important;',
    },
    {
      className: 'bottom-0, bottom-25, bottom-50, bottom-75, bottom-100, bottom-auto',
      properties:
        'bottom: 0 !important;\nbottom: 25% !important;\nbottom: 50% !important;\nbottom: 75% !important;\nbottom: 100% !important;\nbottom: auto !important;',
    },
    {
      className: 'left-0, left-25, left-50, left-75, left-100, left-auto',
      properties:
        'left: 0 !important;\nleft: 25% !important;\nleft: 50% !important;\nleft: 75% !important;\nleft: 100% !important;\nleft: auto !important;',
    },
  ];

  const transformData = [
    {
      className: 'translate-middle',
      properties: 'transform: translate(-50%, -50%) !important;',
    },
    {
      className: 'translate-middle-x',
      properties: 'transform: translateX(-50%) !important;',
    },
    {
      className: 'translate-middle-y',
      properties: 'transform: translateY(-50%) !important;',
    },
  ];

  const zIndexData = [
    {
      className: 'z-index-n1, z-index-0, z-index-1',
      properties: 'z-index: -1 !important;\nz-index: 0 !important;\nz-index: 1 !important;',
    },
    {
      className: 'z-index-2, z-index-3, z-index-4, z-index-5',
      properties: 'z-index: 2 !important;\nz-index: 3 !important;\nz-index: 4 !important;\nz-index: 5 !important;',
    },
    {
      className: 'z-index-10, z-index-50, z-index-100, z-index-1000, z-index-auto',
      properties:
        'z-index: 10 !important;\nz-index: 50 !important;\nz-index: 100 !important;\nz-index: 1000 !important;\nz-index: auto !important;',
    },
  ];

  return (
    <div className="p-6">
      <Heading size="xxl">Position</Heading>
      <br />
      <Text weight="strong">Use these shorthand utilities for quickly configuring the position of an element.</Text>

      <div className="mt-9 mb-9">
        <Heading size="m">Position Properties</Heading>
        <Paragraph appearance="default">
          Position utilities control how an element is positioned in a document. The <code>position</code> property can
          have different values that determine how an element behaves in the document flow.
        </Paragraph>
        <div className="mt-5 mb-8">
          <Card className="h-100">
            <Table
              data={positionData}
              schema={utilitiesSchema}
              headerOptions={{
                withSearch: true,
              }}
              size="standard"
              showMenu={false}
            />
          </Card>
        </div>
      </div>

      <div className="mt-9 mb-9">
        <Heading size="m">Placement Properties</Heading>
        <Paragraph appearance="default">
          These utilities help you position elements by specifying their placement using <code>top</code>,{' '}
          <code>right</code>,<code>bottom</code>, and <code>left</code> properties. They work in conjunction with{' '}
          <code>position</code> utilities.
        </Paragraph>
        <div className="mt-5 mb-8">
          <Card className="h-100">
            <Table
              data={placementData}
              schema={utilitiesSchema}
              headerOptions={{
                withSearch: true,
              }}
              size="standard"
              showMenu={false}
            />
          </Card>
        </div>
      </div>

      <div className="mt-9 mb-9">
        <Heading size="m">Transform Utilities</Heading>
        <Paragraph appearance="default">
          Transform utilities help you center elements using CSS transform properties. These are especially useful when
          combined with position utilities to create centered elements.
        </Paragraph>
        <div className="mt-5 mb-8">
          <Card className="h-100">
            <Table
              data={transformData}
              schema={utilitiesSchema}
              headerOptions={{
                withSearch: true,
              }}
              size="standard"
              showMenu={false}
            />
          </Card>
        </div>
      </div>

      <div className="mt-9 mb-9">
        <Heading size="m">Z-Index Utilities</Heading>
        <Paragraph appearance="default">
          Z-index utilities control the stacking order of elements on the z-axis. Elements with higher z-index values
          appear in front of elements with lower values. These are useful for managing overlapping elements.
        </Paragraph>
        <div className="mt-5 mb-8">
          <Card className="h-100">
            <Table
              data={zIndexData}
              schema={utilitiesSchema}
              headerOptions={{
                withSearch: true,
              }}
              size="standard"
              showMenu={false}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default {
  title: 'Styling/Helper Classes/Position',
  component: position,
  parameters: {
    viewMode: 'story',
    docs: {
      page: null,
      docPage: null,
    },
  },
};
