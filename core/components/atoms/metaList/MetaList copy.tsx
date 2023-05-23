import * as React from 'react';
import classNames from 'classnames';
import Meta, { MetaProps } from './Meta';
import { Icon } from '@/index';
import { IconProps, TextProps } from '@/index.type';
import { BaseProps, extractBaseProps } from '@/utils/types';

export interface MetaListProps extends BaseProps {
  /**
   * <pre style="font-family: monospace; font-size: 13px; background: #f8f8f8">
   * MetaProps:
   * {
   *   label: string;
   *   icon?: string;
   * }
   * </pre>
   *
   * | Name | Description | Default |
   * | --- | --- | --- |
   * | label | Label of Meta component |  |
   * | icon | Icon of Meta component | |
   *
   */
  list: MetaProps[];
  /**
   * Shows left seperator
   */
  seperator?: boolean;
  /**
   * Color of seperator
   */
  seperatorAppearance: IconProps['appearance'];
  /**
   * Appearance of icon in `Meta` component
   */
  iconAppearance: IconProps['appearance'];
  /**
   * Appearance of label in `Meta` component
   */
  labelAppearance: TextProps['appearance'];
}

export const MetaList = (props: MetaListProps) => {
  const { list, seperator, seperatorAppearance, iconAppearance, labelAppearance, className } = props;

  const baseProps = extractBaseProps(props);

  const MetaClass = classNames(
    {
      ['MetaList']: true,
    },
    className
  );

  const RightSeperatorClass = classNames({
    ['MetaList-seperator']: true,
    [`MetaList--${seperatorAppearance}`]: seperatorAppearance,
  });

  const LeftSeperatorClass = classNames({
    ['MetaList-seperator']: true,
    ['MetaList-seperator--left']: true,
    [`MetaList--${seperatorAppearance}`]: seperatorAppearance,
  });

  return (
    <div data-test="DesignSystem-MetaList" {...baseProps} className={MetaClass}>
      {seperator && <span className={LeftSeperatorClass} data-test="DesignSystem-MetaList--Seperator"></span>}

      {list.map((item, ind) => {
        const { label = '', icon } = item;
        const rightSeperator = ind !== list.length - 1;

        return (
          <span key={ind} className="MetaList-item">
            <Meta label={label} icon={icon} iconAppearance={iconAppearance} labelAppearance={labelAppearance} />
            {rightSeperator && (
              <span className={RightSeperatorClass} data-test="DesignSystem-MetaList--rightSeperator"></span>
            )}
          </span>
        );
      })}
    </div>
  );
};

MetaList.displayName = 'MetaList';

MetaList.defaultProps = {
  seperatorAppearance: 'disabled',
  iconAppearance: 'disabled',
  labelAppearance: 'subtle',
};

export default MetaList;
