import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AvatarGroup, { AvatarGroupProps as Props } from '../AvatarGroup';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

export const list = [
  {
    firstName: 'John',
    lastName: 'Doe',
  },
  {
    firstName: 'Steven',
    lastName: 'Packton',
  },
  {
    firstName: 'Nancy',
    lastName: 'Wheeler',
  },
  {
    firstName: 'Monica',
    lastName: 'Geller',
  },
  {
    firstName: 'Arya',
    lastName: 'Stark',
  },
  {
    firstName: 'Rachel',
    lastName: 'Green',
  },
];

describe('AvatarGroup component', () => {
  const mapper = {
    list: valueHelper(list, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = render(<AvatarGroup {...attr} />);
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('AvatarGroup component', () => {
  it('renders all avatars without +x avatar', () => {
    const max = list.length;

    const { getAllByTestId, queryByTestId } = render(<AvatarGroup list={list} max={max} />);
    expect(getAllByTestId('DesignSystem-AvatarGroup--Avatar')).toHaveLength(list.length);
    expect(queryByTestId('DesignSystem-AvatarGroup--TriggerAvatar')).not.toBeInTheDocument();
  });

  it('renders avatars initials', () => {
    const max = 3;
    const avatarsInitials = ['JD', 'SP', 'NW'];
    const extraAvatar = list.length - max;

    const { getAllByTestId, getByTestId } = render(<AvatarGroup list={list} max={max} />);
    const avatars = getAllByTestId('DesignSystem-AvatarGroup--Avatar');

    avatars.forEach((avatar, index) => {
      expect(avatar.textContent).toMatch(avatarsInitials[index]);
    });

    expect(getByTestId('DesignSystem-AvatarGroup--TriggerAvatar').textContent).toMatch(`+${extraAvatar}`);
  });

  it('renders popover having the list of full names', () => {
    const max = 3;
    const avatarsInitials = ['Monica Geller', 'Arya Stark', 'Rachel Green'];

    const { getByTestId, getAllByTestId } = render(
      <AvatarGroup list={list} max={max} popoverOptions={{ on: 'click' }} />
    );

    const extraAvatar = getByTestId('DesignSystem-AvatarGroup--TriggerAvatar');
    fireEvent.click(extraAvatar);
    const avatars = getAllByTestId('DesignSystem-AvatarGroup--Text');

    avatars.forEach((avatar, index) => {
      expect(avatar.textContent).toMatch(avatarsInitials[index]);
    });
  });
});

describe('AvatarGroup Component with overwrite class', () => {
  it('overwrite Avatar class', () => {
    const { getByTestId } = render(<AvatarGroup className="AvatarGroupClass" list={list} />);
    expect(getByTestId('DesignSystem-AvatarGroup')).toHaveClass('AvatarGroupClass');
  });
});

describe('AvatarGroup Component with prop: max', () => {
  it('renders avatars with prop: max', () => {
    const max = 3;

    const { getAllByTestId } = render(<AvatarGroup list={list} max={max} />);
    expect(getAllByTestId('DesignSystem-AvatarGroup--Avatar')).toHaveLength(max);
    expect(getAllByTestId('DesignSystem-AvatarGroup--TriggerAvatar')).toHaveLength(1);
  });

  it('renders avatars with default max', () => {
    const defaultMax = 2;

    const { getAllByTestId } = render(<AvatarGroup list={list} />);
    expect(getAllByTestId('DesignSystem-AvatarGroup--Avatar')).toHaveLength(defaultMax);
  });
});

describe('AvatarGroup Component with prop: borderColor', () => {
  it('renders avatars with prop: borderColor', () => {
    const borderColor = 'var(--warning)';
    const border = `2px solid ${borderColor}`;

    const { getByTestId } = render(<AvatarGroup list={list} borderColor={borderColor} />);
    expect(getByTestId('DesignSystem-AvatarGroup--TriggerAvatar')).toHaveStyle(`border: ${border};`);
  });

  it('renders avatars with default borderColor', () => {
    const defaultBorderColor = 2;
    const border = `2px solid ${defaultBorderColor}`;

    const { getByTestId } = render(<AvatarGroup list={list} />);
    expect(getByTestId('DesignSystem-AvatarGroup--TriggerAvatar')).toHaveStyle(`border: ${border};`);
  });
});

describe('AvatarGroup Component with prop: popoverOptions', () => {
  it('renders avatars with prop: popperRenderer', () => {
    const max = 3;
    const popperList = list.slice(max, list.length);
    const popperRenderer = jest.fn();

    const { getByTestId } = render(
      <AvatarGroup list={list} max={max} popoverOptions={{ popperRenderer, on: 'click', dark: false }} />
    );

    const extraAvatar = getByTestId('DesignSystem-AvatarGroup--TriggerAvatar');
    fireEvent.click(extraAvatar);
    expect(popperRenderer).toHaveBeenCalledTimes(1);
    expect(popperRenderer).toHaveBeenCalledWith(popperList);
  });
});
