import * as React from 'react';
import { DateRangePicker, InputMask } from '@/index';

const customCode = `

() => {
   class CustomPopover extends React.Component {
    constructor(props) {
      super(props);
      console.log(DateRangePicker.utils);
      const { startDate, endDate } = DateRangePicker.utils.getCurrentWeek();

      this.state = {
        startDate,
        endDate,
        selected: 'currWeek',
        monthNav: DateRangePicker.utils.getCurrentMonth()
      };

      this.renderChildren = this.renderChildren.bind(this);
      this.setDate = this.setDate.bind(this);
      this.onReset = this.onReset.bind(this);
    }

    setDate(date) {
      const d = new Date();
      return new Date(d.setDate(date));
    }

    onReset() {
      const { startDate, endDate } = DateRangePicker.utils.getCurrentWeek();
      this.setState({
        startDate,
        endDate,
        selected: 'currWeek',
        monthNav: DateRangePicker.utils.getCurrentMonth(),
      });
    }

    renderChildren() {
      const { startDate, endDate, selected } = this.state;

      return (
        <div className="pt-5 px-6" style={{ borderRight: 'var(--border)' }}>
          <div className="d-flex align-items-center justify-content-between">
            <Heading size="s" className="py-3">Range</Heading>
            <Icon name="refresh" onClick={this.onReset} />
          </div>
          <div className="pt-5">
            <Radio
              label="This week"
              name="rangePicker"
              value="currWeek"
              className="pb-6"
              checked={selected === 'currWeek'}
              onChange={this.onReset}
            />
            <Radio
              label="Last week"
              name="rangePicker"
              value="prevWeek"
              className="pb-6"
              checked={selected === 'prevWeek'}
              onChange={() => {
                this.setState({
                  selected: 'prevWeek',
                  monthNav: DateRangePicker.utils.getCurrentMonth(),
                  ...DateRangePicker.utils.getPreviousWeek()
                });
              }}
            />
            <Radio
              label="Last month"
              name="rangePicker"
              value="prevMonth"
              className="pb-6"
              checked={selected === 'prevMonth'}
              onChange={() => {
                this.setState({
                  selected: 'prevMonth',
                  monthNav: DateRangePicker.utils.getCurrentMonth() - 1,
                  ...DateRangePicker.utils.getPreviousMonth()
                });
              }}
            />
            <Radio
              label="Last 90 days"
              name="rangePicker"
              value="prev90Days"
              className="pb-6"
              checked={selected === 'prev90Days'}
              onChange={() => {
                this.setState({
                  selected: 'prev90Days',
                  monthNav: DateRangePicker.utils.getCurrentMonth(),
                  ...DateRangePicker.utils.getPrevious90Days()
                });
              }}
            />
            <Radio
              label="Custom"
              name="rangePicker"
              value="custom"
              checked={selected === 'custom'}
              onChange={() => {
                this.setState({
                  selected: 'custom',
                  monthNav: DateRangePicker.utils.getCurrentMonth(),
                  ...DateRangePicker.utils.getCustomDates()
                });
              }}
            />
          </div>
        </div>
      );
    };

    render() {
      const { startDate, endDate, monthNav } = this.state;

      return (
        <div className="w-25">
          <DateRangePicker
            withInput={true}
            singleInput={true}
            startDate={startDate}
            endDate={endDate}
            onRangeChange={(sDate, eDate, sValue, eValue) => {
              console.log(sDate, eDate);
            }}
            monthsInView={1}
            monthNav={monthNav}
          >
            {this.renderChildren()}
          </DateRangePicker>
        </div>
      )
    }
  }

  return <CustomPopover />
}`;

export const withCustomPopover = () => <></>;

export default {
  title: 'Patterns/DateRangePicker/With Custom Popover',
  component: DateRangePicker,
  subcomponents: { InputMask },
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'Date range picker with custom Popover',
        noProps: true
      }
    }
  }
};
