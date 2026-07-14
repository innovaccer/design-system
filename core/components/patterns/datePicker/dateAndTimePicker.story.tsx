import * as React from 'react';

export const dateAndTimePicker = () => <></>;

const customCode = `

() => {
  class DateTimePicker extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        open: false,
        date: undefined,
        time: undefined
      };
    }

    onDateChange(date, dateVal) {
      this.setState({
        date: dateVal,
        open: !!date
      });
    }

    onPopperToggle(val) {
      this.setState({
        open: val
      });
    }

    onChangeHandler(selected) {
      this.setState({
        time: selected
      });
    }

    render() {
      const timeValues = ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM'];
      const {
        open
      } = this.state;

      console.log("Date", this.state.date, "Time", this.state.time);

      return (
        <div className="d-flex">
          <div className="d-flex flex-column">
            <Label withInput>Date</Label>
            <DatePicker
              withInput={true}
              onDateChange={this.onDateChange.bind(this)}
            />
          </div>
          <div className="d-flex flex-column ml-5" style={{width: 'var(--spacing-440)'}}>
            <Label withInput>Time</Label>
            <Dropdown
              open={open}
              onPopperToggle={this.onPopperToggle.bind(this)}
              options={timeValues.map(value => ({label: value, value}))}
              onChange={this.onChangeHandler.bind(this)}
            />
          </div>
        </div>
      );
    }
  }

  return <DateTimePicker />
}`;

export default {
  title: 'Patterns/DatePicker/Date And Time Picker',
  parameters: {
    docs: {
      docPage: {
        customCode,
        noProps: true,
        title: 'Date and time picker',
      },
    },
  },
};
