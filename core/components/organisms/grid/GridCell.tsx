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
  data: RowData;
  schema: ColumnSchema;
  loading: boolean;
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
  size: GridSize;
  rowIndex: number;
  colIndex: number;
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

  if (children) {
    if (tooltip) {
      return (
        <Tooltip tooltip={children} position={'top-start'}>
          <Text>{children}</Text>
        </Tooltip>
      );
    }
    return (
      <Text>{children}</Text>
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
          <Text key={index} appearance={'subtle'} small={true}>{list}</Text>
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

  const { firstName, lastName } = cellData;

  return (
    <Avatar firstName={firstName} lastName={lastName} />
  );

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
    statusAppearance = 'default'
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
    // rowIndex,
    loading,
  } = props;

  if (schema.cellRenderer) return schema.cellRenderer(props);

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
      if (loading) {
        return (
          <Placeholder withImage={false}>
            <PlaceholderParagraph length="medium" />
          </Placeholder>
        );
      }
      return (
        <div className={`${cellClass} GridCell--align-${align} GridCell--default`} >
          {renderTitle({ tooltip, cellData })}
        </div>
      );

    case 'WITH_META_LIST':
      if (loading) {
        return (
          <Placeholder withImage={false}>
            <PlaceholderParagraph length="medium" />
            <PlaceholderParagraph length="large" size="xxs" />
          </Placeholder>
        );
      }
      return (
        <div className={`${cellClass} GridCell--align-${align} GridCell--metaList`} >
          <div className="GridCell-metaListWrapper">
            {renderTitle({ tooltip, cellData })}
            {renderMetaList({ cellData })}
          </div>
        </div>
      );

    case 'AVATAR':
      if (loading) {
        return (
          <Placeholder imageSize={'medium'} round={true} />
        );
      }
      return (
        <div className={`${cellClass} GridCell--avatar`} >
          {size !== 'tight' && renderAvatar({ cellData })}
        </div>
      );

    case 'AVATAR_WITH_TEXT':
      if (loading) {
        return (
          <Placeholder imageSize={'medium'} round={true}>
            <span style={{ marginLeft: 'var(--spacing-m)' }}>
              <PlaceholderParagraph length="medium" />
            </span>
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
            <span style={{ marginLeft: 'var(--spacing-m)' }}>
              <PlaceholderParagraph length="medium" />
              <PlaceholderParagraph length="large" />
            </span>
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
          <Placeholder imageSize={'small'} round={true} />
        );
      }
      return (
        <div className={`${cellClass} GridCell--align-${align} GridCell--icon`} >
          {renderIcon({ cellData })}
        </div>
      );

    case 'STATUS_HINT':
      if (loading) {
        return (
          <Placeholder imageSize={'small'} round={true}>
            <PlaceholderParagraph length="medium" />
          </Placeholder>
        );
      }
      return (
        <div className={`${cellClass} GridCell--align-${align} GridCell--statusHint`} >
          {renderStatusHint({ cellData })}
        </div>
      );
  }

  return null;
};

GridCell.displayName = 'GridCell';

export default GridCell;
