import * as React from 'react';
import { Dimension } from '@/components/molecules/modal';
import { Appearance } from '@/components/atoms/button';
import { BaseProps } from '@/utils/types';
export interface DialogProps extends BaseProps {
    onClose: (event?: Event | React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
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
declare const Dialog: {
    (props: DialogProps): JSX.Element;
    displayName: string;
};
export default Dialog;
