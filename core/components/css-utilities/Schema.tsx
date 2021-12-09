import { Schema } from '../organisms/grid';
import * as React from 'react';
import { GridCell, Button } from '@/index';

const copyCode = (val: string) => navigator.clipboard.writeText(val);

const utilitiesSchema: Schema = [
  {
    name: 'className',
    displayName: 'ClassName',
    width: '50%',
    resizable: true,
    align: 'left',
    cellRenderer: (props: any) => {
      const { data: { className = '' } = {} } = props;
      return (
        <>
          <GridCell {...props} />
          <Button
            title="Copy className to clipboard"
            appearance="transparent"
            icon="content_copy"
            onClick={copyCode.bind(null, className)}
          />
        </>
      );
    },
  },
  {
    name: 'properties',
    displayName: 'Properties',
    width: '50%',
    resizable: true,
    align: 'left',
  },
];

export default utilitiesSchema;
