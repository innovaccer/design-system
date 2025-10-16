import * as React from 'react';
import { Flex, Text, Card, Badge, Icon } from '@/index';

// CSF format story

export const Gap = () => (
  <div className="p-6 bg-secondary-lightest">
    <Card className="p-6 mb-6">
      <div className="mb-4">
        <Text size="large" weight="strong" className="d-block">
          Gap Property
        </Text>
      </div>
      <div className="mb-6">
        <Text appearance="subtle" className="d-block">
          The gap property creates consistent spacing between flex items. Available in multiple sizes that align with
          the design system spacing scale.
        </Text>
      </div>

      <Flex direction="column" gap={24}>
        <Card className="p-5">
          <div className="mb-3">
            <Text weight="strong" className="d-block">
              No Gap (gap=0)
            </Text>
          </div>
          <div className="p-4 border rounded-10 bg-white">
            <Flex gap={0} className="p-4 border rounded-10 bg-secondary-lightest">
              {['Patient Info', 'Medical History', 'Medications', 'Lab Results', 'Treatment Plan'].map((item, i) => (
                <div key={i} className="p-3 rounded-10 bg-primary-lighter text-align-center">
                  <Text className="d-block">{item}</Text>
                </div>
              ))}
            </Flex>
          </div>
        </Card>

        <Card className="p-5">
          <div className="mb-3">
            <Text weight="strong" className="d-block">
              Small Gap (gap=8, --spacing-20)
            </Text>
          </div>
          <div className="p-4 border rounded-10 bg-white">
            <Flex gap={8} className="p-4 border rounded-10 bg-secondary-lightest">
              {['Patient Info', 'Medical History', 'Medications', 'Lab Results', 'Treatment Plan'].map((item, i) => (
                <div key={i} className="p-3 rounded-10 bg-primary-lighter text-align-center">
                  <Text className="d-block">{item}</Text>
                </div>
              ))}
            </Flex>
          </div>
        </Card>

        <Card className="p-5">
          <div className="mb-3">
            <Text weight="strong" className="d-block">
              Medium Gap (gap=16, --spacing-40)
            </Text>
          </div>
          <div className="p-4 border rounded-10 bg-white">
            <Flex gap={16} className="p-4 border rounded-10 bg-secondary-lightest">
              {['Patient Info', 'Medical History', 'Medications', 'Lab Results', 'Treatment Plan'].map((item, i) => (
                <div key={i} className="p-3 rounded-10 bg-primary-lighter text-align-center">
                  <Text className="d-block">{item}</Text>
                </div>
              ))}
            </Flex>
          </div>
        </Card>
      </Flex>
    </Card>
  </div>
);

Gap.parameters = {
  docs: {
    description: {
      story: 'The gap property controls spacing between flex items using design system spacing variables.',
    },
  },
};

