import * as React from 'react';
export declare type LinkTarget = '_blank' | '_self' | '_parent' | '_top';
export interface LinkProps {
    id?: string;
    href?: string;
    target?: LinkTarget;
    rel?: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    children?: React.ReactNode;
}
export declare const Link: React.FunctionComponent<LinkProps>;
export default Link;
