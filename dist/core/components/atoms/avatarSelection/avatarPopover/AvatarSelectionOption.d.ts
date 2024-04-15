import * as React from 'react';
import { BaseProps } from "../../../../utils/types";
export declare type ItemTagType = 'li' | 'div';
export interface SelectionOptionProps extends BaseProps {
    children: React.ReactNode;
    value?: any;
    tagName: ItemTagType;
}
export declare const AvatarSelectionOption: {
    (props: SelectionOptionProps): JSX.Element;
    defaultProps: {
        tagName: string;
    };
};
export default AvatarSelectionOption;
