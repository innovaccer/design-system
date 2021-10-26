import * as React from 'react';
import classNames from 'classnames';
import { Pills, Icon, Text, Tab } from '@/index';
import { BaseProps, extractBaseProps, SingleOrArray } from '@/utils/types';

type Tab = React.ReactElement | TabConfig;
export interface TabConfig {
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
  withSeparator?: boolean;
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
  tabs: TabConfig[];
  /**
   * `Tab` Component will be wrapped in `Tabs` container
   */
  children?: SingleOrArray<React.ReactElement>;
  /**
   * Called with a new index when a new tab is selected by user
   */
  onTabChange?: (tabIndex: number) => void;
}

const getChildrenArray = (children: SingleOrArray<React.ReactElement>) => {
  return Array.isArray(children) ? children : [children];
};

const filterTabs = (children: SingleOrArray<React.ReactElement>) => {
  const childrenArray = getChildrenArray(children);

  const tabs = childrenArray.filter(
    (element: React.ReactElement) => typeof element.type === 'function' && element.type.name === Tab.name
  );

  return tabs;
};

const filterInlineComponent = (children: SingleOrArray<React.ReactElement>) => {
  const childrenArray = getChildrenArray(children);

  const inlineComponent = childrenArray.filter(
    (element: React.ReactElement) => !(typeof element.type === 'function' && element.type.name === Tab.name)
  );

  return inlineComponent;
};

export const Tabs = (props: TabsProps) => {
  const { children, withSeparator, onTabChange, className } = props;

  const baseProps = extractBaseProps(props);
  const tabRefs: HTMLDivElement[] = [];

  const tabs: Tab[] = children ? filterTabs(children) : props.tabs;
  const inlineComponent = children ? filterInlineComponent(children) : <></>;
  const totalTabs = tabs.length;

  const [activeIndex, setActiveTab] = React.useState(
    props.activeIndex && props.activeIndex < totalTabs ? props.activeIndex : 0
  );

  React.useEffect(() => {
    if (props.activeIndex !== undefined && props.activeIndex < totalTabs) {
      setActiveTab(props.activeIndex);
    }
  }, [props.activeIndex]);

  const wrapperClass = classNames(
    {
      ['TabsWrapper']: true,
    },
    className
  );

  const headerClass = classNames(
    {
      ['TabsWrapper-header']: true,
      ['TabsWrapper-header--withSeparator']: withSeparator,
    },
    className
  );

  const getPillsClass = (disabled?: boolean) =>
    classNames({
      ['Tab-pills']: true,
      ['Tab-pills--disabled']: disabled,
    });

  const tabClickHandler = (tabIndex: number, isKeyboard?: boolean) => {
    if (props.activeIndex === undefined) {
      setActiveTab(tabIndex);
      if (!isKeyboard) tabRefs[tabIndex]?.blur();
    }
    if (onTabChange) onTabChange(tabIndex);
  };

  const tabKeyDownHandler = (event: React.KeyboardEvent, tabIndex: number) => {
    if (event.key === 'Enter') {
      tabClickHandler(tabIndex, true);
    }
    if (event.key === 'ArrowLeft' && tabIndex > 0) {
      const prevElement = tabRefs[tabIndex - 1];
      prevElement?.focus();
    }
    if (event.key === 'ArrowRight' && tabIndex < tabs.length) {
      const nextElement = tabRefs[tabIndex + 1];
      nextElement?.focus();
    }
  };

  const renderInfo = (tab: Tab, index: number) => {
    const { count, icon, disabled } = tab as TabConfig;

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
      return <Icon data-test="DesignSystem-Tabs--Icon" className="mr-4" name={icon} appearance={iconAppearance} />;
    }

    return null;
  };

  const renderTab = (tab: Tab, index: number) => {
    const { label = '', disabled } = tab as TabConfig;

    if (typeof label !== 'string') {
      return label;
    }

    const textAppearance = activeIndex === index ? 'link' : disabled ? 'disabled' : 'subtle';

    return (
      <>
        {renderInfo(tab, index)}
        <Text data-test="DesignSystem-Tabs--Text" appearance={textAppearance}>
          {label}
        </Text>
      </>
    );
  };

  const renderTabs = tabs.map((tab: Tab, index) => {
    const currentTabProp = children && 'props' in tab ? tab.props : tab;
    const { disabled } = currentTabProp;

    const tabHeaderClass = classNames({
      ['Tab']: true,
      ['Tab--disabled']: disabled,
      ['Tab--active']: !disabled && activeIndex === index,
    });

    return (
      // TODO(a11y)
      //  eslint-disable-next-line
      <div
        ref={(element) => element && !disabled && tabRefs.push(element)}
        data-test="DesignSystem-Tabs--Tab"
        key={index}
        className={tabHeaderClass}
        onClick={() => !disabled && tabClickHandler(index)}
        onKeyDown={(event: React.KeyboardEvent) => tabKeyDownHandler(event, index)}
        tabIndex={activeIndex === index ? 0 : -1}
      >
        {renderTab(currentTabProp, index)}
      </div>
    );
  });

  return (
    <div data-test="DesignSystem-Tabs" {...baseProps} className={wrapperClass}>
      <div className={headerClass}>
        {renderTabs}
        {inlineComponent}
      </div>
      {children && (
        <div className="TabsWrapper-content" data-test="DesignSystem-Tabs--Content">
          {tabs[activeIndex]}
        </div>
      )}
    </div>
  );
};

Tabs.displayName = 'Tabs';
Tabs.defaultProps = {
  withSeparator: true,
  tabs: [],
};

export default Tabs;
