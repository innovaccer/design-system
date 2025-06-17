import * as React from 'react';
import { BaseProps, OmitNativeProps } from '@/utils/types';
type LinkTarget = '_blank' | '_self' | '_parent' | '_top';
type LinkAppearance = 'default' | 'subtle';
type LinkSize = 'regular' | 'tiny';
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
    (props: LinkProps): React.JSX.Element;
    displayName: string;
    defaultProps: {
        appearance: string;
        size: string;
        disabled: boolean;
    };
};
export default Link;
