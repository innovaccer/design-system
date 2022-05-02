import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export interface OverlayHeaderProps extends BaseProps {
    heading?: string;
    onClose?: (event: React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
    subHeading?: string;
    backButton?: boolean;
    backButtonCallback?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    backIcon?: boolean;
    backIconCallback?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    headingClass?: string;
}
export declare const OverlayHeader: {
    (props: OverlayHeaderProps): JSX.Element;
    displayName: string;
};
export default OverlayHeader;
