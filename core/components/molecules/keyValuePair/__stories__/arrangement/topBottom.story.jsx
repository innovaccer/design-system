import * as React from 'react';
import { KeyValuePair, Card, Heading, Avatar, Text } from '@/index';

export const topBottomArrangement = () => {
  const healthRecordList = [
    { key: 'TIN', value: '879-79-7989' },
    { key: 'Location', value: 'San Diego, California' },
    { key: 'PCPs', value: '2' },
    { key: 'Risk score', value: '1.5' },
    { key: 'Assignee', value: 'Joy Lawson', showAvatar: true },
    { key: 'Quality score', value: '89' },
    { key: 'Patient count', value: '590' },
  ];

  return (
    <Card className="p-6" shadow="none">
      <Heading size="s">Health center</Heading>
      <div className="d-flex justify-content-between mt-4">
        {healthRecordList.map((healthRecord) => {
          return (
            <KeyValuePair key={healthRecord}>
              <KeyValuePair.Key label={healthRecord.key} />
              <KeyValuePair.Value value={healthRecord.value}>
                {healthRecord.showAvatar && (
                  <div className="mt-3 d-flex align-items-center">
                    <Avatar appearance="primary" firstName="Joy" lastName="Lawson" size="tiny" />
                    <Text className="ml-4">{healthRecord.value}</Text>
                  </div>
                )}
              </KeyValuePair.Value>
            </KeyValuePair>
          );
        })}
      </div>
    </Card>
  );
};

const customCode = `() => {
  const healthRecordList = [
    { key: 'TIN', value: '879-79-7989' },
    { key: 'Location', value: 'San Diego, California' },
    { key: 'PCPs', value: '2' },
    { key: 'Risk score', value: '1.5' },
    { key: 'Assignee', value: 'Joy Lawson', showAvatar: true },
    { key: 'Quality score', value: '89' },
    { key: 'Patient count', value: '590' },
  ];

  return (
    <Card className="p-6" shadow="none">
      <Heading size="s">Health center</Heading>
      <div className="d-flex justify-content-between mt-4">
        {healthRecordList.map((healthRecord) => {
          return (
            <KeyValuePair key={healthRecord}>
              <KeyValuePair.Key label={healthRecord.key} />
              <KeyValuePair.Value value={healthRecord.value}>
                {healthRecord.showAvatar && (
                  <div className="mt-3 d-flex align-items-center">
                    <Avatar appearance="primary" firstName="Joy" lastName="Lawson" size="tiny" />
                    <Text className="ml-4">{healthRecord.value}</Text>
                  </div>
                )}
              </KeyValuePair.Value>
            </KeyValuePair>
          );
        })}
      </div>
    </Card>
  );
}`;

export default {
  title: 'Components/KeyValuePair/Arrangement/Top Bottom Arrangement',
  component: KeyValuePair,
  subcomponents: { 'KeyValuePair.Key': KeyValuePair.Key, 'KeyValuePair.Value': KeyValuePair.Value },
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
