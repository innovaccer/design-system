import * as React from 'react';
import classNames from 'classnames';
import { BaseProps, extractBaseProps, SingleOrArray } from '@/utils/types';

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
}

export const TabsWrapper = (props: TabsWrapperProps) => {
  const {
    children,
    onTabChange,
    className,
  } = props;

  const baseProps = extractBaseProps(props);
  const tabs = Array.isArray(children) ? children : [children];
  const totalTabs = tabs.length;

  const [active, setActiveTab] = React.useState(props.active && props.active < totalTabs
    ? props.active
    : 0);

  React.useEffect(() => {
    setActiveTab(
      props.active && props.active < totalTabs
        ? props.active
        : 0
    );
  }, [props.active]);

  const wrapperClass = classNames({
    ['TabsWrapper']: true,
  }, className);

  const tabClickHandler = (tabIndex: number) => {
    setActiveTab(tabIndex);
    if (onTabChange) onTabChange(tabIndex);
  };

  const TabsHeader = (
    tabs.map((child, index) => {
      const { label, disabled } = child.props;

      const tabHeaderClass = classNames({
        ['Tab']: true,
        ['Tab--disabled']: disabled,
        ['Tab--active']: !disabled && active === index,
      });

      return (
        <div
          data-test="DesignSystem-Tabs--Header"
          key={index}
          className={tabHeaderClass}
          onClick={() => !disabled && tabClickHandler(index)}
        >
          {label}
        </div>
      );
    })
  );

  return (
    <div data-test="DesignSystem-TabsWrapper" {...baseProps} className={wrapperClass}>
      <div className="TabsWrapper-header">
        {TabsHeader}
      </div>
      <div className="TabsWrapper-content" data-test="DesignSystem-Tabs--Content">
        {tabs[active]}
      </div>
    </div>
  );
};

TabsWrapper.displayName = 'TabsWrapper';

export default TabsWrapper;
