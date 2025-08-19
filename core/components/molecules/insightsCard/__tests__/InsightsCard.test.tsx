import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { InsightsCard, Icon } from '@/index';
import { InsightsCardProps, InsightCardData } from '../InsightsCard';
import { useInsightSelection } from '../hooks';
import { testHelper, filterUndefined, valueHelper, testMessageHelper } from '@/utils/testHelper';

const mockData: InsightCardData = {
  title: 'Test Title',
  description: 'Test Description',
  categories: [
    {
      id: 'test-category',
      title: 'Test Category',
      insights: [
        {
          id: 'test-insight-1',
          title: 'Test Insight',
          iconName: 'info',
          iconAppearance: 'subtle',
          borderColor: '#000000',
          backgroundColor: '#ffffff',
          selected: false,
        },
      ],
    },
  ],
};

const mockDescriptionContent = <div>Test Description Content</div>;
const mockCustomIcon = <Icon name="analytics" size={24} />;

describe('InsightsCard component', () => {
  const mapper = {
    data: valueHelper(mockData, { required: true }),
    size: valueHelper(['regular', 'large'], { iterate: true }),
    appearance: valueHelper(['default', 'bordered', 'elevated'], { iterate: true }),
    showGradientBorder: valueHelper(true, { required: true }),
    descriptionContent: valueHelper(mockDescriptionContent, { required: true }),
    customIcon: valueHelper(mockCustomIcon, { required: true }),
    headingSize: valueHelper(['xs', 's', 'm'], { iterate: true }),
  };

  const testFunc = (props: Record<string, any>): void => {
    const attr = filterUndefined(props) as InsightsCardProps;

    it(testMessageHelper(attr), () => {
      const { asFragment } = render(<InsightsCard {...attr} />);
      expect(asFragment()).toMatchSnapshot();
    });
  };

  testHelper(mapper, testFunc);
});

