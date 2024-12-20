import * as React from 'react';
import { TimePicker } from '@/index';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { TimePickerProps as Props } from '@/index.type';
import { convert12To24HourFormat } from '../utility/timePickerUtility';

const optionID = 'DesignSystem-DropdownOption--DEFAULT';
const trigger = 'DesignSystem-DropdownTrigger';
const startTime = '05:00 AM';
const endTime = '11:00 PM';
const FunctionValue = jest.fn();
const booleanValue = [true, false];
const timeFormat = ['12-Hour', '24-Hour'];
const activeOptionClass = 'Option--active';

const fetchOption = () => {
  return new Promise<any>((resolve) => {
    window.setTimeout(() => {
      resolve({
        searchTerm: '',
        options: [{ label: '10:00 AM', value: '10:00 AM' }],
        count: 1,
      });
    }, 1000);
  });
};

const testFunc = (props: Record<string, any>): void => {
  const attr = filterUndefined(props) as Props;

  it(testMessageHelper(attr), () => {
    const { baseElement } = render(<TimePicker withSearch={true} {...attr} />);
    expect(baseElement).toMatchSnapshot();
  });
};

describe('TimePicker component snapshots', () => {
  describe('renders snapshot for all props', () => {
    const mapper: Record<string, any> = {
      startTime: valueHelper(startTime, { required: true, iterate: false }),
      endTime: valueHelper(endTime, { required: true, iterate: false }),
      showDuration: valueHelper(booleanValue, { required: true, iterate: true }),
      timeFormat: valueHelper(timeFormat, { required: true, iterate: true }),
      error: valueHelper(booleanValue, { required: true, iterate: true }),
    };
    testHelper(mapper, testFunc);
  });
});

describe('TimePicker option list in 12 hour format', () => {
  it('check list when no start time & end time is given', async () => {
    const { getByTestId, getAllByTestId } = render(<TimePicker withSearch={true} />);
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    await waitFor(() => {
      const optionList = getAllByTestId(optionID);
      const optionLen = optionList.length - 1;
      expect(optionList[0]).toHaveTextContent('12:00 AM');
      expect(optionList[optionLen]).toHaveTextContent('11:45 PM');
    });
  });

  it('check list when only end time is given', async () => {
    const { getByTestId, getAllByTestId } = render(<TimePicker withSearch={true} endTime={endTime} />);
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    await waitFor(() => {
      const optionList = getAllByTestId(optionID);
      const optionLen = optionList.length - 1;
      expect(optionList[0]).toHaveTextContent('12:00 AM');
      expect(optionList[optionLen]).toHaveTextContent(endTime);
    });
  });

  it('check list when only start time is given', async () => {
    const { getByTestId, getAllByTestId } = render(<TimePicker withSearch={true} startTime={startTime} />);
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    await waitFor(() => {
      const optionList = getAllByTestId(optionID);
      const optionLen = optionList.length - 1;
      expect(optionList[0]).toHaveTextContent(startTime);
      expect(optionList[optionLen]).toHaveTextContent('04:45 AM');
    });
  });

  it('check list when both start & end time is given', async () => {
    const { getByTestId, getAllByTestId } = render(
      <TimePicker withSearch={true} endTime={endTime} startTime={startTime} />
    );
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    await waitFor(() => {
      const optionList = getAllByTestId(optionID);
      const optionLen = optionList.length - 1;
      expect(optionList[0]).toHaveTextContent(startTime);
      expect(optionList[optionLen]).toHaveTextContent(endTime);
    });
  });

  it('check list when startTime is greater than endTime', async () => {
    const { getByTestId, getAllByTestId } = render(
      <TimePicker withSearch={true} startTime="10:15 PM" endTime="11:45 AM" />
    );
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    await waitFor(() => {
      const optionList = getAllByTestId(optionID);
      const optionLen = optionList.length - 1;
      expect(optionList[0]).toHaveTextContent('10:15 PM');
      expect(optionList[optionLen]).toHaveTextContent('11:45 AM');
    });
  });
});

