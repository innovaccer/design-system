import * as React from 'react';
import { ProgressRing } from '@/index';

export const withAnimation = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress(progress + 25);
    }, 1000);

    return () => clearInterval(interval);
  });
  return <ProgressRing value={progress} max={100} />;
};

const customCode = `() => {
  const [progress, setProgress] = React.useState(0);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress(progress + 25);
    }, 1000);

    return () => clearInterval(interval)
  });

  return <ProgressRing value={progress} max={100} />;
}`;

export default {
  title: 'Components/Progress Indicators/ProgressRing/With Animation',
  component: ProgressRing,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'ProgressRing',
      },
    },
  },
};
