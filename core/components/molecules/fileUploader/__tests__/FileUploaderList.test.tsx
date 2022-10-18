import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import FileUploaderList, { FileUploaderListProps as Props } from '../FileUploaderList';

const fileList: Props['fileList'] = [
  {
    file: (File = {
      name: 'Audio File.mp3',
      size: '3 MB',
      type: 'audio',
    } as any),
    status: 'uploading',
    progress: 45,
    id: 1,
  },
  {
    file: (File = {
      name: 'Video File.mp4',
      size: '3 MB',
      type: 'video',
    } as any),
    status: 'completed',
    id: 2,
  },
  {
    file: (File = {
      name: 'Image File.jpeg',
      size: '3 MB',
      type: 'image',
    } as any),
    status: 'error',
    errorMessage: 'Network failure',
    id: 3,
  },
];

const FunctionValue = jest.fn();

describe('FileUploaderList component', () => {
  const mapper: Record<string, any> = {
    fileList: valueHelper(fileList, { required: true }),
    onClick: valueHelper(FunctionValue, { required: true }),
    onDelete: valueHelper(FunctionValue, { required: true }),
    onRetry: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(<FileUploaderList {...attr} />);
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('FileUploaderList component prop:fileList', () => {
  it('renders component if fileList is empty', () => {
    const { queryByTestId } = render(<FileUploaderList />);
    expect(queryByTestId(/DesignSystem-FileUploader--List/i)).toBeNull();
  });

  it('renders component if fileList is not empty', () => {
    const { getByTestId, getAllByTestId } = render(
      <FileUploaderList fileList={fileList} onDelete={FunctionValue} onRetry={FunctionValue} onClick={FunctionValue} />
    );
    expect(getByTestId('DesignSystem-FileUploader--List')).toBeInTheDocument();
    expect(getAllByTestId('DesignSystem-FileUploader--Item')).toHaveLength(fileList.length);
  });
});

describe('FileUploaderList component Event Handler', () => {
  it('check for onClick Event Handler', () => {
    const { getAllByTestId } = render(<FileUploaderList fileList={fileList} onClick={FunctionValue} />);
    fireEvent.click(getAllByTestId('DesignSystem-FileUploader--Item')[0]);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('check for onDelete Event Handler', () => {
    const { getAllByTestId } = render(<FileUploaderList fileList={fileList} onDelete={FunctionValue} />);
    fireEvent.click(getAllByTestId('DesignSystem-FileUploader--CancelButton')[0]);
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('check for onRetry Event Handler', () => {
    const { getByTestId } = render(<FileUploaderList fileList={[fileList[2]]} onRetry={FunctionValue} />);
    fireEvent.click(getByTestId('DesignSystem-Button'));
    expect(FunctionValue).toHaveBeenCalled();
  });

  it('check for Error Caption', () => {
    const { getByTestId } = render(<FileUploaderList fileList={[fileList[2]]} onRetry={FunctionValue} />);
    expect(getByTestId('DesignSystem-InlineMessage--Description')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-InlineMessage--Description').textContent).toMatch('Network failure');
  });
});
