import * as React from 'react';
import { KeyValuePair, Card, Heading } from '@/index';

export const topBottomArrangement = () => {
  const healthRecordList = [
    { key: 'Provider', value: 'Dr. Anil Jain' },
    { key: 'TIN', value: '879-79-7989' },
    { key: 'Location', value: 'San Diego, California' },
    { key: 'PCPs', value: '2' },
    { key: 'Risk score', value: '1.5' },
    { key: 'Quality score', value: '89' },
    { key: 'Patient count', value: '590' },
  ];

  return (
    <Card className="p-6" shadow="none">
      <Heading size="s">Health center</Heading>
      <div className="d-flex justify-content-between mt-4">
        {healthRecordList.map((healthRecord) => {
          return (
            <KeyValuePair className="d-flex flex-column" key={healthRecord}>
              <KeyValuePair.Key label={healthRecord.key} />
              <KeyValuePair.Value value={healthRecord.value} />
            </KeyValuePair>
          );
        })}
      </div>
    </Card>
  );
};

const customCode = `() => {
  const healthRecordList = [
    { key: 'Provider', value: 'Dr. Anil Jain' },
    { key: 'TIN', value: '879-79-7989' },
    { key: 'Location', value: 'San Diego, California' },
    { key: 'PCPs', value: '2' },
    { key: 'Risk score', value: '1.5' },
    { key: 'Quality score', value: '89' },
    { key: 'Patient count', value: '590' },
  ];

  return (
    <Card className="p-6" shadow="none">
      <Heading size="s">Health center</Heading>
      <div className="d-flex justify-content-between mt-4">
        {healthRecordList.map((healthRecord) => {
          return (
            <KeyValuePair className="d-flex flex-column" key={healthRecord}>
              <KeyValuePair.Key label={healthRecord.key} />
              <KeyValuePair.Value value={healthRecord.value} />
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
