import * as React from 'react';
import { ButtonProps } from '@/index.type';
import { BaseProps } from '@/utils/types';
export interface OverlayFooterProps extends BaseProps {
    open?: boolean;
    children?: React.ReactNode;
    actions?: ButtonProps[];
}
export declare const OverlayFooter: {
    (props: OverlayFooterProps): React.JSX.Element;
    displayName: string;
};
export default OverlayFooter;
