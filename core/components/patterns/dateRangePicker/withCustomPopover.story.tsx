import * as React from 'react';
import { DateRangePicker, InputMask } from '@/index';

const customCode = `

() => {

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
    {
      value: 'currWeek',
      label: 'This week',
      getState: () => ({
        monthNav: DateRangePicker.utils.getCurrentMonth(),
        ...DateRangePicker.utils.getCurrentWeek(),
      }),
    },
    {
      value: 'prevWeek',
      label: 'Last week',
      getState: () => ({
        monthNav: DateRangePicker.utils.getCurrentMonth(),
        ...DateRangePicker.utils.getPreviousWeek(),
      }),
    },
    {
      value: 'prevMonth',
      label: 'Last month',
      getState: () => ({
        monthNav: DateRangePicker.utils.getCurrentMonth() - 1,
        ...DateRangePicker.utils.getPreviousMonth(),
      }),
    },
    {
      value: 'prev90Days',
      label: 'Last 90 days',
      getState: () => ({
        monthNav: DateRangePicker.utils.getCurrentMonth(),
        ...DateRangePicker.utils.getPrevious90Days(),
      }),
    },
    {
      value: 'custom',
      label: 'Custom',
      getState: () => ({
        monthNav: DateRangePicker.utils.getCurrentMonth(),
        ...DateRangePicker.utils.getCustomDates(),
      }),
    },
  ];

  const CustomPopover = () => {
    const initial = DateRangePicker.utils.getCurrentWeek();
    const [startDate, setStartDate] = React.useState(initial.startDate);
    const [endDate, setEndDate] = React.useState(initial.endDate);
    const [selected, setSelected] = React.useState('currWeek');
    const [monthNav, setMonthNav] = React.useState(DateRangePicker.utils.getCurrentMonth());
    const isMobile = useIsMobile();

    const applyPreset = (value) => {
      const preset = presets.find((p) => p.value === value);
      if (!preset) return;
      const next = preset.getState();
      setSelected(value);
      setMonthNav(next.monthNav);
      setStartDate(next.startDate);
      setEndDate(next.endDate);
    };

    const onReset = () => {
      setStartDate(null);
      setEndDate(null);
      setSelected('');
      setMonthNav(DateRangePicker.utils.getCurrentMonth());
    };

    const selectedPreset = presets.find((p) => p.value === selected);

    const renderChildren = () => (
      <div className="pt-6 px-5">
        <div className="d-flex align-items-center justify-content-between">
          <Subheading size="s" className="py-3" appearance="subtle">Range</Subheading>
          <Icon name="refresh" onClick={onReset} />
        </div>
        {isMobile ? (
          <div className="pt-5">
            <Select
              width="100%"
              onSelect={(option) => option && !Array.isArray(option) && applyPreset(option.value)}
              value={selectedPreset ? { label: selectedPreset.label, value: selectedPreset.value } : undefined}
              triggerOptions={{
                icon: 'calendar_today',
                placeholder: 'Range',
                withClearButton: false,
                'aria-label': 'Date range presets',
              }}
            >
              <Select.List aria-label="Date range presets" size="compressed">
                {presets.map((p) => (
                  <Select.Option key={p.value} option={{ label: p.label, value: p.value }}>
                    {p.label}
                  </Select.Option>
                ))}
              </Select.List>
            </Select>
          </div>
        ) : (
          <div className="pt-5">
            {presets.map((p) => (
              <Chip
                key={p.value}
                label={p.label}
                clearButton={false}
                type="selection"
                className="mb-5 d-block"
                selected={selected === p.value}
                name={p.value}
                onClick={() => applyPreset(p.value)}
              />
            ))}
          </div>
        )}
      </div>
    );

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
          {renderChildren()}
          <Divider vertical={true} />
        </DateRangePicker>
      </div>
    );
  };

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
