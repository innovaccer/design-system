# Storybook v8 Guide: Customizing Stories

This guide explains how to customize stories in Storybook v8 using the modern Component Story Format (CSF).

## Basic Story Structure

A modern Storybook v8 story file has the following structure:

```tsx
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { YourComponent } from '@/index';

// Define metadata for the component
const meta: Meta<typeof YourComponent> = {
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

export default meta;

// Define the Story type
type Story = StoryObj<typeof meta>;

// Create a story with args
export const Default: Story = {
  args: {
    // Default props for this story
    propName: 'value',
  },
  parameters: {
    // Story-specific parameters
    docs: {
      description: {
        story: 'Description of this specific story',
      },
    },
  },
};
```

## Controls and Args

The `args` system is the core of Storybook v8's interactivity:

1. Define `argTypes` in the meta object to specify what controls should be available
2. Set default values in the `args` object for each story
3. Users can then modify these values in the Controls panel

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
export const Primary: Story = {
  args: {
    appearance: 'primary',
    children: 'Primary Button',
  },
};

// Secondary variant
export const Secondary: Story = {
  args: {
    appearance: 'secondary',
    children: 'Secondary Button',
  },
};
```

## Using the render Function

For more complex stories, you can use the `render` function:

```tsx
export const Complex: Story = {
  render: (args) => (
    <div className="custom-wrapper">
      <YourComponent {...args} />
      <div className="additional-content">
        <p>Additional context or related components</p>
      </div>
    </div>
  ),
  args: {
    // props for YourComponent
  },
};
```

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

## Parameters and Decorators

Use parameters to configure how stories render:

```tsx
parameters: {
  layout: 'centered', // Centers the component in the Canvas
  backgrounds: {
    default: 'dark', // Sets the default background
  },
  docs: {
    description: {
      story: 'Story description that appears in the Docs tab',
    },
  },
}
```

## Best Practices

1. Use TypeScript for better type checking and autocompletion
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

These files demonstrate different approaches to creating customizable stories with Storybook v8.
