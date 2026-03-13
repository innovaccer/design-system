import * as React from 'react';
import { Heading } from '@/index';

interface A11yPropDef {
  name: string;
  type: string;
  description: string;
}

const STANDARD_A11Y_PROPS: A11yPropDef[] = [
  {
    name: 'aria-label',
    type: 'string',
    description: 'Defines a string value that labels the current element.',
  },
  {
    name: 'aria-labelledby',
    type: 'string',
    description: 'Identifies the element(s) that labels the current element by their IDs.',
  },
  {
    name: 'aria-describedby',
    type: 'string',
    description: 'Identifies the element(s) that describe the current element by their IDs.',
  },
  {
    name: 'aria-details',
    type: 'string',
    description: 'Identifies the element that provides a detailed, extended description.',
  },
  {
    name: 'aria-roledescription',
    type: 'string',
    description: 'Defines a human-readable, localized description for the role of an element.',
  },
  {
    name: 'aria-checked',
    type: "boolean | 'mixed'",
    description: 'Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.',
  },
  {
    name: 'aria-current',
    type: "boolean | 'page' | 'step' | 'location' | 'date' | 'time'",
    description: 'Indicates the element that represents the current item within a container or set.',
  },
  {
    name: 'aria-disabled',
    type: 'boolean',
    description: 'Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.',
  },
  {
    name: 'aria-expanded',
    type: 'boolean',
    description: 'Indicates whether a grouping element owned or controlled by this element is expanded or collapsed.',
  },
  {
    name: 'aria-hidden',
    type: 'boolean',
    description: 'Indicates whether the element is exposed to an accessibility API.',
  },
  {
    name: 'aria-invalid',
    type: "boolean | 'grammar' | 'spelling'",
    description: 'Indicates the entered value does not conform to the format expected by the application.',
  },
  {
    name: 'aria-pressed',
    type: "boolean | 'mixed'",
    description: 'Indicates the current "pressed" state of toggle buttons.',
  },
  {
    name: 'aria-selected',
    type: 'boolean',
    description: 'Indicates the current "selected" state of various widgets.',
  },
  {
    name: 'aria-atomic',
    type: 'boolean',
    description:
      'Indicates whether assistive technologies will present all, or only parts of, the changed region based on change notifications.',
  },
  {
    name: 'aria-busy',
    type: 'boolean',
    description:
      'Indicates an element is being modified and that assistive technologies may want to wait until the changes are complete.',
  },
  {
    name: 'aria-live',
    type: "'off' | 'assertive' | 'polite'",
    description:
      'Indicates that an element will be updated, and describes the types of updates the user agents and assistive technologies can expect.',
  },
  {
    name: 'aria-relevant',
    type: "'additions' | 'all' | 'removals' | 'text' | 'additions text'",
    description:
      'Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.',
  },
  {
    name: 'aria-autocomplete',
    type: "'none' | 'inline' | 'list' | 'both'",
    description:
      'Indicates whether inputting text could trigger display of one or more predictions of the user\u2019s intended value.',
  },
  {
    name: 'aria-errormessage',
    type: 'string',
    description: 'Identifies the element that provides an error message for the current element.',
  },
  {
    name: 'aria-haspopup',
    type: "boolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'",
    description:
      'Indicates the availability and type of interactive popup element that can be triggered by an element.',
  },
  {
    name: 'aria-keyshortcuts',
    type: 'string',
    description: 'Indicates keyboard shortcuts that have been implemented to activate or give focus to an element.',
  },
  {
    name: 'aria-level',
    type: 'number',
    description: 'Defines the hierarchical level of an element within a structure.',
  },
  {
    name: 'aria-modal',
    type: 'boolean',
    description: 'Indicates whether an element is modal when displayed.',
  },
  {
    name: 'aria-multiline',
    type: 'boolean',
    description: 'Indicates whether a text box accepts multiple lines of input or only a single line.',
  },
  {
    name: 'aria-multiselectable',
    type: 'boolean',
    description: 'Indicates that the user may select more than one item from the current selectable descendants.',
  },
  {
    name: 'aria-orientation',
    type: "'horizontal' | 'vertical'",
    description: "Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.",
  },
  {
    name: 'aria-placeholder',
    type: 'string',
    description: 'Defines a short hint intended to aid the user with data entry when the control has no value.',
  },
  {
    name: 'aria-readonly',
    type: 'boolean',
    description: 'Indicates that the element is not editable, but is otherwise operable.',
  },
  {
    name: 'aria-required',
    type: 'boolean',
    description: 'Indicates that user input is required on the element before a form may be submitted.',
  },
  {
    name: 'aria-sort',
    type: "'none' | 'ascending' | 'descending' | 'other'",
    description: 'Indicates if items in a table or grid are sorted in ascending or descending order.',
  },
  {
    name: 'aria-valuemax',
    type: 'number',
    description: 'Defines the maximum allowed value for a range widget.',
  },
  {
    name: 'aria-valuemin',
    type: 'number',
    description: 'Defines the minimum allowed value for a range widget.',
  },
  {
    name: 'aria-valuenow',
    type: 'number',
    description: 'Defines the current value for a range widget.',
  },
  {
    name: 'aria-valuetext',
    type: 'string',
    description: 'Defines the human-readable text alternative of aria-valuenow for a range widget.',
  },
  {
    name: 'aria-activedescendant',
    type: 'string',
    description:
      'Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.',
  },
  {
    name: 'aria-controls',
    type: 'string',
    description: 'Identifies the element(s) whose contents or presence are controlled by the current element.',
  },
  {
    name: 'aria-flowto',
    type: 'string',
    description: 'Identifies the next element(s) in an alternate reading order of content.',
  },
  {
    name: 'aria-owns',
    type: 'string',
    description: 'Identifies an element(s) to define a visual, functional, or contextual parent/child relationship.',
  },
  {
    name: 'aria-colcount',
    type: 'number',
    description: 'Defines the total number of columns in a table, grid, or treegrid.',
  },
  {
    name: 'aria-colindex',
    type: 'number',
    description: "Defines an element's column index or position with respect to the total number of columns.",
  },
  {
    name: 'aria-colspan',
    type: 'number',
    description: 'Defines the number of columns spanned by a cell or gridcell.',
  },
  {
    name: 'aria-rowcount',
    type: 'number',
    description: 'Defines the total number of rows in a table, grid, or treegrid.',
  },
  {
    name: 'aria-rowindex',
    type: 'number',
    description: "Defines an element's row index or position with respect to the total number of rows.",
  },
  {
    name: 'aria-rowspan',
    type: 'number',
    description: 'Defines the number of rows spanned by a cell or gridcell.',
  },
  {
    name: 'aria-posinset',
    type: 'number',
    description: "Defines an element's number or position in the current set of listitems or treeitems.",
  },
  {
    name: 'aria-setsize',
    type: 'number',
    description: 'Defines the number of items in the current set of listitems or treeitems.',
  },
  {
    name: 'role',
    type: 'string',
    description: 'Defines the WAI-ARIA role for the element, conveying its purpose to assistive technologies.',
  },
  {
    name: 'tabIndex',
    type: 'number',
    description:
      'Indicates whether the element can be focused and its position in sequential keyboard navigation order.',
  },
  {
    name: 'id',
    type: 'string',
    description: 'Unique identifier used as a target for aria-labelledby, aria-describedby, and htmlFor associations.',
  },
  {
    name: 'htmlFor',
    type: 'string',
    description: 'Programmatically associates a label with a form control by referencing its id.',
  },
  {
    name: 'title',
    type: 'string',
    description:
      'Provides advisory text for the element, used by assistive technologies as a fallback accessible name.',
  },
];