export const Wrap = () => (
  <div className="p-6 bg-secondary-lightest">
    <Card className="p-6 mb-6">
      <div className="mb-4">
        <Text size="large" weight="strong" className="d-block">
          Wrap Property
        </Text>
      </div>
      <div className="mb-6">
        <Text appearance="subtle" className="d-block">
          Control how flex items wrap when they run out of space in the container, creating more flexible and responsive
          layouts.
        </Text>
      </div>

      <Flex direction="column" gap={24}>
        <Card className="p-5">
          <div className="mb-3">
            <Text weight="strong" className="d-block">
              No Wrap (wrap="nowrap")
            </Text>
          </div>
          <div className="mb-3">
            <Text appearance="subtle" className="d-block">
              Items remain on a single line and may overflow the container
            </Text>
          </div>
          <div className="p-4 border rounded-10 bg-white">
            <div style={{ maxWidth: '500px' }} className="border rounded-10 bg-secondary-lightest p-3">
              <div className="mb-2">
                <Text size="small" className="d-block">
                  Container width: 500px
                </Text>
              </div>
              <Flex wrap="nowrap" gap={8}>
                {[
                  'General Checkup',
                  'Cardiology',
                  'Neurology',
                  'Orthopedics',
                  'Dermatology',
                  'Pediatrics',
                  'Gynecology',
                  'Oncology',
                  'Urology',
                ].map((tag) => (
                  <Badge key={tag} appearance="secondary" className="mb-2">
                    {tag}
                  </Badge>
                ))}
              </Flex>
            </div>
          </div>
        </Card>

        <Card className="p-5">
          <div className="mb-3">
            <Text weight="strong" className="d-block">
              Wrap (wrap="wrap")
            </Text>
          </div>
          <div className="mb-3">
            <Text appearance="subtle" className="d-block">
              Items will wrap to the next line when they run out of space
            </Text>
          </div>
          <div className="p-4 border rounded-10 bg-white">
            <div style={{ maxWidth: '500px' }} className="border rounded-10 bg-secondary-lightest p-3">
              <div className="mb-2">
                <Text size="small" className="d-block">
                  Container width: 500px
                </Text>
              </div>
              <Flex wrap="wrap" gap={8}>
                {[
                  'General Checkup',
                  'Cardiology',
                  'Neurology',
                  'Orthopedics',
                  'Dermatology',
                  'Pediatrics',
                  'Gynecology',
                  'Oncology',
                  'Urology',
                  'Radiology',
                  'Psychiatry',
                  'Ophthalmology',
                ].map((tag) => (
                  <Badge key={tag} appearance="secondary" className="mb-2">
                    {tag}
                  </Badge>
                ))}
              </Flex>
            </div>
          </div>
        </Card>

        <Card className="p-5">
          <div className="mb-3">
            <Text weight="strong" className="d-block">
              Responsive Patient Card Grid (wrap="wrap")
            </Text>
          </div>
          <div className="mb-3">
            <Text appearance="subtle" className="d-block">
              Patient cards adjust to available space and wrap to create a responsive grid
            </Text>
          </div>
          <div className="p-4 border rounded-10 bg-white">
            <div style={{ maxWidth: '700px' }} className="border rounded-10 bg-secondary-lightest p-3">
              <div className="mb-3">
                <Text size="small" className="d-block">
                  Resize the window to see how cards adapt
                </Text>
              </div>
              <Flex wrap="wrap" gap={16}>
                {[
                  { name: 'John Smith', id: 'PT-12345', status: 'Admitted' },
                  { name: 'Maria Garcia', id: 'PT-23456', status: 'Discharged' },
                  { name: 'Robert Johnson', id: 'PT-34567', status: 'Scheduled' },
                  { name: 'Sarah Lee', id: 'PT-45678', status: 'Admitted' },
                  { name: 'David Wong', id: 'PT-56789', status: 'Emergency' },
                  { name: 'Linda Brown', id: 'PT-67890', status: 'Scheduled' },
                ].map((patient, i) => (
                  <Card key={i} className="p-4 bg-white w-25" style={{ minWidth: '140px' }}>
                    <Flex direction="column" alignItems="center" gap={8}>
                      <Icon name="person" size={24} className="color-primary" />
                      <div className="text-align-center">
                        <Text weight="strong" className="d-block">
                          {patient.name}
                        </Text>
                        <Text size="small" className="d-block">
                          {patient.id}
                        </Text>
                      </div>
                      <Badge
                        appearance={
                          patient.status === 'Admitted'
                            ? 'primary'
                            : patient.status === 'Discharged'
                            ? 'success'
                            : patient.status === 'Emergency'
                            ? 'alert'
                            : 'secondary'
                        }
                      >
                        {patient.status}
                      </Badge>
                    </Flex>
                  </Card>
                ))}
              </Flex>
            </div>
          </div>
        </Card>
      </Flex>
    </Card>
  </div>
);

Wrap.parameters = {
  docs: {
    description: {
      story:
        'The wrap property controls how items behave when they run out of space in the container, enabling responsive layouts.',
    },
  },
};

export default {
  title: 'Components/Flex/GapAndWrap',
  component: Flex,
  parameters: {
    docs: {
      description: {
        component: 'Gap and wrap options for the Flex component with practical examples.',
      },
    },
  },
};
