import * as React from 'react';
import { action } from '@/utils/action';
import { InsightsCard, Text, Icon } from '@/index';
import { data } from '../data/indexData';
import { clinicalData } from '../data/clinicalData';

// Export the dynamic description stories
export { DynamicDescription } from './DynamicDescription.story';
export { WithHook } from './WithHook.story';

export const WithCustomIcon = () => {
  const customIcon = <Icon name="analytics" size={24} />;
  const customIconDescription = (
    <Text>
      🎨 <strong>Custom Icon Display:</strong> This example demonstrates how to replace the default AI sparkle icon with
      a custom one. Notice the analytics icon in the header - perfect for branded or context-specific iconography in
      your design system.
    </Text>
  );

  return (
    <div>
      <InsightsCard
        data={data}
        customIcon={customIcon}
        descriptionContent={customIconDescription}
        onInsightSelect={action('insight selected')}
      />
    </div>
  );
};

WithCustomIcon.parameters = {
  docs: {
    description: {
      story:
        '🎨 **Custom Icon Display** - Demonstrates how to replace the default icon with a custom one. Perfect for branded or context-specific iconography.',
    },
  },
};

export const ElevatedAppearance = () => {
  const elevatedDescription = (
    <Text>
      ✨ <strong>Elevated Styling:</strong> This card showcases the elevated appearance with shadow and depth effects.
      Notice how all 13 insights are displayed without scrolling constraints, allowing you to focus on the visual
      styling and shadow effects that make the card stand out from the background.
    </Text>
  );

  return (
    <div>
      <InsightsCard
        data={clinicalData}
        appearance="elevated"
        descriptionContent={elevatedDescription}
        onInsightSelect={action('insight selected')}
        enableScrolling={false}
        maxInsightsHeight="auto"
      />
    </div>
  );
};

ElevatedAppearance.parameters = {
  docs: {
    description: {
      story:
        '✨ **Elevated Styling** - Shows the card with elevated appearance (shadow, depth). Uses many insights (13 total) but **scrolling is disabled** to demonstrate visual styling without constraints.',
    },
  },
};

export const WithoutTitle = () => {
  const dataWithoutTitle = {
    ...data,
    title: undefined,
  };

  const withoutTitleDescription = (
    <Text>
      🚫 <strong>No Title Display:</strong> This card demonstrates the layout when no title is provided. Perfect for
      when the context is already clear from surrounding content or when embedding the card within already-titled
      sections. Notice the clean, streamlined appearance.
    </Text>
  );

  return (
    <div>
      <InsightsCard
        data={dataWithoutTitle}
        showGradientBorder={true}
        descriptionContent={withoutTitleDescription}
        onInsightSelect={action('insight selected')}
      />
    </div>
  );
};

WithoutTitle.parameters = {
  docs: {
    description: {
      story:
        '🚫 **No Title Display** - Card without a title header, useful when the context is already clear or when embedding in titled sections.',
    },
  },
};

export const All = () => {
  const allFeaturesDescription = (
    <Text>
      🌟 <strong>Complete Example:</strong> This is the default card configuration showcasing all standard features -
      gradient border, title, description panel, and interactive insights. This represents the most common use case with
      all default styling and behavior enabled for a comprehensive insights display.
    </Text>
  );

  return (
    <div>
      <InsightsCard
        data={data}
        showGradientBorder={true}
        descriptionContent={allFeaturesDescription}
        onInsightSelect={action('insight selected')}
      />
    </div>
  );
};

All.parameters = {
  docs: {
    description: {
      story:
        '🌟 **Complete Example** - Default card with gradient border, title, description panel, and interactive insights. This showcases the standard appearance with all default features enabled.',
    },
  },
};

export const ScrollableInsights = () => {
  const scrollableDescription = (
    <Text>
      📜 <strong>Scrollable Content:</strong> This example shows 13 insights with scrolling enabled. The container
      height is set to 150px and scrolling appears after 3 insights. Notice the custom scrollbar styling and how the
      description panel remains unaffected. Compare this with the "No Scrolling" story to see the difference!
    </Text>
  );

  return (
    <div>
      <InsightsCard
        data={clinicalData}
        showGradientBorder={true}
        descriptionContent={scrollableDescription}
        onInsightSelect={action('insight selected')}
        maxInsightsHeight={150}
        enableScrolling={true}
        scrollAfterCount={3}
      />
    </div>
  );
};

