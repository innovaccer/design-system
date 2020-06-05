import * as React from 'react';
import classNames from 'classnames';
import { Avatar, Text, Placeholder, PlaceholderParagraph, Icon, StatusHints } from '@/index';
import { StatusHintsProps } from '@/index.type';
import { ColumnSchema, RowData, GridSize } from './Grid';
import { translateData } from './utility';

export interface CellData {
  title: string;
  metaList?: string[];
  icon?: string;
  image?: string;
  firstName?: string;
  lastName?: string;
  statusAppearance?: StatusHintsProps['appearance'];
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
//       <Placeholder withImage={true} imageSize={'medium'} round={true} />
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
}

type CellProps = {
  loading?: boolean;
  cellData: CellData;
};

const renderTitle = (props: CellProps) => {
  const {
    cellData
  } = props;

  const children = cellData.title;

  if (children) {
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

  if (firstName && lastName) {
    const appearance = 'primary';
    const children = `${firstName}${lastName}`;
    return (
      <Avatar
        appearance={appearance}
      >
        {children}
      </Avatar>
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
    statusAppearance = 'default'
  } = cellData;

  const children = cellData.title;

  if (children) {
    return (
      <StatusHints
        appearance={statusAppearance}
      >
        {children}
      </StatusHints>
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

  if (schema.cellTemplate) return schema.cellTemplate(props);

  const data = translateData(schema, props.data);

  const {
    name,
    cellType = 'DEFAULT',
    align = 'left',
  } = schema;

  const cellData = data[name];

  const cellClass = classNames({
    ['GridCell']: true,
  });

  switch (cellType) {
    case 'DEFAULT':
      if (loading) {
        return (
          <Placeholder style={{ flexGrow: 1 }}>
            <PlaceholderParagraph length="medium" />
          </Placeholder>
        );
      }
      return (
        <div className={`${cellClass} GridCell--align-${align} GridCell--default`} >
          {renderTitle({ loading, cellData })}
        </div>
      );

    case 'WITH_META_LIST':
      if (loading) {
        return (
          <Placeholder style={{ flexGrow: 1 }}>
            <PlaceholderParagraph length="medium" />
            <PlaceholderParagraph length="large" />
          </Placeholder>
        );
      }
      return (
        <div className={`${cellClass} GridCell--align-${align} GridCell--metaList`} >
          <div className="GridCell-metaListWrapper">
            {renderTitle({ loading, cellData })}
            {renderMetaList({ loading, cellData })}
          </div>
        </div>
      );

    case 'AVATAR':
      if (loading) {
        return (
          <Placeholder withImage={true} imageSize={'medium'} round={true} />
        );
      }
      return (
        <div className={`${cellClass} GridCell--avatar`} >
          {size !== 'tight' && renderAvatar({ loading, cellData })}
        </div>
      );

    case 'AVATAR_WITH_TEXT':
      if (loading) {
        return (
          <Placeholder style={{ flexGrow: 1 }} withImage={true} imageSize={'medium'} round={true}>
            <PlaceholderParagraph length="medium" />
          </Placeholder>
        );
      }
      return (
        <div className={`${cellClass} GridCell--avatarWithText`} >
          {size !== 'tight' && renderAvatar({ loading, cellData })}
          {renderTitle({ loading, cellData })}
        </div>
      );

    case 'AVATAR_WITH_META_LIST':
      if (loading) {
        return (
          <Placeholder style={{ flexGrow: 1 }} withImage={true} imageSize={'medium'} round={true}>
            <PlaceholderParagraph length="medium" />
            <PlaceholderParagraph length="large" />
          </Placeholder>
        );
      }
      return (
        <div className={`${cellClass} GridCell--avatarWithText`} >
          {size !== 'tight' && renderAvatar({ loading, cellData })}
          <div className="GridCell-metaListWrapper">
            {renderTitle({ loading, cellData })}
            {renderMetaList({ loading, cellData })}
          </div>
        </div>
      );

    case 'ICON':
      if (loading) {
        return (
          <Placeholder withImage={true} imageSize={'small'} round={true} />
        );
      }
      return (
        <div className={`${cellClass} GridCell--align-${align} GridCell--icon`} >
          {renderIcon({ loading, cellData })}
        </div>
      );

    case 'STATUS_HINT':
      if (loading) {
        return (
          <Placeholder style={{ flexGrow: 1 }} withImage={true} imageSize={'small'} round={true}>
            <PlaceholderParagraph length="medium" />
          </Placeholder>
        );
      }
      return (
        <div className={`${cellClass} GridCell--align-${align} GridCell--statusHint`} >
          {renderStatusHint({ loading, cellData })}
        </div>
      );
  }

  return null;
};

GridCell.displayName = 'GridCell';

export default GridCell;
