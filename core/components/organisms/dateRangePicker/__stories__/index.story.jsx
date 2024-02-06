import * as React from 'react';
import { DateRangePicker, InputMask, Card } from '@/index';
import { action } from '@/utils/action';

// CSF format story
export const all = () => {
  const withInput = false;

  const open = false;

  const monthsInView = withInput ? 2 : 1;

  const inputFormat = 'dd/mm/yyyy';

  const outputFormat = 'mm/dd/yyyy';

  const startDate = new Date('Jun 20 2023');

  const endDate = new Date('Jun 27 2023');

  const view = 'month';

  const rangeLimit = 0;

  const firstDayOfWeek = 'thursday';

  const disabledBefore = new Date('Jan 20 2015');

  const disabledAfter = new Date('Jan 20 2028');

  const jumpView = true;

  const yearNav = -1;

  const monthNav = -1;

  const attr = {};
  if (disabledBefore) attr.disabledBefore = disabledBefore;
  if (disabledAfter) attr.disabledAfter = disabledAfter;
  if (rangeLimit) attr.rangeLimit = rangeLimit;
  if (yearNav !== -1) attr.yearNav = yearNav;
  if (monthNav !== -1) attr.monthNav = monthNav;

  if (withInput) {
    return (
      <DateRangePicker
        withInput={withInput}
        open={open}
        monthsInView={monthsInView}
        inputFormat={inputFormat}
        outputFormat={outputFormat}
        jumpView={jumpView}
        startDate={startDate}
        endDate={endDate}
        onRangeChange={(sDate, eDate, sValue, eValue) =>
          action(`on range change: ${sDate} - ${eDate} ---- ${sValue} - ${eValue}`)()
        }
        view={view}
        firstDayOfWeek={firstDayOfWeek}
        {...attr}
      />
    );
  }
  return (
    <Card className="d-inline-flex" shadow="light">
      <DateRangePicker
        withInput={withInput}
        monthsInView={monthsInView}
        jumpView={jumpView}
        startDate={startDate}
        endDate={endDate}
        onRangeChange={(sDate, eDate, sValue, eValue) =>
          action(`on range change: ${sDate} - ${eDate} ---- ${sValue} - ${eValue}`)()
        }
        view={view}
        firstDayOfWeek={firstDayOfWeek}
        {...attr}
      />
    </Card>
  );
};

const customCode = `() => {
  const [dateRange, setDateRange] = React.useState([]);
  return (
    <div className="w-50">
      <DateRangePicker
        disabledAfter={new Date("2028-01-19T18:30:00.000Z")}
        disabledBefore={new Date("2015-01-19T18:30:00.000Z")}
        startDate={dateRange.length > 0 ? new Date(dateRange[0]) : ""}
        endDate={dateRange.length > 0 ? new Date(dateRange[1]) : ""}
        firstDayOfWeek="monday"
        inputFormat="dd/mm/yyyy"
        inputOptions={{
          label: "Date",
          required: true,
        }}
        monthsInView={1}
        onRangeChange={function (sDate, eDate, sVal, eVal) {
          console.log('bb', sVal, eVal);
          sVal && eVal && setDateRange([sVal, eVal]);
        }}
        outputFormat="mm-dd-yyyy"
        singleInput={true}
        withInput={true}
      >
        <React.Fragment key=".0" />
      </DateRangePicker>
    </div>
  );
}`;

export default {
  title: 'Date and Time/DateRangePicker/All',
  component: DateRangePicker,
  subcomponents: { InputMask },
  parameters: {
    docs: {
      docPage: {
        customCode,
      },
    },
  },
};
