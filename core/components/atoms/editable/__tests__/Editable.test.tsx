import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { axe } from 'jest-axe';
import Editable, { EditableProps as Props } from '../Editable';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const onChange = jest.fn();

describe('Editable component', () => {
  beforeEach(() => {
    onChange.mockClear();
  });

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
  beforeEach(() => {
    onChange.mockClear();
  });

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

  it('triggers edit shortcut keys even when editing is true', () => {
    const { getByTestId } = render(
      <Editable onChange={onChange} editing={true}>
        <span />
      </Editable>
    );

    const editableWrapper = getByTestId('DesignSystem-EditableWrapper');

    fireEvent.keyDown(editableWrapper, { key: 'Enter' });
    fireEvent.keyDown(editableWrapper, { key: ' ' });

    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenNthCalledWith(1, 'edit');
    expect(onChange).toHaveBeenNthCalledWith(2, 'edit');
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

  it('triggers edit on Enter and Space key when wrapper is focused', () => {
    const { getByTestId } = render(
      <Editable onChange={onChange} editing={false}>
        <span />
      </Editable>
    );

    const editableWrapper = getByTestId('DesignSystem-EditableWrapper');

    fireEvent.keyDown(editableWrapper, { key: 'Enter' });
    fireEvent.keyDown(editableWrapper, { key: ' ' });

    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenNthCalledWith(1, 'edit');
    expect(onChange).toHaveBeenNthCalledWith(2, 'edit');
  });

  it('triggers edit on Spacebar key alias when wrapper is focused', () => {
    const { getByTestId } = render(
      <Editable onChange={onChange} editing={false}>
        <span />
      </Editable>
    );

    const editableWrapper = getByTestId('DesignSystem-EditableWrapper');

    fireEvent.keyDown(editableWrapper, { key: 'Spacebar', code: 'Space' });

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

describe('Editable component a11y', () => {
  it('has no detectable a11y violations', async () => {
    const { container } = render(
      <Editable onChange={onChange}>
        <div>First Name</div>
      </Editable>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
