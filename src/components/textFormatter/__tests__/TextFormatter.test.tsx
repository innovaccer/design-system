import * as React from 'react';
import { render } from '@testing-library/react';
import { Bold, Italic, Underline, Strikethrough, TextFormatterProps as Props } from '../TextFormatter';
import { testHelper, filterUndefined, testMessageHelper } from '@/utils/testHelper';

const children = 'TextFormatter text';

describe('Bold component', () => {
  describe('Snapshots', () => {
    const mapper = {};
    const testFunc = (props: Record<string, any>): void => {
      const attr = filterUndefined(props) as Props;

      it(testMessageHelper(attr), () => {
        const { baseElement } = render(<Bold>{children}</Bold>);
        expect(baseElement).toMatchSnapshot();
      });
    };

    testHelper(mapper, testFunc);
  });

  describe('Unit tests', () => {
    it('should render children', () => {
      const { getByTestId } = render(<Bold>{children}</Bold>);
      expect(getByTestId('DesignSystem-Bold')).toHaveTextContent(`${children}`);
    });

    it('should have bold tagname', () => {
      const { getByTestId } = render(<Bold>{children}</Bold>);
      expect(getByTestId('DesignSystem-Bold').tagName).toEqual('B');
    });

    it('should have font-weight=bold', () => {
      const { getByTestId } = render(<Bold>{children}</Bold>);
      expect(getByTestId('DesignSystem-Bold')).toHaveStyle('fontWeight: bold');
    });
  });
});

describe('Italic component', () => {
  describe('Snapshots', () => {
    const mapper = {};
    const testFunc = (props: Record<string, any>): void => {
      const attr = filterUndefined(props) as Props;

      it(testMessageHelper(attr), () => {
        const { baseElement } = render(<Italic>{children}</Italic>);
        expect(baseElement).toMatchSnapshot();
      });
    };

    testHelper(mapper, testFunc);
  });

  describe('Unit Tests', () => {
    it('should render children', () => {
      const { getByTestId } = render(<Italic>{children}</Italic>);
      expect(getByTestId('DesignSystem-Italic')).toHaveTextContent(`${children}`);
    });

    it('should have Italic tagname', () => {
      const { getByTestId } = render(<Italic>{children}</Italic>);
      expect(getByTestId('DesignSystem-Italic').tagName).toEqual('I');
    });

    it('should have font-weight=Italic', () => {
      const { getByTestId } = render(<Italic>{children}</Italic>);
      expect(getByTestId('DesignSystem-Italic')).toHaveStyle('fontStyle: italic');
    });
  });
});

describe('Strikethrough component', () => {
  describe('Snapshots', () => {
    const mapper = {};
    const testFunc = (props: Record<string, any>): void => {
      const attr = filterUndefined(props) as Props;

      it(testMessageHelper(attr), () => {
        const { baseElement } = render(<Strikethrough>{children}</Strikethrough>);
        expect(baseElement).toMatchSnapshot();
      });
    };

    testHelper(mapper, testFunc);
  });

  describe('Unit Tests', () => {
    it('should render children', () => {
      const { getByTestId } = render(<Strikethrough>{children}</Strikethrough>);
      expect(getByTestId('DesignSystem-Strikethrough')).toHaveTextContent(`${children}`);
    });

    it('should have Strikethrough tagname', () => {
      const { getByTestId } = render(<Strikethrough>{children}</Strikethrough>);
      expect(getByTestId('DesignSystem-Strikethrough').tagName).toEqual('S');
    });

    it('should have font-weight=Strikethrough', () => {
      const { getByTestId } = render(<Strikethrough>{children}</Strikethrough>);
      expect(getByTestId('DesignSystem-Strikethrough')).toHaveStyle('textDecoration: line-through');
    });
  });
});

describe('Underline component', () => {
  describe('Snapshots', () => {
    const mapper = {};
    const testFunc = (props: Record<string, any>): void => {
      const attr = filterUndefined(props) as Props;

      it(testMessageHelper(attr), () => {
        const { baseElement } = render(<Underline>{children}</Underline>);
        expect(baseElement).toMatchSnapshot();
      });
    };

    testHelper(mapper, testFunc);
  });

  describe('Unit tests', () => {
    it('should render children', () => {
      const { getByTestId } = render(<Underline>{children}</Underline>);
      expect(getByTestId('DesignSystem-Underline')).toHaveTextContent(`${children}`);
    });

    it('should have Underline tagname', () => {
      const { getByTestId } = render(<Underline>{children}</Underline>);
      expect(getByTestId('DesignSystem-Underline').tagName).toEqual('U');
    });

    it('should have font-weight=Underline', () => {
      const { getByTestId } = render(<Underline>{children}</Underline>);
      expect(getByTestId('DesignSystem-Underline')).toHaveStyle('textDecoration: underline');
    });
  });
});
