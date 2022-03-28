import * as React from 'react';
import { render } from '@testing-library/react';
import { Avatar, AvatarProps as Props, AvatarSize } from '@/index';
import { AccentAppearance } from '@/common.type';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const appearances: AccentAppearance[] = [
  'primary',
  'alert',
  'warning',
  'success',
  'accent1',
  'accent2',
  'accent3',
  'accent4',
];

const sizes: AvatarSize[] = ['regular', 'tiny'];

describe('Avatar component', () => {
  const mapper = {
    appearance: valueHelper(appearances, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = render(<Avatar {...attr}>JD</Avatar>);
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Avatar component', () => {
  const mapper = {
    size: valueHelper(sizes, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = render(<Avatar {...attr}>JD</Avatar>);
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Avatar component', () => {
  it('render with regular size when no prop is provided', () => {
    const { getByTestId } = render(<Avatar />);
    expect(getByTestId('DesignSystem-Avatar')).toHaveClass('Avatar--regular');
  });

  it('render disabled avatar when no prop provided', () => {
    const { getByTestId } = render(<Avatar />);
    expect(getByTestId('DesignSystem-Avatar')).toHaveClass('Avatar--disabled');
  });

  it('renders avatar primary when appearance primary is passed', () => {
    const { getByTestId } = render(<Avatar appearance="primary" text="JD" />);
    expect(getByTestId('DesignSystem-Avatar')).toHaveClass('Avatar--primary');
  });

  it('renders tiny size when tiny primary is passed', () => {
    const { getByTestId } = render(<Avatar size="tiny" text="JD" />);
    expect(getByTestId('DesignSystem-Avatar')).toHaveClass('Avatar--tiny');
  });

  it('renders tooltip when tooltip is passed', () => {
    const { getByTestId } = render(<Avatar text="JD" tooltip="test avatar" />);
    expect(getByTestId('DesignSystem-Avatar').getAttribute('title')).toEqual('test avatar');
  });

  it('renders text when text prop is passed', () => {
    const { getByTestId } = render(<Avatar text="JD" />);
    expect(getByTestId('DesignSystem-Avatar').textContent).toMatch('JD');
  });

  it('render image alt text initial when wrong image src is passed', () => {
    const altText = 'test image';
    const { getByTestId } = render(<Avatar image={{ src: 'wrongurl.png', altText: altText }} />);
    expect(getByTestId('DesignSystem-Avatar').innerHTML).toBe(altText.charAt(0));
  });

  it('render with default icon when image src, alt text is not passed', () => {
    const { getByTestId } = render(<Avatar image={{ src: '', altText: '' }} />);
    expect(getByTestId('DesignSystem-Avatar--Icon')).toBeInTheDocument();
  });

  it('renders given icon when icon prop is passed', () => {
    const { getByTestId } = render(<Avatar icon="person" />);
    expect(getByTestId('DesignSystem-Avatar--Icon')).toBeInTheDocument();
  });

  it('renders fallback icon when there is no children', () => {
    const { getByTestId } = render(<Avatar />);
    expect(getByTestId('DesignSystem-Avatar--Icon')).toBeInTheDocument();
  });
});