describe('TimePicker option list in 24 hour format', () => {
  it('check list when no start time & end time is given', async () => {
    const { getByTestId, getAllByTestId } = render(<TimePicker timeFormat="24-Hour" withSearch={true} />);
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    await waitFor(() => {
      const optionList = getAllByTestId(optionID);
      const optionLen = optionList.length - 1;
      expect(optionList[0]).toHaveTextContent('00:00');
      expect(optionList[optionLen]).toHaveTextContent('23:45');
    });
  });

  it('check list when only end time is given', async () => {
    const { getByTestId, getAllByTestId } = render(
      <TimePicker timeFormat="24-Hour" withSearch={true} endTime="20:59" />
    );
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    await waitFor(() => {
      const optionList = getAllByTestId(optionID);
      const optionLen = optionList.length - 1;
      expect(optionList[0]).toHaveTextContent('00:00');
      expect(optionList[optionLen]).toHaveTextContent('20:45');
    });
  });

  it('check list when only start time is given', async () => {
    const { getByTestId, getAllByTestId } = render(
      <TimePicker timeFormat="24-Hour" withSearch={true} startTime="10:00" />
    );
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    await waitFor(() => {
      const optionList = getAllByTestId(optionID);
      const optionLen = optionList.length - 1;
      expect(optionList[0]).toHaveTextContent('10:00');
      expect(optionList[optionLen]).toHaveTextContent('09:45');
    });
  });

  it('check list when both start & end time is given', async () => {
    const { getByTestId, getAllByTestId } = render(
      <TimePicker timeFormat="24-Hour" withSearch={true} startTime="10:00" endTime="20:00" />
    );
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    await waitFor(() => {
      const optionList = getAllByTestId(optionID);
      const optionLen = optionList.length - 1;
      expect(optionList[0]).toHaveTextContent('10:00');
      expect(optionList[optionLen]).toHaveTextContent('20:00');
    });
  });

  it('check list when startTime is greater than endTime', async () => {
    const { getByTestId, getAllByTestId } = render(
      <TimePicker timeFormat="24-Hour" withSearch={true} startTime="20:00" endTime="10:00" />
    );
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    await waitFor(() => {
      const optionList = getAllByTestId(optionID);
      const optionLen = optionList.length - 1;
      expect(optionList[0]).toHaveTextContent('20:00');
      expect(optionList[optionLen]).toHaveTextContent('10:00');
    });
  });
});

describe('TimePicker with disabled option list ', () => {
  it('check disabled option list', async () => {
    const { getByTestId, getAllByTestId } = render(
      <TimePicker
        startTime={startTime}
        endTime={endTime}
        withSearch={true}
        disabledSlotList={['05:15 AM', '05:30 AM']}
      />
    );
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    await waitFor(() => {
      const optionList = getAllByTestId(optionID);
      expect(optionList[1]).toHaveClass('Option--disabled');
      expect(getAllByTestId('DesignSystem-Text')[2]).toHaveClass('color-inverse-lightest');
    });
  });
});

describe('TimePicker with time duration label', () => {
  it('check for time duration label in 12 hour format', async () => {
    const { getByTestId, getAllByTestId } = render(
      <TimePicker startTime={startTime} endTime={endTime} withSearch={true} showDuration={true} />
    );
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    await waitFor(() => {
      const optionList = getAllByTestId(optionID);
      expect(optionList[0]).toHaveTextContent('05:00 AM (0 hr 0 min)');
      expect(optionList[1]).toHaveTextContent('05:15 AM (0 hr 15 min)');
      expect(optionList[3]).toHaveTextContent('05:45 AM (0 hr 45 min)');
    });
  });

  it('check for time duration label in 24 hour format', async () => {
    const { getByTestId, getAllByTestId } = render(
      <TimePicker timeFormat="24-Hour" startTime="05:00" endTime="20:00" withSearch={true} showDuration={true} />
    );
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    await waitFor(() => {
      const optionList = getAllByTestId(optionID);
      expect(optionList[0]).toHaveTextContent('05:00 (0 hr 0 min)');
      expect(optionList[1]).toHaveTextContent('05:15 (0 hr 15 min)');
      expect(optionList[3]).toHaveTextContent('05:45 (0 hr 45 min)');
    });
  });
});

describe('TimePicker list for different interval', () => {
  it('check for 12 hour option list for different interval  ', async () => {
    const { getByTestId, getAllByTestId } = render(
      <TimePicker startTime={startTime} endTime={endTime} withSearch={true} interval={30} />
    );
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    await waitFor(() => {
      const optionList = getAllByTestId(optionID);
      expect(optionList[0]).toHaveTextContent('05:00 AM');
      expect(optionList[1]).toHaveTextContent('05:30 AM');
      expect(optionList[3]).toHaveTextContent('06:30 AM');
    });
  });

  it('check for 24 hour option list for different interval  ', async () => {
    const { getByTestId, getAllByTestId } = render(
      <TimePicker startTime={startTime} endTime={endTime} withSearch={true} interval={30} />
    );
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    await waitFor(() => {
      const optionList = getAllByTestId(optionID);
      expect(optionList[0]).toHaveTextContent('05:00');
      expect(optionList[1]).toHaveTextContent('05:30');
      expect(optionList[3]).toHaveTextContent('06:30');
    });
  });
});

