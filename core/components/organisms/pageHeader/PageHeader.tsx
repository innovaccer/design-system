import * as React from 'react';
import classNames from 'classnames';
import { Heading } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';

export type HeaderType = 'small' | 'large';

export interface PageHeaderProps extends BaseProps {
  /**
   * Page title
   */
  title: string;
  /**
   * `Navigation` component
   */
  navigation?: React.ReactNode;
  /**
   * Actions composed of `Button` and meta data
   */
  actions?: React.ReactNode;
  /**
   * `Tab` component
   */
  tabs?: React.ReactNode;
  /**
   * `Breadcrumb` component
   */
  breadcrumbs?: React.ReactNode;
  /**
   * `Badge` component
   */
  badge?: React.ReactNode;
  /**
   * `Status` component
   */
  status?: React.ReactNode;
  /**
   * Meta data composed of `Text`
   */
  meta?: React.ReactNode;
  /**
   * Page header layout type
   */
  type?: HeaderType;
}

export const PageHeader = (props: PageHeaderProps) => {
  const { title, navigation, actions, tabs, breadcrumbs, badge, status, meta, type, className } = props;
  const baseProps = extractBaseProps(props);

  const wrapperClasses = classNames({
    'PageHeader-wrapper': true,
    ['PageHeader-wrapper--withTabs']: tabs
  }, className);

  const classes = classNames({
    PageHeader: true
  });

  return (
    <div {...baseProps} className={wrapperClasses}>
      {breadcrumbs && breadcrumbs}
      <div className={classes}>
        <div className="PageHeader-titleWrapper">
          <Heading>{title}</Heading>
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
  breadcrumbs: null,
  badge: null,
  status: null,
  meta: null,
  type: 'large'
};

export default PageHeader;
