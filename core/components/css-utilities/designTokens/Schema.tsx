import * as React from 'react';
import { Schema } from '../../organisms/grid';
import { GridCell, Button } from '@/index';

const copyCode = (val: string) => navigator.clipboard.writeText(val);

export const spaceSchema: Schema = [
  {
    name: 'token',
    displayName: 'Token',
    width: '50%',
    resizable: true,
    sorting: false,
    cellRenderer: (props: any) => {
      const { data: { token = '' } = {} } = props;
      return (
        <>
          <GridCell {...props} />
          <Button
            title="Copy token to clipboard"
            appearance="transparent"
            icon="content_copy"
            onClick={copyCode.bind(null, token)}
          />
        </>
      );
    },
  },
  {
    name: 'value',
    displayName: 'Value',
    width: '50%',
    resizable: true,
    sorting: false,
  },
];

export const getSchema = (property: string, text: string, classnames?: string, css?: object) => {
  return [
    {
      name: 'token',
      displayName: 'Token',
      width: '33.3%',
      resizable: true,
      sorting: false,
      cellRenderer: (props: any) => {
        const { data: { token = '' } = {} } = props;
        return (
          <>
            <GridCell {...props} />
            <Button
              title="Copy token to clipboard"
              appearance="transparent"
              icon="content_copy"
              onClick={copyCode.bind(null, token)}
            />
          </>
        );
      },
    },
    {
      name: 'value',
      displayName: 'Value',
      width: '33.3%',
      resizable: true,
      sorting: false,
    },
    {
      name: 'preview',
      displayName: 'Preview',
      width: '33.3%',
      resizable: true,
      sorting: false,
      cellRenderer: (props: any) => {
        const styleObj: object = Object.assign(
          {
            [`${property}`]: `${`var(${props.data.token}) !important`}`,
          },
          css
        );
        return (
          <div style={styleObj} className={`${classnames} ${props.data.setBgColor === undefined ? '' : 'setBgColor'}`}>
            {text}
          </div>
        );
      },
    },
  ];
};
