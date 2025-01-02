import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { DateRangePicker } from '@/index';
import { DateRangePickerProps as Props } from '@/index.type';
import { Size } from '../../calendar';

const weeksList = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const view = ['year', 'month', 'date'];
const booleanValue = [true, false];
const size: Size[] = ['large', 'small'];
const alignPosition = ['left', 'right'];
const numArray = [1, 2, 3];
const position = ['bottom', 'top', 'top-start', 'top-end', 'bottom-start', 'bottom-end', 'left', 'right'];
const caption = 'testing caption';
const currentDate = new Date(2021, 8, 12);
const startDate = new Date(2020, 2, 3);
const endDate = new Date(2021, 5, 8);
const sameEndDate = new Date(2020, 2, 3);
const dateFormat = [currentDate, 1629790081880];
const inputFormat = ['mm/dd/yyyy', 'dd/mm/yyyy', 'yyyy/mm/dd', 'mm-dd-yyyy', 'dd-mm-yyyy', 'yyyy-mm-dd'];
const FunctionValue = jest.fn();

let dateNowSpy: any;

beforeAll(() => {
  // Lock Time
  dateNowSpy = jest.spyOn(Date, 'now').mockImplementation(() => 1725888000000);
});

afterAll(() => {
  // Unlock Time
  dateNowSpy.mockRestore();
});

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    open: valueHelper(booleanValue, { required: true, iterate: true }),
    size: valueHelper(size, { required: true, iterate: true }),
    withInput: valueHelper(booleanValue, { required: true, iterate: true }),
    rangeLimit: valueHelper(7, { required: true }),
    view: valueHelper(view, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<DateRangePicker startDate={startDate} endDate={endDate} {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    firstDayOfWeek: valueHelper(weeksList, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<DateRangePicker startDate={startDate} endDate={endDate} {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    disabledBefore: valueHelper(dateFormat[1], { required: true }),
    jumpView: valueHelper(booleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<DateRangePicker startDate={startDate} endDate={endDate} {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    yearNav: valueHelper(numArray, { required: true, iterate: true }),
    disabledAfter: valueHelper(dateFormat[1], { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<DateRangePicker startDate={startDate} endDate={endDate} {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    monthNav: valueHelper(numArray, { required: true, iterate: true }),
    monthsInView: valueHelper(numArray, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<DateRangePicker startDate={startDate} endDate={endDate} {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    startDate: valueHelper(dateFormat, { required: true, iterate: true }),
    endDate: valueHelper(dateFormat, { required: true, iterate: true }),
    position: valueHelper(position, { required: true, iterate: true }),
    contentAlign: valueHelper(alignPosition, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<DateRangePicker {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    singleInput: valueHelper(booleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<DateRangePicker startDate={startDate} endDate={endDate} {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    inputFormat: valueHelper(inputFormat, { required: true, iterate: true }),
    outputFormat: valueHelper(inputFormat, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<DateRangePicker startDate={startDate} endDate={endDate} {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DateRangePicker component', () => {
  const mapper: Record<string, any> = {
    allowReverseSelection: valueHelper(booleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<DateRangePicker startDate={startDate} endDate={endDate} {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('DateRangePicker component prop:withInput', () => {
  it('show InputTrigger if prop:withInput is passed as true', () => {
    const { getByTestId } = render(<DateRangePicker startDate={startDate} endDate={endDate} withInput={true} />);

    expect(getByTestId('DesignSystem-DateRangePicker-InputTrigger')).toBeInTheDocument();
  });

  it('show InputTrigger if prop:withInput is passed as false', () => {
    render(<DateRangePicker startDate={startDate} endDate={endDate} withInput={false} />);

    const inputTriggerComponent = screen.queryByText('DesignSystem-DateRangePicker-InputTrigger');
    expect(inputTriggerComponent).not.toBeInTheDocument();
  });

  it('same start and end date selection if prop:withInput is passed as true', () => {
    const { getAllByTestId } = render(<DateRangePicker startDate={startDate} endDate={sameEndDate} withInput={true} />);
    const dateSelection = '03/03/2020';
    const InputTestId = getAllByTestId('DesignSystem-Input');

    expect(InputTestId[0]).toHaveAttribute('value', dateSelection);
    expect(InputTestId[1]).toHaveAttribute('value', dateSelection);
  });

  it('same start and end date selection with fire events if prop:withInput is passed as true', () => {
    const { getAllByTestId } = render(<DateRangePicker startDate={startDate} endDate={endDate} withInput={true} />);
    const Inputs = getAllByTestId('DesignSystem-InputWrapper');
    const InputTestId = getAllByTestId('DesignSystem-Input');

    fireEvent.click(Inputs[0]);
    const triggerStartDate = getAllByTestId('DesignSystem-Calendar--dateValue')[10];
    fireEvent.click(triggerStartDate);
    const triggerEndDate = getAllByTestId('DesignSystem-Calendar--dateValue')[10];
    fireEvent.click(triggerEndDate);

    expect(InputTestId[0]).toHaveAttribute('value', '06/09/2021');
    expect(InputTestId[1]).toHaveAttribute('value', '06/09/2021');
  });
});

describe('DateRangePicker component prop:singleInput', () => {
  it('show SingleInputTrigger if prop:singleInput is passed as true', () => {
    const { getByTestId } = render(
      <DateRangePicker startDate={startDate} endDate={endDate} singleInput={true} withInput={true} />
    );
    expect(getByTestId('DesignSystem-DateRangePicker-SingleInputTrigger')).toBeInTheDocument();
  });

  it('show correct label if prop:singleInput is passed as true', () => {
    const { getByTestId } = render(
      <DateRangePicker startDate={startDate} endDate={endDate} singleInput={true} withInput={true} />
    );
    expect(getByTestId('DesignSystem-DateRangePicker-SingleInputTrigger').textContent).toMatch('Date');
  });

  it('checks prop:singleInput=true with default dates', () => {
    const { getByTestId } = render(<DateRangePicker singleInput={true} withInput={true} />);
    expect(getByTestId('DesignSystem-DateRangePicker-SingleInputTrigger')).toBeInTheDocument();
    expect(screen.getAllByPlaceholderText('mm/dd/yyyy - mm/dd/yyyy')[0]).toBeInTheDocument();
  });

  it('same start and end date selection with fire events if prop:singleInput is passed as true', () => {
    const { getAllByTestId } = render(
      <DateRangePicker startDate={startDate} endDate={endDate} withInput={true} singleInput={true} />
    );
    const InputWrapper = getAllByTestId('DesignSystem-InputWrapper');
    const InputTestId = getAllByTestId('DesignSystem-Input');

    fireEvent.click(InputWrapper[0]);
    const triggerStartDate = getAllByTestId('DesignSystem-Calendar--dateValue')[10];
    fireEvent.click(triggerStartDate);
    const triggerEndDate = getAllByTestId('DesignSystem-Calendar--dateValue')[10];
    fireEvent.click(triggerEndDate);

    expect(InputTestId[0]).toHaveAttribute('value', '06/09/2021 - 06/09/2021');
  });
});

describe('DateRangePicker component prop:onRangeChange', () => {
  it('onClear Event handler ', () => {
    const { getAllByTestId } = render(
      <DateRangePicker startDate={startDate} endDate={endDate} withInput={true} onRangeChange={FunctionValue} />
    );

    const InputTestId = getAllByTestId('DesignSystem-Input--closeIcon');
    fireEvent.click(InputTestId[1]);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('onChange Event handler ', () => {
    const { getAllByTestId } = render(
      <DateRangePicker startDate={startDate} endDate={endDate} withInput={true} onRangeChange={FunctionValue} />
    );

    const InputTestId = getAllByTestId('DesignSystem-Input');
    fireEvent.change(InputTestId[0], { target: { value: currentDate } });

    expect(FunctionValue).toHaveBeenCalled();
  });

  it('onBlur Event handler ', () => {
    const { getAllByTestId } = render(
      <DateRangePicker startDate={startDate} endDate={endDate} withInput={true} onRangeChange={FunctionValue} />
    );

    const InputTestId = getAllByTestId('DesignSystem-Input');
    fireEvent.blur(InputTestId[0]);

    expect(FunctionValue).toHaveBeenCalled();
  });

  it('same start and end date selection with fire events if prop:onRangeChange is passed', () => {
    const { getAllByTestId } = render(
      <DateRangePicker startDate={startDate} withInput={true} onRangeChange={FunctionValue} />
    );

    const Inputs = getAllByTestId('DesignSystem-InputWrapper');
    fireEvent.click(Inputs[0]);
    const triggerDate = getAllByTestId('DesignSystem-Calendar--dateValue')[3];
    fireEvent.click(triggerDate);
    expect(FunctionValue).toHaveBeenCalled();
    expect(FunctionValue.mock.calls[0][0]).toEqual(startDate);
    expect(FunctionValue.mock.calls[1][0]).toEqual(sameEndDate);
  });
});

describe('DateRangePicker component update state ', () => {
  it('check for updating start date', () => {
    const { getAllByTestId, rerender } = render(
      <DateRangePicker startDate={startDate} endDate={endDate} withInput={true} onRangeChange={FunctionValue} />
    );

    const inputComponent = getAllByTestId('DesignSystem-Input');

    fireEvent.change(inputComponent[0], { target: { value: currentDate } });
    expect(FunctionValue).toHaveBeenCalled();

    rerender(
      <DateRangePicker startDate={currentDate} endDate={endDate} withInput={true} onRangeChange={FunctionValue} />
    );
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('check for updating end date', () => {
    const { getAllByTestId, rerender } = render(
      <DateRangePicker startDate={startDate} endDate={endDate} withInput={true} onRangeChange={FunctionValue} />
    );

    const inputComponent = getAllByTestId('DesignSystem-Input');

    fireEvent.change(inputComponent[1], { target: { value: currentDate } });
    expect(FunctionValue).toHaveBeenCalled();

    rerender(
      <DateRangePicker startDate={startDate} endDate={currentDate} withInput={true} onRangeChange={FunctionValue} />
    );
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('check for updating open state', () => {
    const { rerender } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        onRangeChange={FunctionValue}
        open={true}
      />
    );

    expect(FunctionValue).toHaveBeenCalled();

    rerender(
      <DateRangePicker
        startDate={startDate}
        endDate={currentDate}
        withInput={true}
        onRangeChange={FunctionValue}
        open={false}
      />
    );
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('check for updating yearNav', () => {
    const { rerender } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        onRangeChange={FunctionValue}
        yearNav={2}
      />
    );

    expect(FunctionValue).toHaveBeenCalled();

    rerender(
      <DateRangePicker
        startDate={startDate}
        endDate={currentDate}
        withInput={true}
        onRangeChange={FunctionValue}
        yearNav={5}
      />
    );

    expect(FunctionValue).toHaveBeenCalled();
  });

  it('check for updating monthNav', () => {
    const { rerender } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        onRangeChange={FunctionValue}
        monthNav={2}
      />
    );

    expect(FunctionValue).toHaveBeenCalled();

    rerender(
      <DateRangePicker
        startDate={startDate}
        endDate={currentDate}
        withInput={true}
        onRangeChange={FunctionValue}
        monthNav={5}
      />
    );

    expect(FunctionValue).toHaveBeenCalled();
  });

  it('check for updating rangeLimit', () => {
    const { rerender } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        inputFormat="dd/mm/yyyy"
        rangeLimit={15}
        onRangeChange={FunctionValue}
      />
    );
    expect(FunctionValue).toHaveBeenCalled();
    rerender(
      <DateRangePicker
        startDate={'15/10/2021'}
        endDate={'20/10/2021'}
        inputFormat="dd/mm/yyyy"
        rangeLimit={2}
        onRangeChange={FunctionValue}
      />
    );
    expect(FunctionValue).toHaveBeenCalled();
  });
});

describe('DateRangePicker component Event handlers with prop:singleInput set to True', () => {
  it('onClear Event handler ', () => {
    const { getByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        onRangeChange={FunctionValue}
        singleInput={true}
      />
    );

    const InputTestId = getByTestId('DesignSystem-Input--closeIcon');
    fireEvent.click(InputTestId);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('onChange Event handler ', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        onRangeChange={FunctionValue}
        singleInput={true}
      />
    );

    const InputTestId = getAllByTestId('DesignSystem-Input');
    fireEvent.change(InputTestId[0], { target: { value: currentDate } });

    expect(FunctionValue).toHaveBeenCalled();
  });

  it('onBlur Event handler ', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        onRangeChange={FunctionValue}
        singleInput={true}
      />
    );

    const InputTestId = getAllByTestId('DesignSystem-Input');
    fireEvent.blur(InputTestId[0]);

    expect(FunctionValue).toHaveBeenCalled();
  });
});

describe('DateRangePicker component classname with different prop:size', () => {
  size.forEach((sizeValue) => {
    it(`should have the Calendar--${sizeValue} class if size is passed as ${sizeValue}`, () => {
      const { getByTestId } = render(<DateRangePicker startDate={startDate} endDate={endDate} size={sizeValue} />);
      expect(getByTestId('DesignSystem-Calendar')).toHaveClass(`Calendar--${sizeValue}`);
    });
  });

  it('should have the class large as default value', () => {
    const { getByTestId } = render(<DateRangePicker startDate={startDate} endDate={endDate} />);
    expect(getByTestId('DesignSystem-Calendar')).toHaveClass('Calendar--large');
  });
});

describe('DateRangePicker component with prop:monthsInView', () => {
  it('check for calender component when monthsInView is passed as prop', () => {
    const { getAllByTestId } = render(<DateRangePicker startDate={startDate} endDate={endDate} monthsInView={5} />);
    expect(getAllByTestId('DesignSystem-Calendar')).toHaveLength(5);
  });

  it('check for calender--monthsInView prop default value', () => {
    const { getAllByTestId } = render(
      <DateRangePicker startDate={startDate} endDate={endDate} withInput={true} onRangeChange={FunctionValue} />
    );
    const InputTestId = getAllByTestId('DesignSystem-Input');
    fireEvent.click(InputTestId[0]);
    expect(getAllByTestId('DesignSystem-Calendar')).toHaveLength(2);
  });
});

describe('DateRangePicker Component with overwrite class', () => {
  it('overwrite DesignSystem-Calendar-Wrapper class', () => {
    const { getByTestId } = render(
      <DateRangePicker startDate={startDate} endDate={endDate} className="DateRangePickerCustomClass" />
    );
    expect(getByTestId('DesignSystem-Calendar-Wrapper')).toHaveClass('DateRangePickerCustomClass');
  });
});

describe('DateRangePicker component with prop:endInputOptions', () => {
  it('check for placeholderChar property onClear Event', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        endInputOptions={{ placeholderChar: '#' }}
        onRangeChange={(e, value) => FunctionValue(e, value, 'end')}
      />
    );
    const InputTestId = getAllByTestId('DesignSystem-Input--closeIcon');
    fireEvent.click(InputTestId[1]);
    expect(getAllByTestId('DesignSystem-Input')[1]).toHaveValue('##/##/####');
  });

  it('check for default endErrorMsg property onClear Event', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        endInputOptions={{ required: true, error: true }}
        onRangeChange={(e, value) => FunctionValue(e, value, 'end')}
      />
    );
    const InputTestId = getAllByTestId('DesignSystem-Input--closeIcon');
    fireEvent.click(InputTestId[1]);
    expect(getAllByTestId('DesignSystem-InlineMessage--Description')[0].textContent).toMatch('Invalid value');
  });

  it('check for placeholderChar property onBlur Event', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        endInputOptions={{ placeholderChar: '#' }}
        onRangeChange={(e) => FunctionValue(e, 'end')}
      />
    );
    const InputTestId = getAllByTestId('DesignSystem-Input');
    fireEvent.blur(InputTestId[1]);
    expect(getAllByTestId('DesignSystem-Input')[1]).toHaveValue('06/08/2021');
  });

  it('check for placeholderChar property default value onBlur Event ', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        endInputOptions={{}}
        onRangeChange={(e, value) => FunctionValue(e, value, 'end')}
      />
    );
    const InputTestId = getAllByTestId('DesignSystem-Input');
    fireEvent.blur(InputTestId[1]);
    expect(getAllByTestId('DesignSystem-Input')[1]).toHaveValue('06/08/2021');
  });

  it('check for placeholderChar property onChange Event', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        endInputOptions={{ placeholderChar: '#' }}
        onRangeChange={(e, value) => FunctionValue(e, value, 'end')}
      />
    );
    const InputTestId = getAllByTestId('DesignSystem-Input');
    fireEvent.change(InputTestId[1], { target: { value: currentDate } });
    expect(getAllByTestId('DesignSystem-Input')[1]).toHaveValue('06/08/2021');
  });

  it('check for placeholderChar property default value onChange Event', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        endInputOptions={{}}
        onRangeChange={(e, value) => FunctionValue(e, value, 'end')}
      />
    );
    const InputTestId = getAllByTestId('DesignSystem-Input');
    fireEvent.change(InputTestId[1], { target: { value: currentDate } });
    expect(getAllByTestId('DesignSystem-Input')[1]).toHaveValue('06/08/2021');
  });

  it('check for placeholderChar property default value onClick Event ', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        endInputOptions={{}}
        onRangeChange={(e, value) => FunctionValue(e, value, 'end')}
      />
    );
    const InputTestId = getAllByTestId('DesignSystem-Input');
    fireEvent.click(InputTestId[1]);
    expect(getAllByTestId('DesignSystem-Input')[1]).toHaveValue('06/08/2021');
  });

  it('check for error property', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        endInputOptions={{ caption, error: true, required: true }}
        onRangeChange={FunctionValue}
      />
    );
    expect(getAllByTestId('DesignSystem-InputWrapper')[1]).toHaveClass('Input--error');
    expect(getAllByTestId('DesignSystem-InlineMessage--Description')[0].textContent).toMatch(caption);
  });
});

describe('DateRangePicker component with prop:startInputOptions', () => {
  it('check for placeholderChar property onClear Event', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        startInputOptions={{ placeholderChar: '#' }}
        onRangeChange={(e, value) => FunctionValue(e, value, 'start')}
      />
    );
    const InputTestId = getAllByTestId('DesignSystem-Input--closeIcon');
    fireEvent.click(InputTestId[0]);
    expect(getAllByTestId('DesignSystem-Input')[0]).toHaveValue('##/##/####');
  });

  it('check for default startErrorMsg property onClear Event', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        startInputOptions={{ required: true, error: true }}
        onRangeChange={(e, value) => FunctionValue(e, value, 'start')}
      />
    );
    const InputTestId = getAllByTestId('DesignSystem-Input--closeIcon');
    fireEvent.click(InputTestId[0]);
    expect(getAllByTestId('DesignSystem-InlineMessage--Description')[0].textContent).toMatch('Invalid value');
  });

  it('check for error property', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        startInputOptions={{ caption, error: true, required: true }}
        onRangeChange={FunctionValue}
      />
    );
    expect(getAllByTestId('DesignSystem-InputWrapper')[0]).toHaveClass('Input--error');
    expect(getAllByTestId('DesignSystem-InlineMessage--Description')[0].textContent).toMatch(caption);
  });
});

