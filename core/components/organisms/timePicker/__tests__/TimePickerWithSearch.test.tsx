import * as React from 'react';
import { TimePicker } from '@/index';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { TimePickerProps as Props } from '@/index.type';

const optionID = 'DesignSystem-DropdownOption--DEFAULT';
const trigger = 'DesignSystem-DropdownTrigger';
const startTime = '05:00 AM';
const endTime = '11:00 PM';
const FunctionValue = jest.fn();
const booleanValue = [true, false];
const timeFormat = ['12-Hour', '24-Hour'];

let dateNowSpy: any;

// current time 20:15
beforeAll(() => {
  // Lock Time
  // dateNowSpy = jest.spyOn(Date, 'now').mockImplementation(() => 1632315010510); // 20:15
  dateNowSpy = jest.spyOn(Date, 'now').mockImplementation(() => 1632314963710); // 7:15
});

afterAll(() => {
  // Unlock Time
  dateNowSpy.mockRestore();
});

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
      expect(getAllByTestId('DesignSystem-Text')[2]).toHaveClass('Text--disabled');
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

describe('TimePicker Search', () => {
  it('check for search query with one digit am/pm in 12 hour format', async () => {
    const { getByTestId, getAllByTestId } = render(
      <TimePicker startTime={startTime} endTime={endTime} withSearch={true} />
    );
    const dropdownTrigger = getByTestId(trigger);

    fireEvent.click(dropdownTrigger);
    const searchInput = getByTestId('DesignSystem-Input');
    expect(searchInput).toBeInTheDocument();
    fireEvent.input(searchInput, { target: { value: '8am' } });

    await waitFor(() => {
      const optionList = getAllByTestId(optionID);
      expect(optionList[12]).toHaveTextContent('08:00 AM');
      expect(optionList[12]).toHaveClass('Option--active');
    });
  });

  it('check for search query with two digit in 12 hour format', async () => {
    const { getByTestId, getAllByTestId } = render(
      <TimePicker startTime={startTime} endTime={endTime} withSearch={true} />
    );
    const dropdownTrigger = getByTestId(trigger);

    fireEvent.click(dropdownTrigger);
    const searchInput = getByTestId('DesignSystem-Input');
    expect(searchInput).toBeInTheDocument();
    fireEvent.input(searchInput, { target: { value: '20' } });

    await waitFor(() => {
      const optionList = getAllByTestId(optionID);
      expect(optionList[60]).toHaveTextContent('08:00 PM');
      expect(optionList[60]).toHaveClass('Option--active');
    });
  });

  it('check for search query with special character in 12 hour format', async () => {
    const { getByTestId, getAllByTestId } = render(<TimePicker withSearch={true} />);
    const dropdownTrigger = getByTestId(trigger);

    fireEvent.click(dropdownTrigger);
    const searchInput = getByTestId('DesignSystem-Input');
    expect(searchInput).toBeInTheDocument();
    fireEvent.input(searchInput, { target: { value: '04;00am' } });

    await waitFor(() => {
      const optionList = getAllByTestId(optionID);
      expect(optionList[16]).toHaveTextContent('04:00 AM');
      expect(optionList[16]).toHaveClass('Option--active');
    });
  });

  it('check for search query in 12 hour format', async () => {
    const { getByTestId, getAllByTestId } = render(
      <TimePicker startTime="07:00 AM" endTime="11:59 PM" withSearch={true} />
    );
    const dropdownTrigger = getByTestId(trigger);

    fireEvent.click(dropdownTrigger);
    const searchInput = getByTestId('DesignSystem-Input');
    expect(searchInput).toBeInTheDocument();
    fireEvent.input(searchInput, { target: { value: '715pm' } });

    await waitFor(() => {
      const optionList = getAllByTestId(optionID);
      expect(optionList[49]).toHaveTextContent('07:15 PM');
      expect(optionList[49]).toHaveClass('Option--active');
    });
  });

  it('check for four digit search query in 12 hour format', async () => {
    const { getByTestId, getAllByTestId } = render(<TimePicker withSearch={true} />);
    const dropdownTrigger = getByTestId(trigger);

    fireEvent.click(dropdownTrigger);
    const searchInput = getByTestId('DesignSystem-Input');
    expect(searchInput).toBeInTheDocument();
    fireEvent.input(searchInput, { target: { value: '1160Pm' } });

    await waitFor(() => {
      const optionList = getAllByTestId(optionID);
      expect(optionList[0]).toHaveTextContent('12:00 AM');
      expect(optionList[0]).toHaveClass('Option--active');
    });
  });

  it('check for digit with AM/PM search query in 12 hour format', async () => {
    const { getByTestId, getAllByTestId } = render(<TimePicker withSearch={true} />);
    const dropdownTrigger = getByTestId(trigger);

    fireEvent.click(dropdownTrigger);
    const searchInput = getByTestId('DesignSystem-Input');
    expect(searchInput).toBeInTheDocument();
    fireEvent.input(searchInput, { target: { value: '905am' } });

    await waitFor(() => {
      const optionList = getAllByTestId(optionID);
      expect(optionList[37]).toHaveTextContent('09:15 AM');
      expect(optionList[37]).toHaveClass('Option--active');
    });
  });

  it('check for five digit search query in 12 hour format', async () => {
    const { getByTestId } = render(<TimePicker withSearch={true} />);
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
    const { getByTestId } = render(<TimePicker startTime={startTime} endTime={endTime} withSearch={true} />);
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

  it('check for search query with one digit based on current time', async () => {
    const { getByTestId, getAllByTestId } = render(
      <TimePicker startTime={startTime} endTime={endTime} withSearch={true} />
    );
    const dropdownTrigger = getByTestId(trigger);

    fireEvent.click(dropdownTrigger);
    const searchInput = getByTestId('DesignSystem-Input');
    expect(searchInput).toBeInTheDocument();
    fireEvent.input(searchInput, { target: { value: '8' } });

    await waitFor(() => {
      const optionList = getAllByTestId(optionID);
      expect(optionList[60]).toHaveTextContent('08:00 PM');
      expect(optionList[60]).toHaveClass('Option--active');
    });
  });

  it('check for search query with four digit in 12 hour format', async () => {
    const { getByTestId, getAllByTestId } = render(<TimePicker withSearch={true} />);
    const dropdownTrigger = getByTestId(trigger);

    fireEvent.click(dropdownTrigger);
    const searchInput = getByTestId('DesignSystem-Input');
    expect(searchInput).toBeInTheDocument();
    fireEvent.input(searchInput, { target: { value: '2321' } });

    await waitFor(() => {
      const optionList = getAllByTestId(optionID);
      expect(optionList[94]).toHaveTextContent('11:30 PM');
      expect(optionList[94]).toHaveClass('Option--active');
    });
  });

  it('check for search query with minute set as 60', async () => {
    const { getByTestId, getAllByTestId } = render(<TimePicker withSearch={true} />);
    const dropdownTrigger = getByTestId(trigger);

    fireEvent.click(dropdownTrigger);
    const searchInput = getByTestId('DesignSystem-Input');
    expect(searchInput).toBeInTheDocument();
    fireEvent.input(searchInput, { target: { value: '2360' } });

    await waitFor(() => {
      const optionList = getAllByTestId(optionID);
      expect(optionList[0]).toHaveTextContent('12:00 AM');
      expect(optionList[0]).toHaveClass('Option--active');
    });
  });
});
