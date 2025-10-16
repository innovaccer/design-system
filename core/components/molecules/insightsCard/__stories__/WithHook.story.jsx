import * as React from 'react';
import { InsightsCard, Text, Heading, Card, CardBody } from '@/index';
import { data as baseData } from '../data/indexData';
import { useInsightSelection } from '../hooks';

// Mock content provider - this could be your API service
const getContentForInsight = (insightId) => {
  if (!insightId) {
    return null;
  }

  const content = {
    'clinical-1': {
      title: 'Critical: No Inhaler Access',
      description: 'Immediate intervention required for respiratory medication access.',
      severity: 'high',
      recommendation: 'Contact pharmacy and initiate emergency medication protocol',
    },
    'clinical-2': {
      title: 'Complex Follow-up Schedule',
      description: 'Multiple appointments requiring coordination to prevent conflicts.',
      severity: 'medium',
      recommendation: 'Use care coordination team to optimize scheduling',
    },
    'social-1': {
      title: 'Food Insecurity Risk',
      description: 'Social determinants affecting health outcomes and medication adherence.',
      severity: 'medium',
      recommendation: 'Connect with social services for food assistance programs',
    },
    'behavioral-1': {
      title: 'Protected Information',
      description: 'Behavioral health data requires additional authorization.',
      severity: 'info',
      recommendation: 'Contact behavioral health team for access authorization',
    },
  };

  return content[insightId];
};

