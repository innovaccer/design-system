import * as React from 'react';
import classNames from 'classnames';
import { Heading, Row, Column } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';

export type navigationPositionType = 'center' | 'bottom';

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
   * `Stepper` component
   */
  stepper?: React.ReactNode;
  /**
   * Actions composed of `Button` and meta data
   */
  actions?: React.ReactNode;
  /**
   * `Tab` component
   */
  tabs?: React.ReactNode;
  /**
   * `Breadcrumbs` component
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
  navigationPosition: navigationPositionType;
  /**
   * provides a border at bottom
   */
  separator: boolean;
}

export const PageHeader = (props: PageHeaderProps) => {
  const {
    title,
    navigation,
    stepper,
    actions,
    tabs,
    breadcrumbs,
    badge,
    separator,
    status,
    meta,
    navigationPosition,
    className
  } = props;
  const baseProps = extractBaseProps(props);

  const wrapperClasses = classNames({
    'PageHeader-wrapper': true,
    ['PageHeader-wrapper--separator']: separator,
    ['PageHeader-wrapper--withTabs']: tabs
  }, className);

  const classes = classNames({
    PageHeader: true,
    ['d-none']: !badge && !title && (!navigation || (!!navigation && navigationPosition === 'bottom')) &&
     !stepper && !actions,
  });

  const renderCenter = () => {
    return navigation ? navigation : stepper;
  };

  return (
    <div {...baseProps} className={wrapperClasses}>
      {breadcrumbs}
      <div className={classes}>
        <Row>
          <Column size="4" sizeXL="4" sizeM="4">
            <div className="PageHeader-titleWrapper">
              <Heading className="PageHeader-title">{title}</Heading>
              {badge}
            </div>
          </Column>
          <Column size="4" sizeXL="4" sizeM="4">
            <div className="PageHeader-navigationWrapper">
              {(!breadcrumbs || navigationPosition === 'center') && renderCenter()}
            </div>
          </Column>
          <Column size="4" sizeXL="4" sizeM="4">
            {actions}
          </Column>
        </Row>
      </div>
      {(status || meta) && (
        <div className="PageHeader-statusWrapper">
          {status}
          {meta}
        </div>
      )}
      {breadcrumbs && navigationPosition === 'bottom' && (
        <div className="PageHeader-navigationWrapper">{renderCenter()}</div>)}
      {tabs && <div>{tabs}</div>}
    </div>
  );
};

PageHeader.defaultProps = {
  navigationPosition: 'center',
  separator: true
};

export default PageHeader;
