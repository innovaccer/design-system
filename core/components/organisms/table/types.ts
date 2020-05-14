export type Data = Record<string, any>;

export interface Schema {
  name: string;
  displayName: string;
  width: number;
}

export interface TableProps {
  data: Data[];
  schema: Schema[];
}