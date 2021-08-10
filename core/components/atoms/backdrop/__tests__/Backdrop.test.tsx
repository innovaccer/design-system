import * as React from 'react';
import { render } from '@testing-library/react';
import Backdrop, { BackdropProps as Props } from '../Backdrop';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const booleanValue = [true, false];

describe('Backdrop component', () => {
  const mapper = {
    open: valueHelper(booleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Backdrop {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Backdrop component', () => {
  describe('Backdrop component with prop:open', () => {
    it('should have class Backdrop--open when open={true}', () => {
      const { getByTestId } = render(<Backdrop open={true} />);
      expect(getByTestId('DesignSystem-Backdrop')).toHaveClass('Backdrop--open ');
    });

    it('should have class Backdrop--animation--open when animate={true}', () => {
      const { getByTestId } = render(<Backdrop open={true} />);
      expect(getByTestId('DesignSystem-Backdrop')).toHaveClass('Backdrop-animation--open');
    });

    it('should have class Backdrop--animation--close when open={false}', () => {
      const { getByTestId } = render(<Backdrop open={false} />);
      expect(getByTestId('DesignSystem-Backdrop')).toHaveClass('Backdrop-animation--close');
    });

    describe('Backdrop Component with overwrite class', () => {
      it('overwrite Backdrop class', () => {
        const { getByTestId } = render(<Backdrop className="BackdropClass" open={false} />);
        expect(getByTestId('DesignSystem-Backdrop')).toHaveClass('BackdropClass');
      });
    });
  });
});
