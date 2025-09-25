import React, { useCallback } from 'react';
import { Card, CardHeader, CardBody, Heading, Text, Subheading, Row, Column, Button, Icon, Divider } from '@/index';
import { extractBaseProps } from '@/utils/types';
import styles from '@css/components/insightCard.module.css';
import classNames from 'classnames';

import AISparkle from './icons/AISparkle.svg';
import { InsightItemData, InsightCategoryData, InsightCardData, InsightsCardProps } from './types';
export type { InsightItemData, InsightCategoryData, InsightCardData, InsightsCardProps } from './types';

export const InsightsCard = (props: InsightsCardProps) => {
  const {
    data,
    size = 'regular',
    appearance = 'default',
    showGradientBorder = true,
    customGradientColors,
    customIcon,
    headingSize = 's',
    descriptionContent,
    onInsightSelect,
    insightItemClassName,
    categoryClassName,
    className,
    maxInsightsHeight = 200,
    enableScrolling = true,
    scrollAfterCount = 5,
    defaultSelectedInsightId,
    accordion = false,
    defaultExpanded = true,
    onAccordionToggle,
  } = props;

  const baseProps = extractBaseProps(props);
  const [localData, setLocalData] = React.useState<InsightCardData>(data);
  const [selectedInsightColor, setSelectedInsightColor] = React.useState<string>('');
  const [isExpanded, setIsExpanded] = React.useState<boolean>(defaultExpanded);

  // Sync local data with incoming data changes
  React.useEffect(() => {
    setLocalData(data);
  }, [data]);

  // Set default selection when component mounts (only once)
  React.useEffect(() => {
    if (!defaultSelectedInsightId) return;

    // Check if any insight is already selected in the incoming data
    const hasAnySelection = data.categories
      ?.flatMap((category) => category.insights)
      ?.some((insight) => insight.selected);

    // Only apply default selection if there are no existing selections
    if (!hasAnySelection) {
      const newData = { ...data };

      // Find and select the target insight
      newData.categories = newData.categories.map((cat) => ({
        ...cat,
        insights: cat.insights.map((item) => ({
          ...item,
          selected: item.id === defaultSelectedInsightId,
        })),
      }));
      setLocalData(newData);
    }
  }, [defaultSelectedInsightId]); // Remove localData dependency

  // Update selected color based on selection
  React.useEffect(() => {
    const selectedInsight = localData.categories
      ?.flatMap((category) => category.insights)
      ?.find((insight) => insight.selected);
    setSelectedInsightColor(selectedInsight?.backgroundColor || '');
  }, [localData]);

  const InsightsCardClasses = classNames(
    {
      [styles['insightsCard']]: true,
      [styles[`insightsCard--${size}`]]: size,
      [styles[`insightsCard--${appearance}`]]: appearance,
    },
    className
  );

  const CardClasses = classNames({
    [styles['insightsCard-border']]: showGradientBorder && !customGradientColors,
  });

  // Generate custom gradient style if customGradientColors is provided
  const customGradientStyle = React.useMemo(() => {
    if (showGradientBorder && customGradientColors && customGradientColors.length > 0) {
      const gradientColors = customGradientColors.join(', ');
      return {
        backgroundImage: `linear-gradient(90deg, ${gradientColors})`,
        padding: '2px',
        borderRadius: '10px',
      };
    }
    return {};
  }, [showGradientBorder, customGradientColors]);

  const handleInsightClick = useCallback(
    (insight: InsightItemData, category: InsightCategoryData) => {
      // Update local state
      const newData = { ...localData };
      newData.categories = newData.categories.map((cat) => ({
        ...cat,
        insights: cat.insights.map((item) => ({
          ...item,
          selected: item.id === insight.id,
        })),
      }));
      setLocalData(newData);

      // Call the selection callback if provided
      if (onInsightSelect) {
        onInsightSelect({ ...insight, selected: true }, category);
      }
    },
    [localData, onInsightSelect]
  );

  const handleAccordionToggle = React.useCallback(() => {
    const newExpanded = !isExpanded;
    setIsExpanded(newExpanded);
    if (onAccordionToggle) {
      onAccordionToggle(newExpanded);
    }
  }, [isExpanded, onAccordionToggle]);

  const renderIcon = () => {
    if (customIcon) {
      return React.cloneElement(customIcon, {
        'data-test': 'DesignSystem-InsightsCard--CustomIcon',
      });
    }
    return (
      <img
        src={AISparkle}
        alt="Insights Icon"
        width={24}
        height={24}
        data-test="DesignSystem-InsightsCard--DefaultIcon"
      />
    );
  };

  const renderInsightItem = (insight: InsightItemData, category: InsightCategoryData) => {
    const insightClasses = classNames(
      'd-flex align-items-center',
      styles['insightCard-item'],
      {
        [styles['insightCard-item--selected']]: insight.selected,
        [styles[`insightCard-item--${size}`]]: size,
      },
      insightItemClassName
    );

    const itemStyle: React.CSSProperties = {
      ...(insight.selected && {
        borderLeft: `2px solid ${insight.borderColor || 'var(--primary)'}`,
        backgroundColor: insight.backgroundColor || 'var(--primary-lightest)',
      }),
      borderTopRightRadius: '10px',
      borderBottomRightRadius: '10px',
      cursor: 'pointer',
    };

    return (
      <Column
        key={insight.id}
        onClick={() => handleInsightClick(insight, category)}
        data-test={`DesignSystem-InsightsCard--InsightColumn-${insight.id}`}
      >
        <div
          className={insightClasses}
          style={itemStyle}
          data-test={`DesignSystem-InsightsCard--Insight-${insight.id}`}
        >
          {insight.iconName && (
            <Icon
              name={insight.iconName}
              size={18}
              appearance={insight.iconAppearance || 'default'}
              className="ml-4"
              data-test={`DesignSystem-InsightsCard--InsightIcon-${insight.id}`}
            />
          )}
          <Text className="ml-4" data-test={`DesignSystem-InsightsCard--InsightText-${insight.id}`}>
            {insight.title}
          </Text>
          <Button
            className={`ml-auto ${insight.selected ? styles['insightCard--selected'] : styles['insightCard--subtle']}`}
            appearance="transparent"
            icon="keyboard_arrow_right"
            style={
              insight.selected
                ? {
                    color: insight.borderColor || 'var(--primary)',
                    backgroundColor: insight.backgroundColor || 'var(--primary-lightest)',
                  }
                : {}
            }
            data-test={`DesignSystem-InsightsCard--InsightButton-${insight.id}`}
          />
        </div>
      </Column>
    );
  };

  return (
    <div data-test="DesignSystem-InsightsCard" {...baseProps} className={InsightsCardClasses}>
      {showGradientBorder && customGradientColors ? (
        // Custom gradient wrapper
        <div style={customGradientStyle} data-test="DesignSystem-InsightsCard--CustomGradient">
          <Card
            shadow="none"
            style={{
              background: 'var(--white)',
              borderRadius: '8px',
              margin: 0,
              border: 'none',
            }}
            data-test="DesignSystem-InsightsCard--Card"
          >
            <div style={{ padding: '16px' }}>{renderCardContent()}</div>
          </Card>
        </div>
      ) : (
        // Default gradient or no gradient
        <Card shadow="none" className={CardClasses} data-test="DesignSystem-InsightsCard--Card">
          {showGradientBorder ? (
            <div className={styles['inner-content']} data-test="DesignSystem-InsightsCard--InnerContent">
              {renderCardContent()}
            </div>
          ) : (
            renderCardContent()
          )}
        </Card>
      )}
    </div>
  );

  function renderCardContent() {
    return (
      <>
        {(localData.title || customIcon || accordion) && (
          <CardHeader data-test="DesignSystem-InsightsCard--Header">
            <div
              className="d-flex align-items-center justify-content-between"
              data-test="DesignSystem-InsightsCard--HeaderContent"
            >
              <div className="d-flex align-items-center">
                {renderIcon()}
                {localData.title && (
                  <Heading
                    size={headingSize}
                    className="d-flex align-items-center mb-4 ml-4 pt-4"
                    data-test="DesignSystem-InsightsCard--Title"
                  >
                    {localData.title}
                  </Heading>
                )}
              </div>
              {accordion && (
                <Button
                  appearance="transparent"
                  icon={isExpanded ? 'keyboard_arrow_up' : 'keyboard_arrow_right'}
                  onClick={handleAccordionToggle}
                  className="ml-2"
                  data-test="DesignSystem-InsightsCard--AccordionToggle"
                />
              )}
            </div>
          </CardHeader>
        )}
        <CardBody data-test="DesignSystem-InsightsCard--Body">
          {(!accordion || isExpanded) && (
            <>
              {localData.description && (
                <Text data-test="DesignSystem-InsightsCard--Description" className="mb-4">
                  {localData.description}
                </Text>
              )}
              <Row className="d-flex justify-content-evenly" data-test="DesignSystem-InsightsCard--ContentRow">
                <Column size={descriptionContent ? 4 : 12} data-test="DesignSystem-InsightsCard--NavigationColumn">
                  {localData.categories?.map((category, idx) => {
                    const categoryClasses = classNames('d-flex flex-column mb-4', categoryClassName);

                    return (
                      <React.Fragment key={category.id}>
                        <Row
                          className={categoryClasses}
                          data-test={`DesignSystem-InsightsCard--CategoryRow-${category.id}`}
                        >
                          <Subheading
                            appearance="subtle"
                            className={classNames(styles['insightCard-title'], {
                              'mt-5': idx === 0,
                            })}
                            data-test={`DesignSystem-InsightsCard--Category-${category.id}`}
                          >
                            {category.title}
                          </Subheading>
                          <div
                            className={classNames(styles['insights-container'], {
                              [styles['insights-scrollable-container']]:
                                enableScrolling &&
                                (maxInsightsHeight === 'auto' || category.insights.length > scrollAfterCount),
                            })}
                            style={{
                              maxHeight: maxInsightsHeight === 'auto' ? 'none' : `${maxInsightsHeight}px`,
                            }}
                            data-test={`DesignSystem-InsightsCard--InsightsContainer-${category.id}`}
                          >
                            {category.insights.map((insight) => renderInsightItem(insight, category))}
                          </div>
                        </Row>
                        {idx < localData.categories.length - 1 && (
                          <Divider className="my-4" data-test={`DesignSystem-InsightsCard--Divider-${category.id}`} />
                        )}
                      </React.Fragment>
                    );
                  })}
                </Column>
                {descriptionContent && (
                  <Column
                    className="mt-8 p-4 ml-4 mb-6"
                    style={{
                      backgroundColor: selectedInsightColor || 'var(--secondary-lightest)',
                      borderRadius: '10px',
                    }}
                    data-test="DesignSystem-InsightsCard--DescriptionColumn"
                  >
                    <div data-test="DesignSystem-InsightsCard--DescriptionContent">{descriptionContent}</div>
                  </Column>
                )}
              </Row>
            </>
          )}
        </CardBody>
      </>
    );
  }
};

InsightsCard.displayName = 'InsightsCard';

InsightsCard.defaultProps = {
  size: 'regular',
  appearance: 'default',
  showGradientBorder: false,
  headingSize: 's',
};

export default InsightsCard;
