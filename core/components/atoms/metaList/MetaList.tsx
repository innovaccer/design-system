import * as React from 'react';
import Meta, { MetaProps } from './Meta';
import { BaseProps, extractBaseProps } from '@/utils/types';

export interface MetaListProps extends BaseProps {
  /**
   * List of Meta
   */
  list: MetaProps[];
  /**
   * Left Seperator
   */
  seperator?: boolean;
}

export const MetaList = (props: MetaListProps) => {

  const { list, seperator } = props;
  const baseProps = extractBaseProps(props);

  return (
    <div {...baseProps} className={'MetaList'}>

      {seperator && (<span className={'MetaList-seperator MetaList-separator--left'} />)}

      {list.map((item, ind) => {
        const { label = '', icon } = item;
        const rightSeperator = ind === ((list.length) - 1) ? false : true;
        return (
          <span key={ind} className="MetaList-item">
            <Meta
              label={label}
              icon={icon}
            />
            {rightSeperator && (<span className={'MetaList-seperator'} />)}
          </span>
        );
      })}
    </div>
  );
};
MetaList.displayName = 'MetaList';
export default MetaList;
