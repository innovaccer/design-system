import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { axe } from '@/utils/testAxe';
import { Button } from '@/index';
import { ButtonProps as Props } from '@/index.type';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { MakeRequired } from '@/utils/types';

const BooleanValue = [true, false];
const buttonType = ['button', 'submit', 'reset'];
const icon = 'events';
const iconAlign = ['left', 'right'];
const sizes: Props['size'][] = ['tiny', 'regular', 'large'];
const appearance = ['basic', 'primary', 'alert', 'transparent'];
const sizeMapping: Record<MakeRequired<Props['size']>, number> = {
  tiny: 12,
  regular: 16,
  large: 20,
};

describe('Button component', () => {
  const mapper: Record<string, any> = {
    type: valueHelper(buttonType, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Button {...attr}>Button</Button>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Button component', () => {
  const mapper: Record<string, any> = {
    appearance: valueHelper(appearance, { required: true, iterate: true }),
    expanded: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Button {...attr}>Button</Button>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Button component', () => {
  const mapper: Record<string, any> = {
    size: valueHelper(sizes, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Button {...attr}>Button</Button>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Button component', () => {
  const mapper: Record<string, any> = {
    size: valueHelper(sizes, { required: true, iterate: true }),
    icon: valueHelper(icon, { required: true }),
    iconAlign: valueHelper(iconAlign, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Button {...attr}>Button</Button>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Button component', () => {
  const mapper: Record<string, any> = {
    size: valueHelper(sizes, { required: true, iterate: true }),
    icon: valueHelper(icon, { required: true }),
    largeIcon: valueHelper(true, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Button {...attr}>Button</Button>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Button component', () => {
  const mapper: Record<string, any> = {
    appearance: valueHelper(appearance, { required: true, iterate: true }),
    disabled: valueHelper(true, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Button {...attr}>Button</Button>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Button component', () => {
  const mapper: Record<string, any> = {
    appearance: valueHelper(appearance, { required: true, iterate: true }),
    selected: valueHelper(true, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Button {...attr}>Button</Button>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Button component', () => {
  const mapper: Record<string, any> = {
    appearance: valueHelper(appearance, { required: true, iterate: true }),
    loading: valueHelper(true, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Button {...attr}>Button</Button>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Button component with no children', () => {
  const mapper: Record<string, any> = {
    appearance: valueHelper(appearance, { required: true, iterate: true }),
    loading: valueHelper(true, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Button {...attr} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Button component with icon', () => {
  it('renders icon and label inside button', () => {
    const { getByTestId } = render(<Button icon="events">Button</Button>);
    expect(getByTestId('DesignSystem-Button--Icon').textContent).toMatch('events');
  });

  sizes
    .filter((s) => s !== 'tiny')
    .forEach((s = 'regular') => {
      it(`renders icon of fontSize = ${sizeMapping[s]} for button size = ${s}`, () => {
        const { getByTestId } = render(
          <Button icon="events" size={s}>
            Button
          </Button>
        );
        expect(getByTestId('DesignSystem-Button--Icon')).toHaveStyle(`fontSize: ${sizeMapping[s]}px`);
      });

      it(`renders large icon inside button size = ${s}`, () => {
        const { getByTestId } = render(<Button icon="events" size={s} largeIcon={true} />);
        expect(getByTestId('DesignSystem-Button--Icon')).toHaveStyle(`fontSize: ${sizeMapping[s] + 4}px`);
      });

      it('does not render large icon when button has label', () => {
        const { getByTestId } = render(
          <Button icon="events" size={s} largeIcon={true}>
            Button
          </Button>
        );
        expect(getByTestId('DesignSystem-Button--Icon')).toHaveStyle(`fontSize: ${sizeMapping[s]}px`);
      });
    });

  it('renders icon of fontSize = 14px for button size = tiny (custom size)', () => {
    const { getByTestId } = render(
      <Button icon="events" size="tiny">
        Button
      </Button>
    );
    expect(getByTestId('DesignSystem-Button--Icon')).toHaveStyle('fontSize: 14px');
  });

  it('renders icon of fontSize = 14px for tiny icon-only button (overrides sizeMapping)', () => {
    const { getByTestId } = render(<Button icon="events" size="tiny" />);
    expect(getByTestId('DesignSystem-Button--Icon')).toHaveStyle('fontSize: 14px');
  });

  it('renders icon of fontSize = 14px for tiny button with largeIcon=true and no children (overrides largeIcon logic)', () => {
    const { getByTestId } = render(<Button icon="events" size="tiny" largeIcon={true} />);
    expect(getByTestId('DesignSystem-Button--Icon')).toHaveStyle('fontSize: 14px');
  });

  it('renders icon of fontSize = 14px for tiny button with largeIcon=true and children (overrides both largeIcon and sizeMapping)', () => {
    const { getByTestId } = render(
      <Button icon="events" size="tiny" largeIcon={true}>
        Button
      </Button>
    );
    expect(getByTestId('DesignSystem-Button--Icon')).toHaveStyle('fontSize: 14px');
  });

  describe('Button with spinner', () => {
    it('Should have Button-spinner and Button--regularSquare class when loading state and no children', () => {
      const { getByTestId } = render(<Button loading={true} />);
      expect(getByTestId('DesignSystem-Button')).toHaveClass('Button--regularSquare');
    });

    it('Should have Button-spinner class when loading state', () => {
      const { getByTestId } = render(<Button loading={true}>Button</Button>);
      expect(getByTestId('DesignSystem-Button--Spinner')).toHaveClass('Button-spinner');
    });

    it('Should have Spinner--xsmall class when loading state for button size=tiny', () => {
      const { getByTestId } = render(
        <Button loading={true} size="tiny">
          Button
        </Button>
      );
      expect(getByTestId('DesignSystem-Button--Spinner')).toHaveClass('Spinner--xsmall');
    });

    it('Should have Spinner--xsmall class when loading state for button size=regular', () => {
      const { getByTestId } = render(
        <Button loading={true} size="regular">
          Button
        </Button>
      );
      expect(getByTestId('DesignSystem-Button--Spinner')).toHaveClass('Spinner--xsmall');
    });

    it('Should have Spinner--small class when loading state for button size=large', () => {
      const { getByTestId } = render(
        <Button loading={true} size="large">
          Button
        </Button>
      );
      expect(getByTestId('DesignSystem-Button--Spinner')).toHaveClass('Spinner--small');
    });

    it('Should have Spinner--xsmall class when loading state for icon button', () => {
      const { getByTestId } = render(<Button loading={true} icon="places" />);
      expect(getByTestId('DesignSystem-Button--Spinner')).toHaveClass('Spinner--xsmall');
    });

    it('Should have Spinner--xsmall class when loading state for large icon button', () => {
      const { getByTestId } = render(<Button loading={true} icon="places" size="large" />);
      expect(getByTestId('DesignSystem-Button--Spinner')).toHaveClass('Spinner--xsmall');
    });

    it('Should have no Button-spinner class when no loading state', () => {
      const { getByTestId } = render(<Button loading={false}>Button</Button>);
      expect(getByTestId('DesignSystem-Button')).not.toHaveClass('Button-spinner');
    });

    it('Should have Button-text--hidden class when loading', () => {
      const { getByTestId } = render(<Button loading={true}>Button</Button>);
      expect(getByTestId('DesignSystem-Button').children[1]).toHaveClass('Button-text--hidden');
    });
  });
});

describe('Button component with Tooltip', () => {
  it('check for tooltip attribute', () => {
    const { getByTestId } = render(<Button appearance="basic" icon="keyboard_arrow_right" tooltip="Next in rank" />);

    fireEvent.mouseEnter(getByTestId('DesignSystem-Button'));
    expect(getByTestId('DesignSystem-Popover')).toBeInTheDocument();
  });

  it('check for tooltip when children is given', () => {
    render(
      <Button appearance="basic" icon="keyboard_arrow_right" tooltip="Next in rank">
        Click Me
      </Button>
    );

    const TooltipComponent = screen.queryByText('DesignSystem-Popover');
    expect(TooltipComponent).not.toBeInTheDocument();
  });

  it('check for tooltip when icon is not given', () => {
    render(<Button appearance="basic" tooltip="Next in rank" />);
    const TooltipComponent = screen.queryByText('DesignSystem-Popover');
    expect(TooltipComponent).not.toBeInTheDocument();
  });
});

describe('Button component with Icon', () => {
  it('check for icon classes with align:left', () => {
    const { getByTestId } = render(
      <Button appearance="basic" icon="keyboard_arrow_right" tooltip="Next in rank">
        Click Me
      </Button>
    );

    expect(getByTestId('DesignSystem-Button--Icon-Wrapper')).toHaveClass('Button-regularIcon--left');
  });

  it('check for icon classes with align:right', () => {
    const { getByTestId } = render(
      <Button appearance="basic" icon="keyboard_arrow_right" iconAlign="right" tooltip="Next in rank">
        Click Me
      </Button>
    );

    expect(getByTestId('DesignSystem-Button--Icon-Wrapper')).toHaveClass('Button-regularIcon--right');
  });

  it('check for icon classes with align:left without children', () => {
    const { getByTestId } = render(<Button appearance="basic" icon="keyboard_arrow_right" tooltip="Next in rank" />);

    expect(getByTestId('DesignSystem-Button--Icon-Wrapper')).not.toHaveClass('Button-regularIcon--left');
  });

  it('check for icon classes with align:right without children', () => {
    const { getByTestId } = render(<Button appearance="basic" icon="keyboard_arrow_right" tooltip="Next in rank" />);

    expect(getByTestId('DesignSystem-Button--Icon-Wrapper')).not.toHaveClass('Button-regularIcon--right');
  });
});

describe('Button component with styleType prop', () => {
  describe('Outlined buttons - CSS class generation', () => {
    it('should apply outlined class for basic appearance', () => {
      const { getByTestId } = render(
        <Button appearance="basic" styleType="outlined">
          Button
        </Button>
      );
      expect(getByTestId('DesignSystem-Button')).toHaveClass('Button-outlined--basic');
    });

    it('should apply outlined class for primary appearance', () => {
      const { getByTestId } = render(
        <Button appearance="primary" styleType="outlined">
          Button
        </Button>
      );
      expect(getByTestId('DesignSystem-Button')).toHaveClass('Button-outlined--primary');
    });

    it('should apply outlined class for alert appearance', () => {
      const { getByTestId } = render(
        <Button appearance="alert" styleType="outlined">
          Button
        </Button>
      );
      expect(getByTestId('DesignSystem-Button')).toHaveClass('Button-outlined--alert');
    });

    it('should NOT apply outlined class for transparent appearance (restriction)', () => {
      const { getByTestId } = render(
        <Button appearance="transparent" styleType="outlined">
          Button
        </Button>
      );
      expect(getByTestId('DesignSystem-Button')).toHaveClass('Button--transparent');
      expect(getByTestId('DesignSystem-Button')).not.toHaveClass('Button-outlined--transparent');
    });
  });

  describe('Filled buttons - backward compatibility', () => {
    it('should apply filled class when styleType is not provided (default)', () => {
      const { getByTestId } = render(<Button appearance="primary">Button</Button>);
      expect(getByTestId('DesignSystem-Button')).toHaveClass('Button--primary');
    });

    it('should apply filled class when styleType is explicitly filled', () => {
      const { getByTestId } = render(
        <Button appearance="primary" styleType="filled">
          Button
        </Button>
      );
      expect(getByTestId('DesignSystem-Button')).toHaveClass('Button--primary');
    });
  });

  describe('Selected state with styleType', () => {
    it('should apply outlined selected class for basic outlined button', () => {
      const { getByTestId } = render(
        <Button appearance="basic" styleType="outlined" selected={true}>
          Button
        </Button>
      );
      expect(getByTestId('DesignSystem-Button')).toHaveClass('Button-outlined--selected');
    });

    it('should apply filled selected class for basic filled button', () => {
      const { getByTestId } = render(
        <Button appearance="basic" selected={true}>
          Button
        </Button>
      );
      expect(getByTestId('DesignSystem-Button')).toHaveClass('Button--selected');
    });

    it('should apply filled selected class for transparent button (cannot be outlined)', () => {
      const { getByTestId } = render(
        <Button appearance="transparent" styleType="outlined" selected={true}>
          Button
        </Button>
      );
      expect(getByTestId('DesignSystem-Button')).toHaveClass('Button--selected');
      expect(getByTestId('DesignSystem-Button')).not.toHaveClass('Button-outlined--selected');
    });

    it('should NOT apply selected class for non-basic/transparent appearances', () => {
      const { getByTestId } = render(
        <Button appearance="primary" styleType="outlined" selected={true}>
          Button
        </Button>
      );
      expect(getByTestId('DesignSystem-Button')).not.toHaveClass('Button--selected');
      expect(getByTestId('DesignSystem-Button')).not.toHaveClass('Button-outlined--selected');
    });
  });

  describe('Spinner appearance with styleType', () => {
    it('should use secondary spinner for outlined basic button', () => {
      const { getByTestId } = render(
        <Button appearance="basic" styleType="outlined" loading={true}>
          Button
        </Button>
      );
      const spinner = getByTestId('DesignSystem-Button--Spinner');
      const circle = spinner.querySelector('circle');
      expect(circle).toHaveClass('Circle--secondary');
    });

    it('should use alert spinner for outlined alert button', () => {
      const { getByTestId } = render(
        <Button appearance="alert" styleType="outlined" loading={true}>
          Button
        </Button>
      );
      const spinner = getByTestId('DesignSystem-Button--Spinner');
      const circle = spinner.querySelector('circle');
      expect(circle).toHaveClass('Circle--alert');
    });

    it('should use primary spinner for outlined primary button', () => {
      const { getByTestId } = render(
        <Button appearance="primary" styleType="outlined" loading={true}>
          Button
        </Button>
      );
      const spinner = getByTestId('DesignSystem-Button--Spinner');
      const circle = spinner.querySelector('circle');
      expect(circle).toHaveClass('Circle--primary');
    });

    it('should use white spinner for filled primary button (backward compatibility)', () => {
      const { getByTestId } = render(
        <Button appearance="primary" loading={true}>
          Button
        </Button>
      );
      const spinner = getByTestId('DesignSystem-Button--Spinner');
      const circle = spinner.querySelector('circle');
      expect(circle).toHaveClass('Circle--white');
    });
  });
});

describe('Button component a11y', () => {
  it('has no detectable a11y violations', async () => {
    const { container } = render(<Button>Button</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Button disabled info icon', () => {
  const tooltip = 'Please fill all required fields';

  describe('rendering conditions', () => {
    it('renders info icon when disabled and tooltip are provided', () => {
      const { getByTestId } = render(
        <Button disabled tooltip={tooltip}>
          Button
        </Button>
      );
      expect(getByTestId('DesignSystem-Button--Info-Icon')).toBeInTheDocument();
    });

    it('does not render info icon when not disabled', () => {
      const { queryByTestId } = render(<Button tooltip={tooltip}>Button</Button>);
      expect(queryByTestId('DesignSystem-Button--Info-Icon')).not.toBeInTheDocument();
    });

    it('does not render info icon when disabled but no tooltip', () => {
      const { queryByTestId } = render(<Button disabled>Button</Button>);
      expect(queryByTestId('DesignSystem-Button--Info-Icon')).not.toBeInTheDocument();
    });

    it('does not render info icon when disabled, tooltip and loading are all true', () => {
      const { queryByTestId } = render(
        <Button disabled loading tooltip={tooltip}>
          Button
        </Button>
      );
      expect(queryByTestId('DesignSystem-Button--Info-Icon')).not.toBeInTheDocument();
    });

    it('renders info icon for icon-only button (icon without children)', () => {
      const { getByTestId } = render(<Button icon="events" disabled tooltip={tooltip} />);
      expect(getByTestId('DesignSystem-Button--Info-Icon')).toBeInTheDocument();
    });
  });

  describe('info icon accessibility', () => {
    it('info icon has aria-hidden="true"', () => {
      const { getByTestId } = render(
        <Button disabled tooltip={tooltip}>
          Button
        </Button>
      );
      expect(getByTestId('DesignSystem-Button--Info-Icon')).toHaveAttribute('aria-hidden', 'true');
    });

    it('button has aria-disabled when disabled with tooltip', () => {
      const { getByTestId } = render(
        <Button disabled tooltip={tooltip}>
          Button
        </Button>
      );
      expect(getByTestId('DesignSystem-Button')).toHaveAttribute('aria-disabled', 'true');
    });

    it('button is not natively disabled when tooltip is provided (uses aria-disabled instead)', () => {
      const { getByTestId } = render(
        <Button disabled tooltip={tooltip}>
          Button
        </Button>
      );
      expect(getByTestId('DesignSystem-Button')).not.toBeDisabled();
    });

    it('button has aria-describedby pointing to the tooltip text', () => {
      const { getByTestId } = render(
        <Button disabled tooltip={tooltip}>
          Button
        </Button>
      );
      const button = getByTestId('DesignSystem-Button');
      const describedById = button.getAttribute('aria-describedby');
      expect(describedById).toBeTruthy();
      expect(document.getElementById(describedById as string)?.textContent).toBe(tooltip);
    });
  });

  describe('info icon CSS classes — filled appearances', () => {
    const filledAppearances: Props['appearance'][] = ['basic', 'primary', 'alert', 'transparent'];

    filledAppearances.forEach((app) => {
      it(`applies Button-infoIcon--${app} class for ${app} filled button`, () => {
        const { getByTestId } = render(
          <Button disabled tooltip={tooltip} appearance={app}>
            Button
          </Button>
        );
        expect(getByTestId('DesignSystem-Button--Info-Icon')).toHaveClass(`Button-infoIcon--${app}`);
      });

      it(`applies Button-infoIconWrapper--${app} class for ${app} filled button`, () => {
        const { getByTestId } = render(
          <Button disabled tooltip={tooltip} appearance={app}>
            Button
          </Button>
        );
        const wrapper = getByTestId('DesignSystem-Button--Info-Icon').parentElement;
        expect(wrapper).toHaveClass(`Button-infoIconWrapper--${app}`);
      });
    });
  });

  describe('info icon CSS classes — outlined appearances', () => {
    const outlinedAppearances: Props['appearance'][] = ['basic', 'primary', 'alert'];

    outlinedAppearances.forEach((app) => {
      it(`applies Button-infoIcon-outlined--${app} class for ${app} outlined button`, () => {
        const { getByTestId } = render(
          <Button disabled tooltip={tooltip} appearance={app} styleType="outlined">
            Button
          </Button>
        );
        expect(getByTestId('DesignSystem-Button--Info-Icon')).toHaveClass(`Button-infoIcon-outlined--${app}`);
      });

      it(`applies Button-infoIconWrapper-outlined--${app} class for ${app} outlined button`, () => {
        const { getByTestId } = render(
          <Button disabled tooltip={tooltip} appearance={app} styleType="outlined">
            Button
          </Button>
        );
        const wrapper = getByTestId('DesignSystem-Button--Info-Icon').parentElement;
        expect(wrapper).toHaveClass(`Button-infoIconWrapper-outlined--${app}`);
      });

      it(`does not apply filled class Button-infoIcon--${app} for ${app} outlined button`, () => {
        const { getByTestId } = render(
          <Button disabled tooltip={tooltip} appearance={app} styleType="outlined">
            Button
          </Button>
        );
        expect(getByTestId('DesignSystem-Button--Info-Icon')).not.toHaveClass(`Button-infoIcon--${app}`);
      });
    });
  });

  describe('info icon CSS classes — icon-only buttons', () => {
    it('applies Button-infoIconWrapper--iconOnly class when there are no children', () => {
      const { getByTestId } = render(<Button icon="events" disabled tooltip={tooltip} />);
      const wrapper = getByTestId('DesignSystem-Button--Info-Icon').parentElement;
      expect(wrapper).toHaveClass('Button-infoIconWrapper--iconOnly');
    });

    it('does not apply Button-infoIconWrapper--iconOnly class when button has children', () => {
      const { getByTestId } = render(
        <Button disabled tooltip={tooltip}>
          Button
        </Button>
      );
      const wrapper = getByTestId('DesignSystem-Button--Info-Icon').parentElement;
      expect(wrapper).not.toHaveClass('Button-infoIconWrapper--iconOnly');
    });

    it('applies Button-infoIconWrapper--iconOnly-transparent class for transparent icon-only button', () => {
      const { getByTestId } = render(<Button icon="events" disabled tooltip={tooltip} appearance="transparent" />);
      const wrapper = getByTestId('DesignSystem-Button--Info-Icon').parentElement;
      expect(wrapper).toHaveClass('Button-infoIconWrapper--iconOnly-transparent');
    });

    it('does not apply Button-infoIconWrapper--iconOnly-transparent for non-transparent icon-only button', () => {
      const { getByTestId } = render(<Button icon="events" disabled tooltip={tooltip} appearance="primary" />);
      const wrapper = getByTestId('DesignSystem-Button--Info-Icon').parentElement;
      expect(wrapper).not.toHaveClass('Button-infoIconWrapper--iconOnly-transparent');
    });
  });

  describe('keyboard interaction when disabled with tooltip', () => {
    it('prevents click handler from firing on Enter key', () => {
      const onClick = jest.fn();
      const { getByTestId } = render(
        <Button disabled tooltip={tooltip} onClick={onClick}>
          Button
        </Button>
      );
      fireEvent.keyDown(getByTestId('DesignSystem-Button'), { key: 'Enter' });
      expect(onClick).not.toHaveBeenCalled();
    });

    it('prevents click handler from firing on Space key', () => {
      const onClick = jest.fn();
      const { getByTestId } = render(
        <Button disabled tooltip={tooltip} onClick={onClick}>
          Button
        </Button>
      );
      fireEvent.keyDown(getByTestId('DesignSystem-Button'), { key: ' ' });
      expect(onClick).not.toHaveBeenCalled();
    });

    it('prevents click handler from firing on mouse click', () => {
      const onClick = jest.fn();
      const { getByTestId } = render(
        <Button disabled tooltip={tooltip} onClick={onClick}>
          Button
        </Button>
      );
      fireEvent.click(getByTestId('DesignSystem-Button'));
      expect(onClick).not.toHaveBeenCalled();
    });
  });
});
