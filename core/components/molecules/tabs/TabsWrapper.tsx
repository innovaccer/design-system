import * as React from 'react';
import classNames from 'classnames';
import { ITabProps } from './Tab';

export interface ITabsWrapperProps {
  /**
   * Index of desired selected `tab`
   */
  activeTab?: number;
  /**
   * `Tab` Component will be wrapped in `TabsWrapper` container
   */
  children: React.FunctionComponentElement<ITabProps>[];
  /**
   * Called with a new index when a new tab is selected by user
   */
  onTabChange?: (tabIndex: number) => void;
}

export const TabsWrapper: React.FunctionComponent<ITabsWrapperProps> = props => {
  const {
    children = [],
    onTabChange
  } = props;

  const [activeTab, setActiveTab] = React.useState(props.activeTab && props.activeTab < children.length
    ? props.activeTab
    : 0);

  React.useEffect(() => {
    setActiveTab(
      props.activeTab && props.activeTab < children.length
      ? props.activeTab
      : 0
    );
  }, [props.activeTab]);

  const wrapperClass = classNames({
    ['TabsWrapper']: true,
  });

  const tabClickHandler = (tabIndex: number) => {
    setActiveTab(tabIndex);
    if (onTabChange) onTabChange(tabIndex);
  };

  const TabsHeader = (
    children.map((child, index) => {
      const tabHeaderClass = classNames({
        ['Tab']: true,
        ['Tab--active']: activeTab === index
      });

      const { label } = child.props;
      return (
        <div key={index} className={tabHeaderClass} onClick={() => tabClickHandler(index)}>
          {label}
        </div>
      );
    })
  );

  return (
    <div className={wrapperClass}>
      <div className="TabsWrapper-header">
        {TabsHeader}
      </div>
      <div className="TabsWrapper-content">
        {children[activeTab]}
      </div>
    </div>
  );
};

export default TabsWrapper;
