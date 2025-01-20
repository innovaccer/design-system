import * as React from 'react';
import { render } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { Chat } from '@/index';
import { ChatProps as Props } from '@/index.type';

const date = '01 Jan 2025';

const mapper = {
  date: valueHelper(date, { required: true, iterate: false }),
};

describe('Chat Date Separator component snapshot', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Chat>
          <Chat.DateSeparator date={date} {...attr} />
        </Chat>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Chat Date Separator component', () => {
  it('renders children', () => {
    const { getByTestId } = render(
      <Chat>
        <Chat.DateSeparator date={date} />
      </Chat>
    );
    expect(getByTestId('DesignSystem-Chat-DateSeparator')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Chat-DateSeparator').textContent).toMatch(date);
  });

  describe('Chat Date Separator Component with overwrite class', () => {
    it('overwrite Chat Date Separator class', () => {
      const { getByTestId } = render(
        <Chat>
          <Chat.DateSeparator date={date} className="custom-class" />
        </Chat>
      );
      expect(getByTestId('DesignSystem-Chat-DateSeparator')).toHaveClass('custom-class');
    });
  });

  it('Chat Date Separator Component with overwrite data-test attribute', () => {
    const testDataValue = 'DesignSystem-DateSeparator-TestValue';
    const { getByTestId } = render(
      <Chat>
        <Chat.DateSeparator date={date} data-test={testDataValue} />
      </Chat>
    );

    const dateElement = getByTestId(testDataValue);
    expect(dateElement.getAttribute('data-test')).toBe(testDataValue);
  });
});