describe('DateRangePicker component with prop:inputOptions', () => {
  it('check for default startErrorMsg property onClear Event', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        inputOptions={{ required: true, error: true }}
        singleInput={true}
        onRangeChange={FunctionValue}
      />
    );
    const InputTestId = getAllByTestId('DesignSystem-Input--closeIcon');
    fireEvent.click(InputTestId[0]);
    expect(getAllByTestId('DesignSystem-InlineMessage--Description')[0].textContent).toMatch('Invalid value');
  });

  it('check for default caption property onClear Event', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        inputOptions={{ caption, error: true, required: true }}
        singleInput={true}
        onRangeChange={FunctionValue}
      />
    );
    const InputTestId = getAllByTestId('DesignSystem-Input--closeIcon');
    fireEvent.click(InputTestId[0]);
    expect(getAllByTestId('DesignSystem-InputWrapper')[0]).toHaveClass('Input--error');
    expect(getAllByTestId('DesignSystem-InlineMessage--Description')[0].textContent).toMatch(caption);
  });

  it('check for placeholderChar property default value onChange Event', () => {
    const { getByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        singleInput={true}
        inputOptions={{ placeholderChar: '#' }}
      />
    );
    const InputTestId = getByTestId('DesignSystem-Input');
    fireEvent.change(InputTestId, { target: { value: '8/27/2021 - 09/14/2021' } });
    expect(getByTestId('DesignSystem-Input')).toHaveValue('#3/03/2020 - 06/08/2021');
  });

  it('check for placeholderChar property default value onChange Event', () => {
    const { getByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        withInput={true}
        singleInput={true}
        inputOptions={{ placeholderChar: '#' }}
        onRangeChange={(e, value) => FunctionValue(e, value)}
      />
    );
    const InputTestId = getByTestId('DesignSystem-Input');
    fireEvent.change(InputTestId, { target: { value: '18/27/2021 - 19/14/2021' } });
    expect(getByTestId('DesignSystem-Input')).toHaveValue('03/03/2020 - 06/08/2021');
    expect(FunctionValue).toHaveBeenCalled();
  });
});

