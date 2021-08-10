import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import OverlayHeader, { OverlayHeaderProps as Props } from '../OverlayHeader';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const Heading = 'Modal header';
const SubHeading = 'Modal subheading';
const onClose = jest.fn();
const functionValue = jest.fn();

const Mapper = {
  heading: valueHelper(Heading, { required: true }),
  subHeading: valueHelper(SubHeading, { required: true }),
  backButton: valueHelper(true, { required: true }),
  backButtonCallback: valueHelper(functionValue, { required: true }),
};

describe('OverlayHeader component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(<OverlayHeader {...attr} />);
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(Mapper, testFunc);
});

describe('OverlayHeader component with props', () => {
  it('renders heading and subheading', () => {
    const { getByTestId, queryByTestId } = render(
      <OverlayHeader heading={Heading} onClose={onClose} subHeading={SubHeading} />
    );
    expect(getByTestId('DesignSystem-OverlayHeader--Subheading')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-OverlayHeader--heading')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-OverlayHeader--heading').textContent).toMatch('Modal header');
    expect(getByTestId('DesignSystem-OverlayHeader--Subheading').textContent).toMatch('Modal subheading');
    expect(queryByTestId('DesignSystem-OverlayHeader--Button')).not.toBeInTheDocument();
  });

  it('renders with props: backIcon and backIconCallback', () => {
    const { getByTestId } = render(
      <OverlayHeader heading={Heading} subHeading={SubHeading} backIcon={true} backIconCallback={functionValue} />
    );
    expect(getByTestId('DesignSystem-OverlayHeader--Button')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-OverlayHeader')).toHaveClass('OverlayHeader--withBackButton');
    expect(getByTestId('DesignSystem-OverlayHeader--Subheading')).toHaveClass(
      'OverlayHeader-subheading--withBackButton'
    );

    const backIconClick = getByTestId('DesignSystem-OverlayHeader--Button');
    fireEvent.click(backIconClick);
    expect(functionValue).toHaveBeenCalled();
  });

  it('renders with props: backButton and backButtonCallback', () => {
    const { getByTestId } = render(
      <OverlayHeader heading={Heading} subHeading={SubHeading} backButton={true} backButtonCallback={functionValue} />
    );
    expect(getByTestId('DesignSystem-OverlayHeader--Button')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-OverlayHeader')).toHaveClass('OverlayHeader--withBackButton');
    expect(getByTestId('DesignSystem-OverlayHeader--Subheading')).toHaveClass(
      'OverlayHeader-subheading--withBackButton'
    );

    const backButtonClick = getByTestId('DesignSystem-OverlayHeader--Button');
    fireEvent.click(backButtonClick);
    expect(functionValue).toHaveBeenCalled();
  });
});

describe('OverlayHeader with overwrite class', () => {
  const className = 'DS-OverlayHeader';

  it('overwrite OverlayHeader class', () => {
    const { getByTestId } = render(<OverlayHeader heading={Heading} onClose={onClose} className={className} />);
    expect(getByTestId('DesignSystem-OverlayHeader')).toHaveClass(`OverlayHeader ${className}`);
  });
});
