import * as React from 'react';
import { DropzoneProps } from "../../../index.type";
export interface DropzoneActiveProps {
    type: DropzoneProps['type'];
}
export declare const DropzoneActive: {
    (props: DropzoneActiveProps): React.JSX.Element;
    displayName: string;
};
export default DropzoneActive;
