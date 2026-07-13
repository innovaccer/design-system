import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { axe } from '@/utils/testAxe';
import { LinkButton } from '@/index';
import { LinkButtonProps as Props } from '@/index.type';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { MakeRequired } from '@/utils/types';

const BooleanValue = [true, false];
const buttonType = ['button', 'submit', 'reset'];
const icon = 'events';
const iconAlign = ['left', 'right'];
const sizes: Props['size'][] = ['tiny', 'regular'];
const FunctionValue = jest.fn();
const sizeMapping: Record<MakeRequired<Props['size']>, number> = {
  tiny: 12,
  regular: 16,
};

describe('Link Button component snapshots', () => {
  const mapper: Record<string, any> = {
    type: valueHelper(buttonType, { required: true, iterate: true }),
    size: valueHelper(sizes, { required: true, iterate: true }),
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
    iconAlign: valueHelper(iconAlign, { required: true, iterate: true }),
    icon: valueHelper(icon, { required: true, iterate: false }),
    subtle: valueHelper(BooleanValue, { required: false, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<LinkButton {...attr}>Link Button</LinkButton>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Link Button component with icon', () => {
  it('renders icon and label inside button', () => {
    const { getByTestId } = render(<LinkButton icon="events">LinkButton</LinkButton>);
    expect(getByTestId('DesignSystem-LinkButton--Icon').textContent).toMatch('events');
    expect(getByTestId('DesignSystem-LinkButton')).toHaveClass('LinkButton--iconAlign-left');
  });

  it('check for icon alignment', () => {
    const { getByTestId } = render(
      <LinkButton icon="events" iconAlign="right">
        LinkButton
      </LinkButton>
    );
    expect(getByTestId('DesignSystem-LinkButton')).toHaveClass('LinkButton--iconAlign-right');
  });

  sizes.forEach((s = 'regular') => {
    it(`renders icon of fontSize = ${sizeMapping[s]} for LinkButton size = ${s}`, () => {
      const { getByTestId } = render(
        <LinkButton icon="events" size={s}>
          LinkButton
        </LinkButton>
      );
      expect(getByTestId('DesignSystem-LinkButton--Icon')).toHaveStyle(`fontSize: ${sizeMapping[s]}px`);
    });
  });
});

describe('Link Button component Event Handlers', () => {
  it('check for onClick event handler', () => {
    const { getByTestId } = render(<LinkButton onClick={FunctionValue}>LinkButton</LinkButton>);
    fireEvent.click(getByTestId('DesignSystem-LinkButton'));
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('check for onMouseEnter event handler', () => {
    jest.resetAllMocks();
    const { getByTestId } = render(<LinkButton onMouseEnter={FunctionValue}>LinkButton</LinkButton>);
    fireEvent.mouseEnter(getByTestId('DesignSystem-LinkButton'));
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('check for onMouseLeave event handler', () => {
    jest.resetAllMocks();
    const { getByTestId } = render(<LinkButton onMouseLeave={FunctionValue}>LinkButton</LinkButton>);
    fireEvent.mouseLeave(getByTestId('DesignSystem-LinkButton'));
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('check for onClick event handler when disabled', () => {
    jest.resetAllMocks();
    const { getByTestId } = render(
      <LinkButton onClick={FunctionValue} disabled={true}>
        LinkButton
      </LinkButton>
    );
    fireEvent.click(getByTestId('DesignSystem-LinkButton'));
    expect(FunctionValue).not.toHaveBeenCalled();
  });
});

describe('Link Button component accessibility', () => {
  it('uses icon name as aria-label for icon-only button', () => {
    const { getByTestId } = render(<LinkButton icon="events" />);
    expect(getByTestId('DesignSystem-LinkButton')).toHaveAttribute('aria-label', 'events');
  });

  it('uses explicit aria-label over icon name', () => {
    const { getByTestId } = render(<LinkButton icon="events" aria-label="View events" />);
    expect(getByTestId('DesignSystem-LinkButton')).toHaveAttribute('aria-label', 'View events');
  });

  it('does not add aria-label when children are present', () => {
    const { getByTestId } = render(<LinkButton icon="events">LinkButton</LinkButton>);
    expect(getByTestId('DesignSystem-LinkButton')).not.toHaveAttribute('aria-label');
  });
});

describe('Link Button component appearance', () => {
  it('check for subtle class in link button', () => {
    const { getByTestId } = render(<LinkButton subtle={true}>LinkButton</LinkButton>);
    expect(getByTestId('DesignSystem-LinkButton')).toHaveClass('LinkButton--subtle');
    expect(getByTestId('DesignSystem-LinkButton')).not.toHaveClass('LinkButton--default');
  });

  it('check for default class in link button', () => {
    const { getByTestId } = render(<LinkButton>LinkButton</LinkButton>);
    expect(getByTestId('DesignSystem-LinkButton')).not.toHaveClass('LinkButton--subtle');
    expect(getByTestId('DesignSystem-LinkButton')).toHaveClass('LinkButton--default');
  });
});

describe('LinkButton component a11y', () => {
  it('has no detectable a11y violations', async () => {
    const { container } = render(<LinkButton>LinkButton</LinkButton>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('LinkButton info icon (disabled + tooltip affordance)', () => {
  it('renders info icon when disabled and tooltip are both provided', () => {
    const { getByTestId } = render(
      <LinkButton disabled={true} tooltip="Not available">
        LinkButton
      </LinkButton>
    );
    expect(getByTestId('DesignSystem-LinkButton--Info-Icon')).toBeInTheDocument();
  });

  it('does not render info icon when disabled without tooltip', () => {
    const { queryByTestId } = render(<LinkButton disabled={true}>LinkButton</LinkButton>);
    expect(queryByTestId('DesignSystem-LinkButton--Info-Icon')).not.toBeInTheDocument();
  });

  it('does not render info icon when tooltip is provided without disabled', () => {
    const { queryByTestId } = render(<LinkButton tooltip="Info">LinkButton</LinkButton>);
    expect(queryByTestId('DesignSystem-LinkButton--Info-Icon')).not.toBeInTheDocument();
  });

  it('does not render info icon when neither disabled nor tooltip are set', () => {
    const { queryByTestId } = render(<LinkButton>LinkButton</LinkButton>);
    expect(queryByTestId('DesignSystem-LinkButton--Info-Icon')).not.toBeInTheDocument();
  });

  it('adds LinkButton-withInfo class to button when info icon is shown', () => {
    const { getByTestId } = render(
      <LinkButton disabled={true} tooltip="Not available">
        LinkButton
      </LinkButton>
    );
    expect(getByTestId('DesignSystem-LinkButton')).toHaveClass('LinkButton-withInfo');
  });

  it('does not add LinkButton-withInfo class when disabled without tooltip', () => {
    const { getByTestId } = render(<LinkButton disabled={true}>LinkButton</LinkButton>);
    expect(getByTestId('DesignSystem-LinkButton')).not.toHaveClass('LinkButton-withInfo');
  });

  it('info icon has aria-hidden="true"', () => {
    const { getByTestId } = render(
      <LinkButton disabled={true} tooltip="Not available">
        LinkButton
      </LinkButton>
    );
    expect(getByTestId('DesignSystem-LinkButton--Info-Icon')).toHaveAttribute('aria-hidden', 'true');
  });

  it('applies LinkButton-infoIcon--default class when not subtle', () => {
    const { getByTestId } = render(
      <LinkButton disabled={true} tooltip="Not available">
        LinkButton
      </LinkButton>
    );
    expect(getByTestId('DesignSystem-LinkButton--Info-Icon')).toHaveClass('LinkButton-infoIcon--default');
    expect(getByTestId('DesignSystem-LinkButton--Info-Icon')).not.toHaveClass('LinkButton-infoIcon--subtle');
  });

  it('applies LinkButton-infoIcon--subtle class when subtle', () => {
    const { getByTestId } = render(
      <LinkButton disabled={true} tooltip="Not available" subtle={true}>
        LinkButton
      </LinkButton>
    );
    expect(getByTestId('DesignSystem-LinkButton--Info-Icon')).toHaveClass('LinkButton-infoIcon--subtle');
    expect(getByTestId('DesignSystem-LinkButton--Info-Icon')).not.toHaveClass('LinkButton-infoIcon--default');
  });

  it('applies LinkButton-infoIconWrapper--withChildren class when children are present', () => {
    const { getByTestId } = render(
      <LinkButton disabled={true} tooltip="Not available">
        LinkButton
      </LinkButton>
    );
    const infoIcon = getByTestId('DesignSystem-LinkButton--Info-Icon');
    expect(infoIcon.closest('.LinkButton-infoIconWrapper')).toHaveClass('LinkButton-infoIconWrapper--withChildren');
  });

  it('applies LinkButton-infoIconWrapper--tiny class when size is tiny and children are present', () => {
    const { getByTestId } = render(
      <LinkButton disabled={true} tooltip="Not available" size="tiny">
        LinkButton
      </LinkButton>
    );
    const infoIcon = getByTestId('DesignSystem-LinkButton--Info-Icon');
    expect(infoIcon.closest('.LinkButton-infoIconWrapper')).toHaveClass('LinkButton-infoIconWrapper--tiny');
  });

  it('applies LinkButton-infoIconWrapper--iconOnly class for icon-only button', () => {
    const { getByTestId } = render(<LinkButton icon="events" disabled={true} tooltip="Not available" />);
    const infoIcon = getByTestId('DesignSystem-LinkButton--Info-Icon');
    expect(infoIcon.closest('.LinkButton-infoIconWrapper')).toHaveClass('LinkButton-infoIconWrapper--iconOnly');
  });

  it('applies LinkButton-infoIconWrapper--regularIcon class for regular icon-only button', () => {
    const { getByTestId } = render(<LinkButton icon="events" disabled={true} tooltip="Not available" size="regular" />);
    const infoIcon = getByTestId('DesignSystem-LinkButton--Info-Icon');
    expect(infoIcon.closest('.LinkButton-infoIconWrapper')).toHaveClass('LinkButton-infoIconWrapper--regularIcon');
  });

  it('applies LinkButton-infoIconWrapper--tinyIcon class for tiny icon-only button', () => {
    const { getByTestId } = render(<LinkButton icon="events" disabled={true} tooltip="Not available" size="tiny" />);
    const infoIcon = getByTestId('DesignSystem-LinkButton--Info-Icon');
    expect(infoIcon.closest('.LinkButton-infoIconWrapper')).toHaveClass('LinkButton-infoIconWrapper--tinyIcon');
  });
});

describe('LinkButton aria-disabled behavior (disabled + tooltip)', () => {
  it('sets aria-disabled="true" instead of native disabled when disabled and tooltip are provided', () => {
    const { getByTestId } = render(
      <LinkButton disabled={true} tooltip="Not available">
        LinkButton
      </LinkButton>
    );
    const btn = getByTestId('DesignSystem-LinkButton');
    expect(btn).toHaveAttribute('aria-disabled', 'true');
    expect(btn).not.toBeDisabled();
  });

  it('uses native disabled when disabled without tooltip', () => {
    const { getByTestId } = render(<LinkButton disabled={true}>LinkButton</LinkButton>);
    const btn = getByTestId('DesignSystem-LinkButton');
    expect(btn).toBeDisabled();
    expect(btn).not.toHaveAttribute('aria-disabled');
  });

  it('prevents onClick when aria-disabled is true', () => {
    jest.resetAllMocks();
    const { getByTestId } = render(
      <LinkButton onClick={FunctionValue} disabled={true} tooltip="Not available">
        LinkButton
      </LinkButton>
    );
    fireEvent.click(getByTestId('DesignSystem-LinkButton'));
    expect(FunctionValue).not.toHaveBeenCalled();
  });

  it('prevents Enter key action when aria-disabled is true', () => {
    jest.resetAllMocks();
    const { getByTestId } = render(
      <LinkButton onClick={FunctionValue} disabled={true} tooltip="Not available">
        LinkButton
      </LinkButton>
    );
    fireEvent.keyDown(getByTestId('DesignSystem-LinkButton'), { key: 'Enter' });
    expect(FunctionValue).not.toHaveBeenCalled();
  });

  it('prevents Space key action when aria-disabled is true', () => {
    jest.resetAllMocks();
    const { getByTestId } = render(
      <LinkButton onClick={FunctionValue} disabled={true} tooltip="Not available">
        LinkButton
      </LinkButton>
    );
    fireEvent.keyDown(getByTestId('DesignSystem-LinkButton'), { key: ' ' });
    expect(FunctionValue).not.toHaveBeenCalled();
  });

  it('does not set aria-disabled when only disabled (no tooltip)', () => {
    const { getByTestId } = render(<LinkButton disabled={true}>LinkButton</LinkButton>);
    expect(getByTestId('DesignSystem-LinkButton')).not.toHaveAttribute('aria-disabled');
  });

  it('changes submit type to button when aria-disabled is active', () => {
    const { getByTestId } = render(
      <LinkButton type="submit" disabled={true} tooltip="Not available">
        LinkButton
      </LinkButton>
    );
    expect(getByTestId('DesignSystem-LinkButton')).toHaveAttribute('type', 'button');
  });
});
