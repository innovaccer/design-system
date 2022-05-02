import * as React from 'react';
import { BaseProps, OmitNativeProps } from "../../../utils/types";
declare type LinkTarget = '_blank' | '_self' | '_parent' | '_top';
declare type LinkAppearance = 'default' | 'subtle';
declare type LinkSize = 'regular' | 'tiny';
export interface LinkProps extends BaseProps, OmitNativeProps<HTMLLinkElement, 'onClick'> {
    id?: string;
    appearance: LinkAppearance;
    size: LinkSize;
    disabled: boolean;
    href?: string;
    target?: LinkTarget;
    rel?: string;
    download?: string;
    hreflang?: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    children: React.ReactNode;
}
export declare const Link: {
    (props: LinkProps): JSX.Element;
    displayName: string;
    defaultProps: {
        appearance: string;
        size: string;
        disabled: boolean;
    };
};
export default Link;