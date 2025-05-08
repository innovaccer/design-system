import * as React from 'react';
import { Flex, Text, Card, Button, Icon, Badge, Input } from '@/index';

// CSF format story

export const NestedFlex = () => (
  <div className="p-6 bg-secondary-lightest">
    <Card className="p-6">
      <div className="mb-6">
        <Text size="large" weight="strong" className="d-block mb-4">
          Nested Flex Components
        </Text>
        <Text appearance="subtle" className="d-block">
          Complex layouts can be created by nesting Flex components with different properties. This example shows a
          complete patient management dashboard layout.
        </Text>
      </div>

      <Card className="p-6">
        <Flex direction="column" gap={16} className="overflow-hidden">
          {/* Header */}
          <Flex alignItems="center" justifyContent="space-between" className="p-4 rounded-10 bg-primary-lighter">
            <div>
              <Text size="large" weight="strong" className="d-block">
                Patient Portal
              </Text>
            </div>
            <Flex gap={8}>
              <Button appearance="primary">Admit Patient</Button>
              <Button appearance="basic">Export Records</Button>
            </Flex>
          </Flex>

          {/* Main content area */}
          <Flex gap={16} className="overflow-auto">
            {/* Sidebar */}
            <Card className="p-4 bg-white" style={{ width: '240px', minWidth: '200px', flexShrink: 0 }}>
              <div className="mb-4">
                <Text weight="strong" className="d-block">
                  Navigation
                </Text>
              </div>
              <Flex direction="column" gap={8}>
                <Button appearance="basic" icon="dashboard" className="justify-content-start">
                  Dashboard
                </Button>
                <Button appearance="basic" icon="people" className="justify-content-start">
                  Patients
                </Button>
                <Button appearance="basic" icon="calendar_today" className="justify-content-start">
                  Appointments
                </Button>
                <Button appearance="basic" icon="medical_services" className="justify-content-start">
                  Treatments
                </Button>
                <Button appearance="basic" icon="settings" className="justify-content-start">
                  Settings
                </Button>
              </Flex>
            </Card>

            {/* Main content */}
            <Flex direction="column" gap={16} className="flex-grow-1" style={{ minWidth: '300px' }}>
              {/* Key metrics */}
              <Flex gap={16} wrap="wrap">
                <Card className="p-4 flex-grow-1 bg-white" style={{ minWidth: '180px' }}>
                  <Flex gap={8} alignItems="center">
                    <Icon name="people" size={24} className="color-primary" />
                    <Text weight="strong" className="d-block">
                      Total Patients
                    </Text>
                  </Flex>
                  <div className="mt-2">
                    <Text size="large" weight="strong" className="d-block">
                      1,248
                    </Text>
                  </div>
                  <div className="mt-1">
                    <Text size="small" className="color-success d-block">
                      +22 this week
                    </Text>
                  </div>
                </Card>
                <Card className="p-4 flex-grow-1 bg-white" style={{ minWidth: '180px' }}>
                  <Flex gap={8} alignItems="center">
                    <Icon name="calendar_today" size={24} className="color-primary" />
                    <Text weight="strong" className="d-block">
                      Appointments
                    </Text>
                  </Flex>
                  <div className="mt-2">
                    <Text size="large" weight="strong" className="d-block">
                      76
                    </Text>
                  </div>
                  <div className="mt-1">
                    <Text size="small" className="color-success d-block">
                      Today's schedule
                    </Text>
                  </div>
                </Card>
                <Card className="p-4 flex-grow-1 bg-white" style={{ minWidth: '180px' }}>
                  <Flex gap={8} alignItems="center">
                    <Icon name="local_hospital" size={24} className="color-primary" />
                    <Text weight="strong" className="d-block">
                      Admitted
                    </Text>
                  </Flex>
                  <div className="mt-2">
                    <Text size="large" weight="strong" className="d-block">
                      28
                    </Text>
                  </div>
                  <div className="mt-1">
                    <Text size="small" className="color-alert d-block">
                      3 critical cases
                    </Text>
                  </div>
                </Card>
              </Flex>

              {/* Filter area */}
              <Card className="p-4 bg-white">
                <div className="mb-3">
                  <Text weight="strong" className="d-block">
                    Patient Search
                  </Text>
                </div>
                <Flex gap={16} alignItems="flex-end" wrap="wrap">
                  <Flex direction="column" gap={4} className="flex-grow-1" style={{ minWidth: '200px' }}>
                    <Text size="small" className="d-block">
                      Patient Name
                    </Text>
                    <Input placeholder="Search by name" icon="search" />
                  </Flex>
                  <Flex direction="column" gap={4} className="flex-grow-1" style={{ minWidth: '200px' }}>
                    <Text size="small" className="d-block">
                      Department
                    </Text>
                    <Input placeholder="Select department" icon="local_hospital" />
                  </Flex>
                  <Flex direction="column" gap={4} className="flex-grow-1" style={{ minWidth: '200px' }}>
                    <Text size="small" className="d-block">
                      Status
                    </Text>
                    <Input placeholder="Select status" icon="info" />
                  </Flex>
                  <Button appearance="primary" className="mt-2">
                    Search
                  </Button>
                </Flex>
              </Card>

              {/* Patient List */}
              <Card className="p-4 bg-white">
                <Flex justifyContent="space-between" alignItems="center" className="mb-4" wrap="wrap">
                  <div>
                    <Text weight="strong" className="d-block">
                      Recent Patients
                    </Text>
                  </div>
                  <Flex gap={8} className="mt-2">
                    <Badge appearance="primary">All</Badge>
                    <Badge appearance="secondary">Inpatient</Badge>
                    <Badge appearance="secondary">Outpatient</Badge>
                  </Flex>
                </Flex>
                <div className="rounded-10 overflow-auto">
                  <Flex direction="column" gap={8}>
                    {[
                      { name: 'John Smith', id: 'PT-12345', dept: 'Cardiology', status: 'Admitted' },
                      { name: 'Maria Garcia', id: 'PT-23456', dept: 'Neurology', status: 'Discharged' },
                      { name: 'Robert Johnson', id: 'PT-34567', dept: 'Orthopedics', status: 'Scheduled' },
                      { name: 'Sarah Lee', id: 'PT-45678', dept: 'Pediatrics', status: 'Admitted' },
                      { name: 'David Wong', id: 'PT-56789', dept: 'Emergency', status: 'Critical' },
                    ].map((patient, i) => (
                      <Flex
                        key={i}
                        alignItems="center"
                        justifyContent="space-between"
                        className="p-3 border rounded-5 overflow-auto"
                      >
                        <Flex gap={8} alignItems="center">
                          <Icon name="person" size={24} className="color-primary" />
                          <div>
                            <Text weight="strong" className="d-block">
                              {patient.name}
                            </Text>
                            <Text size="small" appearance="subtle" className="d-block">
                              {patient.id}
                            </Text>
                          </div>
                        </Flex>
                        <div>
                          <Text className="d-block">{patient.dept}</Text>
                        </div>
                        <Badge
                          appearance={
                            patient.status === 'Admitted'
                              ? 'primary'
                              : patient.status === 'Discharged'
                              ? 'success'
                              : patient.status === 'Critical'
                              ? 'alert'
                              : 'secondary'
                          }
                        >
                          {patient.status}
                        </Badge>
                        <Button appearance="basic" icon="arrow_forward" size="small" />
                      </Flex>
                    ))}
                  </Flex>
                </div>
              </Card>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </Card>
  </div>
);

export default {
  title: 'Components/Flex/Nested',
  component: Flex,
  parameters: {
    docs: {
      description: {
        component:
          'Examples of nested Flex components for complex layouts, demonstrating how multiple Flex containers can work together to create sophisticated interfaces.',
      },
    },
  },
};
