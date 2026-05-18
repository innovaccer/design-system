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

  const useIsMobile = (breakpoint = 576) => {
    const getMatch = () =>
      typeof window !== 'undefined' && window.matchMedia(\`(max-width: \${breakpoint}px)\`).matches;
    const [isMobile, setIsMobile] = React.useState(getMatch);

    React.useEffect(() => {
      const mql = window.matchMedia(\`(max-width: \${breakpoint}px)\`);
      const onChange = (e) => setIsMobile(e.matches);
      mql.addEventListener('change', onChange);
      return () => mql.removeEventListener('change', onChange);
    }, [breakpoint]);

    return isMobile;
  };

  const presets = [
    { value: 'today', label: 'Today', getDate: () => new Date() },
    { value: 'tomorrow', label: 'Tomorrow', getDate: getTomorrowDate },
    { value: 'threeDaysLater', label: '3 days later', getDate: getThreeDaysLaterDate },
    { value: 'oneWeekLater', label: '1 week later', getDate: getOneWeekLaterDate },
    { value: 'thirtyDaysLater', label: '30 days later', getDate: getThirtyDaysLaterDate },
  ];

  const DatePickerPreset = ({ size, withInput=false }) => {

    const [date, setDate] = React.useState(new Date());
    const [selectedChip, setSelectedChip] = React.useState('today');
    const isMobile = useIsMobile();

    const onPresetChange = (value) => {
      const preset = presets.find((p) => p.value === value);
      if (!preset) return;
      setDate(preset.getDate());
      setSelectedChip(preset.value);
    };

    const chipClassNames = size === 'small' ? 'd-flex mb-4' : 'd-flex mb-5';
    const selectedPreset = presets.find((p) => p.value === selectedChip);

    return (
      <DatePicker date={date} showTodayDate={false} size={size} withInput={withInput}>
        <div className="pt-6 px-5">
          <div className="d-flex align-items-center justify-content-between">
            <Subheading size="s" appearance="subtle">
              Date
            </Subheading>
          </div>
          {isMobile ? (
            <div className="pt-4">
              <Select
                width="100%"
                onSelect={(option) => option && !Array.isArray(option) && onPresetChange(option.value)}
                value={selectedPreset ? { label: selectedPreset.label, value: selectedPreset.value } : undefined}
                triggerOptions={{
                  icon: 'calendar_today',
                  placeholder: 'Presets',
                  withClearButton: false,
                  'aria-label': 'Date presets',
                }}
              >
                <Select.List aria-label="Date presets" size="compressed">
                  {presets.map((p) => (
                    <Select.Option key={p.value} option={{ label: p.label, value: p.value }}>
                      {p.label}
                    </Select.Option>
                  ))}
                </Select.List>
              </Select>
            </div>
          ) : (
            <div className="pt-4">
              {presets.map((p) => (
                <Chip
                  key={p.value}
                  label={p.label}
                  clearButton={false}
                  type="action"
                  className={chipClassNames}
                  name={p.value}
                  selected={selectedChip === p.value}
                  onClick={() => onPresetChange(p.value)}
                />
              ))}
            </div>
          )}
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
