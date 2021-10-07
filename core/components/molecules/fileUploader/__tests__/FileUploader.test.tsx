import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import FileUploader, { FileUploaderProps as Props } from '../FileUploader';
import Link from '@/components/atoms/link';

const title = 'File Uploader Title';
const maxSizeLabel = 'Maximum size: 30 MB';
const formatLabel = 'Accepted formats: PDF, jpg, png';
const BooleanValue = [true, false];
const uploadButtonLabel = 'Upload documents';
const acceptedFileFormat = ['jpg', 'pdf', 'png'];
const FunctionValue = jest.fn();
const expampleFile = {
  name: '_DSC0071.JPG',
  size: 585947,
  type: 'image/jpeg',
};

describe('FileUploader component', () => {
  const mapper: Record<string, any> = {
    title: valueHelper(title, { required: true }),
    sizeLabel: valueHelper(maxSizeLabel, { required: true }),
    uploadButtonLabel: valueHelper(uploadButtonLabel, { required: true }),
    formatLabel: valueHelper(formatLabel, { required: true }),
    onChange: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(<FileUploader {...attr} />);
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('FileUploader component prop:accept snapshot', () => {
  const mapper: Record<string, any> = {
    accept: valueHelper(acceptedFileFormat, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(<FileUploader {...attr} />);
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('FileUploader component prop:multiple snapshot', () => {
  const mapper: Record<string, any> = {
    multiple: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(<FileUploader {...attr} />);
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('FileUploader component prop:disabled snapshot', () => {
  const mapper: Record<string, any> = {
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(<FileUploader {...attr} />);
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('FileUploader component prop:title', () => {
  it('renders title element', () => {
    const { getAllByTestId } = render(<FileUploader title={title} />);
    expect(getAllByTestId('DesignSystem-Text')[0]).toBeInTheDocument();
    expect(getAllByTestId('DesignSystem-Text')[0].textContent).toMatch(title);
    expect(getAllByTestId('DesignSystem-Text')[0]).toHaveClass('Text--default Text--regular');
  });

  it('check for default title', () => {
    const { getAllByTestId } = render(<FileUploader />);
    expect(getAllByTestId('DesignSystem-Text')[0]).toBeInTheDocument();
    expect(getAllByTestId('DesignSystem-Text')[0].textContent).toMatch('Upload files');
    expect(getAllByTestId('DesignSystem-Text')[0]).toHaveClass('Text--default Text--regular');
  });
});

describe('FileUploader component prop:sizeLabel', () => {
  it('renders sizeLabel element', () => {
    const { getAllByTestId } = render(<FileUploader sizeLabel={maxSizeLabel} />);
    expect(getAllByTestId('DesignSystem-Text')[1]).toBeInTheDocument();
    expect(getAllByTestId('DesignSystem-Text')[1].textContent).toMatch(maxSizeLabel);
    expect(getAllByTestId('DesignSystem-Text')[1]).toHaveClass('Text--subtle Text--small');
  });

  it('check for default sizeLabel', () => {
    const { getAllByTestId } = render(<FileUploader />);
    expect(getAllByTestId('DesignSystem-Text')[1]).toBeInTheDocument();
    expect(getAllByTestId('DesignSystem-Text')[1].textContent).toMatch('Maximum size: 25 MB');
    expect(getAllByTestId('DesignSystem-Text')[1]).toHaveClass('Text--subtle Text--small');
  });
});

describe('FileUploader component prop:formatLabel', () => {
  it('renders formatLabel element', () => {
    const { getAllByTestId } = render(<FileUploader formatLabel={formatLabel} />);
    expect(getAllByTestId('DesignSystem-Text')[1]).toBeInTheDocument();
    expect(getAllByTestId('DesignSystem-Text')[1].textContent).toMatch(formatLabel);
    expect(getAllByTestId('DesignSystem-Text')[1]).toHaveClass('Text--subtle Text--small');
  });
});

describe('FileUploader component with overwrite class', () => {
  it('overwrite DesignSystem-FileUploader class', () => {
    const { getByTestId } = render(<FileUploader className="customClass" />);
    expect(getByTestId('DesignSystem-FileUploader')).toHaveClass('customClass');
  });
});

describe('FileUploader component prop:uploadButtonLabel', () => {
  it('renders uploadButtonLabel element', () => {
    const { getByTestId } = render(<FileUploader uploadButtonLabel={uploadButtonLabel} />);
    expect(getByTestId('DesignSystem-Button')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Button').textContent).toMatch(uploadButtonLabel);
  });

  it('checks for uploadButtonLabel element default values', () => {
    const { getByTestId } = render(<FileUploader />);
    expect(getByTestId('DesignSystem-Button')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-Button').textContent).toMatch('Upload files');
  });
});

describe('FileUploader component prop:onChange', () => {
  it('check for onChange callback when file input is changed', () => {
    const { getByTestId } = render(<FileUploader onChange={FunctionValue} />);
    fireEvent.change(getByTestId('DesignSystem-FileUploaderButton--Input'), { target: { files: expampleFile } });
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('check for onChange callback when file input is not changed', () => {
    const { getByTestId } = render(<FileUploader onChange={FunctionValue} />);
    fireEvent.change(getByTestId('DesignSystem-FileUploaderButton--Input'));
    expect(FunctionValue).toHaveBeenCalled();
  });
});

describe('FileUploader component prop:disabled', () => {
  it('check for fileUploaderButton if disabled is true', () => {
    const { getByTestId } = render(<FileUploader disabled={true} />);
    expect(getByTestId('DesignSystem-Button')).toHaveAttribute('disabled');
  });

  it('check for fileUploaderButton if disabled is false', () => {
    const { getByTestId } = render(<FileUploader disabled={false} />);
    expect(getByTestId('DesignSystem-Button')).not.toHaveAttribute('disabled');
    expect(getByTestId('DesignSystem-Button')).toHaveClass('Button--basic');
  });
});

describe('FileUploader component prop:sampleFileLink', () => {
  it('check for sampleFileLink element', () => {
    const { getByTestId } = render(
      <FileUploader
        sampleFileLink={
          <Link
            href="http://www.adobe.com/content/dam/Adobe/en/accessibility/pdfs/accessing-pdf-sr.pdf"
            download="Test.pdf"
            target="_blank"
          >
            Download sample file
          </Link>
        }
      />
    );
    expect(getByTestId('DesignSystem-Link')).toBeInTheDocument();
  });
});
