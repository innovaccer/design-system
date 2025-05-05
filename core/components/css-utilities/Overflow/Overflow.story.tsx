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
    {
      className: 'overflow-visible',
      properties: 'overflow: visible !important;',
    },
    {
      className: 'overflow-scroll',
      properties: 'overflow: scroll !important;',
    },
    {
      className: 'overflow-x-auto',
      properties: 'overflow-x: auto !important;',
    },
    {
      className: 'overflow-x-hidden',
      properties: 'overflow-x: hidden !important;',
    },
    {
      className: 'overflow-x-visible',
      properties: 'overflow-x: visible !important;',
    },
    {
      className: 'overflow-x-scroll',
      properties: 'overflow-x: scroll !important;',
    },
    {
      className: 'overflow-y-auto',
      properties: 'overflow-y: auto !important;',
    },
    {
      className: 'overflow-y-hidden',
      properties: 'overflow-y: hidden !important;',
    },
    {
      className: 'overflow-y-visible',
      properties: 'overflow-y: visible !important;',
    },
    {
      className: 'overflow-y-scroll',
      properties: 'overflow-y: scroll !important;',
    },
  ];

  const longText =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.';

  const wideText =
    'This is a very long text that will extend beyond the container width and demonstrate horizontal overflow behavior. It should be long enough to show the differences between various overflow settings.';

  return (
    <div className="p-6">
      <Heading size="xxl">Overflow Utilities</Heading>
      <Text weight="strong" className="mt-4">
        Use these utilities to control how content that exceeds its container's dimensions is displayed.
      </Text>

      <div className="mt-8 mb-8">
        <Card className="h-100">
          <Table
            data={data}
            schema={utilitiesSchema}
            headerOptions={{
              withSearch: true,
            }}
            size="standard"
            showMenu={false}
          />
        </Card>
      </div>

      <div className="mt-9">
        <Heading size="m">Examples</Heading>
        <Paragraph appearance="default" className="mb-6">
          Here's how each overflow utility affects content that exceeds its container's dimensions:
        </Paragraph>

        {/* General Overflow Examples */}
        <Card className="mb-8 p-6">
          <Heading size="s">General Overflow</Heading>
          <Text className="mt-3 mb-5">These utilities control overall overflow in both directions.</Text>

          <div className="d-flex flex-wrap">
            {/* overflow-auto */}
            <div className="mr-8 mb-6 w-25">
              <Text weight="strong" className="mb-3">
                overflow-auto
              </Text>
              <div className="position-relative">
                <div className="overflow-auto p-4 bg-primary-lightest border rounded-05 h-100">{longText}</div>
                <Text className="mt-3 text-muted">Scrollbars appear only when necessary</Text>
              </div>
            </div>

            {/* overflow-hidden */}
            <div className="mr-8 mb-6 w-25">
              <Text weight="strong" className="mb-3">
                overflow-hidden
              </Text>
              <div className="position-relative">
                <div className="overflow-hidden p-4 bg-primary-lightest border rounded-05 h-100">{longText}</div>
                <Text className="mt-3 text-muted">Content is clipped, no scrollbars</Text>
              </div>
            </div>

            {/* overflow-visible */}
            <div className="mr-8 mb-6 w-25">
              <Text weight="strong" className="mb-3">
                overflow-visible
              </Text>
              <div className="position-relative overflow-hidden">
                <div className="overflow-visible p-4 bg-primary-lightest border rounded-05 h-100">{longText}</div>
                <Text className="mt-3 text-muted">Content flows outside the container</Text>
              </div>
            </div>

            {/* overflow-scroll */}
            <div className="mb-6 w-25">
              <Text weight="strong" className="mb-3">
                overflow-scroll
              </Text>
              <div className="position-relative">
                <div className="overflow-scroll p-4 bg-primary-lightest border rounded-05 h-100">{longText}</div>
                <Text className="mt-3 text-muted">Scrollbars always present</Text>
              </div>
            </div>
          </div>
        </Card>

        {/* Horizontal Overflow Examples */}
        <Card className="mb-8 p-6">
          <Heading size="s">Horizontal Overflow (X-axis)</Heading>
          <Text className="mt-3 mb-5">These utilities control horizontal overflow only.</Text>

          <div className="d-flex flex-wrap">
            {/* overflow-x-auto */}
            <div className="mr-8 mb-6 w-25">
              <Text weight="strong" className="mb-3">
                overflow-x-auto
              </Text>
              <div className="position-relative">
                <div className="overflow-x-auto white-space-nowrap p-4 bg-primary-lightest border rounded-05">
                  {wideText}
                </div>
                <Text className="mt-3 text-muted">Horizontal scrollbar appears as needed</Text>
              </div>
            </div>

            {/* overflow-x-hidden */}
            <div className="mr-8 mb-6 w-25">
              <Text weight="strong" className="mb-3">
                overflow-x-hidden
              </Text>
              <div className="position-relative">
                <div className="overflow-x-hidden white-space-nowrap p-4 bg-primary-lightest border rounded-05">
                  {wideText}
                </div>
                <Text className="mt-3 text-muted">Horizontal content is clipped</Text>
              </div>
            </div>

            {/* overflow-x-visible */}
            <div className="mr-8 mb-6 w-25">
              <Text weight="strong" className="mb-3">
                overflow-x-visible
              </Text>
              <div className="position-relative overflow-hidden">
                <div className="overflow-x-visible white-space-nowrap p-4 bg-primary-lightest border rounded-05">
                  {wideText}
                </div>
                <Text className="mt-3 text-muted">Horizontal content flows outside</Text>
              </div>
            </div>

            {/* overflow-x-scroll */}
            <div className="mb-6 w-25">
              <Text weight="strong" className="mb-3">
                overflow-x-scroll
              </Text>
              <div className="position-relative">
                <div className="overflow-x-scroll white-space-nowrap p-4 bg-primary-lightest border rounded-05">
                  {wideText}
                </div>
                <Text className="mt-3 text-muted">Horizontal scrollbar always present</Text>
              </div>
            </div>
          </div>
        </Card>

        {/* Vertical Overflow Examples */}
        <Card className="mb-8 p-6">
          <Heading size="s">Vertical Overflow (Y-axis)</Heading>
          <Text className="mt-3 mb-5">These utilities control vertical overflow only.</Text>

          <div className="d-flex flex-wrap">
            {/* overflow-y-auto */}
            <div className="mr-8 mb-6 w-25">
              <Text weight="strong" className="mb-3">
                overflow-y-auto
              </Text>
              <div className="position-relative">
                <div className="overflow-y-auto p-4 bg-primary-lightest border rounded-05 h-100">{longText}</div>
                <Text className="mt-3 text-muted">Vertical scrollbar appears as needed</Text>
              </div>
            </div>

            {/* overflow-y-hidden */}
            <div className="mr-8 mb-6 w-25">
              <Text weight="strong" className="mb-3">
                overflow-y-hidden
              </Text>
              <div className="position-relative">
                <div className="overflow-y-hidden p-4 bg-primary-lightest border rounded-05 h-100">{longText}</div>
                <Text className="mt-3 text-muted">Vertical content is clipped</Text>
              </div>
            </div>

            {/* overflow-y-visible */}
            <div className="mr-8 mb-6 w-25">
              <Text weight="strong" className="mb-3">
                overflow-y-visible
              </Text>
              <div className="position-relative overflow-hidden">
                <div className="overflow-y-visible p-4 bg-primary-lightest border rounded-05 h-100">{longText}</div>
                <Text className="mt-3 text-muted">Vertical content flows outside</Text>
              </div>
            </div>

            {/* overflow-y-scroll */}
            <div className="mb-6 w-25">
              <Text weight="strong" className="mb-3">
                overflow-y-scroll
              </Text>
              <div className="position-relative">
                <div className="overflow-y-scroll p-4 bg-primary-lightest border rounded-05 h-100">{longText}</div>
                <Text className="mt-3 text-muted">Vertical scrollbar always present</Text>
              </div>
            </div>
          </div>
        </Card>

        {/* Practical Example */}
        <Card className="p-6">
          <Heading size="s">Practical Example</Heading>
          <Text className="mt-3 mb-5">A real-world example of using overflow utilities in a UI component:</Text>

          <div className="d-flex flex-wrap">
            <div className="mr-8 mb-6 w-25">
              <Text weight="strong" className="mb-3">
                Content Card with Long Description
              </Text>
              <Card className="p-0">
                <div className="p-4 bg-primary-lightest">
                  <Heading size="s">Product Information</Heading>
                </div>
                <div className="p-4">
                  <Text weight="strong">Main content area</Text>
                  <div className="mt-3 overflow-y-auto bg-primary-lightest rounded-05 p-3 border h-100">
                    <Text>{longText}</Text>
                  </div>
                  <div className="d-flex mt-4 justify-content-end">
                    <Text className="cursor-pointer text-primary">Read more</Text>
                  </div>
                </div>
              </Card>
            </div>

            <div className="w-25">
              <Text weight="strong" className="mb-3">
                Horizontal Navigation
              </Text>
              <Card className="p-0">
                <div className="p-4 bg-primary-lightest">
                  <Heading size="s">Tab Navigation</Heading>
                </div>
                <div className="p-4">
                  <div className="overflow-x-auto border-bottom">
                    <div className="d-flex white-space-nowrap">
                      <div className="p-3 border-bottom border-primary cursor-pointer">
                        <Text weight="strong" className="text-primary">
                          Dashboard
                        </Text>
                      </div>
                      <div className="p-3 cursor-pointer">
                        <Text>Reports</Text>
                      </div>
                      <div className="p-3 cursor-pointer">
                        <Text>Analytics</Text>
                      </div>
                      <div className="p-3 cursor-pointer">
                        <Text>User Management</Text>
                      </div>
                      <div className="p-3 cursor-pointer">
                        <Text>Settings</Text>
                      </div>
                      <div className="p-3 cursor-pointer">
                        <Text>Integrations</Text>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 mt-3 bg-primary-lightest rounded-05">
                    <Text>Dashboard content goes here...</Text>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Card>
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
