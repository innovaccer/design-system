import * as React from 'react';
import classNames from 'classnames';
import { TabProps } from './Tab';
import { BaseProps, extractBaseProps } from '@/utils/types';

export interface TabsWrapperProps extends BaseProps {
  /**
   * Index of desired selected `Tab`
   */
  active?: number;
  /**
   * `Tab` Component will be wrapped in `TabsWrapper` container
   */
  children: React.FunctionComponentElement<TabProps>[];
  /**
   * Called with a new index when a new tab is selected by user
   */
  onTabChange?: (tabIndex: number) => void;
}

export const TabsWrapper = (props: TabsWrapperProps) => {
  const {
    children = [],
    onTabChange,
    className,
  } = props;

  const baseProps = extractBaseProps(props);

  const [active, setActiveTab] = React.useState(props.active && props.active < children.length
    ? props.active
    : 0);

  React.useEffect(() => {
    setActiveTab(
      props.active && props.active < children.length
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
    children.map((child, index) => {
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
        {children[active]}
      </div>
    </div>
  );
};

TabsWrapper.displayName = 'TabsWrapper';

export default TabsWrapper;
