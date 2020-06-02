import * as React from 'react';
import Text from '@/components/atoms/text';
import classNames from 'classnames';
import StatusHints from '@/components/atoms/statusHints';
import Avatar from '@/components/atoms/avatar';
import Dropdown from '@/components/atoms/dropdown';
import Input from '@/components/atoms/input';
import Icon from '@/components/atoms/icon';
import { Placeholder } from '@/index';
import { StateSchema, StateData, TableSize, TableProps } from './Table';
import PlaceholderParagraph from '@/components/atoms/placeholderParagraph';

export interface ImageProps {
  src: string;
  size?: number;
}

export interface StatusProps extends PartialCellProps {
  appearanceMapper?: TableProps['statusMapper'];
}

export interface PartialCellProps {
  data: StateData;
  schema: StateSchema;
  loading: boolean;
}

export const Image = (props: ImageProps) => {
  const {
    src,
    size
  } = props;

  const style = {
    height: `${size}px`,
    width: `${size}px`,
  };

  return (
    <img className="Image" src={src} style={style} />
  );
};

const ImageCell = (props: PartialCellProps) => {
  const {
    schema,
    loading
  } = props;

  const src = schema.image;
  const size = 32;

  if (loading) {
    return (
      <Placeholder withImage={true} imageSize={'medium'} round={true} />
    );
  }

  return (
    <Image
      src={src || ''}
      size={size}
    />
  );
};

const StatusCell = (props: StatusProps) => {
  const {
    loading,
    schema,
    data,
    appearanceMapper
  } = props;

  if (loading) {
    return (
      <Placeholder style={{ flexGrow: 1 }} withImage={true}>
        <PlaceholderParagraph length="small" />
      </Placeholder>
    );
  }

  const cellData = data[schema.name];
  if (cellData) {
    const { title } = cellData;
    const children = title ? title : cellData;
    const appearance = appearanceMapper ? appearanceMapper(children.toLowerCase()) : 'default';

    return (
      <StatusHints appearance={appearance}>
        {children}
      </StatusHints>
    );
  }

  return null;
};

export const AvatarCell = (props: PartialCellProps) => {
  const {
    schema,
    data,
    loading
  } = props;

  if (loading) {
    return (
      <Placeholder style={{ paddingLeft: 'var(--spacing)' }} withImage={true} imageSize={'medium'} round={true} />
    );
  }

  const cellData = data[schema.name];

  if (cellData) {
    const { firstName, lastName } = cellData;
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

export interface TableCellProps extends PartialCellProps {
  size: TableSize;
  rowIndex: number;
  statusMapper?: TableProps['statusMapper'];
}

function translateData(schema: StateSchema, data: StateData) {
  let newData = data;

  if (schema.translate) {
    const translatedData = schema.translate(data);
    newData = {
      ...newData,
      [schema.name]: typeof translatedData === 'object' ? {
        ...newData[schema.name],
        ...translatedData
      } : translatedData
    };
  }
  return newData;
}

export const TableCell = (props: TableCellProps) => {
  const {
    size,
    schema,
    // rowIndex,
    loading,
    statusMapper
  } = props;

  if (schema.cellTemplate) return schema.cellTemplate(props);

  const data = translateData(schema, props.data);

  const { name, avatar, icon, dropdown, input, align, image, status } = schema;
  const cellData = data[name] !== undefined ? data[name] : '';
  const { title, metaData } = cellData;

  const CellClass = classNames({
    ['TableCell-wrapper']: true,
    ['TableCell-avatarOnly']: avatar && !image,
    ['TableCell-imageOnly']: !avatar && image,
    [`TableCell--${align}`]: align && !avatar && !image,
  });

  const TableCellClass = classNames({
    ['TableCell']: true,
    ['TableCell-status']: status,
  });

  const TableCellWrapperClass = classNames({
    ['TableCell-textwrapper']: true,
    ['TableCell-textwrapper--image']: avatar || image,
  });

  const renderMetaData = () => {
    if (typeof metaData === 'string') {
      return (
        <Text appearance={'subtle'} small={true}>
          {metaData}
        </Text>
      );
    }
    return metaData;
  };

  const renderCellData = () => {
    return (
      <div className={CellClass}>
        {size !== 'tight' && image && (
          <span className="TableCell-image">
            <ImageCell
              schema={schema}
              data={data}
              loading={loading}
            />
          </span>
        )}
        {size !== 'tight' && avatar && (
          <AvatarCell
            schema={schema}
            data={data}
            loading={loading}
          />
        )}
        <div className={TableCellWrapperClass}>
          {loading ? (
            <Placeholder>
              <PlaceholderParagraph length="medium" />
            </Placeholder>
          ) : (
              <>
                <Text small={size === 'tight'}>
                  {title ? title : cellData}
                </Text>
                {size !== 'tight' && metaData && renderMetaData()}
              </>
            )
          }
        </div>
      </div>
    );
  };

  return (
    <div className={TableCellClass}>
      {icon && (
        <>
          {loading ? (
            <Placeholder withImage={true} />
          ) : (
              <Icon name={icon} size={20} />
            )
          }
        </>
      )}
      {dropdown && (
        <Dropdown {...dropdown} />
      )}
      {input && (
        <Input
          {...input}
        />
      )}
      {status && (
        <StatusCell
          schema={schema}
          data={data}
          loading={loading}
          appearanceMapper={statusMapper}
        />
      )}
      {!icon && !dropdown && !input && !status && renderCellData()}
    </div>
  );
};

TableCell.displayName = 'TableCell';

export default TableCell;
