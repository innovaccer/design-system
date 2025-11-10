import * as React from 'react';
import { Flex, Text, Card, Badge, Icon } from '@/index';

// CSF format story
export const JustifyContent = () => (
  <div className="p-6 bg-secondary-lightest">
    <Card className="p-6 mb-6">
      <div className="mb-4">
        <Text size="large" weight="strong" className="d-block">
          Justify Content Property
        </Text>
      </div>
      <div className="mb-6">
        <Text appearance="subtle" className="d-block">
          Control how items are distributed along the main axis. This example shows different justifyContent values in a
          row direction.
        </Text>
      </div>

      <Flex direction="column" gap={24}>
        <Card className="p-5">
          <div className="mb-3">
            <Text weight="strong" className="d-block">
              flex-start (default)
            </Text>
          </div>
          <div className="p-4 border rounded-10 bg-white">
            <Flex justifyContent="flex-start" gap={12} className="p-4 border rounded-10 bg-secondary-lightest">
              <Badge appearance="primary">One</Badge>
              <Badge appearance="primary">Two</Badge>
              <Badge appearance="primary">Three</Badge>
            </Flex>
          </div>
        </Card>

        <Card className="p-5">
          <div className="mb-3">
            <Text weight="strong" className="d-block">
              flex-end
            </Text>
          </div>
          <div className="p-4 border rounded-10 bg-white">
            <Flex justifyContent="flex-end" gap={12} className="p-4 border rounded-10 bg-secondary-lightest">
              <Badge appearance="primary">One</Badge>
              <Badge appearance="primary">Two</Badge>
              <Badge appearance="primary">Three</Badge>
            </Flex>
          </div>
        </Card>

        <Card className="p-5">
          <div className="mb-3">
            <Text weight="strong" className="d-block">
              center
            </Text>
          </div>
          <div className="p-4 border rounded-10 bg-white">
            <Flex justifyContent="center" gap={12} className="p-4 border rounded-10 bg-secondary-lightest">
              <Badge appearance="primary">One</Badge>
              <Badge appearance="primary">Two</Badge>
              <Badge appearance="primary">Three</Badge>
            </Flex>
          </div>
        </Card>

        <Card className="p-5">
          <div className="mb-3">
            <Text weight="strong" className="d-block">
              space-between
            </Text>
          </div>
          <div className="p-4 border rounded-10 bg-white">
            <Flex justifyContent="space-between" gap={8} className="p-4 border rounded-10 bg-secondary-lightest">
              <Badge appearance="primary">Left</Badge>
              <Badge appearance="primary">Center</Badge>
              <Badge appearance="primary">Right</Badge>
            </Flex>
          </div>
        </Card>

        <Card className="p-5">
          <div className="mb-3">
            <Text weight="strong" className="d-block">
              space-around
            </Text>
          </div>
          <div className="p-4 border rounded-10 bg-white">
            <Flex justifyContent="space-around" gap={0} className="p-4 border rounded-10 bg-secondary-lightest">
              <Badge appearance="primary">Left</Badge>
              <Badge appearance="primary">Center</Badge>
              <Badge appearance="primary">Right</Badge>
            </Flex>
          </div>
        </Card>
      </Flex>
    </Card>
  </div>
);

JustifyContent.parameters = {
  docs: {
    description: {
      story:
        'The justifyContent property controls how items are distributed along the main axis (horizontal in row direction).',
    },
  },
};

