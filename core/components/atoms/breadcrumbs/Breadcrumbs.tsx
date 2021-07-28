import * as React from 'react';
import classNames from 'classnames';
import Dropdown from '../dropdown';
import { Button, Link } from '@/index';
import { BaseProps, extractBaseProps } from '@/utils/types';

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
}

const renderLink = (item: Breadcrumb, onClick: BreadcrumbsProps['onClick']) => (
  <Link
    href={item.link}
    onClick={ev => {
      if (onClick) {
        ev.preventDefault();
        onClick(item.link);
      }
    }}
    appearance="subtle"
    size="tiny"
  >
    {item.label}
  </Link>
);

const renderDropdown = (list: BreadcrumbsProps['list'], onClick: BreadcrumbsProps['onClick']) => {
  const options = list.map(item => ({
    label: item.label,
    value: item.link
  }));

  const customTrigger = () => {
    return (
      <Button
        type="button"
        size="tiny"
        appearance="transparent"
        icon="more_horiz_filled"
        data-test="DesignSystem-Breadcrumbs--Button"
      />
    );
  };

  return (
    <Dropdown
      triggerSize={'tiny'}
      triggerOptions={{ customTrigger }}
      options={options}
      menu={true}
      onChange={selected => {
        if (onClick) {
          onClick(selected);
        }
      }}
    />
  );
};

export const Breadcrumbs = (props: BreadcrumbsProps) => {
  const {
    list,
    onClick,
    className,
  } = props;

  const baseProps = extractBaseProps(props);

  const BreadcrumbClass = classNames({
    ['Breadcrumbs']: true
  }, className);

  return (
    <div data-test="DesignSystem-Breadcrumbs" {...baseProps} className={BreadcrumbClass}>
      {list.length <= 4 ? (
        list.map((item, index) => {
          return (
            <div key={index} className="Breadcrumbs-item" data-test="DesignSystem-Breadcrumbs-item">
              <span className="Breadcrumbs-link">
                {renderLink(item, onClick)}
              </span>
              <span className="Breadcrumbs-itemSeparator">/</span>
            </div>
          );
        })
      ) : (
        <>
          <div className="Breadcrumbs-item" data-test="DesignSystem-Breadcrumbs-item">
            <span className="Breadcrumbs-link">
              {renderLink(list[0], onClick)}
            </span>
            <span className="Breadcrumbs-itemSeparator">/</span>
          </div>
          <div className="Breadcrumbs-dropdown">
            {renderDropdown(list.slice(1, list.length - 1), onClick)}
            <span className="Breadcrumbs-itemSeparator">/</span>
          </div>
          <div className="Breadcrumbs-item" data-test="DesignSystem-Breadcrumbs-item">
            <span className="Breadcrumbs-link">
              {renderLink(list[list.length - 1], onClick)}
            </span>
            <span className="Breadcrumbs-itemSeparator">/</span>
          </div>
        </>
      )
      }
    </div>
  );
};

export default Breadcrumbs;
