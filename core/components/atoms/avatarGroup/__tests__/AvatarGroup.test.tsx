import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AvatarGroup, { AvatarGroupProps as Props, AvatarData } from '../AvatarGroup';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { Avatar, Tooltip, Icon } from '@/index';

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

const imgList = [
  {
    firstName: 'John',
    lastName: 'Doe',
    image: <Avatar.Image src="https://design.innovaccer.com/images/withoutType.png" />,
  },
  {
    firstName: 'Steven',
    lastName: 'Packton',
    image: <Avatar.Image src="https://design.innovaccer.com/images/withoutType.png" />,
  },
];

const iconList = [
  {
    firstName: 'John',
    lastName: 'Doe',
    icon: <Avatar.Icon name="places" />,
  },
  {
    firstName: 'Steven',
    lastName: 'Packton',
    icon: <Avatar.Icon name="smart_toy" />,
  },
];

const statusList = [
  {
    firstName: 'John',
    lastName: 'Doe',
    presence: 'active' as AvatarData['presence'],
  },
  {
    firstName: 'Steven',
    lastName: 'Packton',
    presence: 'active' as AvatarData['presence'],
    status: (
      <Tooltip position="top" tooltip="Verified">
        <Icon
          appearance="white"
          className="p-1 bg-success"
          name="done"
          size={10}
          data-test="DesignSystem-AvatarGroup--Status-1"
        />
      </Tooltip>
    ),
  },
  {
    firstName: 'Nancy',
    lastName: 'Wheeler',
    status: (
      <Tooltip position="top" tooltip="On Call">
        <Icon
          appearance="white"
          className="p-1 bg-primary"
          name="phone"
          size={10}
          data-test="DesignSystem-AvatarGroup--Status-2"
        />
      </Tooltip>
    ),
  },
  {
    firstName: 'Monica',
    lastName: 'Geller',
    presence: 'away' as AvatarData['presence'],
  },
  {
    firstName: 'Tom',
    lastName: 'Stark',
    image: <Avatar.Image src="https://design.innovaccer.com/images/avatar2.jpeg" />,
    status: (
      <Tooltip position="top" tooltip="Verified">
        <Icon
          appearance="white"
          className="p-1 bg-success"
          name="done"
          size={10}
          data-test="DesignSystem-AvatarGroup--Status-3"
        />
      </Tooltip>
    ),
  },
  {
    firstName: 'Rachel',
    lastName: 'Green',
  },
];

const size = ['tiny', 'regular'];
const FunctionValue = jest.fn();
const booleanValue = ['true', 'false'];

