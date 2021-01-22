import * as React from "react";
import { Schema } from "../../organisms/grid";

export const colorSchema: Schema = [
  {
    name: "token",
    displayName: "Token",
    width: "33.3%",
    resizable: true,
    sorting: false,
  },
  {
    name: "value",
    displayName: "Value",
    width: "33.3%",
    resizable: true,
    sorting: false,
  },
  {
    name: "preview",
    displayName: "Preview",
    width: "33.3%",
    resizable: true,
    sorting: false,
    cellRenderer: (props: any) => {
      return (
        <div
          style={{
            backgroundColor: `${`var(${props.data.token})`}`,
            padding: "var(--spacing)",
          }}
        ></div>
      );
    },
  },
];

export const spaceSchema: Schema = [
  {
    name: "token",
    displayName: "Token",
    width: "50%",
    resizable: true,
    sorting: false,
  },
  {
    name: "value",
    displayName: "Value",
    width: "50%",
    resizable: true,
    sorting: false,
  },
];