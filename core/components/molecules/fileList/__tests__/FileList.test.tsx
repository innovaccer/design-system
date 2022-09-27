import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';
import { fileList } from '../__stories__/__common__/fileListExample';
import { FileList, Button } from '@/index';
import { FileListProps as Props } from '@/index.type';
import { FileListItemProps } from '../FileListItem';

const FunctionValue = jest.fn();

type FileListType = Omit<FileListItemProps[], 'onClick'>;

describe('FileList component', () => {
  const mapper: Record<string, any> = {
    fileList: valueHelper(fileList, { required: true }),
    onClick: valueHelper(FunctionValue, { required: true }),
    actionRenderer: valueHelper(FunctionValue, { required: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as Props;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(<FileList {...attr} />);
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('FileList component', () => {
  it('does not render if file list is empty', () => {
    const { queryByTestId } = render(<FileList fileList={[]} />);
    expect(queryByTestId('DesignSystem-FileListItem')).not.toBeInTheDocument();
  });

  it('renders list of files', () => {
    const { getAllByTestId } = render(<FileList fileList={fileList as FileListType} />);
    expect(getAllByTestId('DesignSystem-FileListItem')).toHaveLength(fileList.length);
  });

  it('renders name of file', () => {
    const { getAllByTestId } = render(<FileList fileList={fileList as FileListType} />);
    expect(getAllByTestId('DesignSystem-FileListItem--Name')[0].textContent).toMatch(fileList[0].file.name);
  });

  it('renders size of file', () => {
    const { getAllByTestId } = render(<FileList fileList={fileList as FileListType} />);
    expect(getAllByTestId('DesignSystem-FileListItem--Size')[0].textContent).toMatch(`${fileList[0].file.size}`);
    expect(getAllByTestId('DesignSystem-FileListItem--Size')[1].textContent).toMatch(`${fileList[1].fileSize}`);
  });

  it('renders file with status: completed', () => {
    const { getAllByTestId } = render(<FileList fileList={fileList as FileListType} />);
    expect(getAllByTestId('DesignSystem-FileListItem--Icon')[0]).toHaveClass('FileIcon--animate');
  });

  it('renders file with status: uploading', () => {
    const { getByTestId } = render(<FileList fileList={[fileList[0]] as FileListType} />);
    expect(getByTestId('DesignSystem-FileListItem--ProgressRing')).toBeInTheDocument();
  });

  it('renders file with status: error', () => {
    const { getByTestId } = render(<FileList fileList={[fileList[2]] as FileListType} />);
    expect(getByTestId('DesignSystem-InlineMessage--Description').textContent).toMatch(`${fileList[2].errorMessage}`);
    expect(getByTestId('DesignSystem-FileListItem--Name')).toHaveClass('Text--subtle');
    expect(getByTestId('DesignSystem-FileListItem--Icon')).not.toHaveClass('FileIcon--animate');
  });
});

describe('FileList component with prop: onClick', () => {
  it('onClick callback is called', () => {
    const { getAllByTestId } = render(<FileList fileList={fileList as FileListType} onClick={FunctionValue} />);

    const fileItem = getAllByTestId('DesignSystem-FileListItem')[0];
    fireEvent.click(fileItem);
    expect(FunctionValue).toHaveBeenCalled();
  });
});

describe('FileList component with different file icons', () => {
  it('renders video file icon', () => {
    const { getByTestId } = render(<FileList fileList={[fileList[1]] as FileListType} />);
    expect(getByTestId('DesignSystem-FileListItem--Icon').textContent).toMatch('movie');
  });

  it('renders document file icon', () => {
    const { getByTestId } = render(<FileList fileList={[fileList[3]] as FileListType} />);
    expect(getByTestId('DesignSystem-FileListItem--Icon').textContent).toMatch('insert_drive_file');
  });

  it('renders other file icon', () => {
    const { getByTestId } = render(<FileList fileList={[fileList[4]] as FileListType} />);
    expect(getByTestId('DesignSystem-FileListItem--Icon').textContent).toMatch('text_snippet');
  });
});

describe('FileList component with prop: actionRenderer', () => {
  it('onClick callback is called', () => {
    const { getAllByTestId } = render(
      <FileList
        fileList={fileList as FileListType}
        actionRenderer={() => (
          <Button
            appearance="transparent"
            icon="close"
            size="regular"
            data-test="DesignSystem-FileList--Button"
            className="cursor-pointer"
          />
        )}
      />
    );

    expect(getAllByTestId('DesignSystem-FileList--Button')).toHaveLength(fileList.length);
  });
});
