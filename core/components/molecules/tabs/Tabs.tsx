import * as React from 'react';
import classNames from 'classnames';
import { Pills, Icon, Text } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';

interface Tab {
  label: string;
  count?: number;
  icon?: string;
  disabled?: boolean;
}

export interface TabsProps extends BaseProps {
  /**
   * Index of desired selected `Tab`
   */
  activeIndex?: number;
  /**
   * Shows border at bottom of  `Tabs`
   */
  withSeperator?: boolean;
  /**
   * List of tabs
   * <pre className="DocPage-codeBlock">
   *  Tab {
   *    label: React.ReactText;
   *    count?: number;
   *    icon?: string;
   *    disabled?: boolean;
   *  }
   *
   * | Name | Description | Default |
   * | --- | --- | --- |
   * | label | Label of Tab |  |
   * | count | Count of Tab | |
   * | icon | Icon to be rendered inside Tab | |
   * | disabled | Determines if tab is disabled | |
   * </pre>
   */
  tabs: Tab[];
  /**
   * Called with a new index when a new tab is selected by user
   */
  onTabChange?: (tabIndex: number) => void;
}

export const Tabs = (props: TabsProps) => {
  const {
    tabs,
    withSeperator,
    onTabChange,
    className,
  } = props;

  const baseProps = extractBaseProps(props);
  const totalTabs = tabs.length;

  const [activeIndex, setActiveTab] = React.useState(props.activeIndex && props.activeIndex < totalTabs
    ? props.activeIndex
    : 0);

  React.useEffect(() => {
    if (props.activeIndex !== undefined && props.activeIndex < totalTabs) {
      setActiveTab(props.activeIndex);
    }
  }, [props.activeIndex]);

  const tabsClass = classNames({
    ['Tabs']: true,
    ['Tabs--withSeperator']: withSeperator,
  }, className);

  const getPillsClass = (disabled?: boolean) => (
    classNames({
      ['Tabs-pills']: true,
      ['Tabs-pills--disabled']: disabled,
    })
  );

  const tabClickHandler = (tabIndex: number) => {
    if (props.activeIndex === undefined) setActiveTab(tabIndex);
    if (onTabChange) onTabChange(tabIndex);
  };

  const renderInfo = (tab: Tab, index: number) => {
    const { count, icon, disabled } = tab;

    if (count !== undefined) {
      return (
        <Pills
          data-test="DesignSystem-Tabs--Pills"
          className={getPillsClass(disabled)}
          appearance={activeIndex === index ? 'primary' : 'secondary'}
        >
          {count}
        </Pills>
      );
    }

    if (icon) {
      const iconAppearance = activeIndex === index ? 'info' : disabled ? 'disabled' : 'subtle';
      return (
        <Icon
          data-test="DesignSystem-Tabs--Icon"
          className="mr-4"
          name={icon}
          appearance={iconAppearance}
        />
      );
    }

    return null;
  };

  const renderTabs = () => (
    tabs.map((tab, index) => {
      const { label, disabled } = tab;
      const textAppearance = activeIndex === index ? 'link' : disabled ? 'disabled' : 'subtle';

      const tabHeaderClass = classNames({
        ['Tab']: true,
        ['Tab--disabled']: disabled,
        ['Tab--active']: !disabled && activeIndex === index,
      });

      return (
        <div
          data-test="DesignSystem-Tabs--Tab"
          key={index}
          className={tabHeaderClass}
          onClick={() => !disabled && tabClickHandler(index)}
        >
          {renderInfo(tab, index)}
          <Text data-test="DesignSystem-Tabs--Text" appearance={textAppearance}>{label}</Text>
        </div>
      );
    })
  );

  return (
    <div data-test="DesignSystem-Tabs" {...baseProps} className={tabsClass}>
      {renderTabs()}
    </div>
  );
};

Tabs.displayName = 'Tabs';

export default Tabs;
