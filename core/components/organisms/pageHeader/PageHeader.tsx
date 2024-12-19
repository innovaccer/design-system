import * as React from 'react';
import classNames from 'classnames';
import { Row, Column, Divider } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';
import { BackButton, Title, CenterNav, Nav, Action, Status } from './utils';
import styles from '@css/components/pageHeader.module.css';

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
   * `Button` component
   *  <br/>
   *  To be used on left side of title as a back button
   */
  button?: React.ReactNode;
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
    className,
    button,
  } = props;
  const baseProps = extractBaseProps(props);

  const wrapperClasses = classNames(
    {
      [styles['PageHeader-wrapper']]: true,
      [styles['PageHeader-wrapper--withTabs']]: tabs,
    },
    className
  );

  const classes = classNames(styles.PageHeader);

  const colSize = (navigation || stepper) && navigationPosition === 'center' ? '4' : actions ? '8' : '12';

  const centerNavProps = {
    colSize,
    breadcrumbs,
    navigationPosition,
    navigation,
    stepper,
  };

  const statusProps = {
    status,
    meta,
    navigationPosition,
    navigation,
    tabs,
  };

  return (
    <div data-test="DesignSystem-PageHeader">
      <div {...baseProps} className={wrapperClasses}>
        {breadcrumbs && (
          <div className="pl-6" data-test="DesignSystem-PageHeader--Breadcrumbs">
            {breadcrumbs}
          </div>
        )}
        <div className="d-flex pl-6">
          <BackButton button={button} />
          <div className={classes}>
            <Row className="w-100">
              <Column size={colSize} sizeXL={colSize} sizeM={colSize}>
                <Title badge={badge} title={title} />
              </Column>
              <CenterNav {...centerNavProps} />
              <Action actions={actions} navigation={navigation} stepper={stepper} />
            </Row>
            <Status {...statusProps} />
          </div>
        </div>

        <div className="pl-3">
          {navigationPosition === 'bottom' && <Nav navigation={navigation} stepper={stepper} />}
          {tabs && <div data-test="DesignSystem-PageHeader--Tabs">{tabs}</div>}
        </div>
      </div>
      {separator && <Divider appearance="header" />}
    </div>
  );
};

PageHeader.defaultProps = {
  navigationPosition: 'center',
  separator: true,
};

export default PageHeader;
