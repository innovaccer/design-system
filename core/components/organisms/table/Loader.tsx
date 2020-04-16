import * as React from 'react';
import Placeholder from '@/components/molecules/placeholder';
import PlaceholderParagraph from '@/components/atoms/placeholderParagraph';
import { Size } from '@/components/atoms/placeholderImage';
import { ILoaderSchema, ISchema } from './interfaces';

interface Props {
  loaderSchema?: ILoaderSchema[];
  schema?: ISchema[];
  rows?: number;
  rowHeight?: number;
  style?: React.CSSProperties;
  className: string;
}

class Loader extends React.PureComponent<Props> {
  defaultLoaderSchema: ILoaderSchema[] = Array(10).fill({
    width: 100,
    withImage: false,
    round: false,
    imageSize: 'small',
  });

  getLoaderRows = (rows: number, height: number, loadingSchema: ILoaderSchema[], schema: ISchema[]) => {
    const columnLength = schema ? schema.length : loadingSchema.length;
    const list = Array(rows).fill(0);
    const column = Array(columnLength).fill(0);

    return list.map((_, i) => (
      <div className="loader-row" key={i} style={{ height }}>
        {column.map((col, j) => {
          const {
            withImage = false,
            round = false,
            imageSize = 'small',
          } = loadingSchema[j];

          const { width = 100 } = schema ? schema[j] : loadingSchema[j];

          return (
            <Placeholder
              key={`${col}-${j}`}
              style={{ width }}
              withImage={withImage}
              round={round}
              imageSize={imageSize as Size}
            >
              <PlaceholderParagraph />
            </Placeholder>
          );
        })}
      </div>
    ));
  }

  render() {
    const { rows, rowHeight, loaderSchema, schema, ...rest } = this.props;
    const loadingSchema = loaderSchema ? loaderSchema : this.defaultLoaderSchema;
    return (
      <div {...rest}>
        {this.getLoaderRows(rows!, rowHeight!, loadingSchema, schema!)}
      </div>
    );
  }

  static defaultProps = {
    rowHeight: 50,
    rows: 20,
  };
}

export default Loader;
