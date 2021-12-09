import * as React from 'react';
import { BaseProps } from "../../../utils/types";
import { AccentAppearance } from "../../../common.type";
export interface PillsProps extends BaseProps {
    appearance: AccentAppearance;
    subtle?: boolean;
    children: React.ReactText;
}
export declare const Pills: {
    (props: PillsProps): JSX.Element;
    displayName: string;
    defaultProps: {
        appearance: string;
    };
};
export default Pills;
