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

    onToggleHandler(val) {
      this.setState({
        open: val
      });
    }

    onSelectHandler(option) {
      this.setState({
        time: option ? option.value : undefined
      });
    }

    render() {
      const timeValues = ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM'];
      const {
        open,
        time
      } = this.state;

      const selectedValue = time ? { label: time, value: time } : undefined;

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
            <Select
              width="100%"
              onSelect={this.onSelectHandler.bind(this)}
              value={selectedValue}
              onToggle={this.onToggleHandler.bind(this)}
            >
              <Select.List>
                {timeValues.map((value) => (
                  <Select.Option key={value} option={{ label: value, value }}>
                    {value}
                  </Select.Option>
                ))}
              </Select.List>
            </Select>
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
