import * as React from 'react';
import classNames from 'classnames';
import { Pills, Icon, Text, Tab, EmptyState } from '@/index';
import { BaseProps, extractBaseProps, SingleOrArray } from '@/utils/types';

type Tab = React.ReactElement | TabConfig;
type noop = (tabInfo: TabInfo) => void;

interface TabInfo {
  label: string;
  activeIndex: number;
  currentTabIndex: number;
}
export interface TabConfig {
  label: string;
  count?: number;
  icon?: string;
  disabled?: boolean;
  className?: string;
  isDismissible?: boolean;
  onDismiss?: (tabInfo: TabInfo) => void;
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
   *    className?: string;
   *    isDismissible?: boolean;
   *    onDismiss?: (tabInfo: object) => void;
   *  }
   * </pre>
   *
   * | Name | Description | Default |
   * | --- | --- | --- |
   * | label | Label of Tab |  |
   * | count | Count of Tab | |
   * | icon | Icon to be rendered inside Tab | |
   * | disabled | Determines if tab is disabled | |
   * | className | Class on tab content | |
   * | isDismissible | Determines if tab is dismissible | |
   * | onDismiss | Called with tab info when a tab is being removed | |
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

  let activeTab;
  let activeTabClass;
  if ('props' in tabs[activeIndex]) {
    activeTab = tabs[activeIndex] as React.ReactElement;
    activeTabClass = activeTab.props?.className;
  } else {
    activeTab = tabs[activeIndex] as TabConfig;
    activeTabClass = activeTab.className;
  }
  const tabContentClass = classNames({
    ['TabsWrapper-content']: true,
    [`${activeTabClass}`]: activeTabClass,
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
          className={`${getPillsClass(disabled)} ${showTab === index ? 'TabsAnimate--active' : 'TabsAnimate'}`}
          appearance={activeIndex === index ? 'primary' : 'secondary'}
        >
          {count}
        </Pills>
      );
    }

    const iconClass = classNames({
      ['Tab-selected']: !disabled && activeIndex === index,
    });

    if (icon) {
      const iconAppearance = activeIndex === index ? 'info' : disabled ? 'disabled' : 'subtle';
      return (
        <Icon
          data-test="DesignSystem-Tabs--Icon"
          className={`mr-4 ${iconClass}`}
          name={icon}
          appearance={iconAppearance}
        />
      );
    }
    return null;
  };

  const renderDismissIcon = (tab: Tab, index: number, onDismiss: noop) => {
    const { disabled, label } = tab as TabConfig;
    const iconAppearance = activeIndex === index ? 'info' : disabled ? 'disabled' : 'subtle';

    const dismissIconClass = (disabled?: boolean) =>
      classNames({
        [`DismissibleTab-icon--right`]: true,
        ['cursor-pointer']: !disabled,
        ['Tab-selected']: !disabled && activeIndex === index,
      });

    const tabInfo = { label: label, activeIndex: activeIndex, currentTabIndex: index };
    const onCloseHandler = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (onDismiss) onDismiss(tabInfo);
    };
    return (
      <Icon
        data-test="DesignSystem-DismissibleTabs--Icon"
        name="clear"
        appearance={iconAppearance}
        className={dismissIconClass(disabled)}
        onClick={!disabled ? onCloseHandler : () => {}}
      />
    );
  };

  const renderTab = (tab: Tab, index: number) => {
    const { label = '', disabled, isDismissible, onDismiss = () => {} } = tab as TabConfig;
    if (typeof label !== 'string') {
      return label;
    }
    const textAppearance = activeIndex === index ? 'link' : disabled ? 'disabled' : 'subtle';
    const tabTextClass = classNames({
      ['Tab-selected']: !disabled && activeIndex === index,
    });
    return (
      <>
        {renderInfo(tab, index)}
        <Text data-test="DesignSystem-Tabs--Text" appearance={textAppearance} className={tabTextClass}>
          {label}
        </Text>
        {isDismissible && renderDismissIcon(tab, index, onDismiss)}
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
      ['Tab-selected']: !disabled && activeIndex === index,
      ['TabAnimate']: true,
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

  const [showTab, setShowTab] = React.useState(activeIndex);
  const [contentAnimation, setContentAnimation] = React.useState('slideIn-left');
  // const [tabAnimation, setTabAnimation] = React.useState('TabsAnimate--active');

  const handleAnimationEnd = () => {
    if (activeIndex !== showTab) {
      setContentAnimation('slideIn-left');
      setShowTab(activeIndex);
    }
  };

  React.useEffect(() => {
    if (activeIndex !== showTab) {
      setContentAnimation('slideOut-left');
    }
  }, [activeIndex]);

  return (
    <div data-test="DesignSystem-Tabs" {...baseProps} className={wrapperClass}>
      <div className={headerClass}>
        {renderTabs}
        {inlineComponent}
      </div>
      {children && (tabs[activeIndex] as any).props?.disabled ? (
        <div className="h-100 pb-5" style={{ backgroundColor: 'var(--secondary-lightest)' }}>
          <EmptyState
            title="There's a problem loading this page."
            description="Tab is disabled and you are not authorized to see the content of this tab"
            size="large"
          ></EmptyState>
        </div>
      ) : children && !(tabs[activeIndex] as any).props?.disabled ? (
        <div className={tabContentClass} data-test="DesignSystem-Tabs--Content">
          <div onAnimationEnd={handleAnimationEnd} className={`w-100 position-relative ${contentAnimation}`}>
            {tabs[showTab]}
          </div>
        </div>
      ) : null}
    </div>
  );
};

Tabs.displayName = 'Tabs';
Tabs.defaultProps = {
  withSeparator: true,
  tabs: [],
};

export default Tabs;
