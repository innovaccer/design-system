import * as React from 'react';
import { ModalProps, ModalHeaderProps, ButtonProps } from '@/index.type';
import { BaseProps } from '@/utils/types';
export type DialogProps = {
    onClose: (event?: Event | React.MouseEvent<HTMLElement, MouseEvent>, reason?: string) => void;
    dimension?: ModalProps['dimension'];
    open: boolean;
    heading: ModalHeaderProps['heading'];
    title?: string;
    description?: string;
    primaryButtonLabel: string;
    primaryButtonAppearance?: ButtonProps['appearance'];
    primaryButtonCallback: () => void;
    secondaryButtonLabel: string;
    secondaryButtonAppearance?: ButtonProps['appearance'];
    secondaryButtonCallback: () => void;
} & BaseProps;
declare const Dialog: {
    (props: DialogProps): React.JSX.Element;
    displayName: string;
};
export default Dialog;
