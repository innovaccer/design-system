import * as React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import Message, { MessageProps as Props, Appearance } from '../Message';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const appearances: Appearance[] = ['default', 'alert', 'info', 'warning', 'success'];
const title = 'Title goes here';

describe('Message component', () => {
  const mapper: Record<string, any> = {
    appearance: valueHelper(appearances, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Message
          {...attr}
        >
          Description goes here
        </Message>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Message component', () => {
  const mapper: Record<string, any> = {
    appearance: valueHelper(appearances, { required: true, iterate: true }),
    title: valueHelper(title, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = shallow(
        <Message
          {...attr}
        >
          Description goes here
        </Message>
      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
describe('Message component', () => {

  it('renders children', () => {
    const { getByTestId } = render(
      <Message appearance="info">{'Design System is a library of reusable components'}</Message>
    );
    expect(getByTestId('DesignSystem-Message--Description').textContent).toMatch('Design System is a library of reusable components');
  });

  describe('Message Component with overwrite class', () => {

    it('overwrite Message class', () => {
      const { getByTestId } = render(<Message className="MessageClass">{'Design System is a library of reusable components'}</Message>);
      expect(getByTestId('DesignSystem-Message')).toHaveClass('MessageClass');
    });

  });

  describe('Message component with prop:Title', () => {

    it('renders title', () => {
      const { getByTestId } = render(<Message appearance="info" title={'Masala'}>{'Design System is a library of reusable components'}</Message>);
      expect(getByTestId('DesignSystem-Message--Title')).toHaveTextContent('Masala');
    });

    it('should have Message-title class if title prop is present', () => {
      const { getByTestId } = render(<Message appearance="info" title={'Masala'}>{'Design System is a library of reusable components'}</Message>);
      expect(getByTestId('DesignSystem-Message--Title').firstChild).toHaveClass('Message-title');
    });

    it('should have Message-icon--withTitle class if title prop is present', () => {
      const { getByTestId } = render(<Message appearance="info" title={'Masala'}>{'Design System is a library of reusable components'}</Message>);
      expect(getByTestId('DesignSystem-Message--Icon')).toHaveClass('Message-icon--withTitle');
    });

    it('should not have Message-title class if title is not present ', () => {
      const { getByTestId } = render(
        <Message appearance="info" >{'Design System is a library of reusable components'}</Message>);
      expect(getByTestId('DesignSystem-Message--Title').firstChild).not.toHaveClass('Message-title');
    });

    it('should have not Message-icon--withTitle class if title prop is present', () => {
      const { getByTestId } = render(
        <Message appearance="info" >{'Design System is a library of reusable components'}</Message>);
      expect(getByTestId('DesignSystem-Message--Icon')).not.toHaveClass('Message-icon--withTitle');
    });

  });

  describe('Message component with prop:appearance for Message-Icon', () => {

    appearances.forEach(appearance => {
      if (appearance !== 'default') {
        it(`should have the Message-icon--${appearance} class when appearance=${appearance} `, () => {
          const { getByTestId } = render(<Message appearance={appearance}>{'Design'}</Message>);
          expect(getByTestId('DesignSystem-Message--Icon')).toHaveClass(`Message-icon--${appearance}`);
        });
      } else {
        it(`should not have the Message-icon--${appearance} class when appearance=${appearance} `, () => {
          const { getByTestId } = render(<Message appearance={appearance}>{'Design'}</Message>);
          expect(getByTestId('DesignSystem-Message').firstChild).not.toHaveClass(`Message-icon--${appearance}`);
        });
      }
    });
  });

  describe('Message component with prop:appearance for Message', () => {

    appearances.forEach(appearance => {
      it(`should have the Message--${appearance} class when appearance=${appearance} `, () => {
        const { getByTestId } = render(<Message appearance={appearance}>{'Design'}</Message>);
        expect(getByTestId('DesignSystem-Message')).toHaveClass(`Message--${appearance}`);
      });

    });
  });

});
