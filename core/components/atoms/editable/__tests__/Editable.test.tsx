import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Editable, { EditableProps as Props } from '../Editable';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const onChange = jest.fn();

describe('Editable component', () => {
  const mapper = {
    editing: valueHelper(true, { required: true }),
    onChange: valueHelper(onChange, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(
        <Editable {...attr}>
          <div>First Name</div>
        </Editable>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Editable component', () => {
  it('renders children', () => {
    const { getByTestId } = render(
      <Editable onChange={onChange}>
        <div data-test="DesignSystem-Editable--Content">First Name</div>
      </Editable>
    );

    expect(getByTestId('DesignSystem-Editable--Content')).toBeInTheDocument();
  });

  it('Editable component with props editing (true) and onChange', () => {
    const { getByTestId } = render(
      <Editable onChange={onChange} editing={true}>
        <span />
      </Editable>
    );

    const editableWrapper = getByTestId('DesignSystem-EditableWrapper');

    fireEvent.click(editableWrapper);
    expect(onChange).toHaveBeenCalledWith('edit');

    fireEvent.mouseEnter(editableWrapper);
    expect(onChange).not.toHaveBeenCalledWith('hover');

    fireEvent.mouseLeave(editableWrapper);
    expect(onChange).not.toHaveBeenCalledWith('default');
  });

  it('Editable component with props editing (false) and onChange', () => {
    const { getByTestId } = render(
      <Editable onChange={onChange} editing={false}>
        <span />
      </Editable>
    );

    const editableWrapper = getByTestId('DesignSystem-EditableWrapper');

    fireEvent.click(editableWrapper);
    expect(onChange).toHaveBeenCalledWith('edit');

    fireEvent.mouseEnter(editableWrapper);
    expect(onChange).toHaveBeenCalledWith('hover');

    fireEvent.mouseLeave(editableWrapper);
    expect(onChange).toHaveBeenCalledWith('default');
  });
});

describe('Editable component keyboard interactions', () => {
  beforeEach(() => {
    onChange.mockClear();
  });

  it('Enter enters edit mode when not editing', () => {
    const { getByTestId } = render(
      <Editable onChange={onChange} editing={false}>
        <span />
      </Editable>
    );

    const editableWrapper = getByTestId('DesignSystem-EditableWrapper');
    fireEvent.keyDown(editableWrapper, { key: 'Enter' });

    expect(onChange).toHaveBeenCalledWith('edit');
  });

  it('Space enters edit mode when not editing and prevents default', () => {
    const { getByTestId } = render(
      <Editable onChange={onChange} editing={false}>
        <span />
      </Editable>
    );

    const editableWrapper = getByTestId('DesignSystem-EditableWrapper');
    fireEvent.keyDown(editableWrapper, { key: ' ' });

    expect(onChange).toHaveBeenCalledWith('edit');
  });

  it('calls onEditModeKeyDown when editing and user presses a key', () => {
    const onEditModeKeyDown = jest.fn();
    const { getByTestId } = render(
      <Editable onChange={onChange} editing={true} onEditModeKeyDown={onEditModeKeyDown}>
        <span />
      </Editable>
    );

    const editableWrapper = getByTestId('DesignSystem-EditableWrapper');
    fireEvent.keyDown(editableWrapper, { key: 'Escape' });

    expect(onEditModeKeyDown).toHaveBeenCalled();
    expect(onChange).not.toHaveBeenCalled();
  });

  it('does not call onEditModeKeyDown or enter edit mode when not editing and key is not Enter/Space', () => {
    const onEditModeKeyDown = jest.fn();
    const { getByTestId } = render(
      <Editable onChange={onChange} editing={false} onEditModeKeyDown={onEditModeKeyDown}>
        <span />
      </Editable>
    );

    const editableWrapper = getByTestId('DesignSystem-EditableWrapper');
    fireEvent.keyDown(editableWrapper, { key: 'a' });

    expect(onEditModeKeyDown).not.toHaveBeenCalled();
    expect(onChange).not.toHaveBeenCalled();
  });

  it('has tabIndex 0 when not editing', () => {
    const { getByTestId } = render(
      <Editable onChange={onChange} editing={false}>
        <span />
      </Editable>
    );

    const editableWrapper = getByTestId('DesignSystem-EditableWrapper');
    expect(editableWrapper).toHaveAttribute('tabindex', '0');
  });

  it('has tabIndex -1 when editing', () => {
    const { getByTestId } = render(
      <Editable onChange={onChange} editing={true}>
        <span />
      </Editable>
    );

    const editableWrapper = getByTestId('DesignSystem-EditableWrapper');
    expect(editableWrapper).toHaveAttribute('tabindex', '-1');
  });

  it('triggers edit on Spacebar key alias when wrapper is focused', () => {
    const { getByTestId } = render(
      <Editable onChange={onChange} editing={false}>
        <span />
      </Editable>
    );

    const editableWrapper = getByTestId('DesignSystem-EditableWrapper');

    fireEvent.keyDown(editableWrapper, { key: 'Spacebar', nativeEvent: { code: 'Space' } });

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('edit');
  });

  it('does not trigger edit shortcut when key is pressed inside child input', () => {
    const { getByTestId } = render(
      <Editable onChange={onChange} editing={false}>
        <input data-test="DesignSystem-Editable-child-input" />
      </Editable>
    );

    const childInput = getByTestId('DesignSystem-Editable-child-input');

    fireEvent.keyDown(childInput, { key: ' ' });
    fireEvent.keyDown(childInput, { key: 'Enter' });

    expect(onChange).not.toHaveBeenCalled();
  });

  it('delegates to onEditModeKeyDown when keyDownDelegateActive is true', () => {
    const onEditModeKeyDown = jest.fn();
    const { getByTestId } = render(
      <Editable onChange={onChange} editing={false} keyDownDelegateActive={true} onEditModeKeyDown={onEditModeKeyDown}>
        <span />
      </Editable>
    );

    const editableWrapper = getByTestId('DesignSystem-EditableWrapper');
    fireEvent.keyDown(editableWrapper, { key: 'Escape' });

    expect(onEditModeKeyDown).toHaveBeenCalled();
  });
});

describe('Editable Component with overwrite class', () => {
  const className = 'DS-Editable';

  it('overwrite Editable class', () => {
    const { getByTestId } = render(
      <Editable onChange={onChange} className={className}>
        <span />
      </Editable>
    );
    expect(getByTestId('DesignSystem-Editable')).toHaveClass(className);
  });
});
