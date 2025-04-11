import React from 'react';
import { AIButton } from '@/index';

export const sparkle = () => {
  return (
    <div className="d-flex justify-content-between w-50">
      <AIButton>With Sparkle</AIButton>
      <AIButton withSparkle={false}>Without Sparkle</AIButton>
    </div>
  );
};

const customCode = `() => {
  return (
    <div className="d-flex justify-content-between w-50">
      <AIButton>With Sparkle</AIButton>
      <AIButton withSparkle={false}>Without Sparkle</AIButton>
    </div>
  );
}`;

export default {
  title: 'Components/AI/AI Button/Sparkle',
  component: AIButton,
  parameters: {
    docs: {
      docPage: {
        title: 'AIButton',
        customCode,
        props: {
          exclude: ['appearance'],
        },
      },
    },
  },
};
