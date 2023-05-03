import * as React from 'react';
import { Radio, Row, Column, Text } from '@/index';

export const AlignmentOfRadioGroup = () => (
  <Row>
    <Column>
      <div className="pb-5">
        <Text>Horizontal alignment</Text>
      </div>
      <div className="d-flex">
        <div className="mr-9 ">
          <Radio size={'regular'} label={'Male'} name={'Gender'} value={'Male'} defaultChecked={true} />
        </div>

        <div className="mr-9 ">
          <Radio size={'regular'} label={'Female'} name={'Gender'} value={'Female'} />
        </div>

        <div className="mr-9 ">
          <Radio size={'regular'} label={'Other'} name={'Gender'} value={'Other'} />
        </div>
      </div>
    </Column>
    <Column>
      <div className="pb-5">
        <Text>Vertical alignment</Text>
      </div>

      <Radio size={'regular'} label={'Male'} name={'gender'} value={'Male'} defaultChecked={true} />

      <Radio size={'regular'} label={'Female'} name={'gender'} value={'Female'} />

      <Radio size={'regular'} label={'Other'} name={'gender'} value={'Other'} />
    </Column>
  </Row>
);

export default {
  title: 'Selection/Radio/Alignment Of Radio Group',
  component: Radio,
  parameters: {
    docs: {
      docPage: {
        props: { exclude: ['key'] },
      },
    },
  },
};
