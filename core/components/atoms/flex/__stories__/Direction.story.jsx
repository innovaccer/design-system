import * as React from 'react';
import { Flex, Text, Card, Button, Input } from '@/index';

// CSF format story

export const Row = () => (
  <div className="p-6 bg-secondary-lightest">
    <Card className="p-6">
      <div className="mb-4">
        <Text size="large" weight="strong" className="d-block">
          Row Direction (default)
        </Text>
      </div>
      <div className="mb-6">
        <Text appearance="subtle" className="d-block">
          Items are arranged horizontally from left to right. This is the default behavior of Flex.
        </Text>
      </div>

      <div className="p-4 border rounded-10 bg-white">
        <div className="mb-3">
          <Text weight="strong" className="d-block">
            Example: Toolbar
          </Text>
        </div>
        <Flex direction="row" gap={12} className="p-4 border rounded-10 bg-secondary-lightest">
          <Button appearance="primary" icon="add">
            New
          </Button>
          <Button appearance="basic" icon="edit">
            Edit
          </Button>
          <Button appearance="basic" icon="delete">
            Delete
          </Button>
          <Button appearance="basic" icon="refresh">
            Refresh
          </Button>
        </Flex>
      </div>
    </Card>
  </div>
);

Row.parameters = {
  docs: {
    description: {
      story: 'Row direction arranges items horizontally (left to right), which is the default behavior of Flex.',
    },
  },
};

export const Column = () => (
  <div className="p-6 bg-secondary-lightest">
    <Card className="p-6">
      <div className="mb-4">
        <Text size="large" weight="strong" className="d-block">
          Column Direction
        </Text>
      </div>
      <div className="mb-6">
        <Text appearance="subtle" className="d-block">
          Items are stacked vertically from top to bottom, ideal for creating forms and vertical menus.
        </Text>
      </div>

      <div className="p-4 border rounded-10 bg-white">
        <div className="mb-3">
          <Text weight="strong" className="d-block">
            Example: Form Layout
          </Text>
        </div>
        <Card className="p-5 w-100" style={{ maxWidth: '400px' }}>
          <Flex direction="column" gap={8}>
            <div className="mb-2">
              <Text weight="strong" className="d-block">
                Contact Information
              </Text>
            </div>

            <Flex direction="column" gap={4}>
              <Text className="d-block">Name</Text>
              <Input placeholder="Enter your name" />
            </Flex>

            <Flex direction="column" gap={4}>
              <Text className="d-block">Email</Text>
              <Input type="email" placeholder="Enter your email" icon="email" />
            </Flex>

            <Flex direction="column" gap={4}>
              <Text className="d-block">Message</Text>
              <Input multiline rows={4} placeholder="Enter your message" />
            </Flex>

            <Button appearance="primary" className="mt-4">
              Submit
            </Button>
          </Flex>
        </Card>
      </div>
    </Card>
  </div>
);

Column.parameters = {
  docs: {
    description: {
      story:
        'Column direction stacks items vertically, ideal for forms and lists where a sequential flow is important.',
    },
  },
};

export const RowReverse = () => (
  <div className="p-6 bg-secondary-lightest">
    <Card className="p-6">
      <div className="mb-4">
        <Text size="large" weight="strong" className="d-block">
          Row Reverse Direction
        </Text>
      </div>
      <div className="mb-6">
        <Text appearance="subtle" className="d-block">
          Items are arranged horizontally from right to left, reversing the normal order. Useful for right-to-left
          layouts or when primary actions should appear on the right.
        </Text>
      </div>

      <div className="p-4 border rounded-10 bg-white">
        <div className="mb-3">
          <Text weight="strong" className="d-block">
            Example: Action Buttons
          </Text>
        </div>
        <Flex direction="row-reverse" gap={12} className="p-4 border rounded-10 bg-secondary-lightest">
          <Button appearance="primary" icon="save">
            Save
          </Button>
          <Button appearance="basic">Cancel</Button>
          <Button appearance="basic">Reset</Button>
          <div className="flex-grow-1 d-flex align-items-center">
            <Text className="d-block">Form Status: Modified</Text>
          </div>
        </Flex>
      </div>
    </Card>
  </div>
);

RowReverse.parameters = {
  docs: {
    description: {
      story:
        'Row-reverse direction places items horizontally in reverse order, useful for RTL layouts or when primary actions should appear first visually.',
    },
  },
};

export default {
  title: 'Components/Flex/Direction',
  component: Flex,
  parameters: {
    docs: {
      description: {
        component:
          'Direction variants of the Flex component with practical examples showing how different directions affect layout.',
      },
    },
  },
};
