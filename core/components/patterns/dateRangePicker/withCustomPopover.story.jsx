import * as React from 'react';
import { action } from '@/utils/action';
import { DateRangePicker, InputMask, Subheading, Chip, Divider, Icon } from '@/index';

const customCode = `

() => {
  class CustomPopover extends React.Component {
    constructor(props) {
      super(props);
      const { startDate, endDate } = DateRangePicker.utils.getCurrentWeek();

      this.state = {
        startDate,
        endDate,
        selected: 'currWeek',
        monthNav: DateRangePicker.utils.getCurrentMonth(),
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
      this.setState({
        startDate:null,
        endDate:null,
        selected: "",
        monthNav: DateRangePicker.utils.getCurrentMonth()
      });
    }

    renderChildren() {
      const { startDate, endDate, selected } = this.state;

      return (
        <div className="pt-6 px-5">
          <div className="d-flex align-items-center justify-content-between">
            <Subheading size="s" className="py-3" appearance="subtle">Range</Subheading>
            <Icon name="refresh" onClick={this.onReset} />
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
                this.setState({
                  selected: "currWeek",
                  monthNav: DateRangePicker.utils.getCurrentMonth(),
                  ...DateRangePicker.utils.getCurrentWeek()
                });
              }}
            />
            <Chip
              label="Last week"
              clearButton={false}
              type="selection"
              className="mb-5 d-block"
              selected={selected === 'prevWeek'}
              name={"chip"}
              onClick={() => {
                this.setState({
                  selected: "prevWeek",
                  monthNav: DateRangePicker.utils.getCurrentMonth(),
                  ...DateRangePicker.utils.getPreviousWeek()
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
                this.setState({
                  selected: "prevMonth",
                  monthNav: DateRangePicker.utils.getCurrentMonth() - 1,
                  ...DateRangePicker.utils.getPreviousMonth()
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
                this.setState({
                  selected: "prev90Days",
                  monthNav: DateRangePicker.utils.getCurrentMonth(),
                  ...DateRangePicker.utils.getPrevious90Days()
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
                this.setState({
                  selected: "custom",
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
            <Divider vertical={true} />
          </DateRangePicker>
        </div>
      )
    }
  }

  return <CustomPopover />
}`;

export const withCustomPopover = () => {
  class CustomPopover extends React.Component {
    constructor(props) {
      super(props);
      const { startDate, endDate } = DateRangePicker.utils.getCurrentWeek();

      this.state = {
        startDate,
        endDate,
        selected: 'currWeek',
        monthNav: DateRangePicker.utils.getCurrentMonth(),
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
      this.setState({
        startDate: null,
        endDate: null,
        selected: '',
        monthNav: DateRangePicker.utils.getCurrentMonth(),
      });
    }

    renderChildren() {
      const { selected } = this.state;

      return (
        <div className="pt-6 px-5">
          <div className="d-flex align-items-center justify-content-between">
            <Subheading size="s" className="py-3" appearance="subtle">
              Range
            </Subheading>
            <Icon name="refresh" onClick={this.onReset} />
          </div>
          <div className="pt-5">
            <Chip
              label="This week"
              clearButton={false}
              type="selection"
              className="mb-5 d-block"
              selected={selected === 'currWeek'}
              name="rangePicker"
              onClick={() => {
                this.setState({
                  selected: 'currWeek',
                  monthNav: DateRangePicker.utils.getCurrentMonth(),
                  ...DateRangePicker.utils.getCurrentWeek(),
                });
              }}
            />
            <Chip
              label="Last week"
              clearButton={false}
              type="selection"
              className="mb-5 d-block"
              selected={selected === 'prevWeek'}
              name={'chip'}
              onClick={() => {
                this.setState({
                  selected: 'prevWeek',
                  monthNav: DateRangePicker.utils.getCurrentMonth(),
                  ...DateRangePicker.utils.getPreviousWeek(),
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
                this.setState({
                  selected: 'prevMonth',
                  monthNav: DateRangePicker.utils.getCurrentMonth() - 1,
                  ...DateRangePicker.utils.getPreviousMonth(),
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
                this.setState({
                  selected: 'prev90Days',
                  monthNav: DateRangePicker.utils.getCurrentMonth(),
                  ...DateRangePicker.utils.getPrevious90Days(),
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
                this.setState({
                  selected: 'custom',
                  monthNav: DateRangePicker.utils.getCurrentMonth(),
                  ...DateRangePicker.utils.getCustomDates(),
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
            onRangeChange={(sDate, eDate) => {
              action(sDate, eDate);
            }}
            monthsInView={1}
            monthNav={monthNav}
          >
            {this.renderChildren()}
            <Divider vertical={true} />
          </DateRangePicker>
        </div>
      );
    }
  }

  return <CustomPopover />;
};

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
