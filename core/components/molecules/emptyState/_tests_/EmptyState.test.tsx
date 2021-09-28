import * as React from 'react';
import { render } from '@testing-library/react';
import { EmptyState, Button } from '@/index';
import { EmptyStateProps as Props, HeadingProps } from '@/index.type';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const sizes: Props['size'][] = ['large', 'small'];
const imageHeight = {
  large: '256px',
  small: '128px',
};

const HeadingSize: Record<Props['size'], HeadingProps['size']> = {
  large: 'l',
  small: 'm',
};

const title = 'Manage your outreach campaigns';
const description = 'Campaigns let you reach out to patients with text messages, emails and voice calls';
const imageSrc = 'noContent';
const button = <Button data-test="DesignSystem-EmptyState--Button">Add Campaigns</Button>;

describe('EmptyState component', () => {
  const mapper: Record<string, any> = {
    size: valueHelper(sizes, { required: true, iterate: true }),
    title: valueHelper(title, { required: true }),
    description: valueHelper(description, { required: true }),
    imageSrc: valueHelper(imageSrc, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;
    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<EmptyState {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };
  testHelper(mapper, testFunc);
});

describe('EmptyState component', () => {
  it("should render div and it's children ", () => {
    const { getByTestId } = render(
      <EmptyState title={title} imageSrc={imageSrc} description={description} size="large">
        {button}
      </EmptyState>
    );
    expect(getByTestId('DesignSystem-EmptyState')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-EmptyState--Img')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-EmptyState--Heading')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-EmptyState--Text')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-EmptyState').lastChild).toBeInTheDocument();
  });

  it('should render title', () => {
    const { getByTestId } = render(
      <EmptyState title={title} imageSrc={imageSrc} description={description} size="large" />
    );
    expect(getByTestId('DesignSystem-EmptyState--Heading').textContent).toMatch(title);
  });

  it('should render description', () => {
    const { getByTestId } = render(
      <EmptyState title={title} imageSrc={imageSrc} description={description} size="large" />
    );
    expect(getByTestId('DesignSystem-EmptyState--Text').textContent).toMatch(description);
  });

  it('should render image', () => {
    const { getByTestId } = render(
      <EmptyState title={title} imageSrc={imageSrc} description={description} size="large" />
    );
    expect(getByTestId('DesignSystem-EmptyState--Img')).toHaveAttribute('src', 'noContent');
  });

  it('should render Child', () => {
    const { getByTestId } = render(
      <EmptyState title={title} imageSrc={imageSrc} description={description} size="large">
        {button}
      </EmptyState>
    );
    expect(getByTestId('DesignSystem-EmptyState--Button')).toBeInTheDocument();
  });
});

describe('EmptyState with prop: size', () => {
  sizes.forEach((size) => {
    it(`Should render emptystate with size: ${size}`, () => {
      const { getByTestId } = render(
        <EmptyState title={title} imageSrc={imageSrc} description={description} size={size}>
          {button}
        </EmptyState>
      );
      expect(getByTestId('DesignSystem-EmptyState--Heading')).toHaveClass(`EmptyState-title EmptyState-title--${size}`);
      expect(getByTestId('DesignSystem-EmptyState--Text')).toHaveClass(
        `EmptyState-description EmptyState-description--${size}`
      );
      expect(getByTestId('DesignSystem-EmptyState--Heading')).toHaveClass(`Heading--${HeadingSize[size]}`);
      expect(getByTestId('DesignSystem-EmptyState--Text')).toHaveClass(`EmptyState-description--${size}`);
      expect(getByTestId('DesignSystem-EmptyState--Img')).toHaveAttribute('height', imageHeight[size]);
    });
  });
});
