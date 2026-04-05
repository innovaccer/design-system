import * as React from 'react';
import { BaseProps, OmitNativeProps } from '@/utils/types';
type LinkTarget = '_blank' | '_self' | '_parent' | '_top';
type LinkAppearance = 'default' | 'subtle';
type LinkSize = 'regular' | 'tiny';
export type LinkProps = {
    id?: string;
    appearance?: LinkAppearance;
    size?: LinkSize;
    disabled?: boolean;
    href?: string;
    target?: LinkTarget;
    rel?: string;
    download?: string;
    hreflang?: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    children: React.ReactNode;
} & BaseProps & OmitNativeProps<HTMLLinkElement, 'onClick'>;
export declare const Link: {
    (props: LinkProps): React.JSX.Element;
    displayName: string;
};
export default Link;