ScrollableInsights.parameters = {
  docs: {
    description: {
      story:
        '📜 **Scrollable Content** - Shows **13 insights** with scrolling enabled. Container height is **150px**, scrolling appears after **3 insights**. Compare with "No Scrolling" to see the difference!',
    },
  },
};

export const NoScrolling = () => {
  const noScrollingDescription = (
    <Text>
      🚫 <strong>No Scrolling Mode:</strong> This card uses the exact same 13 insights as "Scrollable Insights" but with
      scrolling disabled and height set to auto. All content is visible without scrollbars, demonstrating how the same
      data behaves differently based on props configuration.
    </Text>
  );

  return (
    <div>
      <InsightsCard
        data={clinicalData}
        showGradientBorder={true}
        descriptionContent={noScrollingDescription}
        onInsightSelect={action('insight selected')}
        enableScrolling={false}
        maxInsightsHeight="auto"
      />
    </div>
  );
};

NoScrolling.parameters = {
  docs: {
    description: {
      story:
        '🚫 **No Scrolling Mode** - Same **13 insights** as "Scrollable Insights" but with scrolling **disabled** and height set to **auto**. All content is visible without scrollbars.',
    },
  },
};

export const CustomHeight = () => {
  const customHeightDescription = (
    <Text>
      📏 <strong>Custom Height Control:</strong> This demonstrates precise scrolling control with a container height of
      exactly 100px and scrolling starting after just 2 insights. Perfect for tight layout constraints where you need
      exact height control while maintaining scrollable functionality.
    </Text>
  );

  return (
    <div>
      <InsightsCard
        data={clinicalData}
        showGradientBorder={true}
        descriptionContent={customHeightDescription}
        onInsightSelect={action('insight selected')}
        maxInsightsHeight={100}
        enableScrolling={true}
        scrollAfterCount={2}
      />
    </div>
  );
};

CustomHeight.parameters = {
  docs: {
    description: {
      story:
        '📏 **Custom Height Control** - Precise scrolling control: **100px height**, scrolling starts after **2 insights**. Perfect for tight layout constraints where you need exact height control.',
    },
  },
};

export const CompletelyNoScrolling = () => {
  // Create data with few insights and short description
  const minimalData = {
    title: 'Minimal Assessment',
    description: 'Very basic assessment.',
    categories: [
      {
        id: 'minimal',
        title: 'Status',
        insights: [
          {
            id: 'status-1',
            title: 'Patient Stable',
            iconName: 'check_circle',
            iconAppearance: 'success',
            borderColor: '#4CAF50',
            backgroundColor: '#E8F5E8',
            selected: true,
          },
        ],
      },
    ],
  };

  const minimalDescription = (
    <Text>
      🎯 <strong>Minimal Content:</strong> This example demonstrates the card with minimal data - just 1 insight and a
      short description. Perfect for showcasing how the component behaves when no scrolling would ever be needed,
      ensuring a clean and compact display.
    </Text>
  );

  return (
    <div>
      <InsightsCard
        data={minimalData}
        showGradientBorder={true}
        descriptionContent={minimalDescription}
        onInsightSelect={action('insight selected')}
        enableScrolling={false}
        maxInsightsHeight="auto"
      />
    </div>
  );
};

CompletelyNoScrolling.parameters = {
  docs: {
    description: {
      story:
        '🎯 **Minimal Content** - Demonstrates the card with minimal data (**1 insight**, short description) where no scrolling would ever be needed, ensuring clean, compact display.',
    },
  },
};

export const DefaultSelection = () => {
  // Create clean data with no pre-existing selections for this demo
  const cleanData = {
    ...data,
    categories: data.categories.map((cat) => ({
      ...cat,
      insights: cat.insights.map((insight) => ({
        ...insight,
        selected: false, // Ensure no pre-existing selections
      })),
    })),
  };

  const defaultSelectionDescription = (
    <Text>
      🎯 <strong>Default Selection Control:</strong> This example demonstrates the{' '}
      <strong>defaultSelectedInsightId</strong> prop. The insight "Complex follow-up schedule" is pre-selected on
      render. Without this prop, the first insight would be selected by default. Perfect for highlighting specific
      insights or restoring previous selections.
    </Text>
  );

  return (
    <div>
      <InsightsCard
        data={cleanData}
        showGradientBorder={true}
        descriptionContent={defaultSelectionDescription}
        onInsightSelect={action('insight selected')}
        defaultSelectedInsightId="clinical-2" // This will select "Complex follow-up schedule"
      />
    </div>
  );
};

