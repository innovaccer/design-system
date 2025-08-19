import * as React from 'react';
import { InsightsCard, Text, Heading } from '@/index';
import { data as baseData } from '../data/indexData';

// Enhanced data with descriptions for each insight
const dataWithDescriptions = {
  ...baseData,
  categories: baseData.categories.map((category) => ({
    ...category,
    insights: category.insights.map((insight) => ({
      ...insight,
      // Add description data to each insight
      description: getDescriptionForInsight(insight.id),
      // Ensure no pre-selected insights to let defaultSelectedInsightId work
      selected: false,
    })),
  })),
};

// Function to get description content based on insight ID
function getDescriptionForInsight(insightId) {
  const descriptions = {
    'clinical-1': {
      title: 'No Inhaler Access - Critical',
      content:
        'Patient lacks access to prescribed inhaler medication. This poses immediate respiratory risks given their moderate asthma diagnosis. Requires urgent intervention and medication bridge program enrollment.',
      priority: 'High',
      actions: ['Contact pharmacy', 'Emergency inhaler provision', 'Insurance verification'],
    },
    'clinical-2': {
      title: 'Complex Follow-up Schedule',
      content:
        'Multiple overlapping appointments with different specialists creating scheduling conflicts. Risk of missed appointments and treatment gaps.',
      priority: 'Medium',
      actions: ['Coordinate appointments', 'Patient navigation', 'Schedule optimization'],
    },
    'social-1': {
      title: 'Food Insecurity Risk',
      content:
        'Patient shows indicators of food insecurity which can affect medication adherence and overall health outcomes. Housing instability compounds this issue.',
      priority: 'Medium',
      actions: ['Food assistance referral', 'Nutritionist consultation', 'Community resources'],
    },
    'behavioral-1': {
      title: 'Protected Information',
      content:
        'Behavioral health information requires special authorization to view. Please contact the behavioral health team for access.',
      priority: 'N/A',
      actions: ['Contact BH team', 'Authorization request'],
    },
  };

  return (
    descriptions[insightId] || {
      title: 'Information Not Available',
      content: 'No detailed information available for this insight.',
      priority: 'N/A',
      actions: [],
    }
  );
}

export const DynamicDescription = () => {
  // State to manage the currently selected insight ID
  const [selectedInsightId, setSelectedInsightId] = React.useState('clinical-1');

  // Handle insight selection and update description dynamically
  const handleInsightSelect = React.useCallback((insight) => {
    setSelectedInsightId(insight.id);
  }, []);

  // Get the current description based on selected insight
  const currentDescription = getDescriptionForInsight(selectedInsightId);

  // Dynamic description content that updates based on selection
  const dynamicDescriptionContent = (
    <div>
      <Heading size="s" className="mb-2">
        {currentDescription.title}
      </Heading>

      <Text className="mb-3">{currentDescription.content}</Text>

      <div className="mb-2">
        <Text weight="strong">Priority: </Text>
        <Text appearance={currentDescription.priority === 'High' ? 'destructive' : 'default'}>
          {currentDescription.priority}
        </Text>
      </div>

      {currentDescription.actions.length > 0 && (
        <div>
          <Text weight="strong" className="mb-1">
            Recommended Actions:
          </Text>
          <ul className="ml-4">
            {currentDescription.actions.map((action, index) => (
              <li key={index}>
                <Text size="sm">{action}</Text>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-3 p-2" style={{ backgroundColor: 'var(--secondary-lightest)', borderRadius: '4px' }}>
        <Text size="sm" appearance="subtle">
          💡 <strong>Dynamic Behavior:</strong> This description updates automatically when you click different
          insights. The parent component receives the insight ID: <code>{selectedInsightId}</code>
        </Text>
      </div>
    </div>
  );

  return (
    <div>
      <div className="mb-4">
        <Heading size="m">Dynamic Description Example</Heading>
        <Text>
          Click on different insights to see how the description content updates dynamically based on the selected tile
          ID.
        </Text>
      </div>

      <InsightsCard
        data={dataWithDescriptions}
        descriptionContent={dynamicDescriptionContent}
        onInsightSelect={handleInsightSelect}
        defaultSelectedInsightId="clinical-1"
      />

      <div className="mt-4 p-3" style={{ backgroundColor: 'var(--stone-lightest)', borderRadius: '8px' }}>
        <Heading size="xs" className="mb-2">
          Implementation Details:
        </Heading>
        <Text size="sm">
          • <strong>Parent State:</strong> <code>selectedInsightId = "{selectedInsightId}"</code>
          <br />• <strong>Callback:</strong> <code>onInsightSelect(insight, category)</code>
          <br />• <strong>Dynamic Content:</strong> Description updates based on <code>insight.id</code>
          <br />• <strong>Pattern:</strong> Controlled component pattern for external state management
        </Text>
      </div>
    </div>
  );
};

DynamicDescription.parameters = {
  docs: {
    description: {
      story:
        '🔄 **Dynamic Description Updates** - Demonstrates how parent components can receive insight IDs and update description content dynamically. Perfect for interactive dashboards where description content needs to change based on user selection.',
    },
  },
};
