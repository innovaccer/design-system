import * as React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Listbox, ListboxItem, Text } from '@/index';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { ListboxItemProps as Props, ListboxProps as ListboxProps } from '@/index.type';
import { TagType } from '../Listbox';
import { ItemTagType } from '../ListboxItem';

const BooleanValue = [true, false];
const listSize = ['standard', 'compressed', 'tight'];
const listType = ['option', 'description', 'resource'];
const nestedRowElement = <div>nested row</div>;
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
    tag: valueHelper(tagList, { required: true, iterate: true }),
    showDivider: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as ListboxProps;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Listbox {...attr}>
          <ListboxItem id={listItemId}>{children}</ListboxItem>
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
    tag: valueHelper(listItemTagList, { required: true, iterate: true }),
    onClick: valueHelper(onClickHandler, { required: true, iterate: false }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Listbox>
          <ListboxItem {...attr}>{children}</ListboxItem>
        </Listbox>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Listbox Item component snapshot for nested row', () => {
  const mapper: Record<string, any> = {
    expanded: valueHelper(BooleanValue, { required: true, iterate: true }),
    nestedRow: valueHelper(nestedRowElement, { required: true, iterate: false }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Listbox>
          <ListboxItem {...attr} id={listItemId}>
            {children}
          </ListboxItem>
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
          <ListboxItem {...attr} id={listItemId}>
            {children}
          </ListboxItem>
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
        <ListboxItem id={listItemId}>{children}</ListboxItem>
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
        <ListboxItem id={listItemId}>{children}</ListboxItem>
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
        <ListboxItem id={listItemId}>{children}</ListboxItem>
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
        <ListboxItem id={listItemId} selected={true}>
          {children}
        </ListboxItem>
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
        <ListboxItem id={listItemId} activated={true}>
          {children}
        </ListboxItem>
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
        <ListboxItem id={listItemId}>{children}</ListboxItem>
      </Listbox>
    );
    const listItem = getByTestId('DesignSystem-Listbox-ItemWrapper');
    expect(listItem).toHaveClass('Listbox-item--description');
  });
});

describe('Listbox Item component test for disabled classes', () => {
  const { getByTestId } = render(
    <ListboxItem id={listItemId} disabled={true}>
      {children}
    </ListboxItem>
  );
  const listItem = getByTestId('DesignSystem-Listbox-ItemWrapper');
  expect(listItem).toHaveClass('Listbox-item--disabled');
});

describe('Listbox Item component test for custom classes', () => {
  it('check for custom class', () => {
    const { getByTestId } = render(
      <ListboxItem id={listItemId} className="custom-class">
        {children}
      </ListboxItem>
    );
    const listItem = getByTestId('DesignSystem-Listbox-ItemWrapper');
    expect(listItem).toHaveClass('custom-class');
  });

  it('check to override default padding classes', () => {
    const { getByTestId } = render(
      <ListboxItem id={listItemId} className="p-0">
        {children}
      </ListboxItem>
    );
    const listItem = getByTestId('DesignSystem-Listbox-ItemWrapper');
    expect(listItem).toHaveClass('p-0');
  });
});

describe('Listbox Item component test for divider', () => {
  it('check for divider present below list if only one list item is present', () => {
    render(
      <Listbox>
        <ListboxItem id={listItemId}>{children}</ListboxItem>
      </Listbox>
    );
    const divider = screen.queryByText('DesignSystem-Divider');
    expect(divider).not.toBeInTheDocument();
  });

  it('check for divider present below list item', () => {
    const { getByTestId } = render(
      <Listbox>
        <ListboxItem id={listItemId}>{children}</ListboxItem>
        <ListboxItem id={listItemId}>{children}</ListboxItem>
      </Listbox>
    );
    const divider = getByTestId('DesignSystem-Divider');
    expect(divider).toBeInTheDocument();
  });

  it('check for divider not present below list item', () => {
    render(
      <Listbox showDivider={false}>
        <ListboxItem id={listItemId}>{children}</ListboxItem>
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
        <ListboxItem id={listItemId}>{children}</ListboxItem>
      </Listbox>
    );
    expect(getByTestId('DesignSystem-Listbox')).toHaveClass('custom-class');
  });

  it('check for custom class in listbox item component', () => {
    const { getByTestId } = render(
      <Listbox>
        <ListboxItem id={listItemId} className="custom-class">
          {children}
        </ListboxItem>
      </Listbox>
    );
    expect(getByTestId('DesignSystem-Listbox-ItemWrapper')).toHaveClass('custom-class');
  });
});

describe('Listbox component test for drag icon', () => {
  const { getByTestId } = render(
    <Listbox draggable={true}>
      <ListboxItem id={listItemId}>{children}</ListboxItem>
    </Listbox>
  );

  expect(getByTestId('DesignSystem-Listbox-DragIcon')).toBeInTheDocument();
  expect(getByTestId('DesignSystem-Listbox-DragIcon')).toHaveClass('Listbox-item--drag-icon');
});

describe('Listbox component test for TagName', () => {
  tagList.forEach((tag) => {
    it(`check for listbox component with ${tag} tagName`, () => {
      const { getByTestId } = render(<Listbox tag={tag}>{children}</Listbox>);
      expect(getByTestId('DesignSystem-Listbox').tagName).toMatch(tag.toUpperCase());
    });
  });
});

describe('Listbox Item component test for TagName', () => {
  listItemTagList.forEach((tag) => {
    it(`check for listbox component with ${tag} tagName`, () => {
      const { getByTestId } = render(
        <ListboxItem id={listItemId} tag={tag}>
          {children}
        </ListboxItem>
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
            <ListboxItem id={record} key={key}>
              <Text>{record}</Text>
            </ListboxItem>
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
            <ListboxItem id={record} key={key}>
              <Text>{record}</Text>
            </ListboxItem>
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
