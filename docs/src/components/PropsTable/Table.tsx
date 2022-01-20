import React, { FC } from 'react';
import { pickBy } from 'lodash';
import { styled } from '@storybook/theming';
import { opacify, transparentize, darken } from 'polished';
import { ArgRow } from './ArgRow';
import { SectionRow } from './SectionRow';
import { ArgType, ArgTypes, Args } from './types';
import { EmptyBlock } from './EmptyBlock';
import { theme } from './theme';

export const TableWrapper = styled.table<{
  compact?: boolean;
  inAddonPanel?: boolean;
}>(({ compact, inAddonPanel }) => ({
  '&&': {
    // Resets for cascading/system styles
    borderSpacing: 0,
    color: theme.color.defaultText,
    border: '1px solid #E5E5E5',
    backgroundColor: '#FFFFFF',
    borderRadius: '4px',
    'td, th': {
      padding: 0,
      verticalAlign: 'top',
      textOverflow: 'ellipsis',
    },
    // End Resets

    // fontSize: theme.typography.size.s2 - 1,
    lineHeight: '20px',
    textAlign: 'left',

    // Margin collapse
    marginTop: inAddonPanel ? 0 : 25,
    marginBottom: inAddonPanel ? 0 : 40,
    // boxShadow: `rgba(0, 0, 0, 0.10) 0 2px 5px 1px`,

    'thead th:first-of-type, td:first-of-type': {
      // intentionally specify thead here
      width: '25%',
    },

    'th:first-of-type, td:first-of-type': {
      paddingLeft: 20,
    },

    'th:nth-of-type(2), td:nth-of-type(2)': {
      ...(compact
        ? null
        : {
            // Description column
            width: '35%',
          }),
    },

    'td:nth-of-type(3)': {
      ...(compact
        ? null
        : {
            // Defaults column
            width: '15%',
          }),
    },

    'th:last-of-type, td:last-of-type': {
      paddingRight: 20,
      ...(compact
        ? null
        : {
            // Controls column
            width: '25%',
          }),
    },

    th: {
      color: theme.color.defaultText,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 15,
      paddingRight: 15,
      fontWeight: 'bold',
    },

    td: {
      paddingTop: '10px',
      paddingBottom: '10px',
      '&:not(:first-of-type)': {
        paddingLeft: 15,
        paddingRight: 15,
      },

      '&:last-of-type': {
        paddingRight: 20,
      },
    },
    marginLeft: inAddonPanel ? 0 : 1,
    marginRight: inAddonPanel ? 0 : 1,

    tbody: {
      borderRadius: theme.appBorderRadius,

      // for safari only
      // CSS hack courtesy of https://stackoverflow.com/questions/16348489/is-there-a-css-hack-for-safari-only-not-chrome
      '@media not all and (min-resolution:.001dpcm)': {
        '@supports (-webkit-appearance:none)': {
          borderWidth: 1,
          borderStyle: 'solid',
          ...(inAddonPanel && {
            borderColor: 'transparent',
          }),

          ...(!inAddonPanel && {
            borderColor:
              theme.base === 'light'
                ? transparentize(
                    0.035,
                    theme.appBorderColor
                  )
                : opacify(0.05, theme.appBorderColor),
          }),
        },
      },

      tr: {
        background: 'transparent',
        overflow: 'hidden',
      },

      td: {
        background: theme.background.content,
        borderTop: '1px solid #E5E5E5',
      },
    },
  },
}));

const ResetButton = styled.button(({ theme }) => ({
  border: 0,
  borderRadius: '3em',
  cursor: 'pointer',
  display: 'inline-block',
  overflow: 'hidden',
  padding: '3px 8px',
  transition: 'all 150ms ease-out',
  verticalAlign: 'top',
  userSelect: 'none',
  margin: 0,

  backgroundColor:
    theme.base === 'light' ? '#EAF3FC' : theme.color.border,
  boxShadow:
    theme.base === 'light'
      ? `${theme.color.border} 0 0 0 1px inset`
      : `${theme.color.darker}  0 0 0 1px inset`,
  color: theme.color.secondary,

  '&:hover': {
    background:
      theme.base === 'light'
        ? darken(0.03, '#EAF3FC')
        : opacify(0.1, theme.color.border),
  },

  '&:focus': {
    boxShadow: `${theme.color.secondary} 0 0 0 1px inset`,
    outline: 'none',
  },

  svg: {
    display: 'block',
    height: 14,
    width: 14,
  },
}));

const ControlHeadingWrapper = styled.span({
  display: 'flex',
  justifyContent: 'space-between',
});

export enum ArgsTableError {
  NO_COMPONENT = 'No component found.',
  ARGS_UNSUPPORTED = 'Args unsupported. See Args documentation for your framework.',
}

export type SortType = 'alpha' | 'requiredFirst' | 'none';
type SortFn = (a: ArgType, b: ArgType) => number;

const sortFns: Record<SortType, SortFn | null> = {
  alpha: (a: ArgType, b: ArgType) =>
    a.name.localeCompare(b.name),
  requiredFirst: (a: ArgType, b: ArgType) =>
    Number(!!b.type?.required) -
      Number(!!a.type?.required) ||
    a.name.localeCompare(b.name),
  none: undefined,
};
export interface ArgsTableRowProps {
  rows: ArgTypes;
  args?: Args;
  updateArgs?: (args: Args) => void;
  resetArgs?: (argNames?: string[]) => void;
  compact?: boolean;
  inAddonPanel?: boolean;
  initialExpandedArgs?: boolean;
  sort?: SortType;
}

export interface ArgsTableErrorProps {
  error: ArgsTableError;
}

export type ArgsTableProps =
  | ArgsTableRowProps
  | ArgsTableErrorProps;