DefaultSelection.parameters = {
  docs: {
    description: {
      story:
        '🎯 **Default Selection** - Shows how to control which insight is selected by default using the `defaultSelectedInsightId` prop.',
    },
  },
};

export const DefaultSelectionPower = () => {
  // Create clean data with no pre-existing selections for this demo
  const cleanData = {
    ...data,
    categories: data.categories.map((cat) => ({
      ...cat,
      insights: cat.insights.map((insight) => ({
        ...insight,
        selected: false, // Ensure no pre-existing selections
      })),
    })),
  };

  const powerDescription = (
    <Text>
      🚀 <strong>Default Selection Power:</strong> This story demonstrates the power of the{' '}
      <strong>defaultSelectedInsightId</strong> prop by pre-selecting the 3rd insight "Food Insecurity Risk" from the
      SOCIAL category. Notice how the description panel background matches the selected insight's color, and the arrow
      icon color also matches. This allows you to direct user attention to specific insights without any user
      interaction required.
    </Text>
  );

  return (
    <div>
      <InsightsCard
        data={cleanData}
        showGradientBorder={true}
        descriptionContent={powerDescription}
        onInsightSelect={action('power insight selected')}
        defaultSelectedInsightId="social-1" // Pre-select "Food Insecurity Risk" from SOCIAL category
      />
    </div>
  );
};

DefaultSelectionPower.parameters = {
  docs: {
    description: {
      story:
        '🚀 **Default Selection Power** - Demonstrates selecting an insight from a different category (SOCIAL instead of CLINICAL) to showcase the flexibility of the prop.',
    },
  },
};

export const AccordionCollapsed = () => {
  const accordionDescription = (
    <Text>
      📁 <strong>Accordion Collapsed:</strong> This example demonstrates the accordion functionality in its collapsed
      state. Notice the arrow button positioned at the end of the header (right side) - click it to expand and reveal
      the insights and description panel. Perfect for saving space when you have multiple insight cards.
    </Text>
  );

  return (
    <div>
      <InsightsCard
        data={data}
        showGradientBorder={true}
        descriptionContent={accordionDescription}
        onInsightSelect={action('accordion insight selected')}
        accordion={true}
        defaultExpanded={false}
        onAccordionToggle={action('accordion toggled')}
      />
    </div>
  );
};

AccordionCollapsed.parameters = {
  docs: {
    description: {
      story:
        '📁 **Accordion Collapsed** - Shows the accordion functionality in collapsed state with the arrow button positioned before the title.',
    },
  },
};

export const AccordionExpanded = () => {
  const accordionDescription = (
    <Text>
      📂 <strong>Accordion Expanded:</strong> This example shows the accordion functionality in its expanded state. The
      arrow positioned at the end of the header points up indicating the content is visible. Click the arrow to collapse
      the insights and description panel. This provides a clean way to show/hide content while maintaining the title
      always visible.
    </Text>
  );

  return (
    <div>
      <InsightsCard
        data={data}
        showGradientBorder={true}
        descriptionContent={accordionDescription}
        onInsightSelect={action('accordion insight selected')}
        accordion={true}
        defaultExpanded={true}
        onAccordionToggle={action('accordion toggled')}
      />
    </div>
  );
};

AccordionExpanded.parameters = {
  docs: {
    description: {
      story:
        '📂 **Accordion Expanded** - Shows the accordion functionality in expanded state, demonstrating how content can be collapsed by clicking the arrow.',
    },
  },
};

