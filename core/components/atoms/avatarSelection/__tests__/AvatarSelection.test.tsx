import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AvatarSelection, { AvatarSelectionProps as Props, AvatarData } from '../AvatarSelection';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { Avatar, Icon, Tooltip } from '@/index';

const size = ['tiny', 'regular'];
const booleanValue = ['true', 'false'];
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

const FunctionValue = jest.fn();
const children = <div data-test="DesignSystem-Custom-Children">test custom children</div>;

const selectedList = [
  {
    firstName: 'John',
    lastName: 'Doe',
    selected: true,
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
    selected: true,
  },
];

const disabledList = [
  {
    firstName: 'John',
    lastName: 'Doe',
    disabled: true,
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
    disabled: true,
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
          data-test="DesignSystem-AvatarSelection--Status-1"
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
          data-test="DesignSystem-AvatarSelection--Status-2"
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
          data-test="DesignSystem-AvatarSelection--Status-3"
        />
      </Tooltip>
    ),
  },
  {
    firstName: 'Rachel',
    lastName: 'Green',
  },
];

describe('AvatarSelection component snapshot', () => {
  const mapper = {
    list: valueHelper(list, { required: true }),
    size: valueHelper(size, { required: true, iterate: true }),
    withSearch: valueHelper(booleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = render(<AvatarSelection {...attr} />);
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('AvatarSelection component', () => {
  it('renders all avatars without +x avatar', () => {
    const max = list.length;

    const { getAllByTestId, queryByTestId } = render(<AvatarSelection list={list} max={max} />);
    expect(getAllByTestId('DesignSystem-AvatarSelection--Avatar')).toHaveLength(list.length);
    expect(queryByTestId('DesignSystem-AvatarSelection--TriggerAvatar')).not.toBeInTheDocument();
  });

  it('renders three avatars without +x avatar on list length three', () => {
    const newList = list.slice(0, 3);

    const { getAllByTestId, queryByTestId } = render(<AvatarSelection list={newList} />);
    expect(getAllByTestId('DesignSystem-AvatarSelection--Avatar')).toHaveLength(3);
    expect(queryByTestId('DesignSystem-AvatarSelection--TriggerAvatar')).not.toBeInTheDocument();
  });

  it('renders avatars initials', () => {
    const max = 3;
    const avatarsInitials = ['JD', 'SP', 'NW'];
    const extraAvatar = list.length - max;

    const { getAllByTestId, getByTestId } = render(<AvatarSelection list={list} max={max} />);
    const avatars = getAllByTestId('DesignSystem-AvatarSelection--Avatar');

    avatars.forEach((avatar, index) => {
      expect(avatar.textContent).toMatch(avatarsInitials[index]);
    });

    expect(getByTestId('DesignSystem-AvatarSelection--TriggerAvatar').textContent).toMatch(`+${extraAvatar}`);
  });
});

describe('AvatarSelection component with overwrite class', () => {
  it('overwrite Avatar class', () => {
    const { getByTestId } = render(<AvatarSelection className="AvatarSelectionClass" list={list} />);
    expect(getByTestId('DesignSystem-AvatarSelection')).toHaveClass('AvatarSelectionClass');
  });
});

describe('AvatarSelection component with prop: borderColor', () => {
  it('renders avatars with prop: borderColor', () => {
    const borderColor = 'var(--warning)';
    const border = `2px solid ${borderColor}`;

    const { getByTestId } = render(<AvatarSelection list={list} borderColor={borderColor} />);
    expect(getByTestId('DesignSystem-AvatarSelection--TriggerAvatar')).toHaveStyle(`border: ${border};`);
  });

  it('renders avatars with default borderColor', () => {
    const defaultBorderColor = 2;
    const border = `2px solid ${defaultBorderColor}`;

    const { getByTestId } = render(<AvatarSelection list={list} />);
    expect(getByTestId('DesignSystem-AvatarSelection--TriggerAvatar')).toHaveStyle(`border: ${border};`);
  });
});

describe('AvatarSelection component with prop: max', () => {
  it('renders avatars with prop: max', () => {
    const max = 3;

    const { getAllByTestId } = render(<AvatarSelection list={list} max={max} />);
    expect(getAllByTestId('DesignSystem-AvatarSelection--Avatar')).toHaveLength(max);
    expect(getAllByTestId('DesignSystem-AvatarSelection--TriggerAvatar')).toHaveLength(1);
  });

  it('renders avatars with default max', () => {
    const defaultMax = 5;

    const { getAllByTestId } = render(<AvatarSelection list={list} />);
    expect(getAllByTestId('DesignSystem-AvatarSelection--Avatar')).toHaveLength(defaultMax);
  });
});

describe('AvatarSelection component with prop:withSearch', () => {
  it('render search input for withSearch:true', () => {
    const { getByTestId, getAllByTestId } = render(<AvatarSelection list={list} withSearch={true} />);

    const trigger = getByTestId('DesignSystem-AvatarSelection--TriggerAvatar');

    fireEvent.click(trigger);

    expect(getByTestId('DesignSystem-AvatarSelection--Popover')).toBeInTheDocument();

    const searchInput = getByTestId('DesignSystem-AvatarSelection--Input');
    expect(getByTestId('DesignSystem-AvatarSelection--Input')).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: 'xyz' } });

    const emptyState = getByTestId('DesignSystem-AvatarSelection--EmptyState');
    expect(emptyState).toBeInTheDocument();

    const clearIcon = getByTestId('DesignSystem-Input--closeIcon');
    expect(clearIcon).toBeInTheDocument();
    fireEvent.click(clearIcon);

    const optionList = getAllByTestId('DesignSystem-AvatarSelection--Option');
    expect(optionList).toHaveLength(1);
  });

  it('render search input for searchComparator:true', () => {
    jest.resetAllMocks();
    const { getByTestId } = render(<AvatarSelection list={list} withSearch={true} searchComparator={FunctionValue} />);

    const trigger = getByTestId('DesignSystem-AvatarSelection--TriggerAvatar');

    fireEvent.click(trigger);
    expect(getByTestId('DesignSystem-AvatarSelection--Popover')).toBeInTheDocument();

    const searchInput = getByTestId('DesignSystem-AvatarSelection--Input');
    expect(getByTestId('DesignSystem-AvatarSelection--Input')).toBeInTheDocument();

    fireEvent.change(searchInput, { target: { value: 'xyz' } });

    expect(FunctionValue).toHaveBeenCalled();
  });

  it('render search input for withSearch:false', () => {
    const { getByTestId, queryByTestId } = render(<AvatarSelection list={list} withSearch={false} />);
    const trigger = getByTestId('DesignSystem-AvatarSelection--TriggerAvatar');
    fireEvent.click(trigger);

    const searchInput = queryByTestId('DesignSystem-AvatarSelection--Input');
    expect(getByTestId('DesignSystem-AvatarSelection--Popover')).toBeInTheDocument();
    expect(searchInput).toBeNull();
  });

  it('check for keyboard handler with prop:withSearch', () => {
    const { getByTestId, queryByTestId, getAllByTestId } = render(<AvatarSelection list={list} withSearch={true} />);
    const trigger = getByTestId('DesignSystem-AvatarSelection--TriggerAvatar');
    fireEvent.click(trigger);
    expect(getByTestId('DesignSystem-AvatarSelection--Popover')).toBeInTheDocument();

    const searchInput = queryByTestId('DesignSystem-AvatarSelection--Input');
    expect(searchInput).toBeInTheDocument();

    if (searchInput) {
      fireEvent.keyDown(searchInput, { key: 'ArrowUp' });
    }
    const optionList = getAllByTestId('DesignSystem-Listbox-ItemWrapper');
    expect(optionList[0]).toHaveFocus();

    fireEvent.keyDown(optionList[0], { key: 'ArrowUp' });
    expect(searchInput).toHaveFocus();
  });
});

describe('AvatarSelection component with selected list', () => {
  it('check if avatar count trigger has selection class', () => {
    const { getByTestId } = render(<AvatarSelection list={selectedList} />);
    expect(getByTestId('DesignSystem-AvatarSelection--TriggerAvatar')).toHaveClass('SelectionAvatarCount--selected');
  });

  it('check if avatar count trigger does not have selection class', () => {
    const { getByTestId } = render(<AvatarSelection list={list} />);
    expect(getByTestId('DesignSystem-AvatarSelection--TriggerAvatar')).not.toHaveClass(
      'SelectionAvatarCount--selected'
    );
  });

  it('check if avatar has selection class', () => {
    const { getAllByTestId } = render(<AvatarSelection list={selectedList} />);
    expect(getAllByTestId('DesignSystem-AvatarSelection--Avatar')[0]).toHaveClass(
      'SelectionAvatarGroup-item--selected'
    );
  });
});

describe('AvatarSelection component callback function', () => {
  it('check if option is selected onClick event', () => {
    const { getByTestId, getAllByTestId } = render(
      <AvatarSelection list={list} withSearch={true} onSelect={FunctionValue} />
    );
    const trigger = getByTestId('DesignSystem-AvatarSelection--TriggerAvatar');
    fireEvent.click(trigger);
    expect(getByTestId('DesignSystem-AvatarSelection--Popover')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-AvatarSelection--TriggerAvatar')).not.toHaveClass(
      'SelectionAvatarCount--selected'
    );

    const optionList = getAllByTestId('DesignSystem-AvatarSelection--Option');
    expect(optionList).toHaveLength(1);
    fireEvent.click(optionList[0]);
    expect(getByTestId('DesignSystem-AvatarSelection--TriggerAvatar')).toHaveClass('SelectionAvatarCount--selected');

    expect(FunctionValue).toHaveBeenCalled();
    expect(FunctionValue).toHaveBeenCalledWith([
      {
        firstName: 'Rachel',
        lastName: 'Green',
      },
    ]);
  });

  it('check if option is deselected onClick event', () => {
    jest.resetAllMocks();
    const { getByTestId, getAllByTestId } = render(
      <AvatarSelection list={selectedList} withSearch={true} onSelect={FunctionValue} />
    );
    const trigger = getByTestId('DesignSystem-AvatarSelection--TriggerAvatar');
    fireEvent.click(trigger);
    expect(getByTestId('DesignSystem-AvatarSelection--Popover')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-AvatarSelection--TriggerAvatar')).toHaveClass('SelectionAvatarCount--selected');

    const optionList = getAllByTestId('DesignSystem-AvatarSelection--Option');
    expect(optionList).toHaveLength(1);
    fireEvent.click(optionList[0]);
    expect(getByTestId('DesignSystem-AvatarSelection--TriggerAvatar')).not.toHaveClass(
      'SelectionAvatarCount--selected'
    );

    expect(FunctionValue).toHaveBeenCalled();
    expect(FunctionValue).toHaveBeenCalledWith([
      {
        firstName: 'John',
        lastName: 'Doe',
        selected: true,
      },
    ]);
  });

  it('check for avatar deselection', () => {
    const { getAllByTestId } = render(
      <AvatarSelection list={selectedList} withSearch={true} onSelect={FunctionValue} />
    );
    const avatarList = getAllByTestId('DesignSystem-AvatarSelection--Avatar');
    fireEvent.click(avatarList[0]);
    expect(FunctionValue).toHaveBeenCalled();
    expect(FunctionValue).toHaveBeenCalledWith([
      {
        firstName: 'Rachel',
        lastName: 'Green',
        selected: true,
      },
    ]);
  });
});

describe('AvatarSelection component children', () => {
  const { getByTestId } = render(<AvatarSelection list={list}>{children}</AvatarSelection>);

  const trigger = getByTestId('DesignSystem-AvatarSelection--TriggerAvatar');
  fireEvent.click(trigger);
  expect(getByTestId('DesignSystem-Custom-Children')).toBeInTheDocument();
});

describe('AvatarSelection component with custom avatar renderer', () => {
  const { getAllByTestId } = render(
    <AvatarSelection
      list={list}
      avatarRenderer={() => <div data-test="AvatarSelection-Custom-Renderer">Avatar Selection Custom Renderer</div>}
    />
  );

  const customAvatarList = getAllByTestId('AvatarSelection-Custom-Renderer');
  expect(customAvatarList).toHaveLength(5);
});

describe('AvatarSelection component with keyboard interactions', () => {
  it('check for keyboard interaction from avatar count trigger', () => {
    jest.resetAllMocks();
    const { getByTestId, queryByTestId } = render(
      <AvatarSelection list={selectedList} withSearch={true} onSelect={FunctionValue} />
    );
    const trigger = getByTestId('DesignSystem-AvatarSelection--TriggerAvatar');
    fireEvent.keyDown(trigger, { key: 'ArrowUp' });
    expect(getByTestId('DesignSystem-AvatarSelection--Popover')).toBeInTheDocument();

    const searchInput = queryByTestId('DesignSystem-AvatarSelection--Input');
    expect(searchInput).toBeInTheDocument();
  });

  it('check for keyboard interaction from avatar element', () => {
    jest.resetAllMocks();
    const { getAllByTestId } = render(
      <AvatarSelection list={selectedList} withSearch={true} onSelect={FunctionValue} />
    );
    const avatarElement = getAllByTestId('DesignSystem-AvatarSelection--Avatar')[0];
    fireEvent.keyDown(avatarElement, { key: 'Enter' });
    expect(FunctionValue).toHaveBeenCalled();
    expect(FunctionValue).toHaveBeenCalledWith([
      {
        firstName: 'Rachel',
        lastName: 'Green',
        selected: true,
      },
    ]);
  });

  it('check for keyboard interaction from disabled avatar element', () => {
    jest.resetAllMocks();
    const { getAllByTestId } = render(
      <AvatarSelection list={disabledList} withSearch={true} onSelect={FunctionValue} />
    );
    const avatarElement = getAllByTestId('DesignSystem-AvatarSelection--Avatar')[0];
    fireEvent.keyDown(avatarElement, { key: 'Enter' });
    expect(FunctionValue).not.toHaveBeenCalled();
  });
});

describe('AvatarSelection component test with disabled states', () => {
  it('check for avatar callbacks for disabled avatar', () => {
    jest.resetAllMocks();
    const { getAllByTestId } = render(
      <AvatarSelection list={disabledList} withSearch={true} onSelect={FunctionValue} />
    );
    const avatarList = getAllByTestId('DesignSystem-AvatarSelection--Avatar');
    fireEvent.click(avatarList[0]);
    expect(FunctionValue).not.toHaveBeenCalled();
  });

  it('check if disabled option is selected onClick event', () => {
    jest.resetAllMocks();
    const { getByTestId, getAllByTestId } = render(
      <AvatarSelection list={disabledList} withSearch={true} onSelect={FunctionValue} />
    );
    const trigger = getByTestId('DesignSystem-AvatarSelection--TriggerAvatar');
    fireEvent.click(trigger);
    expect(getByTestId('DesignSystem-AvatarSelection--Popover')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-AvatarSelection--TriggerAvatar')).not.toHaveClass(
      'SelectionAvatarCount--selected'
    );

    const optionList = getAllByTestId('DesignSystem-AvatarSelection--Option');
    expect(optionList).toHaveLength(1);
    fireEvent.click(optionList[0]);
    expect(getByTestId('DesignSystem-AvatarSelection--TriggerAvatar')).not.toHaveClass(
      'SelectionAvatarCount--selected'
    );

    expect(FunctionValue).not.toHaveBeenCalled();
  });
});

describe('AvatarSelection component with status and presence', () => {
  it('renders avatars with status', () => {
    const { getAllByTestId, getByTestId } = render(<AvatarSelection list={statusList} max={5} />);
    const avatars = getAllByTestId('DesignSystem-AvatarSelection--Avatar');

    expect(avatars[1].querySelector('.Avatar-status')).toBeInTheDocument();
    expect(avatars[2].querySelector('.Avatar-status')).toBeInTheDocument();
    expect(avatars[4].querySelector('.Avatar-status')).toBeInTheDocument();

    expect(getByTestId('DesignSystem-AvatarSelection--Status-1')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-AvatarSelection--Status-2')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-AvatarSelection--Status-3')).toBeInTheDocument();
  });

  it('renders avatars with presence', () => {
    const { getAllByTestId } = render(<AvatarSelection list={statusList} max={5} />);
    const avatars = getAllByTestId('DesignSystem-AvatarSelection--Avatar');

    expect(avatars[0].querySelector('.Avatar-presence')).toBeInTheDocument();
    expect(avatars[1].querySelector('.Avatar-presence')).toBeInTheDocument();
    expect(avatars[3].querySelector('.Avatar-presence')).toBeInTheDocument();
  });
});
