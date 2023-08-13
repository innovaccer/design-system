import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { SelectionCard } from '@/index';
import { SelectionCardProps as Props, CardItemProps } from '@/index.type';

const BooleanValue = [true, false];
const FunctionValue = jest.fn();
const StringValue = 'Selection Card';
const ID = 'card1';

describe('selection card component snapshot', () => {
  const mapper: Record<string, any> = {
    multiSelect: valueHelper(BooleanValue, { required: false, iterate: true }),
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

describe('selection card item component snapshot', () => {
  const mapper: Record<string, any> = {
    disabled: valueHelper(BooleanValue, { required: false, iterate: true }),
    children: valueHelper(StringValue, { required: true }),
    onClick: valueHelper(FunctionValue, { required: false }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as CardItemProps;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<SelectionCard.Item {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

/*
onClick-> controlled
*/

describe('selection card item component tests', () => {
  it('check for render item', () => {
    const { getByTestId } = render(<SelectionCard.Item id={ID}>{StringValue}</SelectionCard.Item>);
    const element = getByTestId('DesignSystem-SelectionCard-Item');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('Selection-card');
    expect(element).toHaveTextContent(StringValue);
  });
});

describe('selection card item overlay component tests', () => {
  it('check for overlay item', () => {
    const { getByTestId } = render(<SelectionCard.Item id={ID}>{StringValue}</SelectionCard.Item>);
    const element = getByTestId('DesignSystem-SelectionCard-Overlay');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('Selection-card-overlay');
  });

  it('check for overlay item z-index', () => {
    const { getByTestId } = render(
      <SelectionCard.Item id={ID} zIndex={100}>
        {StringValue}
      </SelectionCard.Item>
    );
    const element = getByTestId('DesignSystem-SelectionCard-Overlay');
    expect(element).toHaveStyle({ zIndex: 100 });
  });
});

describe('selection card disabled item component tests', () => {
  it('check for disabled class for unselected item', () => {
    const { getByTestId } = render(
      <SelectionCard.Item id={ID} disabled={true}>
        {StringValue}
      </SelectionCard.Item>
    );
    const element = getByTestId('DesignSystem-SelectionCard-Item');
    expect(element).toHaveClass('Selection-card--disabled');
  });

  it('check for disabled class for selected item', () => {
    const { getByTestId } = render(
      <SelectionCard selectedList={[ID]}>
        <SelectionCard.Item id={ID} disabled={true}>
          {StringValue}
        </SelectionCard.Item>
      </SelectionCard>
    );
    const element = getByTestId('DesignSystem-SelectionCard-Item');
    expect(element).toHaveClass('Selection-card--selected-disabled');
  });
});

describe('selection card component classes', () => {
  it('check for selection classes', () => {
    const { getByTestId } = render(
      <SelectionCard selectedList={[ID]}>
        <SelectionCard.Item id={ID}>{StringValue}</SelectionCard.Item>
      </SelectionCard>
    );
    const element = getByTestId('DesignSystem-SelectionCard-Item');
    expect(element).toHaveClass('Selection-card--selected');
  });
});

describe('selection card component multiselect', () => {
  it('check for selection classes for multiselect:false', () => {
    const { getAllByTestId } = render(
      <SelectionCard selectedList={['card1']}>
        <SelectionCard.Item id={'card1'}>{StringValue}</SelectionCard.Item>
        <SelectionCard.Item id={'card2'}>{StringValue}</SelectionCard.Item>
      </SelectionCard>
    );
    const element = getAllByTestId('DesignSystem-SelectionCard-Item');
    expect(element[0]).toHaveClass('Selection-card--selected');
    fireEvent.click(element[1]);
    expect(element[0]).not.toHaveClass('Selection-card--selected');
    expect(element[1]).toHaveClass('Selection-card--selected');
  });

  it('check for selection classes for multiselect:false', () => {
    const { getAllByTestId } = render(
      <SelectionCard selectedList={['card1']} multiSelect={true}>
        <SelectionCard.Item id={'card1'}>{StringValue}</SelectionCard.Item>
        <SelectionCard.Item id={'card2'}>{StringValue}</SelectionCard.Item>
      </SelectionCard>
    );
    const element = getAllByTestId('DesignSystem-SelectionCard-Item');
    expect(element[0]).toHaveClass('Selection-card--selected');
    fireEvent.click(element[1]);
    expect(element[0]).toHaveClass('Selection-card--selected');
    expect(element[1]).toHaveClass('Selection-card--selected');
  });
});

describe('selection card component event handlers', () => {
  it('check for click event handler', () => {
    const { getByTestId } = render(
      <SelectionCard selectedList={[ID]}>
        <SelectionCard.Item id={ID} onClick={FunctionValue}>
          {StringValue}
        </SelectionCard.Item>
      </SelectionCard>
    );
    const element = getByTestId('DesignSystem-SelectionCard-Item');
    fireEvent.click(element);
    expect(FunctionValue).toHaveBeenCalled();
    expect(FunctionValue).toHaveBeenCalledWith(expect.objectContaining({}), ID);
  });
});

describe('selection card component custom classes', () => {
  it('check for custom class in selection card component', () => {
    const { getByTestId } = render(<SelectionCard className="custom-class">{StringValue}</SelectionCard>);
    expect(getByTestId('DesignSystem-SelectionCard-OuterWrapper')).toHaveClass('custom-class');
  });

  it('check for custom class in selection card item component', () => {
    const { getByTestId } = render(
      <SelectionCard.Item className="custom-class" id={ID}>
        {StringValue}
      </SelectionCard.Item>
    );
    expect(getByTestId('DesignSystem-SelectionCard-Item')).toHaveClass('custom-class');
  });
});
