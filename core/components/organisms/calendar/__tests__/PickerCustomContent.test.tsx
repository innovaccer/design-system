import * as React from 'react';
import { fireEvent, render, waitFor, within } from '@testing-library/react';
import Chip from '@/components/atoms/chip';
import PickerCustomContent, { hasRenderableChildren } from '../PickerCustomContent';

const PresetLayout = ({ children }: { children: React.ReactNode }) => <section>{children}</section>;

describe('PickerCustomContent', () => {
  beforeAll(() => {
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
  });

  it('opens and closes non-preset custom picker content from the mobile trigger', async () => {
    const onClick = jest.fn();
    const { getByTestId, getByText } = render(
      <PickerCustomContent>
        <button type="button" onClick={onClick}>
          Today
        </button>
      </PickerCustomContent>
    );

    const trigger = getByTestId('DesignSystem-PickerCustomContent--Trigger');
    fireEvent.click(trigger);

    expect(trigger).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(getByText('Today'));

    await waitFor(() => {
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });
    expect(trigger).toHaveTextContent('Presets: Today');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('keeps non-preset custom content accessible when preset chips exist', () => {
    const { getByTestId } = render(
      <PickerCustomContent>
        <div>
          <button type="button">Reset</button>
          <div>
            <Chip label="This week" clearButton={false} type="selection" name="currWeek" />
          </div>
        </div>
      </PickerCustomContent>
    );

    const mobileCustomContent = getByTestId('DesignSystem-PickerCustomContent--MobileCustomContent');

    expect(within(mobileCustomContent).getByText('Reset')).toBeInTheDocument();
    expect(within(mobileCustomContent).queryByText('This week')).toBeNull();
  });

  it('keeps non-preset content inside custom wrappers while removing wrapped preset chips', () => {
    const { getByTestId } = render(
      <PickerCustomContent>
        <PresetLayout>
          <button type="button">Reset</button>
          <Chip label="Wrapped preset" clearButton={false} type="selection" name="wrappedPreset" />
        </PresetLayout>
      </PickerCustomContent>
    );

    const mobileCustomContent = getByTestId('DesignSystem-PickerCustomContent--MobileCustomContent');

    expect(within(mobileCustomContent).getByText('Reset')).toBeInTheDocument();
    expect(within(mobileCustomContent).queryByText('Wrapped preset')).toBeNull();
  });

  it('does not close custom content on Space keydown before native button activation', async () => {
    const onClick = jest.fn();
    const { getByTestId, getByText } = render(
      <PickerCustomContent>
        <button type="button" onClick={onClick}>
          Apply
        </button>
      </PickerCustomContent>
    );

    const trigger = getByTestId('DesignSystem-PickerCustomContent--Trigger');
    fireEvent.click(trigger);

    expect(trigger).toHaveAttribute('aria-expanded', 'true');

    fireEvent.keyDown(getByText('Apply'), { key: ' ' });

    expect(trigger).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(getByText('Apply'));

    await waitFor(() => {
      expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders preset chips as Select options in the collapsed control', async () => {
    const onClick = jest.fn();
    const { findAllByTestId, getByTestId, queryByTestId } = render(
      <PickerCustomContent>
        <div>
          <Chip label="This week" clearButton={false} type="selection" name="currWeek" onClick={onClick} />
        </div>
      </PickerCustomContent>
    );

    expect(queryByTestId('DesignSystem-PickerCustomContent--Trigger')).toBeNull();
    expect(queryByTestId('DesignSystem-PickerCustomContent--MobileCustomContent')).toBeNull();

    fireEvent.click(getByTestId('DesignSystem-Select-trigger'));
    const presetOptions = await findAllByTestId('DesignSystem-PickerCustomContent--PresetOption');

    fireEvent.click(presetOptions[0]);

    expect(onClick).toHaveBeenCalledWith('currWeek');
  });

  it('renders preset chips wrapped by custom components as Select options', async () => {
    const onClick = jest.fn();
    const { findAllByTestId, getByTestId, queryByTestId } = render(
      <PickerCustomContent>
        <PresetLayout>
          <Chip label="Wrapped preset" clearButton={false} type="selection" name="wrappedPreset" onClick={onClick} />
        </PresetLayout>
      </PickerCustomContent>
    );

    expect(queryByTestId('DesignSystem-PickerCustomContent--Trigger')).toBeNull();
    expect(queryByTestId('DesignSystem-PickerCustomContent--MobileCustomContent')).toBeNull();

    fireEvent.click(getByTestId('DesignSystem-Select-trigger'));
    const presetOptions = await findAllByTestId('DesignSystem-PickerCustomContent--PresetOption');

    fireEvent.click(presetOptions[0]);

    expect(onClick).toHaveBeenCalledWith('wrappedPreset');
  });

  it('detects empty fragments as non-renderable children', () => {
    expect(hasRenderableChildren(<></>)).toBe(false);
    expect(hasRenderableChildren(<div />)).toBe(true);
  });
});
