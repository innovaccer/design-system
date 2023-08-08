import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { TimePicker } from '@/index';
import { TimePickerProps as Props } from '@/index.type';

const timeFormat = ['hh:mm AM', 'hh:mm'];
const BooleanValue = [true, false];
const timeValues = [1629880121, '3:30 AM'];
const expectedTimeValue = ['08:44 PM', '3:30 AM'];
const FunctionValue = jest.fn();

describe('TimePicker component prop:inputFormat snapshot', () => {
  const mapper: Record<string, any> = {
    inputFormat: valueHelper(timeFormat, { required: true, iterate: true }),
    onTimeChange: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<TimePicker {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('TimePicker component prop:outputFormat snapshot', () => {
  const mapper: Record<string, any> = {
    outputFormat: valueHelper(timeFormat, { required: true, iterate: true }),
    onTimeChange: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<TimePicker {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('TimePicker component prop:validators snapshot', () => {
  const mapper: Record<string, any> = {
    validators: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<TimePicker {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('TimePicker component prop:error snapshot', () => {
  const mapper: Record<string, any> = {
    error: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<TimePicker {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('TimePicker component prop:time snapshot', () => {
  const mapper: Record<string, any> = {
    time: valueHelper(timeValues, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<TimePicker {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('TimePicker component with different prop:time values', () => {
  timeValues.forEach((time, key) => {
    it(`check time if prop:time is passed as ${typeof time} `, () => {
      const { getByTestId } = render(<TimePicker time={time} />);
      expect(getByTestId('DesignSystem-Input')).toHaveValue(expectedTimeValue[key]);
    });
  });
});

describe('TimePicker component with different prop:inputFormat values', () => {
  it('check format if prop:inputFormat is hh:mm', () => {
    const { getByTestId } = render(<TimePicker time={timeValues[0]} inputFormat="hh:mm" />);
    expect(getByTestId('DesignSystem-Input')).toHaveValue('20:44');
  });

  it('check format if prop:inputFormat is hh:mm AM', () => {
    const { getByTestId } = render(<TimePicker time={timeValues[0]} inputFormat="hh:mm AM" />);
    expect(getByTestId('DesignSystem-Input')).toHaveValue(expectedTimeValue[0]);
  });
});

describe('TimePicker component event handler', () => {
  it('onBlur Event handler ', () => {
    const { getByTestId } = render(<TimePicker time={timeValues[1]} onTimeChange={FunctionValue} />);
    const InputTestId = getByTestId('DesignSystem-Input');
    fireEvent.blur(InputTestId);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('onChange Event handler ', () => {
    const { getByTestId } = render(<TimePicker time={timeValues[1]} onTimeChange={FunctionValue} />);
    const InputTestId = getByTestId('DesignSystem-Input');
    fireEvent.change(InputTestId, { target: { value: timeValues[0] } });
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('onClear Event handler ', () => {
    const { getByTestId } = render(<TimePicker time={timeValues[1]} onTimeChange={FunctionValue} />);
    const InputTestId = getByTestId('DesignSystem-Input--closeIcon');
    fireEvent.click(InputTestId);
    expect(FunctionValue).toHaveBeenCalled();
  });
});

describe('TimePicker component placeholder', () => {
  it('check placeholder if inputFormat is default ', () => {
    const { getByTestId } = render(
      <TimePicker
        time={timeValues[1]}
        inputOptions={{
          placeholderChar: '*',
        }}
      />
    );
    const InputTestId = getByTestId('DesignSystem-Input--closeIcon');
    fireEvent.click(InputTestId);
    expect(FunctionValue).toHaveBeenCalled();
    expect(getByTestId('DesignSystem-Input')).toHaveValue('**:** *M');
  });

  it('check placeholder if inputFormat is hh:mm ', () => {
    const { getByTestId } = render(
      <TimePicker
        time={timeValues[1]}
        inputFormat="hh:mm"
        inputOptions={{
          placeholderChar: '*',
        }}
      />
    );
    const InputTestId = getByTestId('DesignSystem-Input--closeIcon');
    fireEvent.click(InputTestId);
    expect(FunctionValue).toHaveBeenCalled();
    expect(getByTestId('DesignSystem-Input')).toHaveValue('**:**');
  });
});

describe('TimePicker component with different time format', () => {
  it('check when inputFormat and outputFormat is different', () => {
    const { getByTestId } = render(
      <TimePicker time={timeValues[1]} onTimeChange={FunctionValue} inputFormat="hh:mm AM" outputFormat="hh:mm" />
    );
    const InputTestId = getByTestId('DesignSystem-Input');
    fireEvent.blur(InputTestId);
    expect(FunctionValue).toHaveBeenCalled();
  });
});

describe('TimePicker component with different placeholder', () => {
  it('TimePicker with "__:__ _M" format', () => {
    const { getByTestId } = render(
      <TimePicker onTimeChange={FunctionValue} inputFormat="hh:mm AM" outputFormat="hh:mm AM" />
    );
    const input = getByTestId('DesignSystem-Input');
    fireEvent.focus(input);
    expect(input).toHaveValue('__:__ _M');
  });

  it('TimePicker with "__:__" format', () => {
    const { getByTestId } = render(
      <TimePicker onTimeChange={FunctionValue} inputFormat="hh:mm" outputFormat="hh:mm" />
    );
    const input = getByTestId('DesignSystem-Input');
    fireEvent.focus(input);
    expect(input).toHaveValue('__:__');
  });
});

describe('TimePicker component with error state true', () => {
  it('renders with input--error class', () => {
    const { getByTestId } = render(<TimePicker time={timeValues[1]} onTimeChange={FunctionValue} error={true} />);
    expect(getByTestId('DesignSystem-InputWrapper')).toHaveClass('Input--error');
  });
});
