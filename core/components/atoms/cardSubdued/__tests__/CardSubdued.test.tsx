import * as React from 'react';
import { render } from '@testing-library/react';
import { CardSubdued } from '@/index';
import { CardSubduedProps as Props } from '@/index.type';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const borders: Props['border'][] = ['top', 'left', 'right', 'bottom'];

const Mapper = {
  border: valueHelper(borders, { required: true, iterate: true }),
};

describe('CardSubdued component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <CardSubdued {...attr}>
          <span>Hello</span>
        </CardSubdued>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(Mapper, testFunc);
});

describe('CardSubdued component', () => {
  it('renders children', () => {
    const { getByTestId } = render(<CardSubdued>CardSubdued Component</CardSubdued>);
    expect(getByTestId('DesignSystem-CardSubdued').textContent).toMatch('CardSubdued Component');
  });

  it('renders className', () => {
    const { getByTestId } = render(<CardSubdued className="CardSubduedClass">CardSubdued Component</CardSubdued>);
    expect(getByTestId('DesignSystem-CardSubdued')).toHaveClass('CardSubduedClass');
  });

  borders.forEach((border) => {
    it(`renders border-${border}`, () => {
      const { getByTestId } = render(<CardSubdued border={border}>CardSubdued Component</CardSubdued>);
      const component = getByTestId('DesignSystem-CardSubdued');
      expect(component).toHaveStyle(`border-${border}: var(--spacing-2-5) solid var(--secondary-light)`);
    });
  });
});
