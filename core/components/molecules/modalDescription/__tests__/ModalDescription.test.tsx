import * as React from 'react';
import { render } from '@testing-library/react';
import ModalDescription, { ModalDescriptionProps as Props } from '../ModalDescription';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const StringValue = 'Sample String';

const Mapper = {
  title: valueHelper(StringValue, { required: true }),
  description: valueHelper(StringValue, { required: true }),
};

describe('ModalDescription component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(<ModalDescription {...attr} />);

      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(Mapper, testFunc);
});

describe('ModalDescription component with props', () => {
  it('renders default props', () => {
    const { getByTestId, queryByTestId } = render(<ModalDescription />);

    expect(getByTestId('DesignSystem-ModalDescription')).toHaveClass('Modal-description');
    expect(queryByTestId('DesignSystem-ModalDescription--Title')).not.toBeInTheDocument();
    expect(queryByTestId('DesignSystem-ModalDescription--Description')).not.toBeInTheDocument();
  });

  it('ModalDescription with prop: title', () => {
    const { getByTestId } = render(<ModalDescription title={StringValue} />);

    expect(getByTestId('DesignSystem-ModalDescription--Title').textContent).toMatch(StringValue);
  });

  it('ModalDescription with prop: description', () => {
    const { getByTestId } = render(<ModalDescription description={StringValue} />);

    expect(getByTestId('DesignSystem-ModalDescription--Description').textContent).toMatch(StringValue);
  });
});

describe('ModalDescription with overwrite class', () => {
  const className = 'DS-ModalDescription';

  it('overwrite ModalDescription class', () => {
    const { getByTestId } = render(<ModalDescription className={className} />);

    expect(getByTestId('DesignSystem-ModalDescription')).toHaveClass(className);
  });
});
