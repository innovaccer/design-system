import * as React from 'react';
import { AccentAppearance } from '@/common.type';
import { BaseProps } from '@/utils/types';
export interface ChatAvatarProps {
    appearance?: AccentAppearance;
    firstName?: string;
    lastName?: string;
    role?: string;
    tabIndex?: number;
    icon?: React.ReactNode;
    image?: React.ReactNode;
}
export interface IncomingOptionProps extends BaseProps {
    children?: React.ReactNode;
    time?: string | React.ReactText;
    metaData?: string;
    actionBar?: () => JSX.Element;
    urgentMessage?: () => JSX.Element;
    avatarData?: ChatAvatarProps;
    showAvatar?: boolean;
}
export declare const IncomingBubble: {
    (props: IncomingOptionProps): React.JSX.Element;
    displayName: string;
};
export default IncomingBubble;
