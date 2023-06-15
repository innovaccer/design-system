import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export interface OverlayBodyProps extends BaseProps {
    children: React.ReactNode;
}
export declare const OverlayBody: {
    (props: OverlayBodyProps): JSX.Element;
    defaultProps: {
        stickFooter: boolean;
        withFooter: boolean;
    };
    displayName: string;
};
export default OverlayBody;
