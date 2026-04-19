import * as React from 'react';
import { render, createEvent, fireEvent } from '@testing-library/react';
import { axe } from '@/utils/testAxe';
import { Link } from '@/index';
import { LinkProps } from '@/index.type';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const target = ['_blank', '_self', '_parent', '_top'];
const appearances: LinkProps['appearance'][] = ['default', 'subtle'];
const sizes: LinkProps['size'][] = ['regular', 'tiny'];
const StringValue = 'Sample string';
const FunctionValue = jest.fn();

const Mapper = {
  id: valueHelper(StringValue, { required: true }),
  href: valueHelper(StringValue, { required: true }),
  target: valueHelper(target, { required: true, iterate: true }),
  rel: valueHelper(StringValue, { required: true }),
  onClick: valueHelper(FunctionValue, { required: true }),
};

describe('Link component', () => {
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as LinkProps;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Link {...attr}>Link</Link>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(Mapper, testFunc);
});

describe('Link component', () => {
  it('renders children', () => {
    const { getByTestId } = render(<Link>Click on Link</Link>);
    expect(getByTestId('DesignSystem-Link').textContent).toMatch('Click on Link');
  });

  it('renders as anchor tag when href is provided', () => {
    const { getByTestId } = render(<Link href="/page">Click on Link</Link>);
    expect(getByTestId('DesignSystem-Link').tagName).toMatch('A');
  });

  it('renders as button tag when href is not provided', () => {
    const { getByTestId } = render(<Link onClick={jest.fn()}>Click on Link</Link>);
    expect(getByTestId('DesignSystem-Link').tagName).toMatch('BUTTON');
    expect(getByTestId('DesignSystem-Link')).toHaveAttribute('type', 'button');
  });

  it('renders default props', () => {
    const { getByTestId } = render(<Link>Click on Link</Link>);
    expect(getByTestId('DesignSystem-Link')).toHaveClass('Link--regular');
    expect(getByTestId('DesignSystem-Link')).toHaveClass('Link--default');
  });

  describe('Link Component with overwrite class', () => {
    it('overwrite Link class', () => {
      const { getByTestId } = render(<Link className="LinkClass">Click on Link</Link>);
      expect(getByTestId('DesignSystem-Link')).toHaveClass('Link LinkClass');
    });
  });

  describe('Link component with prop:appearance', () => {
    appearances.forEach((appearance) => {
      it(`should have the Link--${appearance} class when appearance=${appearance} `, () => {
        const { getByTestId } = render(<Link appearance={appearance}>Click on Link</Link>);
        expect(getByTestId('DesignSystem-Link')).toHaveClass(`Link--${appearance}`);
      });
    });
  });

  describe('Link component with prop:size', () => {
    sizes.forEach((size) => {
      it(`should have the Link--${size} class when appearance=${size} `, () => {
        const { getByTestId } = render(<Link size={size}>Click on Link</Link>);
        expect(getByTestId('DesignSystem-Link')).toHaveClass(`Link--${size}`);
      });
    });
  });

  describe('Link component with prop:disabled and with no appearance', () => {
    it('link should be disabled', () => {
      const { getByTestId } = render(<Link disabled={true}>Click on Link</Link>);
      expect(getByTestId('DesignSystem-Link')).toHaveClass('Link--default-disabled');
    });
  });

  describe('Link component with prop:disabled and with default appearance', () => {
    it('link should be disabled', () => {
      const { getByTestId } = render(
        <Link disabled={true} appearance="default">
          Click on Link
        </Link>
      );
      expect(getByTestId('DesignSystem-Link')).toHaveClass('Link--default-disabled');
    });
  });

  describe('Link component with prop:disabled and with subtle appearance', () => {
    it('link should be disabled', () => {
      const { getByTestId } = render(
        <Link disabled={true} appearance="subtle">
          Click on Link
        </Link>
      );
      expect(getByTestId('DesignSystem-Link')).toHaveClass('Link--subtle-disabled');
    });
  });
});

