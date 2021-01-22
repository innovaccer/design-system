import { Schema } from '../organisms/grid';

const utilitiesSchema: Schema = [
  {
    name: 'className',
    displayName: 'ClassName',
    width: "50%",
    resizable: true,
    align: 'left',
  },
  {
    name: 'properties',
    displayName: 'Properties',
    width: "50%",
    resizable: true,
    align: 'left',
  },
];

export default utilitiesSchema;
