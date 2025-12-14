import * as React from 'react';
import { Heading, Card, Table, Text } from '@/index';
import utilitiesSchema from '../Schema';

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
        <Text appearance="default">
          Position utilities control how an element is positioned in a document. The "position" property can have
          different values that determine how an element behaves in the document flow.
        </Text>
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

        {/* Position Examples */}
        <div className="mt-6">
          <Heading size="s" className="mb-3">
            Examples
          </Heading>
          <div className="d-flex flex-wrap gap-20">
            <div className="w-25 mb-4">
              <Text weight="strong" className="mb-2">
                position-static
              </Text>
              <div className="p-4 bg-secondary-lightest border rounded-10 vh-25">
                <div className="position-static p-2 border border-primary">Static positioned element (default)</div>
              </div>
              <Text appearance="subtle" size="small" className="mt-2">
                Elements with position-static stay in the normal document flow.
              </Text>
            </div>

            <div className="w-25 mb-4">
              <Text weight="strong" className="mb-2">
                position-relative
              </Text>
              <div className="p-4 bg-secondary-lightest border rounded-10 vh-25">
                <div className="position-relative p-2 border border-primary mt-5 ml-5">Relative positioned element</div>
              </div>
              <Text appearance="subtle" size="small" className="mt-2">
                Elements with position-relative can be moved relative to their normal position.
              </Text>
            </div>

            <div className="w-25 mb-4">
              <Text weight="strong" className="mb-2">
                position-absolute
              </Text>
              <div className="p-4 bg-secondary-lightest border rounded-10 vh-25 position-relative">
                <div className="position-absolute p-2 border border-primary top-0 right-0">
                  Absolute positioned element
                </div>
              </div>
              <Text appearance="subtle" size="small" className="mt-2">
                Elements with position-absolute are positioned relative to their nearest positioned ancestor.
              </Text>
            </div>

            <div className="w-25 mb-4">
              <Text weight="strong" className="mb-2">
                position-sticky
              </Text>
              <div className="p-4 bg-secondary-lightest border rounded-10 vh-25 overflow-auto">
                <div className="mb-4">Scroll this container to see the sticky element</div>
                <div className="position-sticky p-2 border border-primary top-0 bg-white">
                  Sticky positioned element
                </div>
                <div className="mt-4 h-150"></div>
              </div>
              <Text appearance="subtle" size="small" className="mt-2">
                Elements with position-sticky remain in view as you scroll through their container.
              </Text>
            </div>
          </div>

          <div className="mb-5 bg-secondary-lightest p-3 rounded-10 font-size-xs mt-4">
            <pre className="m-0">
              <code className="d-block">{'<div className="position-static">Static positioned element</div>'}</code>
              <code className="d-block mt-2">{'<div className="position-relative mt-5 ml-5">'}</code>
              <code className="d-block ml-4">{'Relative positioned element'}</code>
              <code className="d-block">{'</div>'}</code>
              <code className="d-block mt-2">
                {'<div className="position-absolute top-0 right-0">Absolute positioned element</div>'}
              </code>
              <code className="d-block mt-2">
                {'<div className="position-sticky top-0">Sticky positioned element</div>'}
              </code>
            </pre>
          </div>
        </div>
      </div>

      <div className="mt-9 mb-9">
        <Heading size="m">Placement Properties</Heading>
        <Text appearance="default">
          These utilities help you position elements by specifying their placement using "top", "right", "bottom", and
          "left" properties. They work in conjunction with "position" utilities.
        </Text>
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

        {/* Placement Examples */}
        <div className="mt-6">
          <Heading size="s" className="mb-3">
            Examples
          </Heading>
          <div className="d-flex flex-wrap gap-20">
            <div className="w-50 mb-4">
              <Text weight="strong" className="mb-2">
                Top & Bottom Placement
              </Text>
              <div className="p-4 bg-secondary-lightest border rounded-10 position-relative vh-50">
                <div className="position-absolute top-0 p-2 border border-primary bg-white">top-0</div>
                <div className="position-absolute top-25 left-25 p-2 border border-primary bg-white">
                  top-25 left-25
                </div>
                <div className="position-absolute top-50 left-50 p-2 border border-primary bg-white">
                  top-50 left-50
                </div>
                <div className="position-absolute bottom-0 right-0 p-2 border border-primary bg-white">
                  bottom-0 right-0
                </div>
              </div>
              <Text appearance="subtle" size="small" className="mt-2">
                These utilities allow you to position elements at the top, bottom, or specific percentages from the
                top/bottom edge.
              </Text>
            </div>

            <div className="w-50 mb-4">
              <Text weight="strong" className="mb-2">
                Right & Left Placement
              </Text>
              <div className="p-4 bg-secondary-lightest border rounded-10 position-relative vh-50">
                <div className="position-absolute left-0 p-2 border border-primary bg-white">left-0</div>
                <div className="position-absolute right-0 p-2 border border-primary bg-white">right-0</div>
                <div className="position-absolute left-50 top-50 p-2 border border-primary bg-white">
                  left-50 top-50
                </div>
                <div className="position-absolute left-75 bottom-25 p-2 border border-primary bg-white">
                  left-75 bottom-25
                </div>
              </div>
              <Text appearance="subtle" size="small" className="mt-2">
                These utilities allow you to position elements at the left, right, or specific percentages from the
                left/right edge.
              </Text>
            </div>
          </div>

          <div className="mb-5 bg-secondary-lightest p-3 rounded-10 font-size-xs mt-4">
            <pre className="m-0">
              <code className="d-block">{'<div className="position-relative vh-50">'}</code>
              <code className="d-block ml-4">{'<div className="position-absolute top-0">top-0</div>'}</code>
              <code className="d-block ml-4">
                {'<div className="position-absolute top-25 left-25">top-25 left-25</div>'}
              </code>
              <code className="d-block ml-4">
                {'<div className="position-absolute top-50 left-50">top-50 left-50</div>'}
              </code>
              <code className="d-block ml-4">
                {'<div className="position-absolute bottom-0 right-0">bottom-0 right-0</div>'}
              </code>
              <code className="d-block">{'</div>'}</code>
            </pre>
          </div>
        </div>
      </div>

      <div className="mt-9 mb-9">
        <Heading size="m">Transform Utilities</Heading>
        <Text appearance="default">
          Transform utilities help you center elements using CSS transform properties. These are especially useful when
          combined with position utilities to create centered elements.
        </Text>
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

        {/* Transform Examples */}
        <div className="mt-6">
          <Heading size="s" className="mb-3">
            Examples
          </Heading>
          <div className="d-flex flex-wrap gap-20">
            <div className="w-25 mb-4">
              <Text weight="strong" className="mb-2">
                translate-middle
              </Text>
              <div className="p-4 bg-secondary-lightest border rounded-10 position-relative vh-50">
                <div className="position-absolute top-50 left-50 translate-middle p-2 border border-primary bg-white">
                  Centered in both X and Y
                </div>
                <div className="position-absolute top-0 left-0 p-1 border border-dashed w-10 h-10"></div>
                <div className="position-absolute top-100 left-100 p-1 border border-dashed w-10 h-10"></div>
              </div>
              <Text appearance="subtle" size="small" className="mt-2">
                translate-middle centers an element by translating by -50% in both X and Y directions.
              </Text>
            </div>

            <div className="w-25 mb-4">
              <Text weight="strong" className="mb-2">
                translate-middle-x
              </Text>
              <div className="p-4 bg-secondary-lightest border rounded-10 position-relative vh-50">
                <div className="position-absolute top-50 left-50 translate-middle-x p-2 border border-primary bg-white">
                  Centered in X only
                </div>
              </div>
              <Text appearance="subtle" size="small" className="mt-2">
                translate-middle-x centers an element horizontally by translating by -50% in the X direction.
              </Text>
            </div>

            <div className="w-25 mb-4">
              <Text weight="strong" className="mb-2">
                translate-middle-y
              </Text>
              <div className="p-4 bg-secondary-lightest border rounded-10 position-relative vh-50">
                <div className="position-absolute top-50 left-50 translate-middle-y p-2 border border-primary bg-white">
                  Centered in Y only
                </div>
              </div>
              <Text appearance="subtle" size="small" className="mt-2">
                translate-middle-y centers an element vertically by translating by -50% in the Y direction.
              </Text>
            </div>
          </div>

          <div className="mb-5 bg-secondary-lightest p-3 rounded-10 font-size-xs mt-4">
            <pre className="m-0">
              <code className="d-block">{'<div className="position-relative vh-50">'}</code>
              <code className="d-block ml-4">
                {'<div className="position-absolute top-50 left-50 translate-middle">'}
              </code>
              <code className="d-block ml-8">{'Centered in both X and Y'}</code>
              <code className="d-block ml-4">{'</div>'}</code>
              <code className="d-block ml-4">
                {'<div className="position-absolute top-50 left-50 translate-middle-x">'}
              </code>
              <code className="d-block ml-8">{'Centered in X only'}</code>
              <code className="d-block ml-4">{'</div>'}</code>
              <code className="d-block ml-4">
                {'<div className="position-absolute top-50 left-50 translate-middle-y">'}
              </code>
              <code className="d-block ml-8">{'Centered in Y only'}</code>
              <code className="d-block ml-4">{'</div>'}</code>
              <code className="d-block">{'</div>'}</code>
            </pre>
          </div>
        </div>
      </div>

      <div className="mt-9 mb-9">
        <Heading size="m">Z-Index Utilities</Heading>
        <Text appearance="default">
          Z-index utilities control the stacking order of elements on the z-axis. Elements with higher z-index values
          appear in front of elements with lower values. These are useful for managing overlapping elements.
        </Text>
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

        {/* Z-Index Examples */}
        <div className="mt-6">
          <Heading size="s" className="mb-3">
            Examples
          </Heading>
          <div className="position-relative vh-50 mb-4">
            <div className="position-absolute p-3 bg-secondary-lightest border rounded-10 z-index-1 w-25 vh-25">
              <Text weight="strong">z-index-1</Text>
              <Text size="small"> (This box has z-index: 1)</Text>
            </div>
            <div className="position-absolute p-3 bg-secondary-lightest border rounded-10 z-index-2 w-25 vh-25 mt-8 ml-8">
              <Text weight="strong">z-index-2</Text>
              <Text size="small"> (This box has z-index: 2)</Text>
            </div>
            <div className="position-absolute p-3 bg-secondary-lightest border rounded-10 z-index-3 w-25 vh-25 mt-10 ml-10">
              <Text weight="strong">z-index-3</Text>
              <Text size="small"> (This box has z-index: 3)</Text>
            </div>
            <div className="position-absolute p-3 bg-secondary-lightest border rounded-10 z-index-4 w-25 vh-25 mt-11 ml-11">
              <Text weight="strong">z-index-4</Text>
              <Text size="small"> (This box has z-index: 4)</Text>
            </div>
            <div className="position-absolute p-3 bg-secondary-lightest border rounded-10 z-index-5 w-25 vh-25 mt-12 ml-12">
              <Text weight="strong">z-index-5</Text>
              <Text size="small"> (This box has z-index: 5)</Text>
            </div>
          </div>
          <Text appearance="subtle" size="small" className="mt-2">
            Z-index utilities determine which elements appear on top when they overlap. Higher values appear in front of
            elements with lower values. In this example, each box has a higher z-index than the one below it, making it
            appear on top.
          </Text>

          <div className="mb-5 bg-secondary-lightest p-3 rounded-10 font-size-xs mt-4">
            <pre className="m-0">
              <code className="d-block">{'<div className="position-relative vh-50">'}</code>
              <code className="d-block ml-4">{'<div className="position-absolute z-index-1 w-25 vh-25">'}</code>
              <code className="d-block ml-8">{'This box has z-index: 1'}</code>
              <code className="d-block ml-4">{'</div>'}</code>
              <code className="d-block ml-4">
                {'<div className="position-absolute z-index-2 w-25 vh-25 mt-8 ml-8">'}
              </code>
              <code className="d-block ml-8">{'This box has z-index: 2'}</code>
              <code className="d-block ml-4">{'</div>'}</code>
              <code className="d-block ml-4">
                {'<div className="position-absolute z-index-3 w-25 vh-25 mt-12 ml-12">'}
              </code>
              <code className="d-block ml-8">{'This box has z-index: 3'}</code>
              <code className="d-block ml-4">{'</div>'}</code>
              <code className="d-block">{'</div>'}</code>
            </pre>
          </div>
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
