import * as React from 'react';
import classNames from 'classnames';
import { Button, Link, Tooltip, Dropdown } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';
import styles from '@css/components/breadcrumbs.module.css';

interface Breadcrumb {
  label: string;
  link: string;
}

export interface BreadcrumbsProps extends BaseProps {
  /**
   * List of `Breadcrumb` props
   *
   * <pre className="DocPage-codeBlock">
   * Breadcrumb: {
   *    label: string;
   *    link: string;
   * }
   * </pre>
   */
  list: Breadcrumb[];
  /**
   * onClick handler for `Breadcrumb`
   */
  onClick?: (link: string) => void;
  /**
   * Determines whether to show tooltip for label
   */
  showTooltip?: boolean;
}

interface renderLinkProps {
  item: Breadcrumb;
  onClick?: (link: string) => void;
}

interface renderItemProps {
  item: Breadcrumb;
  onClick?: (link: string) => void;
  index?: number;
  showTooltip?: boolean;
}

const RenderLink = ({ item, onClick, isCurrent }: renderLinkProps & { isCurrent?: boolean }) => {
  const onClickHandler = (ev: React.MouseEvent) => {
    if (onClick) {
      ev.preventDefault();
      onClick(item.link);
    }
  };

  const linkClassName = classNames({
    [styles['Breadcrumbs-link']]: true,
    'ellipsis--noWrap': true,
  });

  return (
    <Link
      className={linkClassName}
      data-test="DesignSystem-Breadcrumbs-link"
      href={item.link}
      onClick={onClickHandler}
      appearance="subtle"
      size="tiny"
      aria-current={isCurrent ? 'page' : undefined}
    >
      {item.label}
    </Link>
  );
};

const RenderItem = ({ item, onClick, index, showTooltip, isLast }: renderItemProps & { isLast?: boolean }) => {
  return (
    <li key={index} className={styles['Breadcrumbs-item']} data-test="DesignSystem-Breadcrumbs-item">
      {showTooltip ? (
        <Tooltip tooltip={item.label} position="bottom">
          <RenderLink item={item} onClick={onClick} isCurrent={isLast} />
        </Tooltip>
      ) : (
        <RenderLink item={item} onClick={onClick} isCurrent={isLast} />
      )}
      {!isLast && (
        <span className={styles['Breadcrumbs-itemSeparator']} aria-hidden="true">
          /
        </span>
      )}
    </li>
  );
};

const renderDropdown = (list: BreadcrumbsProps['list'], onClick: BreadcrumbsProps['onClick']) => {
  const options = list.map((item) => ({
    label: item.label,
    value: item.link,
  }));

  const customTrigger = () => {
    return (
      <Button
        type="button"
        size="tiny"
        appearance="transparent"
        icon="more_horiz_filled"
        largeIcon={true}
        className={styles['Breadcrumbs-Button']}
        data-test="DesignSystem-Breadcrumbs--Button"
        aria-label="More breadcrumbs"
      />
    );
  };

  return (
    <Dropdown
      className={styles['Breadcrumbs-dropdown']}
      triggerSize={'tiny'}
      triggerOptions={{ customTrigger }}
      options={options}
      menu={true}
      onChange={(selected) => {
        if (onClick) {
          onClick(selected);
        }
      }}
    />
  );
};

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  const { list, onClick, className, showTooltip } = props;

  const baseProps = extractBaseProps(props);

  const BreadcrumbClass = classNames(
    {
      [styles.Breadcrumbs]: true,
    },
    className
  );

  return (
    <nav
      data-test="DesignSystem-Breadcrumbs"
      {...baseProps}
      className={BreadcrumbClass}
      aria-label="Breadcrumb"
    >
      <ol className="d-flex list-unstyled m-0 p-0">
        {list.length <= 4 ? (
          list.map((item, index) => {
            return (
              <RenderItem
                key={index}
                item={item}
                onClick={onClick}
                showTooltip={showTooltip}
                isLast={index === list.length - 1}
              />
            );
          })
        ) : (
          <>
            <RenderItem item={list[0]} onClick={onClick} showTooltip={showTooltip} />
            <li className="d-flex align-items-center">
              {renderDropdown(list.slice(1, list.length - 1), onClick)}
              <span className={styles['Breadcrumbs-itemSeparator']} aria-hidden="true">
                /
              </span>
            </li>
            <RenderItem item={list[list.length - 1]} onClick={onClick} showTooltip={showTooltip} isLast={true} />
          </>
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
