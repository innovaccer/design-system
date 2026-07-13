import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { axe } from '@/utils/testAxe';
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

  it('Editable component with props editing (true) - hover does not trigger when editing', () => {
    const { getByTestId } = render(
      <Editable onChange={onChange} editing={true}>
        <span />
      </Editable>
    );

    const editableWrapper = getByTestId('DesignSystem-EditableWrapper');

    fireEvent.mouseEnter(editableWrapper);
    expect(onChange).not.toHaveBeenCalledWith('hover');

    fireEvent.mouseLeave(editableWrapper);
    expect(onChange).not.toHaveBeenCalledWith('default');
  });

  it('Editable component with props editing (false) - hover triggers hover and default', () => {
    const { getByTestId } = render(
      <Editable onChange={onChange} editing={false}>
        <span />
      </Editable>
    );

    const editableWrapper = getByTestId('DesignSystem-EditableWrapper');

    fireEvent.mouseEnter(editableWrapper);
    expect(onChange).toHaveBeenCalledWith('hover');

    fireEvent.mouseLeave(editableWrapper);
    expect(onChange).toHaveBeenCalledWith('default');
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