type Rows = ArgType[];
type Subsection = Rows;
type Section = {
  ungrouped: Rows;
  subsections: Record<string, Subsection>;
};
type Sections = {
  ungrouped: Rows;
  ungroupedSubsections: Record<string, Subsection>;
  sections: Record<string, Section>;
};

const groupRows = (rows: ArgType, sort: SortType) => {
  const sections: Sections = {
    ungrouped: [],
    ungroupedSubsections: {},
    sections: {},
  };
  if (!rows) return sections;

  Object.entries(rows).forEach(([key, row]) => {
    const { category, subcategory } = row?.table || {};
    if (category) {
      const section = sections.sections[category] || {
        ungrouped: [],
        subsections: {},
      };
      if (!subcategory) {
        section.ungrouped.push({ key, ...row });
      } else {
        const subsection =
          section.subsections[subcategory] || [];
        subsection.push({ key, ...row });
        section.subsections[subcategory] = subsection;
      }
      sections.sections[category] = section;
    } else if (subcategory) {
      const subsection =
        sections.ungroupedSubsections[subcategory] || [];
      subsection.push({ key, ...row });
      sections.ungroupedSubsections[
        subcategory
      ] = subsection;
    } else {
      sections.ungrouped.push({ key, ...row });
    }
  });

  // apply sort
  const sortFn = sortFns[sort];

  const sortSubsection = (
    record: Record<string, Subsection>
  ) => {
    if (!sortFn) return record;
    return Object.keys(record).reduce<
      Record<string, Subsection>
    >(
      (acc, cur) => ({
        ...acc,
        [cur]: record[cur].sort(sortFn),
      }),
      {}
    );
  };

  const sorted = {
    ungrouped: sections.ungrouped.sort(sortFn),
    ungroupedSubsections: sortSubsection(
      sections.ungroupedSubsections
    ),
    sections: Object.keys(sections.sections).reduce<
      Record<string, Section>
    >(
      (acc, cur) => ({
        ...acc,
        [cur]: {
          ungrouped: sections.sections[cur].ungrouped.sort(
            sortFn
          ),
          subsections: sortSubsection(
            sections.sections[cur].subsections
          ),
        },
      }),
      {}
    ),
  };

  return sorted;
};

export interface Test {
  base: string;
  colorPrimary: string;
  colorSecondary: string;
}

/**
 * Display the props for a component as a props table. Each row is a collection of
 * ArgDefs, usually derived from docgen info for the component.
 */
export const ArgsTable: FC<ArgsTableProps> = (props) => {
  const { error } = props as ArgsTableErrorProps;
  if (error) {
    return <EmptyBlock>{error}&nbsp;</EmptyBlock>;
  }

  const {
    rows,
    args,
    updateArgs,
    resetArgs,
    compact,
    inAddonPanel,
    initialExpandedArgs,
    sort = 'none',
  } = props as ArgsTableRowProps;

  const groups = groupRows(
    pickBy(rows, (row) => !row?.table?.disable),
    sort
  );

  if (
    groups.ungrouped.length === 0 &&
    Object.entries(groups.sections).length === 0 &&
    Object.entries(groups.ungroupedSubsections).length === 0
  ) {
    return (
      <EmptyBlock>
        No inputs found for this component.&nbsp;
      </EmptyBlock>
    );
  }

  let colSpan = 1;
  if (updateArgs) colSpan += 1;
  if (!compact) colSpan += 2;
  const expandable =
    Object.keys(groups.sections).length > 0;

  const common = {
    updateArgs,
    compact,
    inAddonPanel,
    initialExpandedArgs,
  };
  return (
    <TableWrapper
      {...{ compact, inAddonPanel }}
      className="docblock-argstable"
    >
      <thead className="docblock-argstable-head">
        <tr>
          <th>Name</th>
          {compact ? null : <th>Description</th>}
          {compact ? null : <th>Default</th>}
          {updateArgs ? (
            <th>
              <ControlHeadingWrapper>
                Control{' '}
                {resetArgs && (
                  <ResetButton
                    onClick={() => resetArgs()}
                    title="Reset controls"
                  ></ResetButton>
                )}
              </ControlHeadingWrapper>
            </th>
          ) : null}
        </tr>
      </thead>
      <tbody className="docblock-argstable-body">
        {groups.ungrouped.map((row) => (
          <ArgRow
            key={row.key}
            row={row}
            arg={args && args[row.key]}
            {...common}
          />
        ))}

        {Object.entries(groups.ungroupedSubsections).map(
          ([subcategory, subsection]) => (
            <SectionRow
              key={subcategory}
              label={subcategory}
              level="subsection"
              colSpan={colSpan}
            >
              {subsection.map((row) => (
                <ArgRow
                  key={row.key}
                  row={row}
                  arg={args && args[row.key]}
                  expandable={expandable}
                  {...common}
                />
              ))}
            </SectionRow>
          )
        )}

        {Object.entries(groups.sections).map(
          ([category, section]) => (
            <SectionRow
              key={category}
              label={category}
              level="section"
              colSpan={colSpan}
            >
              {section.ungrouped.map((row) => (
                <ArgRow
                  key={row.key}
                  row={row}
                  arg={args && args[row.key]}
                  {...common}
                />
              ))}
              {Object.entries(section.subsections).map(
                ([subcategory, subsection]) => (
                  <SectionRow
                    key={subcategory}
                    label={subcategory}
                    level="subsection"
                    colSpan={colSpan}
                  >
                    {subsection.map((row) => (
                      <ArgRow
                        key={row.key}
                        row={row}
                        arg={args && args[row.key]}
                        expandable={expandable}
                        {...common}
                      />
                    ))}
                  </SectionRow>
                )
              )}
            </SectionRow>
          )
        )}
      </tbody>
    </TableWrapper>
  );
};
