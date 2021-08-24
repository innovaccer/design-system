import * as React from 'react';
import { render } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { MetaList } from '@/index';
import { MetaListProps as Props } from '@/index.type';
import { Appearance as IconAppearance } from '../../icon';
import { Appearance as TextAppearance } from '../../text';

const appearance: IconAppearance[] = [
  'primary',
  'alert',
  'warning',
  'success',
  'accent1',
  'accent2',
  'accent3',
  'accent4',
  'default',
  'disabled',
  'info',
  'subtle',
  'white',
  'destructive',
  'primary_lighter',
  'primary_dark',
  'alert_lighter',
  'alert_dark',
  'warning_lighter',
  'warning_dark',
  'success_lighter',
  'success_dark',
  'accent1_lighter',
  'accent1_dark',
  'accent2_lighter',
  'accent2_dark',
  'accent3_lighter',
  'accent3_dark',
  'accent4_lighter',
  'accent4_dark',
  'inverse'
];

const labelAppearance: TextAppearance[] = [
  'success',
  'default',
  'disabled',
  'link',
  'subtle',
  'white',
  'destructive'
];

const booleanValues = [true, false];

const listWithTwoElements = [
  { icon: 'assessment', label: 'Meta data' },
  { icon: 'assessment', label: 'Meta data two' }
];

const getIconAppearance = (iconColor: string) => {
  const x = iconColor.indexOf('_');
  return iconColor.slice(0, x) + iconColor.charAt(x + 1).toUpperCase() + iconColor.slice(x + 2);
};

describe('MetaList component prop:seperatorAppearance options', () => {
  const mapper = {
    seperatorAppearance: valueHelper(appearance, { iterate: true, required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = render(
        <MetaList
          {...attr}
          list={[{ icon: 'assessment', label: 'Meta data' }, { icon: 'assessment', label: 'Meta data' }]}
        />

      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('MetaList component prop:IconAppearance options', () => {
  const mapper = {
    IconAppearance: valueHelper(appearance, { iterate: true, required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = render(
        <MetaList
          {...attr}
          list={[{ icon: 'assessment', label: 'Meta data' }]}
        />

      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('MetaList component prop:labelAppearance options', () => {
  const mapper = {
    labelAppearance: valueHelper(labelAppearance, { iterate: true, required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = render(
        <MetaList
          {...attr}
          list={[{ icon: 'assessment', label: 'Meta data' }, { icon: 'assessment', label: 'Meta data' }]}
        />

      );
      expect(tree).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('MetaList component prop:seperator options', () => {
  const mapper = {
    seperator: valueHelper(booleanValues, { iterate: true, required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const tree = render(
        <MetaList
          {...attr}
          list={[{ icon: 'assessment', label: 'Meta data' }]}
        />

      );
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
    const { getAllByTestId } = render(<MetaList list={[{ label: 'Meta data' }, { icon: 'assessment', label: 'Meta data two' }, { label: 'Meta data three' }]} />);
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
    const { getByTestId } = render(<MetaList list={[{ icon: 'assessment', label: 'Meta data' }]} className="MetaListClass" />);
    expect(getByTestId('DesignSystem-MetaList')).toHaveClass('MetaListClass');
  });
});

describe('MetaList component with different prop:seperatorAppearance', () => {
  appearance.forEach((color) => {
    const colorOption = color && color.includes('_') ? getIconAppearance(color) : color;

    it(`should have the Icon--${color} class when seperatorAppearance=${color} `, () => {
      const { getByTestId } = render(<MetaList list={[{ icon: 'assessment', label: 'Meta data' }]} seperator={true} seperatorAppearance={color}/>);
      expect(getByTestId('DesignSystem-MetaList--Seperator')).toHaveClass(`Icon--${colorOption}`);
    });
  });
});

describe('MetaList component with different prop:IconAppearance', () => {
  appearance.forEach((color) => {
    const colorOption = color && color.includes('_') ? getIconAppearance(color) : color;

    it(`should have the Icon--${color} class when IconAppearance=${color} `, () => {
      const { getByTestId } = render(<MetaList list={[{ icon: 'assessment', label: 'Meta data' }]} iconAppearance={color}/>);
      expect(getByTestId('DesignSystem-MetaList--MetaIcon')).toHaveClass(`Icon--${colorOption}`);
    });
  });
});

describe('MetaList component with different prop:labelAppearance', () => {
  labelAppearance.forEach((color) => {
    it(`should have the Text--${color} class when labelAppearance=${color} `, () => {
      const { getByTestId } = render(<MetaList list={[{ icon: 'assessment', label: 'Meta data' }]} labelAppearance={color}/>);
      expect(getByTestId('DesignSystem-MetaList--MetaLabel')).toHaveClass(`Text--${color}`);
    });
  });
});
