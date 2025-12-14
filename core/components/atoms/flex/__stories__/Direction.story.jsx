import * as React from 'react';
import { Flex, Text } from '@/index';

export const Row = () => {
  return (
    <div className="d-flex flex-column">
      <div className="mb-8">
        <div className="mb-5">
          <Text appearance="strong" size="large">
            Row Direction (default)
          </Text>
        </div>
        <Flex direction="row" gap="spacing-30" className="border p-5 bg-secondary-lightest">
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
    </div>
  );
};

export const Column = () => {
  return (
    <div className="d-flex flex-column">
      <div className="mb-8">
        <div className="mb-5">
          <Text appearance="strong" size="large">
            Column Direction
          </Text>
        </div>
        <Flex direction="column" gap="spacing-20" className="border p-5 bg-secondary-lightest">
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

export const RowReverse = () => {
  return (
    <div className="d-flex flex-column">
      <div className="mb-8">
        <div className="mb-5">
          <Text appearance="strong" size="large">
            Row Reverse Direction
          </Text>
        </div>
        <Flex direction="row-reverse" gap="spacing-30" className="border p-5 bg-secondary-lightest">
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
    </div>
  );
};

export const ColumnReverse = () => {
  return (
    <div className="d-flex flex-column">
      <div>
        <div className="mb-5">
          <Text appearance="strong" size="large">
            Column Reverse Direction
          </Text>
        </div>
        <Flex direction="column-reverse" gap="spacing-20" className="border p-5 bg-secondary-lightest">
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
  title: 'Components/Layout/Flex/Direction',
  component: Flex,
  parameters: {
    docs: {
      description: {
        component: 'Direction variants of the Flex component showing how different directions affect layout.',
      },
    },
  },
};