describe('TimePicker fetchOption list', () => {
  it('check for fetchTimeOptions prop', async () => {
    const { getByTestId, getAllByTestId } = render(<TimePicker withSearch={true} fetchTimeOptions={fetchOption} />);
    const dropdownTrigger = getByTestId(trigger);
    fireEvent.click(dropdownTrigger);
    await waitFor(() => {
      const optionList = getAllByTestId(optionID);
      expect(optionList[0]).toHaveTextContent('10:00 AM');
    });
  });
});

describe('TimePicker Event Handlers', () => {
  it('check for onChange prop', async () => {
    const { getByTestId } = render(
      <TimePicker onChange={FunctionValue} withSearch={true} fetchTimeOptions={fetchOption} />
    );
    const dropdownTrigger = getByTestId(trigger);

    fireEvent.click(dropdownTrigger);
    await waitFor(() => {
      fireEvent.click(getByTestId('DesignSystem-Text'));
      expect(FunctionValue).toHaveBeenCalled();
    });
  });
});

describe('TimePicker Search Error Handlers', () => {
  it('check for five digit search query in 12 hour format', async () => {
    const { getByTestId } = render(<TimePicker withSearch={true} noResultMessage="No result found" />);
    const dropdownTrigger = getByTestId(trigger);

    fireEvent.click(dropdownTrigger);
    const searchInput = getByTestId('DesignSystem-Input');
    expect(searchInput).toBeInTheDocument();
    fireEvent.input(searchInput, { target: { value: '123456' } });

    await waitFor(() => {
      expect(getByTestId('DesignSystem-Dropdown--errorWrapper')).toBeInTheDocument();
      expect(getByTestId('DesignSystem-Dropdown--errorWrapper')).toHaveTextContent('No result found');
    });
  });

  it('check for invalid search', async () => {
    const { getByTestId } = render(
      <TimePicker startTime={startTime} endTime={endTime} withSearch={true} noResultMessage="No result found" />
    );
    const dropdownTrigger = getByTestId(trigger);

    fireEvent.click(dropdownTrigger);
    const searchInput = getByTestId('DesignSystem-Input');
    expect(searchInput).toBeInTheDocument();
    fireEvent.input(searchInput, { target: { value: 'abc:;' } });

    await waitFor(() => {
      expect(getByTestId('DesignSystem-Dropdown--errorWrapper')).toBeInTheDocument();
      expect(getByTestId('DesignSystem-Dropdown--errorWrapper')).toHaveTextContent('No result found');
    });
  });

  it('check for noResultFound prop on invalid search', async () => {
    const { getByTestId } = render(
      <TimePicker startTime={startTime} endTime={endTime} withSearch={true} noResultMessage="Invalid Time" />
    );
    const dropdownTrigger = getByTestId(trigger);

    fireEvent.click(dropdownTrigger);
    const searchInput = getByTestId('DesignSystem-Input');
    expect(searchInput).toBeInTheDocument();
    fireEvent.input(searchInput, { target: { value: 'abc:;' } });

    await waitFor(() => {
      expect(getByTestId('DesignSystem-Dropdown--errorWrapper')).toBeInTheDocument();
      expect(getByTestId('DesignSystem-Dropdown--errorWrapper')).toHaveTextContent('Invalid Time');
    });
  });
});

const searchQueryWithTimeProp = [
  { searchTime: '20', result: '08:00 PM', resultIndex: 60, desc: 'check for two digit' },
  { searchTime: '715pm', result: '07:15 PM', resultIndex: 57, desc: 'check for time zone' },
  { searchTime: '8am', result: '08:00 AM', resultIndex: 12, desc: 'check for one digit am/pm' },
];

const searchQueryWithoutTimeProp = [
  { searchTime: '00', result: '12:00 AM', resultIndex: 0, desc: 'check for 00 query' },
  { searchTime: '20', result: '08:00 PM', resultIndex: 80, desc: 'check for 24 hr query' },
  { searchTime: '2321', result: '11:30 PM', resultIndex: 94, desc: 'check for four digit' },
  { searchTime: '24', result: '12:00 AM', resultIndex: 0, desc: 'check for search query 24' },
  { searchTime: '905am', result: '09:15 AM', resultIndex: 37, desc: 'check for digit with AM/PM' },
  { searchTime: '04;00am', result: '04:00 AM', resultIndex: 16, desc: 'check for special character' },
  { searchTime: '1160Pm', result: '12:00 AM', resultIndex: 0, desc: 'check for four digit with time zone' },
  { searchTime: '2360', result: '12:00 AM', resultIndex: 0, desc: 'check for query with minute set as 60' },
  { searchTime: '14 30', result: '02:30 PM', resultIndex: 58, desc: 'check for query number/special char' },
  { searchTime: '12pm', result: '12:00 PM', resultIndex: 48, desc: 'check for search query 12 with time zone' },
  { searchTime: '14 30am', result: '02:30 AM', resultIndex: 10, desc: 'check for query number/timezone/special char' },
  { searchTime: '0030', result: '12:30 AM', resultIndex: 2, desc: 'check for query with trailing zero' },
  // { searchTime: '1230', result: '12:30 PM', resultIndex: 50, desc: 'check for search query with 12' },
];

