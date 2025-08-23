import React, { useCallback } from 'react';
import { Card, CardHeader, CardBody, Heading, Text, Subheading, Row, Column, Button, Icon, Divider } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';
import styles from '@css/components/insightCard.module.css';

import AISparkle from './icons/AISparkle.svg';

export interface InsightsCardProps extends BaseProps {
  /**
   * Data for the Insights Card
   */
  data: {
    // Title of the Insights Card
    title: string;
    // Description of the Insights Card
    titleDescription: string;
    // Subtitles of the Insights Card
    subtitles: [
      {
        // ID of the subtitle
        id: string;
        // Title of the subtitle
        title: string;
        // Insights of the subtitle
        insights: [
          {
            // ID of the insight
            id: string;
            // Selected state of the insight
            selected: boolean;
            // Title of the insight
            title: string;
            // Icon name of the insight
            iconName: string;
            // Icon appearance of the insight
            iconAppearance: string;
            // Border color of the insight
            borderColor: string;
            // Background color of the insight
            backgroundColor: string;
          }
        ];
      }
    ];
  };
  /**
   * Description of the selected insight
   */
  description: React.ReactNode;
}

export const InsightsCard = (props: InsightsCardProps) => {
  const { data, description } = props;
  const baseProps = extractBaseProps(props);
  const [inSightsData, setInSightsData] = React.useState<any>(data || {});
  const [selectedInsightColor, setSelectedInsightColor] = React.useState<string>('');

  React.useEffect(() => {
    const selectedColor = inSightsData?.subtitles
      .find((subtitle: any) => subtitle?.insights.find((insight: any) => insight?.selected))
      ?.insights.find((insight: any) => insight?.selected)?.backgroundColor;
    setSelectedInsightColor(selectedColor || '');
  }, [inSightsData]);

  const handleInsightClick = useCallback(
    (insight: any) => {
      const id = insight?.id;
      const newData = { ...inSightsData };
      newData?.subtitles.forEach((subtitle: any) => {
        subtitle?.insights.forEach((insight: any) => {
          if (insight?.id === id) {
            insight.selected = true;
          } else {
            insight.selected = false;
          }
        });
      });
      setInSightsData(newData);
    },
    [inSightsData]
  );

  return (
    <div data-test="DesignSystem-InsightsCard" {...baseProps}>
      <Card shadow="none" className={styles['insightsCard-border']} data-test="DesignSystem-InsightsCard--Card">
        <div className={styles['inner-content']} data-test="DesignSystem-InsightsCard--InnerContent">
          <CardHeader data-test="DesignSystem-InsightsCard--Header">
            <div className="d-flex align-items-center" data-test="DesignSystem-InsightsCard--HeaderContent">
              <img
                src={AISparkle}
                alt="Button Icon"
                width={24}
                height={24}
                data-test="DesignSystem-InsightsCard--AISparkle"
              />
              <Heading
                size="s"
                className="d-flex align-items-center mb-4 ml-4 pt-4"
                data-test="DesignSystem-InsightsCard--Title"
              >
                {inSightsData?.title || 'Title Placeholder'}
              </Heading>
            </div>
          </CardHeader>
          <CardBody data-test="DesignSystem-InsightsCard--Body">
            <Text data-test="DesignSystem-InsightsCard--Description">
              {inSightsData?.titleDescription || 'Title Description Placeholder'}
            </Text>
            <Row className="d-flex justify-content-evenly" data-test="DesignSystem-InsightsCard--ContentRow">
              <Column key={'insightsCard-nav-column'} size={4} data-test="DesignSystem-InsightsCard--NavigationColumn">
                {inSightsData?.subtitles.map((subtitle: any, idx: number) => (
                  <React.Fragment key={subtitle?.id}>
                    <Row
                      className="d-flex flex-column mb-4"
                      data-test={`DesignSystem-InsightsCard--SubtitleRow-${subtitle?.id}`}
                    >
                      <Subheading
                        appearance="subtle"
                        className={`${styles['insightCard-title']} ${idx === 0 ? 'mt-5' : ''}`}
                        data-test={`DesignSystem-InsightsCard--Subtitle-${subtitle?.id}`}
                      >
                        {subtitle?.title || 'Subtitle Placeholder'}
                      </Subheading>
                      {subtitle?.insights.map((insight: any) => (
                        <Column
                          key={insight?.id}
                          onClick={() => handleInsightClick(insight)}
                          data-test={`DesignSystem-InsightsCard--InsightColumn-${insight?.id}`}
                        >
                          <div
                            className="d-flex align-items-center"
                            style={{
                              borderLeft: `${insight?.selected ? `2px solid ${insight?.borderColor}` : ''}`,
                              backgroundColor: insight?.selected ? insight?.backgroundColor : '',
                              borderTopRightRadius: '10px',
                              borderBottomRightRadius: '10px',
                            }}
                            data-test={`DesignSystem-InsightsCard--Insight-${insight?.id}`}
                          >
                            <Icon
                              name={insight?.iconName}
                              size={18}
                              appearance={insight?.iconAppearance as any}
                              className="ml-4"
                              data-test={`DesignSystem-InsightsCard--InsightIcon-${insight?.id}`}
                            />
                            <Text className="ml-4" data-test={`DesignSystem-InsightsCard--InsightText-${insight?.id}`}>
                              {insight?.title || 'Insight Placeholder'}
                            </Text>
                            <Button
                              className={`ml-auto ${insight?.selected ? '' : styles['insightCard--subtle']}`}
                              appearance="transparent"
                              icon="keyboard_arrow_right"
                              data-test={`DesignSystem-InsightsCard--InsightButton-${insight?.id}`}
                            />
                          </div>
                        </Column>
                      ))}
                    </Row>
                    {idx !== data?.subtitles.length - 1 && (
                      <Divider className="my-4" data-test={`DesignSystem-InsightsCard--Divider-${subtitle?.id}`} />
                    )}
                  </React.Fragment>
                ))}
              </Column>
              <Column
                key={'insightsCard-description-column'}
                className="mt-8 p-4 ml-4"
                style={{ backgroundColor: selectedInsightColor, borderRadius: '10px' }}
                data-test="DesignSystem-InsightsCard--DescriptionColumn"
              >
                <div data-test="DesignSystem-InsightsCard--DescriptionContent">{description}</div>
              </Column>
            </Row>
            <br />
          </CardBody>
        </div>
      </Card>
    </div>
  );
};

export default InsightsCard;
