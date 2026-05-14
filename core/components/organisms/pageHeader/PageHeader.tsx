import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
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

type StackedMode = 'full' | 'center-wrapped' | 'all-stacked';

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

  const rowRef = useRef<HTMLDivElement>(null);
  const [stackedMode, setStackedMode] = useState<StackedMode>('full');

  useEffect(() => {
    if (!hasCenterNav) {
      setStackedMode('full');
      return;
    }

    const row = rowRef.current;
    if (!row) return;

    const measure = () => {
      const titleEl = row.querySelector<HTMLElement>('[data-group="title"]');
      const centerEl = row.querySelector<HTMLElement>('[data-group="center"]');
      const actionsEl = row.querySelector<HTMLElement>('[data-group="actions"]');
      if (!titleEl) return;

      // Strip stacked classes so elements return to natural grid positions for measurement
      const cwClass = styles['PageHeader-row--centerWrapped'];
      const asClass = styles['PageHeader-row--allStacked'];
      const hadCW = row.classList.contains(cwClass);
      const hadAS = row.classList.contains(asClass);
      row.classList.remove(cwClass, asClass);

      // Disable internal flex-wrap on actions so its bounding rect reflects natural unwrapped width.
      // Without this, actions wraps silently inside its grid column and getBoundingClientRect never
      // exceeds the column boundary, so overflow goes undetected.
      if (actionsEl) actionsEl.style.flexWrap = 'nowrap';

      const rowRect = row.getBoundingClientRect();
      const titleRect = titleEl.getBoundingClientRect();
      const actionsRect = actionsEl?.getBoundingClientRect();
      const centerRect = centerEl?.getBoundingClientRect();

      if (actionsEl) actionsEl.style.flexWrap = '';

      // Restore immediately before any paint
      if (hadCW) row.classList.add(cwClass);
      if (hadAS) row.classList.add(asClass);

      const titleActionsCollide = !!actionsRect && titleRect.right > actionsRect.left;
      // Actions wider than its grid column spills beyond the row boundary
      const actionsOverflow = !!actionsRect && actionsRect.right > rowRect.right + 1;
      const centerCollidesLeft = !!centerRect && centerRect.left < titleRect.right;
      const centerCollidesRight = !!centerRect && !!actionsRect && centerRect.right > actionsRect.left;

      if (titleActionsCollide) {
        setStackedMode('all-stacked');
      } else if (centerCollidesLeft || centerCollidesRight || actionsOverflow) {
        setStackedMode('center-wrapped');
      } else {
        setStackedMode('full');
      }
    };

    if (!window.ResizeObserver) return;

    const observer = new window.ResizeObserver(measure);
    observer.observe(row);
    measure();

    return () => observer.disconnect();
  }, [hasCenterNav, navigation, stepper, actions]);

  const rowClasses = classNames(styles['PageHeader-row'], {
    [styles['PageHeader-row--withCenter']]: hasCenterNav,
    [styles['PageHeader-row--centerWrapped']]: hasCenterNav && stackedMode === 'center-wrapped',
    [styles['PageHeader-row--allStacked']]: stackedMode === 'all-stacked',
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
            <div className={rowClasses} ref={rowRef}>
              <div className={styles['PageHeader-group--title']} data-group="title">
                <Title badge={badge} title={title} />
                <Status status={status} meta={meta} />
              </div>
              <CenterNav {...centerNavProps} />
              <Action actions={actions} navigation={navigation} stepper={stepper} />
            </div>
          </div>
        </div>

        {(tabs || (navigationPosition === 'bottom' && (navigation || stepper))) && (
          <div className={classNames('pl-3', styles['PageHeader-bottom'])}>
            {navigationPosition === 'bottom' && <Nav navigation={navigation} stepper={stepper} />}
            {tabs && <div data-test="DesignSystem-PageHeader--Tabs">{tabs}</div>}
          </div>
        )}
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