describe('TimePicker Search when start/end time is given', () => {
  searchQueryWithTimeProp.forEach((testCase) => {
    it(`${testCase.desc} in 12 hour format`, async () => {
      const { getByTestId, getAllByTestId } = render(
        <TimePicker startTime={startTime} endTime={endTime} withSearch={true} />
      );
      const dropdownTrigger = getByTestId(trigger);

      fireEvent.click(dropdownTrigger);
      const searchInput = getByTestId('DesignSystem-Input');
      expect(searchInput).toBeInTheDocument();
      fireEvent.input(searchInput, { target: { value: testCase.searchTime } });

      await waitFor(() => {
        const optionList = getAllByTestId(optionID);
        expect(optionList[testCase.resultIndex]).toHaveTextContent(testCase.result);
        expect(optionList[testCase.resultIndex]).toHaveClass(activeOptionClass);
      });
    });

    it(`${testCase.desc} in 24 hour format`, async () => {
      const { getByTestId, getAllByTestId } = render(
        <TimePicker timeFormat="24-Hour" startTime={startTime} endTime={endTime} withSearch={true} />
      );
      const dropdownTrigger = getByTestId(trigger);

      fireEvent.click(dropdownTrigger);
      const searchInput = getByTestId('DesignSystem-Input');
      expect(searchInput).toBeInTheDocument();
      fireEvent.input(searchInput, { target: { value: testCase.searchTime } });

      const result = convert12To24HourFormat(testCase.result);

      await waitFor(() => {
        const optionList = getAllByTestId(optionID);
        expect(optionList[testCase.resultIndex]).toHaveTextContent(result);
        expect(optionList[testCase.resultIndex]).toHaveClass(activeOptionClass);
      });
    });
  });
});

describe('TimePicker Search when start/end time is not given', () => {
  searchQueryWithoutTimeProp.forEach((testCase) => {
    it(`${testCase.desc} in 12 hour format`, async () => {
      const { getByTestId, getAllByTestId } = render(<TimePicker withSearch={true} />);
      const dropdownTrigger = getByTestId(trigger);

      fireEvent.click(dropdownTrigger);
      const searchInput = getByTestId('DesignSystem-Input');
      expect(searchInput).toBeInTheDocument();
      fireEvent.input(searchInput, { target: { value: testCase.searchTime } });

      await waitFor(() => {
        const optionList = getAllByTestId(optionID);
        expect(optionList[testCase.resultIndex]).toHaveTextContent(testCase.result);
        expect(optionList[testCase.resultIndex]).toHaveClass(activeOptionClass);
      });
    });

    it(`${testCase.desc} in 24 hour format`, async () => {
      const { getByTestId, getAllByTestId } = render(<TimePicker timeFormat="24-Hour" withSearch={true} />);
      const dropdownTrigger = getByTestId(trigger);

      fireEvent.click(dropdownTrigger);
      const searchInput = getByTestId('DesignSystem-Input');
      expect(searchInput).toBeInTheDocument();
      fireEvent.input(searchInput, { target: { value: testCase.searchTime } });

      const result = convert12To24HourFormat(testCase.result);

      await waitFor(() => {
        const optionList = getAllByTestId(optionID);
        expect(optionList[testCase.resultIndex]).toHaveTextContent(result);
        expect(optionList[testCase.resultIndex]).toHaveClass(activeOptionClass);
      });
    });
  });
});

describe('TimePicker Search when current time is in AM', () => {
  const dateNowSpy = jest.spyOn(Date, 'now').mockImplementation(() => 1632314963710); // 7:15

  it('check for one digit search query', async () => {
    const { getByTestId, getAllByTestId } = render(<TimePicker withSearch={true} />);
    const dropdownTrigger = getByTestId(trigger);

    fireEvent.click(dropdownTrigger);
    const searchInput = getByTestId('DesignSystem-Input');
    expect(searchInput).toBeInTheDocument();
    fireEvent.input(searchInput, { target: { value: '5' } });

    await waitFor(() => {
      const optionList = getAllByTestId(optionID);
      expect(optionList[68]).toHaveTextContent('05:00 PM');
    });
  });

  dateNowSpy.mockRestore();
});

describe('TimePicker Search with error state true', () => {
  it('renders with DropdownButton--error class', () => {
    const { getByTestId } = render(<TimePicker withSearch={true} error={true} />);
    expect(getByTestId('DesignSystem-DropdownTrigger')).toHaveClass('DropdownButton--error');
  });
});
