import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Stack, StackItem } from '@/index';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { StackItemProps as Props } from '@/index.type';

const BooleanValue = [true, false];
const listSize = ['standard', 'compressed', 'tight'];
const listType = ['option', 'description', 'resource'];
const nestedRowElement = <div>nested row</div>;
const children = <div>stack item element</div>;
const stackItemId = 'stack-item-id';

/*
==DONE===
disable padding
States 
custom padding class
show divider


===TODO===
custom class to stack
nested row-> expanded
stack item length
check for ul, li element type
draggable icon

 */

// const CustomStack = (props: StackItemProps) => {
//   return (
//     <Stack>
//       <StackItem {...props}>{children}</StackItem>
//     </Stack>
//   );
// };

describe('Stack component snapshot', () => {
  const mapper: Record<string, any> = {
    showDivider: valueHelper(BooleanValue, { required: true, iterate: true }),
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
    disablePadding: valueHelper(BooleanValue, { required: true, iterate: true }),
    draggable: valueHelper(BooleanValue, { required: true, iterate: true }),
    size: valueHelper(listSize, { required: true, iterate: false }),
    type: valueHelper(listType, { required: true, iterate: false }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Stack>
          <StackItem {...attr}>{children}</StackItem>
        </Stack>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Stack component snapshot for nested row', () => {
  const mapper: Record<string, any> = {
    expanded: valueHelper(BooleanValue, { required: true, iterate: true }),
    nestedRow: valueHelper(nestedRowElement, { required: true, iterate: false }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Stack>
          <StackItem {...attr}>{children}</StackItem>
        </Stack>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Stack component snapshot for states', () => {
  const mapper: Record<string, any> = {
    selected: valueHelper(BooleanValue, { required: true, iterate: true }),
    activated: valueHelper(BooleanValue, { required: true, iterate: true }),
    type: valueHelper(listType, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Stack>
          <StackItem {...attr}>{children}</StackItem>
        </Stack>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Stack Item component test for list size: standard', () => {
  it('check for padding classes for size:standard when disablePadding:false', () => {
    const { getByTestId } = render(
      <Stack size="standard">
        <StackItem id={stackItemId}>{children}</StackItem>
      </Stack>
    );
    const stackItem = getByTestId('DesignSystem-Stack-ItemWrapper');
    expect(stackItem).toHaveClass('px-6 py-5');
  });

  it('check for padding classes for size:standard when disablePadding:true', () => {
    const { getByTestId } = render(
      <Stack size="standard">
        <StackItem id={stackItemId} disablePadding={true}>
          {children}
        </StackItem>
      </Stack>
    );
    const stackItem = getByTestId('DesignSystem-Stack-ItemWrapper');
    expect(stackItem).not.toHaveClass('px-6 py-5');
  });
});

describe('Stack Item component test for list size: tight', () => {
  it('check for padding classes for size:tight when disablePadding:false', () => {
    const { getByTestId } = render(
      <Stack size="tight">
        <StackItem id={stackItemId}>{children}</StackItem>
      </Stack>
    );
    const stackItem = getByTestId('DesignSystem-Stack-ItemWrapper');
    expect(stackItem).toHaveClass('px-6 py-3');
  });

  it('check for padding classes for size:tight when disablePadding:true', () => {
    const { getByTestId } = render(
      <Stack size="tight">
        <StackItem id={stackItemId} disablePadding={true}>
          {children}
        </StackItem>
      </Stack>
    );
    const stackItem = getByTestId('DesignSystem-Stack-ItemWrapper');
    expect(stackItem).not.toHaveClass('px-6 py-3');
  });
});

describe('Stack Item component test for list size: compressed', () => {
  it('check for padding classes for size:compressed when disablePadding:false', () => {
    const { getByTestId } = render(
      <Stack size="compressed">
        <StackItem id={stackItemId}>{children}</StackItem>
      </Stack>
    );
    const stackItem = getByTestId('DesignSystem-Stack-ItemWrapper');
    expect(stackItem).toHaveClass('px-6 py-4');
  });

  it('check for padding classes for size:compressed when disablePadding:true', () => {
    const { getByTestId } = render(
      <Stack size="compressed">
        <StackItem id={stackItemId} disablePadding={true}>
          {children}
        </StackItem>
      </Stack>
    );
    const stackItem = getByTestId('DesignSystem-Stack-ItemWrapper');
    expect(stackItem).not.toHaveClass('px-6 py-4');
  });
});

describe('Stack Item component test for list type: option', () => {
  it('check for classes for type:option', () => {
    const { getByTestId } = render(
      <Stack type="option">
        <StackItem id={stackItemId} selected={true}>
          {children}
        </StackItem>
      </Stack>
    );
    const stackItem = getByTestId('DesignSystem-Stack-ItemWrapper');
    expect(stackItem).toHaveClass('Stack-item--selected');
    expect(stackItem).toHaveClass('Stack-item');
  });
});

describe('Stack Item component test for list type: resource', () => {
  it('check for classes for type:resource', () => {
    const { getByTestId } = render(
      <Stack type="resource">
        <StackItem id={stackItemId} activated={true}>
          {children}
        </StackItem>
      </Stack>
    );
    const stackItem = getByTestId('DesignSystem-Stack-ItemWrapper');
    expect(stackItem).toHaveClass('Stack-item--activated');
    expect(stackItem).toHaveClass('Stack-item');
  });
});

describe('Stack Item component test for list type: description', () => {
  it('check for classes for type:description', () => {
    const { getByTestId } = render(
      <Stack type="description">
        <StackItem id={stackItemId}>{children}</StackItem>
      </Stack>
    );
    const stackItem = getByTestId('DesignSystem-Stack-ItemWrapper');
    expect(stackItem).not.toHaveClass('Stack-item');
  });
});

describe('Stack Item component test for disabled classes', () => {
  const { getByTestId } = render(
    <StackItem id={stackItemId} disabled={true}>
      {children}
    </StackItem>
  );
  const stackItem = getByTestId('DesignSystem-Stack-ItemWrapper');
  expect(stackItem).toHaveClass('Stack-item--disabled');
});

describe('Stack Item component test for custom classes', () => {
  it('check for custom class', () => {
    const { getByTestId } = render(
      <StackItem id={stackItemId} className="custom-class">
        {children}
      </StackItem>
    );
    const stackItem = getByTestId('DesignSystem-Stack-ItemWrapper');
    expect(stackItem).toHaveClass('custom-class');
  });

  it('check to override default padding classes', () => {
    const { getByTestId } = render(
      <StackItem id={stackItemId} className="p-0" disablePadding={true}>
        {children}
      </StackItem>
    );
    const stackItem = getByTestId('DesignSystem-Stack-ItemWrapper');
    expect(stackItem).toHaveClass('p-0');
  });
});

describe('Stack Item component test for divider', () => {
  it('check for divider present below list item', () => {
    const { getByTestId } = render(
      <Stack showDivider={true}>
        <StackItem id={stackItemId}>{children}</StackItem>
      </Stack>
    );
    const divider = getByTestId('DesignSystem-Divider');
    expect(divider).toBeInTheDocument();
  });

  it('check for divider not present below list item', () => {
    render(
      <Stack showDivider={false}>
        <StackItem id={stackItemId}>{children}</StackItem>
      </Stack>
    );
    const divider = screen.queryByText('DesignSystem-Divider');
    expect(divider).not.toBeInTheDocument();
  });
});
