import * as React from 'react';
import { DatePicker } from '@/index';

const customCode = `() => {

  const setDate = (jumpDateIndex) => {
    const d = new Date();
    return d.setDate(d.getDate() + jumpDateIndex);
  };

  const getTomorrowDate = setDate.bind(null, 1);
  const getThreeDaysLaterDate = setDate.bind(null, 3);
  const getOneWeekLaterDate = setDate.bind(null, 7);
  const getThirtyDaysLaterDate = setDate.bind(null, 30);

  
  const DatePickerPreset = ({ size, withInput=false }) => {
    
    const [date, setDate] = React.useState(new Date());
    const [selectedChip, setSelectedChip] = React.useState('today');
    
    const classNames = size === 'small' ? 'd-flex mb-4' : 'd-flex mb-5';
    return (
      <DatePicker date={date} showTodayDate={false} size={size} withInput={withInput}>
        <div className="pt-6 px-5">
          <div className="d-flex align-items-center justify-content-between">
            <Subheading size="s" appearance="subtle">
              Date
            </Subheading>
          </div>
          <div className="pt-4">
            <Chip
              label="Today"
              clearButton={false}
              type="action"
              className={classNames}
              selected={selectedChip === 'today'}
              name="rangePicker"
              onClick={() => {
                setDate(new Date)
                setSelectedChip('today')
              }}
            />
            <Chip
              label="Tomorrow"
              clearButton={false}
              type="action"
              className={classNames}
              name={'chip'}
              onClick={() => {
                setDate(getTomorrowDate())
                setSelectedChip('tomorrow')
              }}
            />
            <Chip
              label="3 days later"
              clearButton={false}
              type="action"
              className={classNames}
              name="rangePicker"
              onClick={() => {
                setDate(getThreeDaysLaterDate())
                setSelectedChip('threeDaysLater')
              }}
            />
            <Chip
              label="1 week later"
              clearButton={false}
              type="action"
              className={classNames}
              name="rangePicker"
              onClick={() => {
                setDate(getOneWeekLaterDate())
                setSelectedChip('oneWeekLater')
              }}
            />
            <Chip
              label="30 days later"
              clearButton={false}
              type="action"
              className={classNames}
              name="rangePicker"
              onClick={() => {
                setDate(getThirtyDaysLaterDate())
                setSelectedChip('thirtyDaysLater')
              }}
            />
          </div>
        </div>
        <Divider vertical={true} />
      </DatePicker>
    );
  };
  return (
    <>
      <Card className="d-inline-flex" shadow="light">
        <DatePickerPreset />
      </Card>
      <Card className="d-inline-flex ml-5" shadow="light">
        <DatePickerPreset size="small" />
      </Card>
      <Card className="w-50 my-5 p-5">
        <Label>Set an appointment date:</Label>
        <DatePickerPreset withInput={true} />
      </Card>
    </>
  );
};`;
export const WithPresets = () => <></>;

export default {
  title: 'Patterns/DatePicker/With Presets',
  component: DatePicker,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'DatePicker',
      },
    },
  },
};
