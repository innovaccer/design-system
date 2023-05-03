import * as React from 'react';
import ProgressBar from '../ProgressBar';

const customCode = `() => {
  const [progress, setProgress] = React.useState(0);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress(progress + 25);
    }, 1000);
  });

  return <ProgressBar value={progress} max={100} />;
}`;

export const withAnimation = () => <></>;

export default {
  title: 'Components/ProgressIndicators/ProgressBar/With Animation',
  component: ProgressBar,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'ProgressBar',
      },
    },
  },
};