export const AccordionWithoutTitle = () => {
  const accordionDescription = (
    <Text>
      📋 <strong>Accordion Without Title:</strong> This example demonstrates that the accordion arrow appears even when
      there's no title. The arrow is positioned at the end of the header area (right side), ensuring the accordion
      functionality is always accessible regardless of whether a title is present.
    </Text>
  );

  // Data without title
  const dataWithoutTitle = {
    ...data,
    title: '', // Remove title
  };

  return (
    <div>
      <InsightsCard
        data={dataWithoutTitle}
        showGradientBorder={true}
        descriptionContent={accordionDescription}
        onInsightSelect={action('accordion without title insight selected')}
        accordion={true}
        defaultExpanded={true}
        onAccordionToggle={action('accordion without title toggled')}
      />
    </div>
  );
};

AccordionWithoutTitle.parameters = {
  docs: {
    description: {
      story:
        '📋 **Accordion Without Title** - Shows that the accordion arrow appears even when no title is present, positioned at the end of the header.',
    },
  },
};

export const CustomGradientColors = () => {
  const customGradientDescription = (
    <Text>
      🎨 <strong>Custom Gradient Colors:</strong> This example showcases how to use custom gradient colors for the
      border instead of the default gradient. You can provide an array of color strings to create your own unique
      gradient effects that match your brand or design requirements.
    </Text>
  );

  return (
    <div>
      <InsightsCard
        data={data}
        showGradientBorder={true}
        customGradientColors={['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4']}
        descriptionContent={customGradientDescription}
        onInsightSelect={action('insight selected')}
      />
    </div>
  );
};

CustomGradientColors.parameters = {
  docs: {
    description: {
      story:
        '🎨 **Custom Gradient Colors** - Demonstrates how to override the default gradient with custom colors for personalized branding.',
    },
  },
};

export default {
  title: 'Components/Insights Card',
  component: InsightsCard,
  parameters: {
    docs: {
      description: {
        component:
          'InsightsCard displays categorized insights in an interactive card format with customizable appearance and behavior.',
      },
    },
  },
  argTypes: {
    data: {
      description: 'Data structure for the insights card',
      control: { type: 'object' },
    },
    size: {
      description: 'Size variant of the insights card',
      control: { type: 'select' },
      options: ['regular', 'large'],
      defaultValue: 'regular',
    },
    appearance: {
      description: 'Appearance variant of the insights card',
      control: { type: 'select' },
      options: ['default', 'bordered', 'elevated'],
      defaultValue: 'default',
    },
    showGradientBorder: {
      description: 'Whether to show the gradient border',
      control: { type: 'boolean' },
      defaultValue: true,
    },
    customGradientColors: {
      description: 'Custom gradient colors for the border. Provide an array of color strings for custom gradient.',
      control: { type: 'object' },
    },
    customIcon: {
      description: 'Custom icon component to replace default AI sparkle',
      control: { type: 'object' },
    },
    headingSize: {
      description: 'Size of the heading',
      control: { type: 'select' },
      options: ['s', 'm', 'l', 'xl', 'xxl'],
    },
    descriptionContent: {
      description: 'Content to display in the description panel',
      control: { type: 'object' },
    },
    onInsightSelect: {
      description: 'Callback when an insight is selected',
      action: 'insight selected',
    },
    insightItemClassName: {
      description: 'Custom class names for styling the insight items',
      control: { type: 'text' },
    },
    categoryClassName: {
      description: 'Custom class names for styling the categories',
      control: { type: 'text' },
    },
    maxInsightsHeight: {
      description: 'Maximum height for insights container before scrolling kicks in',
      control: { type: 'number' },
    },
    enableScrolling: {
      description: 'Whether to enable scrolling for insights lists',
      control: { type: 'boolean' },
      defaultValue: true,
    },
    scrollAfterCount: {
      description: 'Number of insights to show before enabling scroll',
      control: { type: 'number' },
    },
    defaultSelectedInsightId: {
      description: 'ID of the insight that should be selected by default',
      control: { type: 'text' },
    },
    accordion: {
      description: 'Whether to show accordion functionality',
      control: { type: 'boolean' },
      defaultValue: false,
    },
    defaultExpanded: {
      description: 'Whether the accordion is expanded by default',
      control: { type: 'boolean' },
      defaultValue: true,
    },
    onAccordionToggle: {
      description: 'Callback when accordion state changes',
      action: 'accordion toggled',
    },
  },
};
