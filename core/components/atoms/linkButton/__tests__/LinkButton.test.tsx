import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { LinkButton } from '@/index';
import { LinkButtonProps as Props } from '@/index.type';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { MakeRequired } from '@/utils/types';

const BooleanValue = [true, false];
const buttonType = ['button', 'submit', 'reset'];
const icon = 'events';
const iconAlign = ['left', 'right'];
const sizes: Props['size'][] = ['tiny', 'regular'];
const FunctionValue = jest.fn();
const sizeMapping: Record<MakeRequired<Props['size']>, number> = {
  tiny: 12,
  regular: 16,
};

describe('Link Button component snapshots', () => {
  const mapper: Record<string, any> = {
    type: valueHelper(buttonType, { required: true, iterate: true }),
    size: valueHelper(sizes, { required: true, iterate: true }),
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
    iconAlign: valueHelper(iconAlign, { required: true, iterate: true }),
    icon: valueHelper(icon, { required: true, iterate: false }),
    subtle: valueHelper(BooleanValue, { required: false, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<LinkButton {...attr}>Link Button</LinkButton>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Link Button component with icon', () => {
  it('renders icon and label inside button', () => {
    const { getByTestId } = render(<LinkButton icon="events">LinkButton</LinkButton>);
    expect(getByTestId('DesignSystem-LinkButton--Icon').textContent).toMatch('events');
    expect(getByTestId('DesignSystem-LinkButton')).toHaveClass('LinkButton--iconAlign-left');
  });

  it('check for icon alignment', () => {
    const { getByTestId } = render(
      <LinkButton icon="events" iconAlign="right">
        LinkButton
      </LinkButton>
    );
    expect(getByTestId('DesignSystem-LinkButton')).toHaveClass('LinkButton--iconAlign-right');
  });

  sizes.forEach((s = 'regular') => {
    it(`renders icon of fontSize = ${sizeMapping[s]} for LinkButton size = ${s}`, () => {
      const { getByTestId } = render(
        <LinkButton icon="events" size={s}>
          LinkButton
        </LinkButton>
      );
      expect(getByTestId('DesignSystem-LinkButton--Icon')).toHaveStyle(`fontSize: ${sizeMapping[s]}px`);
    });
  });
});

describe('Link Button component Event Handlers', () => {
  it('check for onClick event handler', () => {
    const { getByTestId } = render(<LinkButton onClick={FunctionValue}>LinkButton</LinkButton>);
    fireEvent.click(getByTestId('DesignSystem-LinkButton'));
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('check for onMouseEnter event handler', () => {
    jest.resetAllMocks();
    const { getByTestId } = render(<LinkButton onMouseEnter={FunctionValue}>LinkButton</LinkButton>);
    fireEvent.mouseEnter(getByTestId('DesignSystem-LinkButton'));
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('check for onMouseLeave event handler', () => {
    jest.resetAllMocks();
    const { getByTestId } = render(<LinkButton onMouseLeave={FunctionValue}>LinkButton</LinkButton>);
    fireEvent.mouseLeave(getByTestId('DesignSystem-LinkButton'));
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('check for onClick event handler when disabled', () => {
    jest.resetAllMocks();
    const { getByTestId } = render(
      <LinkButton onClick={FunctionValue} disabled={true}>
        LinkButton
      </LinkButton>
    );
    fireEvent.click(getByTestId('DesignSystem-LinkButton'));
    expect(FunctionValue).not.toHaveBeenCalled();
  });
});

describe('Link Button component appearance', () => {
  it('check for subtle class in link button', () => {
    const { getByTestId } = render(<LinkButton subtle={true}>LinkButton</LinkButton>);
    expect(getByTestId('DesignSystem-LinkButton')).toHaveClass('LinkButton--subtle');
    expect(getByTestId('DesignSystem-LinkButton')).not.toHaveClass('LinkButton--default');
  });

  it('check for default class in link button', () => {
    const { getByTestId } = render(<LinkButton>LinkButton</LinkButton>);
    expect(getByTestId('DesignSystem-LinkButton')).not.toHaveClass('LinkButton--subtle');
    expect(getByTestId('DesignSystem-LinkButton')).toHaveClass('LinkButton--default');
  });
});
