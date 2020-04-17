import * as React from 'react';
import { Dimension } from '@/components/molecules/modal';
import { Appearance } from '@/components/atoms/button';
export interface DialogProps {
    onClose: (reason?: string, event?: Event | React.MouseEvent<HTMLElement, MouseEvent>) => void;
    closeOnEscape?: boolean;
    dimension?: Dimension;
    open: boolean;
    heading?: string;
    icon?: string;
    title?: string;
    description?: string;
    primaryButtonLabel: string;
    primaryButtonAppearance?: Appearance;
    primaryButtonCallback: () => void;
    secondaryButtonLabel: string;
    secondaryButtonAppearance?: Appearance;
    secondaryButtonCallback: () => void;
}
declare const Dialog: React.FunctionComponent<DialogProps>;
export default Dialog;
