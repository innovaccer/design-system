import { DropzoneProps } from "../../../index.type";
export interface DropzoneErrorProps {
    error: string;
    type: DropzoneProps['type'];
}
export declare const DropzoneError: {
    (props: DropzoneErrorProps): JSX.Element;
    displayName: string;
};
export default DropzoneError;
