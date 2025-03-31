import * as React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Avatar, { AvatarProps as Props } from '../Avatar';
import { AccentAppearance, AvatarShape, AvatarSize } from '@/common.type';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const appearances: AccentAppearance[] = [
  'primary',
  'alert',
  'warning',
  'success',
  'accent1',
  'accent2',
  'accent3',
  'accent4',
];

const sizes: AvatarSize[] = ['regular', 'tiny'];

const shapes: AvatarShape[] = ['round', 'square'];
const booleanValues = [true, false];

const statusComponent = <div>status</div>;

describe('Avatar component', () => {
  const mapper = {
    appearance: valueHelper(appearances, { required: true, iterate: true }),
    disabled: valueHelper(booleanValues, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = render(<Avatar {...attr}>JD</Avatar>);
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Avatar component', () => {
  const mapper = {
    size: valueHelper(sizes, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = render(<Avatar {...attr}>JD</Avatar>);
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Avatar component', () => {
  const mapper = {
    shape: valueHelper(shapes, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = render(<Avatar {...attr}>JD</Avatar>);
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Avatar component', () => {
  it('renders initials when firstName,lastName,children are given', () => {
    const { getByTestId } = render(
      <Avatar firstName="Design" lastName="System">
        Hey
      </Avatar>
    );
    expect(getByTestId('DesignSystem-Avatar').textContent).toMatch('He');
  });

  it('renders initials when only firstName is given', () => {
    const { getByTestId } = render(<Avatar firstName="Design" />);
    expect(getByTestId('DesignSystem-Avatar').textContent).toMatch('D');
  });

  it('renders initials when only lastName is given', () => {
    const { getByTestId } = render(<Avatar lastName="System" />);
    expect(getByTestId('DesignSystem-Avatar').textContent).toMatch('S');
  });

  it('renders initials when only children is given', () => {
    const { getByTestId } = render(<Avatar>Design System</Avatar>);
    expect(getByTestId('DesignSystem-Avatar').textContent).toMatch('De');
  });

  it('renders initials when firstName and lastName are given', () => {
    const { getByTestId } = render(<Avatar firstName="Design" lastName="System" />);
    expect(getByTestId('DesignSystem-Avatar').textContent).toMatch('DS');
  });

  it('renders fallback icon when there is no children', () => {
    const { getByTestId } = render(<Avatar />);
    expect(getByTestId('DesignSystem-Avatar--Icon')).toBeInTheDocument();
  });
});

describe('Avatar component tagName', () => {
  it('renders tagName', () => {
    const { getByTestId } = render(<Avatar>Design System</Avatar>);
    expect(getByTestId('DesignSystem-Avatar').tagName).toMatch('SPAN');
  });
});

describe('Avatar Component with overwrite class', () => {
  it('overwrite Avatar class', () => {
    const { getByTestId } = render(<Avatar className="AvatarClass">{'Avatar'}</Avatar>);
    expect(getByTestId('DesignSystem-Avatar')).toHaveClass('AvatarClass');
  });
});

describe('Avatar component with prop:appearance', () => {
  appearances.forEach((color) => {
    it(`should have the Avatar--${color} class when appearance=${color} `, () => {
      const { getByTestId } = render(<Avatar appearance={color}>Design</Avatar>);
      expect(getByTestId('DesignSystem-Avatar')).toHaveClass(`Avatar--${color}`);
    });
  });
});

describe('Avatar component accessibility', () => {
  it('should have the Avatar-content class when appearance is secondary', () => {
    const { getByTestId } = render(<Avatar appearance="secondary">Design</Avatar>);
    expect(getByTestId('DesignSystem-Text')).toHaveClass('Avatar-content');
  });

  it('should not have the Avatar-content class when appearance is primary', () => {
    const { getByTestId } = render(<Avatar appearance="primary">Design</Avatar>);
    expect(getByTestId('DesignSystem-Text')).not.toHaveClass('Avatar-content');
  });
});

describe('Avatar component with prop:size', () => {
  it('should have the Avatar--regular class when size is regular', () => {
    const { getByTestId } = render(<Avatar>Design</Avatar>);
    expect(getByTestId('DesignSystem-Avatar')).toHaveClass('Avatar--regular');
  });

  it('should have the Avatar--tiny class when size is tiny', () => {
    const { getByTestId } = render(<Avatar size={'tiny'}>Design</Avatar>);
    expect(getByTestId('DesignSystem-Avatar')).toHaveClass('Avatar--tiny');
  });
});

describe('Avatar component with prop:shape', () => {
  it('should have the Avatar-square class when shape is square', () => {
    const { getByTestId } = render(<Avatar shape="square">Design</Avatar>);
    expect(getByTestId('DesignSystem-Avatar')).toHaveClass('Avatar--square');
  });

  it('should have the Avatar class when shape is round', () => {
    const { getByTestId } = render(<Avatar shape="round">Design</Avatar>);
    expect(getByTestId('DesignSystem-Avatar')).toHaveClass('Avatar');
  });

  it('should have the Avatar--tiny class when shape is square', () => {
    const { getByTestId } = render(
      <Avatar shape="square" size={'tiny'}>
        Design
      </Avatar>
    );
    expect(getByTestId('DesignSystem-AvatarWrapper')).toHaveClass('Avatar--tiny');
  });

  it('should have the Avatar--tiny class when shape is round', () => {
    const { getByTestId } = render(
      <Avatar shape="round" size={'tiny'}>
        Design
      </Avatar>
    );
    expect(getByTestId('DesignSystem-Avatar')).toHaveClass('Avatar--tiny');
  });
});

describe('Avatar component with prop:disabled', () => {
  it('should have the Avatar--disabled class when disabled is true', () => {
    const { getByTestId } = render(<Avatar disabled={true}>Design</Avatar>);
    expect(getByTestId('DesignSystem-Avatar')).toHaveClass('Avatar--disabled');
  });

  it('should not have the Avatar--disabled class when disabled is false', () => {
    const { getByTestId } = render(<Avatar>Design</Avatar>);
    expect(getByTestId('DesignSystem-Avatar')).not.toHaveClass('Avatar--disabled');
  });
});

describe('Avatar component with tooltip', () => {
  it('should show the tooltip on hover', () => {
    const { getByTestId } = render(<Avatar>Design</Avatar>);
    const avatarEle = getByTestId('DesignSystem-AvatarWrapper');
    fireEvent.mouseEnter(avatarEle);
    const tooltip = getByTestId('DesignSystem-Popover');
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveTextContent('Design');
  });

  it('should show the tooltip with tooltip prefix on hover', () => {
    const { getByTestId } = render(
      <Avatar disabled={true} firstName="John" lastName="Doe" tooltipSuffix="(Deactivated)" />
    );
    const avatarEle = getByTestId('DesignSystem-AvatarWrapper');
    fireEvent.mouseEnter(avatarEle);
    const tooltip = getByTestId('DesignSystem-Popover');
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveTextContent('John Doe (Deactivated)');
  });

  it('should show the tooltip with tooltip prefix for children', () => {
    const { getByTestId } = render(
      <Avatar disabled={true} tooltipSuffix="(Deactivated)">
        John Doe
      </Avatar>
    );
    const avatarEle = getByTestId('DesignSystem-AvatarWrapper');
    fireEvent.mouseEnter(avatarEle);
    const tooltip = getByTestId('DesignSystem-Popover');
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveTextContent('John Doe (Deactivated)');
  });
});

describe('Avatar component with prop:presence', () => {
  it('presence should be available for only round avatar', () => {
    const { getByTestId } = render(<Avatar firstName="John" lastName="Doe" presence="active" shape="round" />);
    const presenceEle = getByTestId('DesignSystem-Avatar--Presence');
    expect(presenceEle).toBeInTheDocument();
    expect(presenceEle).toHaveClass('Avatar-presence');
  });

  it('presence should not be available for square avatar', () => {
    render(<Avatar firstName="John" lastName="Doe" presence="active" shape="square" />);
    const presenceEle = screen.queryByText('DesignSystem-Avatar--Presence');
    expect(presenceEle).not.toBeInTheDocument();
  });

  it('presence should not be available for disabled avatar', () => {
    render(<Avatar firstName="John" lastName="Doe" presence="active" disabled={true} />);
    const presenceEle = screen.queryByText('DesignSystem-Avatar--Presence');
    expect(presenceEle).not.toBeInTheDocument();
  });

  it('presence should have active class for prop presence:active', () => {
    const { getByTestId } = render(<Avatar firstName="John" lastName="Doe" presence="active" />);
    const presenceEle = getByTestId('DesignSystem-Avatar--Presence');
    expect(presenceEle).toHaveClass('Avatar-presence--active');
  });

  it('presence should have active class for prop presence:away', () => {
    const { getByTestId } = render(<Avatar firstName="John" lastName="Doe" presence="away" />);
    const presenceEle = getByTestId('DesignSystem-Avatar--Presence');
    expect(presenceEle).toHaveClass('Avatar-presence--away');
  });

  it('presence should have custom stroke color', () => {
    const { getByTestId } = render(<Avatar firstName="John" lastName="Doe" presence="away" strokeColor="red" />);
    const presenceEle = getByTestId('DesignSystem-Avatar--Presence');
    expect(presenceEle).toHaveStyle('box-shadow: 0 0 0 var(--spacing-05) red');
  });
});

describe('Avatar component with prop:status', () => {
  it('should have the Avatar-status class when size is regular', () => {
    const { getByTestId } = render(<Avatar status={statusComponent}>Design</Avatar>);
    const statusElement = getByTestId('DesignSystem-Avatar--Status');
    expect(statusElement).toBeInTheDocument();
    expect(statusElement).toHaveClass('Avatar-status');
  });

  it('should not have the Avatar-status class when size is tiny', () => {
    render(
      <Avatar status={statusComponent} size="tiny">
        Design
      </Avatar>
    );
    const statusElement = screen.queryByText('DesignSystem-Avatar--Status');
    expect(statusElement).not.toBeInTheDocument();
  });

  it('should have the Avatar-status class when shape is round', () => {
    const { getByTestId } = render(<Avatar status={statusComponent}>Design</Avatar>);
    const statusElement = getByTestId('DesignSystem-Avatar--Status');
    expect(statusElement).toBeInTheDocument();
    expect(statusElement).toHaveClass('Avatar-status');
  });

  it('should not have the Avatar-status class when shape is square', () => {
    render(
      <Avatar status={statusComponent} shape="square">
        Design
      </Avatar>
    );
    const statusElement = screen.queryByText('DesignSystem-Avatar--Status');
    expect(statusElement).not.toBeInTheDocument();
  });

  it('status should have custom stroke color', () => {
    const { getByTestId } = render(
      <Avatar firstName="John" lastName="Doe" status={statusComponent} strokeColor="red" />
    );
    const statusElement = getByTestId('DesignSystem-Avatar--Status');
    expect(statusElement).toHaveStyle('box-shadow: 0 0 0 var(--spacing-05) red');
  });
});
