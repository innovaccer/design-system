import * as React from 'react';
import { Appearance } from "./Toast";
export interface Props {
    appearance?: Appearance;
    label: string;
    onClick?: (e: React.MouseEvent) => void;
}
declare const ActionButton: React.FunctionComponent<Props>;
export default ActionButton;
