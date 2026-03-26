import * as React from 'react';
import { Icon, Text, Tabs, Tab } from '@/index';
import { A11yPropTableConfig, AccessibilityPropDef, getAccessibilityProps } from './accessibilityProps';

interface AccessibilityPropTableProps {
  config: A11yPropTableConfig;
}

const PropTable = ({ props }: { props: AccessibilityPropDef[] }) => {
  if (!props.length) return null;

  return (
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
  );
};

const AccessibilityPropTable = ({ config }: AccessibilityPropTableProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0);

  // Reset active tab when config changes to avoid out-of-bounds index
  React.useEffect(() => {
    setActiveTab(0);
  }, [config]);

  const mainProps = React.useMemo(() => getAccessibilityProps(config), [config]);
  const hasNested = config.nestedComponents && config.nestedComponents.length > 0;
  const hasRootProps = mainProps.length > 0;

  // Pre-compute nested prop counts for tab labels
  const nestedPropCounts = React.useMemo(
    () => config.nestedComponents?.map((nested) => getAccessibilityProps(nested.config).length) || [],
    [config]
  );

  const totalProps = mainProps.length + nestedPropCounts.reduce((a, b) => a + b, 0);

  if (!totalProps) return null;

  const handleTabChange = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  // When there are no root props, offset tabs so index 0 maps to the first nested component
  const tabOffset = hasRootProps ? 1 : 0;
  const totalTabs = tabOffset + (config.nestedComponents?.length || 0);
  const safeActiveTab = activeTab >= totalTabs ? Math.max(0, totalTabs - 1) : activeTab;

  const getActiveNestedIndex = () => safeActiveTab - tabOffset;

  const getActiveNestedConfig = () => {
    if (!config.nestedComponents) return null;
    const nestedIndex = getActiveNestedIndex();
    if (nestedIndex < 0 || nestedIndex >= config.nestedComponents.length) return null;
    return config.nestedComponents[nestedIndex];
  };

  // Count for the currently visible tab
  const getActiveTabCount = () => {
    if (!hasNested) return totalProps;
    if (hasRootProps && safeActiveTab === 0) return mainProps.length;
    const nestedIndex = getActiveNestedIndex();
    return nestedPropCounts[nestedIndex] || 0;
  };

  // Build a flat array of Tab elements — Tabs component uses a custom getChildrenArray
  // that does NOT flatten nested arrays, so {condition && <Tab/>} + {arr.map(<Tab/>)}
  // would produce [<Tab/>, [<Tab/>]] and the nested tabs would be invisible.
  const tabElements = React.useMemo(() => {
    if (!hasNested) return [];
    const elements: React.ReactElement[] = [];
    if (hasRootProps) {
      elements.push(<Tab key="root" label={`Component (${mainProps.length})`} />);
    }
    config.nestedComponents?.forEach((nested, index) => {
      elements.push(<Tab key={nested.name} label={`${nested.name} (${nestedPropCounts[index]})`} />);
    });
    return elements;
  }, [hasNested, hasRootProps, mainProps.length, config.nestedComponents, nestedPropCounts]);

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
          ({hasNested ? `${getActiveTabCount()} props` : `${totalProps} props`})
        </Text>
      </button>

      {isExpanded && (
        <div className="a11y-prop-table-content">
          {!hasNested ? (
            <PropTable props={mainProps} />
          ) : (
            <div className="a11y-prop-table-tabs-wrapper">
              <Tabs activeIndex={safeActiveTab} onTabChange={handleTabChange} className="mb-4">
                {tabElements}
              </Tabs>

              {hasRootProps && safeActiveTab === 0 && <PropTable props={mainProps} />}

              {(() => {
                const nested = getActiveNestedConfig();
                return nested ? <PropTable props={getAccessibilityProps(nested.config)} /> : null;
              })()}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AccessibilityPropTable;
