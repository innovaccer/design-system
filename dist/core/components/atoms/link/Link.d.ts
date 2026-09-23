import * as React from 'react';
import { BaseProps, OmitNativeProps } from "../../../utils/types";
declare type LinkTarget = '_blank' | '_self' | '_parent' | '_top';
declare type LinkAppearance = 'default' | 'subtle';
declare type LinkSize = 'regular' | 'tiny';
export interface LinkProps extends BaseProps, OmitNativeProps<HTMLAnchorElement, 'onClick'> {
    id?: string;
    appearance: LinkAppearance;
    size: LinkSize;
    disabled: boolean;
    href?: string;
    target?: LinkTarget;
    rel?: string;
    download?: string;
    hreflang?: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
    onKeyDown?: React.KeyboardEventHandler<HTMLAnchorElement | HTMLButtonElement>;
    children: React.ReactNode;
    tooltip?: string;
}
export declare const Link: {
    (props: LinkProps): React.JSX.Element;
    displayName: string;
    defaultProps: {
        appearance: string;
        size: string;
        disabled: boolean;
    };
};
export default Link;
