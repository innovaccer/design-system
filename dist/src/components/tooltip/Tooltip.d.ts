import * as React from 'react';
import { PositionType } from "../../index";
import { BaseProps } from "../../utils/types";
export interface TooltipProps extends BaseProps {
    text: string;
    children: React.ReactElement;
    placement?: PositionType;
    hoverable?: boolean;
}
export declare const Tooltip: {
    (props: TooltipProps): JSX.Element;
    defaultProps: {
        placement: string;
    };
};
export default Tooltip;