type SimpleConfig = 'all' | string[];
type TabbedConfig = Record<string, 'all' | string[] | null>;
export type A11yPropsTableConfig = SimpleConfig | TabbedConfig;

function isTabbedConfig(config: A11yPropsTableConfig): config is TabbedConfig {
  return typeof config === 'object' && !Array.isArray(config);
}

function resolveProps(config: SimpleConfig): A11yPropDef[] {
  if (config === 'all') {
    return STANDARD_A11Y_PROPS;
  }

  return config.reduce<A11yPropDef[]>((acc, propName) => {
    const found = STANDARD_A11Y_PROPS.find((p) => p.name === propName);
    if (found) {
      acc.push(found);
    }
    return acc;
  }, []);
}

const tableStyles = {
  details: {
    border: '1px solid #ECECEC',
    borderRadius: '4px',
    overflow: 'hidden',
  } as React.CSSProperties,

  summary: {
    padding: '12px 16px',
    cursor: 'pointer',
    fontWeight: 600,
    fontSize: '14px',
    color: '#333333',
    backgroundColor: '#F4F4F4',
    userSelect: 'none' as const,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    outline: 'none',
    listStyle: 'none',
  } as React.CSSProperties,

  summaryText: {
    flex: 1,
  } as React.CSSProperties,

  count: {
    fontSize: '12px',
    color: '#888888',
    fontWeight: 400,
  } as React.CSSProperties,

  tableWrap: {
    overflowX: 'auto' as const,
  } as React.CSSProperties,

  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    fontSize: '13px',
    lineHeight: '20px',
  } as React.CSSProperties,

  th: {
    textAlign: 'left' as const,
    padding: '10px 16px',
    fontWeight: 600,
    fontSize: '12px',
    color: '#666666',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.5px',
    borderBottom: '1px solid #ECECEC',
    backgroundColor: '#FAFAFA',
  } as React.CSSProperties,

  td: {
    padding: '8px 16px',
    borderBottom: '1px solid #F2F2F2',
    verticalAlign: 'top' as const,
  } as React.CSSProperties,

  propName: {
    fontFamily: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",
    fontWeight: 600,
    color: '#B93131',
    fontSize: '13px',
    whiteSpace: 'nowrap' as const,
  } as React.CSSProperties,

  propType: {
    fontFamily: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",
    color: '#137333',
    fontSize: '12px',
  } as React.CSSProperties,

  description: {
    color: '#555555',
    fontSize: '13px',
  } as React.CSSProperties,

  chevron: {
    transition: 'transform 200ms ease',
    display: 'inline-block',
    fontSize: '10px',
    color: '#888888',
  } as React.CSSProperties,

  tabBar: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    borderBottom: '2px solid #ECECEC',
    padding: '0 16px',
    backgroundColor: '#FAFAFA',
    gap: '0',
  } as React.CSSProperties,

  tab: {
    padding: '10px 16px',
    fontSize: '13px',
    fontWeight: 500,
    color: '#888888',
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    borderBottom: '2px solid transparent',
    marginBottom: '-2px',
    whiteSpace: 'nowrap' as const,
    transition: 'color 150ms ease, border-color 150ms ease',
  } as React.CSSProperties,

  tabActive: {
    color: '#333333',
    fontWeight: 600,
    borderBottomColor: '#0070F3',
  } as React.CSSProperties,

  tabDisabled: {
    color: '#CCCCCC',
    cursor: 'default',
  } as React.CSSProperties,

  emptyTab: {
    padding: '24px 16px',
    textAlign: 'center' as const,
    color: '#999999',
    fontSize: '13px',
    fontStyle: 'italic' as const,
  } as React.CSSProperties,
};

