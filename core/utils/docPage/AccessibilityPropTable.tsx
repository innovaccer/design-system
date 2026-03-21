import * as React from 'react';
import { Icon, Text } from '@/index';
import { A11yPropTableConfig, AccessibilityPropDef, getAccessibilityProps } from './accessibilityProps';

interface AccessibilityPropTableProps {
  config: A11yPropTableConfig;
}

const AccessibilityPropTable = ({ config }: AccessibilityPropTableProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const props = React.useMemo(() => getAccessibilityProps(config), [config]);

  if (!props.length) return null;

  return (
    <div className="a11y-prop-table-wrapper">
      <button
        className="a11y-prop-table-trigger"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        type="button"
      >
        <Icon name={isExpanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'} size={20} />
        <Text weight="strong" className="ml-4">
          Accessibility props
        </Text>
        <Text appearance="subtle" className="ml-4">
          ({props.length} props)
        </Text>
      </button>

      {isExpanded && (
        <table className="docblock-argstable a11y-prop-table">
          <thead className="a11y-prop-table-head">
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody className="a11y-prop-table-body">
            {props.map((prop: AccessibilityPropDef) => (
              <tr key={prop.name}>
                <td className="a11y-prop-name">
                  <code>{prop.name}</code>
                </td>
                <td className="a11y-prop-type">
                  <code>{prop.type}</code>
                </td>
                <td className="a11y-prop-description">{prop.description}</td>
                <td className="a11y-prop-default">
                  <code>{prop.defaultValue || '-'}</code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AccessibilityPropTable;
