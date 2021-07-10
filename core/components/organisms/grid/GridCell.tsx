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

// export interface ImageProps {
//   src: string;
//   size?: number;
// }

// export interface StatusProps extends PartialCellProps {
//   appearanceMapper?: GridProps['statusMapper'];
// }

export interface PartialCellProps {
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
  loading?: boolean;
  /**
   * Expanded state of row
   */
  expanded?: boolean;
}

// export const Image = (props: ImageProps) => {
//   const {
//     src,
//     size
//   } = props;

//   const style = {
//     height: `${size}px`,
//     width: `${size}px`,
//   };

//   return (
//     <img className="Image" src={src} style={style} />
//   );
// };

// const ImageCell = (props: PartialCellProps) => {
//   const {
//     schema,
//     loading
//   } = props;

//   const src = schema.image;
//   const size = 32;

//   if (loading) {
//     return (
//       <Placeholder imageSize={'medium'} round={true} />
//     );
//   }

//   return (
//     <Image
//       src={src || ''}
//       size={size}
//     />
//   );
// };

export interface GridCellProps extends PartialCellProps {
  /**
   * Grid size
   */
  size?: GridSize;
  /**
   * Row index for cell
   */
  rowIndex?: number;
  /**
   * Column index for cell
   */
  colIndex?: number;
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

  const { title, icon } = cellData;
  const iconName = icon || title;
  if (iconName) {
    return (
      <Icon name={iconName} />
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

export const GridCell = React.memo((props: GridCellProps) => {
  const {
    size,
    schema,
    // rowIndex,
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

  const cellClass = classNames({
    ['GridCell']: true,
  });

  switch (cellType) {
    case 'DEFAULT':
      return (
        <div className={`${cellClass} GridCell--align-${align} GridCell--default`} >
          {loading ? (
            <PlaceholderParagraph length="medium" />
          ) : (
              renderTitle({ tooltip, cellData })
            )
          }
        </div>
      );

    case 'WITH_META_LIST':
      return (
        <div className={`${cellClass} GridCell--metaList`} >
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
            )
          }
        </div>
      );

    case 'AVATAR':
      if (loading) {
        return (
          <Placeholder className={`GridCell--align-${align}`} imageSize={'medium'} round={true} />
        );
      }
      return (
        <div className={`${cellClass} GridCell--align-${align} GridCell--avatar`} >
          {size !== 'tight' && renderAvatar({ cellData })}
        </div>
      );

    case 'AVATAR_WITH_TEXT':
      if (loading) {
        return (
          <Placeholder imageSize={'medium'} round={true}>
            <PlaceholderParagraph className="ml-3" length="medium" />
          </Placeholder>
        );
      }
      return (
        <div className={`${cellClass} GridCell--avatarWithText`} >
          {size !== 'tight' && renderAvatar({ cellData })}
          {renderTitle({ tooltip, cellData })}
        </div>
      );

    case 'AVATAR_WITH_META_LIST':
      if (loading) {
        return (
          <Placeholder imageSize={'medium'} round={true}>
            <PlaceholderParagraph className="ml-3" length="medium" />
            <PlaceholderParagraph className="ml-3" length="large" />
          </Placeholder>
        );
      }
      return (
        <div className={`${cellClass} GridCell--avatarWithText`} >
          {size !== 'tight' && renderAvatar({ cellData })}
          <div className="GridCell-metaListWrapper">
            {renderTitle({ tooltip, cellData })}
            {renderMetaList({ cellData })}
          </div>
        </div>
      );

    case 'ICON':
      if (loading) {
        return (
          <Placeholder className={`GridCell--align-${align}`} imageSize={'small'} round={true} />
        );
      }
      return (
        <div className={`${cellClass} GridCell--align-${align} GridCell--icon`} >
          {renderIcon({ cellData })}
        </div>
      );

    case 'STATUS_HINT':
      return (
        <div className={`${cellClass} GridCell--align-${align} GridCell--statusHint`} >
          {loading ? (
            <Placeholder className="w-75 flex-grow-0" imageSize={'small'} round={true}>
              <PlaceholderParagraph length="large" />
            </Placeholder>
          ) : (
              renderStatusHint({ cellData })
            )
          }
        </div>
      );
  }

  return null;
});

GridCell.displayName = 'GridCell';

export default GridCell;
