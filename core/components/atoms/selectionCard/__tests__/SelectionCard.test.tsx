import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { SelectionCard } from '@/index';
import { SelectionCardProps as Props } from '@/index.type';

const BooleanValue = [true, false];
const FunctionValue = jest.fn();
const StringValue = 'Selection Card';
const name = 'card1';

const SingleSelect = () => {
  const { isCardSelected, updateCardSelection } = SelectionCard.useSingleSelect();

  return (
    <div>
      <SelectionCard
        id="item1"
        data-test="Selection-card-1"
        onClick={() => updateCardSelection('item1')}
        selected={isCardSelected('item1')}
      >
        Single Selection Item 1
      </SelectionCard>

      <SelectionCard
        id="item2"
        data-test="Selection-card-2"
        onClick={() => updateCardSelection('item2')}
        selected={isCardSelected('item2')}
      >
        Single Selection Item 2
      </SelectionCard>

      <SelectionCard
        id="item3"
        data-test="Selection-card-3"
        disabled={true}
        onClick={() => updateCardSelection('item3')}
        selected={isCardSelected('item3')}
      >
        Single Selection Item 3
      </SelectionCard>
    </div>
  );
};

const MultiSelect = () => {
  const { isCardSelected, updateCardSelection } = SelectionCard.useMultiSelect();

  return (
    <div>
      <SelectionCard
        id="item1"
        cardValue={{ title: 'Item 1' }}
        data-test="Selection-card-1"
        onClick={() => updateCardSelection('item1', { title: 'Item 1' })}
        selected={isCardSelected('item1')}
      >
        Multi Selection
      </SelectionCard>

      <SelectionCard
        id="item2"
        cardValue={{ title: 'Item 2' }}
        data-test="Selection-card-2"
        onClick={() => updateCardSelection('item2', { title: 'Item 2' })}
        selected={isCardSelected('item2')}
      >
        Multi Selection
      </SelectionCard>

      <SelectionCard
        id="item3"
        data-test="Selection-card-3"
        disabled={true}
        onClick={() => updateCardSelection('item3')}
        selected={isCardSelected('item3')}
      >
        Single Selection Item 3
      </SelectionCard>
    </div>
  );
};

describe('selection card item component snapshot', () => {
  const mapper: Record<string, any> = {
    disabled: valueHelper(BooleanValue, { required: false, iterate: true }),
    selected: valueHelper(BooleanValue, { required: false, iterate: true }),
    children: valueHelper(StringValue, { required: true }),
    onClick: valueHelper(FunctionValue, { required: false }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<SelectionCard {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('selection card component tests', () => {
  it('check for render item', () => {
    const { getByTestId } = render(<SelectionCard id={name}>{StringValue}</SelectionCard>);
    const element = getByTestId('DesignSystem-SelectionCard');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('Selection-card');
    expect(element).toHaveClass('Selection-card--default');
    expect(element).toHaveTextContent(StringValue);
  });
});

describe('selection card item overlay component tests', () => {
  it('check for overlay item', () => {
    const { getByTestId } = render(<SelectionCard id={name}>{StringValue}</SelectionCard>);
    const element = getByTestId('DesignSystem-SelectionCard-Overlay');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('Selection-card-overlay');
  });

  it('check for overlay item z-index', () => {
    const { getByTestId } = render(
      <SelectionCard id={name} overlayZIndex={100}>
        {StringValue}
      </SelectionCard>
    );
    const element = getByTestId('DesignSystem-SelectionCard-Overlay');
    expect(element).toHaveStyle({ zIndex: 100 });
  });
});

describe('selection card disabled item component tests', () => {
  it('check for disabled class for unselected item', () => {
    const { getByTestId } = render(
      <SelectionCard id={name} disabled={true}>
        {StringValue}
      </SelectionCard>
    );
    const element = getByTestId('DesignSystem-SelectionCard');
    expect(element).toHaveClass('Selection-card--disabled');
    expect(element).toHaveClass('Selection-card--default-disabled');
  });

  it('check for disabled class for selected item', () => {
    const { getByTestId } = render(
      <SelectionCard id={name} disabled={true} selected={true}>
        {StringValue}
      </SelectionCard>
    );
    const element = getByTestId('DesignSystem-SelectionCard');
    expect(element).toHaveClass('Selection-card--disabled');
    expect(element).toHaveClass('Selection-card--selected-disabled');
  });

  it('check for onClick event for disabled item', () => {
    const { getByTestId } = render(
      <SelectionCard id={name} onClick={FunctionValue} disabled={true} selected={true}>
        {StringValue}
      </SelectionCard>
    );
    const element = getByTestId('DesignSystem-SelectionCard');
    fireEvent.click(element);
    expect(FunctionValue).not.toHaveBeenCalled();
  });
});

describe('selection card component classes', () => {
  it('check for selection classes', () => {
    const { getByTestId } = render(
      <SelectionCard id={name} selected={true}>
        {StringValue}
      </SelectionCard>
    );
    const element = getByTestId('DesignSystem-SelectionCard');
    expect(element).toHaveClass('Selection-card--selected');
  });

  it('check for custom class in selection card component', () => {
    const { getByTestId } = render(
      <SelectionCard id={name} className="custom-class">
        {StringValue}
      </SelectionCard>
    );
    expect(getByTestId('DesignSystem-SelectionCard')).toHaveClass('custom-class');
  });
});

describe('selection card component event handlers', () => {
  it('check for click event handler', () => {
    const { getByTestId } = render(
      <SelectionCard id={name} onClick={FunctionValue}>
        {StringValue}
      </SelectionCard>
    );
    const element = getByTestId('DesignSystem-SelectionCard');
    fireEvent.click(element);
    expect(FunctionValue).toHaveBeenCalled();
  });
});

describe('selection card component hooks test', () => {
  it('test for single select hook', () => {
    const { getByTestId } = render(<SingleSelect />);
    const element1 = getByTestId('Selection-card-1');
    fireEvent.click(element1);
    expect(element1).toHaveClass('Selection-card--selected');

    const element2 = getByTestId('Selection-card-2');
    fireEvent.click(element2);
    expect(element2).toHaveClass('Selection-card--selected');
    expect(element1).not.toHaveClass('Selection-card--selected');

    fireEvent.click(element2);
    expect(element2).not.toHaveClass('Selection-card--selected');
    const element3 = getByTestId('Selection-card-3');
    fireEvent.click(element2);

    fireEvent.click(element3);
    expect(element3).not.toHaveClass('Selection-card--selected');
    expect(element2).toHaveClass('Selection-card--selected');
  });

  it('test for multi select hook', () => {
    const { getByTestId } = render(<MultiSelect />);
    const element1 = getByTestId('Selection-card-1');
    fireEvent.click(element1);
    expect(element1).toHaveClass('Selection-card--selected');

    const element2 = getByTestId('Selection-card-2');
    fireEvent.click(element2);
    expect(element2).toHaveClass('Selection-card--selected');

    fireEvent.click(element1);
    expect(element1).not.toHaveClass('Selection-card--selected');

    const element3 = getByTestId('Selection-card-3');
    fireEvent.click(element3);
    expect(element3).not.toHaveClass('Selection-card--selected');

    expect(element2).toHaveClass('Selection-card--selected');
  });
});
