import * as React from 'react';
import { render } from '@testing-library/react';
import { EmptyState, Button, Icon } from '@/index';
import { EmptyStateProps as Props, HeadingProps } from '@/index.type';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { TEmptyStateSize } from '@/common.type';

const sizes: TEmptyStateSize[] = ['large', 'small'];
const templateSize: TEmptyStateSize[] = ['compressed', 'standard', 'tight'];
const imageHeight: Record<string, string> = {
  standard: '200px',
  compressed: '150px',
  tight: '100px',
  large: '256px',
  small: '128px',
};

const templateWidth: Record<string, string> = {
  standard: '480px',
  compressed: '400px',
  tight: '320px',
  large: '480px',
  small: '480px',
};

const HeadingSize: Record<string, HeadingProps['size']> = {
  large: 'l',
  small: 'm',
  standard: 'l',
  compressed: 'l',
  tight: 'l',
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

describe('EmptyState component', () => {
  const mapper: Record<string, any> = {
    size: valueHelper(templateSize, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;
    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <EmptyState {...attr}>
          <EmptyState.Title>title must be passed here</EmptyState.Title>
          <EmptyState.Description>Description must be passed here</EmptyState.Description>
          <EmptyState.Image>
            <Icon name="events" size={32} />
          </EmptyState.Image>
          <EmptyState.Actions>
            <Button>click me</Button>
          </EmptyState.Actions>
        </EmptyState>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };
  testHelper(mapper, testFunc);
});

describe('EmptyState Component', () => {
  test('renders EmptyState with maxWidth', () => {
    const { getByTestId } = render(
      <EmptyState data-test="DesignSystem-EmptyState--Wrapper" size="standard" maxWidth="500px">
        <EmptyState.Title>title must be passed here</EmptyState.Title>
        <EmptyState.Description>Description must be passed here</EmptyState.Description>
        <EmptyState.Image data-test="DesignSystem-EmptyState--Img" maxHeight="300px">
          <Icon name="events" size={32} />
        </EmptyState.Image>
        <EmptyState.Actions>
          <Button>click me</Button>
        </EmptyState.Actions>
      </EmptyState>
    );
    expect(window.getComputedStyle(getByTestId('DesignSystem-EmptyState--Wrapper')).maxWidth).toBe('500px');
    expect(window.getComputedStyle(getByTestId('DesignSystem-EmptyState--Img')).maxHeight).toBe('300px');
  });

  test('renders with an image source', () => {
    const { getByTestId } = render(
      <EmptyState data-test="DesignSystem-EmptyState--Wrapper" size="standard">
        <EmptyState.Title>title must be passed here</EmptyState.Title>
        <EmptyState.Description>Description must be passed here</EmptyState.Description>
        <EmptyState.Image src="test.png" data-test="DesignSystem-EmptyState--Img" />
        <EmptyState.Actions>
          <Button>click me</Button>
        </EmptyState.Actions>
      </EmptyState>
    );
    const image = getByTestId('DesignSystem-EmptyState--Img');
    expect(image).toHaveAttribute('src', 'test.png');
  });
});

describe('renders with different sizes', () => {
  it.each(['standard', 'compressed', 'tight'])('renders with size %s', (size) => {
    const { getByTestId, getByText } = render(
      <EmptyState data-test="EmptyState--Wrapper" size={size as TEmptyStateSize}>
        <EmptyState.Title data-test="EmptyState--Heading">title must be passed here</EmptyState.Title>
        <EmptyState.Description data-test="EmptyState--Text">Description must be passed here</EmptyState.Description>
        <EmptyState.Image data-test="EmptyState--Img">
          <Icon name="events" size={32} />
        </EmptyState.Image>
        <EmptyState.Actions data-test="EmptyState--Actions">
          <Button>click me</Button>
        </EmptyState.Actions>
      </EmptyState>
    );

    expect(getByText('title must be passed here')).toBeInTheDocument();
    expect(getByText('Description must be passed here')).toBeInTheDocument();
    expect(window.getComputedStyle(getByTestId('EmptyState--Wrapper')).maxWidth).toBe(templateWidth[size]);
    expect(getByTestId('EmptyState--Heading')).toHaveClass(`EmptyState-text EmptyState-title--${size}`);
    expect(getByTestId('EmptyState--Text')).toHaveClass(`EmptyState-text`);
    expect(getByTestId('EmptyState--Actions')).toHaveClass(`EmptyState-actions--${size}`);
    expect(window.getComputedStyle(getByTestId('EmptyState--Img')).maxHeight).toBe(imageHeight[size]);
  });
});
