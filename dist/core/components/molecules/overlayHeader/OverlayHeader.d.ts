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
    headingId?: string;
    headingAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
export declare const OverlayHeader: {
    (props: OverlayHeaderProps): React.JSX.Element;
    displayName: string;
};
export default OverlayHeader;
