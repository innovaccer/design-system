import * as React from 'react';
import { BaseProps } from "../../../utils/types";
export declare type LinkTarget = '_blank' | '_self' | '_parent' | '_top';
export interface LinkProps extends BaseProps {
    id?: string;
    href?: string;
    target?: LinkTarget;
    rel?: string;
    download?: string;
    hreflang?: string;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    children?: React.ReactNode;
}
export declare const Link: React.FunctionComponent<LinkProps>;
export default Link;
