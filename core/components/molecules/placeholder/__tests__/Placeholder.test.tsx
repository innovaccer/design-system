import * as React from 'react';
import { render } from '@testing-library/react';
import Placeholder, { PlaceholderProps as Props } from '../Placeholder';
import { PlaceholderParagraph } from '@/index';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const sizes = ['small', 'medium', 'large'];
const BooleanValue = [true, false];

describe('Placeholder component', () => {
  const mapper = {
    round: valueHelper(BooleanValue, { required: true, iterate: true }),
    withImage: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(
        <Placeholder {...attr}>
          <PlaceholderParagraph length="small" />
        </Placeholder>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Placeholder component', () => {
  const mapper = {
    imageSize: valueHelper(sizes, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(
        <Placeholder {...attr}>
          <PlaceholderParagraph length="small" />
        </Placeholder>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Placeholder component', () => {
  it('renders children without image', () => {
    const { getAllByTestId } = render(
      <Placeholder withImage={false}>
        <PlaceholderParagraph length="small" data-test="Placeholder-Paragraph" />
        <PlaceholderParagraph length="medium" data-test="Placeholder-Paragraph" />
      </Placeholder>
    );

    expect(getAllByTestId('Placeholder-Paragraph')).toHaveLength(2);
  });

  it('placeholder component with prop: withImage', () => {
    const withImageClass = 'Placeholder-paragraph--withImage';

    const { getByTestId } = render(
      <Placeholder withImage={true}>
        <PlaceholderParagraph length="small" />
      </Placeholder>
    );

    expect(getByTestId('DesignSystem-Placeholder--Image')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Placeholder--Paragraph')).toHaveClass(withImageClass);
  });
});

describe('Placeholder Component with overwrite class', () => {
  const className = 'DS-Placeholder';

  it('overwrite Placeholder class', () => {
    const { getByTestId } = render(
      <Placeholder className={className}>
        <PlaceholderParagraph length="small" />
      </Placeholder>
    );
    expect(getByTestId('DesignSystem-Placeholder')).toHaveClass(className);
  });
});
