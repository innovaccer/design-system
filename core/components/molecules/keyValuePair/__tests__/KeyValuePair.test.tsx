import * as React from 'react';
import { render } from '@testing-library/react';
import { KeyValuePair, Text } from '@/index';
import { KeyValuePairProps as Props } from '@/index.type';
import { testHelper, filterUndefined, testMessageHelper } from '@/utils/testHelper';

const label = 'Label';
const value = 'Value';

describe('KeyValue component snapshot', () => {
  const mapper = {};

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;
    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <KeyValuePair>
          <KeyValuePair.Key label={label} />
          <KeyValuePair.Value value={value} />
        </KeyValuePair>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };
  testHelper(mapper, testFunc);
});

describe('KeyValue component with Key sub component', () => {
  it('check for prop:label', () => {
    const { getByTestId } = render(
      <KeyValuePair>
        <KeyValuePair.Key label={label} />
      </KeyValuePair>
    );
    expect(getByTestId('DesignSystem-KeyValuePair-KeyElement')).toHaveTextContent(label);
  });

  it('check for prop:icon with default alignment', () => {
    const { getByTestId, queryByTestId } = render(
      <KeyValuePair>
        <KeyValuePair.Key label={label} icon="events" />
      </KeyValuePair>
    );

    expect(getByTestId('DesignSystem-KeyValuePair-Icon--Left')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-KeyValuePair-Icon--Left')).toHaveClass('Icon--subtle');
    expect(queryByTestId('DesignSystem-KeyValuePair-Icon--Right')).not.toBeInTheDocument();
  });

  it('check for prop:icon with iconAlign:right', () => {
    const { getByTestId, queryByTestId } = render(
      <KeyValuePair>
        <KeyValuePair.Key label={label} icon="events" iconAlign="right" />
      </KeyValuePair>
    );

    expect(queryByTestId('DesignSystem-KeyValuePair-Icon--Left')).not.toBeInTheDocument();
    expect(getByTestId('DesignSystem-KeyValuePair-Icon--Right')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-KeyValuePair-Icon--Right')).toHaveClass('Icon--subtle');
  });

  it('check for prop:iconOptions', () => {
    const { getByTestId } = render(
      <KeyValuePair>
        <KeyValuePair.Key label={label} icon="events" iconOptions={{ appearance: 'info', size: 24 }} />
      </KeyValuePair>
    );

    expect(getByTestId('DesignSystem-KeyValuePair-Icon--Left')).toHaveClass('Icon--info');
  });

  it('check for prop:children', () => {
    const { getByTestId } = render(
      <KeyValuePair>
        <KeyValuePair.Key label={label}>
          <Text>custom label</Text>
        </KeyValuePair.Key>
      </KeyValuePair>
    );

    expect(getByTestId('DesignSystem-KeyValuePair-KeyElement')).toHaveTextContent('custom label');
  });

  it('check for prop:className', () => {
    const { getByTestId } = render(
      <KeyValuePair>
        <KeyValuePair.Key label={label} className="custom-class" />
      </KeyValuePair>
    );

    expect(getByTestId('DesignSystem-KeyValuePair-KeyElement')).toHaveClass('custom-class');
  });
});

describe('KeyValue component with Value sub component', () => {
  it('check for prop:value', () => {
    const { getByTestId } = render(
      <KeyValuePair>
        <KeyValuePair.Value value={value} />
      </KeyValuePair>
    );
    expect(getByTestId('DesignSystem-KeyValuePair-ValueElement')).toHaveTextContent(value);
  });

  it('check for prop:children', () => {
    const { getByTestId } = render(
      <KeyValuePair>
        <KeyValuePair.Value value={value}>
          <Text>custom value</Text>
        </KeyValuePair.Value>
      </KeyValuePair>
    );

    expect(getByTestId('DesignSystem-KeyValuePair-ValueElement')).toHaveTextContent('custom value');
  });

  it('check for prop:className', () => {
    const { getByTestId } = render(
      <KeyValuePair>
        <KeyValuePair.Value value={value} className="custom-class" />
      </KeyValuePair>
    );

    expect(getByTestId('DesignSystem-KeyValuePair-ValueElement')).toHaveClass('custom-class');
  });
});
