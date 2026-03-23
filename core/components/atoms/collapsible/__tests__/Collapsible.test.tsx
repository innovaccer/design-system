import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Collapsible, CollapsibleProps as Props } from '@/components/atoms/collapsible';
import { Icon, Text } from '@/index';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const BooleanValue = [true, false];
const onToggle = jest.fn();
const height = '100vh';
const width = 250;

describe('Collapsible component', () => {
  const mapper = {
    expanded: valueHelper(BooleanValue, { required: true, iterate: true }),
    hoverable: valueHelper(true, { required: true }),
    height: valueHelper(height, { required: true }),
    expandedWidth: valueHelper(width, { required: true }),
    onToggle: valueHelper(onToggle, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Collapsible {...attr}>
          <div>Panel</div>
        </Collapsible>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Collapsible component', () => {
  const mapper = {
    expanded: valueHelper(BooleanValue, { required: true, iterate: true }),
    hoverable: valueHelper(false, { required: true }),
    height: valueHelper(height, { required: true }),
    onToggle: valueHelper(onToggle, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Collapsible {...attr}>
          <div>Panel</div>
        </Collapsible>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Collapsible component with prop: children', () => {
  it('renders collapsed state', () => {
    const expanded = false;

    const { queryByTestId, getByTestId } = render(
      <Collapsible expanded={expanded}>
        <div className="d-flex pt-4">
          <Icon name="events" data-test="DesignSystem-Collapsible--Icon" />
          {expanded && (
            <Text className="mr-6" data-test="DesignSystem-Collapsible--Text">
              Collapsible
            </Text>
          )}
        </div>
      </Collapsible>
    );
    expect(getByTestId('DesignSystem-Collapsible--Icon')).toBeInTheDocument();
    expect(queryByTestId('DesignSystem-Collapsible--Text')).not.toBeInTheDocument();
    expect(getByTestId('DesignSystem-Collapsible')).not.toHaveClass('Collapsible--overlay');
  });

  it('renders expanded state', () => {
    const expanded = true;

    const { getByTestId } = render(
      <Collapsible expanded={expanded}>
        <div className="d-flex pt-4">
          <Icon name="events" data-test="DesignSystem-Collapsible--Icon" />
          {expanded && (
            <Text className="mr-6" data-test="DesignSystem-Collapsible--Text">
              Collapsible
            </Text>
          )}
        </div>
      </Collapsible>
    );
    expect(getByTestId('DesignSystem-Collapsible--Text')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Collapsible')).not.toHaveClass('Collapsible--overlay');
  });
});

describe('Collapsible component with dimensions', () => {
  it('renders collapsible component with height', () => {
    const panelHeight = '500px';

    const { getByTestId } = render(
      <Collapsible height={panelHeight}>
        <div className="d-flex pt-4">
          <Icon name="events" data-test="DesignSystem-Collapsible--Icon" />
        </div>
      </Collapsible>
    );
    expect(getByTestId('DesignSystem-CollapsibleWrapper')).toHaveStyle({ height: panelHeight });
  });

  it('renders collapsible component with expandedWidth', () => {
    const expandedWidth = 240;

    const { getByTestId } = render(
      <Collapsible expandedWidth={expandedWidth}>
        <div className="d-flex pt-4">
          <Icon name="events" data-test="DesignSystem-Collapsible--Icon" />
        </div>
      </Collapsible>
    );
    expect(getByTestId('DesignSystem-Collapsible')).toHaveStyle({ width: expandedWidth });
  });
});

describe('Collapsible component with prop: onToggle', () => {
  it('calls onToggle callback on click', () => {
    const expanded = false;

    const { getByTestId } = render(
      <Collapsible expanded={expanded} onToggle={onToggle}>
        <div className="d-flex pt-4">
          <Icon name="events" data-test="DesignSystem-Collapsible--Icon" />
          {expanded && (
            <Text className="mr-6" data-test="DesignSystem-Collapsible--Text">
              Collapsible
            </Text>
          )}
        </div>
      </Collapsible>
    );

    const footerIcon = getByTestId('DesignSystem-Collapsible--FooterIcon');
    fireEvent.click(footerIcon);
    expect(onToggle).toHaveBeenCalled();
    expect(onToggle).toHaveBeenCalledWith(!expanded);
  });

  it('collapsible component with hover effects', () => {
    const expanded = false;

    const { getByTestId } = render(
      <Collapsible onToggle={onToggle}>
        <div className="d-flex pt-4">
          <Icon name="events" data-test="DesignSystem-Collapsible--Icon" />
          {expanded && (
            <Text className="mr-6" data-test="DesignSystem-Collapsible--Text">
              Collapsible
            </Text>
          )}
        </div>
      </Collapsible>
    );

    const component = getByTestId('DesignSystem-CollapsibleBody');
    fireEvent.mouseEnter(component);
    expect(onToggle).toHaveBeenCalled();
    expect(onToggle).toHaveBeenCalledWith(true);

    fireEvent.mouseLeave(component);
    expect(onToggle).toHaveBeenCalled();
    expect(onToggle).toHaveBeenCalledWith(false);
  });

  it('calls onToggle callback on Enter or Space key press, but not on other keys', () => {
    const onToggleMock = jest.fn();
    const { getByTestId } = render(
      <Collapsible expanded={false} onToggle={onToggleMock}>
        <div />
      </Collapsible>
    );

    const footer = getByTestId('DesignSystem-Collapsible--Footer');

    fireEvent.keyDown(footer, { key: 'ArrowDown' });
    expect(onToggleMock).not.toHaveBeenCalled();

    fireEvent.keyDown(footer, { key: 'Space' });
    expect(onToggleMock).toHaveBeenCalledTimes(1);
    expect(onToggleMock).toHaveBeenCalledWith(true);

    fireEvent.keyDown(footer, { key: 'Enter' });
    expect(onToggleMock).toHaveBeenCalledTimes(2);
    expect(onToggleMock).toHaveBeenLastCalledWith(true);
  });
});

describe('Collapsible accessibility attributes', () => {
  it('links the trigger and content panel with aria-controls and aria-labelledby', () => {
    const { getByTestId } = render(
      <>
        <span id="collapsible-label">Toggle panel</span>
        <Collapsible expanded={false} aria-labelledby="collapsible-label">
          <div />
        </Collapsible>
      </>
    );

    const footer = getByTestId('DesignSystem-Collapsible--Footer');
    const body = getByTestId('DesignSystem-CollapsibleBody');
    const controlsId = footer.getAttribute('aria-controls');

    expect(footer).toHaveAttribute('aria-labelledby', 'collapsible-label');
    expect(controlsId).toBe(body.getAttribute('id'));
    expect(body).toHaveAttribute('role', 'region');
    expect(body).toHaveAttribute('aria-labelledby', 'collapsible-label');
    expect(getByTestId('DesignSystem-Collapsible--FooterIcon')).toHaveAttribute('aria-hidden', 'true');
  });
});
