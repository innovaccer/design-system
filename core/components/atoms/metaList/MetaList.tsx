import * as React from 'react';
import classNames from 'classnames';
import Meta, { MetaProps } from './Meta';
import { Icon } from '@/index';
import { IconProps, TextProps } from '@/index.type';
import { BaseProps, extractBaseProps } from '@/utils/types';
import styles from '@css/components/metaList.module.css';

export type MetaSize = 'small' | 'regular';
export interface MetaListProps extends BaseProps {
  /**
   * <pre style="font-family: monospace; font-size: 13px; background: #f8f8f8">
   * MetaProps:
   * {
   *   label: string;
   *   icon?: string;
   *   iconType?: 'rounded' | 'outlined'
   * }
   * </pre>
   *
   * | Name | Description | Default |
   * | --- | --- | --- |
   * | label | Label of Meta component |  |
   * | icon | Icon of Meta component | |
   * | iconType | Set type of Icon | |
   *
   */
  list: MetaProps[];
  /**
   * Shows left seperator
   */
  seperator?: boolean;
  /**
   * **SOON TO BE DEPRECATED**
   * Color of seperator
   */
  seperatorAppearance: IconProps['appearance'];
  /**
   * **SOON TO BE DEPRECATED**
   * Appearance of icon in `Meta` component
   */
  iconAppearance: IconProps['appearance'];
  /**
   * **SOON TO BE DEPRECATED**
   * Appearance of label in `Meta` component
   */
  labelAppearance: TextProps['appearance'];
  /**
   * Size of Meta List
   */
  size?: MetaSize;
}

export const MetaList = (props: MetaListProps) => {
  const { list, seperator, className, size } = props;

  const baseProps = extractBaseProps(props);

  const MetaClass = classNames(
    {
      [styles['MetaList']]: true,
    },
    className
  );

  const SeperatorClass = classNames({
    [styles['MetaList-seperator']]: true,
  });

  const LeftSeperatorClass = classNames({
    [styles['MetaList-seperator']]: true,
    [styles['MetaList-seperator--left']]: true,
  });

  return (
    <div data-test="DesignSystem-MetaList" {...baseProps} className={MetaClass}>
      {seperator && (
        <Icon
          data-test="DesignSystem-MetaList--Seperator"
          name="fiber_manual_record"
          size={8}
          className={LeftSeperatorClass}
          appearance="disabled"
        />
      )}

      {list.map((item, ind) => {
        const { label = '', icon, iconType } = item;
        const rightSeperator = ind !== list.length - 1;

        return (
          <span key={ind} className={styles['MetaList-item']}>
            <Meta size={size} label={label} icon={icon} iconType={iconType} />
            {rightSeperator && (
              <Icon
                data-test="DesignSystem-MetaList--rightSeperator"
                name="fiber_manual_record"
                size={8}
                className={SeperatorClass}
                appearance="disabled"
              />
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
  iconAppearance: 'subtle',
  labelAppearance: 'subtle',
  size: 'regular',
};

export default MetaList;
