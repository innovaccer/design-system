import * as React from 'react';
import { DateRangePicker, InputMask } from '@/index';

const customCode = `

() => {
  class CustomPopover extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        startDate: null,
        endDate: null,
        selected: 'custom',
        monthNav: DateRangePicker.utils.getCurrentMonth(),
      };

      this.renderChildren = this.renderChildren.bind(this);
      this.setDate = this.setDate.bind(this);
      this.onReset = this.onReset.bind(this);
      this.checkAndUpdateChipSelection = this.checkAndUpdateChipSelection.bind(this);
    }

    setDate(date) {
      const d = new Date();
      return new Date(d.setDate(date));
    }

    onReset() {
      const today = new Date();
      this.setState({
        startDate: today,
        endDate: today,
        selected: "custom",
        monthNav: DateRangePicker.utils.getCurrentMonth()
      });
    }

    checkAndUpdateChipSelection(startDate, endDate) {
      if (!startDate || !endDate) {
        this.setState({ selected: 'custom' });
        return;
      }

      const currentWeek = DateRangePicker.utils.getCurrentWeek();
      const previousWeek = DateRangePicker.utils.getPreviousWeek();
      const previousMonth = DateRangePicker.utils.getPreviousMonth();
      const previous90Days = DateRangePicker.utils.getPrevious90Days();

      let selected = 'custom';

      if (this.areDateRangesEqual(startDate, endDate, currentWeek.startDate, currentWeek.endDate)) {
        selected = 'currWeek';
      } else if (this.areDateRangesEqual(startDate, endDate, previousWeek.startDate, previousWeek.endDate)) {
        selected = 'prevWeek';
      } else if (this.areDateRangesEqual(startDate, endDate, previousMonth.startDate, previousMonth.endDate)) {
        selected = 'prevMonth';
      } else if (this.areDateRangesEqual(startDate, endDate, previous90Days.startDate, previous90Days.endDate)) {
        selected = 'prev90Days';
      }

      this.setState({ selected });
    }

    areDateRangesEqual(start1, end1, start2, end2) {
      if (!start1 || !end1 || !start2 || !end2) return false;
      
      // Normalize dates to start of day for comparison
      const normalizeDate = (date) => {
        const d = new Date(date);
        d.setHours(0, 0, 0, 0);
        return d;
      };

      const s1 = normalizeDate(start1);
      const e1 = normalizeDate(end1);
      const s2 = normalizeDate(start2);
      const e2 = normalizeDate(end2);

      return s1.getTime() === s2.getTime() && e1.getTime() === e2.getTime();
    }

    renderChildren() {
      const { startDate, endDate, selected } = this.state;

      return (
        <div className="pt-6 px-5">
          <div className="d-flex align-items-center justify-content-between">
            <Subheading size="s" className="py-3" appearance="subtle">Range</Subheading>
            <Button appearance="transparent" onClick={this.onReset} icon="refresh" />
          </div>
          <div className="pt-5">
            <Chip
              label="This week"
              clearButton={false}
              type="selection"
              className="mb-5 d-block"
              selected={selected === "currWeek"}
              name="rangePicker"
              onClick={() => {
                const { startDate, endDate } = DateRangePicker.utils.getCurrentWeek();
                this.setState({
                  selected: "currWeek",
                  monthNav: DateRangePicker.utils.getCurrentMonth(),
                  startDate,
                  endDate
                });
              }}
            />
            <Chip
              label="Last week"
              clearButton={false}
              type="selection"
              className="mb-5 d-block"
              selected={selected === 'prevWeek'}
              name="rangePicker"
              onClick={() => {
                const { startDate, endDate } = DateRangePicker.utils.getPreviousWeek();
                this.setState({
                  selected: "prevWeek",
                  monthNav: DateRangePicker.utils.getCurrentMonth(),
                  startDate,
                  endDate
                });
              }}
            />
            <Chip
              label="Last month"
              clearButton={false}
              type="selection"
              className="mb-5 d-block"
              selected={selected === 'prevMonth'}
              name="rangePicker"
              onClick={() => {
                const { startDate, endDate } = DateRangePicker.utils.getPreviousMonth();
                this.setState({
                  selected: "prevMonth",
                  monthNav: DateRangePicker.utils.getCurrentMonth() - 1,
                  startDate,
                  endDate
                });
              }}
            />
            <Chip
              label="Last 90 days"
              clearButton={false}
              type="selection"
              className="mb-5 d-block"
              selected={selected === 'prev90Days'}
              name="rangePicker"
              onClick={() => {
                const { startDate, endDate } = DateRangePicker.utils.getPrevious90Days();
                this.setState({
                  selected: "prev90Days",
                  monthNav: DateRangePicker.utils.getCurrentMonth(),
                  startDate,
                  endDate
                });
              }}
            />
            <Chip
              label="Custom"
              clearButton={false}
              type="selection"
              className="mb-5 d-block"
              selected={selected === 'custom'}
              name="rangePicker"
              onClick={() => {
                const today = new Date();
                this.setState({
                  selected: "custom",
                  monthNav: DateRangePicker.utils.getCurrentMonth(),
                  startDate: today,
                  endDate: null
                });
              }}
            />
          </div>
        </div>
      );
    }

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
              this.setState({ startDate: sDate, endDate: eDate });
              this.checkAndUpdateChipSelection(sDate, eDate);
            }}
            monthsInView={1}
            monthNav={monthNav}
          >
            {this.renderChildren()}
            <Divider vertical={true} />
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
        noProps: true,
      },
    },
  },
};
