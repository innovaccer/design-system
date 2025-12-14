import * as React from 'react';
import { Flex, Text } from '@/index';

export const JustifyContent = () => {
  return (
    <div className="d-flex flex-column">
      <div className="mb-8">
        <div className="mb-5">
          <Text appearance="strong" size="large">
            flex-start (default)
          </Text>
        </div>
        <Flex justifyContent="flex-start" gap="spacing-30" className="border p-5 bg-secondary-lightest">
          <div className="bg-primary-lighter p-4">
            <Text>Cardiology</Text>
          </div>
          <div className="bg-primary-lighter p-4">
            <Text>Neurology</Text>
          </div>
          <div className="bg-primary-lighter p-4">
            <Text>Pediatrics</Text>
          </div>
        </Flex>
      </div>

      <div className="mb-8">
        <div className="mb-5">
          <Text appearance="strong" size="large">
            flex-end
          </Text>
        </div>
        <Flex justifyContent="flex-end" gap="spacing-30" className="border p-5 bg-secondary-lightest">
          <div className="bg-primary-lighter p-4">
            <Text>Cardiology</Text>
          </div>
          <div className="bg-primary-lighter p-4">
            <Text>Neurology</Text>
          </div>
          <div className="bg-primary-lighter p-4">
            <Text>Pediatrics</Text>
          </div>
        </Flex>
      </div>

      <div className="mb-8">
        <div className="mb-5">
          <Text appearance="strong" size="large">
            center
          </Text>
        </div>
        <Flex justifyContent="center" gap="spacing-30" className="border p-5 bg-secondary-lightest">
          <div className="bg-primary-lighter p-4">
            <Text>Cardiology</Text>
          </div>
          <div className="bg-primary-lighter p-4">
            <Text>Neurology</Text>
          </div>
          <div className="bg-primary-lighter p-4">
            <Text>Pediatrics</Text>
          </div>
        </Flex>
      </div>

      <div className="mb-8">
        <div className="mb-5">
          <Text appearance="strong" size="large">
            space-between
          </Text>
        </div>
        <Flex justifyContent="space-between" gap="spacing-20" className="border p-5 bg-secondary-lightest">
          <div className="bg-primary-lighter p-4">
            <Text>Inpatient</Text>
          </div>
          <div className="bg-primary-lighter p-4">
            <Text>Outpatient</Text>
          </div>
          <div className="bg-primary-lighter p-4">
            <Text>Emergency</Text>
          </div>
        </Flex>
      </div>

      <div className="mb-8">
        <div className="mb-5">
          <Text appearance="strong" size="large">
            space-around
          </Text>
        </div>
        <Flex justifyContent="space-around" className="border p-5 bg-secondary-lightest">
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

      <div>
        <div className="mb-5">
          <Text appearance="strong" size="large">
            space-evenly
          </Text>
        </div>
        <Flex justifyContent="space-evenly" className="border p-5 bg-secondary-lightest">
          <div className="bg-primary-lighter p-4">
            <Text>Patients</Text>
          </div>
          <div className="bg-primary-lighter p-4">
            <Text>Appointments</Text>
          </div>
          <div className="bg-primary-lighter p-4">
            <Text>Records</Text>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Layout/Flex/JustifyContent',
  component: Flex,
  parameters: {
    docs: {
      description: {
        component: 'Demonstrates various justifyContent options for Flex component.',
      },
      docPage: {
        title: 'Flex JustifyContent',
      },
    },
  },
};
