import * as React from 'react';
import classNames from 'classnames';
import { Heading } from '@/index';

export type HeaderType = 'small' | 'large';

export interface PageHeaderProps {
  /**
   * Page title
   */
  title: string;
  /**
   * Navigation component
   */
  navigation?: React.ReactNode;
  /**
   * Actions composed of buttons and meta data
   */
  actions?: React.ReactNode;
  /**
   * Tab component
   */
  tabs?: React.ReactNode;
  /**
   * Breadcrumb component
   */
  breadcrumb?: React.ReactNode;
  /**
   * Badge component
   */
  badge?: React.ReactNode;
  /**
   * Status component
   */
  status?: React.ReactNode;
  /**
   * Meta data composed of Text
   */
  meta?: React.ReactNode;
  /**
   * Page header layout type
   */
  type?: HeaderType;
}

export const PageHeader = (props: PageHeaderProps) => {
  const { title, navigation, actions, tabs, breadcrumb, badge, status, meta, type } = props;

  const wrapperClasses = classNames({
    'PageHeader-wrapper': true,
    ['PageHeader-wrapper--withTabs']: tabs
  });

  const classes = classNames({
    PageHeader: true
  });

  return (
    <div className={wrapperClasses}>
      {breadcrumb && breadcrumb}
      <div className={classes}>
        <div className="PageHeader-titleWrapper">
          <Heading size="m">{title}</Heading>
          {badge}
        </div>
        {type === 'large' && navigation}
        {actions}
      </div>
      {(status || meta) && (
        <div className="PageHeader-statusWrapper">
          {status}
          {meta}
        </div>
      )}
      {type === 'small' && (
        <div className="PageHeader-navigationWrapper">{navigation}</div>)}
      {tabs && <div>{tabs}</div>}
    </div>
  );
};

PageHeader.defaultProps = {
  title: '',
  navigation: null,
  actions: null,
  tabs: null,
  breadcrumb: null,
  badge: null,
  status: null,
  meta: null,
  type: 'large'
};

export default PageHeader;
