import * as React from 'react';
import { render } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { Divider } from '@/index';
import { DividerProps as Props } from '@/index.type';

const appearance = ['basic', 'header'];
const booleanValue = [true, false];

const testFunc = (props: Record<string, any>): void => {
  const attr = filterUndefined(props) as Props;

  it(testMessageHelper(attr), () => {
    const { baseElement } = render(<Divider {...attr} />);
    expect(baseElement).toMatchSnapshot();
  });
};

describe('Divider component snapshots', () => {
  const mapper: Record<string, any> = {
    vertical: valueHelper(booleanValue, { required: true, iterate: true }),
    appearance: valueHelper(appearance, { required: true, iterate: true }),
  };

  testHelper(mapper, testFunc);
});

describe('Divider component with orientation:horizontal', () => {
  it('test for horizontal divider type:Basic', () => {
    const { getByTestId } = render(<Divider />);
    expect(getByTestId('DesignSystem-Divider')).toHaveClass('Divider');
    expect(getByTestId('DesignSystem-Divider')).toHaveClass('Divider--horizontal');
    expect(getByTestId('DesignSystem-Divider')).toHaveClass('Divider--basic');
  });

  it('test for horizontal divider type:Header', () => {
    const { getByTestId } = render(<Divider appearance="header" />);
    expect(getByTestId('DesignSystem-Divider')).toHaveClass('Divider');
    expect(getByTestId('DesignSystem-Divider')).toHaveClass('Divider--horizontal');
    expect(getByTestId('DesignSystem-Divider')).toHaveClass('Divider--header');
  });
});

describe('Divider component with orientation:vertical', () => {
  it('test for Vertical divider', () => {
    const { getByTestId } = render(<Divider vertical={true} />);
    expect(getByTestId('DesignSystem-Divider')).toHaveClass('Divider--vertical');
    expect(getByTestId('DesignSystem-Divider')).toHaveClass('Divider');
  });
});

describe('Divider component with HTML props', () => {
  it('supports aria-hidden for decorative dividers', () => {
    const { getByTestId } = render(<Divider aria-hidden="true" />);
    expect(getByTestId('DesignSystem-Divider')).toHaveAttribute('aria-hidden', 'true');
  });

  it('supports role="none" for decorative dividers', () => {
    const { getByTestId } = render(<Divider role="none" />);
    expect(getByTestId('DesignSystem-Divider')).toHaveAttribute('role', 'none');
  });

  it('supports id prop', () => {
    const { getByTestId } = render(<Divider id="my-divider" />);
    expect(getByTestId('DesignSystem-Divider')).toHaveAttribute('id', 'my-divider');
  });
});

describe('Divider aria-orientation conditional logic', () => {
  it('sets aria-orientation on semantic dividers (default)', () => {
    const { getByTestId } = render(<Divider />);
    expect(getByTestId('DesignSystem-Divider')).toHaveAttribute('aria-orientation', 'horizontal');
  });

  it('sets aria-orientation="vertical" on vertical semantic dividers', () => {
    const { getByTestId } = render(<Divider vertical={true} />);
    expect(getByTestId('DesignSystem-Divider')).toHaveAttribute('aria-orientation', 'vertical');
  });

  it('omits aria-orientation when role="none"', () => {
    const { getByTestId } = render(<Divider role="none" />);
    expect(getByTestId('DesignSystem-Divider')).not.toHaveAttribute('aria-orientation');
  });

  it('omits aria-orientation when role="presentation"', () => {
    const { getByTestId } = render(<Divider role="presentation" />);
    expect(getByTestId('DesignSystem-Divider')).not.toHaveAttribute('aria-orientation');
  });

  it('omits aria-orientation when aria-hidden="true" (string)', () => {
    const { getByTestId } = render(<Divider aria-hidden="true" />);
    expect(getByTestId('DesignSystem-Divider')).not.toHaveAttribute('aria-orientation');
  });

  it('omits aria-orientation when aria-hidden={true} (boolean)', () => {
    const { getByTestId } = render(<Divider aria-hidden={true} />);
    expect(getByTestId('DesignSystem-Divider')).not.toHaveAttribute('aria-orientation');
  });
});