describe('Link component with prop:tooltip', () => {
  it('renders info icon when disabled and tooltip are provided', () => {
    const { getByTestId } = render(
      <Link disabled={true} tooltip="This link is disabled">
        Click on Link
      </Link>
    );
    expect(getByTestId('DesignSystem-Link--Info-Icon')).toBeInTheDocument();
  });

  it('does not render info icon when not disabled even with tooltip', () => {
    const { queryByTestId } = render(
      <Link disabled={false} tooltip="Some tooltip">
        Click on Link
      </Link>
    );
    expect(queryByTestId('DesignSystem-Link--Info-Icon')).not.toBeInTheDocument();
  });

  it('does not render info icon when disabled but no tooltip', () => {
    const { queryByTestId } = render(<Link disabled={true}>Click on Link</Link>);
    expect(queryByTestId('DesignSystem-Link--Info-Icon')).not.toBeInTheDocument();
  });
});

describe('Link component info icon with prop:appearance', () => {
  it('info icon has Link-infoIcon--default class when appearance is default', () => {
    const { getByTestId } = render(
      <Link disabled={true} appearance="default" tooltip="Disabled reason">
        Click on Link
      </Link>
    );
    expect(getByTestId('DesignSystem-Link--Info-Icon')).toHaveClass('Link-infoIcon--default');
  });

  it('info icon has Link-infoIcon--subtle class when appearance is subtle', () => {
    const { getByTestId } = render(
      <Link disabled={true} appearance="subtle" tooltip="Disabled reason">
        Click on Link
      </Link>
    );
    expect(getByTestId('DesignSystem-Link--Info-Icon')).toHaveClass('Link-infoIcon--subtle');
  });
});

describe('Link component keyboard behaviour when disabled', () => {
  it('prevents Enter key navigation on a disabled anchor with tooltip', () => {
    const { getByTestId } = render(
      <Link href="/page" disabled={true} tooltip="Reason">
        Click on Link
      </Link>
    );
    const link = getByTestId('DesignSystem-Link');
    const event = createEvent.keyDown(link, { key: 'Enter' });
    fireEvent(link, event);
    expect(event.defaultPrevented).toBe(true);
  });

  it('does not prevent Enter key on an enabled anchor', () => {
    const { getByTestId } = render(
      <Link href="/page" tooltip="Info">
        Click on Link
      </Link>
    );
    const link = getByTestId('DesignSystem-Link');
    const event = createEvent.keyDown(link, { key: 'Enter' });
    fireEvent(link, event);
    expect(event.defaultPrevented).toBe(false);
  });

  it('calls user-provided onKeyDown alongside the internal handler', () => {
    const onKeyDown = jest.fn();
    const { getByTestId } = render(
      <Link href="/page" disabled={true} tooltip="Reason" onKeyDown={onKeyDown}>
        Click on Link
      </Link>
    );
    fireEvent.keyDown(getByTestId('DesignSystem-Link'), { key: 'Enter' });
    expect(onKeyDown).toHaveBeenCalledTimes(1);
  });
});

describe('Link component info icon accessibility', () => {
  it('info icon has aria-hidden set to true', () => {
    const { getByTestId } = render(
      <Link disabled={true} tooltip="Disabled reason">
        Click on Link
      </Link>
    );
    expect(getByTestId('DesignSystem-Link--Info-Icon')).toHaveAttribute('aria-hidden', 'true');
  });

  it('has tabIndex 0 when disabled with tooltip to allow keyboard access', () => {
    const { getByTestId } = render(
      <Link disabled={true} tooltip="Disabled reason">
        Click on Link
      </Link>
    );
    expect(getByTestId('DesignSystem-Link')).toHaveAttribute('tabindex', '0');
  });

  it('has tabIndex -1 when disabled without tooltip', () => {
    const { getByTestId } = render(<Link disabled={true}>Click on Link</Link>);
    expect(getByTestId('DesignSystem-Link')).toHaveAttribute('tabindex', '-1');
  });
});

describe('Link component a11y', () => {
  it('has no detectable a11y violations', async () => {
    const { container } = render(<Link>Click on Link</Link>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
