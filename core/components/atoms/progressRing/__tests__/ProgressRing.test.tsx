import * as React from 'react';
import { render } from '@testing-library/react';
import ProgressRing, { ProgressRingProps as Props } from '../ProgressRing';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const size = ['small', 'regular', 'large'];

describe('ProgressRing component', () => {
  const mapper = {
    value: valueHelper(30, { required: true }),
    size: valueHelper(size, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<ProgressRing {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('ProgressRing component', () => {
  it('should contain an SVG with the svg class, and a circle with the circle class', () => {
    const { getByTestId } = render(<ProgressRing value={50} max={100} size="regular" />);
    expect(getByTestId('DesignSystem-ProgressRing').tagName).toEqual('svg');
    expect(getByTestId('DesignSystem-ProgressRing--Circle').tagName).toEqual('circle');
    expect(getByTestId('DesignSystem-ProgressRing--Circle')).toHaveAttribute('cx', '25');
    expect(getByTestId('DesignSystem-ProgressRing--Circle')).toHaveAttribute('cy', '25');
    expect(getByTestId('DesignSystem-ProgressRing--Circle')).toHaveAttribute('r', '20');
  });
  describe('ProgressRing Component with overwrite class', () => {
    it('overwrite ProgressRing class', () => {
      const { getByTestId } = render(<ProgressRing className="ProgressRingClass" value={50} />);
      expect(getByTestId('DesignSystem-ProgressRing')).toHaveClass('ProgressRingClass');
    });
  });

  describe('ProgressRing component with prop: size', () => {
    it('should have the Ring--regular class when size={regular}', () => {
      const { getByTestId } = render(<ProgressRing value={50} max={100} size="regular" />);
      expect(getByTestId('DesignSystem-ProgressRing')).toHaveClass('Ring Ring--regular');
    });

    it('ProgressRing component should have the Ring--small class when size={small}', () => {
      const { getByTestId } = render(<ProgressRing value={50} max={100} size="small" />);
      expect(getByTestId('DesignSystem-ProgressRing')).toHaveClass('Ring Ring--small');
    });

    it('ProgressRing component should have the Ring--large class when size={large}', () => {
      const { getByTestId } = render(<ProgressRing value={50} max={100} size="large" />);
      expect(getByTestId('DesignSystem-ProgressRing')).toHaveClass('Ring Ring--large');
    });
  });
});
