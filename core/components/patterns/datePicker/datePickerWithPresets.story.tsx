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
    
    const classNames = size === 'small' ? 'd-block mb-4' : 'd-block mb-5';
    return (
      <DatePicker date={date} showTodayChip={false} size={size} withInput={withInput}>
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
              type="selection"
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
              type="selection"
              className={classNames}
              selected={selectedChip === 'tomorrow'}
              name={'chip'}
              onClick={() => {
                setDate(getTomorrowDate())
                setSelectedChip('tomorrow')
              }}
            />
            <Chip
              label="3 Days later"
              clearButton={false}
              type="selection"
              className={classNames}
              selected={selectedChip === 'threeDaysLater'}
              name="rangePicker"
              onClick={() => {
                setDate(getThreeDaysLaterDate())
                setSelectedChip('threeDaysLater')
              }}
            />
            <Chip
              label="1 Week later"
              clearButton={false}
              type="selection"
              className={classNames}
              selected={selectedChip === 'oneWeekLater'}
              name="rangePicker"
              onClick={() => {
                setDate(getOneWeekLaterDate())
                setSelectedChip('oneWeekLater')
              }}
            />
            <Chip
              label="30 Days later"
              clearButton={false}
              type="selection"
              className={classNames}
              selected={selectedChip === 'thirtyDaysLater'}
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

const codesandbox = (
  <iframe
    src="https://codesandbox.io/embed/naughty-maria-3w566k?fontsize=14&hidenavigation=1&theme=dark"
    style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden' }}
    title="naughty-maria-3w566k"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>
);

export default {
  title: 'Patterns/DatePicker/With Presets',
  component: DatePicker,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'DatePicker',
        codesandbox: codesandbox,
      },
    },
  },
};
