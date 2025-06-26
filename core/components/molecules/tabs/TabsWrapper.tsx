import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps, SingleOrArray } from '@/utils/types';
import { TTabSize } from '@/common.type';
import styles from '@css/components/tabs.module.css';
import pageHeaderStyles from '@css/components/pageHeader.module.css';

export interface TabsWrapperProps extends BaseProps {
  /**
   * Index of desired selected `Tab`
   */
  active?: number;
  /**
   * `Tab` Component will be wrapped in `TabsWrapper` container
   */
  children: SingleOrArray<React.ReactElement>;
  /**
   * Called with a new index when a new tab is selected by user
   */
  onTabChange?: (tabIndex: number) => void;
  /**
   * Defines size of `Tab` component
   */
  size?: TTabSize;
}

export const TabsWrapper = (props: TabsWrapperProps) => {
  const { children, onTabChange, className, size } = props;

  const baseProps = extractBaseProps(props);
  const tabs = Array.isArray(children) ? children : [children];
  const totalTabs = tabs.length;

  const [active, setActiveTab] = React.useState(props.active && props.active < totalTabs ? props.active : 0);

  React.useEffect(() => {
    setActiveTab(props.active && props.active < totalTabs ? props.active : 0);
  }, [props.active]);

  const wrapperClass = classNames(
    {
      [styles['TabsWrapper']]: true,
    },
    className
  );

  const headerClass = classNames({
    [styles['TabsWrapper-header']]: true,
    [pageHeaderStyles['TabsWrapper-header']]: true,
  });

  const tabClickHandler = (tabIndex: number) => {
    setActiveTab(tabIndex);
    if (onTabChange) onTabChange(tabIndex);
  };

  const TabsHeader = tabs.map((child, index) => {
    const { label, disabled } = child.props as { label: string; disabled?: boolean };

    const tabHeaderClass = classNames({
      [styles['Tab']]: true,
      [styles['Tab--disabled']]: disabled,
      [styles['Tab--active']]: !disabled && active === index,
      [styles['Tab--regular']]: size === 'regular',
      [styles['Tab--small']]: size === 'small',
    });

    return (
      // TODO(a11y)
      //  eslint-disable-next-line
      <div
        data-test="DesignSystem-Tabs--Header"
        key={index}
        className={tabHeaderClass}
        onClick={() => !disabled && tabClickHandler(index)}
      >
        {label}
      </div>
    );
  });

  return (
    <div data-test="DesignSystem-TabsWrapper" {...baseProps} className={wrapperClass}>
      <div className={headerClass}>{TabsHeader}</div>
      <div className={styles['TabsWrapper-content']} data-test="DesignSystem-Tabs--Content">
        {tabs[active]}
      </div>
    </div>
  );
};

TabsWrapper.displayName = 'TabsWrapper';
TabsWrapper.defaultProps = {
  size: 'regular',
};

export default TabsWrapper;
