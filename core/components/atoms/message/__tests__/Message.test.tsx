import * as React from 'react';
import { render } from '@testing-library/react';
import { Message, Text } from '@/index';
import { MessageProps as Props } from '@/index.type';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const appearances: Props['appearance'][] = ['alert', 'info', 'warning', 'success'];
const title = 'Title goes here';
const description = 'Description goes here';
const actions = (
  <>
    <Text className="mr-5 cursor-pointer" appearance="link">
      Action 1
    </Text>
    <Text className="cursor-pointer" appearance="link">
      Action 2
    </Text>
  </>
);

describe('Message component', () => {
  const mapper: Record<string, any> = {
    appearance: valueHelper(appearances, { required: true, iterate: true }),
    title: valueHelper(title, { required: true }),
    description: valueHelper(description, { required: true }),
    actions: valueHelper(actions, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Message {...attr}>Description goes here</Message>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Message component', () => {
  it('renders description', () => {
    const { getByTestId } = render(<Message appearance="info" description={description} />);
    expect(getByTestId('DesignSystem-Message--Description').textContent).toMatch(description);
  });
});

describe('Message Component with overwrite class', () => {
  it('overwrite Message class', () => {
    const { getByTestId } = render(<Message className="MessageClass" description={description} />);
    expect(getByTestId('DesignSystem-Message')).toHaveClass('MessageClass');
  });
});

describe('Message component with prop:Title', () => {
  it('renders title', () => {
    const { getByTestId } = render(<Message appearance="info" title={'Masala'} description={description} />);
    expect(getByTestId('DesignSystem-Message--Title').textContent).toMatch('Masala');
    expect(getByTestId('DesignSystem-Message--Icon')).toHaveClass('Message-icon--withTitle');
  });

  it('should not have Message-title class if title is not present ', () => {
    const { getByTestId, queryByTestId } = render(<Message appearance="info" description={description} />);
    expect(queryByTestId('DesignSystem-Message--Title')).not.toBeInTheDocument();
    expect(getByTestId('DesignSystem-Message--Icon')).not.toHaveClass('Message-icon--withTitle');
  });
});

describe('Message component with prop:appearance', () => {
  appearances.forEach((appearance) => {
    it(`should have the Message--${appearance} class when appearance = ${appearance}`, () => {
      const { getByTestId } = render(<Message appearance={appearance} description={description} />);
      expect(getByTestId('DesignSystem-Message')).toHaveClass(`Message--${appearance}`);
    });
  });
});

describe('Message component with prop: actions', () => {
  it('renders actions', () => {
    const { getByTestId } = render(<Message appearance="info" description={description} actions={actions} />);
    expect(getByTestId('DesignSystem-Message--actions')).toBeInTheDocument();
  });
});
