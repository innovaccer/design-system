import * as React from 'react';
import { render } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { Dropdown } from '@/index';
import { DropdownProps as Props } from '@/index.type';
import { storyOptions, storyWrapOptions, iconOptions, subInfoOptions, iconWithSubinfoOptions } from '../__stories__/Options';

const size = ['tiny', 'regular'];
const options = [storyOptions, iconOptions, subInfoOptions, iconWithSubinfoOptions];
const loadingType = ['DEFAULT', 'WITH_ICON', 'WITH_META', 'ICON_WITH_META'];
const dropdownAlign = ['left', 'right'];
const BooleanValue = [true, false];

const SectionOptions: any[] = [];
for (let i = 1; i <= 10; i++) {
  SectionOptions.push({
    label: `Option ${i}`,
    value: `Option ${i}`,
    group: 'Group'
  });
}

const FunctionValue = jest.fn();

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    triggerSize: valueHelper(size, { required: true, iterate: true }),
    options: valueHelper(storyOptions, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Dropdown {...attr} />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    align: valueHelper(dropdownAlign, { required: true, iterate: true }),
    options: valueHelper(storyOptions, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Dropdown {...attr} />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
    options: valueHelper(storyOptions, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Dropdown {...attr} />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    options: valueHelper(options, { required: true, iterate: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Dropdown {...attr} />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    checkboxes: valueHelper(true, { required: true }),
    showApplyButton: valueHelper(BooleanValue, { required: true, iterate: true }),
    options: valueHelper(storyOptions, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Dropdown {...attr} />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    options: valueHelper(SectionOptions, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Dropdown {...attr} />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    search: valueHelper(true, { required: true }),
    loading: valueHelper(BooleanValue, { required: true, iterate: true }),
    options: valueHelper(storyOptions, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Dropdown {...attr} />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    options: valueHelper(storyOptions, { required: true }),
    menu: valueHelper(BooleanValue, { required: true, iterate: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Dropdown {...attr} />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
    icon: valueHelper('events', { required: true }),
    options: valueHelper(storyOptions, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Dropdown {...attr} />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
    inlineLabel: valueHelper('Label', { required: true }),
    options: valueHelper(storyOptions, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Dropdown {...attr} />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    truncateOptions: valueHelper(BooleanValue, { required: true, iterate: true }),
    options: valueHelper(storyWrapOptions, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Dropdown {...attr} />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    options: valueHelper(storyOptions, { required: true }),
    optionType: valueHelper(loadingType, { required: true, iterate: true }),
    loading: valueHelper(true, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Dropdown {...attr} />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
