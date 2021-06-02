import * as React from 'react';
import { render } from '@testing-library/react';
import OverlayHeader, { OverlayHeaderProps as Props } from '../OverlayHeader';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const Heading = 'Modal header';
const SubHeading = 'Modal subheading';
const onClose = jest.fn();

const Mapper = {
  heading: valueHelper(Heading, { required: true }),
  onClose: valueHelper(onClose, { required: true }),
  subHeading: valueHelper(SubHeading, { required: true }),
};

describe('OverlayHeader component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(
        <OverlayHeader
          {...attr}
        />
      );
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(Mapper, testFunc);
});

describe('OverlayHeader component with props', () => {

  it('renders subheading', () => {
    const { getByTestId } = render(<OverlayHeader heading={Heading} onClose={onClose} subHeading={SubHeading} />);
    expect(getByTestId('DesignSystem-OverlayHeader--Subheading')).toBeInTheDocument();
  });

});

describe('OverlayHeader with overwrite class', () => {
  const className = 'DS-OverlayHeader';

  it('overwrite OverlayHeader class', () => {
    const { getByTestId } = render(<OverlayHeader heading={Heading} onClose={onClose} className={className} />);
    expect(getByTestId('DesignSystem-OverlayHeader')).toHaveClass(`OverlayHeader ${className}`);
  });

});
