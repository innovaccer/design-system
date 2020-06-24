import * as React from 'react';
import classNames from 'classnames';
import { Heading } from '@/index';

export type HeaderType = 'small' | 'large';

export interface PageHeaderProps {
  title: string;
  navigation?: React.ReactNode;
  actions?: React.ReactNode;
  tabs?: React.ReactNode;
  breadcrumb?: React.ReactNode;
  badge?: React.ReactNode;
  status?: React.ReactNode;
  meta?: React.ReactNode;
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
