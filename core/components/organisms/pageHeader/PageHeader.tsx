import * as React from 'react';
import classNames from 'classnames';
import { Divider } from '@/index';
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
  /**
   * Accessible label for the page header region
   */
  'aria-label'?: string;
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
    'aria-label': ariaLabel,
  } = props;
  const baseProps = extractBaseProps(props);

  const isLevel1 = !!(breadcrumbs || button);

  const wrapperClasses = classNames(
    {
      [styles['PageHeader-wrapper']]: true,
      [styles['PageHeader-wrapper--withTabs']]: tabs,
      [styles['PageHeader-wrapper--level1']]: isLevel1,
      [styles['PageHeader-wrapper--withActions']]: !!actions,
    },
    className
  );

  const hasCenterNav = !!(navigation || stepper) && navigationPosition === 'center';

  const classes = classNames(styles.PageHeader);

  const rowClasses = classNames(styles['PageHeader-row'], {
    [styles['PageHeader-row--withCenter']]: hasCenterNav,
  });

  const centerNavProps = { navigationPosition, navigation, stepper };

  return (
    <div data-test="DesignSystem-PageHeader">
      <div {...baseProps} className={wrapperClasses} aria-label={ariaLabel}>
        {breadcrumbs && (
          <div className="pl-6" data-test="DesignSystem-PageHeader--Breadcrumbs">
            {breadcrumbs}
          </div>
        )}
        <div className="d-flex pl-6">
          <BackButton button={button} />
          <div className={classes}>
            <div className={rowClasses}>
              <div className={styles['PageHeader-group--title']}>
                <Title badge={badge} title={title} />
                <Status status={status} meta={meta} />
              </div>
              <CenterNav {...centerNavProps} />
              <Action actions={actions} navigation={navigation} stepper={stepper} />
            </div>
          </div>
        </div>

        <div className={classNames('pl-3', styles['PageHeader-bottom'])}>
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
