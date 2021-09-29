import { Schema } from '../../organisms/grid';
import { GridCell, Button } from '@/index';
import * as React from 'react';

const copyCode = (val: string) => navigator.clipboard.writeText(val);

export const classSchema: Schema = [
  {
    name: 'marginClasses',
    displayName: 'Margin Classes',
    width: '33.3%',
    cellRenderer: (props: any) => {
      const { data: { marginClasses = '' } = {} } = props;
      return (
        <>
          <GridCell {...props} />
          <Button
            title="Copy marginClasses to clipboard"
            appearance="transparent"
            icon="content_copy"
            onClick={copyCode.bind(null, marginClasses)}
          />
        </>
      );
    },
  },
  {
    name: 'paddingClasses',
    displayName: 'Padding Classes',
    width: '33.3%',
    cellRenderer: (props: any) => {
      const { data: { paddingClasses = '' } = {} } = props;
      return (
        <>
          <GridCell {...props} />
          <Button
            title="Copy paddingClasses to clipboard"
            appearance="transparent"
            icon="content_copy"
            onClick={copyCode.bind(null, paddingClasses)}
          />
        </>
      );
    },
  },
  {
    name: 'pixel',
    displayName: 'Pixel values',
    width: '33.3%',
  },
];

export const sizeSchema: Schema = [
  {
    name: 'value',
    displayName: 'Value',
    width: '50%',
  },
  {
    name: 'properties',
    displayName: 'Properties',
    width: '50%',
  },
];
