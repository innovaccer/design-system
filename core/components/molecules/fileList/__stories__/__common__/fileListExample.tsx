export const fileList = [
  {
    file: {
      name: 'Audio File.mp3',
      size: '3 MB',
      type: 'audio',
    },
    status: 'uploading',
    progress: 45,
    id: 1,
  },
  {
    file: {
      name: 'Video File.mp4',
      size: '3 MB',
      type: 'video',
    },
    status: 'completed',
    fileSize: '4 MB',
    id: 2,
  },
  {
    file: {
      name: 'Image File.jpeg',
      size: '3 MB',
      type: 'image',
    },
    status: 'error',
    errorMessage: 'Network failure',
    id: 3,
  },
  {
    file: {
      name: 'Document File.pdf',
      size: '3 MB',
      type: 'application',
    },
    status: 'completed',
    id: 4,
  },
  {
    file: {
      name: 'Other File',
      size: '3 MB',
      type: 'others',
    },
    status: 'completed',
  },
];
