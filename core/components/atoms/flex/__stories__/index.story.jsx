import * as React from 'react';
import { Flex, Text } from '@/index';

export const All = () => {
  return (
    <div className="d-flex flex-column">
      <div className="mb-8">
        <div className="mb-5">
          <Text appearance="strong" size="large">
            Basic Flex Layout
          </Text>
        </div>
        <Flex gap="spacing-20">
          <div className="bg-secondary-lightest p-5">
            <Text>Patients</Text>
          </div>
          <div className="bg-secondary-lightest p-5">
            <Text>Appointments</Text>
          </div>
          <div className="bg-secondary-lightest p-5">
            <Text>Records</Text>
          </div>
        </Flex>
      </div>

      <div className="mb-8">
        <div className="mb-5">
          <Text appearance="strong" size="large">
            Column Direction
          </Text>
        </div>
        <Flex direction="column" gap="spacing-20">
          <div className="bg-secondary-lightest p-5">
            <Text>Cardiology</Text>
          </div>
          <div className="bg-secondary-lightest p-5">
            <Text>Neurology</Text>
          </div>
          <div className="bg-secondary-lightest p-5">
            <Text>Pediatrics</Text>
          </div>
        </Flex>
      </div>

      <div>
        <div className="mb-5">
          <Text appearance="strong" size="large">
            With Wrap
          </Text>
        </div>
        <Flex wrap="wrap" gap="spacing-20">
          <div className="bg-secondary-lightest p-5">
            <Text>General</Text>
          </div>
          <div className="bg-secondary-lightest p-5">
            <Text>Cardiology</Text>
          </div>
          <div className="bg-secondary-lightest p-5">
            <Text>Neurology</Text>
          </div>
          <div className="bg-secondary-lightest p-5">
            <Text>Orthopedics</Text>
          </div>
          <div className="bg-secondary-lightest p-5">
            <Text>Dermatology</Text>
          </div>
          <div className="bg-secondary-lightest p-5">
            <Text>Pediatrics</Text>
          </div>
          <div className="bg-secondary-lightest p-5">
            <Text>Gynecology</Text>
          </div>
          <div className="bg-secondary-lightest p-5">
            <Text>Oncology</Text>
          </div>
          <div className="bg-secondary-lightest p-5">
            <Text>Urology</Text>
          </div>
          <div className="bg-secondary-lightest p-5">
            <Text>Radiology</Text>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Layout/Flex/All',
  component: Flex,
  parameters: {
    docs: {
      description: {
        component:
          'Flex is a layout component that helps create flexible and responsive layouts using CSS Flexbox properties.',
      },
    },
  },
};
