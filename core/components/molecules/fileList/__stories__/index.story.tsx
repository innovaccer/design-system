import * as React from 'react';
import { FileList, Button } from '@/index';
import { fileList } from './__common__/fileListExample';
import { action } from '@storybook/addon-actions';
import { FileListItemProps } from '../FileListItem';

export const all = () => {

  const onClick = (file: FileListItemProps) => {
    return action(`Clicked ${file}`)();
  };

  return (
    <FileList
      onClick={onClick}
      fileList={fileList}
      className="mt-4 FileList"
      actionRenderer={fileItem => {
        if (fileItem.id === 3) {
          return(
            <>
            <Button
              appearance="transparent"
              icon="refresh"
              size="regular"
              onClick={() => onClick(fileItem)}
              className={'cursor-pointer'}
            />
            <Button
              appearance="transparent"
              icon="close"
              size="regular"
              onClick={() => onClick(fileItem)}
              className={'cursor-pointer ml-2'}
            />
          </>
          );
        }
        return (
          <Button
            appearance="transparent"
            icon="close"
            size="regular"
            onClick={() => {}}
            className={'cursor-pointer'}
          />
        );
      }
      }
    />
  );
};

const customCode = `() => {
  const fileList = [
    {
      file:{
        name: 'Audio File.mp3',
        size: '3 MB',
        type: 'audio',
      },
      status: 'uploading',
      progress: 45,
      id: 1,
      icon: {
        name: 'audiotrack'
      }
    },
    {
      file:{
        name: 'Video File.mp4',
        size: '3 MB',
        type: 'video',
      },
      status: 'completed',
      id: 2,
      icon: {
        name: 'movie'
      }
    },
    {
      file:{
        name: 'Image File.jpeg',
        size: '3 MB',
        type: 'image',
      },
      status: 'error',
      errorMessage: 'Network failure',
      id: 3,
      icon: {
        name: 'image',
      }
    },
    {
      file:{
        name: 'Document File.pdf',
        size: '3 MB',
        type: 'document',
      },
      status: 'completed',
      id: 4,
      icon: {
        name: 'insert_drive_file',
      }
    },
    {
      file:{
        name: 'Other File',
        size: '3 MB',
        type: 'others',
      },
      status: 'completed',
      id: 5,
      icon: {
        name: 'text_snippet',
      }
    }
  ];

  const onClick = (file) => {
    console.log(\`Clicked: \${file}\`);
  };

  return (
    <FileList
      onClick={onClick}
      fileList={fileList}
      className="mt-4 FileList"
      actionRenderer={fileItem => {
        if (fileItem.id === 3) {
          return(
            <>
            <Button
              appearance="transparent"
              icon="refresh"
              size="regular"
              onClick={() => onClick(fileItem)}
              className={'cursor-pointer'}
            />
            <Button
              appearance="transparent"
              icon="close"
              size="regular"
              onClick={() => onClick(fileItem)}
              className={'cursor-pointer ml-2'}
            />
          </>
          );
        }
        return (
          <Button
            appearance="transparent"
            icon="close"
            size="regular"
            onClick={() => {}}
            className={'cursor-pointer'}
          />
        );
      }
      }
    />
  );
}`;

export default {
  title: 'Molecules|FileList',
  component: FileList,
  parameters: {
    docs: {
      docPage: {
        customCode
      }
    }
  }
};
