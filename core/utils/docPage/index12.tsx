import * as React from 'react';
import { Heading } from '@/index';
import { Title, Subtitle, Description, Primary, Controls, Unstyled, useOf } from '@storybook/addon-docs/blocks';

/**
 * Modern docPage component for Storybook v8
 *
 * This component uses the new Storybook Blocks API to render documentation
 * for components, including props tables and stories.
 */

export const StoryName = ({ of }: { of: any }) => {
  const resolvedOf = useOf(of || 'story', ['story', 'meta']);
  switch (resolvedOf.type) {
    case 'story': {
      return <h1>{resolvedOf.story.name}</h1>;
    }
    case 'meta': {
      return <h1>{resolvedOf.preparedMeta.title}</h1>;
    }
  }
  return null;
};

export const docPage = ({ of }: { of: any }) => {
  const resolvedOf = useOf(of || 'story', ['story', 'meta']);
  switch (resolvedOf.type) {
    case 'story': {
      console.log('resolve.story', resolvedOf.story);
      return <h1>{resolvedOf.story.name}</h1>;
    }
    case 'meta': {
      console.log('resolve.meta', resolvedOf.preparedMeta);
      return <h1>{resolvedOf.preparedMeta.title}</h1>;
    }
  }

  return (
    <Unstyled>
      <div className="DocPage pt-8 pb-8">
        {/* Title and description */}
        <Title />
        <Subtitle />
        <Description />

        {/* Primary story */}
        <div className="mt-8 mb-8">
          <Primary />
        </div>

        {/* Controls for the primary story */}
        <div className="mb-8">
          <Heading size="xl">Props</Heading>
          <Controls />
        </div>
      </div>
    </Unstyled>
  );
};

export default docPage;
