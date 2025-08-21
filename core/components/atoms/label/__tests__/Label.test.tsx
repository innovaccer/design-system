import * as React from 'react';
import { render } from '@testing-library/react';
import Label, { LabelProps as Props } from '../Label';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const BooleanValue = [true, false];
const StringValue = ['sample info', 'tooltip text', 'long information text'];

describe('Label component', () => {
  const mapper = {
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Label>{'Label'}</Label>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Label component', () => {
  const mapper = {
    required: valueHelper(BooleanValue, { required: true, iterate: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Label>{'Label'}</Label>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Label component - info prop tests', () => {
  const mapper = {
    info: valueHelper(StringValue, { required: true, iterate: true }),
  };
  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Label {...attr}>{'Label'}</Label>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Label component', () => {
  it('renders children', () => {
    const { getByTestId } = render(<Label>Label</Label>);
    expect(getByTestId('DesignSystem-Label').textContent).toMatch('Label');
  });

  it('renders label element', () => {
    const { getByTestId } = render(<Label>Label</Label>);
    expect(getByTestId('DesignSystem-Label--Text').tagName).toMatch('LABEL');
  });
});

describe('Label Component with overwrite class', () => {
  it('overwrite Label class', () => {
    const { getByTestId } = render(<Label className="LabelClass">Label</Label>);
    expect(getByTestId('DesignSystem-Label')).toHaveClass('LabelClass');
  });
});

describe('Label component with prop: withInput', () => {
  it('should have Label--withInput class when withInput={true}', () => {
    const { getByTestId } = render(<Label withInput={true}>Label</Label>);
    expect(getByTestId('DesignSystem-Label')).toHaveClass('Label--withInput');
  });
});

describe('Label component with prop: disabled', () => {
  it('should be disabled', () => {
    const { getByTestId } = render(<Label disabled={true}>Label</Label>);
    expect(getByTestId('DesignSystem-Label').firstElementChild).toHaveClass('Label--disabled');
  });
});

describe('Label component with prop: required', () => {
  it('renders required indicator', () => {
    const { getByTestId } = render(<Label required={true}>Label</Label>);
    expect(getByTestId('DesignSystem-Label--RequiredIndicator')).toBeInTheDocument();
  });
});

describe('Label component with prop: optional', () => {
  it('renders optional label', () => {
    const { getByTestId } = render(<Label optional={true}>Label</Label>);
    expect(getByTestId('DesignSystem-Label--OptionalText')).toBeInTheDocument();
  });
});

describe('Label component with prop: info', () => {
  it('renders info icon when info prop is provided', () => {
    const { getByTestId } = render(<Label info="sample info">Label</Label>);
    expect(getByTestId('DesignSystem-Label--Info')).toBeInTheDocument();
  });

  // it('renders info tooltip', () => {
  //   const { getByTestId } = render(<Label info="sample info">Label</Label>);

  //   fireEvent.mouseEnter(getByTestId('DesignSystem-Label--Info'));
  //   expect(getByTestId('DesignSystem-Popover')).toBeInTheDocument();
  //   expect(getByTestId('DesignSystem-Popover')).toHaveTextContent('sample info');
  // });
//   it('does not render info icon when info prop is not provided', () => {
//     const { queryByTestId } = render(<Label>Label</Label>);
//     expect(queryByTestId('DesignSystem-Label--Info')).not.toBeInTheDocument();
//   });

//   it('does not render info icon when info prop is empty string', () => {
//     const { queryByTestId } = render(<Label info="">Label</Label>);
//     expect(queryByTestId('DesignSystem-Label--Info')).not.toBeInTheDocument();
//   });

//   it('renders info tooltip with correct content', () => {
//     const { getByTestId } = render(<Label info="sample info">Label</Label>);

//     fireEvent.mouseEnter(getByTestId('DesignSystem-Label--Info'));
//     expect(getByTestId('DesignSystem-Popover')).toBeInTheDocument();
//     expect(getByTestId('DesignSystem-Popover')).toHaveTextContent('sample info');
//   });

//   it('renders info tooltip with special characters', () => {
//     const specialText = 'Info with special chars: @#$%^&*()';
//     const { getByTestId } = render(<Label info={specialText}>Label</Label>);

//     fireEvent.mouseEnter(getByTestId('DesignSystem-Label--Info'));
//     expect(getByTestId('DesignSystem-Popover')).toHaveTextContent(specialText);
//   });

//   it('renders info tooltip with long text', () => {
//     const longText =
//       'This is a very long information text that should still be displayed correctly in the tooltip even when it contains multiple words and sentences.';
//     const { getByTestId } = render(<Label info={longText}>Label</Label>);

//     fireEvent.mouseEnter(getByTestId('DesignSystem-Label--Info'));
//     expect(getByTestId('DesignSystem-Popover')).toHaveTextContent(longText);
//   });

//   it('renders info tooltip with HTML entities', () => {
//     const htmlText = 'Use &lt; and &gt; for comparison';
//     const { getByTestId } = render(<Label info={htmlText}>Label</Label>);

//     fireEvent.mouseEnter(getByTestId('DesignSystem-Label--Info'));
//     expect(getByTestId('DesignSystem-Popover')).toHaveTextContent(htmlText);
//   });

//   it('info icon has correct attributes', () => {
//     const { getByTestId } = render(<Label info="sample info">Label</Label>);
//     const infoIcon = getByTestId('DesignSystem-Label--Info');

//     expect(infoIcon).toHaveAttribute('data-test', 'DesignSystem-Label--Info');
//     expect(infoIcon.tagName).toBe('I');
//   });

//   it('tooltip appears on mouseEnter and disappears on mouseLeave', () => {
//     const { getByTestId, queryByTestId } = render(<Label info="sample info">Label</Label>);
//     const infoIcon = getByTestId('DesignSystem-Label--Info');

//     expect(queryByTestId('DesignSystem-Popover')).not.toBeInTheDocument();

//     fireEvent.mouseEnter(infoIcon);
//     expect(getByTestId('DesignSystem-Popover')).toBeInTheDocument();

//     fireEvent.mouseLeave(infoIcon);
//   });
// });
});

describe('Label component with info prop combined with other props', () => {
  it('renders info icon with required prop', () => {
    const { getByTestId } = render(
      <Label info="sample info" required>
        Required Label
      </Label>
    );

    expect(getByTestId('DesignSystem-Label--Info')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Label--RequiredIndicator')).toBeInTheDocument();
  });

  it('renders info icon with optional prop', () => {
    const { getByTestId } = render(
      <Label info="sample info" optional>
        Optional Label
      </Label>
    );

    expect(getByTestId('DesignSystem-Label--Info')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Label--OptionalText')).toBeInTheDocument();
  });

  it('renders info icon with disabled prop', () => {
    const { getByTestId } = render(
      <Label info="sample info" disabled>
        Disabled Label
      </Label>
    );

    expect(getByTestId('DesignSystem-Label--Info')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Label').firstElementChild).toHaveClass('Label--disabled');
  });

  it('renders info icon with small size', () => {
    const { getByTestId } = render(
      <Label info="sample info" size="small">
        Small Label
      </Label>
    );

    expect(getByTestId('DesignSystem-Label--Info')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Label').firstElementChild).toHaveClass('Label--small');
  });

  it('renders info icon with withInput prop', () => {
    const { getByTestId } = render(
      <Label info="sample info" withInput>
        Label with Input
      </Label>
    );

    expect(getByTestId('DesignSystem-Label--Info')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Label')).toHaveClass('Label--withInput');
  });

  it('renders all elements in correct order when all props are provided', () => {
    const { getByTestId } = render(
      <Label info="sample info" required size="small" disabled>
        Complex Label
      </Label>
    );

    const labelElement = getByTestId('DesignSystem-Label--Text');
    expect(labelElement).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Label--RequiredIndicator')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Label--Info')).toBeInTheDocument();
  });
});

describe('Label component with prop: size', () => {
  it('applies small size class when size="small"', () => {
    const { getByTestId } = render(<Label size="small">Small Label</Label>);
    expect(getByTestId('DesignSystem-Label').firstElementChild).toHaveClass('Label--small');
  });

  it('does not apply small size class when size="regular"', () => {
    const { getByTestId } = render(<Label size="regular">Regular Label</Label>);
    expect(getByTestId('DesignSystem-Label').firstElementChild).not.toHaveClass('Label--small');
  });

  it('uses regular size by default when no size prop provided', () => {
    const { getByTestId } = render(<Label>Default Label</Label>);
    expect(getByTestId('DesignSystem-Label').firstElementChild).not.toHaveClass('Label--small');
  });

  it('applies small size class to optional text when size="small" and optional=true', () => {
    const { getByTestId } = render(
      <Label size="small" optional>
        Small Optional Label
      </Label>
    );
    expect(getByTestId('DesignSystem-Label').firstElementChild).toHaveClass('Label--small');
    expect(getByTestId('DesignSystem-Label--OptionalText')).toHaveClass('Label-optionalText--small');
  });

  it('does not apply small size class to optional text when size="regular" and optional=true', () => {
    const { getByTestId } = render(
      <Label size="regular" optional>
        Regular Optional Label
      </Label>
    );
    expect(getByTestId('DesignSystem-Label').firstElementChild).not.toHaveClass('Label--small');
    expect(getByTestId('DesignSystem-Label--OptionalText')).not.toHaveClass('Label-optionalText--small');
  });

  it('applies correct size classes with required prop', () => {
    const { getByTestId } = render(
      <Label size="small" required>
        Small Required Label
      </Label>
    );
    expect(getByTestId('DesignSystem-Label').firstElementChild).toHaveClass('Label--small');
    expect(getByTestId('DesignSystem-Label--RequiredIndicator')).toBeInTheDocument();
  });

  it('applies correct size classes with disabled prop', () => {
    const { getByTestId } = render(
      <Label size="small" disabled>
        Small Disabled Label
      </Label>
    );
    const labelText = getByTestId('DesignSystem-Label').firstElementChild;
    expect(labelText).toHaveClass('Label--small');
    expect(labelText).toHaveClass('Label--disabled');
  });

  it('applies correct size classes with withInput prop', () => {
    const { getByTestId } = render(
      <Label size="small" withInput>
        Small Label with Input
      </Label>
    );
    expect(getByTestId('DesignSystem-Label')).toHaveClass('Label--withInput');
    expect(getByTestId('DesignSystem-Label').firstElementChild).toHaveClass('Label--small');
  });

  it('applies all size classes correctly when multiple props are combined', () => {
    const { getByTestId } = render(
      <Label size="small" optional disabled withInput>
        Complex Small Label
      </Label>
    );
    const labelText = getByTestId('DesignSystem-Label').firstElementChild;
    expect(labelText).toHaveClass('Label--small');
    expect(labelText).toHaveClass('Label--disabled');
    expect(getByTestId('DesignSystem-Label')).toHaveClass('Label--withInput');
    expect(getByTestId('DesignSystem-Label--OptionalText')).toHaveClass('Label-optionalText--small');
  });

  it('applies size classes correctly with required prop (no optional text when required)', () => {
    const { getByTestId, queryByTestId } = render(
      <Label size="small" required disabled withInput>
        Complex Required Label
      </Label>
    );
    const labelText = getByTestId('DesignSystem-Label').firstElementChild;
    expect(labelText).toHaveClass('Label--small');
    expect(labelText).toHaveClass('Label--disabled');
    expect(getByTestId('DesignSystem-Label')).toHaveClass('Label--withInput');
    expect(getByTestId('DesignSystem-Label--RequiredIndicator')).toBeInTheDocument();
    expect(queryByTestId('DesignSystem-Label--OptionalText')).not.toBeInTheDocument();
  });
});

// describe('Label component - size prop snapshot tests', () => {
//   const sizeValues: ('small' | 'regular' | undefined)[] = ['small', 'regular', undefined];

//   sizeValues.forEach((size) => {
//     it(`renders correctly with size="${size || 'default'}"`, () => {
//       const { baseElement } = render(
//         <Label size={size}>{size ? `${size.charAt(0).toUpperCase() + size.slice(1)} Label` : 'Default Label'}</Label>
//       );
//       expect(baseElement).toMatchSnapshot();
//     });
//   });

//   it('renders correctly with size="small" and optional', () => {
//     const { baseElement } = render(
//       <Label size="small" optional>
//         Small Optional Label
//       </Label>
//     );
//     expect(baseElement).toMatchSnapshot();
//   });

//   it('renders correctly with size="small" and required', () => {
//     const { baseElement } = render(
//       <Label size="small" required>
//         Small Required Label
//       </Label>
//     );
//     expect(baseElement).toMatchSnapshot();
//   });

//   it('renders correctly with size="small" and all props', () => {
//     const { baseElement } = render(
//       <Label size="small" required optional disabled withInput info="Small label info">
//         Complex Small Label
//       </Label>
//     );
//     expect(baseElement).toMatchSnapshot();
//   });
// });
