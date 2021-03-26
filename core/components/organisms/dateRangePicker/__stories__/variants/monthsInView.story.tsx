import * as React from 'react';
import { DateRangePicker } from '@/index';
import Card from '@/components/atoms/card';

// CSF format story
export const monthsInView = () => {
  const style = {
    flexDirection: 'column',
  };

  return (
    // @ts-ignore
    <div className="d-flex" style={style}>
      {Array.from([1, 2, 3], x => (
        <div className="mt-5" style={{ alignSelf: 'flex-start' }}>
          <Card
            className="d-inline-flex"
            shadow="light"
          >
            <DateRangePicker
              monthsInView={x}
              startDate={new Date(2019, 11, 3)}
              endDate={new Date(2020, x - 2, 11)}
              yearNav={2019}
              monthNav={11}
            />
          </Card>
        </div>
      ))}
    </div>
  );
};

export default {
  title: 'Components/DateRangePicker/Variants/Months In View',
  component: DateRangePicker,
  parameters: {
    docs: {
      docPage: {
        title: 'DateRangePicker'
      }
    }
  }
};
