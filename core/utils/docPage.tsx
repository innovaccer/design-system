// @ts-nocheck

import * as React from 'react';
import { Title, Props, Description, Primary, Story, PropsProps } from '@storybook/addon-docs/blocks';

interface DocPageProps {
  title?: string;
  description?: React.ReactNode;
  props?: PropsProps;
}

export const docPage = (props: DocPageProps) => {
  const {
    title,
    description,
    props,
    stories
  } = props;

  const separatorIndex = title?.indexOf('|');

  return (
    <>
      <Title>{title && separatorIndex !== -1 ? title.slice(separatorIndex + 1) : title}</Title>
      <Description>
        {description}
      </Description>
      {/* <Primary /> */}
      {/* <Story id="switch-state--alert"  /> */}
      <Props {...props} />
    </>
  );
};

export default docPage;
