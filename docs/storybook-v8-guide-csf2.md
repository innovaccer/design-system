# Storybook v8 Guide: Customizing Stories with CSF2

This guide explains how to customize stories in Storybook v8 using the Component Story Format 2 (CSF2).

## Basic Story Structure

A Storybook story file using CSF2 has the following structure:

```tsx
import React from 'react';
import { YourComponent } from '@/index';

// Define metadata for the component
export default {
  title: 'Category/Component',
  component: YourComponent,
  parameters: {
    // Global parameters for all stories
    docs: {
      description: {
        component: 'Description of your component',
      },
    },
  },
  argTypes: {
    // Define controls for component props
    propName: {
      control: 'select', // or 'text', 'boolean', 'number', 'color', etc.
      options: ['option1', 'option2'], // for select controls
      description: 'Description of the prop',
    },
  },
};

// Create a story with args
export const Default = (args) => (
  <YourComponent {...args}>
    {args.children || 'Default content'}
  </YourComponent>
);

Default.args = {
  // Default props for this story
  propName: 'value',
  children: 'Button text',
};

Default.parameters = {
  // Story-specific parameters
  docs: {
    description: {
      story: 'Description of this specific story',
    },
  },
};
```

## Controls and Args

The `args` system is the core of Storybook's interactivity:

1. Define `argTypes` in the default export to specify what controls should be available
2. Create a story function that accepts `args` and passes them to your component
3. Set default values in the `StoryName.args` object for each story
4. Users can then modify these values in the Controls panel

Example:

```tsx
argTypes: {
  size: {
    control: 'select',
    options: ['small', 'medium', 'large'],
    description: 'Size of the component',
  },
  disabled: {
    control: 'boolean',
    description: 'Whether the component is disabled',
  },
  label: {
    control: 'text',
    description: 'Text label',
  },
}
```

## Story Variants

You can create multiple story variants for a component:

```tsx
// Primary variant
export const Primary = (args) => (
  <Button appearance="primary" {...args}>
    {args.children || 'Primary Button'}
  </Button>
);

Primary.args = {
  children: 'Primary Button',
};

// Secondary variant
export const Secondary = (args) => (
  <Button appearance="secondary" {...args}>
    {args.children || 'Secondary Button'}
  </Button>
);

Secondary.args = {
  children: 'Secondary Button',
};
```

## Handling Default Values

To ensure your component displays correctly even when args are changed:

```tsx
export const MyStory = (args) => (
  <Button {...args}>
    {args.children || 'Default Text'}
  </Button>
);
```

This pattern ensures that if `children` is cleared in the controls, the button will still show "Default Text".

## Combining Multiple Components

For stories that show multiple variants together:

```tsx
export const AllVariants = () => {
  return (
    <div className="d-flex justify-content-between">
      <YourComponent appearance="primary">Primary</YourComponent>
      <YourComponent appearance="secondary">Secondary</YourComponent>
      <YourComponent appearance="tertiary">Tertiary</YourComponent>
    </div>
  );
};
```

Note that stories defined as functions without `.args` won't have controls in the Controls panel.

## Parameters and Decorators

Use parameters to configure how stories render:

```tsx
StoryName.parameters = {
  docs: {
    description: {
      story: 'Story description that appears in the Docs tab',
    },
  },
};
```

## Best Practices

1. Use TypeScript for better type checking (add type annotations to args)
2. Create one story per state or variant of your component
3. Use args for interactive controls
4. Add descriptions to help document your component
5. Use the Controls panel to test different configurations
6. Keep story logic simple and focused on showcasing the component

## Example: Button Component

See the updated Button stories in:
- `core/components/atoms/button/__stories__/button-sizes.story.tsx`
- `core/components/atoms/button/__stories__/button-customization.story.tsx`
- `core/components/atoms/button/__stories__/button-variants.story.tsx`
- `core/components/atoms/button/__stories__/Appearance.story.tsx`

These files demonstrate different approaches to creating customizable stories with Storybook v8 using CSF2 format.
