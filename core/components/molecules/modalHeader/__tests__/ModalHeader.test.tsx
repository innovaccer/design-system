import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ModalHeader, { ModalHeaderProps as Props } from '../ModalHeader';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const Heading = 'Modal header';
const SubHeading = 'Modal subheading';
const onClose = jest.fn();

const Mapper = {
  heading: valueHelper(Heading, { required: true }),
  onClose: valueHelper(onClose, { required: true }),
  subHeading: valueHelper(SubHeading, { required: true }),
};

describe('ModalHeader component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(
        <ModalHeader
          {...attr}
        />
      );
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(Mapper, testFunc);
});

describe('ModalHeader component with props', () => {

  it('renders subheading', () => {
    const { getByTestId } = render(<ModalHeader heading={Heading} onClose={onClose} subHeading={SubHeading} />);
    expect(getByTestId('DesignSystem-ModalHeader--Subheading')).toBeInTheDocument();
  });

  it('ModalHeader with prop: onClose', () => {
    const { getByTestId } = render(<ModalHeader heading={Heading} onClose={onClose} />);
    const closeIcon = getByTestId('DesignSystem-ModalHeader--CloseIcon');

    fireEvent.click(closeIcon);
    expect(onClose).toHaveBeenCalled();
  });

});

describe('ModalHeader with overwrite class', () => {
  const className = 'DS-ModalHeader';

  it('overwrite ModalHeader class', () => {
    const { getByTestId } = render(<ModalHeader heading={Heading} onClose={onClose} className={className} />);
    expect(getByTestId('DesignSystem-ModalHeader')).toHaveClass(`Modal-header ${className}`);
  });

});
