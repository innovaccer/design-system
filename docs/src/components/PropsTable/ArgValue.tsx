import React, { FC, useState } from 'react';
import { styled } from '@storybook/theming';
import uniq from 'lodash/uniq';
import { PropSummaryValue } from './types';
import { theme } from './theme';
import { codeCommon } from './Shared';

interface ArgValueProps {
  value?: PropSummaryValue;
  initialExpandedArgs?: boolean;
}

interface ArgTextProps {
  text: string;
  simple?: boolean;
}

interface ArgSummaryProps {
  value: PropSummaryValue;
  initialExpandedArgs?: boolean;
}

const ITEMS_BEFORE_EXPANSION = 8;

const Summary = styled.div<{ isExpanded?: boolean }>(
  ({ isExpanded }) => ({
    display: 'flex',
    flexDirection: isExpanded ? 'column' : 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginBottom: '-4px',
    minWidth: 100,
  })
);

const Text = styled.span<{ simple?: boolean }>(
  codeCommon,
  ({ simple = false }) => ({
    flex: '0 0 auto',
    fontFamily: theme.typography.fonts.mono,
    fontSize: '12px',
    wordBreak: 'break-word',
    whiteSpace: 'normal',
    maxWidth: '100%',
    margin: 0,
    marginRight: '4px',
    marginBottom: '4px',
    paddingTop: '2px',
    paddingBottom: '2px',
    lineHeight: '13px',
    ...(simple && {
      background: 'transparent',
      border: '0 none',
      paddingLeft: 0,
    }),
  })
);

const ExpandButton = styled.button<{}>(() => ({
  fontFamily: theme.typography?.fonts.mono,
  color: theme.color?.secondary,
  marginBottom: '4px',
  background: 'none',
  border: 'none',
}));

const Expandable = styled.div<{}>(
  codeCommon,
  ({ theme }) => ({
    fontFamily: theme.typography?.fonts.mono,
    color: theme.color?.secondary,
    fontSize: theme.typography?.size.s1, // overrides codeCommon
    margin: 0,
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
  })
);

const EmptyArg = () => {
  return <span>-</span>;
};

const ArgText: FC<ArgTextProps> = ({ text, simple }) => {
  return <Text simple={simple}>{text}</Text>;
};

const getSummaryItems = (summary: string) => {
  if (!summary) return [summary];
  const splittedItems = summary.split('|');
  const summaryItems = splittedItems.map((value) =>
    value.trim()
  );

  return uniq(summaryItems);
};

const renderSummaryItems = (
  summaryItems: string[],
  isExpanded = true
) => {
  let items = summaryItems;
  if (!isExpanded) {
    items = summaryItems.slice(0, ITEMS_BEFORE_EXPANSION);
  }

  return items.map((item) => (
    <ArgText key={item} text={item === '' ? '""' : item} />
  ));
};

const ArgSummary: FC<ArgSummaryProps> = ({
  value,
  initialExpandedArgs,
}) => {
  const { summary, detail } = value;

  const [isExpanded, setIsExpanded] = useState(
    initialExpandedArgs || false
  );

  if (summary === undefined || summary === null)
    return null;
  // summary is used for the default value
  // below check fixes not displaying default values for boolean typescript vars
  const summaryAsString =
    typeof summary.toString === 'function'
      ? summary.toString()
      : summary;

  if (detail == null) {
    const cannotBeSafelySplitted = /[(){}[\]<>]/.test(
      summaryAsString
    );

    if (cannotBeSafelySplitted) {
      return <ArgText text={summaryAsString} />;
    }

    const summaryItems = getSummaryItems(summaryAsString);
    const itemsCount = summaryItems.length;
    const hasManyItems =
      itemsCount > ITEMS_BEFORE_EXPANSION;

    return hasManyItems ? (
      <Summary isExpanded={isExpanded}>
        {renderSummaryItems(summaryItems, isExpanded)}
        <ExpandButton
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded
            ? 'Show less...'
            : `Show ${
                itemsCount - ITEMS_BEFORE_EXPANSION
              } more...`}
        </ExpandButton>
      </Summary>
    ) : (
      <Summary>{renderSummaryItems(summaryItems)}</Summary>
    );
  }

  return (
    <Expandable className="sbdocs-expandable">
      <span>{summaryAsString}</span>
    </Expandable>
  );
};

export const ArgValue: FC<ArgValueProps> = ({
  value,
  initialExpandedArgs,
}) => {
  return value == null ? (
    <EmptyArg />
  ) : (
    <ArgSummary
      value={value}
      initialExpandedArgs={initialExpandedArgs}
    />
  );
};
