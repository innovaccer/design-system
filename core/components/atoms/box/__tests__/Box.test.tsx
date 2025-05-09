import * as React from 'react';
import { render } from '@testing-library/react';
import { Box } from '@/index';
import { BoxProps as Props } from '@/index.type';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const display: Array<'inline' | 'inline-block' | 'block' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid'> = [
  'inline',
  'inline-block',
  'block',
  'flex',
  'inline-flex',
  'grid',
  'inline-grid',
];

const shadow: Array<'none' | 's' | 'm' | 'l'> = ['none', 's', 'm', 'l'];

const borderRadius: Array<'none' | '2-5' | '05' | '10' | '15' | '20' | '30' | '40' | 'full'> = [
  'none',
  '2-5',
  '05',
  '10',
  '15',
  '20',
  '30',
  '40',
  'full',
];

const padding = ['none', 'xs', 's', 'm', 'l', 'xl'];

const background: Array<
  'transparent' | 'light' | 'secondary-lightest' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
> = ['transparent', 'light', 'secondary-lightest', 'primary', 'secondary', 'success', 'warning', 'danger'];

const borderColor: Array<'none' | 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'> = [
  'none',
  'default',
  'primary',
  'secondary',
  'success',
  'warning',
  'danger',
];

const position: Array<'static' | 'relative' | 'absolute' | 'fixed' | 'sticky'> = [
  'static',
  'relative',
  'absolute',
  'fixed',
  'sticky',
];

const gap: Array<'xs' | 's' | 'm' | 'l'> = ['xs', 's', 'm', 'l'];
const flex: Array<1 | 2 | 3 | 4> = [1, 2, 3, 4];

describe('Box component', () => {
  const mapper: Record<string, any> = {
    display: valueHelper(display, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Box {...attr}>Box Content</Box>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Box component', () => {
  const mapper: Record<string, any> = {
    shadow: valueHelper(shadow, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Box {...attr}>Box Content</Box>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Box component', () => {
  const mapper: Record<string, any> = {
    borderRadius: valueHelper(borderRadius, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Box {...attr}>Box Content</Box>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Box component', () => {
  const mapper: Record<string, any> = {
    padding: valueHelper(padding, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Box {...attr}>Box Content</Box>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Box component', () => {
  const mapper: Record<string, any> = {
    background: valueHelper(background, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Box {...attr}>Box Content</Box>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Box component', () => {
  const mapper: Record<string, any> = {
    borderColor: valueHelper(borderColor, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Box {...attr}>Box Content</Box>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Box component', () => {
  const mapper: Record<string, any> = {
    position: valueHelper(position, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<Box {...attr}>Box Content</Box>);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Box component with custom dimensions', () => {
  it('renders with width and height props', () => {
    const { baseElement } = render(
      <Box width="200px" height="100px">
        Box Content
      </Box>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it('renders with percentage values', () => {
    const { baseElement } = render(
      <Box width="50%" height="50%">
        Box Content
      </Box>
    );
    expect(baseElement).toMatchSnapshot();
  });
});

describe('Box component with custom element', () => {
  it('renders with a custom HTML element', () => {
    const { baseElement } = render(<Box as="section">Box Content</Box>);
    expect(baseElement).toMatchSnapshot();
  });

  it('renders with a custom React component', () => {
    const CustomComponent = ({ children, ...props }: any) => <span {...props}>{children}</span>;
    const { baseElement } = render(<Box as={CustomComponent}>Box Content</Box>);
    expect(baseElement).toMatchSnapshot();
  });
});

describe('Box component with className', () => {
  it('applies custom className', () => {
    const { getByTestId } = render(<Box className="custom-class">Box Content</Box>);
    expect(getByTestId('DesignSystem-Box')).toHaveClass('custom-class');
  });
});

describe('Box component with data attributes', () => {
  it('applies HTML attributes', () => {
    const { getByTestId } = render(<Box data-custom="test-value">Box Content</Box>);
    expect(getByTestId('DesignSystem-Box')).toHaveAttribute('data-custom', 'test-value');
  });
});

describe('Box component', () => {
  const mapper: Record<string, any> = {
    gap: valueHelper(gap, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Box display="flex" {...attr}>
          Box Content
        </Box>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Box component', () => {
  const mapper: Record<string, any> = {
    flex: valueHelper(flex, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(
        <Box display="flex" {...attr}>
          Box Content
        </Box>
      );
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});
