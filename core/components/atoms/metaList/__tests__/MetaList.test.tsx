import * as React from 'react';
import { render } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { MetaList } from '@/index';
import { MetaListProps as Props } from '@/index.type';
import { MetaSize } from '../MetaList';

const booleanValues = [true, false];

const listWithTwoElements = [
  { icon: 'assessment', label: 'Meta data' },
  { icon: 'assessment', label: 'Meta data two' },
];

const sizeList: MetaSize[] = ['regular', 'small'];

describe('MetaList component prop:seperator options', () => {
  const mapper = {
    seperator: valueHelper(booleanValues, { iterate: true, required: true }),
    size: valueHelper(sizeList, { iterate: true, required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = render(<MetaList {...attr} list={[{ icon: 'assessment', label: 'Meta data' }]} />);
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('MetaList component with prop:list', () => {
  it('renders list when one element is given', () => {
    const { getByTestId } = render(<MetaList list={[{ icon: 'assessment', label: 'Meta data' }]} seperator={true} />);
    expect(getByTestId('DesignSystem-MetaList--MetaLabel').textContent).toMatch('Meta data');
  });

  it('renders list when more than one elements are given', () => {
    const { getAllByTestId } = render(<MetaList list={listWithTwoElements} />);
    expect(getAllByTestId('DesignSystem-MetaList--MetaLabel')[0].textContent).toMatch('Meta data');
    expect(getAllByTestId('DesignSystem-MetaList--MetaLabel')[1].textContent).toMatch('Meta data two');
  });

  it('renders list when no element is given', () => {
    const { getByTestId } = render(<MetaList list={[]} />);
    expect(getByTestId('DesignSystem-MetaList')).not.toContainHTML('DesignSystem-MetaList--Meta');
  });

  it('renders list when label is not given', () => {
    const { getByTestId } = render(<MetaList list={[{ icon: 'assessment', label: '' }]} />);
    expect(getByTestId('DesignSystem-MetaList--MetaLabel').textContent).toMatch('');
  });
});

describe('MetaList component with prop:Icon', () => {
  it('render the icon prop if present', () => {
    const { getByTestId } = render(<MetaList list={[{ icon: 'assessment', label: 'Meta data' }]} />);
    expect(getByTestId('DesignSystem-MetaList--MetaIcon')).toBeInTheDocument();
  });

  it('check for icon prop when it is not present', () => {
    const { getByTestId } = render(<MetaList list={[{ label: 'Meta data' }]} />);
    expect(getByTestId('DesignSystem-MetaList')).not.toContainHTML('DesignSystem-MetaList--MetaIcon');
  });

  it('check for icon prop when list is empty', () => {
    const { getByTestId } = render(<MetaList list={[]} />);
    expect(getByTestId('DesignSystem-MetaList')).not.toContainHTML('DesignSystem-MetaList--MetaIcon');
  });

  it('check for icon prop when list contain more than one element', () => {
    const { getAllByTestId } = render(
      <MetaList
        list={[{ label: 'Meta data' }, { icon: 'assessment', label: 'Meta data two' }, { label: 'Meta data three' }]}
      />
    );
    expect(getAllByTestId('DesignSystem-MetaList--MetaIcon')).toHaveLength(1);
  });
});

describe('MetaList component with prop:separator', () => {
  it('check for separator prop when it is true', () => {
    const { getByTestId } = render(<MetaList list={listWithTwoElements} seperator={true} />);
    expect(getByTestId('DesignSystem-MetaList--Seperator')).toBeInTheDocument();
  });

  it('check for separator prop when it is false', () => {
    const { getByTestId } = render(<MetaList list={listWithTwoElements} seperator={false} />);
    expect(getByTestId('DesignSystem-MetaList')).not.toContainHTML('DesignSystem-MetaList--Seperator');
  });

  it('check for separator prop when it is enabled & list is empty', () => {
    const { getByTestId } = render(<MetaList list={[]} seperator={true} />);
    expect(getByTestId('DesignSystem-MetaList--Seperator')).toBeInTheDocument();
  });
});

describe('MetaList component with rightSeparator element', () => {
  it('check for rightSeparator prop when list is empty', () => {
    const { getByTestId } = render(<MetaList list={[]} />);
    expect(getByTestId('DesignSystem-MetaList')).not.toContainHTML('DesignSystem-MetaList--rightSeperator');
  });

  it('check for rightSeparator prop when list contain one element', () => {
    const { getByTestId } = render(<MetaList list={[{ icon: 'assessment', label: 'Meta data' }]} />);
    expect(getByTestId('DesignSystem-MetaList')).not.toContainHTML('DesignSystem-MetaList--rightSeperator');
  });

  it('check for rightSeparator prop when list contain more than one element', () => {
    const { getAllByTestId } = render(<MetaList list={listWithTwoElements} seperator={true} />);
    expect(getAllByTestId('DesignSystem-MetaList--rightSeperator')).toHaveLength(1);
  });
});

describe('MetaList component tagName', () => {
  it('renders tagName for parent element', () => {
    const { getByTestId } = render(<MetaList list={[{ icon: 'assessment', label: 'Meta data' }]} seperator={true} />);
    expect(getByTestId('DesignSystem-MetaList').tagName).toMatch('DIV');
  });

  it('renders tagName for child element', () => {
    const { getByTestId } = render(<MetaList list={[{ icon: 'assessment', label: 'Meta data' }]} seperator={true} />);
    expect(getByTestId('DesignSystem-MetaList--Meta').tagName).toMatch('SPAN');
  });
});

describe('MetaList Component with overwrite class', () => {
  it('overwrite MetaList class', () => {
    const { getByTestId } = render(
      <MetaList list={[{ icon: 'assessment', label: 'Meta data' }]} className="MetaListClass" />
    );
    expect(getByTestId('DesignSystem-MetaList')).toHaveClass('MetaListClass');
  });
});

describe('MetaList component with different prop:size', () => {
  sizeList.forEach((size) => {
    it(`should have the Text--${size} class `, () => {
      const { getByTestId } = render(<MetaList size={size} list={[{ icon: 'assessment', label: 'Meta data' }]} />);
      expect(getByTestId('DesignSystem-MetaList--MetaLabel')).toHaveClass(`Text--${size}`);
    });
  });
});
