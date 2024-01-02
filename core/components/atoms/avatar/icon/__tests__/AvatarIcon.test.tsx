import * as React from 'react';
import { render } from '@testing-library/react';
import { Avatar } from '@/index';
import { AvatarProps as Props } from '@/index.type';
import { AccentAppearance, AvatarSize } from '@/common.type';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const icon = 'events';
const sizes: AvatarSize[] = ['regular', 'tiny'];
const appearances: AccentAppearance[] = [
  'secondary',
  'primary',
  'alert',
  'warning',
  'success',
  'accent1',
  'accent2',
  'accent3',
  'accent4',
];

describe('Avatar Icon component', () => {
  const mapper = {
    size: valueHelper(sizes, { required: true, iterate: true }),
    appearance: valueHelper(appearances, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = render(
        <Avatar {...attr}>
          <Avatar.Icon name={icon} />
        </Avatar>
      );
      expect(tree).toMatchSnapshot();
    });
  };
  testHelper(mapper, testFunc);
});

describe('Avatar Icon component with prop:size', () => {
  it('icon should have size:20 for regular size avatar', () => {
    const { getByTestId } = render(
      <Avatar>
        <Avatar.Icon name={icon} />
      </Avatar>
    );
    expect(getByTestId('DesignSystem-Icon')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Icon')).toHaveStyle('width: 20px;');
  });

  it('icon should have size:16 for tiny size avatar', () => {
    const { getByTestId } = render(
      <Avatar size="tiny">
        <Avatar.Icon name={icon} />
      </Avatar>
    );
    expect(getByTestId('DesignSystem-Icon')).toHaveStyle('width: 16px;');
  });
});

describe('Avatar Icon component with prop:appearance', () => {
  it('icon should have warning darker appearance for avatar with warning appearance', () => {
    const { getByTestId } = render(
      <Avatar appearance="warning">
        <Avatar.Icon name={icon} />
      </Avatar>
    );
    expect(getByTestId('DesignSystem-Icon')).toHaveClass('Icon--warningDarker');
  });
});