describe('DateRangePicker component with prop:rangeLimit', () => {
  it('check for valid rangeLimit', () => {
    render(
      <DateRangePicker
        startDate={'15/10/2021'}
        endDate={'20/10/2021'}
        inputFormat="dd/mm/yyyy"
        rangeLimit={2}
        onRangeChange={FunctionValue}
      />
    );
    expect(FunctionValue).toHaveBeenCalled();
  });
});

describe('DateRangePicker component prop:allowReverseSelection', () => {
  it('selects dates in forward direction when allowReverseSelection is false', () => {
    const { getAllByTestId } = render(
      <DateRangePicker startDate={startDate} endDate={endDate} allowReverseSelection={false} withInput={true} />
    );
    const Inputs = getAllByTestId('DesignSystem-InputWrapper');
    const InputTestId = getAllByTestId('DesignSystem-Input');
    fireEvent.click(Inputs[0]);

    const startSelection = getAllByTestId('DesignSystem-Calendar--dateValue')[10];
    fireEvent.click(startSelection);
    const endSelection = getAllByTestId('DesignSystem-Calendar--dateValue')[15];
    fireEvent.click(endSelection);
    expect(InputTestId[0]).toHaveAttribute('value', '06/09/2021');
    expect(InputTestId[1]).toHaveAttribute('value', '06/14/2021');
  });

  it('selects dates in forward direction when allowReverseSelection is true', () => {
    const { getAllByTestId } = render(
      <DateRangePicker startDate={startDate} endDate={endDate} allowReverseSelection={true} withInput={true} />
    );
    const Inputs = getAllByTestId('DesignSystem-InputWrapper');
    const InputTestId = getAllByTestId('DesignSystem-Input');
    fireEvent.click(Inputs[0]);

    const startSelection = getAllByTestId('DesignSystem-Calendar--dateValue')[10];
    fireEvent.click(startSelection);
    const endSelection = getAllByTestId('DesignSystem-Calendar--dateValue')[15];
    fireEvent.click(endSelection);
    expect(InputTestId[0]).toHaveAttribute('value', '06/09/2021');
    expect(InputTestId[1]).toHaveAttribute('value', '06/14/2021');
  });

  it('selects dates in reverse direction when allowReverseSelection is true', () => {
    const { getAllByTestId } = render(
      <DateRangePicker startDate={startDate} endDate={endDate} allowReverseSelection={true} withInput={true} />
    );
    const Inputs = getAllByTestId('DesignSystem-InputWrapper');
    const InputTestId = getAllByTestId('DesignSystem-Input');

    fireEvent.click(Inputs[0]);
    const endSelection = getAllByTestId('DesignSystem-Calendar--dateValue')[17];
    fireEvent.click(endSelection);
    const startSelection = getAllByTestId('DesignSystem-Calendar--dateValue')[15];
    fireEvent.mouseOver(startSelection);
    fireEvent.click(startSelection);

    expect(InputTestId[0]).toHaveAttribute('value', '06/14/2021');
    expect(InputTestId[1]).toHaveAttribute('value', '06/16/2021');
  });

  it('selects dates in reverse direction when allowReverseSelection is false', () => {
    const { getAllByTestId } = render(
      <DateRangePicker startDate={startDate} endDate={endDate} allowReverseSelection={false} withInput={true} />
    );
    const Inputs = getAllByTestId('DesignSystem-InputWrapper');
    const InputTestId = getAllByTestId('DesignSystem-Input');

    fireEvent.click(Inputs[0]);
    const endSelection = getAllByTestId('DesignSystem-Calendar--dateValue')[15];
    fireEvent.click(endSelection);
    const startSelection = getAllByTestId('DesignSystem-Calendar--dateValue')[10];
    fireEvent.click(startSelection);

    expect(InputTestId[0]).toHaveAttribute('value', '06/09/2021');
    expect(InputTestId[1]).toHaveAttribute('value', '__/__/____');
  });

  it('swaps start date to end date on hover when hover date is less than start date', () => {
    const { getAllByTestId } = render(
      <DateRangePicker startDate={startDate} endDate={endDate} allowReverseSelection={true} withInput={true} />
    );
    const Inputs = getAllByTestId('DesignSystem-InputWrapper');
    const InputTestId = getAllByTestId('DesignSystem-Input');

    fireEvent.click(Inputs[0]);
    const startSelection = getAllByTestId('DesignSystem-Calendar--dateValue')[10];
    fireEvent.click(startSelection);
    const endSelection = getAllByTestId('DesignSystem-Calendar--dateValue')[5];
    fireEvent.mouseOver(endSelection);

    expect(InputTestId[0]).toHaveAttribute('value', '__/__/____');
    expect(InputTestId[1]).toHaveAttribute('value', '06/09/2021');
  });

  it('no swapping of dates on hover when allowReverseSelection is passed as false', () => {
    const { getAllByTestId } = render(
      <DateRangePicker startDate={startDate} endDate={endDate} allowReverseSelection={false} withInput={true} />
    );
    const Inputs = getAllByTestId('DesignSystem-InputWrapper');
    const InputTestId = getAllByTestId('DesignSystem-Input');

    fireEvent.click(Inputs[0]);
    const startSelection = getAllByTestId('DesignSystem-Calendar--dateValue')[10];
    fireEvent.click(startSelection);
    const endSelection = getAllByTestId('DesignSystem-Calendar--dateValue')[5];
    fireEvent.mouseOver(endSelection);

    expect(InputTestId[0]).toHaveAttribute('value', '06/09/2021');
    expect(InputTestId[1]).toHaveAttribute('value', '__/__/____');
  });

  it('swaps end date to start date on hover when hover date is greater than end date', () => {
    const { getAllByTestId } = render(
      <DateRangePicker endDate={endDate} allowReverseSelection={true} withInput={true} />
    );
    const Inputs = getAllByTestId('DesignSystem-InputWrapper');
    const InputTestId = getAllByTestId('DesignSystem-Input');

    fireEvent.click(Inputs[0]);
    const startSelection = getAllByTestId('DesignSystem-Calendar--dateValue')[15];
    fireEvent.mouseOver(startSelection);

    expect(InputTestId[0]).toHaveAttribute('value', '06/08/2021');
    expect(InputTestId[1]).toHaveAttribute('value', '__/__/____');
  });

  it('swaps end date to start date on selection when start date is greater than end date', () => {
    const { getAllByTestId } = render(
      <DateRangePicker endDate={endDate} allowReverseSelection={true} withInput={true} />
    );
    const Inputs = getAllByTestId('DesignSystem-InputWrapper');
    const InputTestId = getAllByTestId('DesignSystem-Input');

    fireEvent.click(Inputs[0]);
    const startSelection = getAllByTestId('DesignSystem-Calendar--dateValue')[5];
    fireEvent.click(startSelection);

    expect(InputTestId[0]).toHaveAttribute('value', '06/04/2021');
    expect(InputTestId[1]).toHaveAttribute('value', '06/08/2021');
  });

  it('selects dates in forward direction when allowReverseSelection is true in single input', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        allowReverseSelection={true}
        singleInput={true}
        withInput={true}
      />
    );
    const Inputs = getAllByTestId('DesignSystem-InputWrapper');
    const InputTestId = getAllByTestId('DesignSystem-Input');
    fireEvent.click(Inputs[0]);

    const startSelection = getAllByTestId('DesignSystem-Calendar--dateValue')[10];
    fireEvent.click(startSelection);
    const endSelection = getAllByTestId('DesignSystem-Calendar--dateValue')[15];
    fireEvent.mouseOver(endSelection);
    fireEvent.click(endSelection);
    expect(InputTestId[0]).toHaveAttribute('value', '06/09/2021 - 06/14/2021');
  });

  it('selects dates in reverse direction when allowReverseSelection is true in single input', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        singleInput={true}
        allowReverseSelection={true}
        withInput={true}
      />
    );
    const Inputs = getAllByTestId('DesignSystem-InputWrapper');
    const InputTestId = getAllByTestId('DesignSystem-Input');

    fireEvent.click(Inputs[0]);
    const endSelection = getAllByTestId('DesignSystem-Calendar--dateValue')[15];
    fireEvent.click(endSelection);
    const startSelection = getAllByTestId('DesignSystem-Calendar--dateValue')[10];
    fireEvent.mouseOver(startSelection);
    fireEvent.click(startSelection);

    expect(InputTestId[0]).toHaveAttribute('value', '06/09/2021 - 06/14/2021');
  });

  it('selects dates in reverse direction when allowReverseSelection is false in single input', () => {
    const { getAllByTestId } = render(
      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        singleInput={true}
        allowReverseSelection={false}
        withInput={true}
      />
    );
    const Inputs = getAllByTestId('DesignSystem-InputWrapper');
    const InputTestId = getAllByTestId('DesignSystem-Input');

    fireEvent.click(Inputs[0]);
    const endSelection = getAllByTestId('DesignSystem-Calendar--dateValue')[15];
    fireEvent.click(endSelection);
    const startSelection = getAllByTestId('DesignSystem-Calendar--dateValue')[10];
    fireEvent.click(startSelection);

    expect(InputTestId[0]).toHaveAttribute('value', '06/09/2021 - __/__/____');
  });

  it('swaps end date to start date on hover when hover date is greater than end date in single input', () => {
    const { getAllByTestId } = render(
      <DateRangePicker endDate={endDate} allowReverseSelection={true} singleInput={true} withInput={true} />
    );
    const Inputs = getAllByTestId('DesignSystem-InputWrapper');
    const InputTestId = getAllByTestId('DesignSystem-Input');

    fireEvent.click(Inputs[0]);
    const startSelection = getAllByTestId('DesignSystem-Calendar--dateValue')[15];
    fireEvent.mouseOver(startSelection);

    expect(InputTestId[0]).toHaveAttribute('value', '06/08/2021 - __/__/____');
  });

  it('swaps start date to end date on hover when hover date is smaller than start date in single input', () => {
    const { getAllByTestId } = render(
      <DateRangePicker startDate={currentDate} allowReverseSelection={true} singleInput={true} withInput={true} />
    );
    const Inputs = getAllByTestId('DesignSystem-InputWrapper');
    const InputTestId = getAllByTestId('DesignSystem-Input');

    fireEvent.click(Inputs[0]);
    const endSelection = getAllByTestId('DesignSystem-Calendar--dateValue')[10];
    fireEvent.mouseOver(endSelection);

    expect(InputTestId[0]).toHaveAttribute('value', '__/__/____ - 09/12/2021');
  });
});
