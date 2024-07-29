import * as React from 'react';
import { KeyValuePair, Text } from '@/index';

export const all = () => {
  return (
    <div className="d-flex justify-content-between w-75">
      <div>
        <Text weight="strong">Left Right Arrangement</Text>
        <KeyValuePair className="d-flex mt-8">
          <KeyValuePair.Key className="mr-7" icon="call" label="Phone" />
          <KeyValuePair.Value value="(555) 555-5555" />
        </KeyValuePair>
      </div>
      <div>
        <Text weight="strong">Top Bottom Arrangement</Text>
        <KeyValuePair className="mt-8">
          <KeyValuePair.Key label="Name" />
          <KeyValuePair.Value value="Joy Lawson" />
        </KeyValuePair>
      </div>
    </div>
  );
};

export default {
  title: 'Components/KeyValuePair/All',
  component: KeyValuePair,
  subcomponents: { 'KeyValuePair.Key': KeyValuePair.Key, 'KeyValuePair.Value': KeyValuePair.Value },
};
