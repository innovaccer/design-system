import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export interface BackdropProps extends BaseProps {
    open: boolean;
}
declare const Backdrop: {
    (props: BackdropProps): React.ReactPortal;
    displayName: string;
};
export default Backdrop;