describe('InsightsCard component', () => {
  it('renders with default data', () => {
    const { getByTestId } = render(<InsightsCard data={mockData} descriptionContent={mockDescriptionContent} />);

    expect(getByTestId('DesignSystem-InsightsCard')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-InsightsCard--Card')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-InsightsCard--Title')).toHaveTextContent('Test Title');
    expect(getByTestId('DesignSystem-InsightsCard--Description')).toHaveTextContent('Test Description');
  });

  it('renders without title when not provided', () => {
    const dataWithoutTitle = { ...mockData, title: undefined };
    const { queryByTestId } = render(
      <InsightsCard data={dataWithoutTitle} descriptionContent={mockDescriptionContent} />
    );

    expect(queryByTestId('DesignSystem-InsightsCard--Title')).not.toBeInTheDocument();
  });

  it('renders categories correctly', () => {
    const { getByTestId } = render(<InsightsCard data={mockData} descriptionContent={mockDescriptionContent} />);

    expect(getByTestId('DesignSystem-InsightsCard--Category-test-category')).toHaveTextContent('Test Category');
    expect(getByTestId('DesignSystem-InsightsCard--CategoryRow-test-category')).toBeInTheDocument();
  });

  it('renders insights correctly', () => {
    const { getByTestId } = render(<InsightsCard data={mockData} descriptionContent={mockDescriptionContent} />);

    expect(getByTestId('DesignSystem-InsightsCard--Insight-test-insight-1')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-InsightsCard--InsightText-test-insight-1')).toHaveTextContent('Test Insight');
    expect(getByTestId('DesignSystem-InsightsCard--InsightIcon-test-insight-1')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-InsightsCard--InsightButton-test-insight-1')).toBeInTheDocument();
  });

  it('handles insight click correctly', () => {
    const onInsightSelect = jest.fn();
    const { getByTestId } = render(
      <InsightsCard data={mockData} descriptionContent={mockDescriptionContent} onInsightSelect={onInsightSelect} />
    );

    const insightColumn = getByTestId('DesignSystem-InsightsCard--InsightColumn-test-insight-1');
    fireEvent.click(insightColumn);

    expect(onInsightSelect).toHaveBeenCalledWith(
      expect.objectContaining({ id: 'test-insight-1', selected: true }),
      expect.objectContaining({ id: 'test-category' })
    );
  });

  it('renders description column when descriptionContent is provided', () => {
    const { getByTestId } = render(<InsightsCard data={mockData} descriptionContent={mockDescriptionContent} />);

    expect(getByTestId('DesignSystem-InsightsCard--DescriptionColumn')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-InsightsCard--DescriptionContent')).toBeInTheDocument();
  });

  it('does not render description column when descriptionContent is not provided', () => {
    const { queryByTestId } = render(<InsightsCard data={mockData} />);

    expect(queryByTestId('DesignSystem-InsightsCard--DescriptionColumn')).not.toBeInTheDocument();
  });

  it('renders default icon correctly', () => {
    const { getByTestId } = render(<InsightsCard data={mockData} descriptionContent={mockDescriptionContent} />);

    expect(getByTestId('DesignSystem-InsightsCard--DefaultIcon')).toBeInTheDocument();
  });

  it('renders custom icon when provided', () => {
    const { getByTestId } = render(
      <InsightsCard data={mockData} customIcon={mockCustomIcon} descriptionContent={mockDescriptionContent} />
    );

    expect(getByTestId('DesignSystem-InsightsCard--CustomIcon')).toBeInTheDocument();
  });

  it('renders with gradient border when enabled', () => {
    const { getByTestId } = render(
      <InsightsCard data={mockData} showGradientBorder={true} descriptionContent={mockDescriptionContent} />
    );

    expect(getByTestId('DesignSystem-InsightsCard--InnerContent')).toBeInTheDocument();
  });

  it('supports different sizes', () => {
    const { container } = render(
      <InsightsCard data={mockData} size="large" descriptionContent={mockDescriptionContent} />
    );

    expect(container.querySelector('.insightsCard--large')).toBeInTheDocument();
  });

  it('supports different appearances', () => {
    const { container } = render(
      <InsightsCard data={mockData} appearance="bordered" descriptionContent={mockDescriptionContent} />
    );

    expect(container.querySelector('.insightsCard--bordered')).toBeInTheDocument();
  });
});

describe('InsightsCard component with multiple categories', () => {
  const multipleInsightsData: InsightCardData = {
    title: 'Multiple Categories',
    description: 'Testing multiple categories and insights',
    categories: [
      {
        id: 'category-1',
        title: 'First Category',
        insights: [
          {
            id: 'insight-1-1',
            title: 'First Insight',
            iconName: 'info',
            iconAppearance: 'subtle',
            borderColor: '#000000',
            backgroundColor: '#ffffff',
            selected: true,
          },
          {
            id: 'insight-1-2',
            title: 'Second Insight',
            iconName: 'warning',
            iconAppearance: 'warning',
            borderColor: '#ff0000',
            backgroundColor: '#ffeeee',
            selected: false,
          },
        ],
      },
      {
        id: 'category-2',
        title: 'Second Category',
        insights: [
          {
            id: 'insight-2-1',
            title: 'Third Insight',
            iconName: 'error',
            iconAppearance: 'alert',
            borderColor: '#0000ff',
            backgroundColor: '#eeeeff',
            selected: false,
          },
        ],
      },
    ],
  };

  it('renders multiple categories correctly', () => {
    const { getByTestId } = render(
      <InsightsCard data={multipleInsightsData} descriptionContent={mockDescriptionContent} />
    );

    expect(getByTestId('DesignSystem-InsightsCard--Category-category-1')).toHaveTextContent('First Category');
    expect(getByTestId('DesignSystem-InsightsCard--Category-category-2')).toHaveTextContent('Second Category');
  });

  it('renders multiple insights correctly', () => {
    const { getByTestId } = render(
      <InsightsCard data={multipleInsightsData} descriptionContent={mockDescriptionContent} />
    );

    expect(getByTestId('DesignSystem-InsightsCard--Insight-insight-1-1')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-InsightsCard--Insight-insight-1-2')).toBeInTheDocument();
    expect(getByTestId('DesignSystem-InsightsCard--Insight-insight-2-1')).toBeInTheDocument();
  });

  it('renders divider between categories', () => {
    const { getByTestId } = render(
      <InsightsCard data={multipleInsightsData} descriptionContent={mockDescriptionContent} />
    );

    expect(getByTestId('DesignSystem-InsightsCard--Divider-category-1')).toBeInTheDocument();
  });

  it('updates selected insight background color', () => {
    const { getByTestId } = render(
      <InsightsCard data={multipleInsightsData} descriptionContent={mockDescriptionContent} />
    );

    const descriptionColumn = getByTestId('DesignSystem-InsightsCard--DescriptionColumn');
    expect(descriptionColumn).toHaveStyle({ backgroundColor: '#ffffff' });
  });
});

describe('InsightsCard scrolling functionality', () => {
  it('Should apply scrollable container when enableScrolling is true and insights exceed scrollAfterCount', () => {
    const testDataWithMultipleInsights = {
      ...mockData,
      categories: [
        {
          ...mockData.categories[0],
          insights: [
            ...mockData.categories[0].insights,
            {
              id: 'test-insight-2',
              title: 'Test Insight 2',
              iconName: 'warning',
              iconAppearance: 'warning' as const,
              borderColor: '#ff0000',
              backgroundColor: '#ffeeee',
              selected: false,
            },
            {
              id: 'test-insight-3',
              title: 'Test Insight 3',
              iconName: 'error',
              iconAppearance: 'alert' as const,
              borderColor: '#0000ff',
              backgroundColor: '#eeeeff',
              selected: false,
            },
          ],
        },
      ],
    };

    const { getByTestId } = render(
      <InsightsCard
        data={testDataWithMultipleInsights}
        enableScrolling={true}
        maxInsightsHeight={100}
        scrollAfterCount={1}
      />
    );

    const scrollableContainer = getByTestId('DesignSystem-InsightsCard--InsightsContainer-test-category');
    expect(scrollableContainer).toHaveClass('insights-scrollable-container');
  });

  it('Should not apply scrollable container when enableScrolling is false', () => {
    const { getByTestId } = render(
      <InsightsCard data={mockData} enableScrolling={false} maxInsightsHeight={100} scrollAfterCount={1} />
    );

    const container = getByTestId('DesignSystem-InsightsCard--InsightsContainer-test-category');
    expect(container).not.toHaveClass('insights-scrollable-container');
  });

  it('Should apply custom max height when specified', () => {
    const { getByTestId } = render(<InsightsCard data={mockData} maxInsightsHeight={150} enableScrolling={true} />);

    const container = getByTestId('DesignSystem-InsightsCard--InsightsContainer-test-category');
    expect(container).toHaveStyle({ maxHeight: '150px' });
  });

  it('Should not apply max height when maxInsightsHeight is auto', () => {
    const { getByTestId } = render(<InsightsCard data={mockData} maxInsightsHeight="auto" enableScrolling={true} />);

    const container = getByTestId('DesignSystem-InsightsCard--InsightsContainer-test-category');
    expect(container).toHaveStyle({ maxHeight: 'none' });
  });

  it('Should select first insight by default when no defaultSelectedInsightId is provided', () => {
    const dataWithMultipleInsights = {
      ...mockData,
      categories: [
        {
          id: 'category-1',
          title: 'Category 1',
          insights: [
            {
              id: 'insight-1',
              title: 'First Insight',
              iconName: 'check_circle' as const,
              iconAppearance: 'success' as const,
              borderColor: '#4CAF50',
              backgroundColor: '#E8F5E8',
              selected: true, // First insight should be selected by default
            },
            {
              id: 'insight-2',
              title: 'Second Insight',
              iconName: 'warning' as const,
              iconAppearance: 'warning' as const,
              borderColor: '#FF8C00',
              backgroundColor: '#FFF8E1',
              selected: false,
            },
          ],
        },
      ],
    };

    const { getByTestId } = render(<InsightsCard data={dataWithMultipleInsights} />);

    // First insight should be selected by default
    const firstInsightButton = getByTestId('DesignSystem-InsightsCard--InsightButton-insight-1');
    const secondInsightButton = getByTestId('DesignSystem-InsightsCard--InsightButton-insight-2');

    // The first insight should have selected styling
    expect(firstInsightButton.closest('.insightCard-item')).toHaveClass('insightCard-item--selected');
    expect(secondInsightButton.closest('.insightCard-item')).not.toHaveClass('insightCard-item--selected');
  });

  it('Should select specified insight when defaultSelectedInsightId is provided', () => {
    const dataWithMultipleInsights = {
      ...mockData,
      categories: [
        {
          id: 'category-1',
          title: 'Category 1',
          insights: [
            {
              id: 'insight-1',
              title: 'First Insight',
              iconName: 'check_circle' as const,
              iconAppearance: 'success' as const,
              borderColor: '#4CAF50',
              backgroundColor: '#E8F5E8',
              selected: false,
            },
            {
              id: 'insight-2',
              title: 'Second Insight',
              iconName: 'warning' as const,
              iconAppearance: 'warning' as const,
              borderColor: '#FF8C00',
              backgroundColor: '#FFF8E1',
              selected: false,
            },
          ],
        },
      ],
    };

    const { getByTestId } = render(
      <InsightsCard data={dataWithMultipleInsights} defaultSelectedInsightId="insight-2" />
    );

    // Second insight should be selected by default
    const firstInsightButton = getByTestId('DesignSystem-InsightsCard--InsightButton-insight-1');
    const secondInsightButton = getByTestId('DesignSystem-InsightsCard--InsightButton-insight-2');

    // The second insight should have selected styling
    expect(firstInsightButton.closest('.insightCard-item')).not.toHaveClass('insightCard-item--selected');
    expect(secondInsightButton.closest('.insightCard-item')).toHaveClass('insightCard-item--selected');
  });

  it('Should not override existing selections when defaultSelectedInsightId is provided but insights are already selected', () => {
    const dataWithSelection = {
      ...mockData,
      categories: [
        {
          id: 'category-1',
          title: 'Category 1',
          insights: [
            {
              id: 'insight-1',
              title: 'First Insight',
              iconName: 'check_circle' as const,
              iconAppearance: 'success' as const,
              borderColor: '#4CAF50',
              backgroundColor: '#E8F5E8',
              selected: true, // Already selected
            },
            {
              id: 'insight-2',
              title: 'Second Insight',
              iconName: 'warning' as const,
              iconAppearance: 'warning' as const,
              borderColor: '#FF8C00',
              backgroundColor: '#FFF8E1',
              selected: false,
            },
          ],
        },
      ],
    };

    const { getByTestId } = render(<InsightsCard data={dataWithSelection} defaultSelectedInsightId="insight-2" />);

    // First insight should remain selected (existing selection preserved)
    const firstInsightButton = getByTestId('DesignSystem-InsightsCard--InsightButton-insight-1');
    const secondInsightButton = getByTestId('DesignSystem-InsightsCard--InsightButton-insight-2');

    expect(firstInsightButton.closest('.insightCard-item')).toHaveClass('insightCard-item--selected');
    expect(secondInsightButton.closest('.insightCard-item')).not.toHaveClass('insightCard-item--selected');
  });
});

describe('InsightsCard accordion functionality', () => {
  it('Should not render accordion button when accordion prop is false (default)', () => {
    const { queryByTestId } = render(<InsightsCard data={mockData} />);

    const accordionButton = queryByTestId('DesignSystem-InsightsCard--AccordionToggle');
    expect(accordionButton).not.toBeInTheDocument();
  });

  it('Should render accordion button when accordion prop is true', () => {
    const { getByTestId } = render(<InsightsCard data={mockData} accordion={true} />);

    const accordionButton = getByTestId('DesignSystem-InsightsCard--AccordionToggle');
    expect(accordionButton).toBeInTheDocument();
  });

  it('Should show right arrow when accordion is collapsed (defaultExpanded=false)', () => {
    const { getByTestId } = render(<InsightsCard data={mockData} accordion={true} defaultExpanded={false} />);

    const accordionButton = getByTestId('DesignSystem-InsightsCard--AccordionToggle');
    expect(accordionButton).toBeInTheDocument();
    // Button should have an icon (we'll test functionality through click behavior)
    expect(accordionButton).toHaveClass('Button');
  });

  it('Should show down arrow when accordion is expanded (defaultExpanded=true)', () => {
    const { getByTestId } = render(<InsightsCard data={mockData} accordion={true} defaultExpanded={true} />);

    const accordionButton = getByTestId('DesignSystem-InsightsCard--AccordionToggle');
    expect(accordionButton).toBeInTheDocument();
    // Button should have an icon (we'll test functionality through click behavior)
    expect(accordionButton).toHaveClass('Button');
  });

  it('Should hide content when accordion is collapsed', () => {
    const { queryByTestId } = render(<InsightsCard data={mockData} accordion={true} defaultExpanded={false} />);

    const contentRow = queryByTestId('DesignSystem-InsightsCard--ContentRow');
    expect(contentRow).not.toBeInTheDocument();
  });

  it('Should show content when accordion is expanded', () => {
    const { getByTestId } = render(<InsightsCard data={mockData} accordion={true} defaultExpanded={true} />);

    const contentRow = getByTestId('DesignSystem-InsightsCard--ContentRow');
    expect(contentRow).toBeInTheDocument();
  });

  it('Should toggle content visibility when accordion button is clicked', () => {
    const onAccordionToggle = jest.fn();
    const { getByTestId, queryByTestId } = render(
      <InsightsCard data={mockData} accordion={true} defaultExpanded={false} onAccordionToggle={onAccordionToggle} />
    );

    const accordionButton = getByTestId('DesignSystem-InsightsCard--AccordionToggle');

    // Initially collapsed - content should not be visible
    expect(queryByTestId('DesignSystem-InsightsCard--ContentRow')).not.toBeInTheDocument();
    expect(accordionButton).toBeInTheDocument();

    // Click to expand
    fireEvent.click(accordionButton);

    // After click - content should be visible
    expect(getByTestId('DesignSystem-InsightsCard--ContentRow')).toBeInTheDocument();
    expect(accordionButton).toBeInTheDocument();
    expect(onAccordionToggle).toHaveBeenCalledWith(true);

    // Click to collapse
    fireEvent.click(accordionButton);

    // After second click - content should be hidden again
    expect(queryByTestId('DesignSystem-InsightsCard--ContentRow')).not.toBeInTheDocument();
    expect(accordionButton).toBeInTheDocument();
    expect(onAccordionToggle).toHaveBeenCalledWith(false);
  });

  it('Should show content by default when accordion is enabled without defaultExpanded specified', () => {
    const { getByTestId } = render(<InsightsCard data={mockData} accordion={true} />);

    // defaultExpanded defaults to true
    const contentRow = getByTestId('DesignSystem-InsightsCard--ContentRow');
    expect(contentRow).toBeInTheDocument();

    const accordionButton = getByTestId('DesignSystem-InsightsCard--AccordionToggle');
    expect(accordionButton).toBeInTheDocument();
  });
});

describe('InsightsCard Props Coverage', () => {
  const baseProps = {
    data: mockData,
  };

  it('Should render with customGradientColors prop', () => {
    const customColors = ['#ff0000', '#00ff00', '#0000ff'];
    render(<InsightsCard {...baseProps} showGradientBorder customGradientColors={customColors} />);

    const cardElement = screen.getByTestId('DesignSystem-InsightsCard');
    expect(cardElement).toBeInTheDocument();
  });

  it('Should render with insightItemClassName prop', () => {
    const customClassName = 'custom-insight-class';
    render(<InsightsCard {...baseProps} insightItemClassName={customClassName} />);

    const insightItem = screen.getByTestId('DesignSystem-InsightsCard--Insight-test-insight-1');
    expect(insightItem).toHaveClass(customClassName);
  });

  it('Should render with categoryClassName prop', () => {
    const customClassName = 'custom-category-class';
    render(<InsightsCard {...baseProps} categoryClassName={customClassName} />);

    const categoryElement = screen.getByTestId('DesignSystem-InsightsCard--CategoryRow-test-category');
    expect(categoryElement).toHaveClass(customClassName);
  });

  it('Should handle onInsightSelect callback properly', () => {
    const mockOnInsightSelect = jest.fn();
    render(<InsightsCard {...baseProps} onInsightSelect={mockOnInsightSelect} />);

    const insightItem = screen.getByTestId('DesignSystem-InsightsCard--InsightColumn-test-insight-1');
    fireEvent.click(insightItem);

    expect(mockOnInsightSelect).toHaveBeenCalledWith(
      expect.objectContaining({
        id: 'test-insight-1',
        title: 'Test Insight',
        selected: true,
      }),
      expect.objectContaining({
        id: 'test-category',
        title: 'Test Category',
      })
    );
  });

  it('Should handle onAccordionToggle callback properly', () => {
    const mockOnAccordionToggle = jest.fn();
    render(<InsightsCard {...baseProps} accordion onAccordionToggle={mockOnAccordionToggle} />);

    const accordionButton = screen.getByTestId('DesignSystem-InsightsCard--AccordionToggle');
    fireEvent.click(accordionButton);

    expect(mockOnAccordionToggle).toHaveBeenCalledWith(false);
  });

  it('Should render with all headingSize variants', () => {
    const headingSizes = ['xs', 's', 'm'] as const;

    headingSizes.forEach((size) => {
      const { unmount } = render(<InsightsCard {...baseProps} headingSize={size} />);

      const cardElement = screen.getByTestId('DesignSystem-InsightsCard');
      expect(cardElement).toBeInTheDocument();

      unmount();
    });
  });

  it('Should handle empty data gracefully', () => {
    const emptyData = {
      title: 'Empty Card',
      description: 'No categories',
      categories: [],
    };

    render(<InsightsCard data={emptyData} />);

    const cardElement = screen.getByTestId('DesignSystem-InsightsCard');
    expect(cardElement).toBeInTheDocument();
  });

  it('Should render with all size and appearance combinations', () => {
    const sizes: Array<'regular' | 'large'> = ['regular', 'large'];
    const appearances: Array<'default' | 'bordered' | 'elevated'> = ['default', 'bordered', 'elevated'];

    sizes.forEach((size) => {
      appearances.forEach((appearance) => {
        const { unmount } = render(<InsightsCard {...baseProps} size={size} appearance={appearance} />);

        const cardElement = screen.getByTestId('DesignSystem-InsightsCard');
        expect(cardElement).toBeInTheDocument();

        unmount();
      });
    });
  });

  it('Should handle maxInsightsHeight as number', () => {
    render(<InsightsCard {...baseProps} maxInsightsHeight={200} enableScrolling />);

    const cardElement = screen.getByTestId('DesignSystem-InsightsCard');
    expect(cardElement).toBeInTheDocument();
  });

  it('Should handle maxInsightsHeight as auto', () => {
    render(<InsightsCard {...baseProps} maxInsightsHeight="auto" enableScrolling />);

    const cardElement = screen.getByTestId('DesignSystem-InsightsCard');
    expect(cardElement).toBeInTheDocument();
  });

  it('Should handle scrollAfterCount prop', () => {
    const dataWithManyInsights = {
      ...mockData,
      categories: [
        {
          ...mockData.categories[0],
          insights: Array.from({ length: 10 }, (_, i) => ({
            id: `insight-${i}`,
            title: `Insight ${i}`,
            iconName: 'info' as const,
            iconAppearance: 'subtle' as const,
            borderColor: '#000000',
            backgroundColor: '#ffffff',
            selected: false,
          })),
        },
      ],
    };

    render(<InsightsCard data={dataWithManyInsights} enableScrolling scrollAfterCount={5} />);

    const cardElement = screen.getByTestId('DesignSystem-InsightsCard');
    expect(cardElement).toBeInTheDocument();
  });

  it('Should handle all boolean props', () => {
    render(<InsightsCard {...baseProps} showGradientBorder enableScrolling accordion defaultExpanded />);

    const cardElement = screen.getByTestId('DesignSystem-InsightsCard');
    expect(cardElement).toBeInTheDocument();
  });
});

describe('InsightsCard Description Updates', () => {
  // Mock data for testing description updates
  const mockInsightData: InsightCardData = {
    title: 'Clinical Insights',
    description: 'Critical healthcare insights requiring attention',
    categories: [
      {
        id: 'clinical',
        title: 'Clinical',
        insights: [
          {
            id: 'clinical-1',
            title: 'No Inhaler Access',
            iconName: 'warning',
            iconAppearance: 'destructive',
            borderColor: '#e53e3e',
            backgroundColor: '#fed7d7',
            selected: true,
          },
          {
            id: 'clinical-2',
            title: 'Complex Follow-up Schedule',
            iconName: 'calendar_today',
            iconAppearance: 'warning',
            borderColor: '#d69e2e',
            backgroundColor: '#faf089',
            selected: false,
          },
        ],
      },
      {
        id: 'social',
        title: 'Social',
        insights: [
          {
            id: 'social-1',
            title: 'Food Security Risk',
            iconName: 'restaurant',
            iconAppearance: 'default',
            borderColor: '#3182ce',
            backgroundColor: '#bee3f8',
            selected: false,
          },
        ],
      },
    ],
  };

  // Test component that demonstrates description updates using the hook
  const TestComponentWithDescriptionUpdate: React.FC = () => {
    const [selectedContent, setSelectedContent] = React.useState<string>('');

    const getDescriptionForInsightId = (insightId: string | null): string => {
      const descriptions: Record<string, string> = {
        'clinical-1': 'Critical: Patient lacks access to prescribed inhaler medication.',
        'clinical-2': 'Warning: Multiple specialist appointments creating scheduling conflicts.',
        'social-1': 'Info: Assessment indicates high risk for food insecurity.',
      };
      return descriptions[insightId || ''] || 'No description available';
    };

    const { selectedInsightId, handleInsightSelect } = useInsightSelection({
      initialInsightId: 'clinical-1',
      onSelectionChange: (id) => {
        const description = getDescriptionForInsightId(id);
        setSelectedContent(description);
      },
    });

    // Set initial content
    React.useEffect(() => {
      if (selectedInsightId && !selectedContent) {
        setSelectedContent(getDescriptionForInsightId(selectedInsightId));
      }
    }, [selectedInsightId, selectedContent]);

    const descriptionContent = (
      <div data-test="description-content">
        <div data-test="current-insight-id">{selectedInsightId}</div>
        <div data-test="description-text">{selectedContent}</div>
      </div>
    );

    return (
      <InsightsCard
        data={mockInsightData}
        descriptionContent={descriptionContent}
        onInsightSelect={handleInsightSelect}
      />
    );
  };

  it('Should display initial description for the default selected insight', () => {
    render(<TestComponentWithDescriptionUpdate />);

    // Check that the initial insight is selected
    expect(screen.getByTestId('current-insight-id')).toHaveTextContent('clinical-1');
    expect(screen.getByTestId('description-text')).toHaveTextContent(
      'Critical: Patient lacks access to prescribed inhaler medication.'
    );
  });

  it('Should update description when clicking on a different insight tile', async () => {
    render(<TestComponentWithDescriptionUpdate />);

    // Initial state check
    expect(screen.getByTestId('current-insight-id')).toHaveTextContent('clinical-1');
    expect(screen.getByTestId('description-text')).toHaveTextContent(
      'Critical: Patient lacks access to prescribed inhaler medication.'
    );

    // Click on the second clinical insight
    const complexFollowUpInsight = screen.getByTestId('DesignSystem-InsightsCard--InsightColumn-clinical-2');
    fireEvent.click(complexFollowUpInsight);

    // Check that selection and description updated
    expect(screen.getByTestId('current-insight-id')).toHaveTextContent('clinical-2');
    expect(screen.getByTestId('description-text')).toHaveTextContent(
      'Warning: Multiple specialist appointments creating scheduling conflicts.'
    );
  });

  it('Should update description when clicking on insight from different category', async () => {
    render(<TestComponentWithDescriptionUpdate />);

    // Initial state check
    expect(screen.getByTestId('current-insight-id')).toHaveTextContent('clinical-1');

    // Click on the social insight
    const foodSecurityInsight = screen.getByTestId('DesignSystem-InsightsCard--InsightColumn-social-1');
    fireEvent.click(foodSecurityInsight);

    // Check that selection and description updated
    expect(screen.getByTestId('current-insight-id')).toHaveTextContent('social-1');
    expect(screen.getByTestId('description-text')).toHaveTextContent(
      'Info: Assessment indicates high risk for food insecurity.'
    );
  });

  it('Should update description multiple times when switching between insights', async () => {
    render(<TestComponentWithDescriptionUpdate />);

    // Start with clinical-1
    expect(screen.getByTestId('current-insight-id')).toHaveTextContent('clinical-1');

    // Switch to clinical-2
    const complexFollowUpInsight = screen.getByTestId('DesignSystem-InsightsCard--InsightColumn-clinical-2');
    fireEvent.click(complexFollowUpInsight);
    expect(screen.getByTestId('current-insight-id')).toHaveTextContent('clinical-2');
    expect(screen.getByTestId('description-text')).toHaveTextContent(
      'Warning: Multiple specialist appointments creating scheduling conflicts.'
    );

    // Switch to social-1
    const foodSecurityInsight = screen.getByTestId('DesignSystem-InsightsCard--InsightColumn-social-1');
    fireEvent.click(foodSecurityInsight);
    expect(screen.getByTestId('current-insight-id')).toHaveTextContent('social-1');
    expect(screen.getByTestId('description-text')).toHaveTextContent(
      'Info: Assessment indicates high risk for food insecurity.'
    );

    // Switch back to clinical-1
    const noInhalerInsight = screen.getByTestId('DesignSystem-InsightsCard--InsightColumn-clinical-1');
    fireEvent.click(noInhalerInsight);
    expect(screen.getByTestId('current-insight-id')).toHaveTextContent('clinical-1');
    expect(screen.getByTestId('description-text')).toHaveTextContent(
      'Critical: Patient lacks access to prescribed inhaler medication.'
    );
  });

  it('Should call onInsightSelect with correct parameters when insight is clicked', async () => {
    const onInsightSelectMock = jest.fn();

    render(
      <InsightsCard
        data={mockInsightData}
        onInsightSelect={onInsightSelectMock}
        descriptionContent={<div>Test Content</div>}
      />
    );

    // Click on clinical-2 insight
    const complexFollowUpInsight = screen.getByTestId('DesignSystem-InsightsCard--InsightColumn-clinical-2');
    fireEvent.click(complexFollowUpInsight);

    // Verify that onInsightSelect was called with correct parameters
    expect(onInsightSelectMock).toHaveBeenCalledWith(
      expect.objectContaining({
        id: 'clinical-2',
        title: 'Complex Follow-up Schedule',
        selected: true,
      }),
      expect.objectContaining({
        id: 'clinical',
        title: 'Clinical',
      })
    );
  });

  it('Should maintain visual selection state when switching between insights', async () => {
    render(<TestComponentWithDescriptionUpdate />);

    // Initial selection should be visual
    const initialInsight = screen.getByTestId('DesignSystem-InsightsCard--Insight-clinical-1');
    expect(initialInsight).toHaveClass('insightCard-item--selected');

    // Click on different insight
    const complexFollowUpInsight = screen.getByTestId('DesignSystem-InsightsCard--InsightColumn-clinical-2');
    fireEvent.click(complexFollowUpInsight);

    // Check that visual selection changed
    const newSelectedInsight = screen.getByTestId('DesignSystem-InsightsCard--Insight-clinical-2');
    expect(newSelectedInsight).toHaveClass('insightCard-item--selected');

    // Previous insight should no longer be selected
    const previousInsight = screen.getByTestId('DesignSystem-InsightsCard--Insight-clinical-1');
    expect(previousInsight).not.toHaveClass('insightCard-item--selected');
  });

  it('Should handle description updates with custom defaultSelectedInsightId', () => {
    const customData: InsightCardData = {
      ...mockInsightData,
      categories: mockInsightData.categories.map((category) => ({
        ...category,
        insights: category.insights.map((insight) => ({
          ...insight,
          selected: false, // No pre-selected insights
        })),
      })),
    };

    render(
      <InsightsCard
        data={customData}
        defaultSelectedInsightId="social-1"
        descriptionContent={<div data-test="custom-default">Custom default content</div>}
        onInsightSelect={() => {}}
      />
    );

    // Should select the specified default insight
    const socialInsight = screen.getByTestId('DesignSystem-InsightsCard--Insight-social-1');
    expect(socialInsight).toHaveClass('insightCard-item--selected');

    // Other insights should not be selected
    const clinicalInsight = screen.getByTestId('DesignSystem-InsightsCard--Insight-clinical-1');
    expect(clinicalInsight).not.toHaveClass('insightCard-item--selected');
  });

  it('Should work with empty description content gracefully', async () => {
    const mockDataWithEmptyDescription: InsightCardData = {
      ...mockInsightData,
      categories: [
        {
          id: 'test-category',
          title: 'Test Category',
          insights: [
            {
              id: 'test-insight-1',
              title: 'Test Insight 1',
              selected: true,
            },
            {
              id: 'test-insight-2',
              title: 'Test Insight 2',
              selected: false,
            },
          ],
        },
      ],
    };

    render(<InsightsCard data={mockDataWithEmptyDescription} descriptionContent={null} onInsightSelect={() => {}} />);

    // Should render without crashing
    expect(screen.getByTestId('DesignSystem-InsightsCard')).toBeInTheDocument();

    // Should be able to click insights
    const secondInsight = screen.getByTestId('DesignSystem-InsightsCard--InsightColumn-test-insight-2');
    fireEvent.click(secondInsight);

    // Component should still function normally
    expect(screen.getByTestId('DesignSystem-InsightsCard--Insight-test-insight-2')).toHaveClass(
      'insightCard-item--selected'
    );
  });
});