describe('AvatarGroup component snapshot', () => {
  const mapper = {
    list: valueHelper(iconList, { required: true }),
    size: valueHelper(size, { required: true, iterate: true }),
    withSearch: valueHelper(booleanValue, { required: true, iterate: true }),
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

  it('renders three avatars without +x avatar on list length three', () => {
    const newList = list.slice(0, 3);

    const { getAllByTestId, queryByTestId } = render(<AvatarGroup list={newList} />);
    expect(getAllByTestId('DesignSystem-AvatarGroup--Avatar')).toHaveLength(3);
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

    expect(getByTestId('DesignSystem-AvatarGroup--TriggerAvatarVariants')).toHaveClass('cursor-pointer');

    const extraAvatar = getByTestId('DesignSystem-AvatarGroup--TriggerAvatar');
    fireEvent.click(extraAvatar);
    const avatars = getAllByTestId('DesignSystem-AvatarGroup--Text');

    avatars.forEach((avatar, index) => {
      expect(avatar.textContent).toMatch(avatarsInitials[index]);
    });
  });

  it('renders popover list item with disabled state', () => {
    const list = [
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
        disabled: true,
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

    const { getByTestId, getAllByTestId } = render(
      <AvatarGroup list={list} max={2} popoverOptions={{ on: 'click' }} />
    );

    expect(getByTestId('DesignSystem-AvatarGroup--TriggerAvatarVariants')).toHaveClass('cursor-pointer');

    const extraAvatar = getByTestId('DesignSystem-AvatarGroup--TriggerAvatar');
    fireEvent.click(extraAvatar);
    const listItem = getAllByTestId('DesignSystem-AvatarGroup--Item');

    expect(listItem[0]).toHaveAttribute('disabled');
    expect(listItem[1]).not.toHaveAttribute('disabled');
  });

  it('renders avatars with status', () => {
    const { getAllByTestId, getByTestId } = render(<AvatarGroup list={statusList} max={5} />);
    const avatars = getAllByTestId('DesignSystem-AvatarGroup--Avatar');

    expect(avatars[1].querySelector('.Avatar-status')).toBeInTheDocument();
    expect(avatars[2].querySelector('.Avatar-status')).toBeInTheDocument();
    expect(avatars[4].querySelector('.Avatar-status')).toBeInTheDocument();

    expect(getByTestId('DesignSystem-AvatarGroup--Status-1')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-AvatarGroup--Status-2')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-AvatarGroup--Status-3')).toBeInTheDocument();
  });

  it('renders avatars with presence', () => {
    const { getAllByTestId } = render(<AvatarGroup list={statusList} max={5} />);
    const avatars = getAllByTestId('DesignSystem-AvatarGroup--Avatar');

    expect(avatars[0].querySelector('.Avatar-presence')).toBeInTheDocument();
    expect(avatars[1].querySelector('.Avatar-presence')).toBeInTheDocument();
    expect(avatars[3].querySelector('.Avatar-presence')).toBeInTheDocument();
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
    const popperRenderer = jest.fn(() => <div>Avatar</div>);

    const { getByTestId } = render(
      <AvatarGroup list={list} max={max} popoverOptions={{ popperRenderer, on: 'click', dark: false }} />
    );

    const extraAvatar = getByTestId('DesignSystem-AvatarGroup--TriggerAvatar');
    fireEvent.click(extraAvatar);
    expect(popperRenderer).toHaveBeenCalledTimes(1);
    expect(popperRenderer).toHaveBeenCalledWith(popperList);
  });
});

describe('AvatarGroup Component with prop: image', () => {
  it('renders avatars with image', () => {
    const defaultMax = 2;

    const { getAllByTestId } = render(<AvatarGroup list={imgList} />);
    expect(getAllByTestId('DesignSystem-Image')).toHaveLength(defaultMax);
  });
});

describe('AvatarGroup Component with prop: icon', () => {
  it('renders avatars with icon', () => {
    const defaultMax = 2;

    const { getAllByTestId } = render(<AvatarGroup list={iconList} />);
    expect(getAllByTestId('DesignSystem-Icon')).toHaveLength(defaultMax);
  });
});

describe('AvatarGroup Component with prop: tooltipSuffix', () => {
  it('renders disabled avatar with tooltip suffix', () => {
    const list = [
      {
        firstName: 'Nancy',
        lastName: 'Wheeler',
        disabled: true,
        tooltipSuffix: '(Deactivated)',
      },
      {
        firstName: 'John',
        lastName: 'Doe',
      },
    ];
    const { getAllByTestId, getByTestId } = render(<AvatarGroup list={list} max={1} />);
    const avatarEle = getAllByTestId('DesignSystem-AvatarWrapper')[0];
    fireEvent.mouseEnter(avatarEle);
    const tooltip = getByTestId('DesignSystem-Popover');
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveTextContent('Nancy Wheeler (Deactivated)');

    const avatarItem = getByTestId('DesignSystem-Avatar');
    expect(avatarItem).toHaveClass('Avatar--disabled');
  });
});

describe('AvatarGroup component with prop:withSearch', () => {
  it('render search input for withSearch:true', () => {
    const { getByTestId, getAllByTestId } = render(
      <AvatarGroup list={list} popoverOptions={{ withSearch: true, on: 'click' }} />
    );

    const trigger = getByTestId('DesignSystem-AvatarGroup--TriggerAvatar');

    fireEvent.click(trigger);

    expect(getByTestId('DesignSystem-AvatarGroup--Popover')).toBeInTheDocument();

    const searchInput = getByTestId('DesignSystem-AvatarGroup--Input');
    expect(getByTestId('DesignSystem-AvatarGroup--Input')).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: 'xyz' } });

    const emptyState = getByTestId('DesignSystem-AvatarGroup--EmptyState');
    expect(emptyState).toBeInTheDocument();

    const clearIcon = getByTestId('DesignSystem-Input--closeIcon');
    expect(clearIcon).toBeInTheDocument();
    fireEvent.click(clearIcon);

    const optionList = getAllByTestId('DesignSystem-AvatarGroup--Item');
    expect(optionList).toHaveLength(4);
  });

  it('render search input for searchComparator:true', () => {
    jest.resetAllMocks();
    const { getByTestId } = render(
      <AvatarGroup list={list} popoverOptions={{ withSearch: true, searchComparator: FunctionValue, on: 'click' }} />
    );

    const trigger = getByTestId('DesignSystem-AvatarGroup--TriggerAvatar');

    fireEvent.click(trigger);
    expect(getByTestId('DesignSystem-AvatarGroup--Popover')).toBeInTheDocument();

    const searchInput = getByTestId('DesignSystem-AvatarGroup--Input');
    expect(getByTestId('DesignSystem-AvatarGroup--Input')).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: 'xyz' } });

    expect(FunctionValue).toHaveBeenCalled();
  });

  it('check for search input when withSearch:false', () => {
    const { getByTestId, queryByTestId } = render(
      <AvatarGroup list={list} popoverOptions={{ withSearch: false, on: 'click' }} />
    );
    const trigger = getByTestId('DesignSystem-AvatarGroup--TriggerAvatar');
    fireEvent.click(trigger);

    expect(getByTestId('DesignSystem-AvatarGroup--Popover')).toBeInTheDocument();
    const searchInput = queryByTestId('DesignSystem-AvatarGroup--Input');
    expect(searchInput).toBeNull();
  });
});
