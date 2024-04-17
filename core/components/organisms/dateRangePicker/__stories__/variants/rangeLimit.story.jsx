import * as React from 'react';
import { DateRangePicker } from '@/index';
import Card from '@/components/atoms/card';

// CSF format story
export const rangeLimit = () => {
  return (
    <div className="d-flex mr-9">
      <Card className="d-inline-flex" shadow="light">
        <DateRangePicker
          startDate={new Date(2023, 2, 3)}
          endDate={new Date(2023, 2, 11)}
          rangeLimit={7}
          yearNav={2023}
          monthNav={2}
        />
      </Card>
    </div>
  );
};

export default {
  title: 'Components/DatePicker/DateRangePicker/Variants/Range Limit',
  component: DateRangePicker,
  parameters: {
    docs: {
      docPage: {
        title: 'DateRangePicker',
      },
    },
  },
};
