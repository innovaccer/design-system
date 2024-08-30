import * as React from 'react';
import { KeyValuePair, Card } from '@/index';

export const columnWithVariableWidth = () => {
  return (
    <div>
      <Card className="px-6 py-7" shadow="none">
        <div className="d-flex justify-content-between w-50">
          <KeyValuePair className="d-flex flex-column">
            <KeyValuePair.Key label="Provider" />
            <KeyValuePair.Value value="Dr. Anil Jain" />
          </KeyValuePair>
          <KeyValuePair className="d-flex flex-column">
            <KeyValuePair.Key label="Score" />
            <KeyValuePair.Value value="89" />
          </KeyValuePair>
          <KeyValuePair className="d-flex flex-column">
            <KeyValuePair.Key label="TIN" />
            <KeyValuePair.Value value="879-79-7989" />
          </KeyValuePair>
          <KeyValuePair className="d-flex flex-column">
            <KeyValuePair.Key label="Location" />
            <KeyValuePair.Value value="San Diego, California" />
          </KeyValuePair>
        </div>
      </Card>
    </div>
  );
};

export default {
  title: 'Components/KeyValuePair/Multiple Column Layout/Column With Variable Width',
  component: KeyValuePair,
  subcomponents: { 'KeyValuePair.Key': KeyValuePair.Key, 'KeyValuePair.Value': KeyValuePair.Value },
};
