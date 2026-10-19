import * as React from 'react';
import { TListboxSize } from "../../../../common.type";
import { BaseProps } from "../../../../utils/types";
declare type TagType = 'ul' | 'ol' | 'div' | 'nav';
export interface SelectionListProps extends BaseProps {
    children: React.ReactNode;
    size: TListboxSize;
    tagName: TagType;
    showDivider: boolean;
}
export declare const AvatarSelectionList: {
    (props: SelectionListProps): React.JSX.Element;
    defaultProps: {
        type: string;
        showDivider: boolean;
        size: string;
        tagName: string;
    };
};
export default AvatarSelectionList;
