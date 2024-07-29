import * as React from 'react';
import { KeyValuePair, Card } from '@/index';

export const topBottomWidth = () => {
  return (
    <Card className="p-7 w-25" shadow="none">
      <KeyValuePair>
        <KeyValuePair.Key label="Additional comments" />
        <KeyValuePair.Value value="Patient visited the clinic and requested an appointment." />
      </KeyValuePair>
    </Card>
  );
};

export default {
  title: 'Components/KeyValuePair/Width/Top Bottom Width',
  component: KeyValuePair,
  subcomponents: { 'KeyValuePair.Key': KeyValuePair.Key, 'KeyValuePair.Value': KeyValuePair.Value },
};
