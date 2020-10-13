import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ModalHeader, { ModalHeaderProps as Props } from '../ModalHeader';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const Heading = 'Modal header';
const Icon = 'events';
const iconAppearance = 'alert';
const SubHeading = 'Modal subheading';
const onClose = jest.fn();

const Mapper = {
  icon: valueHelper(Icon, { required: true }),
  iconAppearance: valueHelper(iconAppearance, { required: true }),
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

  it('renders icon', () => {
    const IconClass = 'Modal-header-subheader--withIcon';

    const { getByTestId } = render(<ModalHeader icon={Icon} onClose={onClose} subHeading={SubHeading} />);
    expect(getByTestId('DesignSystem-ModalHeader--Icon')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-ModalHeader--Subheading')).toHaveClass(IconClass);
  });

  it('renders subheading', () => {
    const { getByTestId } = render(<ModalHeader onClose={onClose} subHeading={SubHeading} />);
    expect(getByTestId('DesignSystem-ModalHeader--Subheading')).toBeInTheDocument();
  });

  it('ModalHeader with prop: onClose', () => {
    const { getByTestId } = render(<ModalHeader onClose={onClose} />);
    const closeIcon = getByTestId('DesignSystem-ModalHeader--CloseIcon');

    fireEvent.click(closeIcon);
    expect(onClose).toHaveBeenCalled();
  });

});

describe('ModalHeader with overwrite class', () => {
  const className = 'DS-ModalHeader';

  it('overwrite ModalFooter class', () => {
    const { getByTestId } = render(<ModalHeader onClose={onClose} className={className} />);
    expect(getByTestId('DesignSystem-ModalHeader')).toHaveClass(className);
  });

});