export const WithHook = () => {
  // State to demonstrate using the callback parameters
  const [lastSelection, setLastSelection] = React.useState(null);

  // Using the custom hook - this handles all the selection logic!
  const { selectedInsightId, handleInsightSelect } = useInsightSelection({
    initialInsightId: 'clinical-1', // Start with the same as defaultSelectedInsightId
    onSelectionChange: (id, insight, category) => {
      // This callback runs every time user selects a different insight
      // Update local state with selection details
      setLastSelection({
        id,
        insightTitle: insight.title,
        categoryTitle: category.title,
        timestamp: new Date().toLocaleTimeString(),
      });

      // You could also:
      // - Make API calls: fetchAdditionalDetails(id)
      // - Track analytics: analytics.track('insight_selected', { id, insight, category })
      // - Update other components: dispatch(updateActiveInsight({ id, insight, category }))
    },
  });

  // Create a stable callback reference
  const stableOnInsightSelect = React.useCallback(
    (insight, category) => {
      handleInsightSelect(insight, category);
    },
    [handleInsightSelect]
  );

  // Initialize the lastSelection for the initial content
  React.useEffect(() => {
    if (selectedInsightId && !lastSelection) {
      const initialInsight = baseData.categories
        .flatMap((cat) => cat.insights)
        .find((insight) => insight.id === selectedInsightId);
      const initialCategory = baseData.categories.find((cat) =>
        cat.insights.some((insight) => insight.id === selectedInsightId)
      );

      if (initialInsight && initialCategory) {
        setLastSelection({
          id: selectedInsightId,
          insightTitle: initialInsight.title,
          categoryTitle: initialCategory.title,
          timestamp: new Date().toLocaleTimeString(),
        });
      }
    }
  }, [selectedInsightId, lastSelection, baseData]);

  // Get dynamic content based on selection
  const currentContent = getContentForInsight(selectedInsightId);

  // Build description content
  const descriptionContent = currentContent ? (
    <div>
      <Heading size="s" className="mb-2">
        {currentContent.title}
      </Heading>
      <Text className="mb-3">{currentContent.description}</Text>

      <div className="mb-2">
        <Text weight="strong">Severity: </Text>
        <Text
          appearance={
            currentContent.severity === 'high'
              ? 'destructive'
              : currentContent.severity === 'medium'
              ? 'warning'
              : 'default'
          }
        >
          {currentContent.severity.toUpperCase()}
        </Text>
      </div>

      <div
        className="p-2 mb-2"
        style={{
          backgroundColor: currentContent.severity === 'high' ? 'var(--mirch-lightest-2)' : 'var(--secondary-lightest)',
          borderRadius: '4px',
        }}
      >
        <Text size="sm" weight="strong">
          💡 Recommendation:
        </Text>
        <Text size="sm" className="ml-1">
          {currentContent.recommendation}
        </Text>
      </div>

      <div className="mt-3 p-2" style={{ backgroundColor: 'var(--stone-lightest)', borderRadius: '4px' }}>
        <Text size="sm" appearance="subtle">
          🪝 <strong>Using Hook:</strong> This content is managed by <code>useInsightSelection</code> hook. Current
          selection: <code>{selectedInsightId}</code>
        </Text>
        {lastSelection && (
          <Text size="sm" appearance="subtle" className="mt-1">
            📝 <strong>Last Selection:</strong> &quot;{lastSelection.insightTitle}&quot; from{' '}
            {lastSelection.categoryTitle} at {lastSelection.timestamp}
          </Text>
        )}
      </div>
    </div>
  ) : (
    <Text>Select an insight to view details...</Text>
  );

  return (
    <div>
      <div className="mb-4">
        <Heading size="m">Using useInsightSelection Hook</Heading>
        <Text>
          This example demonstrates the <code>useInsightSelection</code> hook which simplifies the pattern of getting
          insight IDs from tile clicks and updating description content dynamically.
        </Text>
      </div>

      <InsightsCard
        data={{
          ...baseData,
          categories: baseData.categories.map((category) => ({
            ...category,
            insights: category.insights.map((insight) => ({
              ...insight,
              selected: insight.id === selectedInsightId,
            })),
          })),
        }}
        descriptionContent={descriptionContent}
        onInsightSelect={stableOnInsightSelect}
      />

      <div className="mt-4">
        <Card>
          <CardBody>
            <Heading size="xs" className="mb-2">
              Hook Implementation
            </Heading>
            <div style={{ backgroundColor: 'var(--stone-lightest)', padding: '12px', borderRadius: '4px' }}>
              <pre style={{ fontSize: '12px', margin: 0, overflow: 'auto' }}>
                {`// 1. Use the hook
const { selectedInsightId, handleInsightSelect } = useInsightSelection({
  initialInsightId: 'clinical-1',
  onSelectionChange: (id, insight, category) => {
    // Update your app state, make API calls, etc.
    setLastSelection({ id, insightTitle: insight.title, ... });
  }
});

// 2. Get dynamic content based on selection
const content = getContentForInsight(selectedInsightId);

// 3. Pass data with controlled selection and handler to InsightsCard
<InsightsCard
  data={{
    ...data,
    categories: data.categories.map(category => ({
      ...category,
      insights: category.insights.map(insight => ({
        ...insight,
        selected: insight.id === selectedInsightId
      }))
    }))
  }}
  descriptionContent={content}
  onInsightSelect={handleInsightSelect}
/>`}
              </pre>
            </div>

            <div className="mt-3">
              <Text size="sm">
                <strong>Current Selection:</strong> <code>{selectedInsightId}</code>
                <br />
                <strong>Content Loaded:</strong> {currentContent ? '✅' : '❌'}
                <br />
                <strong>Hook Active:</strong> ✅
                <br />
                <strong>Callback Parameters Used:</strong> {lastSelection ? '✅' : '❌'}
                {lastSelection && (
                  <>
                    <br />
                    <strong>Last Callback:</strong> {lastSelection.insightTitle} ({lastSelection.categoryTitle})
                  </>
                )}
              </Text>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

WithHook.parameters = {
  docs: {
    description: {
      story:
        '🪝 **Hook Pattern** - Shows how to use the `useInsightSelection` hook to simplify the pattern of receiving insight IDs from tile clicks and updating description content. This hook encapsulates the selection logic and provides a clean API for parent components.',
    },
  },
};
