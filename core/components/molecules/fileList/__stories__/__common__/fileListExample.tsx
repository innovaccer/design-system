import { FileListProps } from '@/components/molecules/fileList';

export const fileList: FileListProps['fileList'] = [
  {
    file: File = {
      name: 'Audio File.mp3',
      size: '3 MB',
      type: 'audio',
    } as any,
    status: 'uploading',
    progress: 45,
    id: 1,
    icon: {
      name: 'audiotrack'
    }
  },
  {
    file: File = {
      name: 'Video File.mp4',
      size: '3 MB',
      type: 'video',
    } as any,
    status: 'completed',
    id: 2,
    icon: {
      name: 'movie'
    }
  },
  {
    file: File = {
      name: 'Image File.jpeg',
      size: '3 MB',
      type: 'image',
    } as any,
    status: 'error',
    errorMessage: 'Network failure',
    id: 3,
    icon: {
      name: 'image',
    }
  },
  {
    file: File = {
      name: 'Document File.pdf',
      size: '3 MB',
      type: 'document',
    } as any,
    status: 'completed',
    id: 4,
    icon: {
      name: 'insert_drive_file',
    }
  },
  {
    file: File = {
      name: 'Other File',
      size: '3 MB',
      type: 'others',
    } as any,
    status: 'completed',
    icon: {
      name: 'text_snippet',
    }
  }
];