const chevronCSS = `
  details[open] .a11y-table-chevron {
    transform: rotate(90deg);
  }
  details .a11y-table-summary::-webkit-details-marker {
    display: none;
  }
  details .a11y-table-summary::marker {
    display: none;
    content: '';
  }
  details .a11y-table-row:hover {
    background-color: #F8F8F8;
  }
`;

const PropsTable = ({ props }: { props: A11yPropDef[] }) => (
  <div style={tableStyles.tableWrap}>
    <table style={tableStyles.table}>
      <thead>
        <tr>
          <th style={tableStyles.th}>Name</th>
          <th style={tableStyles.th}>Type</th>
          <th style={tableStyles.th}>Description</th>
        </tr>
      </thead>
      <tbody>
        {props.map((prop) => (
          <tr key={prop.name} className="a11y-table-row">
            <td style={tableStyles.td}>
              <span style={tableStyles.propName}>{prop.name}</span>
            </td>
            <td style={tableStyles.td}>
              <span style={tableStyles.propType}>{prop.type}</span>
            </td>
            <td style={tableStyles.td}>
              <span style={tableStyles.description}>{prop.description}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

interface TabbedEntry {
  name: string;
  props: A11yPropDef[];
}

const TabbedPropsTable = ({ entries }: { entries: TabbedEntry[] }) => {
  const [activeTab, setActiveTab] = React.useState(0);
  const currentEntry = entries[activeTab];

  return (
    <div>
      <div style={tableStyles.tabBar} role="tablist">
        {entries.map((entry, index) => {
          const isActive = index === activeTab;
          const hasProps = entry.props.length > 0;

          return (
            <button
              key={entry.name}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={`a11y-tabpanel-${index}`}
              style={{
                ...tableStyles.tab,
                ...(isActive ? tableStyles.tabActive : {}),
                ...(!hasProps ? tableStyles.tabDisabled : {}),
              }}
              onClick={() => setActiveTab(index)}
            >
              {entry.name}
              {hasProps && <span style={{ ...tableStyles.count, marginLeft: '6px' }}>({entry.props.length})</span>}
            </button>
          );
        })}
      </div>
      <div role="tabpanel" id={`a11y-tabpanel-${activeTab}`}>
        {currentEntry.props.length > 0 ? (
          <PropsTable props={currentEntry.props} />
        ) : (
          <div style={tableStyles.emptyTab}>No accessibility props exposed for {currentEntry.name}</div>
        )}
      </div>
    </div>
  );
};

interface AccessibilityPropsTableProps {
  config: A11yPropsTableConfig;
}

export const AccessibilityPropsTable = ({ config }: AccessibilityPropsTableProps) => {
  if (isTabbedConfig(config)) {
    const entries: TabbedEntry[] = Object.entries(config).map(([name, subConfig]) => ({
      name,
      props: subConfig ? resolveProps(subConfig) : [],
    }));

    const hasAnyProps = entries.some((e) => e.props.length > 0);
    if (!hasAnyProps) return null;

    return (
      <>
        <br />
        <br />
        <Heading appearance="subtle">Accessibility Props</Heading>
        <br />
        <style>{chevronCSS}</style>
        <details style={tableStyles.details}>
          <summary style={tableStyles.summary} className="a11y-table-summary">
            <span className="a11y-table-chevron" style={tableStyles.chevron}>
              &#9654;
            </span>
            <span style={tableStyles.summaryText}>Accessibility attributes available for this component</span>
          </summary>
          <TabbedPropsTable entries={entries} />
        </details>
      </>
    );
  }

  const props = resolveProps(config);
  if (!props.length) return null;

  return (
    <>
      <br />
      <br />
      <Heading appearance="subtle">Accessibility Props</Heading>
      <br />
      <style>{chevronCSS}</style>
      <details style={tableStyles.details}>
        <summary style={tableStyles.summary} className="a11y-table-summary">
          <span className="a11y-table-chevron" style={tableStyles.chevron}>
            &#9654;
          </span>
          <span style={tableStyles.summaryText}>Accessibility attributes available for this component</span>
          <span style={tableStyles.count}>{props.length} props</span>
        </summary>
        <PropsTable props={props} />
      </details>
    </>
  );
};

export default AccessibilityPropsTable;
