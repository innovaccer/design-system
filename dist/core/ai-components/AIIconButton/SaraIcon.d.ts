import * as React from 'react';
import { TIconPosition, TSize2Hierarchy } from "../common.type";
interface SaraIconProp {
    size: TSize2Hierarchy;
    position: TIconPosition;
    disabled?: boolean;
}
export declare const SaraIcon: {
    (props: SaraIconProp): React.JSX.Element;
    defaultProps: {
        size: string;
        position: string;
    };
};
export default SaraIcon;
