import * as React from 'react';
import { Flex, Text } from '@/index';

export const Gap = () => {
  const spacingOptions = ['spacing-10', 'spacing-20', 'spacing-30', 'spacing-40', 'spacing-60'];

  const spacingValueMap = {
    'spacing-10': '4px',
    'spacing-20': '8px',
    'spacing-30': '12px',
    'spacing-40': '16px',
    'spacing-60': '24px',
  };

  return (
    <div className="d-flex flex-column">
      {spacingOptions.map((spacing, index) => (
        <div key={spacing} className={index < spacingOptions.length - 1 ? 'mb-8' : ''}>
          <div className="mb-5">
            <Text appearance="strong" size="large">
              Gap: {spacing} ({spacingValueMap[spacing]})
            </Text>
          </div>
          <Flex gap={spacing} className="border p-5 bg-secondary-lightest">
            <div className="bg-primary-lighter p-4">
              <Text>Cardiology</Text>
            </div>
            <div className="bg-primary-lighter p-4">
              <Text>Neurology</Text>
            </div>
            <div className="bg-primary-lighter p-4">
              <Text>Pediatrics</Text>
            </div>
            <div className="bg-primary-lighter p-4">
              <Text>Orthopedics</Text>
            </div>
          </Flex>
        </div>
      ))}
    </div>
  );
};

export const Wrap = () => {
  return (
    <div className="d-flex flex-column">
      <div className="mb-8">
        <div className="mb-5">
          <Text appearance="strong" size="large">
            No Wrap (nowrap)
          </Text>
        </div>
        <div className="w-50">
          <Flex wrap="nowrap" gap="spacing-20" className="border p-5 bg-secondary-lightest">
            <div className="bg-primary-lighter p-4">
              <Text>General</Text>
            </div>
            <div className="bg-primary-lighter p-4">
              <Text>Cardiology</Text>
            </div>
            <div className="bg-primary-lighter p-4">
              <Text>Neurology</Text>
            </div>
            <div className="bg-primary-lighter p-4">
              <Text>Orthopedics</Text>
            </div>
            <div className="bg-primary-lighter p-4">
              <Text>Dermatology</Text>
            </div>
          </Flex>
        </div>
      </div>

      <div className="mb-8">
        <div className="mb-5">
          <Text appearance="strong" size="large">
            Wrap
          </Text>
        </div>
        <div className="w-50">
          <Flex wrap="wrap" gap="spacing-20" className="border p-5 bg-secondary-lightest">
            <div className="bg-primary-lighter p-4">
              <Text>General</Text>
            </div>
            <div className="bg-primary-lighter p-4">
              <Text>Cardiology</Text>
            </div>
            <div className="bg-primary-lighter p-4">
              <Text>Neurology</Text>
            </div>
            <div className="bg-primary-lighter p-4">
              <Text>Orthopedics</Text>
            </div>
            <div className="bg-primary-lighter p-4">
              <Text>Dermatology</Text>
            </div>
            <div className="bg-primary-lighter p-4">
              <Text>Pediatrics</Text>
            </div>
          </Flex>
        </div>
      </div>

      <div>
        <div className="mb-5">
          <Text appearance="strong" size="large">
            Wrap Reverse
          </Text>
        </div>
        <div className="w-50">
          <Flex wrap="wrap-reverse" gap="spacing-20" className="border p-5 bg-secondary-lightest">
            <div className="bg-primary-lighter p-4">
              <Text>Inpatient</Text>
            </div>
            <div className="bg-primary-lighter p-4">
              <Text>Outpatient</Text>
            </div>
            <div className="bg-primary-lighter p-4">
              <Text>Emergency</Text>
            </div>
            <div className="bg-primary-lighter p-4">
              <Text>Scheduled</Text>
            </div>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Layout/Flex/GapAndWrap',
  component: Flex,
  parameters: {
    docs: {
      description: {
        component: 'Gap and wrap options for the Flex component.',
      },
    },
  },
};
