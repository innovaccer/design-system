import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ChoiceList, { ChoiceListProps as Props } from '../ChoiceList';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const size = ['tiny', 'regular'];
const alignment = ['horizontal', 'vertical'];
const choices = [
  { label: 'radio', name: 'choiceList', value: 'radio' },
  { label: 'radio', name: 'choiceList', value: 'radio' },
];
const BooleanValue = [true, false];
const FunctionValue = jest.fn();

const StringValue = 'ChoiceList';

describe('ChoiceList component', () => {
  const mapper: Record<string, any> = {
    title: valueHelper(StringValue, { required: true }),
    choices: valueHelper(choices, { required: true, iterate: true }),
    size: valueHelper(size, { required: true, iterate: true }),
    alignment: valueHelper(alignment, { required: true, iterate: true }),
    allowMultiple: valueHelper(BooleanValue, { required: true, iterate: true }),
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
    name: valueHelper(StringValue, { required: true }),
    value: valueHelper(StringValue, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;
    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <ChoiceList
          {...attr}
          choices={[
            { label: 'radio', name: 'choiceList', value: 'radio' },
            { label: 'radio', name: 'choiceList', value: 'radio' },
          ]}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  };
  testHelper(mapper, testFunc);
});

describe('ChoiceList component', () => {
  it('renders choiceList component', () => {
    const { getByTestId } = render(
      <ChoiceList
        allowMultiple={true}
        alignment={'horizontal'}
        choices={[
          { label: 'radio', name: 'choiceList', value: 'radio' },
          { label: 'radio', name: 'choiceList', value: 'radio' },
        ]}
      />
    );
    expect(getByTestId('DesignSystem-ChoiceList-Wrapper')).toBeInTheDocument();
  });

  it('renders choiceList component when allowMultiple is true and alignment is horizontal', () => {
    const { getAllByTestId, container } = render(
      <ChoiceList
        allowMultiple={true}
        alignment={'horizontal'}
        choices={[
          { label: 'radio', name: 'choiceList', value: 'radio' },
          { label: 'radio', name: 'choiceList', value: 'radio' },
        ]}
      />
    );
    expect(getAllByTestId('DesignSystem-Checkbox')[0]).toBeInTheDocument();
    expect(container.querySelectorAll('.ChoiceList--alignHorizontal')[0]).toBeInTheDocument();
  });

  it('renders choiceList component when allowMultiple is false and alignment is horizontal', () => {
    const { getAllByTestId, container } = render(
      <ChoiceList
        allowMultiple={false}
        alignment={'horizontal'}
        choices={[
          { label: 'radio', name: 'choiceList', value: 'radio' },
          { label: 'radio', name: 'choiceList', value: 'radio' },
        ]}
      />
    );
    expect(getAllByTestId('DesignSystem-Radio')[0]).toBeInTheDocument();
    expect(container.querySelectorAll('.ChoiceList--alignHorizontal')[0]).toBeInTheDocument();
  });

  it('renders choiceList component when allowMultiple is true and alignment is vertical', () => {
    const { getAllByTestId, container } = render(
      <ChoiceList
        allowMultiple={true}
        alignment={'vertical'}
        choices={[
          { label: 'radio', name: 'choiceList', value: 'radio' },
          { label: 'radio', name: 'choiceList', value: 'radio' },
        ]}
      />
    );
    expect(getAllByTestId('DesignSystem-Checkbox')[0]).toBeInTheDocument();
    expect(container.querySelectorAll('.ChoiceList--alignVertical')[0]).toBeInTheDocument();
  });

  it('renders choiceList component when allowMultiple is false and alignment is vertical', () => {
    const { getAllByTestId, container } = render(
      <ChoiceList
        allowMultiple={false}
        alignment={'vertical'}
        choices={[
          { label: 'radio', name: 'choiceList', value: 'radio' },
          { label: 'radio', name: 'choiceList', value: 'radio' },
        ]}
      />
    );
    expect(getAllByTestId('DesignSystem-Radio')[0]).toBeInTheDocument();
    expect(container.querySelectorAll('.ChoiceList--alignVertical')[0]).toBeInTheDocument();
  });

  it('renders choiceList component when allowMultiple is true and alignment is vertical', () => {
    const { getAllByTestId } = render(
      <ChoiceList
        allowMultiple={true}
        alignment={'vertical'}
        choices={[
          { label: 'radio', name: 'choiceList', value: 'radio' },
          { label: 'radio', name: 'choiceList', value: 'radio' },
        ]}
        onChange={FunctionValue}
      />
    );
    const checkbox = getAllByTestId('DesignSystem-Checkbox-InputBox')[0];
    fireEvent.click(checkbox, { target: { checked: true } });
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('renders choiceList component when allowMultiple is false and alignment is vertical', () => {
    const { getAllByTestId } = render(
      <ChoiceList
        allowMultiple={false}
        alignment={'vertical'}
        choices={[
          { label: 'radio', name: 'choiceList', value: 'radio' },
          { label: 'radio', name: 'choiceList', value: 'radio' },
        ]}
        onChange={FunctionValue}
      />
    );
    const radio = getAllByTestId('DesignSystem-Radio-Input')[0];
    fireEvent.click(radio);
    expect(FunctionValue).toHaveBeenCalled();
  });
  it('Overwrite choiceList class', () => {
    const { getByTestId } = render(
      <ChoiceList
        allowMultiple={true}
        className="customClass"
        alignment={'vertical'}
        choices={[
          { label: 'radio', name: 'choiceList', value: 'radio' },
          { label: 'radio', name: 'choiceList', value: 'radio' },
        ]}
        onChange={FunctionValue}
      />
    );
    expect(getByTestId('DesignSystem-ChoiceList-Wrapper')).toHaveClass('customClass');
  });
});
