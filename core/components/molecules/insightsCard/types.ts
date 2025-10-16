import { BaseProps } from '@/utils/types';
import { IconProps, HeadingProps } from '@/index.type';

export type InsightItemData = {
  /** Unique identifier for the insight */
  id: string;
  /** Display title of the insight */
  title: string;
  /** Icon name for the insight */
  iconName?: string;
  /** Icon appearance variant */
  iconAppearance?: IconProps['appearance'];
  /** Custom border color for selection state */
  borderColor?: string;
  /** Custom background color for selection state */
  backgroundColor?: string;
  /** Whether this insight is currently selected */
  selected?: boolean;
  /** Additional metadata for the insight */
  metadata?: Record<string, any>;
};

export type InsightCategoryData = {
  /** Unique identifier for the category */
  id: string;
  /** Display title of the category */
  title: string;
  /** Array of insights in this category */
  insights: InsightItemData[];
};

export type InsightCardData = {
  /** Main title of the insights card */
  title?: string;
  /** Descriptive text below the title */
  description?: string;
  /** Array of insight categories */
  categories: InsightCategoryData[];
};

export type InsightsCardSize = 'regular' | 'large';
export type InsightsCardAppearance = 'default' | 'bordered' | 'elevated';

export interface InsightsCardProps extends BaseProps {
  /**
   * Data structure for the insights card
   */
  data: InsightCardData;
  /**
   * Size variant of the insights card
   */
  size?: InsightsCardSize;
  /**
   * Appearance variant of the insights card
   */
  appearance?: InsightsCardAppearance;
  /**
   * Whether to show the gradient border
   */
  showGradientBorder?: boolean;
  /**
   * Custom gradient colors for the border. When provided, this will override the default gradient.
   * Should be an array of color strings (e.g., ['#ff0000', '#00ff00', '#0000ff'])
   */
  customGradientColors?: string[];
  /**
   * Custom icon component to replace default AI sparkle
   */
  customIcon?: React.ReactElement;
  /**
   * Size of the heading
   */
  headingSize?: HeadingProps['size'];
  /**
   * Content to display in the description panel
   */
  descriptionContent?: React.ReactNode;
  /**
   * Callback when an insight is selected
   */
  onInsightSelect?: (insight: InsightItemData, category: InsightCategoryData) => void;
  /**
   * Custom class names for styling the insight items
   */
  insightItemClassName?: string;
  /**
   * Custom class names for styling the categories
   */
  categoryClassName?: string;
  /**
   * Maximum height for insights container before scrolling kicks in
   * Can be a number (in pixels) or 'auto' for no height restriction
   */
  maxInsightsHeight?: number | 'auto';
  /**
   * Whether to enable scrolling for insights lists
   */
  enableScrolling?: boolean;
  /**
   * Number of insights to show before enabling scroll (only applies when maxInsightsHeight is set)
   */
  scrollAfterCount?: number;
  /**
   * ID of the insight that should be selected by default when the card is rendered
   * If not provided, the first insight in the first category will be selected
   */
  defaultSelectedInsightId?: string;
  /**
   * Whether to show accordion functionality (collapse/expand insights and description)
   */
  accordion?: boolean;
  /**
   * Whether the accordion is expanded by default (only applies when accordion is true)
   */
  defaultExpanded?: boolean;
  /**
   * Callback when accordion state changes
   */
  onAccordionToggle?: (expanded: boolean) => void;
}
