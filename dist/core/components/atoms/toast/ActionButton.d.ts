import * as React from 'react';
import { Appearance } from "./Toast";
export interface Props {
    appearance: Appearance;
    label: string;
    onClick?: (e: React.MouseEvent) => void;
}
declare const ActionButton: {
    (props: Props): JSX.Element;
    displayName: string;
    defaultProps: {
        appearance: string;
    };
};
export default ActionButton;
