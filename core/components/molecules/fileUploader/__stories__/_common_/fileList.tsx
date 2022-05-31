const file = {
  name: '_DSC0071.JPG',
  size: 585947,
  type: 'image/jpeg',
} as any;

export const fileList = [
  {
    file,
    status: 'uploading',
    progress: 45,
    id: 1,
  },
  {
    file,
    status: 'completed',
    id: 2,
  },
  {
    file,
    status: 'error',
    errorMessage: 'Network failure',
    id: 3,
  },
];
