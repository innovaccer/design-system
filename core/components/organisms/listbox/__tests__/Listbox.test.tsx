import * as React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Listbox, Text } from '@/index';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { ListboxItemProps as Props, ListboxProps as ListboxProps } from '@/index.type';
import { TagType } from '../Listbox';
import { ItemTagType } from '../listboxItem';

const BooleanValue = [true, false];
const listSize = ['standard', 'compressed', 'tight'];
const listType = ['option', 'description', 'resource'];
const nestedRowElement = <div data-test="DesignSystem-Nested-Row">nested row</div>;
const children = <div>list item element</div>;
const listItemId = 'list-item-id';
const tagList: TagType[] = ['ol', 'ul', 'div', 'nav'];
const listItemTagList: ItemTagType[] = ['li', 'div'];
const onClickHandler = jest.fn();

describe('Listbox component snapshot', () => {
  const mapper: Record<string, any> = {
    draggable: valueHelper(BooleanValue, { required: true, iterate: true }),
    size: valueHelper(listSize, { required: true, iterate: true }),
    type: valueHelper(listType, { required: true, iterate: true }),
    tagName: valueHelper(tagList, { required: true, iterate: true }),
    showDivider: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as ListboxProps;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Listbox {...attr}>
          <Listbox.Item id={listItemId}>{children}</Listbox.Item>
        </Listbox>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Listbox item component snapshot', () => {
  const mapper: Record<string, any> = {
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
    tagName: valueHelper(listItemTagList, { required: true, iterate: true }),
    onClick: valueHelper(onClickHandler, { required: true, iterate: false }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Listbox>
          <Listbox.Item {...attr}>{children}</Listbox.Item>
        </Listbox>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Listbox component snapshot for states', () => {
  const mapper: Record<string, any> = {
    selected: valueHelper(BooleanValue, { required: true, iterate: true }),
    activated: valueHelper(BooleanValue, { required: true, iterate: true }),
    type: valueHelper(listType, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Listbox>
          <Listbox.Item {...attr} id={listItemId}>
            {children}
          </Listbox.Item>
        </Listbox>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Listbox Item component test for list size: standard', () => {
  it('check for padding classes for size:standard', () => {
    const { getByTestId } = render(
      <Listbox size="standard">
        <Listbox.Item id={listItemId}>{children}</Listbox.Item>
      </Listbox>
    );
    const listItem = getByTestId('DesignSystem-Listbox-ItemWrapper');
    expect(listItem).toHaveClass('Listbox-item--standard');
  });
});

describe('Listbox Item component test for list size: tight', () => {
  it('check for padding classes for size:tight', () => {
    const { getByTestId } = render(
      <Listbox size="tight">
        <Listbox.Item id={listItemId}>{children}</Listbox.Item>
      </Listbox>
    );
    const listItem = getByTestId('DesignSystem-Listbox-ItemWrapper');
    expect(listItem).toHaveClass('Listbox-item--tight');
  });
});

describe('Listbox Item component test for list size: compressed', () => {
  it('check for padding classes for size:compressed', () => {
    const { getByTestId } = render(
      <Listbox size="compressed">
        <Listbox.Item id={listItemId}>{children}</Listbox.Item>
      </Listbox>
    );
    const listItem = getByTestId('DesignSystem-Listbox-ItemWrapper');
    expect(listItem).toHaveClass('Listbox-item--compressed');
  });
});

describe('Listbox Item component test for list type: option', () => {
  it('check for classes for type:option', () => {
    const { getByTestId } = render(
      <Listbox type="option">
        <Listbox.Item id={listItemId} selected={true}>
          {children}
        </Listbox.Item>
      </Listbox>
    );
    const listItem = getByTestId('DesignSystem-Listbox-ItemWrapper');
    expect(listItem).toHaveClass('Listbox-item--selected');
    expect(listItem).toHaveClass('Listbox-item');
  });
});

describe('Listbox Item component test for list type: resource', () => {
  it('check for classes for type:resource', () => {
    const { getByTestId } = render(
      <Listbox type="resource">
        <Listbox.Item id={listItemId} activated={true}>
          {children}
        </Listbox.Item>
      </Listbox>
    );
    const listItem = getByTestId('DesignSystem-Listbox-ItemWrapper');
    expect(listItem).toHaveClass('Listbox-item--activated');
    expect(listItem).toHaveClass('Listbox-item');
  });
});

describe('Listbox Item component test for list type: description', () => {
  it('check for classes for type:description', () => {
    const { getByTestId } = render(
      <Listbox type="description">
        <Listbox.Item id={listItemId}>{children}</Listbox.Item>
      </Listbox>
    );
    const listItem = getByTestId('DesignSystem-Listbox-ItemWrapper');
    expect(listItem).toHaveClass('Listbox-item--description');
  });
});

describe('Listbox Item component test for disabled classes', () => {
  const { getByTestId } = render(
    <Listbox.Item id={listItemId} disabled={true}>
      {children}
    </Listbox.Item>
  );
  const listItem = getByTestId('DesignSystem-Listbox-ItemWrapper');
  expect(listItem).toHaveClass('Listbox-item--disabled');
});

describe('Listbox Item component test for custom classes', () => {
  it('check for custom class', () => {
    const { getByTestId } = render(
      <Listbox.Item id={listItemId} className="custom-class">
        {children}
      </Listbox.Item>
    );
    const listItem = getByTestId('DesignSystem-Listbox-ItemWrapper');
    expect(listItem).toHaveClass('custom-class');
  });

  it('check to override default padding classes', () => {
    const { getByTestId } = render(
      <Listbox.Item id={listItemId} className="p-0">
        {children}
      </Listbox.Item>
    );
    const listItem = getByTestId('DesignSystem-Listbox-ItemWrapper');
    expect(listItem).toHaveClass('p-0');
  });
});

describe('Listbox Item component test for divider', () => {
  it('check for divider present below list item', () => {
    const { getAllByTestId } = render(
      <Listbox>
        <Listbox.Item id={listItemId}>{children}</Listbox.Item>
        <Listbox.Item id={listItemId}>{children}</Listbox.Item>
      </Listbox>
    );
    const divider = getAllByTestId('DesignSystem-Divider');
    expect(divider).toHaveLength(2);
  });

  it('check for divider not present below list item', () => {
    render(
      <Listbox showDivider={false}>
        <Listbox.Item id={listItemId}>{children}</Listbox.Item>
      </Listbox>
    );
    const divider = screen.queryByText('DesignSystem-Divider');
    expect(divider).not.toBeInTheDocument();
  });
});

describe('Listbox component test for custom class', () => {
  it('check for custom class in listbox', () => {
    const { getByTestId } = render(
      <Listbox className="custom-class">
        <Listbox.Item id={listItemId}>{children}</Listbox.Item>
      </Listbox>
    );
    expect(getByTestId('DesignSystem-Listbox')).toHaveClass('custom-class');
  });

  it('check for custom class in listbox item component', () => {
    const { getByTestId } = render(
      <Listbox>
        <Listbox.Item id={listItemId} className="custom-class">
          {children}
        </Listbox.Item>
      </Listbox>
    );
    expect(getByTestId('DesignSystem-Listbox-ItemWrapper')).toHaveClass('custom-class');
  });
});

describe('Listbox component test for drag icon', () => {
  const { getByTestId } = render(
    <Listbox draggable={true}>
      <Listbox.Item id={listItemId}>{children}</Listbox.Item>
    </Listbox>
  );

  expect(getByTestId('DesignSystem-Listbox-DragIcon')).toBeInTheDocument();
  expect(getByTestId('DesignSystem-Listbox-DragIcon')).toHaveClass('Listbox-item--drag-icon');
});

describe('Listbox component test for TagName', () => {
  tagList.forEach((tag) => {
    it(`check for listbox component with ${tag} tagName`, () => {
      const { getByTestId } = render(<Listbox tagName={tag}>{children}</Listbox>);
      expect(getByTestId('DesignSystem-Listbox').tagName).toMatch(tag.toUpperCase());
    });
  });
});

describe('Listbox Item component test for TagName', () => {
  listItemTagList.forEach((tag) => {
    it(`check for listbox component with ${tag} tagName`, () => {
      const { getByTestId } = render(
        <Listbox.Item id={listItemId} tagName={tag}>
          {children}
        </Listbox.Item>
      );
      expect(getByTestId('DesignSystem-Listbox-Item').tagName).toMatch(tag.toUpperCase());
    });
  });
});

describe('Listbox component test for reorder list', () => {
  const dataList = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  it('test for reorder list keydown event', async () => {
    const { getAllByTestId } = render(
      <Listbox draggable={true}>
        {dataList.map((record, key) => {
          return (
            <Listbox.Item id={record} key={key}>
              <Text>{record}</Text>
            </Listbox.Item>
          );
        })}
      </Listbox>
    );

    expect(getAllByTestId('DesignSystem-Text')[1]).toHaveTextContent('Item 2');
    const sourceElement = getAllByTestId('DesignSystem-Listbox-Item')[0];
    fireEvent.keyDown(sourceElement, { key: 'Tab' });
    fireEvent.keyDown(sourceElement, { which: 32 });
    fireEvent.keyDown(sourceElement, { key: 'ArrowDown' });
    fireEvent.keyDown(getAllByTestId('DesignSystem-Listbox-Item')[1], { which: 32 });

    await waitFor(() => {
      expect(getAllByTestId('DesignSystem-Text')[1]).toHaveTextContent('Item 2');
    });
  });

  it('test for reorder list mouse move event', async () => {
    const { getAllByTestId } = render(
      <Listbox draggable={true}>
        {dataList.map((record, key) => {
          return (
            <Listbox.Item id={record} key={key}>
              <Text>{record}</Text>
            </Listbox.Item>
          );
        })}
      </Listbox>
    );

    expect(getAllByTestId('DesignSystem-Text')[1]).toHaveTextContent('Item 2');

    const sourceIcon = getAllByTestId('DesignSystem-Listbox-DragIcon')[0];

    const mouse = [
      { clientX: 10, clientY: 20 },
      { clientX: 15, clientY: 30 },
    ];

    fireEvent.mouseDown(sourceIcon, mouse[0]);
    fireEvent.mouseMove(sourceIcon, mouse[1]);
    fireEvent.mouseUp(sourceIcon);
    await waitFor(() => {
      expect(getAllByTestId('DesignSystem-Text')[1]).toHaveTextContent('Item 3');
    });
  });
});

describe('Listbox component test for keyboard events', () => {
  const dataList = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

  it('test for keyboard arrow down event', () => {
    const { getAllByTestId } = render(
      <Listbox>
        {dataList.map((record, key) => {
          return (
            <Listbox.Item id={record} key={key}>
              <Text>{record}</Text>
            </Listbox.Item>
          );
        })}
      </Listbox>
    );

    const sourceElement = getAllByTestId('DesignSystem-Listbox-ItemWrapper')[0];
    const targetElement = getAllByTestId('DesignSystem-Listbox-ItemWrapper')[1];
    fireEvent.click(sourceElement);
    fireEvent.keyDown(sourceElement, { key: 'ArrowDown' });

    expect(targetElement).toHaveFocus();
  });

  it('test for keyboard arrow up event', () => {
    const { getAllByTestId } = render(
      <Listbox>
        {dataList.map((record, key) => {
          return (
            <Listbox.Item id={record} key={key}>
              <Text>{record}</Text>
            </Listbox.Item>
          );
        })}
      </Listbox>
    );

    const sourceElement = getAllByTestId('DesignSystem-Listbox-ItemWrapper')[1];
    const targetElement = getAllByTestId('DesignSystem-Listbox-ItemWrapper')[0];
    fireEvent.click(sourceElement);
    fireEvent.keyDown(sourceElement, { key: 'ArrowUp' });

    expect(targetElement).toHaveFocus();
  });

  it('test for keyboard arrow down event with disabled item', () => {
    const { getAllByTestId } = render(
      <Listbox>
        {dataList.map((record, key) => {
          return (
            <Listbox.Item id={record} key={key} disabled={key === 2}>
              <Text>{record}</Text>
            </Listbox.Item>
          );
        })}
      </Listbox>
    );

    const sourceElement = getAllByTestId('DesignSystem-Listbox-ItemWrapper')[1];
    const targetElement = getAllByTestId('DesignSystem-Listbox-ItemWrapper')[3];
    fireEvent.click(sourceElement);
    fireEvent.keyDown(sourceElement, { key: 'ArrowDown' });

    expect(targetElement).toHaveFocus();
  });

  it('test for keyboard arrow up event with disabled item', () => {
    const { getAllByTestId } = render(
      <Listbox>
        {dataList.map((record, key) => {
          return (
            <Listbox.Item id={record} key={key} disabled={key === 2}>
              <Text>{record}</Text>
            </Listbox.Item>
          );
        })}
      </Listbox>
    );

    const sourceElement = getAllByTestId('DesignSystem-Listbox-ItemWrapper')[3];
    const targetElement = getAllByTestId('DesignSystem-Listbox-ItemWrapper')[1];
    fireEvent.click(sourceElement);
    fireEvent.keyDown(sourceElement, { key: 'ArrowUp' });

    expect(targetElement).toHaveFocus();
  });
});

describe('Listbox component test for Nested Row', () => {
  it('check for nested list when expanded is true', () => {
    const { getByTestId } = render(
      <Listbox.Item nestedBody={nestedRowElement} expanded={true}>
        {children}
      </Listbox.Item>
    );
    expect(getByTestId('DesignSystem-Nested-Row')).toBeInTheDocument();
  });

  it('check for nested list when expanded is false', () => {
    render(
      <Listbox.Item nestedBody={nestedRowElement} expanded={false}>
        {children}
      </Listbox.Item>
    );
    const nestedBody = screen.queryByText('DesignSystem-Nested-Row');
    expect(nestedBody).not.toBeInTheDocument();
  });
});
