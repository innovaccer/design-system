import * as React from 'react';
import ProgressBar from '../ProgressRing';

const customCode = `() => {
  const [progress, setProgress] = React.useState(0);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress(progress + 25);
    }, 1000);
  });

  return <ProgressRing value={progress} max={100} />;
}`;

export const withAnimation = () => <></>;

export default {
  title: 'Components/ProgressRing/With Animation',
  component: ProgressBar,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'ProgressRing',
      },
    },
  },
};
