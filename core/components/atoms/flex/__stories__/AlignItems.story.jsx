import * as React from 'react';
import { Flex, Text } from '@/index';

export const AlignItems = () => {
  return (
    <div className="d-flex flex-column">
      <div className="mb-8">
        <div className="mb-5">
          <Text appearance="strong" size="large">
            flex-start
          </Text>
        </div>
        <div className="h-25">
          <Flex alignItems="flex-start" gap="spacing-20" className="border p-5 bg-secondary-lightest h-100">
            <div className="bg-primary-lighter p-3">
              <Text>Patients</Text>
            </div>
            <div className="bg-primary-lighter p-5">
              <Text>Appointments</Text>
            </div>
            <div className="bg-primary-lighter p-7">
              <Text>Records</Text>
            </div>
          </Flex>
        </div>
      </div>

      <div className="mb-8">
        <div className="mb-5">
          <Text appearance="strong" size="large">
            center
          </Text>
        </div>
        <div className="h-25">
          <Flex alignItems="center" gap="spacing-20" className="border p-5 bg-secondary-lightest h-100">
            <div className="bg-primary-lighter p-3">
              <Text>Cardiology</Text>
            </div>
            <div className="bg-primary-lighter p-5">
              <Text>Neurology</Text>
            </div>
            <div className="bg-primary-lighter p-7">
              <Text>Pediatrics</Text>
            </div>
          </Flex>
        </div>
      </div>

      <div className="mb-8">
        <div className="mb-5">
          <Text appearance="strong" size="large">
            flex-end
          </Text>
        </div>
        <div className="h-25">
          <Flex alignItems="flex-end" gap="spacing-20" className="border p-5 bg-secondary-lightest h-100">
            <div className="bg-primary-lighter p-3">
              <Text>Inpatient</Text>
            </div>
            <div className="bg-primary-lighter p-5">
              <Text>Outpatient</Text>
            </div>
            <div className="bg-primary-lighter p-7">
              <Text>Emergency</Text>
            </div>
          </Flex>
        </div>
      </div>

      <div className="mb-8">
        <div className="mb-5">
          <Text appearance="strong" size="large">
            baseline
          </Text>
        </div>
        <div className="h-25">
          <Flex alignItems="baseline" gap="spacing-20" className="border p-5 bg-secondary-lightest h-100">
            <div className="bg-primary-lighter p-4">
              <Text size="small">General</Text>
            </div>
            <div className="bg-primary-lighter p-4">
              <Text>Cardiology</Text>
            </div>
            <div className="bg-primary-lighter p-4">
              <Text size="large">Neurology</Text>
            </div>
          </Flex>
        </div>
      </div>

      <div>
        <div className="mb-5">
          <Text appearance="strong" size="large">
            stretch (default)
          </Text>
        </div>
        <div className="h-25">
          <Flex alignItems="stretch" gap="spacing-20" className="border p-5 bg-secondary-lightest h-100">
            <div className="bg-primary-lighter p-4">
              <Text>Admit</Text>
            </div>
            <div className="bg-primary-lighter p-4">
              <Text>Discharge</Text>
            </div>
            <div className="bg-primary-lighter p-4">
              <Text>Schedule</Text>
            </div>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Layout/Flex/AlignItems',
  component: Flex,
  parameters: {
    docs: {
      description: {
        component: 'Demonstrates various alignItems options for Flex component.',
      },
      docPage: {
        title: 'Flex AlignItems',
      },
    },
  },
};
