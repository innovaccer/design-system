import * as React from 'react';
import classNames from 'classnames';
import { Avatar, Text, Placeholder, PlaceholderParagraph, Icon, StatusHint, Tooltip } from '@/index';
import { StatusHintProps } from '@/index.type';
import { ColumnSchema, RowData, GridSize } from './Grid';
import { translateData } from './utility';

export interface CellData {
  title: string;
  metaList?: string[];
  icon?: string;
  image?: string;
  firstName?: string;
  lastName?: string;
  statusAppearance?: StatusHintProps['appearance'];
}

export interface GridCellProps {
  /**
   * Grid size
   */
  size: GridSize;
  /**
   * Row index for cell
   */
  rowIndex: number;
  /**
   * Column index for cell
   */
  colIndex: number;
  /**
   * Row data
   */
  data: RowData;
  /**
   * Column schema
   */
  schema: ColumnSchema;
  /**
   * Loading state of cell
   */
  loading: boolean;
  /**
   * Expanded state of row
   */
  expanded?: boolean;
}

type CellProps = {
  tooltip?: boolean;
  cellData: CellData;
};

const renderTitle = (props: CellProps) => {
  const {
    tooltip,
    cellData
  } = props;

  const children = cellData.title;

  if (children !== undefined && children !== null) {
    if (tooltip) {
      return (
        <Tooltip tooltip={children} position={'top-start'} triggerClass="w-100 overflow-hidden">
          <Text className="w-100 ellipsis">{children}</Text>
        </Tooltip>
      );
    }
    return (
      <Text className="w-100 ellipsis">{children}</Text>
    );
  }

  return null;
};

const renderMetaList = (props: CellProps) => {
  const {
    cellData
  } = props;

  const {
    metaList
  } = cellData;

  if (metaList) {
    return (
      <div className="GridCell-metaList">
        {metaList.map((list, index) => (
          <Text key={index} className="ellipsis" appearance={'subtle'} size="small">{list}</Text>
        ))}
      </div>
    );
  }

  return null;
};

const renderAvatar = (props: CellProps) => {
  const {
    cellData
  } = props;

  const { firstName, lastName, title } = cellData;

  if (firstName || lastName) {
    return (
      <Avatar className="mr-5" firstName={firstName} lastName={lastName} />
    );
  }
  if (title) {
    return (
      <Avatar className="mr-5">{title}</Avatar>
    );
  }

  return null;
};

const renderIcon = (props: CellProps) => {
  const {
    cellData
  } = props;

  const { icon } = cellData;
  if (icon) {
    return (
      <Icon name={icon} />
    );
  }

  return null;
};

const renderStatusHint = (props: CellProps) => {
  const {
    cellData
  } = props;

  const {
    statusAppearance
  } = cellData;

  const children = cellData.title;

  if (children) {
    return (
      <StatusHint
        appearance={statusAppearance}
      >
        {children}
      </StatusHint>
    );
  }

  return null;
};

export const GridCell = (props: GridCellProps) => {
  const {
    size,
    schema,
    loading,
  } = props;

  const data = !loading ? translateData(schema, props.data) : {};

  const {
    name,
    cellType = 'DEFAULT',
    align = 'left',
    tooltip
  } = schema;

  const cellData = data[name];

  const wrapper = React.useCallback((className: string, children: React.ReactNode) => {
    const classes = classNames({
      ['GridCell']: true,
    }, className);

    return (
      <div data-test="DesignSystem-GridCell" className={classes}>
        {children}
      </div>
    );
  }, []);

  switch (cellType) {
    case 'DEFAULT':
      return wrapper(`GridCell--${align}Align GridCell--default`, (
        <>
          {loading ? (
            <PlaceholderParagraph length="medium" />
          ) : (
            renderTitle({ tooltip, cellData })
          )}
        </>
      ));

    case 'WITH_META_LIST':
      return wrapper('GridCell--metaList', (
        <>
          {loading ? (
            <>
              <PlaceholderParagraph length="medium" />
              <PlaceholderParagraph length="large" size="xxs" />
            </>
          ) : (
            <>
              {renderTitle({ tooltip, cellData })}
              {renderMetaList({ cellData })}
            </>
          )}
        </>
      ));

    case 'AVATAR':
      return wrapper(`GridCell--${align}Align GridCell--avatar`, (
        <>
          {loading ? (
            <Placeholder className={`GridCell--${align}Align`} imageSize={'medium'} round={true} />
          ) : (
            <>
              {size !== 'tight' && renderAvatar({ cellData })}
            </>
          )}
        </>
      ));

    case 'AVATAR_WITH_TEXT':
      return wrapper('GridCell--avatarWithText', (
        <>
          {loading ? (
            <Placeholder imageSize={'medium'} round={true}>
              <PlaceholderParagraph className="ml-3" length="medium" />
            </Placeholder>
          ) : (
            <>
              {size !== 'tight' && renderAvatar({ cellData })}
              {renderTitle({ tooltip, cellData })}
            </>
          )}
        </>
      ));

    case 'AVATAR_WITH_META_LIST':
      return wrapper('GridCell--avatarWithMetaList', (
        <>
          {loading ? (
            <Placeholder imageSize={'medium'} round={true}>
              <PlaceholderParagraph className="ml-3" length="medium" />
              <PlaceholderParagraph className="ml-3" length="large" />
            </Placeholder>
          ) : (
            <>
              {size !== 'tight' && renderAvatar({ cellData })}
              <div className="GridCell-metaListWrapper">
                {renderTitle({ tooltip, cellData })}
                {renderMetaList({ cellData })}
              </div>
            </>
          )}
        </>
      ));

    case 'ICON':
      return wrapper(`GridCell--${align}Align GridCell--icon`, (
        <>
          {loading ? (
            <Placeholder className={`GridCell--${align}Align`} imageSize={'small'} round={true} />
          ) : (
            renderIcon({ cellData })
          )}
        </>
      ));

    case 'STATUS_HINT':
      return wrapper(`GridCell--${align}Align GridCell--statusHint`, (
        <>
          {loading ? (
            <Placeholder className="w-75 flex-grow-0" imageSize={'small'} round={true}>
              <PlaceholderParagraph length="large" />
            </Placeholder>
          ) : (
            renderStatusHint({ cellData })
          )}
        </>
      ));
  }

  return null;
};

GridCell.displayName = 'GridCell';

export default GridCell;
