import * as React from 'react';
import { Flex, Text, Card, Badge, Icon } from '@/index';

// CSF format story

export const All = () => (
  <div className="p-6 bg-secondary-lightest">
    <Card className="p-6 mb-6">
      <div className="mb-4">
        <Text size="large" weight="strong" className="d-block">
          Flex Component
        </Text>
      </div>
      <div className="mb-6">
        <Text appearance="subtle" className="d-block">
          A flexible layout component that helps you create responsive designs with minimal effort. Use Flex to build
          everything from simple layouts to complex interfaces with powerful alignment controls.
        </Text>
      </div>

      <Flex direction="column" gap={24}>
        {/* Basic example */}
        <Card className="p-5">
          <div className="mb-4">
            <Text weight="strong" className="d-block">
              Healthcare Dashboard Elements
            </Text>
          </div>
          <Flex gap={16}>
            <Card className="p-4 d-flex flex-column align-items-center justify-content-center w-25 bg-primary-lightest">
              <Icon name="person" size={24} className="mb-2 color-primary" />
              <div className="text-align-center">
                <Text weight="strong" className="d-block">
                  Patients
                </Text>
                <Text appearance="subtle" className="d-block">
                  Patient management
                </Text>
              </div>
            </Card>
            <Card className="p-4 d-flex flex-column align-items-center justify-content-center w-25 bg-success-lightest">
              <Icon name="calendar_today" size={24} className="mb-2 color-success" />
              <div className="text-align-center">
                <Text weight="strong" className="d-block">
                  Appointments
                </Text>
                <Text appearance="subtle" className="d-block">
                  Schedule management
                </Text>
              </div>
            </Card>
            <Card className="p-4 d-flex flex-column align-items-center justify-content-center w-25 bg-warning-lightest">
              <Icon name="article" size={24} className="mb-2 color-warning" />
              <div className="text-align-center">
                <Text weight="strong" className="d-block">
                  Records
                </Text>
                <Text appearance="subtle" className="d-block">
                  Medical documentation
                </Text>
              </div>
            </Card>
          </Flex>
        </Card>

        {/* Features at a glance */}
        <Card className="p-5">
          <div className="mb-4">
            <Text weight="strong" className="d-block">
              Medical Record Sections
            </Text>
          </div>
          <Flex gap={16} wrap="wrap">
            <Card className="p-4 mb-2">
              <Flex alignItems="center" gap={8}>
                <Badge appearance="primary">Patient Info</Badge>
                <div>
                  <Text className="d-block">Demographics, contact details, insurance</Text>
                </div>
              </Flex>
            </Card>
            <Card className="p-4 mb-2">
              <Flex alignItems="center" gap={8}>
                <Badge appearance="primary">Medical History</Badge>
                <div>
                  <Text className="d-block">Past conditions, allergies, family history</Text>
                </div>
              </Flex>
            </Card>
            <Card className="p-4 mb-2">
              <Flex alignItems="center" gap={8}>
                <Badge appearance="primary">Medications</Badge>
                <div>
                  <Text className="d-block">Current prescriptions, dosage, frequency</Text>
                </div>
              </Flex>
            </Card>
            <Card className="p-4 mb-2">
              <Flex alignItems="center" gap={8}>
                <Badge appearance="primary">Lab Results</Badge>
                <div>
                  <Text className="d-block">Test results, imaging reports, values</Text>
                </div>
              </Flex>
            </Card>
          </Flex>
        </Card>
      </Flex>
    </Card>
  </div>
);

export default {
  title: 'Components/Flex/All',
  component: Flex,
  subcomponents: { Text, Card, Badge, Icon },
  parameters: {
    docs: {
      description: {
        component:
          'Flex is a layout component that helps create flexible and responsive layouts using CSS Flexbox properties.',
      },
    },
  },
};
