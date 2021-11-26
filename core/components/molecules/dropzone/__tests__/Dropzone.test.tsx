import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import Dropzone, { DropzoneProps as Props, DropZoneType } from '../Dropzone';
import Link from '@/components/atoms/link';
import DropzoneError from '../DropzoneError';
import { fromEvent } from '../FileSelectorUtils';

const formatLabel = 'Accepted formats: PDF, JPG';
const sizeLabel = 'Maximum size: 30 MB';
const BooleanValue = [true, false];
const FunctionValue = jest.fn();

const fileData = {
  dataTransfer: {
    files: [new File(['(⌐□_□)'], 'file1.png')],
    types: ['Files'],
  },
  size: 1024,
};

const multipleFileData = {
  dataTransfer: {
    files: [new File(['(⌐□_□)'], 'file1.png'), new File(['(⌐□_□)'], 'file2.jpeg')],
    types: ['Files'],
  },
  size: 2048,
};

const minSize = 50;
const maxSize = 300;
const types: DropZoneType[] = ['standard', 'compressed', 'tight'];

describe('Dropzone component snapshot', () => {
  const mapper: Record<string, any> = {
    formatLabel: valueHelper(formatLabel, { required: true }),
    sizeLabel: valueHelper(sizeLabel, { required: true }),
    disabled: valueHelper(BooleanValue, { required: true, iterate: true }),
    type: valueHelper(types, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(<Dropzone {...attr} />);
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropzone component snapshot', () => {
  const mapper: Record<string, any> = {
    maxSize: valueHelper(maxSize, { required: true }),
    minSize: valueHelper(minSize, { required: true }),
    accept: 'image/png',
    preventDropOnDocument: valueHelper(BooleanValue, { required: true, iterate: true }),
    multiple: valueHelper(BooleanValue, { required: true, iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(<Dropzone {...attr} />);
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('Dropzone component', () => {
  it('renders prop:formatLabel', () => {
    const { getAllByTestId } = render(<Dropzone formatLabel={formatLabel} />);
    expect(getAllByTestId('DesignSystem-Text')[2]).toHaveTextContent(formatLabel);
  });

  it('renders prop:sizeLabel', () => {
    const { getAllByTestId } = render(<Dropzone sizeLabel={sizeLabel} />);
    expect(getAllByTestId('DesignSystem-Text')[2]).toHaveTextContent(sizeLabel);
  });

  it('renders prop:sizeLabel & prop:formatLabel', () => {
    const { getAllByTestId } = render(<Dropzone sizeLabel={sizeLabel} formatLabel={formatLabel} />);
    expect(getAllByTestId('DesignSystem-Text')[2]).toHaveTextContent(formatLabel);
    expect(getAllByTestId('DesignSystem-Text')[3]).toHaveTextContent(sizeLabel);
  });

  it('check for prop:disabled', () => {
    const { getByTestId } = render(<Dropzone disabled={true} />);
    expect(getByTestId('DesignSystem-Dropzone')).toHaveClass('Dropzone--disabled');
  });
});

describe('Dropzone component with prop:type', () => {
  types.forEach((type) => {
    it(`should have the Dropzone--${type} class when type=${type} `, () => {
      const { getByTestId } = render(<Dropzone type={type} />);
      expect(getByTestId('DesignSystem-Dropzone')).toHaveClass(`Dropzone--${type}`);
      expect(getByTestId('DesignSystem-Dropzone-Wrapper')).toHaveClass(`DropzoneWrapper--${type}`);
    });
  });
});

describe('Dropzone component prop:sampleFileLink', () => {
  it('check for sampleFileLink element', () => {
    const { getByTestId } = render(
      <Dropzone
        sampleFileLink={
          <Link href="" download="Test.pdf" target="_blank">
            Download sample file
          </Link>
        }
      />
    );
    expect(getByTestId('DesignSystem-Link')).toBeInTheDocument();
  });
});

describe('Dropzone component event handlers', () => {
  it('checks for onDragLeave event', () => {
    const { getByTestId } = render(<Dropzone onDragLeave={FunctionValue} accept="image/png" />);
    fireEvent.dragLeave(getByTestId('DesignSystem-Dropzone'), fileData);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('checks for onDragEnter event', () => {
    const { getByTestId } = render(
      <Dropzone onDragLeave={FunctionValue} accept="image/png" maxSize={maxSize} minSize={minSize} multiple={false} />
    );
    fireEvent.dragEnter(getByTestId('DesignSystem-Dropzone'), fileData);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('checks for onDragOver event', () => {
    const { getByTestId } = render(<Dropzone onDragOver={FunctionValue} accept="image/png" />);
    fireEvent.dragOver(getByTestId('DesignSystem-Dropzone'), fileData);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('checks for onDrop event', () => {
    const { getByTestId } = render(<Dropzone onDrop={FunctionValue} accept="image/png" />);
    fireEvent.drop(getByTestId('DesignSystem-Dropzone'), fileData);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('checks for onDropAccepted event', () => {
    const { getByTestId } = render(<Dropzone onDropAccepted={FunctionValue} accept="image/png" />);
    fireEvent.drop(getByTestId('DesignSystem-Dropzone'), fileData);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('checks for onDropRejected	event', () => {
    const { getByTestId } = render(<Dropzone onDropRejected={FunctionValue} accept="image/jpeg" />);
    fireEvent.drop(getByTestId('DesignSystem-Dropzone'), fileData);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('check for browse file onOpenDialog option', () => {
    const { getAllByTestId } = render(<Dropzone onDropAccepted={FunctionValue} />);

    fireEvent.click(getAllByTestId('DesignSystem-Text')[1]);
    fireEvent.focus(window);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('check for browse file onCloseDialog option', () => {
    const { getAllByTestId, getByTestId } = render(
      <Dropzone onFileDialogCancel={FunctionValue} onDragEnter={FunctionValue} />
    );

    fireEvent.dragEnter(getByTestId('DesignSystem-Dropzone'), fileData);
    fireEvent.click(getAllByTestId('DesignSystem-Text')[1]);
    fireEvent.focus(window);
    fireEvent.keyDown(window, { key: 'Escape', code: 'Escape' });

    expect(FunctionValue).toHaveBeenCalled();
  });
});

describe('dropzone component prop:multiple', () => {
  it('renders component when multiple=false', () => {
    const { getByTestId } = render(<Dropzone onDropRejected={FunctionValue} multiple={false} />);

    fireEvent.drop(getByTestId('DesignSystem-Dropzone'), multipleFileData);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('renders component when multiple=true', () => {
    const { getByTestId } = render(<Dropzone onDrop={FunctionValue} multiple={true} />);

    fireEvent.drop(getByTestId('DesignSystem-Dropzone'), multipleFileData);

    expect(FunctionValue).toHaveBeenCalled();
  });
});

describe('dropzone component prop:accept', () => {
  it('checks when prop:accept is passed as an array', () => {
    const { getByTestId } = render(<Dropzone onDrop={FunctionValue} multiple={true} accept={['image/png']} />);

    fireEvent.drop(getByTestId('DesignSystem-Dropzone'), multipleFileData);

    expect(FunctionValue).toHaveBeenCalled();
  });
});

describe('dropzone component prop:Size', () => {
  it('renders component when minSize exceeds file size', () => {
    const { getByTestId } = render(
      <Dropzone
        onDropRejected={FunctionValue}
        maxSize={maxSize}
        minSize={minSize}
        multiple={false}
        accept="image/jpeg"
      />
    );

    fireEvent.drop(getByTestId('DesignSystem-Dropzone'), fileData);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('renders component when file size exceeds maxSize', () => {
    const { getByTestId } = render(
      <Dropzone
        onDropRejected={FunctionValue}
        maxSize={10}
        minSize={minSize + 2000}
        multiple={false}
        accept="image/jpeg"
      />
    );

    fireEvent.drop(getByTestId('DesignSystem-Dropzone'), fileData);
    expect(FunctionValue).toHaveBeenCalled();
  });
});

describe('DropzoneError Component', () => {
  it('check for error message', () => {
    const { getByTestId } = render(<DropzoneError error="File Type Not Supported" type="standard" />);
    expect(getByTestId('DesignSystem-Text')).toHaveTextContent('File Type Not Supported');
  });
});

describe('dropzone component prop:getFilesFromEvent', () => {
  it('checks for onDragEnter event', () => {
    const { getByTestId } = render(
      <Dropzone
        onDragEnter={FunctionValue}
        multiple={true}
        accept={['image/png']}
        getFilesFromEvent={fromEvent}
        minSize={minSize}
        maxSize={maxSize}
      />
    );

    fireEvent.dragEnter(getByTestId('DesignSystem-Dropzone'), {});
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('checks when dragEnter rejected event', () => {
    const { getByTestId } = render(
      <Dropzone
        onDropRejected={FunctionValue}
        multiple={true}
        accept={['image/jpeg']}
        minSize={minSize}
        maxSize={maxSize}
      />
    );

    fireEvent.dragEnter(getByTestId('DesignSystem-Dropzone'), fileData);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('checks for onDrop event', () => {
    const { getByTestId } = render(
      <Dropzone
        onDrop={FunctionValue}
        multiple={true}
        accept={['image/png']}
        getFilesFromEvent={fromEvent}
        minSize={minSize}
        maxSize={maxSize}
      />
    );
    fireEvent.drop(getByTestId('DesignSystem-Dropzone'), fileData);
    expect(getByTestId('DesignSystem-Dropzone')).toBeInTheDocument();
    expect(FunctionValue).toHaveBeenCalled();
  });
});
