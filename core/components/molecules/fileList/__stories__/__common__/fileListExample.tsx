export const fileList = [
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
    fileSize: '4 MB',
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
  {
    file: (File = {
      name: 'Document File.pdf',
      size: '3 MB',
      type: 'application',
    } as any),
    status: 'completed',
    id: 4,
  },
  {
    file: (File = {
      name: 'Other File',
      size: '3 MB',
      type: 'others',
    } as any),
    status: 'completed',
  },
];
