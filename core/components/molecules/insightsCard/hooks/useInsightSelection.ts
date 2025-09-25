import { useState, useCallback, useRef, useEffect } from 'react';
import { InsightItemData, InsightCategoryData } from '../types';

export interface UseInsightSelectionOptions {
  /** Initial insight ID to select */
  initialInsightId?: string | null;
  /** Callback when selection changes */
  onSelectionChange?: (insightId: string, insight: InsightItemData, category: InsightCategoryData) => void;
}

export interface UseInsightSelectionReturn {
  /** Currently selected insight ID */
  selectedInsightId: string | null;
  /** Handler to pass to InsightsCard onInsightSelect prop */
  handleInsightSelect: (insight: InsightItemData, category: InsightCategoryData) => void;
  /** Manually set the selected insight ID (accepts string or null) */
  setSelectedInsightId: (id: string | null) => void;
}

/**
 * Custom hook to manage insight selection state and provide handlers for InsightsCard
 *
 * @example
 * ```tsx
 * const { selectedInsightId, handleInsightSelect } = useInsightSelection({
 *   initialInsightId: 'clinical-1',
 *   onSelectionChange: (id, insight, category) => {
 *     // Update your app state, make API calls, etc.
 *     updateDescriptionContent(id);
 *   }
 * });
 *
 * const dynamicDescription = getDescriptionForInsight(selectedInsightId);
 *
 * return (
 *   <InsightsCard
 *     data={data}
 *     descriptionContent={dynamicDescription}
 *     onInsightSelect={handleInsightSelect}
 *   />
 * );
 * ```
 */
export const useInsightSelection = (options: UseInsightSelectionOptions = {}): UseInsightSelectionReturn => {
  const { initialInsightId = null, onSelectionChange } = options;

  const [selectedInsightId, setSelectedInsightId] = useState<string | null>(initialInsightId);
  const onSelectionChangeRef = useRef(onSelectionChange);

  // Update ref whenever the callback changes
  useEffect(() => {
    onSelectionChangeRef.current = onSelectionChange;
  }, [onSelectionChange]);

  const handleInsightSelect = useCallback((insight: InsightItemData, category: InsightCategoryData) => {
    // Safety checks for required parameters
    if (!insight || typeof insight !== 'object') {
      // Invalid insight object provided
      return;
    }

    if (!category || typeof category !== 'object') {
      // Invalid category object provided
      return;
    }

    if (!insight.id || typeof insight.id !== 'string') {
      // Insight must have a valid id string
      return;
    }

    const insightId = insight.id;

    // Update local state
    setSelectedInsightId(insightId);

    // Call optional callback with safety check
    if (onSelectionChangeRef.current && typeof onSelectionChangeRef.current === 'function') {
      try {
        onSelectionChangeRef.current(insightId, insight, category);
      } catch (error) {
        // Error in onSelectionChange callback
      }
    }
  }, []);

  const safeSetSelectedInsightId = useCallback((id: string | null) => {
    if (id !== null && typeof id !== 'string') {
      // setSelectedInsightId expects a string or null
      return;
    }
    setSelectedInsightId(id);
  }, []);

  return {
    selectedInsightId,
    handleInsightSelect,
    setSelectedInsightId: safeSetSelectedInsightId,
  };
};
