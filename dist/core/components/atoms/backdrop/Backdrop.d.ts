import * as React from 'react';
export interface BackdropProps {
    open: boolean;
}
declare const Backdrop: {
    (props: BackdropProps): React.ReactPortal;
    displayName: string;
};
export default Backdrop;
