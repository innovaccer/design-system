import * as React from 'react';
import { shallow } from 'enzyme';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import Dropdown, { DropdownProps as Props } from '../Dropdown';
import { storyOptions, subInfoItems, iconItems, multiSelectedStoryOptions, selectedStoryOptions } from '../utils/Options';

const size = ['tiny', 'regular'];
const dropdownAlign = ['left', 'right'];
const BooleanValue = [true, false];
const placeholderValue = ['Select'];
const options = [subInfoItems, iconItems];
const SectionOptions = [
  {
    group: true,
    label: 'Group 1',
    items: storyOptions,
  }
];

const FunctionValue = jest.fn();

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    size: valueHelper(size, { required: true, iterate: true }),
    placeholder: valueHelper(placeholderValue, { required: true, iterate: true }),
    options: valueHelper(storyOptions, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Dropdown {...attr} />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    dropdownAlign: valueHelper(dropdownAlign, { required: true, iterate: true }),
    options: valueHelper(storyOptions, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Dropdown {...attr} />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
    placeholder: valueHelper(placeholderValue, { required: true, iterate: true }),
    options: valueHelper(storyOptions, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Dropdown {...attr} />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    options: valueHelper(options, { required: true, iterate: true }),
    placeholder: valueHelper(placeholderValue, { required: true, iterate: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Dropdown {...attr} />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    checkboxes: valueHelper(true, { required: true }),
    showApplyButton: valueHelper(BooleanValue, { required: true, iterate: true }),
    options: valueHelper(storyOptions, { required: true }),
    placeholder: valueHelper(placeholderValue, { required: true, iterate: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Dropdown {...attr} />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    options: valueHelper(SectionOptions, { required: true }),
    placeholder: valueHelper(placeholderValue, { required: true, iterate: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Dropdown {...attr} />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    search: valueHelper(true, { required: true }),
    loading: valueHelper(BooleanValue, { required: true, iterate: true }),
    options: valueHelper(storyOptions, { required: true }),
    placeholder: valueHelper(placeholderValue, { required: true, iterate: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Dropdown {...attr} />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    options: valueHelper(storyOptions, { required: true }),
    placeholder: valueHelper(placeholderValue, { iterate: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Dropdown {...attr} />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    options: valueHelper(storyOptions, { required: true }),
    placeholder: valueHelper(placeholderValue, { iterate: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Dropdown {...attr} />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
    placeholder: valueHelper(placeholderValue, { required: true, iterate: true }),
    icon: valueHelper('events', { required: true }),
    options: valueHelper(storyOptions, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Dropdown {...attr} />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
    placeholder: valueHelper(placeholderValue, { required: true, iterate: true }),
    inlineLabel: valueHelper('Label', { required: true }),
    options: valueHelper(storyOptions, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Dropdown {...attr} />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
    placeholder: valueHelper(placeholderValue, { required: true, iterate: true }),
    inlineLabel: valueHelper('Label', { required: true }),
    options: valueHelper(storyOptions, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Dropdown {...attr} />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    options: valueHelper(selectedStoryOptions, { required: true }),
    placeholder: valueHelper(placeholderValue, { required: true, iterate: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Dropdown {...attr} />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    checkboxes: valueHelper(true, { required: true }),
    options: valueHelper(multiSelectedStoryOptions, { required: true }),
    placeholder: valueHelper(placeholderValue, { required: true, iterate: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Dropdown {...attr} />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropdown component', () => {
  const mapper: Record<string, any> = {
    checkboxes: valueHelper(true, { required: true }),
    selectAll: valueHelper(true, { required: true }),
    options: valueHelper(storyOptions, { required: true }),
    placeholder: valueHelper(placeholderValue, { required: true, iterate: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Dropdown {...attr} />
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