export const AlignItems = () => (
  <div className="p-6 bg-secondary-lightest">
    <Card className="p-6 mb-6">
      <div className="mb-4">
        <Text size="large" weight="strong" className="d-block">
          Align Items Property
        </Text>
      </div>
      <div className="mb-6">
        <Text appearance="subtle" className="d-block">
          Control how items are aligned along the cross axis. This is especially useful when patient records have
          different amounts of information.
        </Text>
      </div>

      <Flex direction="column" gap={24}>
        <Card className="p-5">
          <div className="mb-3">
            <Text weight="strong" className="d-block">
              center
            </Text>
          </div>
          <div className="p-4 border rounded-10 bg-white">
            <Flex alignItems="center" gap={12} className="p-4 border rounded-10 bg-secondary-lightest h-100">
              <div className="p-3 h-25 bg-primary-lighter rounded-10 d-flex align-items-center justify-content-center">
                <Text className="d-block">Basic Records</Text>
              </div>
              <div className="p-3 h-50 bg-primary-lighter rounded-10 d-flex align-items-center justify-content-center">
                <Text className="d-block">Standard Records</Text>
              </div>
              <div className="p-3 h-75 bg-primary-lighter rounded-10 d-flex align-items-center justify-content-center">
                <Text className="d-block">Complete Records</Text>
              </div>
            </Flex>
          </div>
        </Card>

        <Card className="p-5">
          <div className="mb-3">
            <Text weight="strong" className="d-block">
              flex-start
            </Text>
          </div>
          <div className="p-4 border rounded-10 bg-white">
            <Flex alignItems="flex-start" gap={16} className="p-4 border rounded-10 bg-secondary-lightest h-100">
              <Card className="p-3 bg-primary-lighter">
                <div>
                  <Text weight="strong" className="d-block">
                    John Smith
                  </Text>
                  <Text className="d-block">Patient ID: PT-12345</Text>
                  <Badge appearance="primary" className="mt-2">
                    Checkup
                  </Badge>
                </div>
              </Card>
              <Card className="p-3 bg-primary-lighter">
                <div>
                  <Text weight="strong" className="d-block">
                    Maria Garcia
                  </Text>
                  <Text className="d-block">Patient ID: PT-23456</Text>
                  <Text className="d-block">Age: 42</Text>
                  <Text className="d-block">Condition: Hypertension</Text>
                  <Text className="d-block">Last Visit: 01/15/2023</Text>
                  <Badge appearance="warning" className="mt-2">
                    Follow-up
                  </Badge>
                </div>
              </Card>
              <Card className="p-3 bg-primary-lighter">
                <div>
                  <Text weight="strong" className="d-block">
                    Robert Johnson
                  </Text>
                  <Text className="d-block">Patient ID: PT-34567</Text>
                  <Text className="d-block">Age: 65</Text>
                  <Badge appearance="success" className="mt-2">
                    Consultation
                  </Badge>
                </div>
              </Card>
            </Flex>
          </div>
        </Card>

        <Card className="p-5">
          <div className="mb-3">
            <Text weight="strong" className="d-block">
              stretch (default)
            </Text>
          </div>
          <div className="p-4 border rounded-10 bg-white">
            <Flex alignItems="stretch" gap={16} className="p-4 border rounded-10 bg-secondary-lightest h-100">
              <Card className="p-3 bg-primary-lighter">
                <Flex direction="column" justifyContent="space-between" className="h-100">
                  <div>
                    <Flex alignItems="center" gap={8} className="mb-2">
                      <Icon name="person" size={16} className="color-primary" />
                      <Text weight="strong" className="d-block">
                        David Lee
                      </Text>
                    </Flex>
                    <Text className="d-block">Patient ID: PT-56789</Text>
                  </div>
                  <Badge appearance="secondary" className="mt-2 w-fit">
                    Scheduled
                  </Badge>
                </Flex>
              </Card>

              <Card className="p-3 bg-primary-lighter">
                <Flex direction="column" justifyContent="space-between" className="h-100">
                  <div>
                    <Flex alignItems="center" gap={8} className="mb-2">
                      <Icon name="person" size={16} className="color-primary" />
                      <Text weight="strong" className="d-block">
                        Emily Wilson
                      </Text>
                    </Flex>
                    <Text className="d-block">Patient ID: PT-67890</Text>
                    <Text className="d-block">Age: 28</Text>
                    <Text className="d-block">Condition: Pregnancy</Text>
                    <Text className="d-block">Last Visit: 02/03/2023</Text>
                    <Text className="d-block">Doctor: Dr. Sarah Johnson</Text>
                    <Text className="d-block">Notes: Regular checkup, everything normal</Text>
                  </div>
                  <Badge appearance="primary" className="mt-2 w-fit">
                    Active
                  </Badge>
                </Flex>
              </Card>

              <Card className="p-3 bg-primary-lighter">
                <Flex direction="column" justifyContent="space-between" className="h-100">
                  <div>
                    <Flex alignItems="center" gap={8} className="mb-2">
                      <Icon name="person" size={16} className="color-primary" />
                      <Text weight="strong" className="d-block">
                        Michael Chen
                      </Text>
                    </Flex>
                    <Text className="d-block">Patient ID: PT-78901</Text>
                    <Text className="d-block">Age: 53</Text>
                    <Text className="d-block">Condition: Diabetes</Text>
                  </div>
                  <Badge appearance="alert" className="mt-2 w-fit">
                    Urgent
                  </Badge>
                </Flex>
              </Card>
            </Flex>
          </div>
        </Card>
      </Flex>
    </Card>
  </div>
);

AlignItems.parameters = {
  docs: {
    description: {
      story:
        'The alignItems property controls how patient record cards are aligned vertically, particularly useful when they contain different amounts of information.',
    },
  },
};

export default {
  title: 'Components/Flex/Alignment',
  component: Flex,
  parameters: {
    docs: {
      description: {
        component:
          'Alignment properties of the Flex component with practical examples showing different alignment options.',
      },
    },
  },
};
