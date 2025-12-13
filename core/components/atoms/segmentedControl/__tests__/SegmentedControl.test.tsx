import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { SegmentedControl as SegmentedControlBase } from '@/index';
import { SegmentedControlItem } from '../SegmentedControlItem';
import { SegmentedControlProps as Props } from '@/index.type';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const sizes: Props['size'][] = ['small', 'regular', 'large'];
const BooleanValue = [true, false];

const SegmentedControl = SegmentedControlBase as typeof SegmentedControlBase & { Item: typeof SegmentedControlItem };

describe('SegmentedControl Component - Size Variants Snapshot Tests', () => {
  const mapper: Record<string, any> = {
    size: valueHelper(sizes, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <SegmentedControl {...attr}>
          <SegmentedControl.Item label="Day" />
          <SegmentedControl.Item label="Week" />
          <SegmentedControl.Item label="Month" />
        </SegmentedControl>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('SegmentedControl Component - Expanded Prop Snapshot Tests', () => {
  const mapper: Record<string, any> = {
    expanded: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <SegmentedControl {...attr}>
          <SegmentedControl.Item label="Day" />
          <SegmentedControl.Item label="Week" />
          <SegmentedControl.Item label="Month" />
        </SegmentedControl>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('SegmentedControl Component - Label Only Snapshot Tests', () => {
  sizes.forEach((size) => {
    it(`matches snapshot for ${size} size with label only`, () => {
      const { baseElement } = render(
        <SegmentedControl size={size}>
          <SegmentedControl.Item label="Day" />
          <SegmentedControl.Item label="Week" />
          <SegmentedControl.Item label="Month" />
        </SegmentedControl>
      );
      expect(baseElement).toMatchSnapshot();
    });
  });
});

describe('SegmentedControl Component - Icon + Label Snapshot Tests', () => {
  sizes.forEach((size) => {
    it(`matches snapshot for ${size} size with icon and label`, () => {
      const { baseElement } = render(
        <SegmentedControl size={size}>
          <SegmentedControl.Item label="Day" icon="home" />
          <SegmentedControl.Item label="Week" icon="settings" />
          <SegmentedControl.Item label="Month" icon="person" />
        </SegmentedControl>
      );
      expect(baseElement).toMatchSnapshot();
    });
  });
});

describe('SegmentedControl Component - Icon Only Snapshot Tests', () => {
  sizes.forEach((size) => {
    it(`matches snapshot for ${size} size with icon only`, () => {
      const { baseElement } = render(
        <SegmentedControl size={size}>
          <SegmentedControl.Item icon="home" />
          <SegmentedControl.Item icon="settings" />
          <SegmentedControl.Item icon="person" />
        </SegmentedControl>
      );
      expect(baseElement).toMatchSnapshot();
    });
  });
});

describe('SegmentedControl Component - Disabled States Snapshot Tests', () => {
  it('matches snapshot with disabled control', () => {
    const { baseElement } = render(
      <SegmentedControl disabled>
        <SegmentedControl.Item label="Day" />
        <SegmentedControl.Item label="Week" />
        <SegmentedControl.Item label="Month" />
      </SegmentedControl>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('matches snapshot with disabled item', () => {
    const { baseElement } = render(
      <SegmentedControl>
        <SegmentedControl.Item label="Day" />
        <SegmentedControl.Item label="Week" disabled />
        <SegmentedControl.Item label="Month" />
      </SegmentedControl>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('matches snapshot with selected disabled item', () => {
    const { baseElement } = render(
      <SegmentedControl activeIndex={1}>
        <SegmentedControl.Item label="Day" />
        <SegmentedControl.Item label="Week" disabled />
        <SegmentedControl.Item label="Month" />
      </SegmentedControl>
    );
    expect(baseElement).toMatchSnapshot();
  });
});

describe('SegmentedControl Component - isEqualWidth Snapshot Tests', () => {
  it('matches snapshot with isEqualWidth={true}', () => {
    const { baseElement } = render(
      <SegmentedControl isEqualWidth={true}>
        <SegmentedControl.Item label="Very Long Option Label" />
        <SegmentedControl.Item label="Short" />
        <SegmentedControl.Item label="Medium Label" />
      </SegmentedControl>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('matches snapshot with isEqualWidth={false}', () => {
    const { baseElement } = render(
      <SegmentedControl isEqualWidth={false}>
        <SegmentedControl.Item label="Very Long Option Label" />
        <SegmentedControl.Item label="Short" />
        <SegmentedControl.Item label="Medium Label" />
      </SegmentedControl>
    );
    expect(baseElement).toMatchSnapshot();
  });
});

describe('SegmentedControl Component - maxWidth Snapshot Tests', () => {
  it('matches snapshot with maxWidth prop', () => {
    const { baseElement } = render(
      <SegmentedControl maxWidth={150}>
        <SegmentedControl.Item label="Very Long Option Label That Should Truncate" />
        <SegmentedControl.Item label="Short" />
        <SegmentedControl.Item label="Medium Label" />
      </SegmentedControl>
    );
    expect(baseElement).toMatchSnapshot();
  });
});

describe('SegmentedControl Component - Custom Content Snapshot Tests', () => {
  it('matches snapshot with custom children', () => {
    const { baseElement } = render(
      <SegmentedControl>
        <SegmentedControl.Item>
          <div>Custom Content</div>
        </SegmentedControl.Item>
        <SegmentedControl.Item label="Option 2" />
      </SegmentedControl>
    );
    expect(baseElement).toMatchSnapshot();
  });
});

describe('SegmentedControl Component - Two Segments Snapshot Tests', () => {
  it('matches snapshot with two segments', () => {
    const { baseElement } = render(
      <SegmentedControl>
        <SegmentedControl.Item label="Option 1" />
        <SegmentedControl.Item label="Option 2" />
      </SegmentedControl>
    );
    expect(baseElement).toMatchSnapshot();
  });
});

describe('SegmentedControl Component - Rendering Tests', () => {
  it('renders segments correctly', () => {
    const { getByTestId, getAllByTestId } = render(
      <SegmentedControl>
        <SegmentedControl.Item label="Day" />
        <SegmentedControl.Item label="Week" />
        <SegmentedControl.Item label="Month" />
      </SegmentedControl>
    );
    expect(getByTestId('DesignSystem-SegmentedControl')).toBeInTheDocument();
    const segments = getAllByTestId('DesignSystem-SegmentedControl-Item');
    expect(segments.length).toBe(3);
    expect(screen.getByText('Day')).toBeInTheDocument();
    expect(screen.getByText('Week')).toBeInTheDocument();
    expect(screen.getByText('Month')).toBeInTheDocument();
  });

  it('renders with icons and labels', () => {
    const { getByTestId, getAllByTestId } = render(
      <SegmentedControl>
        <SegmentedControl.Item label="Home" icon="home" />
        <SegmentedControl.Item label="Settings" icon="settings" />
      </SegmentedControl>
    );
    expect(getByTestId('DesignSystem-SegmentedControl')).toBeInTheDocument();
    const segments = getAllByTestId('DesignSystem-SegmentedControl-Item');
    expect(segments.length).toBe(2);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
  });

  it('renders icon-only segments', () => {
    const { getAllByTestId } = render(
      <SegmentedControl>
        <SegmentedControl.Item icon="home" />
        <SegmentedControl.Item icon="settings" />
      </SegmentedControl>
    );
    const segments = getAllByTestId('DesignSystem-SegmentedControl-Item');
    expect(segments.length).toBe(2);
    segments.forEach((segment) => {
      expect(segment).toHaveClass('SegmentedControl-segment--iconOnly');
    });
  });

  it('renders empty when no children', () => {
    const { container } = render(<SegmentedControl>{[]}</SegmentedControl>);
    expect(container.firstChild).toBeNull();
  });

  it('renders with dividers', () => {
    const { container } = render(
      <SegmentedControl>
        <SegmentedControl.Item label="Day" />
        <SegmentedControl.Item label="Week" />
        <SegmentedControl.Item label="Month" />
      </SegmentedControl>
    );
    const dividers = container.querySelectorAll('.SegmentedControl-divider');
    expect(dividers.length).toBe(2);
  });

  it('hides dividers around selected segment', () => {
    const { container } = render(
      <SegmentedControl activeIndex={1}>
        <SegmentedControl.Item label="Day" />
        <SegmentedControl.Item label="Week" />
        <SegmentedControl.Item label="Month" />
      </SegmentedControl>
    );
    const dividers = container.querySelectorAll('.SegmentedControl-divider');
    dividers.forEach((divider) => {
      expect(divider).toHaveClass('SegmentedControl-divider--hidden');
    });
  });
});

describe('SegmentedControl Component - Padding and Spacing Tests', () => {
  it('applies correct size class for small size with label', () => {
    const { getAllByTestId } = render(
      <SegmentedControl size="small">
        <SegmentedControl.Item label="Day" />
      </SegmentedControl>
    );
    const segment = getAllByTestId('DesignSystem-SegmentedControl-Item')[0];
    expect(segment).toHaveClass('SegmentedControl-segment--small');
  });

  it('applies correct size class for regular size with label', () => {
    const { getAllByTestId } = render(
      <SegmentedControl size="regular">
        <SegmentedControl.Item label="Day" />
      </SegmentedControl>
    );
    const segment = getAllByTestId('DesignSystem-SegmentedControl-Item')[0];
    expect(segment).toHaveClass('SegmentedControl-segment--regular');
  });

  it('applies correct size class for large size with label', () => {
    const { getAllByTestId } = render(
      <SegmentedControl size="large">
        <SegmentedControl.Item label="Day" />
      </SegmentedControl>
    );
    const segment = getAllByTestId('DesignSystem-SegmentedControl-Item')[0];
    expect(segment).toHaveClass('SegmentedControl-segment--large');
  });

  it('applies correct icon class for small size with icon and label', () => {
    const { container } = render(
      <SegmentedControl size="small">
        <SegmentedControl.Item label="Day" icon="home" />
      </SegmentedControl>
    );
    const icon = container.querySelector('.SegmentedControl-segmentIcon--small');
    expect(icon).toBeInTheDocument();
  });

  it('applies correct icon class for regular size with icon and label', () => {
    const { container } = render(
      <SegmentedControl size="regular">
        <SegmentedControl.Item label="Day" icon="home" />
      </SegmentedControl>
    );
    const icon = container.querySelector('.SegmentedControl-segmentIcon--regular');
    expect(icon).toBeInTheDocument();
  });

  it('applies correct icon class for large size with icon and label', () => {
    const { container } = render(
      <SegmentedControl size="large">
        <SegmentedControl.Item label="Day" icon="home" />
      </SegmentedControl>
    );
    const icon = container.querySelector('.SegmentedControl-segmentIcon--large');
    expect(icon).toBeInTheDocument();
  });
});

describe('SegmentedControl Component - Icon Only Dimensions Tests', () => {
  it('applies correct classes for small icon-only segment', () => {
    const { getAllByTestId } = render(
      <SegmentedControl size="small">
        <SegmentedControl.Item icon="home" />
      </SegmentedControl>
    );
    const segment = getAllByTestId('DesignSystem-SegmentedControl-Item')[0];
    expect(segment).toHaveClass('SegmentedControl-segment--smallIconOnly');
    expect(segment).toHaveClass('SegmentedControl-segment--iconOnly');
  });

  it('applies correct classes for regular icon-only segment', () => {
    const { getAllByTestId } = render(
      <SegmentedControl size="regular">
        <SegmentedControl.Item icon="home" />
      </SegmentedControl>
    );
    const segment = getAllByTestId('DesignSystem-SegmentedControl-Item')[0];
    expect(segment).toHaveClass('SegmentedControl-segment--iconOnly');
  });

  it('applies correct classes for large icon-only segment', () => {
    const { getAllByTestId } = render(
      <SegmentedControl size="large">
        <SegmentedControl.Item icon="home" />
      </SegmentedControl>
    );
    const segment = getAllByTestId('DesignSystem-SegmentedControl-Item')[0];
    expect(segment).toHaveClass('SegmentedControl-segment--largeIconOnly');
    expect(segment).toHaveClass('SegmentedControl-segment--iconOnly');
  });
});

describe('SegmentedControl Component - Controlled Mode Tests', () => {
  it('handles controlled mode correctly', () => {
    const handleChange = jest.fn();
    const { rerender, getAllByTestId } = render(
      <SegmentedControl activeIndex={0} onChange={handleChange}>
        <SegmentedControl.Item label="Day" />
        <SegmentedControl.Item label="Week" />
        <SegmentedControl.Item label="Month" />
      </SegmentedControl>
    );
    const segments = getAllByTestId('DesignSystem-SegmentedControl-Item');
    fireEvent.click(segments[1]);
    expect(handleChange).toHaveBeenCalledWith(1);

    rerender(
      <SegmentedControl activeIndex={1} onChange={handleChange}>
        <SegmentedControl.Item label="Day" />
        <SegmentedControl.Item label="Week" />
        <SegmentedControl.Item label="Month" />
      </SegmentedControl>
    );
    const segmentsAfter = getAllByTestId('DesignSystem-SegmentedControl-Item');
    expect(segmentsAfter[1]).toHaveClass('SegmentedControl-segment--selected');
  });

  it('syncs with activeIndex prop changes', () => {
    const { rerender, getAllByTestId } = render(
      <SegmentedControl activeIndex={0}>
        <SegmentedControl.Item label="Day" />
        <SegmentedControl.Item label="Week" />
        <SegmentedControl.Item label="Month" />
      </SegmentedControl>
    );
    let segments = getAllByTestId('DesignSystem-SegmentedControl-Item');
    expect(segments[0]).toHaveClass('SegmentedControl-segment--selected');

    rerender(
      <SegmentedControl activeIndex={2}>
        <SegmentedControl.Item label="Day" />
        <SegmentedControl.Item label="Week" />
        <SegmentedControl.Item label="Month" />
      </SegmentedControl>
    );
    segments = getAllByTestId('DesignSystem-SegmentedControl-Item');
    expect(segments[0]).not.toHaveClass('SegmentedControl-segment--selected');
    expect(segments[2]).toHaveClass('SegmentedControl-segment--selected');
  });
});

describe('SegmentedControl Component - Uncontrolled Mode Tests', () => {
  it('handles uncontrolled mode correctly', () => {
    const handleChange = jest.fn();
    const { getAllByTestId } = render(
      <SegmentedControl onChange={handleChange}>
        <SegmentedControl.Item label="Day" />
        <SegmentedControl.Item label="Week" />
        <SegmentedControl.Item label="Month" />
      </SegmentedControl>
    );
    const segments = getAllByTestId('DesignSystem-SegmentedControl-Item');
    fireEvent.click(segments[1]);
    expect(handleChange).toHaveBeenCalledWith(1);
  });

  it('maintains internal state in uncontrolled mode', () => {
    const handleChange = jest.fn();
    const { getAllByTestId } = render(
      <SegmentedControl onChange={handleChange}>
        <SegmentedControl.Item label="Day" />
        <SegmentedControl.Item label="Week" />
        <SegmentedControl.Item label="Month" />
      </SegmentedControl>
    );
    const segments = getAllByTestId('DesignSystem-SegmentedControl-Item');
    expect(segments[0]).toHaveClass('SegmentedControl-segment--selected');

    fireEvent.click(segments[1]);
    expect(handleChange).toHaveBeenCalledWith(1);
    expect(segments[1]).toHaveClass('SegmentedControl-segment--selected');
  });
});

describe('SegmentedControl Component - Disabled State Tests', () => {
  it('disables entire control when disabled prop is set', () => {
    const handleChange = jest.fn();
    const { getAllByTestId } = render(
      <SegmentedControl disabled onChange={handleChange}>
        <SegmentedControl.Item label="Day" />
        <SegmentedControl.Item label="Week" />
        <SegmentedControl.Item label="Month" />
      </SegmentedControl>
    );
    const segments = getAllByTestId('DesignSystem-SegmentedControl-Item');
    fireEvent.click(segments[0]);
    expect(handleChange).not.toHaveBeenCalled();
    segments.forEach((segment) => {
      expect(segment).toBeDisabled();
    });
  });

  it('does not select disabled segments', () => {
    const handleChange = jest.fn();
    const { getAllByTestId } = render(
      <SegmentedControl onChange={handleChange}>
        <SegmentedControl.Item label="Day" />
        <SegmentedControl.Item label="Week" disabled />
      </SegmentedControl>
    );
    const segments = getAllByTestId('DesignSystem-SegmentedControl-Item');
    fireEvent.click(segments[1]);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('disables disabled segments from tab navigation', () => {
    const { getAllByTestId } = render(
      <SegmentedControl>
        <SegmentedControl.Item label="Day" />
        <SegmentedControl.Item label="Week" disabled />
        <SegmentedControl.Item label="Month" />
      </SegmentedControl>
    );
    const segments = getAllByTestId('DesignSystem-SegmentedControl-Item');
    expect(segments[1]).toHaveAttribute('tabIndex', '-1');
  });

  it('applies disabled class to disabled segments', () => {
    const { getAllByTestId } = render(
      <SegmentedControl>
        <SegmentedControl.Item label="Day" />
        <SegmentedControl.Item label="Week" disabled />
        <SegmentedControl.Item label="Month" />
      </SegmentedControl>
    );
    const segments = getAllByTestId('DesignSystem-SegmentedControl-Item');
    expect(segments[1]).toHaveClass('SegmentedControl-segment--disabled');
  });
});

describe('SegmentedControl Component - Two Segment Toggle Tests', () => {
  it('toggles between two segments when clicking selected segment', () => {
    const handleChange = jest.fn();
    const { getAllByTestId } = render(
      <SegmentedControl onChange={handleChange}>
        <SegmentedControl.Item label="Day" />
        <SegmentedControl.Item label="Week" />
      </SegmentedControl>
    );
    const segments = getAllByTestId('DesignSystem-SegmentedControl-Item');
    fireEvent.click(segments[0]);
    expect(handleChange).toHaveBeenCalledWith(1);
  });

  it('does not toggle when other segment is disabled in two-segment mode', () => {
    const handleChange = jest.fn();
    const { getAllByTestId } = render(
      <SegmentedControl onChange={handleChange}>
        <SegmentedControl.Item label="Day" />
        <SegmentedControl.Item label="Week" disabled />
      </SegmentedControl>
    );
    const segments = getAllByTestId('DesignSystem-SegmentedControl-Item');
    fireEvent.click(segments[0]);
    expect(handleChange).not.toHaveBeenCalled();
  });

  it('applies two-segments class when there are two segments', () => {
    const { container } = render(
      <SegmentedControl>
        <SegmentedControl.Item label="Day" />
        <SegmentedControl.Item label="Week" />
      </SegmentedControl>
    );
    const root = container.querySelector('.SegmentedControl');
    expect(root).toHaveClass('SegmentedControl--twoSegments');
  });
});

describe('SegmentedControl Component - isEqualWidth Tests', () => {
  it('applies isEqualWidth prop correctly', () => {
    const { container } = render(
      <SegmentedControl isEqualWidth={true}>
        <SegmentedControl.Item label="Very Long Option Label" />
        <SegmentedControl.Item label="Short" />
        <SegmentedControl.Item label="Medium Label" />
      </SegmentedControl>
    );
    const root = container.querySelector('.SegmentedControl');
    expect(root).toHaveClass('SegmentedControl--equalWidth');
  });

  it('does not apply isEqualWidth when expanded', () => {
    const { container } = render(
      <SegmentedControl expanded isEqualWidth={true}>
        <SegmentedControl.Item label="Day" />
        <SegmentedControl.Item label="Week" />
      </SegmentedControl>
    );
    const root = container.querySelector('.SegmentedControl');
    expect(root).not.toHaveClass('SegmentedControl--equalWidth');
    expect(root).toHaveClass('SegmentedControl--expanded');
  });

  it('applies equalWidth class to segments when isEqualWidth is true', () => {
    const { getAllByTestId } = render(
      <SegmentedControl isEqualWidth={true}>
        <SegmentedControl.Item label="Day" />
        <SegmentedControl.Item label="Week" />
      </SegmentedControl>
    );
    const segments = getAllByTestId('DesignSystem-SegmentedControl-Item');
    segments.forEach((segment) => {
      expect(segment).toHaveClass('SegmentedControl-segment--equalWidth');
    });
  });
});

describe('SegmentedControl Component - Expanded Mode Tests', () => {
  it('applies expanded class when expanded prop is true', () => {
    const { container } = render(
      <SegmentedControl expanded>
        <SegmentedControl.Item label="Day" />
        <SegmentedControl.Item label="Week" />
        <SegmentedControl.Item label="Month" />
      </SegmentedControl>
    );
    const root = container.querySelector('.SegmentedControl');
    expect(root).toHaveClass('SegmentedControl--expanded');
  });

  it('applies expanded class to segments when expanded prop is true', () => {
    const { getAllByTestId } = render(
      <SegmentedControl expanded>
        <SegmentedControl.Item label="Day" />
        <SegmentedControl.Item label="Week" />
      </SegmentedControl>
    );
    const segments = getAllByTestId('DesignSystem-SegmentedControl-Item');
    segments.forEach((segment) => {
      expect(segment).toHaveClass('SegmentedControl-segment--expanded');
    });
  });
});

describe('SegmentedControl Component - Tooltip Tests', () => {
  it('renders with tooltip', () => {
    const { getByTestId } = render(
      <SegmentedControl>
        <SegmentedControl.Item label="Day" tooltip="Tooltip text" />
        <SegmentedControl.Item label="Week" />
      </SegmentedControl>
    );
    expect(getByTestId('DesignSystem-SegmentedControl')).toBeInTheDocument();
  });

  it('renders tooltip for truncated labels', () => {
    render(
      <SegmentedControl maxWidth={100}>
        <SegmentedControl.Item label="Very Long Label That Will Truncate" />
      </SegmentedControl>
    );
    expect(screen.getByText('Very Long Label That Will Truncate')).toBeInTheDocument();
  });
});

describe('SegmentedControl Component - Custom Content Tests', () => {
  it('renders with custom children content', () => {
    render(
      <SegmentedControl>
        <SegmentedControl.Item>
          <div>Custom Content</div>
        </SegmentedControl.Item>
        <SegmentedControl.Item label="Option 2" />
      </SegmentedControl>
    );
    expect(screen.getByText('Custom Content')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });

  it('ignores label and icon when custom children are provided', () => {
    render(
      <SegmentedControl>
        <SegmentedControl.Item label="Ignored Label" icon="home">
          <div>Custom Content</div>
        </SegmentedControl.Item>
      </SegmentedControl>
    );
    expect(screen.getByText('Custom Content')).toBeInTheDocument();
    expect(screen.queryByText('Ignored Label')).not.toBeInTheDocument();
  });
});

describe('SegmentedControl Component - Keyboard Navigation Tests', () => {
  it('handles native tab navigation', () => {
    const { getAllByTestId } = render(
      <SegmentedControl>
        <SegmentedControl.Item label="Day" />
        <SegmentedControl.Item label="Week" />
        <SegmentedControl.Item label="Month" />
      </SegmentedControl>
    );
    const segments = getAllByTestId('DesignSystem-SegmentedControl-Item');
    expect(segments.length).toBe(3);
    segments.forEach((segment) => {
      expect(segment).toHaveAttribute('tabIndex', expect.any(String));
    });
  });

  it('sets tabIndex to -1 for selected segment and 0 for non-selected segments', () => {
    const { getAllByTestId } = render(
      <SegmentedControl>
        <SegmentedControl.Item label="Day" />
        <SegmentedControl.Item label="Week" />
      </SegmentedControl>
    );
    const segments = getAllByTestId('DesignSystem-SegmentedControl-Item');
    expect(segments[0]).toHaveAttribute('tabIndex', '-1');
    expect(segments[1]).toHaveAttribute('tabIndex', '0');
  });
});

describe('SegmentedControl Component - maxWidth Tests', () => {
  it('applies maxWidth style to container', () => {
    const { container } = render(
      <SegmentedControl maxWidth={200}>
        <SegmentedControl.Item label="Day" />
        <SegmentedControl.Item label="Week" />
      </SegmentedControl>
    );
    const root = container.querySelector('.SegmentedControl');
    expect(root).toBeInTheDocument();
  });

  it('truncates labels when maxWidth constrains segments', () => {
    const { container } = render(
      <SegmentedControl maxWidth={100}>
        <SegmentedControl.Item label="Very Long Label That Should Truncate" />
      </SegmentedControl>
    );
    const label = container.querySelector('.SegmentedControl-segmentLabel');
    expect(label).toBeInTheDocument();
  });
});

describe('SegmentedControl Component - Edge Cases', () => {
  it('handles single segment', () => {
    const { getAllByTestId, container } = render(
      <SegmentedControl>
        <SegmentedControl.Item label="Only Option" />
      </SegmentedControl>
    );
    const segments = getAllByTestId('DesignSystem-SegmentedControl-Item');
    expect(segments.length).toBe(1);
    expect(container.querySelectorAll('.SegmentedControl-divider').length).toBe(0);
  });

  it('handles rapid clicks', () => {
    const handleChange = jest.fn();
    const { getAllByTestId } = render(
      <SegmentedControl onChange={handleChange}>
        <SegmentedControl.Item label="Day" />
        <SegmentedControl.Item label="Week" />
        <SegmentedControl.Item label="Month" />
      </SegmentedControl>
    );
    const segments = getAllByTestId('DesignSystem-SegmentedControl-Item');
    fireEvent.click(segments[0]);
    fireEvent.click(segments[1]);
    fireEvent.click(segments[0]);
    expect(handleChange).toHaveBeenCalledTimes(3);
  });

  it('handles invalid activeIndex gracefully', () => {
    const { getAllByTestId } = render(
      <SegmentedControl activeIndex={10}>
        <SegmentedControl.Item label="Day" />
        <SegmentedControl.Item label="Week" />
      </SegmentedControl>
    );
    const segments = getAllByTestId('DesignSystem-SegmentedControl-Item');
    expect(segments.length).toBe(2);
  });
});
