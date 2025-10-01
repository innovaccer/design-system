import * as React from 'react';
import { render } from '@testing-library/react';
import { DocumentPreview } from '@/index';
import { DocumentPreviewProps as Props } from '@/index.type';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const dimensions: Props['dimension'][] = ['regular', 'large'];

describe('DocumentPreview component', () => {
  const mapper = {
    dimension: valueHelper(dimensions, { required: true, iterate: true }),
    open: valueHelper([true], { required: true }),
    onClose: valueHelper([jest.fn()], { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { baseElement } = render(<DocumentPreview {...attr} documentUrls={['https://example.com/test.pdf']} />);
      expect(baseElement).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);

  describe('DocumentPreview functionality', () => {
    const defaultProps: Props = {
      open: true,
      onClose: jest.fn(),
      documentUrls: ['https://example.com/test.pdf'],
      dimension: 'regular',
    };

    it('Should render with required props', () => {
      const { getByTestId } = render(<DocumentPreview {...defaultProps} />);
      expect(getByTestId('DocumentPreview')).toBeInTheDocument();
    });

    it('Should render with multiple documents', () => {
      const props = {
        ...defaultProps,
        documentUrls: [
          'https://example.com/test1.pdf',
          'https://example.com/test2.jpg',
          'https://example.com/test3.txt',
        ],
      };
      const { getByTestId } = render(<DocumentPreview {...props} />);
      expect(getByTestId('DocumentPreview')).toBeInTheDocument();
    });

    it('Should render with documents array', () => {
      const documents = [
        { src: 'https://example.com/test1.pdf', title: 'Test PDF' },
        { src: 'https://example.com/test2.jpg', title: 'Test Image' },
      ];
      const props = {
        ...defaultProps,
        documents,
        documentUrls: undefined,
      };
      const { getByTestId } = render(<DocumentPreview {...props} />);
      expect(getByTestId('DocumentPreview')).toBeInTheDocument();
    });

    it('Should render loading state', () => {
      const props = {
        ...defaultProps,
        loading: true,
      };
      const { getByTestId } = render(<DocumentPreview {...props} />);
      expect(getByTestId('DocumentPreview')).toBeInTheDocument();
    });

    it('Should render error state', () => {
      const props = {
        ...defaultProps,
        error: 'Failed to load document',
      };
      const { getByText } = render(<DocumentPreview {...props} />);
      expect(getByText('Failed to load document')).toBeInTheDocument();
    });

    it('Should render with disabled print', () => {
      const props = {
        ...defaultProps,
        disablePrint: true,
      };
      const { getByTestId } = render(<DocumentPreview {...props} />);
      expect(getByTestId('DocumentPreview')).toBeInTheDocument();
    });

    it('Should render with disabled download', () => {
      const props = {
        ...defaultProps,
        disableDownload: true,
      };
      const { getByTestId } = render(<DocumentPreview {...props} />);
      expect(getByTestId('DocumentPreview')).toBeInTheDocument();
    });

    it('Should render with navigation controls', () => {
      const props = {
        ...defaultProps,
        showNavigation: true,
        documentUrls: ['https://example.com/test1.pdf', 'https://example.com/test2.pdf'],
      };
      const { getByTestId } = render(<DocumentPreview {...props} />);
      expect(getByTestId('DocumentPreview')).toBeInTheDocument();
    });

    it('Should render with zoom controls', () => {
      const props = {
        ...defaultProps,
        showZoomControls: true,
      };
      const { getByTestId } = render(<DocumentPreview {...props} />);
      expect(getByTestId('DocumentPreview')).toBeInTheDocument();
    });

    it('Should render with expanded mode', () => {
      const props = {
        ...defaultProps,
        expandedMode: true,
      };
      const { getByTestId } = render(<DocumentPreview {...props} />);
      expect(getByTestId('DocumentDetailView')).toBeInTheDocument();
    });

    it('Should render with large dimension', () => {
      const props = {
        ...defaultProps,
        dimension: 'large' as const,
      };
      const { getByTestId } = render(<DocumentPreview {...props} />);
      expect(getByTestId('DocumentPreview')).toBeInTheDocument();
    });

    it('Should render with custom zoom settings', () => {
      const props = {
        ...defaultProps,
        initialZoom: 150,
        minZoom: 50,
        maxZoom: 300,
        onZoomChange: jest.fn(),
      };
      const { getByTestId } = render(<DocumentPreview {...props} />);
      expect(getByTestId('DocumentPreview')).toBeInTheDocument();
    });

    it('Should render with back navigation', () => {
      const props = {
        ...defaultProps,
        showBackNavigation: true,
      };
      const { getByTestId } = render(<DocumentPreview {...props} />);
      expect(getByTestId('DocumentPreview')).toBeInTheDocument();
    });

    it('Should render with program source component', () => {
      const ProgramSourceComponent = () => <div data-testid="program-source">Program Source</div>;
      const props = {
        ...defaultProps,
        programSourceComponent: ProgramSourceComponent,
      };
      const { getByTestId } = render(<DocumentPreview {...props} />);
      expect(getByTestId('DocumentPreview')).toBeInTheDocument();
    });
  });
});
